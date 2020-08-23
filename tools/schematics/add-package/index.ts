import { chain, Rule, Tree, SchematicContext, apply, url, move, mergeWith, template } from '@angular-devkit/schematics';
import { stringUtils, addProjectToNxJsonInTree, getWorkspace } from '@nrwl/workspace';
import { updateWorkspaceJson, getJsonFromFile } from '../utils';
import syncPackagesWithDemos from '../sync-packages-with-demos';
import { Schema } from './schema';

let name: string;
export default function (schema: Schema): Rule {
	name = stringUtils.dasherize(schema.name.toLowerCase());
	return chain([
		addPackageFiles(schema),
		addProjectToNxJsonInTree(name, {}),
		updateWorkspaceConfig(),
		updateWorkspaceScripts(),
		updateReadMe(),
		syncPackagesWithDemos(
			{
				packages: name,
			},
			'../sync-packages-with-demos/'
		),
		(tree: Tree, context: SchematicContext) => {
			context.logger.info(`"@nativescript/${name}" created and added to all demo apps. Ready to develop!`);
		},
	]);
}

function addPackageFiles(schema: Schema): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.logger.info(`Adding new plugin ${name}...`);

		const templateSource = apply(url('./files'), [
			template({
				name,
				stringUtils,
				tmpl: '',
				dot: '.',
			}),
			move(`packages/${name}`),
		]);

		return chain([mergeWith(templateSource)])(tree, context);
	};
}

function updateWorkspaceConfig() {
	return (tree: Tree, context: SchematicContext) => {
		const projects: any = {};
		projects[`${name}`] = {
			root: `packages/${name}`,
			sourceRoot: `packages/${name}`,
			projectType: 'library',
			schematics: {},
			architect: {
				build: {
					builder: '@nrwl/node:package',
					options: {
						outputPath: `dist/packages/${name}`,
						tsConfig: `packages/${name}/tsconfig.json`,
						packageJson: `packages/${name}/package.json`,
						main: `packages/${name}/index.ts`,
						assets: [
							`packages/${name}/*.md`,
							`packages/${name}/index.d.ts`,
							'LICENSE',
							{
								glob: '**/*',
								input: `packages/${name}/platforms/`,
								output: './platforms/',
							},
						],
					},
				},
			},
		};
		// add to build all
		const workspaceData = getJsonFromFile(tree, 'workspace.json');
		projects.all = workspaceData.projects.all;
		projects.all.architect.build.options.commands.push(`nx run ${name}:build`);
		return updateWorkspaceJson({ projects })(tree, context);
	};
}

function updateWorkspaceScripts() {
	return (tree: Tree, context: SchematicContext) => {
		const workspaceScriptPath = 'tools/workspace-scripts.js';
		let workspaceScripts = tree.read(workspaceScriptPath).toString('utf-8');

		// Add package as build option
		const buildSectionIndex = workspaceScripts.indexOf(`'build-all':`);
		const buildStart = workspaceScripts.substring(0, buildSectionIndex);
		const buildEnd = workspaceScripts.substring(buildSectionIndex, workspaceScripts.length);
		const newBuild = `// @nativescript/${name}
			'${name}': {
				build: {
					script: 'nx run ${name}:build',
					description: '@nativescript/${name}: Build',
				},
			},
`;
		workspaceScripts = `${buildStart}${newBuild}			${buildEnd}`;

		// Add package as focus option
		const focusSectionIndex = workspaceScripts.indexOf(`reset:`);
		const focusStart = workspaceScripts.substring(0, focusSectionIndex);
		const focusEnd = workspaceScripts.substring(focusSectionIndex, workspaceScripts.length);
		const newFocus = `'${name}': {
				script: 'nx g @nstudio/focus:mode ${name}',
				description: 'Focus on @nativescript/${name}',
			},
`;
		workspaceScripts = `${focusStart}${newFocus}			${focusEnd}`;
		// context.logger.info(workspaceScripts);
		tree.overwrite(workspaceScriptPath, workspaceScripts);
		return tree;
	};
}

function updateReadMe() {
	return (tree: Tree, context: SchematicContext) => {
		const readmePath = 'README.md';
		let readmeContent = tree.read(readmePath).toString('utf-8');

		// Add package as build option
		const listPackageSectionIndex = readmeContent.indexOf(`* @nativescript`);
		const readmeStart = readmeContent.substring(0, listPackageSectionIndex);
		const listEndIndex = readmeContent.indexOf(`# How to`);
		const readmeEnd = readmeContent.substring(listEndIndex, readmeContent.length);
		const packagesDir = tree.getDir('packages');
		const packageNames = packagesDir.subdirs.sort();
		let packageList = '';
		for (const packageName of packageNames) {
			packageList += `* @nativescript/${packageName}\n`;
		}
		readmeContent = `${readmeStart}${packageList}${readmeEnd}`;

		// context.logger.info(readmeContent);
		tree.overwrite(readmePath, readmeContent);
		return tree;
	};
}
