/// <reference path="./AndroidPdfViewer.d.ts" />

import pdfviewer = com.github.barteksc.pdfviewer;
import * as http from '@nativescript/core/http';

import { Common, srcProperty } from './common';

export class PDFView extends Common {
	private promise: Promise<void>;

	private onLoadHandler = (() => {
		const pdfViewRef = new WeakRef(this);

		return new pdfviewer.listener.OnLoadCompleteListener({
			loadComplete: (numPages) => {
				Common.notifyOfEvent(Common.loadEvent, pdfViewRef);
			},
		});
	})();

	public createNativeView() {
		// tslint:disable-next-line:no-unsafe-any
		return new pdfviewer.PDFView(this._context, void 0);
	}

	public [srcProperty.setNative](value: string) {
		this.loadPDF(value);
	}

	public loadPDF(src: string) {
		if (!src || !this.android) {
			return;
		}

		// reset any previous promise since we've called loadPDF again
		this.promise = void 0;

		// detect base64 stream
		const base64prefix = 'data:application/pdf;base64,';
		if (src.indexOf(base64prefix) === 0) {
			const base64data = android.util.Base64.decode(src.substr(base64prefix.length), android.util.Base64.DEFAULT);
			this.createTempFile(base64data);
			return;
		}

		if (src.indexOf('://') === -1) {
			src = 'file://' + src;
		} else if (src.indexOf('file://') !== 0) {
			// AndroidPdfViewer cannot load from remote URLs, download to cache
			this.cacheThenLoad(src);
			return;
		}

		const uri = android.net.Uri.parse(src);

		const defaultSpacingDP = 8;
		this.android.fromUri(uri).onLoad(this.onLoadHandler).spacing(defaultSpacingDP).enableAnnotationRendering(this.enableAnnotationRendering).fitEachPage(true).load();
	}

	private cacheThenLoad(url: string) {
		// clear everything in cache
		this.tempFolder.clear().then(() => {
			// download to cache
			const promise = (this.promise = http
				.getFile(url, `${this.tempFolder.path}/${Date.now()}.pdf`)
				.then((file) => {
					if (this.promise === promise) {
						// make sure we haven't switched
						this.loadPDF(file.path);
					}
				})
				.catch((error) => {
					console.error(error);
				}));
		});
	}
}
