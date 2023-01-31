interface SwiftUIProvider {
	onEvent: (p1: NSDictionary<any, any>) => void;

	buildViewController(): UIViewController;

	init?(): SwiftUIProvider;

	updateDataWithData(data: NSDictionary<any, any>): void;
}
declare var SwiftUIProvider: {
	prototype: SwiftUIProvider;
};
