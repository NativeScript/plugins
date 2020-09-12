import { chain, Rule, Tree, SchematicContext, apply, url, move, mergeWith, template } from '@angular-devkit/schematics';
import { stringUtils, addProjectToNxJsonInTree } from '@nrwl/workspace';
import { updateWorkspaceJson, getJsonFromFile, npmScope, updateReadMe } from '../utils';
import { Schema } from './schema';

let name: string;
export default function (schema: Schema): Rule {
	name = stringUtils.dasherize(schema.name.toLowerCase());
	return chain([
		addAngularFiles(schema),
		(tree: Tree, context: SchematicContext) => {
			context.logger.info(`Angular support added for "${npmScope}/${name}". Continue developing the Angular support in the packages/${name}/angular folder.`);
		},
	]);
}

function addAngularFiles(schema: Schema): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.logger.info(`Adding Angular support to ${name}...`);

		const templateSource = apply(url('./files'), [
			template({
        name,
        npmScope,
				stringUtils,
				tmpl: '',
				dot: '.',
			}),
			move(`packages/${name}/angular`),
		]);

		return chain([mergeWith(templateSource)])(tree, context);
	};
}
