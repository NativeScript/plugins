import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SwiftUiComponent } from './swift-ui.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SwiftUiComponent }])],
	declarations: [SwiftUiComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class SwiftUiModule {}
