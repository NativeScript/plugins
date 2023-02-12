# @nativescript/auto-fit-text

A plugin that extends the Nativescript [Label](https://docs.nativescript.org/ui/label) with the functionality to adjust the font size according to the label's width.

## Installation

```cli
npm install @nativescript/auto-fit-text
```

## Use @nativescript/auto-fit-text
The following are examples of how to use the `@nativescript/auto-fit-text` plugin in different JS flavors.

### Core

```xml
<Page
  xmlns="http://schemas.nativescript.org/tns.xsd"
  loaded="pageLoaded"
  class="page"
  xmlns:AFT="@nativescript/auto-fit-text"
>
  <StackLayout class="p-20">
    <AFT:AutoFitText
      text="Testinggggggggggggggggg"
      textWrap="false"
    ></AFT:AutoFitText>
  </StackLayout>
</Page>
```

### Angular

1. Register the view by adding the plugin's module to the NgModule where you want to access the view. 

```typescript
import { NativeScriptAutoFitTextModule } from '@nativescript/auto-fit-text/angular';

@NgModule({
	imports: [NativeScriptAutoFitTextModule],
})
```

2. Use the view in HTML.

```xml
<AutoFitText row="2" fontSize="48" text="Lorem Ipsum this line of text with fontSize ignored because the text is so long." textWrap="false"></AutoFitText>
```

### Vue

1. 
```ts
import { registerElement } from "nativescript-vue"

registerElement("AutoFitText", ()=>require("@nativescript/auto-fit-text").AutoFitText)
```
```xml
<AutoFitText fontSize="48" text="Lorem Ipsum this line of text with fontSize ignored because the text is so long." />
```
## Credits

[@grantland - android-autofittextview](https://github.com/grantland/android-autofittextview)

## License

Apache License Version 2.0, January 2004
