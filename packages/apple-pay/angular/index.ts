import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { ApplePayBtn } from '@nativescript/apple-pay';

@NgModule()
export class NativeScriptApplePayModule {}

// Uncomment this line if the package provides a custom view component
registerElement('ApplePayBtn', () => ApplePayBtn);
