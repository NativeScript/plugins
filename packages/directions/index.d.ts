import { DirectionsApi, DirectionsCommon, NavigateToOptions } from "./common";
export declare class Directions extends DirectionsCommon implements DirectionsApi {
    available(): Promise<boolean>;
    navigate(options: NavigateToOptions): Promise<void>;
}
export * from './common';
