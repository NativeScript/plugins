import { GroupCommon } from './group.common';
export declare class Group extends GroupCommon {
    initializeFromNative(groupData: any): void;
    save(useDefault: any): void;
    delete(): void;
    addMember(contact: any): void;
    removeMember(contact: any): void;
}
