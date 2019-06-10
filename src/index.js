// install file select handle
var timedoutlock = null;
var funnttips = null;

$('.ui-lock').append('<div class="ms-msgs"></div>');

var lock_ui = function(){
  $('.ui-lock').show();
  timedoutlock = setTimeout(function(){
    $('.ui-lock .load-frame').append("<div class='close-rq'><small>Taking Too Long ?</small><br/><b>Cancel Request</b></div>");
    $('.close-rq').click(function(){
      unlock_ui();
    });
  },30 * 1000);
  var lastindex = 0;
  var randomIndex = 0;
  funnttips = setInterval(function(){
    var messages = ['Hashing some crypto stuff', 'Doing some magic math', 'Calculating 1+1', 'Evaluating `while(true)`'];
    while(randomIndex==lastindex){
      randomIndex = Math.round(Math.random()*messages.length);
    }
    lastindex = randomIndex;
    $('.ms-msgs').text(messages[randomIndex]);
  },2000);
};

var unlock_ui = function(){
  $('.ui-lock').hide();
  $('.ui-lock .load-frame .close-rq').remove();
  $('.ui-lock .ms-msgs').text('');
  clearTimeout(timedoutlock);
  clearInterval(funnttips);
  timedoutlock = null;
  funnttips = null;
};

var loadJS = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element
    console.log('wallet loaded');
    
    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};

var yourCodeToBeCalled = function(){
    document.getElementById('wallet_disk_file').addEventListener('change', HandleWalletSelect, false);
};

$(document).ready(function(){
  
  console.log('Document Initiated');
  //lock_ui();
  
  function onLoad() {
    unlock_ui();
    loadJS('./wallet.js', yourCodeToBeCalled, document.body);
    document.addEventListener("deviceready", onDeviceReady, false);
  }

  // device APIs are available
  //
  function onDeviceReady() {
      console.log('Cordova Initiated');
      
      cordova.plugins.notification.local.requestPermission(function (granted) {  });
      
      // Now safe to use device APIs
      setTimeout(function(){ navigator.splashscreen.hide(); },2000);
      
      $('.qrCordovaScaner').click(function(){
          cordova.plugins.barcodeScanner.scan(
           function (result) {
               $('#send_to_address').val(result.text);
               validate_dero_address();
           },
           function (error) {
               alert("Scanning failed: " + error);
           },
           {
               preferFrontCamera : false, // iOS and Android
               showFlipCameraButton : true, // iOS and Android
               showTorchButton : true, // iOS and Android
               torchOn: false, // Android, launch with the torch switched on (if available)
               saveHistory: false, // Android, save scan history (default false)
               prompt : "Place a address qr code inside the scan area", // Android
               resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
               formats : "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
               orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
               disableAnimations : true, // iOS
               disableSuccessBeep: false // iOS and Android
           }
         );
      });
  }

  onLoad();
  
});

var alertDefer;
var pretty_alert = function(message){
  alertDefer = $.Deferred();
  $('.ui-lock-alert').hide();
  $('.ui-lock-alert span').text(message);
  $('.ui-lock-alert').show();
  $('.ui-lock-alert #closeAlert').click(function(){
    $('.ui-lock-alert').hide();
    alertDefer.resolve();
  });
  return alertDefer;
}

alert = function(a){ pretty_alert(a); }

var customFormatter_dero = function(cell, formatterParams, onRendered) {
    //cell - the cell component
    //formatterParams - parameters set for the column
    //onRendered - function to call when the formatter has been rendered

    // return '<div style="text-align: right;">' + cell.getValue() +'</div>';   //return the contents of the cell;

    var divisor = new Big("1000000000000");
    var x = new Big(cell.getValue());
    x = x.div(divisor);
    return '<div style="text-align: right;">' + x.toFixed(12) + '</div>';
};

var txtable = new Tabulator("#txtable", {
    columns: [{
            title: "Time",
            field: "time"
        }, {
            title: "Amount",
            field: "amount",
            sorter: "number",
            formatter: customFormatter_dero
        }, {
            title: "TXID",
            field: "txid",
            sortable: false
        }, {
            title: "Payment ID",
            field: "paymentid",
            width: "8em"
        }, {
            title: "BL Height",
            field: "height",
            sortable: false
        }, {
            title: "TopoHeight",
            field: "topoheight",
            sortable: false
        }, {
            title: "Status",
            field: "status"
        },

    ],
    // selectable:true,
    layout: "fitDataFill",
    responsiveLayout: "collapse", // collapse columns that no longer fit
    layoutColumnsOnNewData: true,
    // height : "50vh", // show only 20 tx per view, rest must be scrolled
    pagination: "local",
    paginationSize: 10,

    rowFormatter: function(row) {
        var data = row.getData();

        if (data.status == "1") {

            row.getElement().style.backgroundColor = "#ffcccb"; // spent color
        } else {
            //row.getElement().style.backgroundColor = "#e5ffff"; // incoming color

            //row.getElement().css({"background-color":"#A6A6DF"});
            // row.getElement().addClass("text-white"); 

        }
    },
});

$(document).ready(function() {

    $('.wallet-online').hide();

    $('#btn_wallet_disk_file').on('click', function() {
        $('#wallet_disk_file').click();
    });
    
    $('div#blackTheme, div#whiteTheme').on('click', function() {
        var id = $(this).attr('id');
        if (id == "blackTheme") {
            $('link[title="blackTheme"]').prop('disabled', false);
            $('link[title="whiteTheme"]').prop('disabled', true);
        } else {
            $('link[title="whiteTheme"]').prop('disabled', false);
            $('link[title="blackTheme"]').prop('disabled', true);
        }
        window.localStorage.setItem('theme', id);
    });

    var stored_theme = window.localStorage.getItem('theme'); //Cookies.get('theme');
    if (typeof(stored_theme) != undefined) {
        $('div#'+stored_theme).trigger('click');
    }

    i18next.init({
        // debug: true,
        "lng": 'en',
        "resources": translations,
        "fallbackLng": 'en',

        // attributes to translate
        translateAttributes: ['placeholder', 'value', 'title', 'alt', 'value#input.type=button', 'value#input.type=submit'],

    }, function(t) {

        //i18next();

    });

    jqueryI18next.init(i18next, $, {
        tName: 't', // --> appends $.t = i18next.t
        i18nName: 'i18n', // --> appends $.i18n = i18next
        handleName: 'localize', // --> appends $(selector).localize(opts);
        selectorAttr: 'data-i18n', // selector for translating elements
        targetAttr: 'i18n-target', // data-() attribute to grab target element to translate (if diffrent then itself)
        optionsAttr: 'i18n-options', // data-() attribute that contains options, will load/set if useOptionsAttr = true
        useOptionsAttr: false, // see optionsAttr
        parseDefaultValueFromContent: true // parses default values from content ele.val or ele.text
    });


    var stored_lang = window.localStorage.getItem('lang'); //Cookies.get('lang')
    if (typeof(stored_lang) != undefined) {
        // make sure the language reference by cookie is still valid
        if (translations[stored_lang] != 'undefined') {
            i18next.changeLanguage(stored_lang, (err, t) => {
                // Select the real language
                $('#language_picker > option[data-lang="' + stored_lang + '"]').attr('selected', 'selected');
                if (err) return console.log('something went wrong loading', err);
            });
        }
    } else { // we do not have cookie stored, so time to guess user language
        var first_lang = getFirstBrowserLanguage();

        // check language exists
        if (translations[first_lang] != undefined) {
            $('#language_picker > option[data-lang="' + first_lang + '"]').attr('selected', 'selected');
            i18next.changeLanguage(first_lang, (err, t) => {
                if (err) return console.log('something went wrong loading', err);

            });

        } else { // extract the first part of tag
            parts = first_lang.split("-");
            if (parts.length >= 2) {

                if (translations[parts[0]] != undefined) {
                    $('#language_picker > option[data-lang="' + parts[0] + '"]').attr('selected', 'selected');
                    i18next.changeLanguage(parts[0], (err, t) => {
                        if (err) return console.log('something went wrong loading', err);
                    });
                }
            }
        }
    }

    console.log(getFirstBrowserLanguage());


    $("body").localize(); // localize first time automatically

    $('#language_picker').on('change', function() {
        var lang = $(this).find('option:selected').attr('data-lang');

        window.localStorage.setItem('lang', lang); // 10 years a long time
        i18next.changeLanguage(lang, (err, t) => {
            if (err) return console.log('something went wrong loading', err);

        });
        $("body").localize();


    });

    setTimeout(function(){
        $('body').addClass('loaded');
    }, 100);
});


// this is for qrcode reader
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://dero.io",
    width: 300,
    height: 300,
    colorDark: "#000000",
    colorLight: "#ffffff",
    //correctLevel : QRCode.CorrectLevel.H  // ECC highest level, Reading is tough
    correctLevel: QRCode.CorrectLevel.L // ECC lowest level
});


var clipboard = new ClipboardJS('.clipboard');