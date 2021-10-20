import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { CloudinaryComponent } from './cloudinary.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: CloudinaryComponent }])],
	declarations: [CloudinaryComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class CloudinaryModule {}
