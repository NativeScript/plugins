import * as fs from '@nativescript/core/file-system';
import { Property, View } from '@nativescript/core/ui/core/view';
export declare abstract class Common extends View {
	static loadEvent: string;
	enableAnnotationRendering: boolean;
	src: string;
	protected tempFolder: fs.Folder;
	static notifyOfEvent(eventName: string, pdfViewRef: WeakRef<any>): void;
	abstract loadPDF(src: string): any;
	protected createTempFile(base64data: any): void;
}
export declare const enableAnnotationRenderingProperty: Property<Common, boolean>;
export declare const srcProperty: Property<Common, string>;
