import { GroupCommon } from './group.common';

export class Group extends GroupCommon {
    
    initializeFromNative(groupData) {
        this.id = groupData["identifier"];
        this.name = groupData["name"];
    }
    
    save(useDefault) {
        let isUpdate = false;
        const store = new CNContactStore();
        let groupRecord: CNMutableGroup;
        let containerID = null;
        
        if(!useDefault){
            var foundContainers = store.containersMatchingPredicateError(null);
            if(foundContainers.count > 0){
                for(var i=0; i < foundContainers.count; i++){
                    if(foundContainers[i]["type"] === CNContainerType.Local){
                        containerID = foundContainers[i]["identifier"];
                        break;
                    }
                }
            }
        }
        
        if (this.id && this.id !== "") {
            var searchPredicate = CNGroup.predicateForGroupsWithIdentifiers([this.id]);
            var foundGroups = store.groupsMatchingPredicateError(searchPredicate);
            if (foundGroups.count > 0) {
                groupRecord = foundGroups[0].mutableCopy();
                isUpdate = true;
            }
        }
        
        if (!groupRecord) {
            groupRecord = <CNMutableGroup>CNMutableGroup.new();
        }
        
        groupRecord.name = this.name;
        
        var saveRequest = new CNSaveRequest();
        if (isUpdate) {
            saveRequest.updateGroup(groupRecord)
        }
        else {
            saveRequest.addGroupToContainerWithIdentifier(groupRecord, containerID);
        }
        
        // var error;
        store.executeSaveRequestError(saveRequest);
        
        // if (error) {
        //     throw new Error(error.localizedDescription);
        // }
    }
    
    delete(){
        var groupRecord,
        store = new CNContactStore();
        
        if (this.id && this.id !== "") {
            var searchPredicate = CNGroup.predicateForGroupsWithIdentifiers([this.id]);
            var foundGroups = store.groupsMatchingPredicateError(searchPredicate);
            if (foundGroups.count > 0) {
                groupRecord = foundGroups[0].mutableCopy();
            }
        }
        
        if(groupRecord){
            var saveRequest = new CNSaveRequest();
            saveRequest.deleteGroup(groupRecord)
            // var error;
            store.executeSaveRequestError(saveRequest);
            
            // if (error) {
            //     throw new Error(error.localizedDescription);
            // }
        }
    }
    
    addMember(contact){
        var groupRecord,
        contactRecord,
        searchPredicate,
        store = new CNContactStore();
        
        //Get groupRecord
        if (this.id && this.id !== "") {
            searchPredicate = CNGroup.predicateForGroupsWithIdentifiers([this.id]);
            var foundGroups = store.groupsMatchingPredicateError(searchPredicate);
            if (foundGroups.count > 0) {
                groupRecord = foundGroups[0].mutableCopy();
            }
        }
        //Get contactRecord
        if (contact.id && contact.id !== "") {
            searchPredicate = CNContact.predicateForContactsWithIdentifiers([contact.id]);
            const keysToFetch: Array<any> = [
                "givenName", 
                "familyName", 
                "middleName", 
                "namePrefix", 
                "nameSuffix", 
                "phoneticGivenName", 
                "phoneticMiddleName", 
                "phoneticFamilyName", 
                "nickname", 
                "jobTitle", 
                "departmentName", 
                "organizationName", 
                "note", 
                "phoneNumbers", 
                "emailAddresses", 
                "postalAddresses", 
                "urlAddresses", 
                "imageData"
            ]; // All Properties that we are changing
            var foundContacts = store.unifiedContactsMatchingPredicateKeysToFetchError(searchPredicate, keysToFetch);
            if (foundContacts.count > 0) {
                contactRecord = foundContacts[0].mutableCopy();
            }
        }
        
        //Do Add To Group
        if(groupRecord && contactRecord){
            var saveRequest = new CNSaveRequest();
            saveRequest.addMemberToGroup(contactRecord, groupRecord);
            // var error;
            store.executeSaveRequestError(saveRequest);
            
            // if (error) {
            //     throw new Error(error.localizedDescription);
            // }
        }
    }
    removeMember(contact){
        var groupRecord,
        contactRecord,
        searchPredicate,
        store = new CNContactStore();
        
        //Get groupRecord
        if (this.id && this.id !== "") {
            searchPredicate = CNGroup.predicateForGroupsWithIdentifiers([this.id]);
            var foundGroups = store.groupsMatchingPredicateError(searchPredicate);
            if (foundGroups.count > 0) {
                groupRecord = foundGroups[0].mutableCopy();
            }
        }
        //Get contactRecord
        if (contact.id && contact.id !== "") {
            searchPredicate = CNContact.predicateForContactsWithIdentifiers([contact.id]);
            const keysToFetch: Array<any> = [
                "givenName", 
                "familyName", 
                "middleName", 
                "namePrefix", 
                "nameSuffix", 
                "phoneticGivenName", 
                "phoneticMiddleName", 
                "phoneticFamilyName", 
                "nickname", 
                "jobTitle", 
                "departmentName", 
                "organizationName", 
                "note", 
                "phoneNumbers", 
                "emailAddresses", 
                "postalAddresses", 
                "urlAddresses", 
                "imageData"
            ]; // All Properties that we are changing
            const foundContacts = store.unifiedContactsMatchingPredicateKeysToFetchError(searchPredicate, keysToFetch);
            if (foundContacts.count > 0) {
                contactRecord = foundContacts[0].mutableCopy();
            }
        }
        
        //Do Remove From Group
        if(groupRecord && contactRecord){
            var saveRequest = new CNSaveRequest();
            saveRequest.removeMemberFromGroup(contactRecord, groupRecord);
            // var error;
            store.executeSaveRequestError(saveRequest);
            
            // if (error) {
            //     throw new Error(error.localizedDescription);
            // }
        }
    }
    
}
