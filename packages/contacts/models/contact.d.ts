import { ContactCommon } from './contact.common';
export declare class Contact extends ContactCommon {
    initializeFromNative(contactData: any, contactFields?: Array<string>): void;
    initializeFromObject(cObject: any, contactFields: any): void;
    save(): void;
    delete(): void;
    isUnified(): any;
}
