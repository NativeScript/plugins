import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SecureStorageComponent } from './secure-storage.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SecureStorageComponent }])],
	declarations: [SecureStorageComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class SecureStorageModule {}
