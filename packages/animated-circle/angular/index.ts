import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { AnimatedCircle } from '@nativescript/animated-circle';

@NgModule()
export class NativeScriptAnimatedCircleModule {}

// Uncomment this line if the package provides a custom view component
registerElement('AnimatedCircle', () => AnimatedCircle);
