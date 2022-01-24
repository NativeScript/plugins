export * from './common';
export * from './models';
export declare class Contacts {
    static getContact(): Promise<any>;
    /**
     * iOS only
     */
    static getContactById(id: string, contactFields?: Array<string>): Promise<any>;
    static getContactsByName(searchPredicate: any, contactFields?: Array<string>): Promise<any>;
    static getAllContacts(contactFields?: Array<string>): Promise<any>;
    /**
     * Android only
     */
    static getAllContactsWithoutWorker(contactFields?: Array<string>): Promise<any>;
    static getGroups(name: string): Promise<any>;
    static getContactsInGroup(groupId: string): Promise<any>;
}
