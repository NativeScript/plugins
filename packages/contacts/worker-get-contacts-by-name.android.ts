require('@nativescript/core/globals')
var Contact = require("./models/contact").Contact;
var helper = require("./helper").ContactHelper;

/* pass debug messages to main thread since web workers do not have console access */
// function console_log(msg) { postMessage({ type: 'debug', message: msg }); }
// function console_dump(msg) { postMessage({ type: 'dump', message: msg }); }

self.onmessage = (event) => {
  try {
    var Contacts = android.provider.ContactsContract.Contacts,
    SELECTION = android.provider.ContactsContract.ContactNameColumns.DISPLAY_NAME_PRIMARY;
    var c = helper.android.getContext().getContentResolver().query(
      Contacts.CONTENT_URI,
      null,
      SELECTION + " like ?",
      ["%" + event.data.searchPredicate + "%"],
      null
    );

    if(c.getCount() > 0){
      var cts = [];
      while(c.moveToNext()){
        var contactModel = new Contact();
        contactModel.initializeFromNative(c,event.data.contactFields);
        cts.push(contactModel);
      }
      c.close();
      postMessage({ type: 'result', message: { data: cts, response: "fetch" }});
    }
    else{
      c.close();
      postMessage({ type: 'result', message: { data: null, response: "fetch" }});
    }
  } catch (e) { postMessage({ type: 'result', message: e }); }
}
