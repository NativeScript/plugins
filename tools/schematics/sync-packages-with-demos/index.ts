import { chain, Rule, Tree, SchematicContext, SchematicsException, apply, url, move, mergeWith, template, noop } from '@angular-devkit/schematics';
import { stringUtils, serializeJson } from '@nrwl/workspace';
import { getJsonFromFile, sanitizeCollectionArgs } from '../utils';
import { Schema, SupportedDemoType } from './schema';

export const SupportedDemoTypes: Array<SupportedDemoType> = ['xml']; //, 'angular', 'vue', 'svelte', 'react'];
// default to update all demo types
let types: Array<SupportedDemoType> = SupportedDemoTypes;
let packageNamesToUpdate: Array<string>;
export default function (schema?: Schema, relativePrefix?: string): Rule {
	if (schema) {
		if (schema.types) {
			// only updating specific demo types
			const demoTypes = <Array<SupportedDemoType>>sanitizeCollectionArgs(schema.types);
			for (const t of demoTypes) {
				if (!SupportedDemoTypes.includes(t)) {
					throw new SchematicsException(`Can only update supported demo types: ${SupportedDemoTypes.join()}`);
				}
			}
			types = demoTypes;
		}
		if (schema.packages) {
			// only updating demo's for specific packages
			packageNamesToUpdate = sanitizeCollectionArgs(schema.packages).sort();
		}
	}
	const demoFileChains: Array<Rule> = [];
	const demoIndexChains: Array<Rule> = [];
	const demoDependencyChains: Array<Rule> = [];

	for (const t of types) {
		const demoAppRoot = getDemoAppRoot(t);
		demoFileChains.push(addDemoFiles(t, demoAppRoot, relativePrefix));
		demoIndexChains.push(addToDemoIndex(t, demoAppRoot));
		demoDependencyChains.push(addDependencyToDemoApp(t, demoAppRoot));
	}

	return chain([prerun(), ...demoFileChains, ...demoIndexChains, ...demoDependencyChains]);
}

function prerun() {
	return (tree: Tree, context: SchematicContext) => {
		checkPackages(tree, context);
	};
}

function checkPackages(tree: Tree, context: SchematicContext) {
	if (!packageNamesToUpdate) {
		// default to updating demo's for all packages in workspace
		const packagesDir = tree.getDir('packages');
		packageNamesToUpdate = packagesDir.subdirs.sort();
	}
	// context.logger.info('packageNamesToUpdate:' + packageNamesToUpdate);
}

function addDemoFiles(type: SupportedDemoType, demoAppRoot: string, relativePrefix: string = './') {
	return (tree: Tree, context: SchematicContext) => {
		context.logger.info(`Updating "${demoAppRoot}"`);
		let demoFolder = 'src/plugin-demos';
		const demoAppFolder = `${demoAppRoot}/${demoFolder}`;
		let viewExt = 'xml';
		// adjust folder location and viewExt dependent on demo type if needed
		switch (type) {
			case 'angular':
				viewExt = 'html';
				break;
		}
		const fileChain: Array<Rule> = [];
		for (const name of packageNamesToUpdate) {
			const packageDemoViewPath = `${demoAppFolder}/${name}.${viewExt}`;
			// context.logger.info('packageDemoViewPath: ' + packageDemoViewPath);
			if (!tree.exists(packageDemoViewPath)) {
				// context.logger.info('packageDemoViewPath: DID NOT EXIST!');
				const templateSource = apply(url(`${relativePrefix}files_${type}`), [
					template({
						name,
						stringUtils,
						tmpl: '',
						dot: '.',
					}),
					move(demoAppFolder),
				]);

				fileChain.push(mergeWith(templateSource));
			} else {
				fileChain.push(noop());
			}
		}

		return chain(fileChain)(tree, context);
	};
}

function addToDemoIndex(type: SupportedDemoType, demoAppRoot: string) {
	return (tree: Tree, context: SchematicContext) => {
		checkPackages(tree, context);
		let indexViewAppPath = 'src/main-page.xml';
		let buttonTap = `tap="{{ viewDemo }}"`;
		let buttonClass = `class="btn btn-primary view-demo"`;
		let buttonEnd = `/>`;
		// adjust index view app path dependent on demo type
		switch (type) {
			case 'angular':
				buttonTap = `(tap)="viewDemo($event)"`;
				buttonEnd = `></Button>`;
				break;
		}
		const demoIndexViewPath = `${demoAppRoot}/${indexViewAppPath}`;
		// const cwd = process.cwd();
		// const indexViewPath = join(cwd, demoIndexViewPath);
		// context.logger.info('indexViewPath: ' + indexViewPath);
		// let indexViewContent = fs.readFileSync(indexViewPath, 'UTF-8');
		let indexViewContent = tree.read(demoIndexViewPath).toString('utf-8');

		for (const name of packageNamesToUpdate) {
			let buttonStart = `<Button text="${name}"`;

			if (indexViewContent.indexOf(`Button text="${name}"`) === -1) {
				// get index of last view-demo button
				const lastBtnLocatorIndex = indexViewContent.lastIndexOf('view-demo');
				// get final content after that last button
				const remainingContent = indexViewContent.substr(lastBtnLocatorIndex, indexViewContent.length);
				// get first line break to determine position of where to insert next button
				const firstLB = remainingContent.indexOf('\n');
				const endingContent = indexViewContent.substring(lastBtnLocatorIndex + firstLB, indexViewContent.length);
				const buttonMarkup = `${buttonStart} ${buttonTap} ${buttonClass}${buttonEnd}`;
				// context.logger.info('buttonMarkup: ' + buttonMarkup);
				indexViewContent = indexViewContent.substring(0, lastBtnLocatorIndex + firstLB) + `\n${buttonMarkup}` + endingContent;
			}
		}
		// context.logger.info(indexViewContent);
		tree.overwrite(demoIndexViewPath, indexViewContent);
		return tree;
	};
}

function addDependencyToDemoApp(type: SupportedDemoType, demoAppRoot: string) {
	return (tree: Tree, context: SchematicContext) => {
		checkPackages(tree, context);
		// update app dependencies for plugin development
		const packagePath = `${demoAppRoot}/package.json`;
		const packageData = getJsonFromFile(tree, packagePath);

		if (packageData) {
			packageData.dependencies = packageData.dependencies || {};
			for (const name of packageNamesToUpdate) {
				packageData.dependencies[`@nativescript/${name}`] = `file:../../packages/${name}`;
			}

			tree.overwrite(packagePath, serializeJson(packageData));
		}

		return tree;
	};
}

function getDemoAppRoot(type: SupportedDemoType) {
	return `apps/demo${type !== 'xml' ? '-' + type : ''}`;
}
