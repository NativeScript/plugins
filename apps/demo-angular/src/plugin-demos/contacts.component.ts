import { Component, NgZone } from '@angular/core';
import { DemoSharedContacts } from '@demo/shared';
import { } from '@nativescript/contacts';

@Component({
	selector: 'demo-contacts',
	templateUrl: 'contacts.component.html',
})
export class ContactsComponent {
  
  demoShared: DemoSharedContacts;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedContacts();
  }

}