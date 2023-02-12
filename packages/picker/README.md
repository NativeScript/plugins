# @nativescript/picker

A plugin that provides a UI element for picking an object/value from a list opened in a modal popup.
<!-- TODO: Add SB -->
## Contents
* [Installation](#installation)
* [Usage](#usage)
    * [Core](#core) 
        * [Using a custom item template](#using-a-custom-item-template)
        * [Data filtering](#data-filtering)
        * [Style the Picker](#style-the-picker)
    * [Angular](#angular)
        * [Using a custom item template](#using-a-custom-item-template-1)
    * [Vue](#vue)
        * [Using a custom item template](#using-a-custom-item-template-2)
* [PickerField API](#pickerfield-api)
    * [Properties](#properties)
    * [Methods](#methods)
    * [Events](#events)

## Installation
```cli
npm install @nativescript/picker
```

| <img alt="PickerField on iOS" src="https://raw.githubusercontent.com/NativeScript/nativescript-picker/master/docs/picker-ios.gif" height="590px"/> | <img alt="PickerField on Android" src="https://raw.githubusercontent.com/NativeScript/nativescript-picker/master/docs/picker-android.gif" height="590px"/>
|:-----------|:-----------------
| `iOS` | `Android`

## Usage

### Core

Register the plugin namespace in the `<Page>` view using the `xmlns` attribute 

```xml
<Page
   xmlns="http://schemas.nativescript.org/tns.xsd"
   xmlns:picker="@nativescript/picker">
   <picker:PickerField hint="Click here" items="{{ pickerItems }}"/>
...
```
#### Using a custom item template

```xml
<picker:PickerField focusOnShow="true" filterKeyName="name" showFilter="{{ enableFilter }}" pickerTitle="Nativescript Picker" rowHeight="60" id="picker" hint="Click here" textField="name" padding="10" pickerOpened="{{ pickerOpened }}" pickerClosed="{{ pickerClosed }}"
                    items="{{ pickerItems }}" >
    <picker:PickerField.itemTemplate>
        <GridLayout height="60">
            <Label text="{{ name}}" textWrap="true" verticalAlignment="center" />
            
        </GridLayout>
    </picker:PickerField.itemTemplate>
</picker:PickerField>

```

#### Data filtering

You can filter the data by setting `showFilter="true"`. By default, the plugin will look at the `name` key of the items, but you can control this by setting `filterKeyName="title"`, assuming your data Items contains a title key :

> focus the search bar by setting `focusOnShow="true"`

```ts
let dataItems = new ObservableArray<{title: string, age: number}>();

for(let i = 0; i <= 30; i++) {
    dataItems.push({
        title: "Title" + i,
        age: 30 + i
    })
}
```

<img width="350" src="https://user-images.githubusercontent.com/18148534/210265624-970a308b-1792-4d2b-a54f-4f17bc1dd4c4.gif" />

#### Get the selected item

To get the selected item, listen to the `pickerClosed` event to get the `selectedIndex` value.

```xml
<picker:PickerField pickerClosed="{{ pickerClosed }}"
                    items="{{ pickerItems }}" />
```
```ts

pickerClosed(args) {
    let index = args.object?.selectedIndex;
    console.log('Picker > closed', index);
    console.log('Picker > closed', dataItems[index].title);
}
```

#### Style the Picker

The `PickerField` can be targeted in CSS through its element selector and additionally by setting a class. The modal window opened by the `PickerField` contains a `Page` element that contains an `ActionBar` and a `ListView`. This Page element can be targeted with the `PickerPage` selector and through it, you can style the action bar and the list view with selectors like `PickerPage ActionBar` and `PickerPage ListView`. In addition to that, if you set a class on the PickerField, it will be transferred to the `PickerPage` and with it, you can style individual modals.

You can target the Picker via the following classes: 

- `pickerRootModal` targetting the `Modal` 
```css
.pickerRootModal {
/* Your CSS */

}
```
- `pickerPage` targetting the `Page`

```css
.pickerPage {
/* Your CSS */

}
```
- `pickerGridLayout` targetting the `GridLayout` wrapper that contains all the views
```css
.pickerGridLayout {
/* Your CSS */

}
```
- `pickerListView` targetting the `ListView`
```css
.pickerListView {
/* Your CSS */
}
```
- `pearchBarContainer` targetting the search bar container `StackLayout`
```css
.pearchBarContainer {
    /* Your CSS */
}
```
- `pickerSearchBar` targetting the search bar `TextField`
```css
.pickerSearchBar {
    /* Your CSS */
}
```

### Angular

Register the picker by importing the plugin module:

```ts
import { NativeScriptPickerModule } from "@nativescript/picker/angular";
...
@NgModule({
    imports: [
        NativeScriptPickerModule,
        ...
    ],
    ...
```

Then use it in HTML as follows:

```html
<PickerField hint="Click here" [items]="pickerItems"></PickerField>
```

#### Using a custom item template

Use `ng-template` to define a custom item template.

```html
<PickerField hint="Click here" class="picker-field" textField="name" [pickerTitle]="'Select item from list'" [items]="items">
	<ng-template let-item="item">
		<GridLayout columns="auto, *" rows="auto, *">
			<Label text="Static text:" col="0"></Label>
			<Label [text]="item?.name" col="0" row="1"></Label>
			<Image [src]="item?.imageUrl" col="1" row="0" rowSpan="2"></Image>
		</GridLayout>
	</ng-template>
</PickerField>
```

With the following bindings:

```ts
interface IDataItem {
	name: string;
	id: number;
	description: string;
	imageUrl: string;
}

this.items = new ObservableArray<IDataItem>();
for (let i = 0; i < 20; i++) {
	this.items.push({
		name: 'Item ' + i,
		id: i,
		description: 'Description ' + i,
		imageUrl: 'https://picsum.photos/150/70/?random',
	});
}
```
### Vue

First, register the picker in the `app.ts` file for global use.


```ts
import PickerField from '@nativescript/picker/vue';

const app = createApp(Home)

app.use(PickerField)
```

Then use it in markup as follows:

```html
<PickerField hint="Click here"></PickerField>
```

### Using a custom item template

Use the `<v-template>` element to create a custom item template.

```xml
 <PickerField hint="Click here"
    ref="apiPicker"
    row="0"
    padding="10"
    for="item in pickerObjects"
    textField="description"
    valueField="name"
    pickerTitle="Select item from list">
        <v-template>
          <GridLayout rows="auto, auto, auto">
            <Label :text="item.id" class="item-template-label red-label" margin="20"></Label>
            <Label :text="item.name" row="1" class="item-template-label green-label"></Label>
            <Label :text="item.description" row="2" class="item-template-label green-label" marginBottom="20"></Label>
            </GridLayout>
        </v-template>
      </PickerField>
```

## PickerField API

The `PickerField` component extends the `TextField` and that means any functionality the default `TextField` provides is also available in the `PickerField` component. The only difference is that by design it is in a `read-only` mode.

### Properties

| Property | Type | Description
|:---------|:-----|:-----------
| `pickerTitle` | `string` | The title of the modal view. 
| `searchBar` | `TextField` | The search bar used as a filter
| `items`| `any[]` | The source collection used to populate the list of the modal view.                                                                          |
| `itemTemplate`               | `string` \| `Template` | Тhe UI template for list view items of the list of the modal view.                                                                          |
| `modalAnimated` | `boolean`| Specifies whether to show the modal view with animation.                                                                |
| `textField`  | `string` | The property of the object from the 'items' collection used by the `text` property of the PickerField.                       |
| `valueField` | `string` | The property of the object from the 'items' collection used when setting the `selectedValue` property of the PickerField. |
| `selectedValue`   | `any` | The object selected from the list in the modal view.                                                                                        |
| `selectedIndex`              | `number` |The index of the object from the 'items' collection that has been selected from the list in the modal view.                                 |
| `iOSCloseButtonPosition`     | `'left'` \| `'right'` | The position of the 'close' button of the ActionBar of the modal view.                                                                      |
| `iOSCloseButtonIcon`         | `number`| The icon of the 'close' button of the ActionBar of the modal view.                                                                          |
| `androidCloseButtonPosition` | `string` |The position of the 'close' button of the ActionBar of the modal view. | The icon of the 'close' button of the ActionBar of the modal view.                                                                          
| `showFilter` | `string` | Show the search bar |
| `filterKeyName`| `string` | Sets object key to use when filtering.|
| `focusOnShow` | `boolean` |Indicates whether to focus the serach bar|
| `hintText` | `string` | Set the hint of the search bar| 

### Methods

#### refresh()
```ts
pickerField.refresh()
```
Refreshes the ListView of the picker to reload its items. 

---
### Events

| Event | Description
|:------|:----------
| `pickerClosed` | Emitted when the picker popup close as a result of item selection.  
| `pickerOpened` | Emitted when the picker popup opens.
| `itemLoading` |  
