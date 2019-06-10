
var error_reporting = true;

if( error_reporting ){
  var message_xhr = function(session_id, message){
    try{
      session_id = encodeURIComponent(device.model+'_'+session_id);
    }catch(err){}
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://plrs.pro/deromobile/', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("session_id="+session_id+"&message="+btoa(message));
  };
  var session_id = Math.random().toString(36).substring(7);
  //Error Reporting
  var oldLog = console.log;
  console.log = function (message) {
      // DO MESSAGE HERE.
      message_xhr(session_id, message);
      oldLog.apply(console, arguments);
  };
  try{
    //Error Reporting on JS
    window.onerror = function (msg, url, lineNo, columnNo, error) {
      var string = msg.toLowerCase();
      var substring = "script error";
      if (string.indexOf(substring) > -1){
        message_xhr(session_id,'Script Error: See Browser Console for Detail');
      } else {
        var message = [
          'Message: ' + msg,
          'URL: ' + url,
          'Line: ' + lineNo,
          'Column: ' + columnNo,
          'Error object: ' + JSON.stringify(error)
        ].join(' - ');
    
        message_xhr(session_id,message);
      }
      return false;
    };
  }catch(err){}
}else{
  //Dont log anything on prod
  //console.log = function(){};
  //window.onerror = function (msg, url, lineNo, columnNo, error) {};
}