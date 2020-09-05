import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { updateWorkspaceInTree, readJsonInTree, getWorkspacePath, serializeJson } from '@nrwl/workspace';
import * as stripJsonComments from 'strip-json-comments';

// TODO: make Array in future to support multi scoped workspaces
// for example: a workspace could manage @triniwiz plugins alongside @nativescript-community plugins
export const scopeName = '@nativescript';
export type SupportedDemoType = 'xml' | 'angular' | 'vue' | 'svelte' | 'react';
export const SupportedDemoTypes: Array<SupportedDemoType> = ['xml', 'angular']; //, 'vue', 'svelte', 'react'];
// default to update all demo types
let demoTypes: Array<SupportedDemoType> = SupportedDemoTypes;
let packageNamesToUpdate: Array<string>;

export function setPackageNamesToUpdate(names: Array<string>) {
	packageNamesToUpdate = names;
}

export function getPackageNamesToUpdate(): Array<string> {
	return packageNamesToUpdate;
}

export function setDemoTypes(types: Array<SupportedDemoType>) {
	demoTypes = types;
}

export function getDemoTypes(): Array<SupportedDemoType> {
	return demoTypes;
}

export function readWorkspaceJson(tree: Tree) {
	return readJsonInTree(tree, getWorkspacePath(tree));
}

export function updateWorkspaceJson(updates: any) {
	return updateWorkspaceInTree((json) => {
		for (const key in updates) {
			json[key] = {
				...(json[key] || {}),
				...updates[key],
			};
		}
		return json;
	});
}

export function getJsonFromFile(tree: Tree, path: string) {
	return jsonParse(tree.get(path).content.toString());
}

export function jsonParse(content: string) {
	if (content) {
		// ensure comments are stripped when parsing (otherwise will fail)
		return JSON.parse(stripJsonComments(content));
	}
	return {};
}

export function sanitizeCollectionArgs(value: string) {
	return (value || '')
		.split(',')
		.filter((i) => !!i)
		.map((t) => t.toLowerCase().trim())
		.sort();
}

export function checkPackages(tree: Tree, context: SchematicContext) {
	if (!packageNamesToUpdate) {
		// default to updating demo's for all packages in workspace
		const packagesDir = tree.getDir('packages');
		setPackageNamesToUpdate(packagesDir.subdirs.sort());
	}
	// context.logger.info('packageNamesToUpdate:' + packageNamesToUpdate);
}

export function addDependencyToDemoApp(type: SupportedDemoType, demoAppRoot: string) {
	return (tree: Tree, context: SchematicContext) => {
		checkPackages(tree, context);
		// update app dependencies for plugin development
		updateDemoDependencies(tree, type, demoAppRoot);
		return tree;
	};
}

export function updateDemoDependencies(tree: Tree, type: SupportedDemoType, demoAppRoot: string, allPackages?: Array<string>, focus?: boolean) {
	const packagePath = `${demoAppRoot}/package.json`;
	const packageData = getJsonFromFile(tree, packagePath);

	if (packageData) {
		packageData.dependencies = packageData.dependencies || {};
		if (!packageNamesToUpdate || packageNamesToUpdate.length === 0) {
			// reset to all
			if (allPackages) {
				for (const name of allPackages) {
					packageData.dependencies[`${scopeName}/${name}`] = getPathToPackageForDemo(type, name);
				}
			}
		} else {
			for (const name of packageNamesToUpdate) {
				packageData.dependencies[`${scopeName}/${name}`] = getPathToPackageForDemo(type, name);
			}
			if (focus && allPackages) {
				// when focusing packages, remove others not being focused on
				for (const name of allPackages) {
					if (!packageNamesToUpdate.includes(name)) {
						delete packageData.dependencies[`${scopeName}/${name}`];
					}
				}
			}
		}

		tree.overwrite(packagePath, serializeJson(packageData));
	}
}

// Angular uses dist output to ensure properly built angular packages
// may can switch to all same once confirmed ngcc is absolutely no longer needed
export function getPathToPackageForDemo(type: SupportedDemoType, name: string) {
	return `file:../../${type === 'angular' ? 'dist/' : ''}packages/${name}`;
}

export function getDemoAppRoot(type: SupportedDemoType) {
	return `apps/demo${type !== 'xml' ? '-' + type : ''}`;
}

export function getDemoTypeFromName(name: string): SupportedDemoType {
	const parts = name.split('-');
	if (parts.length > 1) {
		return <SupportedDemoType>parts[1];
	} else {
		// no suffix defaults to vanilla xml
		return 'xml';
	}
}

export function getDemoIndexButtonForType(
	type: SupportedDemoType,
	packageName: string
): {
	buttonStart: string;
	buttonTap: string;
	buttonClass: string;
	buttonEnd: string;
	buttonMarkup: string;
} {
	let buttonClass = `class="btn btn-primary view-demo"`;
	let buttonEnd = `/>`;
	let buttonStart: string;
	let buttonTap: string;
	switch (type) {
		case 'xml':
			buttonStart = `<Button text="${packageName}"`;
			buttonTap = `tap="{{ viewDemo }}"`;
			return {
				buttonStart,
				buttonTap,
				buttonClass,
				buttonEnd,
				buttonMarkup: `${buttonStart} ${buttonTap} ${buttonClass}${buttonEnd}`,
			};
		// case 'angular':
		//   
		//   return {
		//     indexViewPath
		//   };
	}
}

export function getDemoIndexPathForType(type: SupportedDemoType): string {
	switch (type) {
		case 'xml':
			return 'src/main-page.xml';
		case 'angular':
			return 'src/home.component.ts';
	}
}
