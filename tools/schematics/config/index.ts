import { chain, Rule, Tree, SchematicContext, externalSchematic, noop } from '@angular-devkit/schematics';
import { getJsonFromFile } from '../utils';
import { Schema } from './schema';
import { stringUtils, serializeJson } from '@nrwl/workspace';

let customNpmScope: string;
export default function (schema: Schema): Rule {
	customNpmScope = stringUtils.dasherize(schema.scope);
	return chain([
		(tree: Tree, context: SchematicContext) => {
			const nxConfigPath = `nx.json`;
			const nxConfig = getJsonFromFile(tree, nxConfigPath);
			if (nxConfig && nxConfig.npmScope) {
				nxConfig.npmScope = customNpmScope;
				tree.overwrite(nxConfigPath, serializeJson(nxConfig));
			}

			const tsconfigBasePath = `tsconfig.base.json`;
			const tsconfigBase = getJsonFromFile(tree, tsconfigBasePath);
			if (tsconfigBase && tsconfigBase.compilerOptions && tsconfigBase.compilerOptions.paths) {
				delete tsconfigBase.compilerOptions.paths[`@nativescript/*`];
				tsconfigBase.compilerOptions.paths[`@${customNpmScope}/*`] = ['packages/*'];
				tree.overwrite(tsconfigBasePath, serializeJson(tsconfigBase));
			}

			// apps
			const appsDir = tree.getDir('apps');
			if (appsDir && appsDir.subdirs) {
				const appFolders = appsDir.subdirs;
				for (const dir of appFolders) {
					const demoTsConfigPath = `${appsDir.path}/${dir}/tsconfig.json`;
					if (tree.exists(demoTsConfigPath)) {
						const demoTsConfig = getJsonFromFile(tree, demoTsConfigPath);
						// console.log(`demoTsConfig:`, demoTsConfig);

						if (demoTsConfig && demoTsConfig.compilerOptions && demoTsConfig.compilerOptions.paths) {
							delete demoTsConfig.compilerOptions.paths[`@nativescript/*`];
							demoTsConfig.compilerOptions.paths[`@${customNpmScope}/*`] = [`../../${dir.indexOf('angular') > -1 ? 'dist/' : ''}packages/*`];
							tree.overwrite(demoTsConfigPath, serializeJson(demoTsConfig));
						}
					}
				}
			}

			const travisPath = `.travis.yml`;
			let travisContent = tree.read(travisPath).toString('utf-8');
			travisContent = travisContent.replace('@nativescript', `@${customNpmScope}`);
			// context.logger.info('travisContent:' + travisContent);
			tree.overwrite(travisPath, travisContent);

			const readmePath = `README.md`;
			let readme = tree.read(readmePath).toString('utf-8');
			readme = readme.replace('@nativescript', `@${customNpmScope}`);
			// context.logger.info(travisContent);
			tree.overwrite(readmePath, readme);

			return tree;
		},
		(tree: Tree, context: SchematicContext) => {
			context.logger.info(`Workspace has been configured for npm scope: @${customNpmScope}\n\n`);
		},
	]);
}
