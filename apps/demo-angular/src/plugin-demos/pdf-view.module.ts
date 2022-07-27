import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PdfViewComponent } from './pdf-view.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: PdfViewComponent }])],
  declarations: [PdfViewComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class PdfViewModule {}
