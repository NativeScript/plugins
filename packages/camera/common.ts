import * as permissions from '@nativescript-community/perms';
export function getAspectSafeDimensions(sourceWidth, sourceHeight, reqWidth, reqHeight) {
	let widthCoef = sourceWidth / reqWidth;
	let heightCoef = sourceHeight / reqHeight;

	let aspectCoef = widthCoef > heightCoef ? widthCoef : heightCoef;

	return {
		width: Math.floor(sourceWidth / aspectCoef),
		height: Math.floor(sourceHeight / aspectCoef),
	};
}
function mapStatus(result: permissions.Result): Status {
	let status = Status.unknown;
	if (result && result.length > 1) {
		if (Object.keys(Status).findIndex((k) => k === result[0]) >= 0) {
			status = Status[result[0]];
		}
	}
	return status;
}
export function mapError(e): PermissionResult {
	return {
		Success: false,
		Details: Status.error,
		Error: e,
	};
}
export function mapCameraPermissionStatus(permission: permissions.Result): PermissionResult {
	const status = mapStatus(permission);
	const result = {
		Success: status === Status.authorized,
		Details: status,
	};
	return result;
}

export function mapPhotoPermissionStatus(permission: permissions.Result): PermissionResult {
	const status = mapStatus(permission);
	const result = {
		Success: status === Status.authorized || status === Status.limited,
		Details: status,
	};
	return result;
}

export function combineCamerPhotoPermissions(cameraPermissions: PermissionResult, photoPermissions: PermissionResult): PermissionsResult {
	const result = {
		Success: cameraPermissions.Success && photoPermissions.Success,
		Details: {
			Camera: cameraPermissions,
			Photo: photoPermissions,
		},
	};
	return result;
}

export enum Status {
	authorized = 'authorized',
	denied = 'denied',
	limited = 'limited',
	restricted = 'restricted',
	undetermined = 'undetermined',
	never_ask_again = 'never_ask_again',
	unknown = 'unknown',
	error = 'error',
}

export interface PermissionsResult {
	Success: boolean;
	Details: {
		Camera?: PermissionResult;
		Photo?: PermissionResult;
	};
}

export interface PermissionResult {
	Success: boolean;
	Details: Status;
	Error?: any;
}
