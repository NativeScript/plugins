import { Application } from '@nativescript/core';
import { ContactHelper } from '../helper';
import { GroupCommon } from './group.common';
/* missing constants from the {N} */
const ACCOUNT_TYPE = 'account_type'; // android.provider.ContactsContract.Groups.ACCOUNT_TYPE
const ACCOUNT_NAME = 'account_name'; // android.provider.ContactsContract.Groups.ACCOUNT_NAME

function getActivity() {
	return Application.android.foregroundActivity || Application.android.startActivity;
}

export class Group extends GroupCommon {
	initializeFromNative(groupData) {
		var mainCursorJson = ContactHelper.android.convertNativeCursorToJson(groupData);

		this.id = mainCursorJson['_id'];
		this.name = mainCursorJson['title'];
	}

	save(useDefault) {
		//Android will always use the default account.
		var mgr = android.accounts.AccountManager.get(getActivity());
		var accounts = mgr.getAccounts();
		var accountName = null;
		var accountType = null;
		var id = this.id;
		var rawId: any = 0;
		var contentResolver = getActivity().getContentResolver();
		var ops = new java.util.ArrayList();
		var aGroupColumns = android.provider.ContactsContract.GroupsColumns;

		if (accounts.length === 0) {
			throw new Error('No Accounts!');
		}

		accountName = accounts[0].name;
		accountType = accounts[0].type;

		if (id && id !== '') {
			var rawIdCursor = contentResolver.query(android.provider.ContactsContract.Groups.CONTENT_URI, ['_id'], '_id = ' + id, null, null);
			if (!rawIdCursor.moveToFirst()) {
				throw new Error('Error optaining group id');
				return;
			}

			rawId = rawIdCursor.getString(rawIdCursor.getColumnIndex('_id'));
			rawIdCursor.close();

			ops.add(
				android.content.ContentProviderOperation.newUpdate(android.provider.ContactsContract.Groups.CONTENT_URI)
					.withValue(ACCOUNT_TYPE, accountType)
					.withValue(ACCOUNT_NAME, accountName)
					.withValue(aGroupColumns.TITLE, this.name)
					.withSelection('_id' + '=?', [rawId])
					.build()
			);
		} else {
			ops.add(android.content.ContentProviderOperation.newInsert(android.provider.ContactsContract.Groups.CONTENT_URI).withValue(ACCOUNT_TYPE, accountType).withValue(ACCOUNT_NAME, accountName).withValue(aGroupColumns.TITLE, this.name).build());
		}

		// Perform the save
		contentResolver.applyBatch(android.provider.ContactsContract.AUTHORITY, ops);
	}

	delete() {
		var mgr = android.accounts.AccountManager.get(getActivity()),
			accounts = mgr.getAccounts(),
			id = this.id,
			rawId: any = 0,
			contentResolver = getActivity().getContentResolver(),
			ops = new java.util.ArrayList();

		if (accounts.length === 0) {
			throw new Error('No Accounts!');
		}

		if (id && id !== '') {
			var rawIdCursor = contentResolver.query(android.provider.ContactsContract.Groups.CONTENT_URI, ['_id'], '_id = ' + id, null, null);
			if (!rawIdCursor.moveToFirst()) {
				throw new Error('Error optaining group id');
				return;
			}

			rawId = rawIdCursor.getString(rawIdCursor.getColumnIndex('_id'));
			rawIdCursor.close();

			ops.add(
				android.content.ContentProviderOperation.newDelete(android.provider.ContactsContract.Groups.CONTENT_URI)
					.withSelection('_id' + '=?', [rawId])
					.build()
			);

			// Perform the delete
			contentResolver.applyBatch(android.provider.ContactsContract.AUTHORITY, ops);
		}
	}

	addMember(contact) {
		if (contact.id && contact.id !== '' && this.id && this.id !== '') {
			var contentResolver = getActivity().getContentResolver(),
				ops = new java.util.ArrayList();

			ops.add(android.content.ContentProviderOperation.newInsert(android.provider.ContactsContract.Data.CONTENT_URI).withValue(android.provider.ContactsContract.DataColumns.MIMETYPE, android.provider.ContactsContract.CommonDataKinds.GroupMembership.CONTENT_ITEM_TYPE).withValue(android.provider.ContactsContract.DataColumns.RAW_CONTACT_ID, contact.id.toString()).withValue(android.provider.ContactsContract.CommonDataKinds.GroupMembership.GROUP_ROW_ID, this.id.toString()).build());

			contentResolver.applyBatch(android.provider.ContactsContract.AUTHORITY, ops);
		}
	}

	removeMember(contact) {
		if (contact.id && contact.id !== '' && this.id && this.id !== '') {
			var contentResolver = getActivity().getContentResolver(),
				ops = new java.util.ArrayList(),
				SELECTION = android.provider.ContactsContract.DataColumns.MIMETYPE + '=? AND ' + android.provider.ContactsContract.DataColumns.RAW_CONTACT_ID + '=? AND ' + android.provider.ContactsContract.CommonDataKinds.GroupMembership.GROUP_ROW_ID + '=?';

			ops.add(android.content.ContentProviderOperation.newDelete(android.provider.ContactsContract.Data.CONTENT_URI).withSelection(SELECTION, [android.provider.ContactsContract.CommonDataKinds.GroupMembership.CONTENT_ITEM_TYPE, contact.id.toString(), this.id.toString()]).build());

			// Perform the delete
			contentResolver.applyBatch(android.provider.ContactsContract.AUTHORITY, ops);
		}
	}
}
