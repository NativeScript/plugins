import { Observable, EventData, Page, path, Folder, knownFolders } from '@nativescript/core';
import { Zip } from '@nativescript/zip';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

const dest = Folder.fromPath(path.join(knownFolders.temp().path, 'books'));
const dir = () => {
	return path.join(knownFolders.currentApp().path, 'assets');
};
const out = () => {
	return path.join(knownFolders.temp().path, 'zip_files_out.zip');
};

export class DemoModel extends Observable {
	progress: number = 0;
	create() {
		Zip.zip({
			directory: dir(),
			archive: out(),
			onProgress: (progress) => {
				console.log('create: progress: ' + progress);
			},
		})
			.then((archive) => {
				console.log('create success: ', archive);
			})
			.catch((error) => {
				console.log('create error: ', error);
			});
	}

	extract() {
		Zip.unzip({
			archive: out(),
			onProgress: (progress) => {
				console.log('extract: progress: ' + progress);
			},
		})
			.then((path) => {
				console.log('extract success: ', path);
			})
			.catch((error) => {
				console.log('extract error: ', error);
			});
	}

	unzip() {
		console.log(`begin unzip`);
    let appPath = knownFolders.currentApp().path;
    // File omitted from repo due to size - can test this locally with your own zip file
		let testZipFile = path.join(appPath, 'test_70mb.zip');
		// Zip.unzip(testZipFile, appPath);
		Zip.unzip({
			archive: testZipFile,
			directory: dest.path,
			onProgress: this.onZipProgress.bind(this),
		})
			.then(() => {
				console.log(`unzip succesfully completed`);
			})
			.catch((err) => {
				console.log(`unzip error: ${err}`);
			});
	}

	showFiles() {
		this.traceFolderTree(dest, 2);
	}

	onZipProgress(percent: number) {
		console.log(`unzip progress: ${percent}`);
		this.progress = percent;
		this.notifyPropertyChange('progress', percent);
	}

	traceFolderTree(folder: Folder, maxDepth: number = 3, depth: number = 0) {
		try {
			let whitespace = new Array(depth + 1).join('  ');
			console.log(`${whitespace}${Folder.fromPath(folder.path).name}`);
			folder.eachEntity((ent) => {
				if (Folder.exists(ent.path) && depth < maxDepth) {
					this.traceFolderTree(Folder.fromPath(ent.path), maxDepth, depth + 1);
				} else {
					console.log(`${whitespace}- ${ent.name}`);
				}
				return true;
			});
		} catch (err) {
			console.log(`err tracing tree: ${err}`);
		}
	}
}
