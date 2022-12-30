# @nativescript/auto-fit-text

```cli
npm install @nativescript/auto-fit-text
```

This plugin is based on the Nativescript Label implementation but with changes to adjust the font size according of the label's width

## Using AutoFitText

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

```typescript
import { NativeScriptAutoFitTextModule } from '@nativescript/auto-fit-text/angular';

// Be sure to add the plugin module to your NgModule
@NgModule({
	imports: [NativeScriptAutoFitTextModule],
})
```

```xml
<AutoFitText row="2" fontSize="48" text="Lorem Ipsum this line of text with fontSize ignored because the text is so long." textWrap="false"></AutoFitText>
```

### Vue
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
