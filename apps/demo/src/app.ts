import { Application } from '@nativescript/core';
import { LoginManager } from '@nativescript/facebook';

LoginManager.init();

Application.run({ moduleName: 'app-root' });
