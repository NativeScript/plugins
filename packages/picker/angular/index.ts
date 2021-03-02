import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { PickerField } from '@nativescript/picker';
import { DIRECTIVES } from './picker.directive';

@NgModule({
	declarations: [DIRECTIVES],
	exports: [DIRECTIVES],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativeScriptPickerModule {}

// Uncomment this line if the package provides a custom view component
registerElement('PickerField', () => PickerField);
