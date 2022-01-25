import '@nativescript/core/globals';

import { Contact } from './models/contact';
import { ContactHelper } from './helper';

/* pass debug messages to main thread since web workers do not have console access */
// function console_log(msg) { postMessage({ type: 'debug', message: msg }); }
// function console_dump(msg) { postMessage({ type: 'dump', message: msg }); }

self.onmessage = function (event) {
	try {
		const c = ContactHelper.android.getContext().getContentResolver().query(android.provider.ContactsContract.Contacts.CONTENT_URI, null, null, null, null);

		if (c.getCount() > 0) {
			let cts = [];
			while (c.moveToNext()) {
				try {
					const contactModel = new Contact();
					contactModel.initializeFromNative(c, event.data.contactFields);
					cts.push(contactModel);
				} catch (e) {
					//   console_log("Error processing contact");
				}
			}
			c.close();
			postMessage({ type: 'result', message: { data: cts, response: 'fetch' } });
		} else {
			c.close();
			postMessage({ type: 'result', message: { data: null, response: 'fetch' } });
		}
	} catch (e) {
		// console.log('error', e)
		postMessage({ type: 'result', message: e });
	}
};
