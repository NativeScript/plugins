export const UNSUPPORTED = "OS Version Unsupported";
export enum CredentialState {
    Revoked = 'Revoked',
    Authorized = 'Authorized',
    NotFound = 'NotFound',
    Transferred = 'Transferred'
}

export enum UserDetectionStatus {
    Unsupported = 'Unsupported',
    Unknown = 'Unknown',
    LikelyReal = 'LikelyReal'
}