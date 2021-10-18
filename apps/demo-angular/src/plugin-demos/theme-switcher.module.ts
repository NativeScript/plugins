import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ThemeSwitcherComponent } from './theme-switcher.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ThemeSwitcherComponent }])],
	declarations: [ThemeSwitcherComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ThemeSwitcherModule {}
