export interface ZipOptions {
  directory: string;
  archive?: string;
  onProgress?: (progress: number) => void;
  keepParent?: boolean;
  password?: string;
}

export interface UnZipOptions {
  archive: string;
  directory?: string;
  onProgress?: (progress: number) => void;
  overwrite?: boolean;
  password?: string;
}
export declare class Zip {
    static debugEnabled: boolean;
    private static debug;
    private static _zipRequest;
    private static _unzipRequest;
    static zip(options: ZipOptions): Promise<string>;
    static unzip(options: UnZipOptions): Promise<any>;
}
