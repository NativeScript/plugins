require('@nativescript/core/globals')
var Contact = require("./models/contact").Contact;
var helper = require("./helper").ContactHelper;

/* pass debug messages to main thread since web workers do not have console access */
// function console_log(msg) { postMessage({ type: 'debug', message: msg }); }
// function console_dump(msg) { postMessage({ type: 'dump', message: msg }); }

self.onmessage = function (event) {
  try {
    var c = helper.android.getContext().getContentResolver().query(android.provider.ContactsContract.Contacts.CONTENT_URI, null, null, null, null);

    if(c.getCount() > 0){
      var cts = [];
      while(c.moveToNext()){
        try {
          var contactModel = new Contact();
          contactModel.initializeFromNative(c,event.data.contactFields);
          cts.push(contactModel);
        } catch(e) {
        //   console_log("Error processing contact");
        }
      }
      c.close();
      postMessage({ type: 'result', message: { data: cts, response: "fetch" }});
    } else {
      c.close();
      postMessage({ type: 'result', message: { data: null, response: "fetch" }})
    }
  } catch (e) { 
    // console.log('error', e)
    postMessage({ type: 'result', message: e }); 
  }
}
