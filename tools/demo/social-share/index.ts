import { DemoSharedBase } from '../utils';
import { shareImage, shareText, shareUrl } from '@nativescript/social-share';
// import { ImageSource } from '@nativescript/core';

export class DemoSharedSocialShare extends DemoSharedBase {
	doShareImage() {
    // NOTE: image omitted from repo to save size - feel free to test against any image you have locally
    console.log('Image omitted from test. See Note in tools/demo/social-share');
    // const image = ImageSource.fromFileSync("~/images/nativescript.jpg");
    // shareImage(image);
  };
  
  doShareText() {
    shareText("I love NativeScript!");
  };
  
  doShareUrl() {
    shareUrl("https://www.nativescript.org/", "Home of NativeScript", "How would you like to share this url?");
  };
}
