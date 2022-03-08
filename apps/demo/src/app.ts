import { Application } from '@nativescript/core';
import { LoginManager } from '@nativescript/facebook';
import { init } from '@nativescript/background-http';

LoginManager.init();
init();

Application.run({ moduleName: 'app-root' });
