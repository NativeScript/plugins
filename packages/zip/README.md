# @nativescript/zip
<!-- TODO: Describe "keepParent" and "overwrite" properties
 -->
A plugin to zip and unzip files.

## Contents

* [Installation](#installation)

* [Use @nativescript/zip](#use-nativescriptzip)
	* [Zip a folder](#zip-a-folder)
	* [Get zip request progress](#get-zip-request-progress)
	* [Get unzip request progress](#get-unzip-request-progress)
* [API](#api) 
	* [Zip class](#zip-class)
		* [debugEnabled](#debugenabled)
		* [zip()](#zip)
			* [ZipOptions interface](#zipoptions-interface)
		* [unzip()](#unzip)
			* [UnZipOptions interface](#unzipoptions-interface)
* [License](#license)

## Installation

```cli
npm install @nativescript/zip
```

## Use @nativescript/zip

### Zip a folder

To zip a folder, call the [zip()](#zip) method on the [Zip](#zip-class) class, passing it a [ZipOptions]() object.

```typescript
async zip() {

        let zipPath = path.join(knownFolders.temp().path, 'stuff.zip');
        let dest = path.join(knownFolders.currentApp().path, '/assets');
        
        const zipped = await Zip.zip({

            directory: dest,
            archive: zipPath,
        }).then((value)=>{
            console.log("zipped",value)

        }).catch(err=>{
            console.error(err)
        });
    }
```

#### Get zip request progress

To get the zip request progress, set the `onProgress` property to a function to handle the progress event.

in [ZipOptions](#zipoptions) object passed to the [zip()](#zip).

```typescript
import { Zip } from '@nativescript/zip';
import { path, knownFolders } from '@nativescript/core';
let zipPath = path.join(knownFolders.temp().path, 'stuff.zip');
let dest = path.join(knownFolders.documents().path, '/assets');

Zip.zip({
	directory: dest,
	archive: zipPath,
	onProgress: onZipProgress
});
function onZipProgress(percent: number) {

    console.log(`unzip progress: ${percent}`);
}
```

### Unzip a folder

To unzip a folder, call the [unzip()](#unzip) method on the [Zip](#zip-class) class, passing it a [UnZipOptions](#unzipoptions) object.

```typescript
import { Zip } from '@nativescript/zip';
import { path, knownFolders } from '@nativescript/core';

let zipPath = path.join(knownFolders.temp().path, 'stuff.zip');
let dest = path.join(knownFolders.documents().path, '/assets');
Zip.unzip({
	archive: zipPath,
	directory: dest,
});
```

#### Get unzip request progress
To get the unzip request progress, set the `onProgress` property to a function to handle the progress event.

```typescript
import { Zip } from '@nativescript/zip';
import { path, knownFolders } from '@nativescript/core';
let zipPath = path.join(knownFolders.temp().path, 'stuff.zip');
let dest = path.join(knownFolders.documents().path, '/assets');
async unzip(){
	
const unzipped = await Zip.unzip({
	archive: zipPath,
	directory: dest,
	onProgress: onUnZipProgress,
});

}

function onUnZipProgress(percent: number) {
	console.log(`unzip progress: ${percent}`);
}
```

## API 

### Zip class

#### debugEnabled
```ts
Zip.debugEnabled = true
```
---
#### zip()

```ts
Zip.zip(options).then((zipped: string) => {

}).catch((err) => {

})
```
Zips the folder at the path specified in the `directory` property of the `options` parameter. It saves the zipped folder at the path set via `archive` property. The `options` object has the following properties:

#### ZipOptions interface

| Property | Type
|:-------|:----
| `directory` | `string`| _Optional_: The directory to zip.
| `archive` | `string` | _Optional_: The path to zip `directory` to.
| `onProgress` | `(progress: number) => void` | _Optional_: Zip request progress listener.
| `keepParent`| `boolean` | _Optional_: 
| `password`| `string` | _Optional_: The password used to protect the zip file.


---
#### unzip()

```ts
Zip.unzip(options).then((unZipped: any) => {

}).catch((err) => {

})
```
Extracts all the files from the zip file specified in the `archive` property of the `options` parameter. The extracted files are stored at the path specified via the `directory` property. The `options` object has the following properties:

#### UnZipOptions interface

| Property | Type
|:-------|:----
| `directory` | `string`| _Optional_: The path to extract the files to.
| `archive` | `string` | _Optional_: The path of the zip file.
| `onProgress` | `(progress: number) => void` | _Optional_: Unzip request progress listener.
| `overwrite`| `boolean` | _Optional_
| `password`| `string` | _Optional_: The password used to protect the zip file.

## License

Apache License Version 2.0
