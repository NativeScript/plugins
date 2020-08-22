import {
  chain,
  Rule,
  Tree,
  SchematicContext,
  apply,
  url,
  move,
  mergeWith,
  template,
} from '@angular-devkit/schematics';
import {
  stringUtils,
  addProjectToNxJsonInTree,
  serializeJson,
} from '@nrwl/workspace';
import { updateWorkspaceJson, getJsonFromFile } from '../utils';
import { Schema } from './schema';

let name: string;
export default function (schema: Schema): Rule {
  name = stringUtils.dasherize(schema.name.toLowerCase());
  return chain([
    addAppFiles(schema),
    addProjectToNxJsonInTree(name, {}),
    updateWorkspaceConfig(),
    addToDemoApps(),
  ]);
}

function addAppFiles(schema: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info(`Adding new plugin "@nativescript/${name}"`);

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
    const projects = {};
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
    return updateWorkspaceJson({ projects })(tree, context);
  };
}

function addToDemoApps() {
  return (tree: Tree, context: SchematicContext) => {
    const appsDir = tree.getDir('apps');
    const appFolders = appsDir.subdirs;
    for (const dir of appFolders) {
      // console.log(dir);
      const appDir = `${appsDir.path}/${dir}`;

      // update app dependencies for plugin development
      const packagePath = `${appDir}/package.json`;
      const packageData = getJsonFromFile(tree, packagePath);

      if (packageData) {
        packageData.dependencies = packageData.dependencies || {};
        packageData.dependencies[
          `@nativescript/${name}`
        ] = `file:../../packages/${name}`;

        tree.overwrite(packagePath, serializeJson(packageData));
      }
      context.logger.info(
        `"@nativescript/${name}" created and added to all demo apps. Ready to develop!`
      );
    }
    return tree;
  };
}
