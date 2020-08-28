declare interface ZipRequest {
  action: string;
  archive: string;
  destination: string;
  overwrite: boolean;
  password: string;
}
