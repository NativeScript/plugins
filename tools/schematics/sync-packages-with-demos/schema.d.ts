export type SupportedDemoType = 'xml' | 'angular' | 'vue' | 'svelte' | 'react';
export interface Schema {
  // Demo types to update
  types?: string;
  // Packages to update in demo's - defaults to all in packages
  packages?: string;
}