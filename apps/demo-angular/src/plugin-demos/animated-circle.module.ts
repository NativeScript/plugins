import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativeScriptAnimatedCircleModule } from '@nativescript/animated-circle/angular';
import { AnimatedCircleComponent } from './animated-circle.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptAnimatedCircleModule, NativeScriptRouterModule.forChild([{ path: '', component: AnimatedCircleComponent }])],
	declarations: [AnimatedCircleComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AnimatedCircleModule {}
