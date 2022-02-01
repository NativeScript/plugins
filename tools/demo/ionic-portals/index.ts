import { DemoSharedBase } from '../utils';
import {  } from '@nativescript/ionic-portals';
import { CoreTypes, Page, View } from '@nativescript/core';

const ionicWebStartId = 'ionicWebStart';

export class DemoSharedIonicPortals extends DemoSharedBase {

  constructor(protected page: Page) {
    super();
  }

  testIt() {
    this._bounce().then(() => {
      this._bounce();
    })
  }

  private _bounce() {
    return new Promise<void>(resolve => {
      (<View>this.page.getViewById(ionicWebStartId)).animate({
        translate: { x: 0, y: 75 },
        duration: 500,
        curve: CoreTypes.AnimationCurve.easeInOut
      }).then(() => {
        (<View>this.page.getViewById(ionicWebStartId)).animate({
          translate: { x: 0, y: 0 },
          duration: 500,
          curve: CoreTypes.AnimationCurve.easeInOut
        }).then(() => {
          resolve();
        })
      })
    });
  }
}