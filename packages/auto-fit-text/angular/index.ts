import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { AutoFitText } from '@nativescript/auto-fit-text';

@NgModule()
export class NativeScriptAutoFitTextModule {}

registerElement('AutoFitText', () => AutoFitText);
