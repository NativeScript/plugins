import { ContactHelper } from "./helper";
import { Contact } from './models';

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

export function getAllContacts(contactFields?: Array<string>) {
    try {
        var c = ContactHelper.android.getContext().getContentResolver().query(android.provider.ContactsContract.Contacts.CONTENT_URI, null, null, null, null);

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