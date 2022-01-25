import '@nativescript/core/globals';

import { Contact } from './models/contact';
import { ContactHelper } from './helper';

/* pass debug messages to main thread since web workers do not have console access */
// function console_log(msg) { postMessage({ type: 'debug', message: msg }); }
// function console_dump(msg) { postMessage({ type: 'dump', message: msg }); }

self.onmessage = (event) => {
	try {
		const Contacts = android.provider.ContactsContract.Contacts;
		const SELECTION = android.provider.ContactsContract.ContactNameColumns.DISPLAY_NAME_PRIMARY;

		const c = ContactHelper.android
			.getContext()
			.getContentResolver()
			.query(Contacts.CONTENT_URI, null, SELECTION + ' like ?', ['%' + event.data.searchPredicate + '%'], null);

		if (c.getCount() > 0) {
			const cts = [];
			while (c.moveToNext()) {
				const contactModel = new Contact();
				contactModel.initializeFromNative(c, event.data.contactFields);
				cts.push(contactModel);
			}
			c.close();
			postMessage({ type: 'result', message: { data: cts, response: 'fetch' } });
		} else {
			c.close();
			postMessage({ type: 'result', message: { data: null, response: 'fetch' } });
		}
	} catch (e) {
		postMessage({ type: 'result', message: e });
	}
};
