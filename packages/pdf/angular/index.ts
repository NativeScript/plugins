import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { PDFView } from '@nativescript/pdf';

@NgModule()
export class NativeScriptPdfModule {}

registerElement('PDFView', () => PDFView);
