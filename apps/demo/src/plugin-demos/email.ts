import { Observable, EventData, Page } from '@nativescript/core';
import { compose } from '@nativescript/email';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends Observable {
  testIt() {
    compose({
      subject: 'Yo',
      body: 'Hello <strong>dude</strong> :)',
      to: ['eddyverbruggen@gmail.com', 'to@person2.com'],
      cc: ['ccperson@somewhere.com'],
      bcc: ['eddy@combidesk.com', 'eddy@x-services.nl'],
      attachments: [
        {
          fileName: 'arrow1.png',
          path:
            'base64://iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHGlET1QAAAACAAAAAAAAABQAAAAoAAAAFAAAABQAAAB5EsHiAAAAAEVJREFUSA1iYKAimDhxYjwIU9FIBgaQgZMmTfoPwlOmTJGniuHIhlLNxaOGwiNqNEypkwlGk9RokoIUfaM5ijo5Clh9AAAAAP//ksWFvgAAAEFJREFUY5g4cWL8pEmT/oMwiM1ATTBqONbQHA2W0WDBGgJYBUdTy2iwYA0BrILDI7VMmTJFHqv3yBUEBQsIg/QDAJNpcv6v+k1ZAAAAAElFTkSuQmCC',
          mimeType: 'image/png',
        },
        // {
        //   fileName: 'logo.png',
        //   path: logoPath,
        //   mimeType: 'image/png',
        // },
      ],
    }).then(
      function () {
        console.log('Email composer closed');
      },
      function (err) {
        console.log('Error: ' + err);
      }
    );
  }
}
