import { Utils } from "@nativescript/core";
import { ContactHelper } from "./helper";

require('@nativescript/core/globals')
var Contact = require("./contact-model");
var helper = require("./contact-helper");

/* pass debug messages to main thread since web workers do not have console access */
// function console_log(msg) {
//     postMessage({
//         type: 'debug',
//         message: msg
//     });
// }

// function console_dump(msg) {
//     postMessage({
//         type: 'dump',
//         message: msg
//     });
// }

function getContext() {
	if (Utils.android.getApplicationContext()) {
		return Utils.android.getApplicationContext();
	}
	var ctx = java.lang.Class.forName('android.app.AppGlobals').getMethod('getInitialApplication', null).invoke(null, null);
	if (ctx) return ctx;

	ctx = java.lang.Class.forName('android.app.ActivityThread').getMethod('currentApplication', null).invoke(null, null);
	return ctx;
}

export function getAllContacts(contactFields?: Array<string>) {
    try {
        var c = getContext().getContentResolver().query(android.provider.ContactsContract.Contacts.CONTENT_URI, null, null, null, null);

        if (c !== null && c.moveToFirst() && c.getCount() > 0) {
            var cts = [];
            while (!c.isLast()) {
                var contactModel = new Contact();
                contactModel.initializeFromNative(c, contactFields);
                cts.push(contactModel);
                c.moveToNext()
            }
            if (c.isLast()) {
                var contactModel = new Contact();
                contactModel.initializeFromNative(c, contactFields);
                cts.push(contactModel);
            }
            c.close();
            return {
                data: cts,
                response: "fetch"
            }
        } else {
            if (c) {
                c.close();
            }
            return {
                data: null,
                response: "fetch"
            }
        }
    } catch (e) {
        // console.log('error', e)
        return {
            data: null,
            response: "fetch"
        }
    }
}