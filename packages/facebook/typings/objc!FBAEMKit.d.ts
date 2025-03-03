interface FBAEMNetworking {
	startGraphRequestWithGraphPathParametersTokenStringHTTPMethodCompletion(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, completion: (p1: any, p2: NSError) => void): void;
}
declare var FBAEMNetworking: {
	prototype: FBAEMNetworking;
};

declare class FBAEMReporter extends NSObject implements FBSDKAEMReporter {
	static alloc(): FBAEMReporter; // inherited from NSObject

	static configureWithNetworkerAppIDReporter(networker: FBAEMNetworking, appID: string, reporter: FBSKAdNetworkReporting): void;

	static configureWithNetworkerAppIDReporterAnalyticsAppIDStore(networker: FBAEMNetworking, appID: string, reporter: FBSKAdNetworkReporting, analyticsAppID: string, store: FBSDKDataPersisting): void;

	static enable(): void;

	static handle(url: NSURL): void;

	static new(): FBAEMReporter; // inherited from NSObject

	static recordAndUpdateEventCurrencyValueParameters(event: string, currency: string, value: number, parameters: NSDictionary<string, any>): void;

	static setAdvertiserRuleMatchInServerEnabled(isEnabled: boolean): void;

	static setCatalogMatchingEnabled(isEnabled: boolean): void;

	static setConversionFilteringEnabled(isEnabled: boolean): void;
}

interface FBSKAdNetworkReporting {
	checkAndRevokeTimer(): void;

	isReportingEvent(event: string): boolean;

	shouldCutoff(): boolean;
}
declare var FBSKAdNetworkReporting: {
	prototype: FBSKAdNetworkReporting;
};
