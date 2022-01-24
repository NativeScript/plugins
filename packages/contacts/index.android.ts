import { AndroidApplication, Application, Utils } from '@nativescript/core';
import { ContactHelper } from './helper';
import { Contact, Group } from './models';

export * from './common';
export * from './models';

function getContext() {
	if (Utils.android.getApplicationContext()) {
		return Utils.android.getApplicationContext();
	}
	var ctx = java.lang.Class.forName('android.app.AppGlobals').getMethod('getInitialApplication', null).invoke(null, null);
	if (ctx) return ctx;

	ctx = java.lang.Class.forName('android.app.ActivityThread').getMethod('currentApplication', null).invoke(null, null);
	return ctx;
}

export class Contacts {
	static getContact() {
		return new Promise(function (resolve, reject) {
			try {
				var PICK_CONTACT = 1001;
				var openContactsIntent = new android.content.Intent(android.content.Intent.ACTION_PICK);

				openContactsIntent.setType(android.provider.ContactsContract.Contacts.CONTENT_TYPE);

				//   var previousResult = Application.android.onActivityResult;

				var handleActivityResult = function (eventData) {
					var requestCode = eventData.requestCode;
					var resultCode = eventData.resultCode;
					var data = eventData.intent;

					switch (requestCode) {
						case PICK_CONTACT:
							// appModule.android.onActivityResult = previousResult;
							Application.android.off('activityResult', handleActivityResult);

							if (resultCode === android.app.Activity.RESULT_OK && data != null) {
								var contentResolver = getContext().getContentResolver();
								var pickedContactData = data.getData();
								var mainCursor = contentResolver.query(pickedContactData, null, null, null, null);
								mainCursor.moveToFirst();
								if (!mainCursor) {
									mainCursor.close();
									reject();
									return;
								}

								//Convert the native contact object
								var contactModel = new Contact();
								contactModel.initializeFromNative(mainCursor);
								mainCursor.close();

								return resolve({
									data: contactModel,
									response: 'selected',
								});
							} else {
								return resolve({
									data: null,
									response: 'cancelled',
								});
							}
							break;
						default:
							// if (typeof previousResult === "function") {
							//   previousResult(requestCode, resultCode, data);
							// }
							break;
					}
				};

				Application.android.on(AndroidApplication.activityResultEvent, handleActivityResult);

				Application.android.foregroundActivity.startActivityForResult(openContactsIntent, PICK_CONTACT);
			} catch (e) {
				if (reject) {
					reject(e);
				}
			}
		});
	}

	static getContactsByName(searchPredicate, contactFields) {
		return new Promise(function (resolve, reject) {
			var worker = new Worker('./worker-get-contacts-by-name.js');
			worker.postMessage({
				searchPredicate: searchPredicate,
				contactFields: contactFields,
			});
			worker.onmessage = function (event) {
				if (event.data.type == 'debug') {
					// console.log(event.data.message);
				} else if (event.data.type == 'dump') {
					// console.dump(event.data.message);
				} else if (event.data.type == 'result') {
					worker.terminate();
					// add nativescript image-source object to photo property since it does not work inside web worker
					if (contactFields.indexOf('photo') > -1) {
						resolve(ContactHelper.android.addImageSources(event.data.message));
					} else {
						resolve(event.data.message);
					}
				}
			};
			worker.onerror = function (e) {
				// console.dump(e);
			};
		});
	}

	static getAllContacts(contactFields) {
		return new Promise(function (resolve, reject) {
			var worker = new Worker('./worker-get-all-contacts.js');
			
			worker.postMessage({ contactFields: contactFields });
			worker.onmessage = function (event) {
				if (event.data.type == 'debug') {
					// console.log(event.data.message);
				} else if (event.data.type == 'dump') {
					// console.dump(event.data.message);
				} else if (event.data.type == 'result') {
					worker.terminate();

					// init worker serialized contacts with Contact model
					var _contacts = [];
					try {
						(event.data.message.data || []).forEach(function (contact) {
							var contactModel = new Contact();
							contactModel.initializeFromObject(contact, event.data.contactFields);
							_contacts.push(contactModel);
						});
					} catch (e) {
						// console.dump(e)
					}
					event.data.message.data = _contacts;

					// add nativescript image-source object to photo property since it does not work inside web worker
					if (contactFields.indexOf('photo') > -1) {
						resolve(ContactHelper.android.addImageSources(event.data.message));
					} else {
						resolve(event.data.message);
					}
				}
			};
			worker.onerror = function (e) {
				// console.dump(e);
			};
		});
	}

	static getAllContactsWithoutWorker(contactFields) {
		return new Promise(function (resolve, reject) {
			var result = Contacts.getAllContacts(contactFields);
			if (contactFields.indexOf('photo') > -1) {
				resolve(ContactHelper.android.addImageSources(result));
			} else {
				resolve(result);
			}
		});
	}

	static getGroups(name) {
		return new Promise(function (resolve, reject) {
			var aGroups = android.provider.ContactsContract.Groups,
				aGroupColumns = android.provider.ContactsContract.GroupsColumns,
				groupCursor;

			if (name) {
				groupCursor = helper
					.getContext()
					.getContentResolver()
					.query(aGroups.CONTENT_URI, null, aGroupColumns.TITLE + '=?', [name], null);
			} else {
				groupCursor = getContext().getContentResolver().query(aGroups.CONTENT_URI, null, null, null, null);
			}

			if (groupCursor.getCount() > 0) {
				var groups = [],
					groupModel = null;

				while (groupCursor.moveToNext()) {
					groupModel = new Group();
					groupModel.initializeFromNative(groupCursor);
					groups.push(groupModel);
				}

				groupCursor.close();

				resolve({
					data: groups,
					response: 'fetch',
				});
			} else {
				groupCursor.close();
				resolve({
					data: null,
					response: 'fetch',
				});
			}
		});
	}
	static getContactsInGroup(g) {
		return new Promise(function (resolve, reject) {
			var where = android.provider.ContactsContract.CommonDataKinds.GroupMembership.GROUP_ROW_ID + '=?' + ' AND ' + android.provider.ContactsContract.DataColumns.MIMETYPE + '=?',
				whereArgs = [g.id.toString(), android.provider.ContactsContract.CommonDataKinds.GroupMembership.CONTENT_ITEM_TYPE],
				groupCursor = getContext().getContentResolver().query(android.provider.ContactsContract.Data.CONTENT_URI, null, where, whereArgs, null);

			if (groupCursor.getCount() > 0) {
				var cts = [];

				while (groupCursor.moveToNext()) {
					var Contacts = android.provider.ContactsContract.Contacts,
						SELECTION = '_id',
						rawId = groupCursor.getString(groupCursor.getColumnIndex('raw_contact_id')),
						c = helper
							.getContext()
							.getContentResolver()
							.query(Contacts.CONTENT_URI, null, SELECTION + ' = ?', [rawId], null);

					while (c.moveToNext()) {
						var contactModel = new Contact();
						contactModel.initializeFromNative(c);
						cts.push(contactModel);
					}

					c.close();
				}
				groupCursor.close();
				resolve({
					data: cts,
					response: 'fetch',
				});
			} else {
				groupCursor.close();
				resolve({
					data: null,
					response: 'fetch',
				});
			}
		});
	}
}
