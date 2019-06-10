// Copyright DERO Project under DERO license

const wasm_supported = (() => {
    try {
        if (typeof WebAssembly === "object"
                                   && typeof WebAssembly.instantiate === "function") {
            const module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
            if (module instanceof WebAssembly.Module)
                return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
        }
    } catch (e) {
    }
    return false;
})();

if (wasm_supported == false) {
    alert("WebAssembly is NOT supported on your device.");
    try{
      window.navigator.app.exitApp();
    }catch(err){
      console.log(err);
    }
}


var output=222;
var wallet_can_run = true;
var wallet_can_run_state = true;
var wallet_available = false;
var wallet_last_state = false; // used as an optimization
var wallet_complete = true;
var wallet_complete_state = true; // used as an optimization
var locked_balance,unlocked_balance,total_balance;  // these variables are automatically updated from go side
var wallet_height,daemon_height;
var wallet_topo_height,daemon_topo_height;
var wallet_address ;
var random_i32_address,random_i32_address_paymentid;
var random_i8_address,random_i8_address_paymentid;
var wallet_minimum_topo_height;
var tx_history;
var wallet_online = true;
var wallet_list = [];
var wallet_list_loaded = false;
var wallet_initial_height ;
var wallet_local_name,wallet_name ;
var wallet_daemon_address;
var wallet_version_string = "";
var wallet_sync_time = 10;
var wallet_setting_default_sync_time = 60;
var globalFunction = null;


let getRandomBytes = (
                         (typeof self !== 'undefined' && (self.crypto || self.msCrypto))
? function() { // Browsers
    var crypto = (self.crypto || self.msCrypto), QUOTA = 65536;
    return function(n) {
        var a = new Uint8Array(n);
        for (var i = 0; i < n; i += QUOTA) {
            crypto.getRandomValues(a.subarray(i, i + Math.min(n - i, QUOTA)));
        }
        return a;
    };
}
: function() { // Node
    return require("crypto").randomBytes;
}
                     )();

function toHexString(byteArray) {
    return byteArray.reduce((output, elem) =>
                            (output + ('0' + elem.toString(16)).slice(-2)),
                            '');
}

var secretid = toHexString(getRandomBytes(20)); // this id is used for protection
var worker = new Worker('./wallet_worker.js');
var promiseWorker = new PromiseWorker(worker);

promiseWorker.postMessage({cmd:'setid',id:secretid});

// go threading kind of hangs in worker thread until we activate schedule again
// schedule again is activated by just sending a dummy message
// we pumpa dummy message every 50 ms
setInterval(trigger_activate, 250);
function trigger_activate() {
    promiseWorker.postMessage({cmd:"ping" });
}

worker.addEventListener('message', function(e) {
        if (e.data.id !== secretid) { // if secret id is missing skip it
        return;
    }
    //console.log(e);
    switch (e.data.cmd) {


    case "sql_get_wallet":

        console.log("get db");
        worker.postMessage({cmd:'sql_retrieved_data',name:'',edb:''});
        break;

    case "sql_store_wallet":
    
        console.log("store db");
    
        break;

    case "tx_history":
        tx_history = e.data.tx_history;

        break;
    case "stats":
        wallet_can_run = e.data.wallet_can_run;
        wallet_available = e.data.wallet_available;
        wallet_address = e.data.wallet_address;
        locked_balance = e.data.locked_balance;
        unlocked_balance = e.data.unlocked_balance;
        total_balance = e.data.total_balance;
        wallet_height = e.data.wallet_height;
        daemon_height = e.data.daemon_height;
        random_i32_address = e.data.random_i32_address;
        random_i32_address_paymentid = e.data.random_i32_address_paymentid;
        random_i8_address = e.data.random_i8_address;
        random_i8_address_paymentid = e.data.random_i8_address_paymentid;
        wallet_minimum_topo_height = e.data.wallet_minimum_topo_height; 
        wallet_list = e.data.wallet_list;
        wallet_list_loaded = e.data.wallet_list_loaded;
        wallet_online = e.data.wallet_online;
        wallet_complete = e.data.wallet_complete;
        wallet_initial_height = e.data.wallet_initial_height;
        wallet_local_name = e.data.wallet_local_name;
        wallet_daemon_address = e.data.wallet_daemon_address;
        wallet_version_string = e.data.wallet_version_string;
        wallet_sync_time = e.data.wallet_sync_time;
        wallet_name = e.data.wallet_name;
        wallet_topo_height = e.data.wallet_topo_height;
        daemon_topo_height = e.data.daemon_topo_height;
        break;
    };
}, false);


// this function will update necessary DOM as per selector
function update_html_if_necessary(selector,value) {
    document.querySelectorAll(selector).forEach(function(node) {

        if (node.localName != "input" && node.innerHTML != value) {
            node.innerHTML = value;
        } else if (node.value != value) {
            node.value = value;
        }
    });
}

setInterval(update_balance, 1000);
function update_balance () {
    //console.log("wallet_complete "+ wallet_complete + " " + wallet_complete_state);
    // if wallet is view only, hide certain elements
    if (wallet_complete != wallet_complete_state ) {
        if (wallet_complete == true ) { // wallet should show  all controls
            document.querySelectorAll('.wallet-complete').forEach(function(node) {
                //node.classList.remove("disabled");
                node.style.visibility = "visible";
            });

            // wallets priority is send transactions
            $('.nav-tabs a[href="#send"]').tab('show');
        } else { // wallet should hide controls such as seed button, send tab
            document.querySelectorAll('.wallet-complete').forEach(function(node) {
                node.style.visibility = "hidden";
            });
            // view wallets priority is incoming transactions
            $('.nav-tabs a[href="#history"]').tab('show');
        }
        wallet_complete_state = wallet_complete;
    }

    if( wallet_list_loaded == true ) $('.wallets-loading').hide();

    //console.log(wallet_list);
    var x = document.getElementById("local_wallet_list_select");
    var tmp_list = [];
    var i;
    for (i = 0; i < x.options.length; i++) {
        tmp_list.push(x.options[i].value);
    }

    //  console.log("x length " +x.length);
    //  console.log("options length " + x.options.length);
    // update the list only we are different
    if (JSON.stringify(tmp_list)!=JSON.stringify(wallet_list)) {
        /* for (i = 0; i < x.options.length; i++) { // remove all previous options
           x.remove(i)
         }*/
        x.innerHTML = ""; // above line has issues cleaning up options on firefox
        //  console.log("x length " +x.length);

        for (i = 0; i < wallet_list.length; i++) { // remove all previous options
            x.add(new Option(wallet_list[i], wallet_list[i]))
        }
    }

    if (x.length >= 1) {
       local_wallet_list_present.style.display = "block";

    } else {
       local_wallet_list_present.style.display = "none";
    }
    
    update_html_if_necessary('.wallet_address',wallet_address);
    update_html_if_necessary('.locked_balance',locked_balance);
    update_html_if_necessary('.unlocked_balance',unlocked_balance);
    update_html_if_necessary('.total_balance',total_balance);
    update_html_if_necessary('.wallet_initial_height',wallet_initial_height);

    update_html_if_necessary('.daemon_height',daemon_height);
    update_html_if_necessary('.wallet_height',wallet_height);
    
    
    update_html_if_necessary('.wallet_topo_height',wallet_topo_height);
    update_html_if_necessary('.daemon_topo_height',daemon_topo_height);

    update_html_if_necessary('.random_i32_address',random_i32_address);
    update_html_if_necessary('.random_i32_address_paymentid',random_i32_address_paymentid);
    update_html_if_necessary('.random_i8_address',random_i8_address);
    update_html_if_necessary('.random_i8_address_paymentid',random_i8_address_paymentid);

    update_html_if_necessary('.wallet_daemon_address',wallet_daemon_address);
    update_html_if_necessary('.wallet_version_string',wallet_version_string);
    update_html_if_necessary('.wallet_sync_time',wallet_sync_time);
    update_html_if_necessary('.wallet_local_name',wallet_local_name);
    update_html_if_necessary('.wallet_minimum_topo_height',wallet_minimum_topo_height);
    
    if ( wallet_online == true  &&  (daemon_height-wallet_height >=5 )){
        
        if (blockchain_height_stats.classList.contains("text-danger") != true ) {
          blockchain_height_stats.classList.remove("text-success");
          blockchain_height_stats.classList.add("text-danger");
        }
    }

    if ( wallet_online == true  &&  (daemon_height-wallet_height <=5 )){
        if (blockchain_height_stats.classList.contains("text-danger") == true ) {
          blockchain_height_stats.classList.remove("text-danger");
          blockchain_height_stats.classList.add("text-success");
        }
        //console.log('if sync is over clearing up progress');
    }
    
    var progression = '';
    if ( wallet_online == true ){
        $('.progress-bar').addClass("progress-bar-animated");
        progression = Math.round((wallet_height/daemon_height)*100);
        $('.progress-bar').css('width', progression+'%');
        
    }

    if ( wallet_online == false ){
        $('.progress-bar').removeClass("progress-bar-animated");
    }

    if ( wallet_can_run_state == true && wallet_can_run == false )  {
        document.querySelectorAll('#id_wallet_can_run').forEach(function(node) {
            node.style.display = "none";
        });
        wallet_can_run_state = wallet_can_run;
    }
    
    
    if (  wallet_can_run_state == true && wallet_can_run == false ) {
        document.querySelectorAll('#id_wallet_can_run').forEach(function(node) {
            node.style.display = "block";
        });
        wallet_can_run_state = wallet_can_run;
    }
    
    
    if (typeof(total_balance) == "undefined") {
        //alert("An unknown error has occurred.Can you please retry again");
        return;
    }

    //console.log(wallet_available + " " + wallet_last_state);
    if (wallet_available == true  && wallet_last_state == false) {
        $('.wallet-online').show();
        $('.wallet-closed').hide();


        promiseWorker.postMessage({cmd:'generate_integrated_address',id:secretid}); // generate_integrated_address
        wallet_last_state = wallet_available;
        $('.nav-tabs a[href="#send"]').tab('show'); // trigger the send pane first
    }

    if (wallet_available == false  && wallet_last_state == true) {
        $('.wallet-online').hide();
        $('.wallet-closed').show();

        wallet_last_state = wallet_available;
    }
    update_wallet_online_state();

}


// grows text area as input is provided
function growtextarea(id) {
    document.querySelectorAll('#' + id).forEach(function(node) {
        var t = "overflow: hidden;height:" + node.scrollHeight + "px";
        for (i = 0; i < 20; i++) {
            var newt = "overflow: hidden";
            node.style.cssText = newt;

        }

        // node.style.cssText = "overflow: hidden;height:" + node.scrollHeight + "px";;
    });
}


function update_seed(language) {
    promiseWorker.postMessage({cmd:'wallet_seed',id:secretid,seedlanguage:language}).then(function (response) {
        document.querySelectorAll('#seedbox').forEach(function(node) {
            node.innerText = response;
        });
    });
}

function update_tx_history() {
    lock_ui();
    promiseWorker.postMessage({cmd:'tx_history',id:secretid}).then(function (response) {
        try {
            var entries = JSON.parse(response);
            txtable.setData(entries)
        } catch(e) {
            //alert(e); // error in the above string (in this case, yes)!
        }
        unlock_ui();
    });
}


function validate_dero_address() {
    var element = document.getElementById("send_to_address");

    promiseWorker.postMessage({cmd:'validate_address',id:secretid,address:element.value}).then(function (response) {
        if ( response.error == "" ) {
            element.classList.remove("text-danger");
            element.classList.add("text-success");

            var element_payid = document.getElementById("send_to_paymentid");
            var element_payid_block = document.getElementById("send_to_paymentid_block");

            try{
              if (response.address_integrated === true ) { // if address is integrated
                  element_payid.value = "" ;
                  element_payid_block.style.display = "none";
              } else {
                  element_payid_block.style.display = "block";
              }
            }catch(err){}
        } else {
            element.classList.add("text-danger");
            element.classList.remove("text-success");
        }
    });
}

function validate_dero_amount() {
    var element = document.getElementById("send_to_amount");
    promiseWorker.postMessage({cmd:'validate_amount',id:secretid,amount:element.value}).then(function (response) {
        if ( response.error == "" ) {
            element.classList.remove("text-danger");
            element.classList.add("text-success");
        } else {
            element.classList.add("text-danger");
            element.classList.remove("text-success");
        }
    });

}

function validate_dero_paymentid() {
    var element = document.getElementById("send_to_paymentid");
    if ( element.value.match("^($|[0-9A-Fa-f]{16}$|[0-9A-Fa-f]{64}$)") != null ) {
        element.classList.remove("text-danger");
        element.classList.add("text-success");
        return true;
    } else {
        element.classList.add("text-danger");
        element.classList.remove("text-success");
        return false;
    }
}

function validate_recovery_key() {
    var element = document.getElementById("i_key");
    if ( element.value.match("^[0-9A-Fa-f]{64}$") != null ) {
        element.classList.remove("text-danger");
        element.classList.add("text-success");
        return true;
    } else {
        element.classList.add("text-danger");
        element.classList.remove("text-success");
        return false;
    }
}


function validate_viewkey_key() {
    var element = document.getElementById("i_viewkey");

    if ( element.value.match("^[0-9A-Fa-f]{128}$") != null ) {
        element.classList.remove("text-danger");
        element.classList.add("text-success");
        return true;
    } else {
        element.classList.add("text-danger");
        element.classList.remove("text-success");
        return false;
    }
}

// verifies wallet password against a string
function verify_password_action(validfunction ) {
    globalFunction = validfunction;
    $('div#ModalPromptPassword input[name="password"]').val('');
    $('div#ModalPromptPassword input[name="action"]').val('verify_password');
    $('div#ModalPromptPassword input[name="password"]').focus();
    $('#ModalPromptPassword').modal('show');
    /*var p = prompt(i18next.t('enter_password'));
    if (p == null) {
        return;
    }*/
}

// verifies wallet password against a string
function open_saved_wallet() {
    $('div#ModalPromptPassword input[name="password"]').val('');
    $('div#ModalPromptPassword input[name="password"]').focus();
    $('div#ModalPromptPassword input[name="action"]').val('reload_wallet');
    $('#ModalPromptPassword').modal('show');
    // var p = prompt(i18next.t('enter_password'));
    // if (p == null) {
    //     return;
    // }

    // promiseWorker.postMessage({cmd:'reload_wallet',id:secretid,wallet_name:local_wallet_list_select.value, password:p}).then(function (response) {
    //     if ( response == "" ) {
    //         // wallet successfully opened
    //         make_wallet_online();
            
    //         promiseWorker.postMessage({cmd:'set_sync_frequency',id:secretid,syncevery:wallet_setting_default_sync_time}); formControlRange.value = wallet_setting_default_sync_time;
    //     } else {
    //         alert("Error occurred while opening wallet. err " + response);
    //     }
    // });
}

// verifies wallet password against a string
function delete_saved_wallet() {

    var p = confirm("Please confirm that you are deleting wallet '"+local_wallet_list_select.value  +"' .Please safeguard your SEED.");

    if (p == true) {
        promiseWorker.postMessage({cmd:'delete_wallet',id:secretid,wallet_name:local_wallet_list_select.value})
    }
}

// creates a transaction, verifies
function wallet_send_transaction() {

    validate_dero_address();
    validate_dero_amount();
    validate_dero_paymentid();

    lock_ui();
    // first verify whether the DERO address is valid
    var element_address = document.getElementById("send_to_address");
    console.log(" going to verify address");
    promiseWorker.postMessage({cmd:'validate_address',id:secretid,address:element_address.value}).then(function (response) {
        if ( response.error == "" ) {
            // address is valid, lets check dero amount
            console.log("address verified, going to verify amount");
            var element_amount = document.getElementById("send_to_amount");

            promiseWorker.postMessage({cmd:'validate_amount',id:secretid,amount:element_amount.value}).then(function (response) {
                if ( response.error == "" ) {

                    console.log("amount verified, going to verify paymentid");
                    if (validate_dero_paymentid() == false ) {
                        alert(i18next.t('invalid_payid'));
                        return;
                    }
                    console.log("paymentid verified, going to verify password");
                    console.log("going to test password");
                    var element_payid = document.getElementById("send_to_paymentid");
                    // at this point before creating tx, we should verify user password
                    verify_password_action( function() {
                        create_transaction_verify_send(element_address.value,element_amount.value,element_payid.value);
                    } );
                } else {
                    alert(i18next.t('invalid_amount'));
                }
            });
        } else {
            alert(i18next.t('invalid_address'));
        }
        unlock_ui();
    });
}




// creates a transaction send everything, verifies
function wallet_send_everything_transaction() {
    // first verify whether the DERO address is valid
    lock_ui();
    console.log(" going to verify address");
    promiseWorker.postMessage({cmd:'validate_address',id:secretid,address:i_settings_send_address.value}).then(function (response) {
        if ( response.error == "" ) {
            // address is valid, lets check dero amount
            console.log("address verified");
            create_transaction_verify_send_everything(i_settings_send_address.value,"")
        } else {
            alert(i18next.t('invalid_address'));
        }
        unlock_ui();
    });
}



// this function verifies whether the ids mentioned are same
function verify_same_password(id1,id2) {
    if (id1.value == id2.value ) { // mark both as invalid
        id1.classList.add("text-success");
        id2.classList.add("text-success");
        id1.classList.remove("text-danger");
        id2.classList.remove("text-danger");
        return true;
    } else {
        id1.classList.add("text-danger");
        id2.classList.add("text-danger");
        id1.classList.remove("text-success");
        id2.classList.remove("text-success");
        return false;
    }

}

// toggle wallet online/offline

function update_wallet_online_state() {
    if ( wallet_online == true  &&  button_online_offline.classList.contains("btn-warning") == true ) {
        button_online_offline.innerHTML = "Wallet is now online";
        button_online_offline.classList.remove("btn-warning");
        button_online_offline.classList.add("btn-success");
    }

    if ( wallet_online == false  &&  button_online_offline.classList.contains("btn-success") == true ) {
        button_online_offline.innerHTML = "Wallet is now offline";
        button_online_offline.classList.remove("btn-success");
        button_online_offline.classList.add("btn-warning");
    }

}
function toggle_online_offline() {
    if ( wallet_online == true ) {
        make_wallet_offline();
    } else {
        make_wallet_online();
    }
}


function HandleWalletSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                    f.size, ' bytes, last modified: ',
                    f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                    '</li>');


        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {

                var name = f.name.substring(0, f.name.lastIndexOf('.'));
                promiseWorker.postMessage({cmd:'upload_wallet',id:secretid, wallet:{name:name,edb:new Uint8Array(e.target.result)}}).then(function (response) {
                    if ( response == "" ) {
                        // address is valid, lets check dero amount
                        alert("Wallet uploaded successfully with '"+name+"'.");
                    } else {
                        alert("Wallet Upload failed. Please retry. error " +  response);
                    }
                });

            };
        })(f);

        // Read in the wallet file as a data URL.
        reader.readAsArrayBuffer(f);
        break; // we only process first file
    }

}










// this will set the wallet start height
// expects an number from -1 to anything
function change_wallet_start_height(i) {

    if(typeof i == 'number') {
        if (i < 0) {
            i = -1;
        }
        lock_ui();
        promiseWorker.postMessage({cmd:'set_initial_height',id:secretid, topoheight:i}).then(function(response){
          setTimeout(function(){
            unlock_ui();
          },500);
        });
    }

}

function make_wallet_online() {
    lock_ui();
    promiseWorker.postMessage({cmd:'set_online',id:secretid}).then(function(response){
      setTimeout(function(){
        unlock_ui();
      },2000);
    });
}

function make_wallet_offline() {
    lock_ui();
    promiseWorker.postMessage({cmd:'set_offline',id:secretid}).then(function(response){
      setTimeout(function(){
        unlock_ui();
      },2000);
    });
}

function set_wallet_daemon_address(i) {
    lock_ui();
    promiseWorker.postMessage({cmd:'set_daemon_address',id:secretid,daemon_address:i}).then(function(response){
      setTimeout(function(){
        unlock_ui();
      },500);
    });
}

function change_wallet_password() {

    if (verify_same_password(i_settings_pwd,i_settings_cpwd) == false) {
        alert(i18next.t('password_mismatch'));
        return
    }

    if (i_settings_pwd.value.length < 5) {
        alert(i18next.t('small_password'));
        return
    }

    lock_ui();
    promiseWorker.postMessage({cmd:'set_wallet_password',id:secretid,password:i_settings_pwd.value}).then(function(response){unlock_ui();});

    alert(i18next.t('password_changed'));
}

function rename_wallet() {

    if (i_settings_wallet_name.value.length < 1) {
        alert("wallet name cannot be NULL");
        return;
    }

    lock_ui();
    promiseWorker.postMessage({cmd:'rename_wallet',id:secretid,wallet_name:i_settings_wallet_name.value}).then(function(response){unlock_ui();});

    alert("wallet renamed");

}

function Recover_Wallet_Using_Seed_Words() {

    if (verify_same_password(i_seed_pwd,i_seed_cpwd) == false) {
        alert(i18next.t('password_mismatch'));
        return
    }

    if (i_seed_pwd.value.length < 5) {
        alert(i18next.t('small_password'));
        return
    }

    //  if local name is 0 bytes, make sure it's NOT
    if (i_seed_wallet_name.value.length < 1) {
        alert(i18next.t('wallet_name_empty'));
        return;
    }

    if (i_seed.value.length < 24) {
        alert("SEED is very small");
        return;
    }

    lock_ui();
    // we have verified as much as we can , now lets do the actual thing
    promiseWorker.postMessage({cmd:'recover_seed',id:secretid,wallet_name:i_seed_wallet_name.value, seed:i_seed.value,password:i_seed_pwd.value,topoheight:i_seed_topoheight.value}).then(function (response) {

        if ( response == "" ) {

            change_wallet_start_height(parseInt(i_seed_topoheight.value,10));
            make_wallet_online();
            promiseWorker.postMessage({cmd:'set_sync_frequency',id:secretid,syncevery:wallet_setting_default_sync_time}); formControlRange.value = wallet_setting_default_sync_time;
            $('#ModalRecoverSeedWords').modal('hide');
        } else {
            alert("Error err " + response);

        }
        unlock_ui();
    });

}

function Recover_Wallet_Using_Recovery_Key() {

    if (verify_same_password(i_key_pwd,i_key_cpwd) == false) {
        alert(i18next.t('password_mismatch'));
        return
    }

    if (i_key_pwd.value.length < 5) {
        alert(i18next.t('small_password'));
        return;
    }

    //  if local name is 0 bytes, make sure it's NOT
    if (i_key_wallet_name.value.length < 1) {
        alert(i18next.t('wallet_name_empty'));
        return;
    }

    if (i_key.value.length < 64) {
        alert("Recovery Key is 64 chars hex long.");
        return;
    }

    lock_ui();
    // we have verified as much as we can , now lets do the actual thing
    promiseWorker.postMessage({cmd:'recover_key',id:secretid,wallet_name:i_key_wallet_name.value, key:i_key.value,password:i_key_pwd.value,topoheight:i_key_topoheight.value}).then(function (response) {

        if ( response == "" ) {
            change_wallet_start_height(parseInt(i_key_topoheight.value,10));
            make_wallet_online();
            $('#ModalRecoverKey').modal('hide');
            promiseWorker.postMessage({cmd:'set_sync_frequency',id:secretid,syncevery:wallet_setting_default_sync_time}); formControlRange.value = wallet_setting_default_sync_time;
        } else {
            alert("Error err " + response);

        }
        unlock_ui();
    });

}

function Recover_Wallet_Using_View_Key() {

    if (verify_same_password(i_viewkey_pwd,i_viewkey_cpwd) == false) {
        alert(i18next.t('password_mismatch'));
        return
    }

    if (i_viewkey_pwd.value.length < 5) {
        alert(i18next.t('small_password'));
        return;
    }

    //  if local name is 0 bytes, make sure it's NOT
    if (i_viewkey_wallet_name.value.length < 1) {
        alert(i18next.t('wallet_name_empty'));
        return;
    }

    if (i_viewkey.value.length < 128) {
        alert("Recovery Key is 128 chars hex long.");
        return;
    }
    
    lock_ui();
    // we have verified as much as we can , now lets do the actual thing
    promiseWorker.postMessage({cmd:'recover_viewkey',id:secretid,wallet_name:i_viewkey_wallet_name.value, key:i_viewkey.value,password:i_viewkey_pwd.value,topoheight:i_viewkey_topoheight.value}).then(function (response) {

        if ( response == "" ) {
            change_wallet_start_height(parseInt(i_viewkey_topoheight.value,10));
            make_wallet_online();
            $('#ModalRecoverViewKey').modal('hide');
            promiseWorker.postMessage({cmd:'set_sync_frequency',id:secretid,syncevery:wallet_setting_default_sync_time}); formControlRange.value = wallet_setting_default_sync_time;
        } else {
            alert("Error err " + response);

        }
        unlock_ui();
    });

}

function Create_New_Wallet() {

    if (verify_same_password(i_new_wallet_pwd,i_new_wallet_cpwd) == false) {
        alert(i18next.t('password_mismatch'));
        return
    }

    if (i_new_wallet_pwd.value.length < 5) {
        alert(i18next.t('small_password'));
        return;
    }


    //  if local name is 0 bytes, make sure it's NOT
    if (i_new_wallet_name.value.length < 1) {
        alert(i18next.t('wallet_name_empty'));
        return;
    }


    lock_ui();
    // we have verified as much as we can , now lets do the actual thing
    promiseWorker.postMessage({cmd:'create_new',id:secretid,wallet_name:i_new_wallet_name.value, password:i_new_wallet_pwd.value,topoheight:-1}).then(function (response) {
        if ( response == "" ) {
            change_wallet_start_height(-1);
            make_wallet_online();
            promiseWorker.postMessage({cmd:'set_sync_frequency',id:secretid,syncevery:wallet_setting_default_sync_time}); formControlRange.value = wallet_setting_default_sync_time;

            update_seed();
            $('#ModalSeedWords').modal('show'); // show seed words automatically for new wallets
        } else {
            alert("Error err " + response);
        }
        unlock_ui();
    });

}



// creates a transaction, confirm from user whether he wants to send it,
// display some information about tx and then send it
function create_transaction_verify_send(daddress,damount,dpayid) {

    var addresses = [daddress];
    var amounts  = [damount];
    lock_ui();
    promiseWorker.postMessage({cmd:'transfer',id:secretid,addresses:addresses,amounts:amounts,paymentid:dpayid}).then(function (response) {
        if ( response.error === "" ) {


            transfer_txid.innerHTML = response.transfer_txid;
            transfer_inputs_sum.innerHTML = response.transfer_inputs_sum;
            transfer_amount.innerHTML = response.transfer_amount;
            transfer_fee.innerHTML = response.transfer_fee
                                     transfer_change.innerHTML = response.transfer_change;
            transfer_txhex.innerHTML = response.transfer_txhex;
            transfer_tx_size.innerHTML = ((response.transfer_txhex.length/2)/1024.0).toFixed(3) + " KB" ;



            $('#ModalConfirmTX').modal('show');
            // alert("successfully created tx txid "+ response.transfer_txid);
        } else {
            alert("Tx creation failed. err " + response.error);
        }
        unlock_ui();
    });


}

// creates a transaction, confirm from user whether he wants to send it,
// display some information about tx and then send it
function create_transaction_verify_send_everything(daddress,dpayid) {

    var addresses = [daddress];

    lock_ui();
    promiseWorker.postMessage({cmd:'transfer_everything',id:secretid,addresses:addresses,paymentid:dpayid}).then(function (response) {
        if ( response.error === "" ) {


            transfer_txid.innerHTML = response.transfer_txid;
            transfer_inputs_sum.innerHTML = response.transfer_inputs_sum;
            transfer_amount.innerHTML = response.transfer_amount;
            transfer_fee.innerHTML = response.transfer_fee
                                     transfer_change.innerHTML = response.transfer_change;
            transfer_txhex.innerHTML = response.transfer_txhex;
            transfer_tx_size.innerHTML = ((response.transfer_txhex.length/2)/1024.0).toFixed(3) + " KB" ;


            $('#ModalSettings').modal('hide');
            $('#ModalConfirmTX').modal('show');
            // alert("successfully created tx txid "+ response.transfer_txid);
        } else {
            alert("Tx creation failed. err " + response.error);
        }
        unlock_ui();
    });


}


function relay_tx() {

    //alert(transfer_txhex.innerHTML);

    /*

      $.post({
        type: 'POST',
        url: 'http://127.0.0.1:20206/sendrawtransaction',
        data: JSON.stringify ({tx_as_hex: transfer_txhex.innerHTML}),
        success: function(data) {

          console.log(data);
         if (data.status == "OK") {

        } else {
          alert("An error occurred while submitting TX err " + data.status)
        } //alert('data: ' + data);
      },
        contentType: "application/json",
        dataType: 'json'
    });
    */


    lock_ui();
    promiseWorker.postMessage({cmd:'relay_tx',id:secretid,txhex:transfer_txhex.innerHTML}).then(function (response) {
        unlock_ui();
        if ( response.error == "" ) {
            alert("successfully relayed TX")
        } else {
            alert("TX relay err " + response.error);

        }

    });

}

function logout(){
    lock_ui();
    promiseWorker.postMessage({cmd:'close_wallet',id:secretid}).then(function(response){
      setTimeout(function(){
        unlock_ui();
      },500);
    });
}

$(document).ready(function () {
  
    //set_wallet_daemon_address('https://derowallet.io:443');
  
    $('#PromptPassword').on('click', function() {
        
        var p = $('div#ModalPromptPassword input[name="password"]').val();
        var action = $('div#ModalPromptPassword input[name="action"]').val();
        if (p== null || p == "") {
            return;
        }
        lock_ui();
        
        if (action === 'reload_wallet') {
            promiseWorker.postMessage({cmd:'reload_wallet',id:secretid,wallet_name:local_wallet_list_select.value, password:p}).then(function (response) {
                unlock_ui();
                if ( response == "" ) {
                    // wallet successfully opened
                    $('#ModalPromptPassword').modal('hide');
                    $('div#ModalPromptPassword input[name="password"]').val('');
                    make_wallet_online();
                    
                    promiseWorker.postMessage({cmd:'set_sync_frequency',id:secretid,syncevery:wallet_setting_default_sync_time}); formControlRange.value = wallet_setting_default_sync_time;
                } else {
                    alert("Error occurred while opening wallet. err " + response);
                }
            });
        } else {
            promiseWorker.postMessage({cmd:'verify_password',id:secretid,password:p}).then(function (response) {
                $('#ModalPromptPassword').modal('hide');
                $('div#ModalPromptPassword input[name="password"]').val('');
                unlock_ui();
                if ( response === true ) {
                    if (globalFunction != null) {
                        globalFunction();
                        globalFunction = null;
                    }
                    return true;
                } else {
                    alert(i18next.t('invalid_password'));
                    return false;
                }
            });
        }
    });

    $('div#ModalPromptPassword input[type="password"]').on('keydown', function(event) {
        if (event.keyCode == 13) { // Enter 
            $('#PromptPassword').trigger('click');
        }
    });

});





