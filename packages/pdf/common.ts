import { Folder, knownFolders, Property, View } from '@nativescript/core';

let tmpFolder: Folder;

export abstract class PDFViewCommon extends View {
	public static loadEvent = 'load';

	/**
	 * Render annotations (such as comments, colors or forms) on Android
	 */
	public enableAnnotationRendering: boolean;

	/**
	 * the source url of the PDF to show
	 */
	public src: string;

	public static notifyOfEvent(
		eventName: string,
		// tslint:disable-next-line: no-any
		pdfViewRef: WeakRef<any>
	) {
		const viewer = pdfViewRef?.get();

		if (viewer) {
			// tslint:disable-next-line: no-unsafe-any
			viewer.notify({ eventName, object: viewer });
		}
	}

	public abstract loadPDF(src: string);

	// tslint:disable-next-line: no-any
	protected createTempFile(base64data?: any) {
		return new Promise<Folder>((resolve) => {
			if (!tmpFolder) {
				tmpFolder = knownFolders.documents().getFolder('PDFViewer.temp/');
			}
			tmpFolder.clear().then(() => {
				if (base64data) {
					const file = Folder.fromPath(tmpFolder.path).getFile(`_${Date.now()}.pdf`);
					file.writeSync(base64data);
					this.loadPDF(file.path);
				} else {
					resolve(tmpFolder);
				}
			});
		});
	}
}

export const enableAnnotationRenderingProperty = new Property<PDFViewCommon, boolean>({
	defaultValue: false,
	name: 'enableAnnotationRendering',
});
enableAnnotationRenderingProperty.register(PDFViewCommon);

export const srcProperty = new Property<PDFViewCommon, string>({
	name: 'src',
});
srcProperty.register(PDFViewCommon);
