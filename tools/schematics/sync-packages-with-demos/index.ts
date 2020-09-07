import { chain, Rule, Tree, SchematicContext, SchematicsException, apply, url, move, mergeWith, template, noop } from '@angular-devkit/schematics';
import { stringUtils, formatFiles } from '@nrwl/workspace';
import { sanitizeCollectionArgs, setPackageNamesToUpdate, setDemoTypes, SupportedDemoTypes, SupportedDemoType, getDemoTypes, getPackageNamesToUpdate, getDemoAppRoot, addDependencyToDemoApp, checkPackages, getDemoIndexButtonForType, getDemoIndexPathForType, resetAngularIndex, getPluginDemoPath, resetAngularRoutes, npmScope, updateDemoSharedIndex, getAllPackages } from '../utils';
import { Schema } from './schema';

export default function (schema?: Schema, relativePrefix?: string, addingNew?: boolean): Rule {
	if (schema) {
		if (schema.types) {
			// only updating specific demo types
			const demoTypes = <Array<SupportedDemoType>>sanitizeCollectionArgs(schema.types);
			for (const t of demoTypes) {
				if (!SupportedDemoTypes.includes(t)) {
					throw new SchematicsException(`Can only update supported demo types: ${SupportedDemoTypes.join()}`);
				}
			}
			setDemoTypes(demoTypes);
		}
		if (schema.packages) {
			// only updating demo's for specific packages
			setPackageNamesToUpdate(sanitizeCollectionArgs(schema.packages).sort());
		}
	}
	const demoFileChains: Array<Rule> = [];
	const demoIndexChains: Array<Rule> = [];
	const demoDependencyChains: Array<Rule> = [];

	for (const t of getDemoTypes()) {
		const demoAppRoot = getDemoAppRoot(t);
		demoFileChains.push(addDemoFiles(t, demoAppRoot, relativePrefix));
		demoIndexChains.push(addToDemoIndex(t, demoAppRoot));
		demoDependencyChains.push(addDependencyToDemoApp(t, demoAppRoot));
	}

	return chain([
		prerun(),
		...demoFileChains,
		...demoIndexChains,
		...demoDependencyChains,
		addDemoSharedFiles(relativePrefix),
		(tree: Tree) => {
			updateDemoSharedIndex(tree, getAllPackages(tree), getPackageNamesToUpdate(), addingNew);
		},
		formatFiles({
			skipFormat: !!schema.skipFormat,
		}),
	]);
}

function prerun() {
	return (tree: Tree, context: SchematicContext) => {
		checkPackages(tree, context);
	};
}

function addDemoFiles(type: SupportedDemoType, demoAppRoot: string, relativePrefix: string = './') {
	return (tree: Tree, context: SchematicContext) => {
		context.logger.info(`Updating "${demoAppRoot}"`);
		const demoAppFolder = `${demoAppRoot}/${getPluginDemoPath()}`;
		let viewExt = 'xml';
		// adjust folder location and viewExt dependent on demo type if needed
		switch (type) {
			case 'angular':
				viewExt = 'component.html';
				break;
		}
		const fileChain: Array<Rule> = [];
		for (const name of getPackageNamesToUpdate()) {
			const packageDemoViewPath = `${demoAppFolder}/${name}.${viewExt}`;
			// context.logger.info('packageDemoViewPath: ' + packageDemoViewPath);
			if (!tree.exists(packageDemoViewPath)) {
				// context.logger.info('packageDemoViewPath: DID NOT EXIST!');
				const templateSource = apply(url(`${relativePrefix}files_${type}`), [
					template({
						name,
						npmScope,
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
		if (type === 'angular') {
			resetAngularIndex(tree, getPackageNamesToUpdate(), true);
			resetAngularRoutes(tree, getPackageNamesToUpdate(), true);
			return tree;
		}

		const demoIndexViewPath = `${demoAppRoot}/${getDemoIndexPathForType(type)}`;
		let indexViewContent = tree.read(demoIndexViewPath).toString('utf-8');
		// adjust index view app path dependent on demo type
		for (const name of getPackageNamesToUpdate()) {
			switch (type) {
				case 'xml':
					const { buttonMarkup } = getDemoIndexButtonForType(type, name);

					if (indexViewContent.indexOf(`Button text="${name}"`) === -1) {
						// get index of last view-demo button
						const lastBtnLocatorIndex = indexViewContent.lastIndexOf('view-demo');
						// get final content after that last button
						const remainingContent = indexViewContent.substr(lastBtnLocatorIndex, indexViewContent.length);
						// get first line break to determine position of where to insert next button
						const firstLB = remainingContent.indexOf('\n');
						const endingContent = indexViewContent.substring(lastBtnLocatorIndex + firstLB, indexViewContent.length);
						// context.logger.info('buttonMarkup: ' + buttonMarkup);
						indexViewContent = indexViewContent.substring(0, lastBtnLocatorIndex + firstLB) + `\n${buttonMarkup}` + endingContent;
					}

					break;
			}
		}
		// context.logger.info(indexViewContent);
		tree.overwrite(demoIndexViewPath, indexViewContent);
		return tree;
	};
}

function addDemoSharedFiles(relativePrefix: string = './') {
	return (tree: Tree, context: SchematicContext) => {
		const demoSharedPath = `tools/demo`;
		context.logger.info(`Updating shared demo code in "${demoSharedPath}"`);

		const fileChain: Array<Rule> = [];
		for (const name of getPackageNamesToUpdate()) {
			const demoSharedIndex = `${demoSharedPath}/${name}/index.ts`;
			// context.logger.info('packageDemoViewPath: ' + packageDemoViewPath);
			if (!tree.exists(demoSharedIndex)) {
				// context.logger.info('packageDemoViewPath: DID NOT EXIST!');
				const templateSource = apply(url(`${relativePrefix}files_demo_shared`), [
					template({
						name,
						npmScope,
						stringUtils,
						tmpl: '',
						dot: '.',
					}),
					move(demoSharedPath),
				]);

				fileChain.push(mergeWith(templateSource));
			} else {
				fileChain.push(noop());
			}
		}

		return chain(fileChain)(tree, context);
	};
}
