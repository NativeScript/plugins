export declare class ContactHelper {
    static ios: {
        getiOSValue: (key: any, contactData: any) => any,
        getGenericLabel: (nativeLabel: any) => any,
        getNativeGenericLabel: (label: any) => any,
        getPhoneLabel: (nativeLabel: any) => any,
        getNativePhoneLabel: (label: any) => any,
        getWebsiteLabel: (nativeLabel: any) => any,
        getNativeWebsiteLabel: (label: any) => any,
    }
    static android: {
        addImageSources: (message: any) => any,
        getComplexCursor: (id: string, uri: any, projection: any, params: any) => any,
        convertNativeCursorToJson: (cursor) => any,
        getBasicCursor: (uri: any, id: string) => any,
        getEmailType: (data2, data3) => any,
        getPhoneType: (data2, data3) => any,
        getAddressType: (data2, data3) => any,
        getWebsiteType: (data2, data3) => any,
        getOrgType: (data2, data3) => any,
        getNativeOrgType: (label) => any,
        getRawContactBuilder: (rawId: any, mimetype: any, isDelete?: boolean) => any,
        getNativePhoneType: (label: any) => any,
        getContactBuilder: (id, mimetype) => any,
        getNativeEmailType: (label) => any,
        getNativeAddressType: (label) => any,
        getNativeWebsiteType: (label) => any,

    }
}
