# @nativescript/pdf

A simple PDF viewer. It conveniently uses the iOS `WKWebView`, and for Android it uses [`AndroidPdfViewer`](https://github.com/barteksc/AndroidPdfViewer).

> *Remark* [This repository](https://github.com/NativeScript/plugins/blob/main/packages/pdf) is the replacement for [madmas/nativescript-pdf-view](https://github.com/madmas/nativescript-pdf-view) which was a fork of [the original by Merott](https://github.com/Merott/nativescript-pdf-view) and will be used with his consent to provide further maintenance of this NativeScript plugin.

## Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Core](#core)
  * [Angular](#angular)
  * [Vue](#vue)
  * [Svelte](#svelte)
  * [React](#react)
* [PDFView API](#pdfview-api)
  * [loadEvent](#loadevent)
  * [src](#src)
  * [notifyOfEvent()](#notifyofevent)
  * [loadPDF()](#loadpdf)

## Installation

```
npm install @nativescript/pdf
```

### Android

If there is an error building `':app:mergeDebugNativeLibs'`, message `2 files found with path 'lib/arm64-v8a/libc++_shared.so'`, add this in your `app.gradle` file in the android {} section.

```
  packagingOptions {
    pickFirst 'lib/*/libc++_shared.so'
  }
```

## Usage

### Core

```xml
<Page
  xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:pdf="@nativescript/pdf"
  loaded="pageLoaded">
  <pdf:PDFView src="{{ pdfUrl }}" load="{{ onLoad }}" />
</Page>
```
See the complete example at [NativeScript TypeScript: pdf](https://stackblitz.com/edit/nativescript-stackblitz-templates-4ofdg2?file=app/main-page.xml)

### Angular

```ts
import { NativeScriptPdfModule } from '@nativescript/pdf/angular'

@NgModule({
	imports: [
    NativeScriptCommonModule, 
    ...
    NativeScriptPdfModule
  ],

```

```html
<PDFView [src]="pdfUrl" (load)="onLoad()"></PDFView>
```
See the complete example at [NativeScript Angular: pdf](https://stackblitz.com/edit/nativescript-stackblitz-templates-mrakue?file=src/app/pdf/pdf-viewer.component.html)

### Vue

1. Register the component in the `app.ts` file.

```ts
registerElement('PDFView', () => require('@nativescript/pdf').PDFView);
```

2. Then, use it in markup.
```xml
 <PDFView :src="pdfUrl" row="1"></PDFView>
```

### Svelte

1. Register the component in the `app.ts` file.

```ts
registerElement('pDFView', () => require('@nativescript/pdf').PDFView);
```

2. Then, use it in markup.
```xml
 <pDFView src={ pdfUrl } row="1"></pDFView>
```

See the complete example [NativeScript Svelte: pdf](https://stackblitz.com/edit/nativescript-stackblitz-templates-neazce?file=app/components/Home.svelte)

### React

1. Register the component, in the `app.ts` file:

```ts
interface PDFViewAttributes extends ViewAttributes {
src:string;
}
declare global {
    module JSX {
        interface IntrinsicElements {
          
          pdfView: NativeScriptProps<PDFViewAttributes, PDFViewCommon>
            
        }
    }
}
registerElement("pdfView", ()=> require("@nativescript/pdf").PDFView)
```

2. Use it in markup as follows:

```xml
<gridLayout class="px-5" columns="*" rows="auto, *">

  <button
      height="70"
      text="Show Another!"
      class="text-[#76ABEB] font-bold mt-8 mb-5 text-lg"
      onTap={this.changePDF}
  >
  </button>

  <pdfView src={this.state.pdfUrl} row="1" onLoaded={this.onLoaded}></pdfView>
</gridLayout>
```

You can find the complete example at StackBlitz [here](https://stackblitz.com/edit/nativescript-stackblitz-templates-v1g5qp?file=src/components/ScreenOne.tsx). 


## PDFView API

### loadEvent

```ts
PDFView.loadEvent
```

---
### src

```ts
pdfView.src = 'some-pdf-url'
```

Sets the src of the a pdf file

---
### notifyOfEvent()

```ts
PDFView.notifyOfEvent(eventName: string, pdfViewRef: WeakRef<Common>)
```

---
### loadPDF()

```ts
pdfView.loadPDF(src)
```

Loads the PDF file at the specified source.
