import { Property, View } from '@nativescript/core';

export const callbackProperty = new Property<RoomCaptureViewCommon, (filePath: string) => void>({
	name: 'callback',
});

export class RoomCaptureViewCommon extends View {}

callbackProperty.register(RoomCaptureViewCommon);
