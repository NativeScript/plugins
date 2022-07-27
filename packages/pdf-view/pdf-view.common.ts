import * as fs from '@nativescript/core/file-system';
import { Property, View } from '@nativescript/core/ui/core/view';

export abstract class PDFViewCommon extends View{
	public static loadEvent = 'load';

	/**
	 * Render annotations (such as comments, colors or forms) on Android
	 */
	public enableAnnotationRendering: boolean;

	/**
	 * the source url of the PDF to show
	 */
	public src: string;

	protected tempFolder = fs.knownFolders.temp().getFolder('PDFViewer.temp/');

	public static notifyOfEvent(
		eventName: string,
		// tslint:disable-next-line: no-any
		pdfViewRef: WeakRef<any>,
	) {
		const viewer = pdfViewRef.get();

		if (viewer) {
			// tslint:disable-next-line: no-unsafe-any
			viewer.notify({ eventName, object: viewer });
		}
	}

	public abstract loadPDF(src: string);

	// tslint:disable-next-line: no-any
	protected createTempFile(base64data: any) {
		this.tempFolder.clear().then(() => {
			const file = fs.Folder.fromPath(this.tempFolder.path)
				.getFile(`_${Date.now()}.pdf`);
			file.writeSync(base64data);
			this.loadPDF(file.path);
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
