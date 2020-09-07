import { chain, Rule, Tree, SchematicContext, apply, url, move, mergeWith, template } from '@angular-devkit/schematics';
import { stringUtils, addProjectToNxJsonInTree } from '@nrwl/workspace';
import { updateWorkspaceJson, getJsonFromFile, npmScope, updateReadMe } from '../utils';
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
			'../sync-packages-with-demos/',
			true
		),
		(tree: Tree, context: SchematicContext) => {
			context.logger.info(`"${npmScope}/${name}" created and added to all demo apps. Ready to develop!`);
		},
	]);
}

function addPackageFiles(schema: Schema): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.logger.info(`Adding new plugin ${name}...`);

		const templateSource = apply(url('./files'), [
			template({
        name,
        npmScope,
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
				'build.all': {
					builder: '@nrwl/workspace:run-commands',
					outputs: ['dist/packages'],
					options: {
						commands: [`nx run ${name}:build`, `node tools/scripts/build-finish.ts ${name}`],
						parallel: false,
					},
				},
				focus: {
					builder: '@nrwl/workspace:run-commands',
					outputs: ['dist/packages'],
					options: {
						commands: [`nx workspace-schematic focus-packages ${name}`],
						parallel: false,
					},
				},
			},
		};
		// add to build all
		const workspaceData = getJsonFromFile(tree, 'workspace.json');
		projects.all = workspaceData.projects.all;
		projects.all.architect.build.options.commands.push(`nx run ${name}:build.all`);
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
		const newBuild = `// ${npmScope}/${name}
			'${name}': {
				build: {
					script: 'nx run ${name}:build.all',
					description: '${npmScope}/${name}: Build',
				},
			},
`;
		workspaceScripts = `${buildStart}${newBuild}			${buildEnd}`;

		// Add package as focus option
		const focusSectionIndex = workspaceScripts.indexOf(`reset:`);
		const focusStart = workspaceScripts.substring(0, focusSectionIndex);
		const focusEnd = workspaceScripts.substring(focusSectionIndex, workspaceScripts.length);
		const newFocus = `'${name}': {
				script: 'nx run ${name}:focus',
				description: 'Focus on ${npmScope}/${name}',
			},
`;
		workspaceScripts = `${focusStart}${newFocus}			${focusEnd}`;
		// context.logger.info(workspaceScripts);
		tree.overwrite(workspaceScriptPath, workspaceScripts);
		return tree;
	};
}
