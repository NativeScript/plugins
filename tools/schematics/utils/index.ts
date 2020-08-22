import {
  Tree
} from '@angular-devkit/schematics';
import {
  updateWorkspaceInTree,
  readJsonInTree,
  getWorkspacePath,
} from '@nrwl/workspace';
import * as stripJsonComments from 'strip-json-comments';

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
  return (value || '').split(',').map(t => t.toLowerCase().trim());
}