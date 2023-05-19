import { RegistryCallback } from '.';
import { JetpackComposeCommon } from './common';
export * from './common';

export function registerJetpackCompose(id: string, callback: RegistryCallback) {
	// noop
}

export class ComposeDataDriver {}

export class JetpackCompose extends JetpackComposeCommon {}
