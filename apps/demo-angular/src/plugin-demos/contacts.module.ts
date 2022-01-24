import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ContactsComponent } from './contacts.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ContactsComponent }])],
  declarations: [ContactsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class ContactsModule {}
