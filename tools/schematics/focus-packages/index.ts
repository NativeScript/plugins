import { chain, Rule, Tree, SchematicContext, apply, url, move, mergeWith, template, externalSchematic, noop } from '@angular-devkit/schematics';
import * as path from 'path';
import { stringUtils, addProjectToNxJsonInTree, getWorkspace } from '@nrwl/workspace';
import { updateWorkspaceJson, getJsonFromFile, sanitizeCollectionArgs, getDemoAppRoot, getDemoTypeFromName, updateDemoDependencies, setPackageNamesToUpdate, getDemoIndexPathForType, getAllPackages, resetIndexForDemoType, getPluginDemoPath } from '../utils';
import syncPackagesWithDemos from '../sync-packages-with-demos';
import { Schema } from './schema';
const prettyData = require('pretty-data').pd;
const xml2js = require('xml2js');

// can make this argument in future to support multi scoped workspaces
// for example: a workspace could manage @triniwiz plugins alongside @nativescript-community plugins
let scopeName = '@nativescript';
let focusPackages: Array<string>;
let allPackages: Array<string>;
export default function (schema: Schema): Rule {
	focusPackages = sanitizeCollectionArgs(schema.name);
	return chain([
		// Focus workspace
		externalSchematic('@nstudio/focus', 'mode', {
			name: schema.name,
		}),
		// Isolate code in demo apps by default based on focus
		schema.ignoreDemos
			? noop()
			: (tree: Tree, context: SchematicContext) => {
					setPackageNamesToUpdate(focusPackages);
					allPackages = getAllPackages(tree);
					// console.log('allPackages:', allPackages);
					// apps
					const appsDir = tree.getDir('apps');
					if (appsDir && appsDir.subdirs) {
						const appFolders = appsDir.subdirs;
						for (const dir of appFolders) {
							const demoViewsPath = `${appsDir.path}/${dir}/${getPluginDemoPath()}`;
							const demoAppRoot = `${appsDir.path}/${dir}`;
							// console.log(`demoAppRoot: ${demoAppRoot}`);
							const demoType = getDemoTypeFromName(dir);
							// console.log(`demoType: ${demoType}`);
							updateDemoDependencies(tree, demoType, demoAppRoot, allPackages, true);

							// add `_off` suffix on ts,xml files for those that not being focused on
							// this removes those from the app build
							for (const p of allPackages) {
								switch (demoType) {
									case 'xml':
										const xmlView = `${demoViewsPath}/${p}.xml`;
										// console.log('xmlView:', xmlView);
										const tsClass = `${demoViewsPath}/${p}.ts`;
										// console.log('tsClass:', tsClass);
										if (focusPackages.length === 0 || focusPackages.includes(p)) {
											// resetting all demos back on if no specified focus or
											// focus on specified packages by ensuring their demos are not off
											// console.log('remove _off for', p);
											if (tree.exists(`${xmlView}_off`)) {
												tree.rename(`${xmlView}_off`, xmlView);
											}
											if (tree.exists(`${tsClass}_off`)) {
												tree.rename(`${tsClass}_off`, tsClass);
											}
										} else {
											// Turns package demos off when not focusing on them
											if (tree.exists(xmlView)) {
												tree.rename(xmlView, `${xmlView}_off`);
											}
											if (tree.exists(tsClass)) {
												tree.rename(tsClass, `${tsClass}_off`);
											}
										}
										break;
								}
							}

							// cleanup index listing to only have buttons for what is being focused on
							resetIndexForDemoType(tree, demoType);
						}
					}
					return tree;
			  },
		(tree: Tree, context: SchematicContext) => {
			const isFocusing = focusPackages && focusPackages.length > 0;
			const focusTargets = (focusPackages && focusPackages.length ? focusPackages : allPackages).map((n) => `${scopeName}/${n}`).join(', ');
			console.log(`${isFocusing ? 'Focusing workspace on:' : 'Resetting workspace for:'}`, focusTargets, `${schema.ignoreDemos || !isFocusing ? '' : '...and isolating code across all demo apps.'}`);
		},
	]);
}
