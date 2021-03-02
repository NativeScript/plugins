import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { PickerField } from '@nativescript/picker';

@NgModule()
export class NativeScriptPickerModule {}

// Uncomment this line if the package provides a custom view component
registerElement('PickerField', () => PickerField);
