# @nativescript/zip

```cli
npm install @nativescript/zip
```

## Usage

### Zip

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

#### Progress

```typescript
import { Zip } from '@nativescript/zip';
import { path, knownFolders } from '@nativescript/core';
let zipPath = path.join(knownFolders.temp().path, 'stuff.zip');
let dest = path.join(knownFolders.documents().path, '/assets');
Zip.zip({
function onZipProgress(percent: number) {
	console.log(`unzip progress: ${percent}`);
    directory: dest,
		archive: zipPath,
    onProgress: onZipProgress
});
```

### Unzip

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

#### Progress

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

## License

Apache License Version 2.0
