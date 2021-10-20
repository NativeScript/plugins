import { CloudinaryCommon } from './common';

export declare class Cloudinary extends CloudinaryCommon {
  init(cloudinaryUrl: string): Promise<any>;

  uploadPhoto(filePath: string): Promise<any>;
  
  showWidget(): Promise<any>;
}
