declare module "simple-plist" {
  function readFileSync(filename: string): any;
  function writeFileSync(
    filename: string,
    data: any,
    options?: { encoding?: string; mode?: number; flag?: string; }
  ): void;
}
