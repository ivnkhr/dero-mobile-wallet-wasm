/* this file implements a web worker for our wallet */
// Copyright DERO Project under DERO license

importScripts('./wasm_exec.js', './deps/promise-worker.register.js', './error_reporter.js');

//
// Define your database
//




// some variables to easily pass state back to original
var id = "";
var output=222;
var busy = false;
var error_message;
var wallet_available = false;
var wallet_last_state = false; // used as an optimization
var wallet_version_string = "";
var locked_balance,unlocked_balance,total_balance;  // these variables are automatically updated from go side
var wallet_height,daemon_height;
var wallet_topo_height,daemon_topo_height;
var wallet_address ;
var random_i32_address,random_i32_address_paymentid;
var random_i8_address,random_i8_address_paymentid;
var tx_history;
var wallet_seed;
var wallet_list_loaded = false; // UNNEDED - Directly in main thread
var wallet_minimum_topo_height;
var wallet_initial_height;
var wallet_online; // whether the wallet is set to connect externally
var wallet_mixin;
var wallet_sync_time ; // wallet will try to sync after this many seconds
var wallet_fees_multiplier;
var wallet_daemon_address; // if null it's localhost:20206
var wallet_complete = true; // is wallet complete or partial (view only)
// partial wallets cannot send TX and do not have SEEDS ( it is invalid )


// these 4 are used while verifying address
var address_main,address_paymentid;
var address_valid, address_integrated;
var address_error;

// this is used while validating amount
var amount_valid;
var amount_error;

// paymentid is verified using regex itself

var password_error;

var transfer_error;
var transfer_txid;
var transfer_txhex;
var transfer_fee;
var transfer_amount;
var transfer_inputs_sum;
var transfer_change;

var relay_error;

var wallet_local_name  = "" ;  // this is set when wallet is created
var wallet_encrypted_dump; // will contain an encrypted Uint8Array array if successfull
var wallet_encrypted_error; // this will contain success

var wallet_body;

onmessage = function(oEvent) {
  if(oEvent.data.cmd == 'sql_retrieved_data'){
    wallet_body = oEvent.data;
  }
};
//postMessage("from worker to main");

// can be used to sleep eg await sleep(2000);;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchLocal(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest
    xhr.onload = function() {
      resolve(new Response(xhr.responseText, {status: xhr.status}))
    }
    xhr.onerror = function() {
      reject(new TypeError('Local request failed'))
    }
    xhr.open('GET', url)
    xhr.send(null)
  })
}

/*
function fetchAndInstantiate(url, importObject) {
    return fetch(url).then(response =>
                           response.arrayBuffer()
                          ).then(bytes =>
                                 WebAssembly.instantiate(bytes, importObject)
                                ).then(results =>
                                       results.instance
                                      ).catch(function(error) {
    //
    // Finally don't forget to catch any error
    // that could have happened anywhere in the
    // code blocks above.
    //
    alert("golang error while instantiate: " + error);
    console.log ("golang error while instantiate: " + error);
});
}

var go = new Go();
var mod = fetchAndInstantiate("wallet.wasm", go.importObject);
mod.then(function(instance) {
    console.log("running go");
    go.run(instance);
});*/

console.log('attempting to run GO');
var go = new Go();
/*
//var importObject = { imports: { imported_func: arg => console.log(arg) } };
let mod, inst;
WebAssembly.instantiateStreaming(fetch('wallet.wasm'), go.importObject)
.then(
  async result => {
    mod = result.module;
    inst = result.instance;
    console.log('running GO');
    await go.run(inst);
  }
);*/

var request;
request = new XMLHttpRequest();
request.open('GET', 'walletmobile.wasm');
request.responseType = 'arraybuffer';
request.send();

request.onload = function() {
  var bytes = request.response;
  WebAssembly.instantiate(bytes, go.importObject).then(async results => {
    //results.instance.exports.exported_func();
    await go.run(results.instance);
  });
};

// this will wait for completion and is boiler plate, it's pairing is available in go code
// till value returned by f is not ""
function wait_for_completion(f) {
    return new Promise((resolve, reject) => {
        var timeout;
        var x = function() {
            if ( f() == "" ) {
                clearTimeout(timeout);
                timeout =   setTimeout(x , 4);
            } else {
                resolve("success or error!");
            }
        };
        var timeout =   setTimeout(x , 4);
    });
}


// used to verify password and returns bool
async function verify_password(p) {
    password_error = "";
    
    DERO_JS_VerifyPassword(p);
    var result_promise = wait_for_completion(function() {
        return password_error;
    })
    await result_promise;
    
    if (password_error == "success" ) {
        return true;
    }
    return false;
}


function arrayBufferToHex (view) {

    var result = ''
                 var value

    for (var i = 0; i < view.length; i++) {
        value = view[i].toString(16)
                result += (value.length === 1 ? '0' + value : value)
    }

    return result
}

function bytes2hexs(bytes) {
    return bytes.map(function(b) {
        var s = b.toString(16);
        return b < 0x10 ? '0'+s : s;
    }).join(' ').toUpperCase();
}
// here we process messages from parent
// messages are openwallet,closewallet, gettxhistory, get integrated address etc
//
// due to javascript's design we can imagine the below variable as a mutex
var mutex_lock = 0;
registerPromiseWorker(async function (message) {


    // this ping is necessary, otherwise go schedular get stucks for no reason
    // pinging it keeps it alive
    if (message.cmd == "ping") {

        if (typeof go_pinger !== 'undefined') {
            go_pinger();    // the variable is defined
        }
        return
    }

    if (!( id == "" || message.id == id)) {
        //  console.log("id worker side " + id + " message id " + message.id);
        return ;
    }



    for (; mutex_lock != 0 ;) {
        await sleep(4);
    }
    mutex_lock++;
    var return_value;

    console.log("starting " + message.cmd);
    switch (message.cmd) {
    case  "setid" :
        if (id == "") {
            id =message.id;
        }
        break;

    case "download_wallet":  // gives copy of currently opened wallet data
    
      // UNNEDED - Directly in main thread
    
        /*
        if (wallet_available == true) {
            var wallet_data = await db.wallets.get({name:wallet_local_name});

            return_value =wallet_data
                          break;
        }
        return_value = false;
        */
        break;
    case "upload_wallet" : // user is upload a previously saved wallet, we just save it
    
      // UNNEDED - Directly in main thread
    
        /*
        if (message.wallet.edb.length < 500) {
            return_value = "Invalid wallet file length";
            break;
        }

        if (message.wallet.name.length < 1) {
            return_value = "Invalid wallet file name";
            break;
        }

        console.log("Storing wallet " + message.wallet.name + " wallet size " + message.wallet.edb.length);
        await db.wallets.put({name: message.wallet.name, edb: message.wallet.edb});

        return_value = "";
        */
        break;


    case  "reload_wallet": // load wallet from a saved copy, if we donot have a saved copy give err
    
        wallet_body = null;
        self.postMessage({cmd:"sql_get_wallet", name:message.wallet_name});
    
        while( wallet_body == null ){
          await sleep(4);
        }
        if( wallet_body == false ) return;
        var wallet_data = wallet_body;
        
        
        console.log("wallet name " + wallet_data.name + " wallet size " + wallet_data.edb.length);

        // console.log((bytes2hexs(wallet_data.edb)).length);
        DERO_JS_Open_Encrypted_Wallet("",message.password, arrayBufferToHex(wallet_data.edb));

        // though raw encoding should be fast but accessing individual values is slow
        // due to the way go  currently handles them
        //DERO_JS_Open_Encrypted_Wallet("","", wallet_data.edb);
        //DERO_JS_Open_Encrypted_Wallet("","",array);

        var result_promise = wait_for_completion(function() {
            return error_message;
        })
        await result_promise;

        if (error_message == "success" ) {

            wallet_local_name = message.wallet_name;
            return_value = "";

        } else {

            return_value = error_message;
        }
        break;


    case  "recover_seed": // recover wallet seed
        error_message = "";
        DERO_JS_Create_Encrypted_Wallet_From_Recovery_Words('',message.password,message.seed);

        var result_promise = wait_for_completion(function() {
            return error_message;
        })
        await result_promise;

        if (error_message == "success" ) {
            wallet_local_name = message.wallet_name;

            await save_wallet(); // trigger initial save
            return_value = "";
        } else {

            return_value = error_message;
        }

        break;

    case  "recover_viewkey": // recover wallet from viewkey
        error_message = "";
        DERO_JS_Create_Encrypted_Wallet_ViewOnly('',message.password,message.key);

        var result_promise = wait_for_completion(function() {
            return error_message;
        })
        await result_promise;

        if (error_message == "success" ) {
            wallet_local_name = message.wallet_name;

            await save_wallet(); // trigger initial save
            return_value = "";
        } else {

            return_value = error_message;
        }
        break;



    case  "recover_key": // recover wallet from key
        error_message = "";
        DERO_JS_Create_Wallet('',message.password,message.key);
        var result_promise = wait_for_completion(function() {
            return error_message;
        })
        await result_promise;

        if (error_message == "success" ) {
            wallet_local_name = message.wallet_name;

            await save_wallet(); // trigger initial save
            return_value = "";
        } else {

            return_value = error_message;
        }
        break;

    case  "create_new": // recover wallet from key
        error_message = "";
        DERO_JS_Create_New_Wallet('',message.password);

        var result_promise = wait_for_completion(function() {
            return error_message;
        })
        await result_promise;

        if (error_message == "success" ) {
            wallet_local_name = message.wallet_name;
            console.log(wallet_local_name);

            await save_wallet(); // trigger initial save
            return_value = "";
        } else {

            return_value = error_message;
        }
        break;

    case  "close_wallet": // close wallet
        tx_history = "";
        random_i32_address = "";
        random_i32_address_paymentid = "";
        random_i8_address = "";
        random_i8_address_paymentid = "";
        wallet_local_name = "";
        await save_wallet(); // trigger initial save
        DERO_JS_Close_Encrypted_Wallet();
        break;

    case  "tx_history": // give back transaction history
        tx_history = "";
        error_message = "";

        DERO_JS_TX_History(true,true,true,true,true,false,0,0);

        var result_promise = wait_for_completion(function() {
            return error_message;
        })
        await result_promise;

        return_value=   tx_history;
        break;


    case  "validate_address":
        address_error = "";
        DERO_JS_VerifyAddress(message.address);

        var result_promise = wait_for_completion(function() {
            return address_error;
        })
        await result_promise;

        if (address_error == "success" ) {
            address_error = "";
        }
        return_value=   { error:
                          address_error,address_valid:
                          address_valid, address_integrated:
                          address_integrated,
                          address_main:
                          address_main,address_paymentid:
                          address_paymentid
                        }
                        break;
    case  "validate_amount":
        amount_error = "";
        DERO_JS_VerifyAmount(message.amount);

        var result_promise = wait_for_completion(function() {
            return amount_error;
        })
        await result_promise;

        if (amount_error == "success" ) {
            amount_error = "";
        }
        return_value=   { error:amount_error,amount_valid:amount_valid}
                        break;
    case  "verify_password":
        return_value=  verify_password(message.password);
        break;

    case "transfer":
        transfer_error = "";

        DERO_JS_Transfer( message.addresses, message.amounts,message.paymentid);

        var result_promise = wait_for_completion(function() {
            return transfer_error;
        })
        await result_promise;

        if (transfer_error == "success" ) {
            await save_wallet(); // trigger save to persist TX secret key
            transfer_error = "";
        }

        return_value=   { error:
                          transfer_error,transfer_txid:
                          transfer_txid,
                          transfer_txhex:
                          transfer_txhex, transfer_fee:
                          transfer_fee,
                          transfer_amount:
                          transfer_amount,transfer_inputs_sum:
                          transfer_inputs_sum, transfer_change:
                          transfer_change
                        };

        break;

    case "transfer_everything":
        transfer_error = "";

        DERO_JS_Transfer_Everything( message.addresses, message.paymentid);

        var result_promise = wait_for_completion(function() {
            return transfer_error;
        })
        await result_promise;

        if (transfer_error == "success" ) {
            await save_wallet(); // trigger save to persist TX secret key
            transfer_error = "";
        }

        return_value=   { error:
                          transfer_error,transfer_txid:
                          transfer_txid,
                          transfer_txhex:
                          transfer_txhex, transfer_fee:
                          transfer_fee,
                          transfer_amount:
                          transfer_amount,transfer_inputs_sum:
                          transfer_inputs_sum, transfer_change:
                          transfer_change
                        };

        break;


    case  "relay_tx":
        relay_error = "";

        DERO_JS_Relay_TX(message.txhex);
        var result_promise = wait_for_completion(function() {
            return relay_error;
        })
        await result_promise;

        console.log("relaying tx completed status " + relay_error)
        if (relay_error == "success" ) {
            relay_error = "";
        }
        return_value=   { error:relay_error}
                        break;


    case "wallet_seed":
        wallet_seed = "";
        DERO_JS_GetSeedinLanguage(message.seedlanguage);
        var result_promise = wait_for_completion(function() {
            return wallet_seed;
        })
        await result_promise;
        return_value= wallet_seed;
        break;


    case  "generate_integrated_address":
        if (wallet_available == true) {
            DERO_JS_GenerateIAddress();
        }
        break;

    case "rescan_blockchain":
        if (wallet_available == true) {
            DERO_JS_Rescan_Blockchain();
        }
        break;

    case "set_online":
        if (wallet_available == true) {
            DERO_JS_SetOnline();
        }
        break;
    case "set_offline":
        if (wallet_available == true) {
            DERO_JS_SetOffline();
        }
        break;
    case "set_initial_height" :
        if (wallet_available == true) {
            DERO_JS_SetInitialHeight(message.topoheight);
        }
        break;
    case "set_wallet_password":
        if (wallet_available == true) {
            DERO_JS_ChangePassword(message.password);
            await save_wallet(); // trigger save
        }
        break;
    case "set_daemon_address":
        if (wallet_available == true) {
            console.log('demon is set to: ', message.daemon_addres);
            DERO_JS_SetDaemonAddress(message.daemon_address);
        }
        break;
    case "set_mixin":
        if (wallet_available == true) {
            DERO_JS_SetMixin(message.mixin);
            await save_wallet(); // trigger save
        }
        break;

    case "set_sync_frequency":
        if (wallet_available == true) {
            console.log('demon is sync to: ', message.syncevery);
            DERO_JS_SetSyncTime(message.syncevery);
        }
        break;
    case "set_fee_multiplier":
        if (wallet_available == true) {
            DERO_JS_SetFeeMultiplier(message.fee_multiplier);
            await save_wallet(); // trigger save
        }
        break;

    case  "delete_wallet":  // delete local wallet
    
      // UNNEDED - Directly in main thread
    
        /*
        console.log("deleting wallet '" + message.wallet_name + "'");
        await db.wallets.where({name:message.wallet_name}).delete();
        */
        break;

    case "rename_wallet":
    
      // UNNEDED - Directly in main thread
    
        /*
        if (wallet_available == true) {
            var current_wallet =  wallet_local_name;

            wallet_local_name = message.wallet_name;
            await save_wallet(); // trigger save with new name

            console.log("deleting wallet '" + current_wallet + "'");
            await db.wallets.where({name:current_wallet}).delete(); // delete old wallet
        }
        */
        break;
    }

    console.log("completing " + message.cmd);
    mutex_lock--;
    return return_value
});



setInterval(updates, 3000); //request blocks faster
async   function updates () {
  
    var wallet_list_loaded = false;
    var wallet_list = [];
    
    /*
    await db.wallets.each(wallet => {
        if (wallet.edb.length > 800) {
            wallet_list.push( wallet.name);
        }
        wallet_list_loaded = true;
    }).catch(function(error) {});;

    wallet_list.sort();*/

    //console.log(wallet_list);
    var wallet_can_run;
    
    if (typeof go_pinger !== 'undefined') {
        wallet_can_run = true;
    }else{
        wallet_can_run = false;
    }

    //console.log(wallet_minimum_topo_height);
    self.postMessage({cmd:"stats",
                      id:id,
                      wallet_can_run:wallet_can_run,
                      wallet_available: wallet_available,
                      locked_balance: locked_balance,
                      unlocked_balance: unlocked_balance,
                      total_balance :total_balance,
                      wallet_complete:wallet_complete,
                      wallet_height: wallet_height,
                      daemon_height: daemon_height,
                      wallet_address: wallet_address,
                      random_i32_address: random_i32_address,
                      random_i32_address_paymentid: random_i32_address_paymentid,
                      random_i8_address: random_i8_address,
                      random_i8_address_paymentid: random_i8_address_paymentid,
                      wallet_online:wallet_online,
                      wallet_mixin:wallet_mixin,
                      wallet_fees_multiplier:wallet_fees_multiplier,
                      wallet_initial_height: wallet_initial_height,
                      wallet_list:wallet_list, // wallet list so as previously saved wallets could be opened
                      wallet_list_loaded: wallet_list_loaded,
                      wallet_name: wallet_local_name,
                      wallet_local_name: wallet_local_name,
                      wallet_daemon_address: wallet_daemon_address,
                      wallet_version_string: wallet_version_string,
                      wallet_sync_time: wallet_sync_time,
                      wallet_minimum_topo_height: wallet_minimum_topo_height,
                      wallet_topo_height: wallet_topo_height,
                      daemon_topo_height: daemon_topo_height,

                     });


}

// save a copy of wallet every 60 secs
setInterval(save_wallet, 60000);
async   function save_wallet () {
    wallet_encrypted_error = "";
    console.log('save_wallet');
    //if (typeof db !== 'undefined') {
    if (wallet_local_name.length >= 1) {
        DERO_JS_GetEncryptedCopy();
        var result_promise = wait_for_completion(function() {
            return wallet_encrypted_error;
        })
        await result_promise;
        console.log("encrypted dump  completed status " + wallet_encrypted_error)
        if (wallet_encrypted_error == "success" ) {
            wallet_encrypted_error = ""; 
            // in privacy mode, operations will be silently discarded
            /*
            db.wallets.put({name: wallet_local_name, edb: new Uint8Array(wallet_encrypted_dump)}).catch(function(error) {
              console.log ("dexie Ooops while saving encrypred DB: " + error);
            });
            */
            console.log('posting sql_store_wallet');
            self.postMessage({cmd:"sql_store_wallet", name:wallet_local_name, edb: new Uint8Array(wallet_encrypted_dump)});

        }
    }
    //}
}
