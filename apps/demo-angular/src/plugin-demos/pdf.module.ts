import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativeScriptPdfModule } from '@nativescript/pdf/angular';
import { PdfComponent } from './pdf.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: PdfComponent }]), NativeScriptPdfModule],
	declarations: [PdfComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class PdfModule {}
