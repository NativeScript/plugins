# @nativescript/zip

## Installation

```cli
npm install @nativescript/zip
```

## Usage

### Files Zipping

To zip a folder, call the [zip()]() method on the [Zip]() class, passing it a [ZipOptions]() object.

see [ZipOptions](https://github.com/NativeScript/plugins/blob/master/packages/zip/index.d.ts#L1)

```typescript

import { Zip } from '@nativescript/zip';
import { path, knownFolders } from '@nativescript/core';

let zipPath = path.join(knownFolders.temp().path, 'stuff.zip');
let dest = path.join(knownFolders.documents().path, '/assets');

Zip.zip({
    directory: dest,
	archive: zipPath
});
```

#### Get Files Zipping Progress

To get the progress of the zipping process, set the `onProgress` handler
in [ZipOptions]() object passed to the [zip()].

```typescript
import { Zip } from '@nativescript/zip';
import { path, knownFolders } from '@nativescript/core';
let zipPath = path.join(knownFolders.temp().path, 'stuff.zip');
let dest = path.join(knownFolders.documents().path, '/assets');

Zip.zip({
function onProgress(percent: number) {
	console.log(`unzip progress: ${percent}`);
    directory: dest,
		archive: zipPath,
    onProgress: onZipProgress
});
```

### Unzip a folder

To unzip a folder, call the [unzip()]() method on the [Zip]() class, passing it a [UnZipOptions]() object.

see [UnzipOptions](https://github.com/NativeScript/plugins/blob/master/packages/zip/index.d.ts#L9)

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

#### Get Files Unzipping Progress

```typescript
import { Zip } from '@nativescript/zip';
import { path, knownFolders } from '@nativescript/core';
let zipPath = path.join(knownFolders.temp().path, 'stuff.zip');
let dest = path.join(knownFolders.documents().path, '/assets');
Zip.unzip({
	archive: zipPath,
	directory: dest,
	onProgress: onUnZipProgress,
});

function onUnZipProgress(percent: number) {
	console.log(`unzip progress: ${percent}`);
}
```

## API 
### Zip
#### debugEnabled
```ts
Zip.debugEnabled = true

```

#### zip()

```ts
Zip.zip(options).then((zipped: string) => {

}).catch((err) => {

})
```

---
#### unzip()

```ts
Zip.unzip(options).then((zipped: any) => {

}).catch((err) => {

})
```
zip(options: ZipOptions): Promise<string>
    static unzip(options: UnZipOptions): Promise<any>
### ZipOptions
| Option | Type
|:-------|:----
| `directory` | `string`| _Optional_
| `archive` | `string` | _Optional_
| `onProgress` | `(progress: number) => void` | _Optional_
| `keepParent`| `boolean` | _Optional_
| `password`| `string` | _Optional_

### UnZipOptions

| Option | Type
|:-------|:----
| `directory` | `string`| _Optional_
| `archive` | `string` | _Optional_
| `onProgress` | `(progress: number) => void` | _Optional_
| `overwrite`| `boolean` | _Optional_
| `password`| `string` | _Optional_
## License

Apache License Version 2.0
