import { PDFViewCommon, srcProperty } from './common';

@NativeClass()
class PDFWebViewDelegate extends NSObject implements WKNavigationDelegate {
	static ObjCProtocols = [WKNavigationDelegate];
	private owner: WeakRef<PDFView>;

	static initWithOwner(owner: WeakRef<PDFView>): PDFWebViewDelegate {
		const delegate = PDFWebViewDelegate.new() as PDFWebViewDelegate;
		delegate.owner = owner;
		return delegate;
	}

	webViewDidFinishNavigation(webView: WKWebView) {
		PDFViewCommon.notifyOfEvent(PDFViewCommon.loadEvent, this.owner);
	}
}

export class PDFView extends PDFViewCommon {
	private delegate: PDFWebViewDelegate;

	// @ts-ignore
	get ios(): WKWebView {
		return this.nativeView;
	}

	createNativeView() {
		this.delegate = PDFWebViewDelegate.initWithOwner(new WeakRef(this));

		const webView = new WKWebView({
			configuration: WKWebViewConfiguration.new(),
			frame: UIScreen.mainScreen.bounds,
		});
		webView.navigationDelegate = this.delegate;

		webView.opaque = false;
		webView.autoresizingMask =
			// tslint:disable-next-line:no-bitwise
			UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;
		return webView;
	}

	[srcProperty.setNative](value: string) {
		this.loadPDF(value);
	}

	loadPDF(src: string) {
		if (!src) {
			return;
		}

		let url: NSURL;

		// detect base64 stream
		const base64prefix = 'data:application/pdf;base64,';
		if (src.indexOf(base64prefix) === 0) {
			const base64data = NSData.alloc().initWithBase64EncodedStringOptions(src.substring(base64prefix.length), NSDataBase64DecodingOptions.IgnoreUnknownCharacters);
			this.createTempFile(base64data);
			return;
		}

		if (src.indexOf('://') === -1) {
			url = NSURL.fileURLWithPath(src);
			this.ios.loadFileURLAllowingReadAccessToURL(url, url);
		} else {
			url = NSURL.URLWithString(src);
			const urlRequest = NSURLRequest.requestWithURL(url);
			this.ios.loadRequest(urlRequest);
		}
	}
}
