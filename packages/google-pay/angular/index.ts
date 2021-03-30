import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { GooglePayBtn } from '@nativescript/google-pay';

@NgModule()
export class NativeScriptGooglePayModule {}

// Uncomment this line if the package provides a custom view component
registerElement('GooglePayBtn', () => GooglePayBtn);
