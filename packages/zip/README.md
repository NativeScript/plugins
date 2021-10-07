# @nativescript/zip

```cli
ns plugin add @nativescript/zip
```

## Usage

### Zip

```typescript
import { Zip } from '@nativescript/zip';
import { path, knownFolders } from '@nativescript/core';
let zipPath = path.join(knownFolders.temp().path, 'stuff.zip');
let dest = path.join(knownFolders.documents().path, '/assets');
Zip.zip({
	folder: zipPath,
	directory: dest,
});
```

#### Progress

```typescript
import { Zip } from '@nativescript/zip';
import { path, knownFolders } from '@nativescript/core';
let zipPath = path.join(knownFolders.temp().path, 'stuff.zip');
let dest = path.join(knownFolders.documents().path, '/assets');
Zip.zip({
	folder: zipPath,
	directory: dest,
	onProgress: onZipProgress,
});

function onZipProgress(percent: number) {
	console.log(`unzip progress: ${percent}`);
}
```

### Unzip

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
