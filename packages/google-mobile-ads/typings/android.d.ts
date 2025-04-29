declare module com {
	export module google {
		export module ads {
			export class AdRequest {
				public static class: java.lang.Class<com.google.ads.AdRequest>;
				public static VERSION: string;
				public static LOGTAG: string;
				public static TEST_EMULATOR: string;
			}
			export module AdRequest {
				export class ErrorCode {
					public static class: java.lang.Class<com.google.ads.AdRequest.ErrorCode>;
					public static INVALID_REQUEST: com.google.ads.AdRequest.ErrorCode;
					public static NO_FILL: com.google.ads.AdRequest.ErrorCode;
					public static NETWORK_ERROR: com.google.ads.AdRequest.ErrorCode;
					public static INTERNAL_ERROR: com.google.ads.AdRequest.ErrorCode;
					public toString(): string;
					public static valueOf(param0: string): com.google.ads.AdRequest.ErrorCode;
					public static values(): native.Array<com.google.ads.AdRequest.ErrorCode>;
				}
				export class Gender {
					public static class: java.lang.Class<com.google.ads.AdRequest.Gender>;
					public static UNKNOWN: com.google.ads.AdRequest.Gender;
					public static MALE: com.google.ads.AdRequest.Gender;
					public static FEMALE: com.google.ads.AdRequest.Gender;
					public static values(): native.Array<com.google.ads.AdRequest.Gender>;
					public static valueOf(param0: string): com.google.ads.AdRequest.Gender;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export class AdSize {
				public static class: java.lang.Class<com.google.ads.AdSize>;
				public static FULL_WIDTH: number;
				public static AUTO_HEIGHT: number;
				public static LANDSCAPE_AD_HEIGHT: number;
				public static PORTRAIT_AD_HEIGHT: number;
				public static LARGE_AD_HEIGHT: number;
				public static SMART_BANNER: com.google.ads.AdSize;
				public static BANNER: com.google.ads.AdSize;
				public static IAB_MRECT: com.google.ads.AdSize;
				public static IAB_BANNER: com.google.ads.AdSize;
				public static IAB_LEADERBOARD: com.google.ads.AdSize;
				public static IAB_WIDE_SKYSCRAPER: com.google.ads.AdSize;
				public constructor(param0: number, param1: number);
				public isSizeAppropriate(param0: number, param1: number): boolean;
				public getHeight(): number;
				public getWidthInPixels(param0: globalAndroid.content.Context): number;
				public isCustomAdSize(): boolean;
				public toString(): string;
				public getHeightInPixels(param0: globalAndroid.content.Context): number;
				public findBestSize(param0: native.Array<com.google.ads.AdSize>): com.google.ads.AdSize;
				public getWidth(): number;
				public isFullWidth(): boolean;
				public constructor(param0: com.google.android.gms.ads.AdSize);
				public isAutoHeight(): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export abstract class AbstractAdViewAdapter implements com.google.android.gms.ads.mediation.MediationBannerAdapter, com.google.android.gms.ads.mediation.MediationNativeAdapter, com.google.android.gms.ads.mediation.OnImmersiveModeUpdatedListener, com.google.android.gms.internal.ads.zzcoo, com.google.android.gms.ads.mediation.zzb {
					public static class: java.lang.Class<com.google.ads.mediation.AbstractAdViewAdapter>;
					public static AD_UNIT_ID_PARAMETER: string;
					public mAdView: com.google.android.gms.ads.AdView;
					public mInterstitialAd: com.google.android.gms.ads.interstitial.InterstitialAd;
					public buildExtrasBundle(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
					public getBannerView(): globalAndroid.view.View;
					public requestInterstitialAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationInterstitialListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.MediationAdRequest, param4: globalAndroid.os.Bundle): void;
					public onDestroy(): void;
					public getInterstitialAdapterInfo(): globalAndroid.os.Bundle;
					public onResume(): void;
					public getAdUnitId(param0: globalAndroid.os.Bundle): string;
					public getVideoController(): any /* com.google.android.gms.internal.ads.zzbhg*/;
					public constructor();
					public onPause(): void;
					public onImmersiveModeUpdated(param0: boolean): void;
					public showInterstitial(): void;
					public requestBannerAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationBannerListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.AdSize, param4: com.google.android.gms.ads.mediation.MediationAdRequest, param5: globalAndroid.os.Bundle): void;
					public requestNativeAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationNativeListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.NativeMediationAdRequest, param4: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class AdUrlAdapter extends com.google.ads.mediation.AbstractAdViewAdapter implements com.google.android.gms.ads.mediation.MediationBannerAdapter, com.google.android.gms.ads.mediation.MediationInterstitialAdapter, com.google.android.gms.ads.mediation.MediationNativeAdapter {
					public static class: java.lang.Class<com.google.ads.mediation.AdUrlAdapter>;
					public buildExtrasBundle(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
					public getBannerView(): globalAndroid.view.View;
					public requestInterstitialAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationInterstitialListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.MediationAdRequest, param4: globalAndroid.os.Bundle): void;
					public onDestroy(): void;
					public getInterstitialAdapterInfo(): globalAndroid.os.Bundle;
					public onResume(): void;
					public getAdUnitId(param0: globalAndroid.os.Bundle): string;
					public getVideoController(): any /* com.google.android.gms.internal.ads.zzbhg*/;
					public constructor();
					public onPause(): void;
					public onImmersiveModeUpdated(param0: boolean): void;
					public showInterstitial(): void;
					public requestBannerAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationBannerListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.AdSize, param4: com.google.android.gms.ads.mediation.MediationAdRequest, param5: globalAndroid.os.Bundle): void;
					public requestNativeAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationNativeListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.NativeMediationAdRequest, param4: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class EmptyNetworkExtras extends com.google.ads.mediation.NetworkExtras {
					public static class: java.lang.Class<com.google.ads.mediation.EmptyNetworkExtras>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class MediationAdRequest {
					public static class: java.lang.Class<com.google.ads.mediation.MediationAdRequest>;
					public getAgeInYears(): java.lang.Integer;
					public getKeywords(): java.util.Set<string>;
					public getGender(): com.google.ads.AdRequest.Gender;
					public getBirthday(): java.util.Date;
					public isTesting(): boolean;
					public getLocation(): globalAndroid.location.Location;
					public constructor(param0: java.util.Date, param1: com.google.ads.AdRequest.Gender, param2: java.util.Set<string>, param3: boolean, param4: globalAndroid.location.Location);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class MediationAdapter<ADDITIONAL_PARAMETERS, SERVER_PARAMETERS> extends java.lang.Object {
					public static class: java.lang.Class<com.google.ads.mediation.MediationAdapter>;
					/**
					 * Constructs a new instance of the com.google.ads.mediation.MediationAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { destroy(): void; getAdditionalParametersType(): java.lang.Class<ADDITIONAL_PARAMETERS>; getServerParametersType(): java.lang.Class<SERVER_PARAMETERS> });
					public constructor();
					public getServerParametersType(): java.lang.Class<SERVER_PARAMETERS>;
					public destroy(): void;
					public getAdditionalParametersType(): java.lang.Class<ADDITIONAL_PARAMETERS>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class MediationBannerAdapter<ADDITIONAL_PARAMETERS, SERVER_PARAMETERS> extends com.google.ads.mediation.MediationAdapter<any, any> {
					public static class: java.lang.Class<com.google.ads.mediation.MediationBannerAdapter>;
					/**
					 * Constructs a new instance of the com.google.ads.mediation.MediationBannerAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { requestBannerAd(param0: com.google.ads.mediation.MediationBannerListener, param1: globalAndroid.app.Activity, param2: any, param3: com.google.ads.AdSize, param4: com.google.ads.mediation.MediationAdRequest, param5: any): void; getBannerView(): globalAndroid.view.View; destroy(): void; getAdditionalParametersType(): java.lang.Class<any>; getServerParametersType(): java.lang.Class<any> });
					public constructor();
					public getBannerView(): globalAndroid.view.View;
					public destroy(): void;
					public getServerParametersType(): java.lang.Class<any>;
					public requestBannerAd(param0: com.google.ads.mediation.MediationBannerListener, param1: globalAndroid.app.Activity, param2: any, param3: com.google.ads.AdSize, param4: com.google.ads.mediation.MediationAdRequest, param5: any): void;
					public getAdditionalParametersType(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class MediationBannerListener {
					public static class: java.lang.Class<com.google.ads.mediation.MediationBannerListener>;
					/**
					 * Constructs a new instance of the com.google.ads.mediation.MediationBannerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReceivedAd(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>): void;
						onFailedToReceiveAd(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>, param1: com.google.ads.AdRequest.ErrorCode): void;
						onPresentScreen(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>): void;
						onDismissScreen(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>): void;
						onLeaveApplication(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>): void;
						onClick(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>): void;
					});
					public constructor();
					public onFailedToReceiveAd(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>, param1: com.google.ads.AdRequest.ErrorCode): void;
					public onReceivedAd(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>): void;
					public onDismissScreen(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>): void;
					public onPresentScreen(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>): void;
					public onLeaveApplication(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>): void;
					public onClick(param0: com.google.ads.mediation.MediationBannerAdapter<any, any>): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class MediationInterstitialAdapter<ADDITIONAL_PARAMETERS, SERVER_PARAMETERS> extends com.google.ads.mediation.MediationAdapter<any, any> {
					public static class: java.lang.Class<com.google.ads.mediation.MediationInterstitialAdapter>;
					/**
					 * Constructs a new instance of the com.google.ads.mediation.MediationInterstitialAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { requestInterstitialAd(param0: com.google.ads.mediation.MediationInterstitialListener, param1: globalAndroid.app.Activity, param2: any, param3: com.google.ads.mediation.MediationAdRequest, param4: any): void; showInterstitial(): void; destroy(): void; getAdditionalParametersType(): java.lang.Class<any>; getServerParametersType(): java.lang.Class<any> });
					public constructor();
					public destroy(): void;
					public getServerParametersType(): java.lang.Class<any>;
					public requestInterstitialAd(param0: com.google.ads.mediation.MediationInterstitialListener, param1: globalAndroid.app.Activity, param2: any, param3: com.google.ads.mediation.MediationAdRequest, param4: any): void;
					public showInterstitial(): void;
					public getAdditionalParametersType(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class MediationInterstitialListener {
					public static class: java.lang.Class<com.google.ads.mediation.MediationInterstitialListener>;
					/**
					 * Constructs a new instance of the com.google.ads.mediation.MediationInterstitialListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onReceivedAd(param0: com.google.ads.mediation.MediationInterstitialAdapter<any, any>): void; onFailedToReceiveAd(param0: com.google.ads.mediation.MediationInterstitialAdapter<any, any>, param1: com.google.ads.AdRequest.ErrorCode): void; onPresentScreen(param0: com.google.ads.mediation.MediationInterstitialAdapter<any, any>): void; onDismissScreen(param0: com.google.ads.mediation.MediationInterstitialAdapter<any, any>): void; onLeaveApplication(param0: com.google.ads.mediation.MediationInterstitialAdapter<any, any>): void });
					public constructor();
					public onLeaveApplication(param0: com.google.ads.mediation.MediationInterstitialAdapter<any, any>): void;
					public onReceivedAd(param0: com.google.ads.mediation.MediationInterstitialAdapter<any, any>): void;
					public onFailedToReceiveAd(param0: com.google.ads.mediation.MediationInterstitialAdapter<any, any>, param1: com.google.ads.AdRequest.ErrorCode): void;
					public onPresentScreen(param0: com.google.ads.mediation.MediationInterstitialAdapter<any, any>): void;
					public onDismissScreen(param0: com.google.ads.mediation.MediationInterstitialAdapter<any, any>): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export abstract class MediationServerParameters {
					public static class: java.lang.Class<com.google.ads.mediation.MediationServerParameters>;
					public constructor();
					public load(param0: java.util.Map<string, string>): void;
				}
				export module MediationServerParameters {
					export class MappingException {
						public static class: java.lang.Class<com.google.ads.mediation.MediationServerParameters.MappingException>;
						public constructor(param0: string);
					}
					export class Parameter {
						public static class: java.lang.Class<com.google.ads.mediation.MediationServerParameters.Parameter>;
						/**
						 * Constructs a new instance of the com.google.ads.mediation.MediationServerParameters$Parameter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { name(): string; required(): boolean });
						public constructor();
						public name(): string;
						public required(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class NetworkExtras extends com.google.android.gms.ads.mediation.NetworkExtras {
					public static class: java.lang.Class<com.google.ads.mediation.NetworkExtras>;
					/**
					 * Constructs a new instance of the com.google.ads.mediation.NetworkExtras interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module admob {
					export class AdMobAdapter extends com.google.ads.mediation.AbstractAdViewAdapter {
						public static class: java.lang.Class<com.google.ads.mediation.admob.AdMobAdapter>;
						public static NEW_BUNDLE: string;
						public onImmersiveModeUpdated(param0: boolean): void;
						public getVideoController(): any /* com.google.android.gms.internal.ads.zzbhg*/;
						public getBannerView(): globalAndroid.view.View;
						public constructor();
						public getInterstitialAdapterInfo(): globalAndroid.os.Bundle;
						public requestNativeAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationNativeListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.NativeMediationAdRequest, param4: globalAndroid.os.Bundle): void;
						public requestBannerAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationBannerListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.AdSize, param4: com.google.android.gms.ads.mediation.MediationAdRequest, param5: globalAndroid.os.Bundle): void;
						public buildExtrasBundle(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module customevent {
					export class CustomEvent {
						public static class: java.lang.Class<com.google.ads.mediation.customevent.CustomEvent>;
						/**
						 * Constructs a new instance of the com.google.ads.mediation.customevent.CustomEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { destroy(): void });
						public constructor();
						public destroy(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module customevent {
					export class CustomEventAdapter extends java.lang.Object {
						public static class: java.lang.Class<com.google.ads.mediation.customevent.CustomEventAdapter>;
						public getBannerView(): globalAndroid.view.View;
						public constructor();
						public getAdditionalParametersType(): java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEventExtras>;
						public requestBannerAd(param0: com.google.ads.mediation.MediationBannerListener, param1: globalAndroid.app.Activity, param2: any, param3: com.google.ads.AdSize, param4: com.google.ads.mediation.MediationAdRequest, param5: any): void;
						public destroy(): void;
						public showInterstitial(): void;
						public getAdditionalParametersType(): java.lang.Class<any>;
						public getServerParametersType(): java.lang.Class<any>;
						public getServerParametersType(): java.lang.Class<com.google.ads.mediation.customevent.CustomEventServerParameters>;
						public requestBannerAd(param0: com.google.ads.mediation.MediationBannerListener, param1: globalAndroid.app.Activity, param2: com.google.ads.mediation.customevent.CustomEventServerParameters, param3: com.google.ads.AdSize, param4: com.google.ads.mediation.MediationAdRequest, param5: com.google.android.gms.ads.mediation.customevent.CustomEventExtras): void;
						public requestInterstitialAd(param0: com.google.ads.mediation.MediationInterstitialListener, param1: globalAndroid.app.Activity, param2: com.google.ads.mediation.customevent.CustomEventServerParameters, param3: com.google.ads.mediation.MediationAdRequest, param4: com.google.android.gms.ads.mediation.customevent.CustomEventExtras): void;
						public requestInterstitialAd(param0: com.google.ads.mediation.MediationInterstitialListener, param1: globalAndroid.app.Activity, param2: any, param3: com.google.ads.mediation.MediationAdRequest, param4: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module customevent {
					export class CustomEventBanner extends com.google.ads.mediation.customevent.CustomEvent {
						public static class: java.lang.Class<com.google.ads.mediation.customevent.CustomEventBanner>;
						/**
						 * Constructs a new instance of the com.google.ads.mediation.customevent.CustomEventBanner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { requestBannerAd(param0: com.google.ads.mediation.customevent.CustomEventBannerListener, param1: globalAndroid.app.Activity, param2: string, param3: string, param4: com.google.ads.AdSize, param5: com.google.ads.mediation.MediationAdRequest, param6: any): void; destroy(): void });
						public constructor();
						public requestBannerAd(param0: com.google.ads.mediation.customevent.CustomEventBannerListener, param1: globalAndroid.app.Activity, param2: string, param3: string, param4: com.google.ads.AdSize, param5: com.google.ads.mediation.MediationAdRequest, param6: any): void;
						public destroy(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module customevent {
					export class CustomEventBannerListener extends com.google.ads.mediation.customevent.CustomEventListener {
						public static class: java.lang.Class<com.google.ads.mediation.customevent.CustomEventBannerListener>;
						/**
						 * Constructs a new instance of the com.google.ads.mediation.customevent.CustomEventBannerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onReceivedAd(param0: globalAndroid.view.View): void; onClick(): void; onFailedToReceiveAd(): void; onPresentScreen(): void; onDismissScreen(): void; onLeaveApplication(): void });
						public constructor();
						public onDismissScreen(): void;
						public onFailedToReceiveAd(): void;
						public onLeaveApplication(): void;
						public onClick(): void;
						public onPresentScreen(): void;
						public onReceivedAd(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module customevent {
					export class CustomEventInterstitial extends com.google.ads.mediation.customevent.CustomEvent {
						public static class: java.lang.Class<com.google.ads.mediation.customevent.CustomEventInterstitial>;
						/**
						 * Constructs a new instance of the com.google.ads.mediation.customevent.CustomEventInterstitial interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { requestInterstitialAd(param0: com.google.ads.mediation.customevent.CustomEventInterstitialListener, param1: globalAndroid.app.Activity, param2: string, param3: string, param4: com.google.ads.mediation.MediationAdRequest, param5: any): void; showInterstitial(): void; destroy(): void });
						public constructor();
						public showInterstitial(): void;
						public destroy(): void;
						public requestInterstitialAd(param0: com.google.ads.mediation.customevent.CustomEventInterstitialListener, param1: globalAndroid.app.Activity, param2: string, param3: string, param4: com.google.ads.mediation.MediationAdRequest, param5: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module customevent {
					export class CustomEventInterstitialListener extends com.google.ads.mediation.customevent.CustomEventListener {
						public static class: java.lang.Class<com.google.ads.mediation.customevent.CustomEventInterstitialListener>;
						/**
						 * Constructs a new instance of the com.google.ads.mediation.customevent.CustomEventInterstitialListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onReceivedAd(): void; onFailedToReceiveAd(): void; onPresentScreen(): void; onDismissScreen(): void; onLeaveApplication(): void });
						public constructor();
						public onReceivedAd(): void;
						public onDismissScreen(): void;
						public onFailedToReceiveAd(): void;
						public onLeaveApplication(): void;
						public onPresentScreen(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module customevent {
					export class CustomEventListener {
						public static class: java.lang.Class<com.google.ads.mediation.customevent.CustomEventListener>;
						/**
						 * Constructs a new instance of the com.google.ads.mediation.customevent.CustomEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onFailedToReceiveAd(): void; onPresentScreen(): void; onDismissScreen(): void; onLeaveApplication(): void });
						public constructor();
						public onDismissScreen(): void;
						public onFailedToReceiveAd(): void;
						public onLeaveApplication(): void;
						public onPresentScreen(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module customevent {
					export class CustomEventServerParameters extends com.google.ads.mediation.MediationServerParameters {
						public static class: java.lang.Class<com.google.ads.mediation.customevent.CustomEventServerParameters>;
						public label: string;
						public className: string;
						public parameter: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module customevent {
					export class zza extends com.google.ads.mediation.customevent.CustomEventBannerListener {
						public static class: java.lang.Class<com.google.ads.mediation.customevent.zza>;
						public onDismissScreen(): void;
						public onFailedToReceiveAd(): void;
						public onLeaveApplication(): void;
						public onClick(): void;
						public constructor(param0: com.google.ads.mediation.customevent.CustomEventAdapter, param1: com.google.ads.mediation.MediationBannerListener);
						public onPresentScreen(): void;
						public onReceivedAd(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export module customevent {
					export class zzb extends com.google.ads.mediation.customevent.CustomEventInterstitialListener {
						public static class: java.lang.Class<com.google.ads.mediation.customevent.zzb>;
						public onReceivedAd(): void;
						public onDismissScreen(): void;
						public constructor(param0: com.google.ads.mediation.customevent.CustomEventAdapter, param1: com.google.ads.mediation.customevent.CustomEventAdapter, param2: com.google.ads.mediation.MediationInterstitialListener);
						public onFailedToReceiveAd(): void;
						public onLeaveApplication(): void;
						public onPresentScreen(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class zza extends com.google.android.gms.ads.mediation.UnifiedNativeAdMapper {
					public static class: java.lang.Class<com.google.ads.mediation.zza>;
					public constructor();
					public trackViews(param0: globalAndroid.view.View, param1: java.util.Map<string, globalAndroid.view.View>, param2: java.util.Map<string, globalAndroid.view.View>): void;
					public constructor(param0: com.google.android.gms.ads.formats.UnifiedNativeAd);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class zzb extends com.google.android.gms.ads.AdListener implements com.google.android.gms.ads.admanager.AppEventListener, com.google.android.gms.internal.ads.zzbcz {
					public static class: java.lang.Class<com.google.ads.mediation.zzb>;
					public onAdClosed(): void;
					public onAdFailedToLoad(param0: com.google.android.gms.ads.LoadAdError): void;
					public onAppEvent(param0: string, param1: string): void;
					public constructor(param0: com.google.ads.mediation.AbstractAdViewAdapter, param1: com.google.android.gms.ads.mediation.MediationBannerListener);
					public constructor();
					public onAdLoaded(): void;
					public onAdOpened(): void;
					public onAdClicked(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class zzc extends com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback {
					public static class: java.lang.Class<com.google.ads.mediation.zzc>;
					public onAdFailedToLoad(param0: com.google.android.gms.ads.LoadAdError): void;
					public constructor(param0: com.google.ads.mediation.AbstractAdViewAdapter, param1: com.google.android.gms.ads.mediation.MediationInterstitialListener);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class zzd extends com.google.android.gms.ads.FullScreenContentCallback {
					public static class: java.lang.Class<com.google.ads.mediation.zzd>;
					public constructor(param0: com.google.ads.mediation.AbstractAdViewAdapter, param1: com.google.android.gms.ads.mediation.MediationInterstitialListener);
					public constructor();
					public onAdShowedFullScreenContent(): void;
					public onAdDismissedFullScreenContent(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ads {
			export module mediation {
				export class zze extends com.google.android.gms.ads.AdListener implements com.google.android.gms.ads.formats.UnifiedNativeAd.OnUnifiedNativeAdLoadedListener, com.google.android.gms.ads.formats.NativeCustomTemplateAd.OnCustomTemplateAdLoadedListener, com.google.android.gms.ads.formats.NativeCustomTemplateAd.OnCustomClickListener {
					public static class: java.lang.Class<com.google.ads.mediation.zze>;
					public onAdImpression(): void;
					public onAdClosed(): void;
					public onCustomTemplateAdLoaded(param0: com.google.android.gms.ads.formats.NativeCustomTemplateAd): void;
					public constructor(param0: com.google.ads.mediation.AbstractAdViewAdapter, param1: com.google.android.gms.ads.mediation.MediationNativeListener);
					public onAdFailedToLoad(param0: com.google.android.gms.ads.LoadAdError): void;
					public constructor();
					public onUnifiedNativeAdLoaded(param0: com.google.android.gms.ads.formats.UnifiedNativeAd): void;
					public onAdLoaded(): void;
					public onAdOpened(): void;
					public onAdClicked(): void;
					public onCustomClick(param0: com.google.android.gms.ads.formats.NativeCustomTemplateAd, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdActivity {
						public static class: java.lang.Class<com.google.android.gms.ads.AdActivity>;
						public static CLASS_NAME: string;
						public constructor();
						public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
						public onResume(): void;
						public onUserLeaveHint(): void;
						public onStop(): void;
						public onBackPressed(): void;
						public onPause(): void;
						public onRestart(): void;
						public onDestroy(): void;
						public setContentView(param0: globalAndroid.view.View): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public setContentView(param0: number): void;
						public onStart(): void;
						public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdError {
						public static class: java.lang.Class<com.google.android.gms.ads.AdError>;
						public static UNDEFINED_DOMAIN: string;
						public getMessage(): string;
						public getDomain(): string;
						public getCause(): com.google.android.gms.ads.AdError;
						public getCode(): number;
						public constructor(param0: number, param1: string, param2: string);
						public toString(): string;
						public constructor(param0: number, param1: string, param2: string, param3: com.google.android.gms.ads.AdError);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdFormat {
						public static class: java.lang.Class<com.google.android.gms.ads.AdFormat>;
						public static BANNER: com.google.android.gms.ads.AdFormat;
						public static INTERSTITIAL: com.google.android.gms.ads.AdFormat;
						public static REWARDED: com.google.android.gms.ads.AdFormat;
						public static REWARDED_INTERSTITIAL: com.google.android.gms.ads.AdFormat;
						public static NATIVE: com.google.android.gms.ads.AdFormat;
						public static UNKNOWN: com.google.android.gms.ads.AdFormat;
						public static valueOf(param0: string): com.google.android.gms.ads.AdFormat;
						public static values(): native.Array<com.google.android.gms.ads.AdFormat>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdInspectorError extends com.google.android.gms.ads.AdError {
						public static class: java.lang.Class<com.google.android.gms.ads.AdInspectorError>;
						public static ERROR_CODE_INTERNAL_ERROR: number;
						public static ERROR_CODE_FAILED_TO_LOAD: number;
						public static ERROR_CODE_NOT_IN_TEST_MODE: number;
						public static ERROR_CODE_ALREADY_OPEN: number;
						public getCode(): number;
						public constructor(param0: number, param1: string, param2: string);
						public constructor(param0: number, param1: string, param2: string, param3: com.google.android.gms.ads.AdError);
					}
					export module AdInspectorError {
						export class AdInspectorErrorCode {
							public static class: java.lang.Class<com.google.android.gms.ads.AdInspectorError.AdInspectorErrorCode>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.AdInspectorError$AdInspectorErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export abstract class AdListener {
						public static class: java.lang.Class<com.google.android.gms.ads.AdListener>;
						public constructor();
						public onAdLoaded(): void;
						public onAdClicked(): void;
						public onAdFailedToLoad(param0: com.google.android.gms.ads.LoadAdError): void;
						public onAdClosed(): void;
						public onAdImpression(): void;
						public onAdOpened(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export abstract class AdLoadCallback<AdT> extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.ads.AdLoadCallback>;
						public constructor();
						public onAdLoaded(param0: AdT): void;
						public onAdFailedToLoad(param0: com.google.android.gms.ads.LoadAdError): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdLoader {
						public static class: java.lang.Class<com.google.android.gms.ads.AdLoader>;
						public isLoading(): boolean;
						public loadAds(param0: com.google.android.gms.ads.AdRequest, param1: number): void;
						public loadAd(param0: com.google.android.gms.ads.AdRequest): void;
						public loadAd(param0: com.google.android.gms.ads.admanager.AdManagerAdRequest): void;
					}
					export module AdLoader {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.ads.AdLoader.Builder>;
							/** @deprecated */
							public withNativeAdOptions(param0: com.google.android.gms.ads.formats.NativeAdOptions): com.google.android.gms.ads.AdLoader.Builder;
							public forNativeAd(param0: com.google.android.gms.ads.nativead.NativeAd.OnNativeAdLoadedListener): com.google.android.gms.ads.AdLoader.Builder;
							public build(): com.google.android.gms.ads.AdLoader;
							public withAdManagerAdViewOptions(param0: com.google.android.gms.ads.formats.AdManagerAdViewOptions): com.google.android.gms.ads.AdLoader.Builder;
							public forCustomFormatAd(param0: string, param1: com.google.android.gms.ads.nativead.NativeCustomFormatAd.OnCustomFormatAdLoadedListener, param2: com.google.android.gms.ads.nativead.NativeCustomFormatAd.OnCustomClickListener): com.google.android.gms.ads.AdLoader.Builder;
							public withAdListener(param0: com.google.android.gms.ads.AdListener): com.google.android.gms.ads.AdLoader.Builder;
							public withNativeAdOptions(param0: com.google.android.gms.ads.nativead.NativeAdOptions): com.google.android.gms.ads.AdLoader.Builder;
							/** @deprecated */
							public forUnifiedNativeAd(param0: com.google.android.gms.ads.formats.UnifiedNativeAd.OnUnifiedNativeAdLoadedListener): com.google.android.gms.ads.AdLoader.Builder;
							/** @deprecated */
							public forCustomTemplateAd(param0: string, param1: com.google.android.gms.ads.formats.NativeCustomTemplateAd.OnCustomTemplateAdLoadedListener, param2: com.google.android.gms.ads.formats.NativeCustomTemplateAd.OnCustomClickListener): com.google.android.gms.ads.AdLoader.Builder;
							public forAdManagerAdView(param0: com.google.android.gms.ads.formats.OnAdManagerAdViewLoadedListener, param1: native.Array<com.google.android.gms.ads.AdSize>): com.google.android.gms.ads.AdLoader.Builder;
							public constructor(param0: globalAndroid.content.Context, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdRequest {
						public static class: java.lang.Class<com.google.android.gms.ads.AdRequest>;
						public static ERROR_CODE_INTERNAL_ERROR: number;
						public static ERROR_CODE_INVALID_REQUEST: number;
						public static ERROR_CODE_NETWORK_ERROR: number;
						public static ERROR_CODE_NO_FILL: number;
						public static ERROR_CODE_APP_ID_MISSING: number;
						public static ERROR_CODE_REQUEST_ID_MISMATCH: number;
						public static ERROR_CODE_INVALID_AD_STRING: number;
						public static ERROR_CODE_MEDIATION_NO_FILL: number;
						public static GENDER_UNKNOWN: number;
						public static GENDER_MALE: number;
						public static GENDER_FEMALE: number;
						public static MAX_CONTENT_URL_LENGTH: number;
						public static DEVICE_ID_EMULATOR: string;
						public getNeighboringContentUrls(): java.util.List<string>;
						public constructor(param0: com.google.android.gms.ads.AdRequest.Builder);
						public getLocation(): globalAndroid.location.Location;
						public getNetworkExtrasBundle(param0: java.lang.Class): globalAndroid.os.Bundle;
						public getKeywords(): java.util.Set<string>;
						public getContentUrl(): string;
						public getCustomEventExtrasBundle(param0: java.lang.Class): globalAndroid.os.Bundle;
						public isTestDevice(param0: globalAndroid.content.Context): boolean;
						public getCustomTargeting(): globalAndroid.os.Bundle;
					}
					export module AdRequest {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.ads.AdRequest.Builder>;
							public constructor();
							public setNeighboringContentUrls(param0: java.util.List<string>): com.google.android.gms.ads.AdRequest.Builder;
							/** @deprecated */
							public addNetworkExtras(param0: com.google.android.gms.ads.mediation.NetworkExtras): com.google.android.gms.ads.AdRequest.Builder;
							public setAdString(param0: string): com.google.android.gms.ads.AdRequest.Builder;
							public setContentUrl(param0: string): com.google.android.gms.ads.AdRequest.Builder;
							public addKeyword(param0: string): com.google.android.gms.ads.AdRequest.Builder;
							public addNetworkExtrasBundle(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle): com.google.android.gms.ads.AdRequest.Builder;
							public addCustomEventExtrasBundle(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle): com.google.android.gms.ads.AdRequest.Builder;
							public build(): com.google.android.gms.ads.AdRequest;
							public setHttpTimeoutMillis(param0: number): com.google.android.gms.ads.AdRequest.Builder;
							/** @deprecated */
							public setAdInfo(param0: com.google.android.gms.ads.query.AdInfo): com.google.android.gms.ads.AdRequest.Builder;
							public setRequestAgent(param0: string): com.google.android.gms.ads.AdRequest.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdService {
						public static class: java.lang.Class<com.google.android.gms.ads.AdService>;
						public constructor();
						public onHandleIntent(param0: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdSize {
						public static class: java.lang.Class<com.google.android.gms.ads.AdSize>;
						public static FULL_WIDTH: number;
						public static AUTO_HEIGHT: number;
						public static BANNER: com.google.android.gms.ads.AdSize;
						public static FULL_BANNER: com.google.android.gms.ads.AdSize;
						public static LARGE_BANNER: com.google.android.gms.ads.AdSize;
						public static LEADERBOARD: com.google.android.gms.ads.AdSize;
						public static MEDIUM_RECTANGLE: com.google.android.gms.ads.AdSize;
						public static WIDE_SKYSCRAPER: com.google.android.gms.ads.AdSize;
						public static SMART_BANNER: com.google.android.gms.ads.AdSize;
						public static FLUID: com.google.android.gms.ads.AdSize;
						public static INVALID: com.google.android.gms.ads.AdSize;
						public static SEARCH: com.google.android.gms.ads.AdSize;
						public static getLandscapeInlineAdaptiveBannerAdSize(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.ads.AdSize;
						public static getCurrentOrientationInterscrollerAdSize(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.ads.AdSize;
						public static getInlineAdaptiveBannerAdSize(param0: number, param1: number): com.google.android.gms.ads.AdSize;
						public static getPortraitInlineAdaptiveBannerAdSize(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.ads.AdSize;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getHeight(): number;
						public isFullWidth(): boolean;
						public static getCurrentOrientationAnchoredAdaptiveBannerAdSize(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.ads.AdSize;
						public toString(): string;
						public isAutoHeight(): boolean;
						public getWidth(): number;
						public static getCurrentOrientationInlineAdaptiveBannerAdSize(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.ads.AdSize;
						public static getPortraitInterscrollerAdSize(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.ads.AdSize;
						public getWidthInPixels(param0: globalAndroid.content.Context): number;
						public isFluid(): boolean;
						public constructor(param0: number, param1: number);
						public static getPortraitAnchoredAdaptiveBannerAdSize(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.ads.AdSize;
						public static getLandscapeAnchoredAdaptiveBannerAdSize(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.ads.AdSize;
						public static getLandscapeInterscrollerAdSize(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.ads.AdSize;
						public getHeightInPixels(param0: globalAndroid.content.Context): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdValue {
						public static class: java.lang.Class<com.google.android.gms.ads.AdValue>;
						public getPrecisionType(): number;
						public getCurrencyCode(): string;
						public getValueMicros(): number;
					}
					export module AdValue {
						export class PrecisionType {
							public static class: java.lang.Class<com.google.android.gms.ads.AdValue.PrecisionType>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.AdValue$PrecisionType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
							public static UNKNOWN: number;
							public static ESTIMATED: number;
							public static PRECISE: number;
							public static PUBLISHER_PROVIDED: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdView extends com.google.android.gms.ads.BaseAdView {
						public static class: java.lang.Class<com.google.android.gms.ads.AdView>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: boolean);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: boolean);
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class AdapterResponseInfo {
						public static class: java.lang.Class<com.google.android.gms.ads.AdapterResponseInfo>;
						public getLatencyMillis(): number;
						public getAdError(): com.google.android.gms.ads.AdError;
						public getCredentials(): globalAndroid.os.Bundle;
						public getAdapterClassName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export abstract class BaseAdView {
						public static class: java.lang.Class<com.google.android.gms.ads.BaseAdView>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: boolean);
						public isLoading(): boolean;
						public setOnPaidEventListener(param0: com.google.android.gms.ads.OnPaidEventListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public getAdUnitId(): string;
						public getAdListener(): com.google.android.gms.ads.AdListener;
						public setAdSize(param0: com.google.android.gms.ads.AdSize): void;
						public pause(): void;
						public destroy(): void;
						public getAdSize(): com.google.android.gms.ads.AdSize;
						public setAdListener(param0: com.google.android.gms.ads.AdListener): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public resume(): void;
						public setAdUnitId(param0: string): void;
						public getOnPaidEventListener(): com.google.android.gms.ads.OnPaidEventListener;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: boolean);
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public loadAd(param0: com.google.android.gms.ads.AdRequest): void;
						public onMeasure(param0: number, param1: number): void;
						public getResponseInfo(): com.google.android.gms.ads.ResponseInfo;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export abstract class FullScreenContentCallback {
						public static class: java.lang.Class<com.google.android.gms.ads.FullScreenContentCallback>;
						public static ERROR_CODE_INTERNAL_ERROR: number;
						public static ERROR_CODE_AD_REUSED: number;
						public static ERROR_CODE_NOT_READY: number;
						public static ERROR_CODE_APP_NOT_FOREGROUND: number;
						public static ERROR_CODE_MEDIATION_SHOW_ERROR: number;
						public constructor();
						public onAdFailedToShowFullScreenContent(param0: com.google.android.gms.ads.AdError): void;
						public onAdShowedFullScreenContent(): void;
						public onAdDismissedFullScreenContent(): void;
						public onAdImpression(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class LoadAdError extends com.google.android.gms.ads.AdError {
						public static class: java.lang.Class<com.google.android.gms.ads.LoadAdError>;
						public constructor(param0: number, param1: string, param2: string, param3: com.google.android.gms.ads.AdError, param4: com.google.android.gms.ads.ResponseInfo);
						public constructor(param0: number, param1: string, param2: string);
						public toString(): string;
						public constructor(param0: number, param1: string, param2: string, param3: com.google.android.gms.ads.AdError);
						public getResponseInfo(): com.google.android.gms.ads.ResponseInfo;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class MediaAspectRatio {
						public static class: java.lang.Class<com.google.android.gms.ads.MediaAspectRatio>;
						/**
						 * Constructs a new instance of the com.google.android.gms.ads.MediaAspectRatio interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static UNKNOWN: number;
						public static ANY: number;
						public static SQUARE: number;
						public static LANDSCAPE: number;
						public static PORTRAIT: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class MediaContent {
						public static class: java.lang.Class<com.google.android.gms.ads.MediaContent>;
						/**
						 * Constructs a new instance of the com.google.android.gms.ads.MediaContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getAspectRatio(): number; getDuration(): number; getCurrentTime(): number; getVideoController(): com.google.android.gms.ads.VideoController; hasVideoContent(): boolean; setMainImage(param0: globalAndroid.graphics.drawable.Drawable): void; getMainImage(): globalAndroid.graphics.drawable.Drawable });
						public constructor();
						public hasVideoContent(): boolean;
						public getMainImage(): globalAndroid.graphics.drawable.Drawable;
						public getDuration(): number;
						public setMainImage(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getCurrentTime(): number;
						public getVideoController(): com.google.android.gms.ads.VideoController;
						public getAspectRatio(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class MediationUtils {
						public static class: java.lang.Class<com.google.android.gms.ads.MediationUtils>;
						public static MIN_WIDTH_RATIO: number;
						public static MIN_HEIGHT_RATIO: number;
						public constructor();
						public static findClosestSize(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.AdSize, param2: java.util.List<com.google.android.gms.ads.AdSize>): com.google.android.gms.ads.AdSize;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class MobileAds {
						public static class: java.lang.Class<com.google.android.gms.ads.MobileAds>;
						public static ERROR_DOMAIN: string;
						public static setAppVolume(param0: number): void;
						public static getVersionString(): string;
						public static setRequestConfiguration(param0: com.google.android.gms.ads.RequestConfiguration): void;
						public static disableMediationAdapterInitialization(param0: globalAndroid.content.Context): void;
						public static openAdInspector(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.OnAdInspectorClosedListener): void;
						public static initialize(param0: globalAndroid.content.Context): void;
						public static setAppMuted(param0: boolean): void;
						public static initialize(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.initialization.OnInitializationCompleteListener): void;
						public static registerWebView(param0: globalAndroid.webkit.WebView): void;
						public static registerRtbAdapter(param0: java.lang.Class<any>): void;
						public static getInitializationStatus(): com.google.android.gms.ads.initialization.InitializationStatus;
						public static getRequestConfiguration(): com.google.android.gms.ads.RequestConfiguration;
						public static openDebugMenu(param0: globalAndroid.content.Context, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class MobileAdsInitProvider {
						public static class: java.lang.Class<com.google.android.gms.ads.MobileAdsInitProvider>;
						public constructor();
						public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
						public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
						public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
						public onCreate(): boolean;
						public getType(param0: globalAndroid.net.Uri): string;
						public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
						public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class MuteThisAdListener {
						public static class: java.lang.Class<com.google.android.gms.ads.MuteThisAdListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.ads.MuteThisAdListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onAdMuted(): void });
						public constructor();
						public onAdMuted(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class MuteThisAdReason {
						public static class: java.lang.Class<com.google.android.gms.ads.MuteThisAdReason>;
						/**
						 * Constructs a new instance of the com.google.android.gms.ads.MuteThisAdReason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getDescription(): string });
						public constructor();
						public getDescription(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class OnAdInspectorClosedListener {
						public static class: java.lang.Class<com.google.android.gms.ads.OnAdInspectorClosedListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.ads.OnAdInspectorClosedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onAdInspectorClosed(param0: com.google.android.gms.ads.AdInspectorError): void });
						public constructor();
						public onAdInspectorClosed(param0: com.google.android.gms.ads.AdInspectorError): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class OnPaidEventListener {
						public static class: java.lang.Class<com.google.android.gms.ads.OnPaidEventListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.ads.OnPaidEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onPaidEvent(param0: com.google.android.gms.ads.AdValue): void });
						public constructor();
						public onPaidEvent(param0: com.google.android.gms.ads.AdValue): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class OnUserEarnedRewardListener {
						public static class: java.lang.Class<com.google.android.gms.ads.OnUserEarnedRewardListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.ads.OnUserEarnedRewardListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onUserEarnedReward(param0: com.google.android.gms.ads.rewarded.RewardItem): void });
						public constructor();
						public onUserEarnedReward(param0: com.google.android.gms.ads.rewarded.RewardItem): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class RequestConfiguration {
						public static class: java.lang.Class<com.google.android.gms.ads.RequestConfiguration>;
						public static TAG_FOR_CHILD_DIRECTED_TREATMENT_UNSPECIFIED: number;
						public static TAG_FOR_CHILD_DIRECTED_TREATMENT_FALSE: number;
						public static TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE: number;
						public static TAG_FOR_UNDER_AGE_OF_CONSENT_TRUE: number;
						public static TAG_FOR_UNDER_AGE_OF_CONSENT_FALSE: number;
						public static TAG_FOR_UNDER_AGE_OF_CONSENT_UNSPECIFIED: number;
						public static MAX_AD_CONTENT_RATING_UNSPECIFIED: string;
						public static MAX_AD_CONTENT_RATING_G: string;
						public static MAX_AD_CONTENT_RATING_PG: string;
						public static MAX_AD_CONTENT_RATING_T: string;
						public static MAX_AD_CONTENT_RATING_MA: string;
						public getMaxAdContentRating(): string;
						public getTagForUnderAgeOfConsent(): number;
						public toBuilder(): com.google.android.gms.ads.RequestConfiguration.Builder;
						public getTestDeviceIds(): java.util.List<string>;
						public getTagForChildDirectedTreatment(): number;
					}
					export module RequestConfiguration {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.ads.RequestConfiguration.Builder>;
							public constructor();
							public setTestDeviceIds(param0: java.util.List<string>): com.google.android.gms.ads.RequestConfiguration.Builder;
							public setTagForUnderAgeOfConsent(param0: number): com.google.android.gms.ads.RequestConfiguration.Builder;
							public setTagForChildDirectedTreatment(param0: number): com.google.android.gms.ads.RequestConfiguration.Builder;
							public build(): com.google.android.gms.ads.RequestConfiguration;
							public setMaxAdContentRating(param0: string): com.google.android.gms.ads.RequestConfiguration.Builder;
						}
						export class MaxAdContentRating {
							public static class: java.lang.Class<com.google.android.gms.ads.RequestConfiguration.MaxAdContentRating>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.RequestConfiguration$MaxAdContentRating interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class TagForChildDirectedTreatment {
							public static class: java.lang.Class<com.google.android.gms.ads.RequestConfiguration.TagForChildDirectedTreatment>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.RequestConfiguration$TagForChildDirectedTreatment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class TagForUnderAgeOfConsent {
							public static class: java.lang.Class<com.google.android.gms.ads.RequestConfiguration.TagForUnderAgeOfConsent>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.RequestConfiguration$TagForUnderAgeOfConsent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class ResponseInfo {
						public static class: java.lang.Class<com.google.android.gms.ads.ResponseInfo>;
						public getAdapterResponses(): java.util.List<com.google.android.gms.ads.AdapterResponseInfo>;
						public getMediationAdapterClassName(): string;
						public getResponseId(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class VideoController {
						public static class: java.lang.Class<com.google.android.gms.ads.VideoController>;
						public static PLAYBACK_STATE_UNKNOWN: number;
						public static PLAYBACK_STATE_PLAYING: number;
						public static PLAYBACK_STATE_PAUSED: number;
						public static PLAYBACK_STATE_ENDED: number;
						public static PLAYBACK_STATE_READY: number;
						public setVideoLifecycleCallbacks(param0: com.google.android.gms.ads.VideoController.VideoLifecycleCallbacks): void;
						public hasVideoContent(): boolean;
						public constructor();
						public mute(param0: boolean): void;
						public pause(): void;
						public getVideoLifecycleCallbacks(): com.google.android.gms.ads.VideoController.VideoLifecycleCallbacks;
						public isCustomControlsEnabled(): boolean;
						public stop(): void;
						public play(): void;
						public isClickToExpandEnabled(): boolean;
						public isMuted(): boolean;
						public getPlaybackState(): number;
					}
					export module VideoController {
						export abstract class VideoLifecycleCallbacks {
							public static class: java.lang.Class<com.google.android.gms.ads.VideoController.VideoLifecycleCallbacks>;
							public constructor();
							public onVideoPlay(): void;
							public onVideoStart(): void;
							public onVideoPause(): void;
							public onVideoMute(param0: boolean): void;
							public onVideoEnd(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class VideoOptions {
						public static class: java.lang.Class<com.google.android.gms.ads.VideoOptions>;
						public constructor(param0: any /* com.google.android.gms.internal.ads.zzbiv*/);
						public getStartMuted(): boolean;
						public getCustomControlsRequested(): boolean;
						public getClickToExpandRequested(): boolean;
					}
					export module VideoOptions {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.ads.VideoOptions.Builder>;
							public constructor();
							public setCustomControlsRequested(param0: boolean): com.google.android.gms.ads.VideoOptions.Builder;
							public setStartMuted(param0: boolean): com.google.android.gms.ads.VideoOptions.Builder;
							public setClickToExpandRequested(param0: boolean): com.google.android.gms.ads.VideoOptions.Builder;
							public build(): com.google.android.gms.ads.VideoOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module admanager {
						export class AdManagerAdRequest extends com.google.android.gms.ads.AdRequest {
							public static class: java.lang.Class<com.google.android.gms.ads.admanager.AdManagerAdRequest>;
							public getPublisherProvidedId(): string;
							public getCustomTargeting(): globalAndroid.os.Bundle;
						}
						export module AdManagerAdRequest {
							export class Builder extends com.google.android.gms.ads.AdRequest.Builder {
								public static class: java.lang.Class<com.google.android.gms.ads.admanager.AdManagerAdRequest.Builder>;
								public addCustomTargeting(param0: string, param1: java.util.List<string>): com.google.android.gms.ads.admanager.AdManagerAdRequest.Builder;
								public build(): com.google.android.gms.ads.admanager.AdManagerAdRequest;
								public addCustomTargeting(param0: string, param1: string): com.google.android.gms.ads.admanager.AdManagerAdRequest.Builder;
								public addCategoryExclusion(param0: string): com.google.android.gms.ads.admanager.AdManagerAdRequest.Builder;
								public setAdString(param0: string): com.google.android.gms.ads.admanager.AdManagerAdRequest.Builder;
								/** @deprecated */
								public setAdInfo(param0: com.google.android.gms.ads.query.AdInfo): com.google.android.gms.ads.admanager.AdManagerAdRequest.Builder;
								public constructor();
								public setPublisherProvidedId(param0: string): com.google.android.gms.ads.admanager.AdManagerAdRequest.Builder;
								public build(): com.google.android.gms.ads.AdRequest;
								/** @deprecated */
								public setAdInfo(param0: com.google.android.gms.ads.query.AdInfo): com.google.android.gms.ads.AdRequest.Builder;
								public setAdString(param0: string): com.google.android.gms.ads.AdRequest.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module admanager {
						export class AdManagerAdView extends com.google.android.gms.ads.BaseAdView {
							public static class: java.lang.Class<com.google.android.gms.ads.admanager.AdManagerAdView>;
							public setAppEventListener(param0: com.google.android.gms.ads.admanager.AppEventListener): void;
							public setManualImpressionsEnabled(param0: boolean): void;
							public loadAd(param0: com.google.android.gms.ads.AdRequest): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: boolean);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: boolean);
							public getVideoOptions(): com.google.android.gms.ads.VideoOptions;
							public constructor(param0: globalAndroid.content.Context, param1: number);
							public getVideoController(): com.google.android.gms.ads.VideoController;
							public setVideoOptions(param0: com.google.android.gms.ads.VideoOptions): void;
							public getAppEventListener(): com.google.android.gms.ads.admanager.AppEventListener;
							public setAdSizes(param0: native.Array<com.google.android.gms.ads.AdSize>): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public getAdSizes(): native.Array<com.google.android.gms.ads.AdSize>;
							public loadAd(param0: com.google.android.gms.ads.admanager.AdManagerAdRequest): void;
							public recordManualImpression(): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module admanager {
						export abstract class AdManagerInterstitialAd extends com.google.android.gms.ads.interstitial.InterstitialAd {
							public static class: java.lang.Class<com.google.android.gms.ads.admanager.AdManagerInterstitialAd>;
							public constructor();
							public setAppEventListener(param0: com.google.android.gms.ads.admanager.AppEventListener): void;
							public static load(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.ads.AdRequest, param3: com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback): void;
							public getAppEventListener(): com.google.android.gms.ads.admanager.AppEventListener;
							public static load(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.ads.admanager.AdManagerAdRequest, param3: com.google.android.gms.ads.admanager.AdManagerInterstitialAdLoadCallback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module admanager {
						export abstract class AdManagerInterstitialAdLoadCallback extends com.google.android.gms.ads.AdLoadCallback<com.google.android.gms.ads.admanager.AdManagerInterstitialAd> {
							public static class: java.lang.Class<com.google.android.gms.ads.admanager.AdManagerInterstitialAdLoadCallback>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module admanager {
						export class AppEventListener {
							public static class: java.lang.Class<com.google.android.gms.ads.admanager.AppEventListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.admanager.AppEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAppEvent(param0: string, param1: string): void });
							public constructor();
							public onAppEvent(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module admanager {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.ads.admanager.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module appopen {
						export abstract class AppOpenAd {
							public static class: java.lang.Class<com.google.android.gms.ads.appopen.AppOpenAd>;
							public static APP_OPEN_AD_ORIENTATION_PORTRAIT: number;
							public static APP_OPEN_AD_ORIENTATION_LANDSCAPE: number;
							public constructor();
							public getAdUnitId(): string;
							public getResponseInfo(): com.google.android.gms.ads.ResponseInfo;
							public setImmersiveMode(param0: boolean): void;
							public setFullScreenContentCallback(param0: com.google.android.gms.ads.FullScreenContentCallback): void;
							public getFullScreenContentCallback(): com.google.android.gms.ads.FullScreenContentCallback;
							public static load(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.ads.AdRequest, param3: number, param4: com.google.android.gms.ads.appopen.AppOpenAd.AppOpenAdLoadCallback): void;
							public static load(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.ads.admanager.AdManagerAdRequest, param3: number, param4: com.google.android.gms.ads.appopen.AppOpenAd.AppOpenAdLoadCallback): void;
							public show(param0: globalAndroid.app.Activity): void;
							public getOnPaidEventListener(): com.google.android.gms.ads.OnPaidEventListener;
							public setOnPaidEventListener(param0: com.google.android.gms.ads.OnPaidEventListener): void;
						}
						export module AppOpenAd {
							export abstract class AppOpenAdLoadCallback extends com.google.android.gms.ads.AdLoadCallback<com.google.android.gms.ads.appopen.AppOpenAd> {
								public static class: java.lang.Class<com.google.android.gms.ads.appopen.AppOpenAd.AppOpenAdLoadCallback>;
								public constructor();
							}
							export class AppOpenAdOrientation {
								public static class: java.lang.Class<com.google.android.gms.ads.appopen.AppOpenAd.AppOpenAdOrientation>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.appopen.AppOpenAd$AppOpenAdOrientation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class AdManagerAdViewOptions {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.AdManagerAdViewOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.formats.AdManagerAdViewOptions>;
							public getManualImpressionsEnabled(): boolean;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
						export module AdManagerAdViewOptions {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.AdManagerAdViewOptions.Builder>;
								public setShouldDelayBannerRenderingListener(param0: com.google.android.gms.ads.formats.ShouldDelayBannerRenderingListener): com.google.android.gms.ads.formats.AdManagerAdViewOptions.Builder;
								public constructor();
								public setManualImpressionsEnabled(param0: boolean): com.google.android.gms.ads.formats.AdManagerAdViewOptions.Builder;
								public build(): com.google.android.gms.ads.formats.AdManagerAdViewOptions;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class MediaView {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.MediaView>;
							public setMediaContent(param0: com.google.android.gms.ads.MediaContent): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setImageScaleType(param0: globalAndroid.widget.ImageView.ScaleType): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export abstract class NativeAd {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeAd>;
							public static ASSET_ADCHOICES_CONTAINER_VIEW: string;
							public constructor();
							/** @deprecated */
							public recordImpression(param0: globalAndroid.os.Bundle): boolean;
							/** @deprecated */
							public performClick(param0: globalAndroid.os.Bundle): void;
							/** @deprecated */
							public reportTouchEvent(param0: globalAndroid.os.Bundle): void;
						}
						export module NativeAd {
							export abstract class AdChoicesInfo {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeAd.AdChoicesInfo>;
								public getImages(): java.util.List<com.google.android.gms.ads.formats.NativeAd.Image>;
								public getText(): string;
								public constructor();
							}
							export abstract class Image {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeAd.Image>;
								public getDrawable(): globalAndroid.graphics.drawable.Drawable;
								public getScale(): number;
								public constructor();
								public getUri(): globalAndroid.net.Uri;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class NativeAdOptions {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeAdOptions>;
							public static ORIENTATION_ANY: number;
							public static ORIENTATION_PORTRAIT: number;
							public static ORIENTATION_LANDSCAPE: number;
							public static NATIVE_MEDIA_ASPECT_RATIO_UNKNOWN: number;
							public static NATIVE_MEDIA_ASPECT_RATIO_ANY: number;
							public static NATIVE_MEDIA_ASPECT_RATIO_LANDSCAPE: number;
							public static NATIVE_MEDIA_ASPECT_RATIO_PORTRAIT: number;
							public static NATIVE_MEDIA_ASPECT_RATIO_SQUARE: number;
							public static ADCHOICES_TOP_LEFT: number;
							public static ADCHOICES_TOP_RIGHT: number;
							public static ADCHOICES_BOTTOM_RIGHT: number;
							public static ADCHOICES_BOTTOM_LEFT: number;
							public getAdChoicesPlacement(): number;
							public shouldReturnUrlsForImageAssets(): boolean;
							public shouldRequestMultipleImages(): boolean;
							public getMediaAspectRatio(): number;
							/** @deprecated */
							public getImageOrientation(): number;
							public getVideoOptions(): com.google.android.gms.ads.VideoOptions;
						}
						export module NativeAdOptions {
							export class AdChoicesPlacement {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeAdOptions.AdChoicesPlacement>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.formats.NativeAdOptions$AdChoicesPlacement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeAdOptions.Builder>;
								public setMediaAspectRatio(param0: number): com.google.android.gms.ads.formats.NativeAdOptions.Builder;
								public setAdChoicesPlacement(param0: number): com.google.android.gms.ads.formats.NativeAdOptions.Builder;
								/** @deprecated */
								public setImageOrientation(param0: number): com.google.android.gms.ads.formats.NativeAdOptions.Builder;
								public setReturnUrlsForImageAssets(param0: boolean): com.google.android.gms.ads.formats.NativeAdOptions.Builder;
								public build(): com.google.android.gms.ads.formats.NativeAdOptions;
								public setRequestMultipleImages(param0: boolean): com.google.android.gms.ads.formats.NativeAdOptions.Builder;
								public setRequestCustomMuteThisAd(param0: boolean): com.google.android.gms.ads.formats.NativeAdOptions.Builder;
								public setVideoOptions(param0: com.google.android.gms.ads.VideoOptions): com.google.android.gms.ads.formats.NativeAdOptions.Builder;
								public constructor();
							}
							export class NativeMediaAspectRatio {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeAdOptions.NativeMediaAspectRatio>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.formats.NativeAdOptions$NativeMediaAspectRatio interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class NativeCustomTemplateAd {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeCustomTemplateAd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.formats.NativeCustomTemplateAd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getText(param0: string): string; getImage(param0: string): com.google.android.gms.ads.formats.NativeAd.Image; getVideoController(): com.google.android.gms.ads.VideoController; getVideoMediaView(): com.google.android.gms.ads.formats.MediaView; getAvailableAssetNames(): java.util.List<string>; getCustomTemplateId(): string; performClick(param0: string): void; recordImpression(): void; getDisplayOpenMeasurement(): com.google.android.gms.ads.formats.NativeCustomTemplateAd.DisplayOpenMeasurement; destroy(): void });
							public constructor();
							public static ASSET_NAME_VIDEO: string;
							public getCustomTemplateId(): string;
							public getVideoController(): com.google.android.gms.ads.VideoController;
							public getVideoMediaView(): com.google.android.gms.ads.formats.MediaView;
							public destroy(): void;
							public getAvailableAssetNames(): java.util.List<string>;
							public getDisplayOpenMeasurement(): com.google.android.gms.ads.formats.NativeCustomTemplateAd.DisplayOpenMeasurement;
							public getImage(param0: string): com.google.android.gms.ads.formats.NativeAd.Image;
							public performClick(param0: string): void;
							public recordImpression(): void;
							public getText(param0: string): string;
						}
						export module NativeCustomTemplateAd {
							export class DisplayOpenMeasurement {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeCustomTemplateAd.DisplayOpenMeasurement>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.formats.NativeCustomTemplateAd$DisplayOpenMeasurement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { start(): boolean; setView(param0: globalAndroid.view.View): void });
								public constructor();
								public start(): boolean;
								public setView(param0: globalAndroid.view.View): void;
							}
							export class OnCustomClickListener {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeCustomTemplateAd.OnCustomClickListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.formats.NativeCustomTemplateAd$OnCustomClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onCustomClick(param0: com.google.android.gms.ads.formats.NativeCustomTemplateAd, param1: string): void });
								public constructor();
								public onCustomClick(param0: com.google.android.gms.ads.formats.NativeCustomTemplateAd, param1: string): void;
							}
							export class OnCustomTemplateAdLoadedListener {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.NativeCustomTemplateAd.OnCustomTemplateAdLoadedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.formats.NativeCustomTemplateAd$OnCustomTemplateAdLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onCustomTemplateAdLoaded(param0: com.google.android.gms.ads.formats.NativeCustomTemplateAd): void });
								public constructor();
								public onCustomTemplateAdLoaded(param0: com.google.android.gms.ads.formats.NativeCustomTemplateAd): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class OnAdManagerAdViewLoadedListener {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.OnAdManagerAdViewLoadedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.formats.OnAdManagerAdViewLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAdManagerAdViewLoaded(param0: com.google.android.gms.ads.admanager.AdManagerAdView): void });
							public constructor();
							public onAdManagerAdViewLoaded(param0: com.google.android.gms.ads.admanager.AdManagerAdView): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class PublisherAdViewOptions {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.PublisherAdViewOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.formats.PublisherAdViewOptions>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
						export module PublisherAdViewOptions {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.PublisherAdViewOptions.Builder>;
								public setShouldDelayBannerRenderingListener(param0: com.google.android.gms.ads.formats.ShouldDelayBannerRenderingListener): com.google.android.gms.ads.formats.PublisherAdViewOptions.Builder;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class ShouldDelayBannerRenderingListener {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.ShouldDelayBannerRenderingListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.formats.ShouldDelayBannerRenderingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { shouldDelayBannerRendering(param0: java.lang.Runnable): boolean });
							public constructor();
							public shouldDelayBannerRendering(param0: java.lang.Runnable): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export abstract class UnifiedNativeAd {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.UnifiedNativeAd>;
							public getHeadline(): string;
							public performClick(param0: globalAndroid.os.Bundle): void;
							public reportTouchEvent(param0: globalAndroid.os.Bundle): void;
							public getPrice(): string;
							public isCustomClickGestureEnabled(): boolean;
							public getExtras(): globalAndroid.os.Bundle;
							public getAdChoicesInfo(): com.google.android.gms.ads.formats.NativeAd.AdChoicesInfo;
							public destroy(): void;
							public recordCustomClickGesture(): void;
							public getResponseInfo(): com.google.android.gms.ads.ResponseInfo;
							/** @deprecated */
							public getVideoController(): com.google.android.gms.ads.VideoController;
							public getImages(): java.util.List<com.google.android.gms.ads.formats.NativeAd.Image>;
							public getBody(): string;
							public getIcon(): com.google.android.gms.ads.formats.NativeAd.Image;
							public constructor();
							/** @deprecated */
							public getMediationAdapterClassName(): string;
							public enableCustomClickGesture(): void;
							public setMuteThisAdListener(param0: com.google.android.gms.ads.MuteThisAdListener): void;
							public getAdvertiser(): string;
							public recordImpression(param0: globalAndroid.os.Bundle): boolean;
							public cancelUnconfirmedClick(): void;
							public setOnPaidEventListener(param0: com.google.android.gms.ads.OnPaidEventListener): void;
							public getMediaContent(): com.google.android.gms.ads.MediaContent;
							public setUnconfirmedClickListener(param0: com.google.android.gms.ads.formats.UnifiedNativeAd.UnconfirmedClickListener): void;
							public getCallToAction(): string;
							public isCustomMuteThisAdEnabled(): boolean;
							public muteThisAd(param0: com.google.android.gms.ads.MuteThisAdReason): void;
							public getStarRating(): java.lang.Double;
							public getStore(): string;
							public getMuteThisAdReasons(): java.util.List<com.google.android.gms.ads.MuteThisAdReason>;
						}
						export module UnifiedNativeAd {
							export class OnUnifiedNativeAdLoadedListener {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.UnifiedNativeAd.OnUnifiedNativeAdLoadedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.formats.UnifiedNativeAd$OnUnifiedNativeAdLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onUnifiedNativeAdLoaded(param0: com.google.android.gms.ads.formats.UnifiedNativeAd): void });
								public constructor();
								public onUnifiedNativeAdLoaded(param0: com.google.android.gms.ads.formats.UnifiedNativeAd): void;
							}
							export class UnconfirmedClickListener {
								public static class: java.lang.Class<com.google.android.gms.ads.formats.UnifiedNativeAd.UnconfirmedClickListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.formats.UnifiedNativeAd$UnconfirmedClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onUnconfirmedClickReceived(param0: string): void; onUnconfirmedClickCancelled(): void });
								public constructor();
								public onUnconfirmedClickReceived(param0: string): void;
								public onUnconfirmedClickCancelled(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class UnifiedNativeAdAssetNames {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.UnifiedNativeAdAssetNames>;
							public static ASSET_HEADLINE: string;
							public static ASSET_CALL_TO_ACTION: string;
							public static ASSET_ICON: string;
							public static ASSET_BODY: string;
							public static ASSET_ADVERTISER: string;
							public static ASSET_STORE: string;
							public static ASSET_PRICE: string;
							public static ASSET_IMAGE: string;
							public static ASSET_STAR_RATING: string;
							public static ASSET_MEDIA_VIDEO: string;
							public static ASSET_ADCHOICES_CONTAINER_VIEW: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.zza>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class zzc extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.formats.AdManagerAdViewOptions> {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.zzc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.zzd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.zze>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class zzf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.formats.PublisherAdViewOptions> {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.zzf>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module formats {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.ads.formats.zzg>;
							public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
							public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
							public removeView(param0: globalAndroid.view.View): void;
							public bringChildToFront(param0: globalAndroid.view.View): void;
							public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public removeAllViews(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module h5 {
						export class H5AdsRequestHandler {
							public static class: java.lang.Class<com.google.android.gms.ads.h5.H5AdsRequestHandler>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.h5.OnH5AdsEventListener);
							public shouldInterceptRequest(param0: string): boolean;
							public clearAdObjects(): void;
							public handleH5AdsRequest(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module h5 {
						export class H5AdsWebViewClient extends com.google.android.gms.internal.ads.zzbqj {
							public static class: java.lang.Class<com.google.android.gms.ads.h5.H5AdsWebViewClient>;
							public constructor();
							public setDelegateWebViewClient(param0: globalAndroid.webkit.WebViewClient): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.webkit.WebView);
							public clearAdObjects(): void;
							public getDelegate(): globalAndroid.webkit.WebViewClient;
							public getDelegateWebViewClient(): globalAndroid.webkit.WebViewClient;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module h5 {
						export class OnH5AdsEventListener {
							public static class: java.lang.Class<com.google.android.gms.ads.h5.OnH5AdsEventListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.h5.OnH5AdsEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onH5AdsEvent(param0: string): void });
							public constructor();
							public onH5AdsEvent(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module initialization {
						export class AdapterStatus {
							public static class: java.lang.Class<com.google.android.gms.ads.initialization.AdapterStatus>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.initialization.AdapterStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getInitializationState(): com.google.android.gms.ads.initialization.AdapterStatus.State; getDescription(): string; getLatency(): number });
							public constructor();
							public getLatency(): number;
							public getInitializationState(): com.google.android.gms.ads.initialization.AdapterStatus.State;
							public getDescription(): string;
						}
						export module AdapterStatus {
							export class State {
								public static class: java.lang.Class<com.google.android.gms.ads.initialization.AdapterStatus.State>;
								public static NOT_READY: com.google.android.gms.ads.initialization.AdapterStatus.State;
								public static READY: com.google.android.gms.ads.initialization.AdapterStatus.State;
								public static values(): native.Array<com.google.android.gms.ads.initialization.AdapterStatus.State>;
								public static valueOf(param0: string): com.google.android.gms.ads.initialization.AdapterStatus.State;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module initialization {
						export class InitializationStatus {
							public static class: java.lang.Class<com.google.android.gms.ads.initialization.InitializationStatus>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.initialization.InitializationStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getAdapterStatusMap(): java.util.Map<string, com.google.android.gms.ads.initialization.AdapterStatus> });
							public constructor();
							public getAdapterStatusMap(): java.util.Map<string, com.google.android.gms.ads.initialization.AdapterStatus>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module initialization {
						export class OnInitializationCompleteListener {
							public static class: java.lang.Class<com.google.android.gms.ads.initialization.OnInitializationCompleteListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.initialization.OnInitializationCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onInitializationComplete(param0: com.google.android.gms.ads.initialization.InitializationStatus): void });
							public constructor();
							public onInitializationComplete(param0: com.google.android.gms.ads.initialization.InitializationStatus): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class ClientApi extends com.google.android.gms.internal.ads.zzbga {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.ClientApi>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module offline {
							export module buffering {
								export class OfflineNotificationPoster {
									public static class: java.lang.Class<com.google.android.gms.ads.internal.offline.buffering.OfflineNotificationPoster>;
									public doWork(): androidx.work.ListenableWorker.Result;
									public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module offline {
							export module buffering {
								export class OfflinePingSender {
									public static class: java.lang.Class<com.google.android.gms.ads.internal.offline.buffering.OfflinePingSender>;
									public doWork(): androidx.work.ListenableWorker.Result;
									public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class AdOverlayInfoParcel {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.AdOverlayInfoParcel>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.internal.overlay.AdOverlayInfoParcel>;
								public constructor(param0: any /* com.google.android.gms.internal.ads.zzbcz*/, param1: any /* com.google.android.gms.ads.internal.overlay.zzo*/, param2: any /* com.google.android.gms.ads.internal.overlay.zzv*/, param3: any /* com.google.android.gms.internal.ads.zzcmr*/, param4: boolean, param5: number, param6: any /* com.google.android.gms.internal.ads.zzcgy*/);
								public constructor(param0: any /* com.google.android.gms.internal.ads.zzbcz*/, param1: any /* com.google.android.gms.ads.internal.overlay.zzo*/, param2: any /* com.google.android.gms.internal.ads.zzbos*/, param3: any /* com.google.android.gms.internal.ads.zzbou*/, param4: any /* com.google.android.gms.ads.internal.overlay.zzv*/, param5: any /* com.google.android.gms.internal.ads.zzcmr*/, param6: boolean, param7: number, param8: string, param9: string, param10: any /* com.google.android.gms.internal.ads.zzcgy*/);
								public constructor(param0: any /* com.google.android.gms.ads.internal.overlay.zzc*/, param1: any /* com.google.android.gms.internal.ads.zzbcz*/, param2: any /* com.google.android.gms.ads.internal.overlay.zzo*/, param3: any /* com.google.android.gms.ads.internal.overlay.zzv*/, param4: any /* com.google.android.gms.internal.ads.zzcgy*/, param5: any /* com.google.android.gms.internal.ads.zzcmr*/);
								public constructor(param0: any /* com.google.android.gms.internal.ads.zzbcz*/, param1: any /* com.google.android.gms.ads.internal.overlay.zzo*/, param2: any /* com.google.android.gms.ads.internal.overlay.zzv*/, param3: any /* com.google.android.gms.internal.ads.zzcmr*/, param4: number, param5: any /* com.google.android.gms.internal.ads.zzcgy*/, param6: string, param7: any /* com.google.android.gms.ads.internal.zzj*/, param8: string, param9: string, param10: string, param11: any /* com.google.android.gms.internal.ads.zzdbq*/);
								public constructor(param0: any /* com.google.android.gms.ads.internal.overlay.zzo*/, param1: any /* com.google.android.gms.internal.ads.zzcmr*/, param2: number, param3: any /* com.google.android.gms.internal.ads.zzcgy*/);
								public constructor(param0: any /* com.google.android.gms.internal.ads.zzcmr*/, param1: any /* com.google.android.gms.internal.ads.zzcgy*/, param2: any /* com.google.android.gms.ads.internal.util.zzbs*/, param3: any /* com.google.android.gms.internal.ads.zzedb*/, param4: any /* com.google.android.gms.internal.ads.zzduu*/, param5: any /* com.google.android.gms.internal.ads.zzfdh*/, param6: string, param7: string, param8: number);
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: any /* com.google.android.gms.internal.ads.zzbcz*/, param1: any /* com.google.android.gms.ads.internal.overlay.zzo*/, param2: any /* com.google.android.gms.internal.ads.zzbos*/, param3: any /* com.google.android.gms.internal.ads.zzbou*/, param4: any /* com.google.android.gms.ads.internal.overlay.zzv*/, param5: any /* com.google.android.gms.internal.ads.zzcmr*/, param6: boolean, param7: number, param8: string, param9: any /* com.google.android.gms.internal.ads.zzcgy*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zza>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzaa extends com.google.android.gms.ads.internal.overlay.zzl {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzaa>;
								public constructor(param0: globalAndroid.app.Activity);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzab extends com.google.android.gms.ads.internal.overlay.zzl {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzab>;
								public constructor(param0: globalAndroid.app.Activity);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzb extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.internal.overlay.zzc>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzb>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzc {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzc>;
								public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.internal.overlay.zzc>*/;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: globalAndroid.content.Intent, param8: globalAndroid.os.IBinder, param9: boolean);
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: any /* com.google.android.gms.ads.internal.overlay.zzt*/);
								public constructor(param0: globalAndroid.content.Intent, param1: any /* com.google.android.gms.ads.internal.overlay.zzt*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzd extends com.google.android.gms.internal.ads.zzcod {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzd>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zze {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zze>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzf {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzf>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzg {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzg>;
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzh {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzh>;
								public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
								public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzi {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzi>;
								public constructor(param0: any /* com.google.android.gms.internal.ads.zzcmr*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzj {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzj>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzk extends com.google.android.gms.ads.internal.util.zzb {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzk>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzl extends com.google.android.gms.internal.ads.zzbzq implements com.google.android.gms.ads.internal.overlay.zzz {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzl>;
								public constructor(param0: globalAndroid.app.Activity);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzm {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzm>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzn extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.internal.overlay.AdOverlayInfoParcel> {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzn>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzo {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzo>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.internal.overlay.zzo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zzbJ(): void; zzca(): void; zzbE(): void; zzbH(): void; zzbI(): void; zzbK(param0: number): void });
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzp {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzp>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzq {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzq>;
								public onClick(param0: globalAndroid.view.View): void;
								public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.ads.internal.overlay.zzp*/, param2: any /* com.google.android.gms.ads.internal.overlay.zzz*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzr extends com.google.android.gms.ads.internal.overlay.zzl {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzr>;
								public constructor(param0: globalAndroid.app.Activity);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzs extends com.google.android.gms.ads.internal.overlay.zzl {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzs>;
								public constructor(param0: globalAndroid.app.Activity);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzt {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzt>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.internal.overlay.zzt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zza(param0: boolean): void; zzb(param0: number): void });
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzu extends com.google.android.gms.internal.ads.zzbzq {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzu>;
								public constructor();
								public constructor(param0: string);
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.internal.overlay.AdOverlayInfoParcel);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzv {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzv>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.internal.overlay.zzv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zzg(): void });
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzw {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzw>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzx {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzx>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzy extends com.google.android.gms.ads.internal.overlay.zzl {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzy>;
								public constructor(param0: globalAndroid.app.Activity);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module overlay {
							export class zzz {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.overlay.zzz>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.internal.overlay.zzz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zzd(): void });
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class WorkManagerUtil extends com.google.android.gms.ads.internal.util.zzbr {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.WorkManagerUtil>;
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zza>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzaa {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzaa>;
								public onApplyWindowInsets(param0: globalAndroid.view.View, param1: globalAndroid.view.WindowInsets): globalAndroid.view.WindowInsets;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzab extends com.google.android.gms.ads.internal.util.zzz {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzab>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzac {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzac>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzad {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzad>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzae {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzae>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzaf {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzaf>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzag {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzag>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzah {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzah>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzai {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzai>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzaj {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzaj>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzak {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzak>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzal {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzal>;
								public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzam {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzam>;
								public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzan {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzan>;
								public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzao {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzao>;
								public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzap {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzap>;
								public onCancel(param0: globalAndroid.content.DialogInterface): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzaq {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzaq>;
								public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzar {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzar>;
								public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzas {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzas>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzat {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzat>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzau {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzau>;
								public toString(): string;
								public constructor(param0: globalAndroid.content.Context, param1: string);
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzav extends com.google.android.gms.internal.ads.zzbgt {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzav>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzaw {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzaw>;
								public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzax {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzax>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzay {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzay>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzaz extends com.google.android.gms.internal.ads.zzar {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzaz>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export abstract class zzb {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzb>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzba {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzba>;
								public constructor(param0: string, param1: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbb {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbb>;
								public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.internal.util.zzbb>*/;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbc extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.internal.util.zzbb>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbc>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbd<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbd>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.internal.util.zzbd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbe {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbe>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbf {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbf>;
								public toString(): string;
								public constructor(param0: string, param1: number, param2: number, param3: number, param4: number);
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbg {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbg>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbh {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbh>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbi extends com.google.android.gms.ads.internal.util.zzbl<java.lang.Void> {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbi>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbj extends com.google.android.gms.internal.ads.zzag {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbj>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbk extends com.google.android.gms.internal.ads.zzbh {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbk>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbl<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbl>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.internal.util.zzbl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbm<T> extends java.lang.Object /* com.google.android.gms.internal.ads.zzchj<any>*/ implements any /* com.google.android.gms.internal.ads.zzah<any>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbm>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbn extends com.google.android.gms.internal.ads.zzag {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbn>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbo extends java.lang.Object /* com.google.android.gms.internal.ads.zzac<com.google.android.gms.internal.ads.zzy>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbo>;
								public constructor(param0: string, param1: java.util.Map<string, string>, param2: any /* com.google.android.gms.internal.ads.zzchj<com.google.android.gms.internal.ads.zzy>*/);
								public constructor(param0: number, param1: string, param2: any /* com.google.android.gms.internal.ads.zzag*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbp {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbp>;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbq extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.ads.internal.util.zzbs {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbq>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export abstract class zzbr extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.ads.internal.util.zzbs {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbr>;
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbs {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.internal.util.zzbs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zze(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: string): boolean; zzf(param0: com.google.android.gms.dynamic.IObjectWrapper): void });
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbt extends com.google.android.gms.ads.internal.util.zzbu<java.util.Map<string, any>> {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbt>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbu<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbu>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.internal.util.zzbu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbv {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbv>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbw {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbw>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbx {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbx>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzby {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzby>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzbz extends com.google.android.gms.ads.internal.util.zzb {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzbz>;
								public constructor();
								public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzc extends com.google.android.gms.ads.internal.util.zzb {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzc>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzca {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzca>;
								public constructor(param0: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzcb<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzcb>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzcc {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzcc>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzcd extends java.util.concurrent.Callable<string> {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzcd>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzce extends java.util.concurrent.Callable<string> {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzce>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzcf {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzcf>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzcg {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzcg>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzch {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzch>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzci {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzci>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzcj {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzcj>;
								public constructor(param0: globalAndroid.app.Activity, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener, param3: globalAndroid.view.ViewTreeObserver.OnScrollChangedListener);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzd {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzd>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zze extends com.google.android.gms.internal.ads.zzcgs {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zze>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzf extends com.google.android.gms.internal.ads.zzfjj {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzf>;
								public handleMessage(param0: globalAndroid.os.Message): void;
								public constructor();
								public constructor(param0: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzg {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzg>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.internal.util.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: globalAndroid.content.Context): void;
									zzb(): any /* com.google.android.gms.internal.ads.zzawy*/;
									zzc(param0: boolean): void;
									zzd(): boolean;
									zze(param0: string): void;
									zzf(): string;
									zzg(param0: boolean): void;
									zzh(): boolean;
									zzi(param0: string): void;
									zzj(): string;
									zzk(param0: number): void;
									zzl(): number;
									zzm(param0: string): void;
									zzn(): any /* com.google.android.gms.internal.ads.zzcfz*/;
									zzo(): any /* com.google.android.gms.internal.ads.zzcfz*/;
									zzp(param0: java.lang.Runnable): void;
									zzq(param0: number): void;
									zzr(): number;
									zzs(param0: number): void;
									zzt(): number;
									zzu(param0: number): void;
									zzv(): number;
									zzw(param0: string, param1: string, param2: boolean): void;
									zzx(): org.json.JSONObject;
									zzy(): void;
									zzz(): string;
									zzA(param0: string): void;
									zzB(param0: boolean): void;
									zzC(): boolean;
									zzD(param0: number): void;
									zzE(): number;
									zzF(param0: number): void;
									zzG(): string;
									zzH(param0: string): void;
									zzI(): boolean;
									zzJ(param0: boolean): void;
									zzK(): string;
									zzL(param0: string): void;
								});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzh {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzh>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzi {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzi>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzj extends com.google.android.gms.ads.internal.util.zzg {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzj>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzk {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzk>;
								public call(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzl extends com.google.android.gms.internal.ads.zzbkj {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzl>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzm {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzm>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzn extends com.google.android.gms.internal.ads.zzcgk {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzn>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzo {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzo>;
								public onAvailable(param0: globalAndroid.net.Network): void;
								public onLost(param0: globalAndroid.net.Network): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzp {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzp>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzq {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzq>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzr {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzr>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzs {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzs>;
								public call(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzt {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzt>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzu extends com.google.android.gms.ads.internal.util.zzac {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzu>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzv extends com.google.android.gms.ads.internal.util.zzu {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzv>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzw extends com.google.android.gms.ads.internal.util.zzv {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzw>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzx extends com.google.android.gms.ads.internal.util.zzw {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzx>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzy extends com.google.android.gms.ads.internal.util.zzx {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzy>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export module util {
							export class zzz extends com.google.android.gms.ads.internal.util.zzy {
								public static class: java.lang.Class<com.google.android.gms.ads.internal.util.zzz>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zza>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzckk*/, param1: any /* com.google.android.gms.internal.ads.zzcih*/, param2: any /* com.google.android.gms.internal.ads.zzcdu*/, param3: any /* com.google.android.gms.internal.ads.zzazd*/, param4: any /* com.google.android.gms.internal.ads.zzbzw*/, param5: any /* com.google.android.gms.internal.ads.zzbko*/, param6: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzb>;
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.ads.zzcdz*/, param2: any /* com.google.android.gms.internal.ads.zzcay*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export abstract class zzc<T> extends com.google.android.gms.common.internal.BaseGmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzc>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzd extends com.google.android.gms.internal.ads.zzfpl {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zze>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzf {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.internal.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: globalAndroid.view.View): void; zzb(): void; zzc(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzg>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzh extends com.google.android.gms.internal.ads.zzfhu {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzi extends com.google.android.gms.internal.ads.zzex {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzi>;
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.ads.zzcgy*/);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzj {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzj>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.internal.zzj>*/;
							public constructor(param0: boolean, param1: boolean, param2: boolean, param3: number, param4: number, param5: boolean, param6: boolean, param7: boolean);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzk extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.ads.internal.zzj>*/ {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzk>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzl {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.internal.zzl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzbB(): void; zzbC(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzm {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzm>;
							public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
							public onReceivedError(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest, param2: globalAndroid.webkit.WebResourceError): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzn {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzn>;
							public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzo extends java.lang.Object /* java.util.concurrent.Callable<com.google.android.gms.internal.ads.zzfb>*/ {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzp extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, string> {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzq {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzq>;
							public constructor(param0: globalAndroid.content.Context, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzr extends com.google.android.gms.internal.ads.zzbfq {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzr>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.ads.zzbdp*/, param2: string, param3: any /* com.google.android.gms.internal.ads.zzcgy*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module internal {
						export class zzs {
							public static class: java.lang.Class<com.google.android.gms.ads.internal.zzs>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module interstitial {
						export abstract class InterstitialAd {
							public static class: java.lang.Class<com.google.android.gms.ads.interstitial.InterstitialAd>;
							public constructor();
							public getAdUnitId(): string;
							public setImmersiveMode(param0: boolean): void;
							public getResponseInfo(): com.google.android.gms.ads.ResponseInfo;
							public setFullScreenContentCallback(param0: com.google.android.gms.ads.FullScreenContentCallback): void;
							public getFullScreenContentCallback(): com.google.android.gms.ads.FullScreenContentCallback;
							public static load(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.ads.AdRequest, param3: com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback): void;
							public show(param0: globalAndroid.app.Activity): void;
							public getOnPaidEventListener(): com.google.android.gms.ads.OnPaidEventListener;
							public setOnPaidEventListener(param0: com.google.android.gms.ads.OnPaidEventListener): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module interstitial {
						export abstract class InterstitialAdLoadCallback extends com.google.android.gms.ads.AdLoadCallback<com.google.android.gms.ads.interstitial.InterstitialAd> {
							public static class: java.lang.Class<com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export abstract class Adapter extends com.google.android.gms.ads.mediation.MediationExtrasReceiver {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.Adapter>;
							public constructor();
							public loadBannerAd(param0: com.google.android.gms.ads.mediation.MediationBannerAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.MediationBannerAd, com.google.android.gms.ads.mediation.MediationBannerAdCallback>): void;
							public loadRewardedInterstitialAd(param0: com.google.android.gms.ads.mediation.MediationRewardedAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.MediationRewardedAd, com.google.android.gms.ads.mediation.MediationRewardedAdCallback>): void;
							public loadRewardedAd(param0: com.google.android.gms.ads.mediation.MediationRewardedAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.MediationRewardedAd, com.google.android.gms.ads.mediation.MediationRewardedAdCallback>): void;
							public loadInterscrollerAd(param0: com.google.android.gms.ads.mediation.MediationBannerAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.MediationInterscrollerAd, com.google.android.gms.ads.mediation.MediationBannerAdCallback>): void;
							public initialize(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.InitializationCompleteCallback, param2: java.util.List<com.google.android.gms.ads.mediation.MediationConfiguration>): void;
							public loadInterstitialAd(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.MediationInterstitialAd, com.google.android.gms.ads.mediation.MediationInterstitialAdCallback>): void;
							public getSDKVersionInfo(): com.google.android.gms.ads.mediation.VersionInfo;
							public loadNativeAd(param0: com.google.android.gms.ads.mediation.MediationNativeAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.UnifiedNativeAdMapper, com.google.android.gms.ads.mediation.MediationNativeAdCallback>): void;
							public getVersionInfo(): com.google.android.gms.ads.mediation.VersionInfo;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class InitializationCompleteCallback {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.InitializationCompleteCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.InitializationCompleteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onInitializationSucceeded(): void; onInitializationFailed(param0: string): void });
							public constructor();
							public onInitializationSucceeded(): void;
							public onInitializationFailed(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationAdCallback {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationAdCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationAdCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { reportAdClicked(): void; reportAdImpression(): void; onAdOpened(): void; onAdClosed(): void });
							public constructor();
							public onAdOpened(): void;
							public reportAdClicked(): void;
							public onAdClosed(): void;
							public reportAdImpression(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationAdConfiguration {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationAdConfiguration>;
							public static TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE: number;
							public static TAG_FOR_CHILD_DIRECTED_TREATMENT_FALSE: number;
							public static TAG_FOR_CHILD_DIRECTED_TREATMENT_UNSPECIFIED: number;
							public getLocation(): globalAndroid.location.Location;
							public getContext(): globalAndroid.content.Context;
							public getServerParameters(): globalAndroid.os.Bundle;
							public getMaxAdContentRating(): string;
							public getWatermark(): string;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.Bundle, param4: boolean, param5: globalAndroid.location.Location, param6: number, param7: number, param8: string, param9: string);
							public taggedForChildDirectedTreatment(): number;
							public taggedForUnderAgeTreatment(): number;
							public isTestRequest(): boolean;
							public getMediationExtras(): globalAndroid.os.Bundle;
							public getBidResponse(): string;
						}
						export module MediationAdConfiguration {
							export class TagForChildDirectedTreatment {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationAdConfiguration.TagForChildDirectedTreatment>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationAdConfiguration$TagForChildDirectedTreatment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationAdLoadCallback<MediationAdT, MediationAdCallbackT> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationAdLoadCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationAdLoadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onSuccess(param0: MediationAdT): MediationAdCallbackT; onFailure(param0: string): void; onFailure(param0: com.google.android.gms.ads.AdError): void });
							public constructor();
							public onFailure(param0: com.google.android.gms.ads.AdError): void;
							/** @deprecated */
							public onFailure(param0: string): void;
							public onSuccess(param0: MediationAdT): MediationAdCallbackT;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationAdRequest {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationAdRequest>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationAdRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getBirthday(): java.util.Date; getGender(): number; getKeywords(): java.util.Set<string>; getLocation(): globalAndroid.location.Location; taggedForChildDirectedTreatment(): number; isTesting(): boolean; isDesignedForFamilies(): boolean });
							public constructor();
							public static TAG_FOR_CHILD_DIRECTED_TREATMENT_FALSE: number;
							public static TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE: number;
							public static TAG_FOR_CHILD_DIRECTED_TREATMENT_UNSPECIFIED: number;
							public getLocation(): globalAndroid.location.Location;
							public getKeywords(): java.util.Set<string>;
							/** @deprecated */
							public isDesignedForFamilies(): boolean;
							public isTesting(): boolean;
							/** @deprecated */
							public getBirthday(): java.util.Date;
							/** @deprecated */
							public getGender(): number;
							public taggedForChildDirectedTreatment(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationAdapter extends com.google.android.gms.ads.mediation.MediationExtrasReceiver {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationAdapter>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onDestroy(): void; onPause(): void; onResume(): void });
							public constructor();
							public onPause(): void;
							public onDestroy(): void;
							public onResume(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationBannerAd {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationBannerAd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationBannerAd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getView(): globalAndroid.view.View });
							public constructor();
							public getView(): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationBannerAdCallback extends com.google.android.gms.ads.mediation.MediationAdCallback {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationBannerAdCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationBannerAdCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAdLeftApplication(): void; reportAdClicked(): void; reportAdImpression(): void; onAdOpened(): void; onAdClosed(): void });
							public constructor();
							public onAdOpened(): void;
							public reportAdClicked(): void;
							public onAdClosed(): void;
							public reportAdImpression(): void;
							public onAdLeftApplication(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationBannerAdConfiguration extends com.google.android.gms.ads.mediation.MediationAdConfiguration {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationBannerAdConfiguration>;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.Bundle, param4: boolean, param5: globalAndroid.location.Location, param6: number, param7: number, param8: string, param9: com.google.android.gms.ads.AdSize, param10: string);
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.Bundle, param4: boolean, param5: globalAndroid.location.Location, param6: number, param7: number, param8: string, param9: string);
							public getAdSize(): com.google.android.gms.ads.AdSize;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationBannerAdapter extends com.google.android.gms.ads.mediation.MediationAdapter {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationBannerAdapter>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationBannerAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { requestBannerAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationBannerListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.AdSize, param4: com.google.android.gms.ads.mediation.MediationAdRequest, param5: globalAndroid.os.Bundle): void; getBannerView(): globalAndroid.view.View; onDestroy(): void; onPause(): void; onResume(): void });
							public constructor();
							public getBannerView(): globalAndroid.view.View;
							public onPause(): void;
							public onDestroy(): void;
							public requestBannerAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationBannerListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.AdSize, param4: com.google.android.gms.ads.mediation.MediationAdRequest, param5: globalAndroid.os.Bundle): void;
							public onResume(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationBannerListener {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationBannerListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationBannerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAdLoaded(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter): void;
								onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter, param1: number): void;
								onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter, param1: com.google.android.gms.ads.AdError): void;
								onAdOpened(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter): void;
								onAdClosed(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter): void;
								onAdLeftApplication(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter): void;
								onAdClicked(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter): void;
								zza(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter, param1: string, param2: string): void;
							});
							public constructor();
							public onAdClosed(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter): void;
							/** @deprecated */
							public onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter, param1: number): void;
							public onAdOpened(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter): void;
							public onAdClicked(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter): void;
							public onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter, param1: com.google.android.gms.ads.AdError): void;
							public onAdLeftApplication(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter): void;
							public onAdLoaded(param0: com.google.android.gms.ads.mediation.MediationBannerAdapter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationConfiguration {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationConfiguration>;
							public getServerParameters(): globalAndroid.os.Bundle;
							public getFormat(): com.google.android.gms.ads.AdFormat;
							public constructor(param0: com.google.android.gms.ads.AdFormat, param1: globalAndroid.os.Bundle);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationExtrasReceiver {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationExtrasReceiver>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationExtrasReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationInterscrollerAd extends com.google.android.gms.ads.mediation.MediationBannerAd {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationInterscrollerAd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationInterscrollerAd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { shouldDelegateInterscrollerEffect(): boolean; getView(): globalAndroid.view.View });
							public constructor();
							public shouldDelegateInterscrollerEffect(): boolean;
							public getView(): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationInterstitialAd {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationInterstitialAd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationInterstitialAd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { showAd(param0: globalAndroid.content.Context): void });
							public constructor();
							public showAd(param0: globalAndroid.content.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationInterstitialAdCallback extends com.google.android.gms.ads.mediation.MediationAdCallback {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationInterstitialAdCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationInterstitialAdCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAdLeftApplication(): void; onAdFailedToShow(param0: string): void; onAdFailedToShow(param0: com.google.android.gms.ads.AdError): void; reportAdClicked(): void; reportAdImpression(): void; onAdOpened(): void; onAdClosed(): void });
							public constructor();
							public onAdOpened(): void;
							public reportAdClicked(): void;
							public onAdFailedToShow(param0: com.google.android.gms.ads.AdError): void;
							public onAdClosed(): void;
							/** @deprecated */
							public onAdFailedToShow(param0: string): void;
							public reportAdImpression(): void;
							public onAdLeftApplication(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationInterstitialAdConfiguration extends com.google.android.gms.ads.mediation.MediationAdConfiguration {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationInterstitialAdConfiguration>;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.Bundle, param4: boolean, param5: globalAndroid.location.Location, param6: number, param7: number, param8: string, param9: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationInterstitialAdapter extends com.google.android.gms.ads.mediation.MediationAdapter {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationInterstitialAdapter>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationInterstitialAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { requestInterstitialAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationInterstitialListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.MediationAdRequest, param4: globalAndroid.os.Bundle): void; showInterstitial(): void; onDestroy(): void; onPause(): void; onResume(): void });
							public constructor();
							public requestInterstitialAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationInterstitialListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.MediationAdRequest, param4: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public showInterstitial(): void;
							public onDestroy(): void;
							public onResume(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationInterstitialListener {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationInterstitialListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationInterstitialListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAdLoaded(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter): void;
								onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter, param1: number): void;
								onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter, param1: com.google.android.gms.ads.AdError): void;
								onAdOpened(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter): void;
								onAdClosed(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter): void;
								onAdLeftApplication(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter): void;
								onAdClicked(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter): void;
							});
							public constructor();
							public onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter, param1: com.google.android.gms.ads.AdError): void;
							public onAdLeftApplication(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter): void;
							public onAdLoaded(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter): void;
							public onAdOpened(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter): void;
							/** @deprecated */
							public onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter, param1: number): void;
							public onAdClosed(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter): void;
							public onAdClicked(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdapter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationNativeAdCallback extends com.google.android.gms.ads.mediation.MediationAdCallback {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationNativeAdCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationNativeAdCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAdLeftApplication(): void; onVideoPause(): void; onVideoPlay(): void; onVideoComplete(): void; onVideoMute(): void; onVideoUnmute(): void; reportAdClicked(): void; reportAdImpression(): void; onAdOpened(): void; onAdClosed(): void });
							public constructor();
							public onAdOpened(): void;
							public onVideoPlay(): void;
							public reportAdClicked(): void;
							public onVideoPause(): void;
							public onVideoMute(): void;
							public onVideoUnmute(): void;
							public onAdClosed(): void;
							public reportAdImpression(): void;
							public onAdLeftApplication(): void;
							public onVideoComplete(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationNativeAdConfiguration extends com.google.android.gms.ads.mediation.MediationAdConfiguration {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationNativeAdConfiguration>;
							public getNativeAdOptions(): com.google.android.gms.ads.nativead.NativeAdOptions;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.Bundle, param4: boolean, param5: globalAndroid.location.Location, param6: number, param7: number, param8: string, param9: string);
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.Bundle, param4: boolean, param5: globalAndroid.location.Location, param6: number, param7: number, param8: string, param9: string, param10: any /* com.google.android.gms.internal.ads.zzblw*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationNativeAdapter extends com.google.android.gms.ads.mediation.MediationAdapter {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationNativeAdapter>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationNativeAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { requestNativeAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationNativeListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.NativeMediationAdRequest, param4: globalAndroid.os.Bundle): void; onDestroy(): void; onPause(): void; onResume(): void });
							public constructor();
							public onPause(): void;
							public requestNativeAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationNativeListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.NativeMediationAdRequest, param4: globalAndroid.os.Bundle): void;
							public onDestroy(): void;
							public onResume(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationNativeListener {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationNativeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationNativeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAdLoaded(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter, param1: com.google.android.gms.ads.mediation.UnifiedNativeAdMapper): void;
								onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter, param1: number): void;
								onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter, param1: com.google.android.gms.ads.AdError): void;
								onAdOpened(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
								onAdClosed(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
								onAdLeftApplication(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
								onAdClicked(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
								onAdImpression(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
								onVideoEnd(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
								zzb(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter, param1: com.google.android.gms.ads.formats.NativeCustomTemplateAd): void;
								zzc(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter, param1: com.google.android.gms.ads.formats.NativeCustomTemplateAd, param2: string): void;
							});
							public constructor();
							/** @deprecated */
							public onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter, param1: number): void;
							public onAdFailedToLoad(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter, param1: com.google.android.gms.ads.AdError): void;
							public onAdLeftApplication(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
							public onAdClosed(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
							public onAdImpression(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
							public onAdLoaded(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter, param1: com.google.android.gms.ads.mediation.UnifiedNativeAdMapper): void;
							public onVideoEnd(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
							public onAdClicked(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
							public onAdOpened(param0: com.google.android.gms.ads.mediation.MediationNativeAdapter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationRewardedAd {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationRewardedAd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationRewardedAd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { showAd(param0: globalAndroid.content.Context): void });
							public constructor();
							public showAd(param0: globalAndroid.content.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationRewardedAdCallback extends com.google.android.gms.ads.mediation.MediationAdCallback {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationRewardedAdCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.MediationRewardedAdCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onUserEarnedReward(param0: com.google.android.gms.ads.rewarded.RewardItem): void; onVideoStart(): void; onVideoComplete(): void; onAdFailedToShow(param0: string): void; onAdFailedToShow(param0: com.google.android.gms.ads.AdError): void; reportAdClicked(): void; reportAdImpression(): void; onAdOpened(): void; onAdClosed(): void });
							public constructor();
							public onAdOpened(): void;
							public reportAdClicked(): void;
							public onVideoStart(): void;
							public onAdFailedToShow(param0: com.google.android.gms.ads.AdError): void;
							public onUserEarnedReward(param0: com.google.android.gms.ads.rewarded.RewardItem): void;
							public onAdClosed(): void;
							/** @deprecated */
							public onAdFailedToShow(param0: string): void;
							public reportAdImpression(): void;
							public onVideoComplete(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class MediationRewardedAdConfiguration extends com.google.android.gms.ads.mediation.MediationAdConfiguration {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.MediationRewardedAdConfiguration>;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.Bundle, param4: boolean, param5: globalAndroid.location.Location, param6: number, param7: number, param8: string, param9: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class NativeMediationAdRequest extends com.google.android.gms.ads.mediation.MediationAdRequest {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.NativeMediationAdRequest>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.NativeMediationAdRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getNativeAdOptions(): com.google.android.gms.ads.formats.NativeAdOptions; getNativeAdRequestOptions(): com.google.android.gms.ads.nativead.NativeAdOptions; isUnifiedNativeAdRequested(): boolean; isAdMuted(): boolean; getAdVolume(): number; zza(): boolean; zzb(): java.util.Map<string, java.lang.Boolean>; getBirthday(): java.util.Date; getGender(): number; getKeywords(): java.util.Set<string>; getLocation(): globalAndroid.location.Location; taggedForChildDirectedTreatment(): number; isTesting(): boolean; isDesignedForFamilies(): boolean });
							public constructor();
							public static TAG_FOR_CHILD_DIRECTED_TREATMENT_FALSE: number;
							public static TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE: number;
							public static TAG_FOR_CHILD_DIRECTED_TREATMENT_UNSPECIFIED: number;
							public getLocation(): globalAndroid.location.Location;
							public getKeywords(): java.util.Set<string>;
							/** @deprecated */
							public isDesignedForFamilies(): boolean;
							public isTesting(): boolean;
							public getAdVolume(): number;
							/** @deprecated */
							public getBirthday(): java.util.Date;
							public isAdMuted(): boolean;
							/** @deprecated */
							public getGender(): number;
							public taggedForChildDirectedTreatment(): number;
							public getNativeAdRequestOptions(): com.google.android.gms.ads.nativead.NativeAdOptions;
							public isUnifiedNativeAdRequested(): boolean;
							/** @deprecated */
							public getNativeAdOptions(): com.google.android.gms.ads.formats.NativeAdOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class NetworkExtras {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.NetworkExtras>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.NetworkExtras interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class OnContextChangedListener {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.OnContextChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.OnContextChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onContextChanged(param0: globalAndroid.content.Context): void });
							public constructor();
							public onContextChanged(param0: globalAndroid.content.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class OnImmersiveModeUpdatedListener {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.OnImmersiveModeUpdatedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.OnImmersiveModeUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onImmersiveModeUpdated(param0: boolean): void });
							public constructor();
							public onImmersiveModeUpdated(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export abstract class UnifiedNativeAdMapper {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.UnifiedNativeAdMapper>;
							public setCallToAction(param0: string): void;
							public setMediaContentAspectRatio(param0: number): void;
							public getHeadline(): string;
							public setAdvertiser(param0: string): void;
							public getPrice(): string;
							public setHeadline(param0: string): void;
							public setOverrideClickHandling(param0: boolean): void;
							public getExtras(): globalAndroid.os.Bundle;
							public getOverrideClickHandling(): boolean;
							public getMediaContentAspectRatio(): number;
							public trackViews(param0: globalAndroid.view.View, param1: java.util.Map<string, globalAndroid.view.View>, param2: java.util.Map<string, globalAndroid.view.View>): void;
							public setImages(param0: java.util.List<com.google.android.gms.ads.formats.NativeAd.Image>): void;
							public getAdChoicesContent(): globalAndroid.view.View;
							public getOverrideImpressionRecording(): boolean;
							public setBody(param0: string): void;
							public setStore(param0: string): void;
							public getImages(): java.util.List<com.google.android.gms.ads.formats.NativeAd.Image>;
							public handleClick(param0: globalAndroid.view.View): void;
							public untrackView(param0: globalAndroid.view.View): void;
							public setMediaView(param0: globalAndroid.view.View): void;
							public getDuration(): number;
							public setStarRating(param0: java.lang.Double): void;
							public setAdChoicesContent(param0: globalAndroid.view.View): void;
							public getBody(): string;
							public getIcon(): com.google.android.gms.ads.formats.NativeAd.Image;
							public constructor();
							public setIcon(param0: com.google.android.gms.ads.formats.NativeAd.Image): void;
							public hasVideoContent(): boolean;
							public setHasVideoContent(param0: boolean): void;
							public setOverrideImpressionRecording(param0: boolean): void;
							public getAdvertiser(): string;
							public setExtras(param0: globalAndroid.os.Bundle): void;
							public setPrice(param0: string): void;
							public getCallToAction(): string;
							public recordImpression(): void;
							public getCurrentTime(): number;
							public getStarRating(): java.lang.Double;
							public getStore(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class VersionInfo {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.VersionInfo>;
							public constructor(param0: number, param1: number, param2: number);
							public getMajorVersion(): number;
							public getMicroVersion(): number;
							public getMinorVersion(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module admob {
							export class AdMobExtras extends com.google.ads.mediation.NetworkExtras {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.admob.AdMobExtras>;
								public getExtras(): globalAndroid.os.Bundle;
								public constructor(param0: globalAndroid.os.Bundle);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class CustomEvent {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEvent>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.mediation.customevent.CustomEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onDestroy(): void; onPause(): void; onResume(): void });
								public constructor();
								public onPause(): void;
								public onResume(): void;
								public onDestroy(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class CustomEventAdapter implements com.google.android.gms.ads.mediation.MediationBannerAdapter, com.google.android.gms.ads.mediation.MediationInterstitialAdapter, com.google.android.gms.ads.mediation.MediationNativeAdapter {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEventAdapter>;
								public onPause(): void;
								public getBannerView(): globalAndroid.view.View;
								public requestNativeAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationNativeListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.NativeMediationAdRequest, param4: globalAndroid.os.Bundle): void;
								public requestBannerAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationBannerListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.AdSize, param4: com.google.android.gms.ads.mediation.MediationAdRequest, param5: globalAndroid.os.Bundle): void;
								public onResume(): void;
								public requestInterstitialAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.MediationInterstitialListener, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.mediation.MediationAdRequest, param4: globalAndroid.os.Bundle): void;
								public constructor();
								public onDestroy(): void;
								public showInterstitial(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class CustomEventBanner extends com.google.android.gms.ads.mediation.customevent.CustomEvent {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEventBanner>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.mediation.customevent.CustomEventBanner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { requestBannerAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.customevent.CustomEventBannerListener, param2: string, param3: com.google.android.gms.ads.AdSize, param4: com.google.android.gms.ads.mediation.MediationAdRequest, param5: globalAndroid.os.Bundle): void; onDestroy(): void; onPause(): void; onResume(): void });
								public constructor();
								public onPause(): void;
								public onResume(): void;
								public requestBannerAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.customevent.CustomEventBannerListener, param2: string, param3: com.google.android.gms.ads.AdSize, param4: com.google.android.gms.ads.mediation.MediationAdRequest, param5: globalAndroid.os.Bundle): void;
								public onDestroy(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class CustomEventBannerListener extends com.google.android.gms.ads.mediation.customevent.CustomEventListener {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEventBannerListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.mediation.customevent.CustomEventBannerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onAdLoaded(param0: globalAndroid.view.View): void; onAdFailedToLoad(param0: number): void; onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void; onAdOpened(): void; onAdClicked(): void; onAdClosed(): void; onAdLeftApplication(): void });
								public constructor();
								public onAdClosed(): void;
								public onAdClicked(): void;
								public onAdLeftApplication(): void;
								public onAdLoaded(param0: globalAndroid.view.View): void;
								public onAdOpened(): void;
								public onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void;
								/** @deprecated */
								public onAdFailedToLoad(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class CustomEventExtras extends com.google.ads.mediation.NetworkExtras {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEventExtras>;
								public setExtra(param0: string, param1: any): void;
								public getExtra(param0: string): any;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class CustomEventInterstitial extends com.google.android.gms.ads.mediation.customevent.CustomEvent {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEventInterstitial>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.mediation.customevent.CustomEventInterstitial interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { requestInterstitialAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.customevent.CustomEventInterstitialListener, param2: string, param3: com.google.android.gms.ads.mediation.MediationAdRequest, param4: globalAndroid.os.Bundle): void; showInterstitial(): void; onDestroy(): void; onPause(): void; onResume(): void });
								public constructor();
								public onPause(): void;
								public requestInterstitialAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.customevent.CustomEventInterstitialListener, param2: string, param3: com.google.android.gms.ads.mediation.MediationAdRequest, param4: globalAndroid.os.Bundle): void;
								public onResume(): void;
								public onDestroy(): void;
								public showInterstitial(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class CustomEventInterstitialListener extends com.google.android.gms.ads.mediation.customevent.CustomEventListener {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEventInterstitialListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.mediation.customevent.CustomEventInterstitialListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onAdLoaded(): void; onAdFailedToLoad(param0: number): void; onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void; onAdOpened(): void; onAdClicked(): void; onAdClosed(): void; onAdLeftApplication(): void });
								public constructor();
								public onAdClosed(): void;
								public onAdClicked(): void;
								public onAdLeftApplication(): void;
								public onAdLoaded(): void;
								public onAdOpened(): void;
								public onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void;
								/** @deprecated */
								public onAdFailedToLoad(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class CustomEventListener {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEventListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.mediation.customevent.CustomEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onAdFailedToLoad(param0: number): void; onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void; onAdOpened(): void; onAdClicked(): void; onAdClosed(): void; onAdLeftApplication(): void });
								public constructor();
								public onAdClosed(): void;
								public onAdClicked(): void;
								public onAdLeftApplication(): void;
								public onAdOpened(): void;
								public onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void;
								/** @deprecated */
								public onAdFailedToLoad(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class CustomEventNative extends com.google.android.gms.ads.mediation.customevent.CustomEvent {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEventNative>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.mediation.customevent.CustomEventNative interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { requestNativeAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.customevent.CustomEventNativeListener, param2: string, param3: com.google.android.gms.ads.mediation.NativeMediationAdRequest, param4: globalAndroid.os.Bundle): void; onDestroy(): void; onPause(): void; onResume(): void });
								public constructor();
								public onPause(): void;
								public requestNativeAd(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.mediation.customevent.CustomEventNativeListener, param2: string, param3: com.google.android.gms.ads.mediation.NativeMediationAdRequest, param4: globalAndroid.os.Bundle): void;
								public onResume(): void;
								public onDestroy(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class CustomEventNativeListener extends com.google.android.gms.ads.mediation.customevent.CustomEventListener {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.CustomEventNativeListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.mediation.customevent.CustomEventNativeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onAdLoaded(param0: com.google.android.gms.ads.mediation.UnifiedNativeAdMapper): void; onAdImpression(): void; onAdFailedToLoad(param0: number): void; onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void; onAdOpened(): void; onAdClicked(): void; onAdClosed(): void; onAdLeftApplication(): void });
								public constructor();
								public onAdImpression(): void;
								public onAdClosed(): void;
								public onAdClicked(): void;
								public onAdLeftApplication(): void;
								public onAdLoaded(param0: com.google.android.gms.ads.mediation.UnifiedNativeAdMapper): void;
								public onAdOpened(): void;
								public onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void;
								/** @deprecated */
								public onAdFailedToLoad(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class zza extends com.google.android.gms.ads.mediation.customevent.CustomEventBannerListener {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.zza>;
								public onAdFailedToLoad(param0: number): void;
								public onAdClosed(): void;
								public onAdClicked(): void;
								public onAdLeftApplication(): void;
								public onAdLoaded(param0: globalAndroid.view.View): void;
								public onAdOpened(): void;
								public onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void;
								public constructor(param0: com.google.android.gms.ads.mediation.customevent.CustomEventAdapter, param1: com.google.android.gms.ads.mediation.MediationBannerListener);
								/** @deprecated */
								public onAdFailedToLoad(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class zzb extends com.google.android.gms.ads.mediation.customevent.CustomEventInterstitialListener {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.zzb>;
								public onAdFailedToLoad(param0: number): void;
								public onAdClosed(): void;
								public onAdClicked(): void;
								public onAdLeftApplication(): void;
								public onAdLoaded(): void;
								public onAdOpened(): void;
								public onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void;
								public constructor(param0: com.google.android.gms.ads.mediation.customevent.CustomEventAdapter, param1: com.google.android.gms.ads.mediation.customevent.CustomEventAdapter, param2: com.google.android.gms.ads.mediation.MediationInterstitialListener);
								/** @deprecated */
								public onAdFailedToLoad(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module customevent {
							export class zzc extends com.google.android.gms.ads.mediation.customevent.CustomEventNativeListener {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.customevent.zzc>;
								public onAdFailedToLoad(param0: number): void;
								public onAdClosed(): void;
								public onAdImpression(): void;
								public constructor(param0: com.google.android.gms.ads.mediation.customevent.CustomEventAdapter, param1: com.google.android.gms.ads.mediation.MediationNativeListener);
								public onAdClicked(): void;
								public onAdLeftApplication(): void;
								public onAdLoaded(param0: com.google.android.gms.ads.mediation.UnifiedNativeAdMapper): void;
								public onAdOpened(): void;
								public onAdFailedToLoad(param0: com.google.android.gms.ads.AdError): void;
								/** @deprecated */
								public onAdFailedToLoad(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module rtb {
							export abstract class RtbAdapter extends com.google.android.gms.ads.mediation.Adapter {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.rtb.RtbAdapter>;
								public loadRtbBannerAd(param0: com.google.android.gms.ads.mediation.MediationBannerAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.MediationBannerAd, com.google.android.gms.ads.mediation.MediationBannerAdCallback>): void;
								public collectSignals(param0: com.google.android.gms.ads.mediation.rtb.RtbSignalData, param1: com.google.android.gms.ads.mediation.rtb.SignalCallbacks): void;
								public loadRtbNativeAd(param0: com.google.android.gms.ads.mediation.MediationNativeAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.UnifiedNativeAdMapper, com.google.android.gms.ads.mediation.MediationNativeAdCallback>): void;
								public loadRtbInterscrollerAd(param0: com.google.android.gms.ads.mediation.MediationBannerAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.MediationInterscrollerAd, com.google.android.gms.ads.mediation.MediationBannerAdCallback>): void;
								public loadRtbRewardedInterstitialAd(param0: com.google.android.gms.ads.mediation.MediationRewardedAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.MediationRewardedAd, com.google.android.gms.ads.mediation.MediationRewardedAdCallback>): void;
								public constructor();
								public loadRtbInterstitialAd(param0: com.google.android.gms.ads.mediation.MediationInterstitialAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.MediationInterstitialAd, com.google.android.gms.ads.mediation.MediationInterstitialAdCallback>): void;
								public loadRtbRewardedAd(param0: com.google.android.gms.ads.mediation.MediationRewardedAdConfiguration, param1: com.google.android.gms.ads.mediation.MediationAdLoadCallback<com.google.android.gms.ads.mediation.MediationRewardedAd, com.google.android.gms.ads.mediation.MediationRewardedAdCallback>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module rtb {
							export class RtbSignalData {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.rtb.RtbSignalData>;
								public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.google.android.gms.ads.mediation.MediationConfiguration>, param2: globalAndroid.os.Bundle, param3: com.google.android.gms.ads.AdSize);
								public getConfigurations(): java.util.List<com.google.android.gms.ads.mediation.MediationConfiguration>;
								public getAdSize(): com.google.android.gms.ads.AdSize;
								public getNetworkExtras(): globalAndroid.os.Bundle;
								/** @deprecated */
								public getConfiguration(): com.google.android.gms.ads.mediation.MediationConfiguration;
								public getContext(): globalAndroid.content.Context;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export module rtb {
							export class SignalCallbacks {
								public static class: java.lang.Class<com.google.android.gms.ads.mediation.rtb.SignalCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.mediation.rtb.SignalCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onSuccess(param0: string): void; onFailure(param0: string): void; onFailure(param0: com.google.android.gms.ads.AdError): void });
								public constructor();
								public onFailure(param0: com.google.android.gms.ads.AdError): void;
								/** @deprecated */
								public onFailure(param0: string): void;
								public onSuccess(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.zza>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module mediation {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.ads.mediation.zzb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.mediation.zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getVideoController(): any /* com.google.android.gms.internal.ads.zzbhg*/ });
							public constructor();
							public getVideoController(): any /* com.google.android.gms.internal.ads.zzbhg*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export class AdChoicesView {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.AdChoicesView>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export class MediaView {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.MediaView>;
							public setMediaContent(param0: com.google.android.gms.ads.MediaContent): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setImageScaleType(param0: globalAndroid.widget.ImageView.ScaleType): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export abstract class NativeAd {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAd>;
							public getHeadline(): string;
							public performClick(param0: globalAndroid.os.Bundle): void;
							public reportTouchEvent(param0: globalAndroid.os.Bundle): void;
							public getPrice(): string;
							public isCustomClickGestureEnabled(): boolean;
							public getExtras(): globalAndroid.os.Bundle;
							public destroy(): void;
							public recordCustomClickGesture(): void;
							public getResponseInfo(): com.google.android.gms.ads.ResponseInfo;
							public getImages(): java.util.List<com.google.android.gms.ads.nativead.NativeAd.Image>;
							public getBody(): string;
							public constructor();
							public getAdChoicesInfo(): com.google.android.gms.ads.nativead.NativeAd.AdChoicesInfo;
							public setUnconfirmedClickListener(param0: com.google.android.gms.ads.nativead.NativeAd.UnconfirmedClickListener): void;
							public getIcon(): com.google.android.gms.ads.nativead.NativeAd.Image;
							public enableCustomClickGesture(): void;
							public setMuteThisAdListener(param0: com.google.android.gms.ads.MuteThisAdListener): void;
							public getAdvertiser(): string;
							public recordImpression(param0: globalAndroid.os.Bundle): boolean;
							public cancelUnconfirmedClick(): void;
							public setOnPaidEventListener(param0: com.google.android.gms.ads.OnPaidEventListener): void;
							public getMediaContent(): com.google.android.gms.ads.MediaContent;
							public getCallToAction(): string;
							public isCustomMuteThisAdEnabled(): boolean;
							public muteThisAd(param0: com.google.android.gms.ads.MuteThisAdReason): void;
							public getStarRating(): java.lang.Double;
							public getStore(): string;
							public getMuteThisAdReasons(): java.util.List<com.google.android.gms.ads.MuteThisAdReason>;
						}
						export module NativeAd {
							export abstract class AdChoicesInfo {
								public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAd.AdChoicesInfo>;
								public getText(): string;
								public constructor();
								public getImages(): java.util.List<com.google.android.gms.ads.nativead.NativeAd.Image>;
							}
							export abstract class Image {
								public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAd.Image>;
								public getDrawable(): globalAndroid.graphics.drawable.Drawable;
								public getScale(): number;
								public constructor();
								public getUri(): globalAndroid.net.Uri;
							}
							export class OnNativeAdLoadedListener {
								public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAd.OnNativeAdLoadedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.nativead.NativeAd$OnNativeAdLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onNativeAdLoaded(param0: com.google.android.gms.ads.nativead.NativeAd): void });
								public constructor();
								public onNativeAdLoaded(param0: com.google.android.gms.ads.nativead.NativeAd): void;
							}
							export class UnconfirmedClickListener {
								public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAd.UnconfirmedClickListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.nativead.NativeAd$UnconfirmedClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onUnconfirmedClickReceived(param0: string): void; onUnconfirmedClickCancelled(): void });
								public constructor();
								public onUnconfirmedClickReceived(param0: string): void;
								public onUnconfirmedClickCancelled(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export class NativeAdAssetNames {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAdAssetNames>;
							public static ASSET_HEADLINE: string;
							public static ASSET_CALL_TO_ACTION: string;
							public static ASSET_ICON: string;
							public static ASSET_BODY: string;
							public static ASSET_ADVERTISER: string;
							public static ASSET_STORE: string;
							public static ASSET_PRICE: string;
							public static ASSET_IMAGE: string;
							public static ASSET_STAR_RATING: string;
							public static ASSET_MEDIA_VIDEO: string;
							public static ASSET_ADCHOICES_CONTAINER_VIEW: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export class NativeAdOptions {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAdOptions>;
							public static NATIVE_MEDIA_ASPECT_RATIO_UNKNOWN: number;
							public static NATIVE_MEDIA_ASPECT_RATIO_ANY: number;
							public static NATIVE_MEDIA_ASPECT_RATIO_LANDSCAPE: number;
							public static NATIVE_MEDIA_ASPECT_RATIO_PORTRAIT: number;
							public static NATIVE_MEDIA_ASPECT_RATIO_SQUARE: number;
							public static ADCHOICES_TOP_LEFT: number;
							public static ADCHOICES_TOP_RIGHT: number;
							public static ADCHOICES_BOTTOM_RIGHT: number;
							public static ADCHOICES_BOTTOM_LEFT: number;
							public getAdChoicesPlacement(): number;
							public shouldReturnUrlsForImageAssets(): boolean;
							public shouldRequestMultipleImages(): boolean;
							public getMediaAspectRatio(): number;
							public getVideoOptions(): com.google.android.gms.ads.VideoOptions;
						}
						export module NativeAdOptions {
							export class AdChoicesPlacement {
								public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAdOptions.AdChoicesPlacement>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.nativead.NativeAdOptions$AdChoicesPlacement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAdOptions.Builder>;
								public setRequestCustomMuteThisAd(param0: boolean): com.google.android.gms.ads.nativead.NativeAdOptions.Builder;
								public setVideoOptions(param0: com.google.android.gms.ads.VideoOptions): com.google.android.gms.ads.nativead.NativeAdOptions.Builder;
								public setReturnUrlsForImageAssets(param0: boolean): com.google.android.gms.ads.nativead.NativeAdOptions.Builder;
								public constructor();
								public setAdChoicesPlacement(param0: number): com.google.android.gms.ads.nativead.NativeAdOptions.Builder;
								public setRequestMultipleImages(param0: boolean): com.google.android.gms.ads.nativead.NativeAdOptions.Builder;
								public build(): com.google.android.gms.ads.nativead.NativeAdOptions;
								public setMediaAspectRatio(param0: number): com.google.android.gms.ads.nativead.NativeAdOptions.Builder;
							}
							export class NativeMediaAspectRatio {
								public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAdOptions.NativeMediaAspectRatio>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.nativead.NativeAdOptions$NativeMediaAspectRatio interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export class NativeAdView {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAdView>;
							public setBodyView(param0: globalAndroid.view.View): void;
							public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
							public setAdvertiserView(param0: globalAndroid.view.View): void;
							public bringChildToFront(param0: globalAndroid.view.View): void;
							public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public getCallToActionView(): globalAndroid.view.View;
							public setMediaView(param0: com.google.android.gms.ads.nativead.MediaView): void;
							public getAdChoicesView(): com.google.android.gms.ads.nativead.AdChoicesView;
							public getStarRatingView(): globalAndroid.view.View;
							public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
							public getIconView(): globalAndroid.view.View;
							public destroy(): void;
							public getAdvertiserView(): globalAndroid.view.View;
							public setCallToActionView(param0: globalAndroid.view.View): void;
							public setImageView(param0: globalAndroid.view.View): void;
							public getMediaView(): com.google.android.gms.ads.nativead.MediaView;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public getBodyView(): globalAndroid.view.View;
							public setNativeAd(param0: com.google.android.gms.ads.nativead.NativeAd): void;
							public getStoreView(): globalAndroid.view.View;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public setStoreView(param0: globalAndroid.view.View): void;
							public setClickConfirmingView(param0: globalAndroid.view.View): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public removeAllViews(): void;
							public setStarRatingView(param0: globalAndroid.view.View): void;
							public getPriceView(): globalAndroid.view.View;
							public setAdChoicesView(param0: com.google.android.gms.ads.nativead.AdChoicesView): void;
							public setIconView(param0: globalAndroid.view.View): void;
							public getHeadlineView(): globalAndroid.view.View;
							public removeView(param0: globalAndroid.view.View): void;
							public setHeadlineView(param0: globalAndroid.view.View): void;
							public getImageView(): globalAndroid.view.View;
							public constructor(param0: globalAndroid.content.Context);
							public setPriceView(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export class NativeAdViewHolder {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeAdViewHolder>;
							public constructor(param0: globalAndroid.view.View, param1: java.util.Map<string, globalAndroid.view.View>, param2: java.util.Map<string, globalAndroid.view.View>);
							public unregisterNativeAd(): void;
							public setNativeAd(param0: com.google.android.gms.ads.nativead.NativeAd): void;
							public setClickConfirmingView(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export class NativeCustomFormatAd {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeCustomFormatAd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.nativead.NativeCustomFormatAd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getText(param0: string): string; getImage(param0: string): com.google.android.gms.ads.nativead.NativeAd.Image; getVideoController(): com.google.android.gms.ads.VideoController; getVideoMediaView(): com.google.android.gms.ads.nativead.MediaView; getAvailableAssetNames(): java.util.List<string>; getCustomFormatId(): string; performClick(param0: string): void; recordImpression(): void; getDisplayOpenMeasurement(): com.google.android.gms.ads.nativead.NativeCustomFormatAd.DisplayOpenMeasurement; destroy(): void });
							public constructor();
							public static ASSET_NAME_VIDEO: string;
							public getImage(param0: string): com.google.android.gms.ads.nativead.NativeAd.Image;
							public getVideoController(): com.google.android.gms.ads.VideoController;
							public destroy(): void;
							public getAvailableAssetNames(): java.util.List<string>;
							public performClick(param0: string): void;
							public getVideoMediaView(): com.google.android.gms.ads.nativead.MediaView;
							public getCustomFormatId(): string;
							public getDisplayOpenMeasurement(): com.google.android.gms.ads.nativead.NativeCustomFormatAd.DisplayOpenMeasurement;
							public recordImpression(): void;
							public getText(param0: string): string;
						}
						export module NativeCustomFormatAd {
							export class DisplayOpenMeasurement {
								public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeCustomFormatAd.DisplayOpenMeasurement>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.nativead.NativeCustomFormatAd$DisplayOpenMeasurement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { start(): boolean; setView(param0: globalAndroid.view.View): void });
								public constructor();
								public start(): boolean;
								public setView(param0: globalAndroid.view.View): void;
							}
							export class OnCustomClickListener {
								public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeCustomFormatAd.OnCustomClickListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.nativead.NativeCustomFormatAd$OnCustomClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onCustomClick(param0: com.google.android.gms.ads.nativead.NativeCustomFormatAd, param1: string): void });
								public constructor();
								public onCustomClick(param0: com.google.android.gms.ads.nativead.NativeCustomFormatAd, param1: string): void;
							}
							export class OnCustomFormatAdLoadedListener {
								public static class: java.lang.Class<com.google.android.gms.ads.nativead.NativeCustomFormatAd.OnCustomFormatAdLoadedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.nativead.NativeCustomFormatAd$OnCustomFormatAdLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onCustomFormatAdLoaded(param0: com.google.android.gms.ads.nativead.NativeCustomFormatAd): void });
								public constructor();
								public onCustomFormatAdLoaded(param0: com.google.android.gms.ads.nativead.NativeCustomFormatAd): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export class zzb extends com.google.android.gms.internal.ads.zzblt {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nativead {
						export class zzc extends com.google.android.gms.internal.ads.zzblv {
							public static class: java.lang.Class<com.google.android.gms.ads.nativead.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class TaggingLibraryJsInterface {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.TaggingLibraryJsInterface>;
								public reportTouchEvent(param0: string): void;
								public getQueryInfo(): string;
								public getClickSignals(param0: string): string;
								public getViewSignals(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zza extends java.util.LinkedHashMap<string, globalAndroid.util.Pair<java.lang.Long, string>> {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zza>;
								public removeEldestEntry(param0: java.util.Map.Entry<string, globalAndroid.util.Pair<java.lang.Long, string>>): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzaa extends com.google.android.gms.internal.ads.zzgjg<java.util.Set<string>> {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzaa>;
								public constructor(param0: any /* com.google.android.gms.ads.nonagon.signalgeneration.zzx*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzab extends java.lang.Object /* com.google.android.gms.internal.ads.zzgjg<com.google.android.gms.internal.ads.zzfqn<com.google.android.gms.ads.nonagon.signalgeneration.zzaf>>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzab>;
								public constructor(param0: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.internal.ads.zzfcx>*/, param1: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.ads.nonagon.signalgeneration.zzad>*/, param2: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.internal.ads.zzdaj>*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzac extends com.google.android.gms.internal.ads.zzfpl {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzac>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzad extends java.lang.Object /* com.google.android.gms.internal.ads.zzfpl<com.google.android.gms.internal.ads.zzcbk,com.google.android.gms.ads.nonagon.signalgeneration.zzaf>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzad>;
								public constructor(param0: java.util.concurrent.Executor, param1: any /* com.google.android.gms.internal.ads.zzdyw*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzae extends java.lang.Object /* com.google.android.gms.internal.ads.zzgjg<com.google.android.gms.ads.nonagon.signalgeneration.zzad>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzae>;
								public constructor(param0: com.google.android.gms.internal.ads.zzgju<java.util.concurrent.Executor>, param1: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.internal.ads.zzdyw>*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzaf {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzaf>;
								public constructor(param0: globalAndroid.util.JsonReader);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzag extends com.google.android.gms.ads.query.QueryInfoGenerationCallback {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzag>;
								public onSuccess(param0: com.google.android.gms.ads.query.QueryInfo): void;
								public onFailure(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzb {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzb>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzc {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzc>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzd extends java.lang.Object /* com.google.android.gms.internal.ads.zzgjg<com.google.android.gms.ads.nonagon.signalgeneration.zzb>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzd>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zze {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zze>;
								/**
								 * Constructs a new instance of the com.google.android.gms.ads.nonagon.signalgeneration.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zzc(param0: any /* com.google.android.gms.internal.ads.zzdap*/): any /* com.google.android.gms.ads.nonagon.signalgeneration.zze*/; zzb(param0: any /* com.google.android.gms.ads.nonagon.signalgeneration.zzx*/): any /* com.google.android.gms.ads.nonagon.signalgeneration.zze*/; zza(): any /* com.google.android.gms.ads.nonagon.signalgeneration.zzf*/ });
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export abstract class zzf {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzf>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzg {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzg>;
								public call(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzh extends com.google.android.gms.internal.ads.zzfpl {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzh>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzi {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzi>;
								public call(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzj extends com.google.android.gms.internal.ads.zzfpl {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzj>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzk extends com.google.android.gms.internal.ads.zzfju {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzk>;
								public apply(param0: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzl extends com.google.android.gms.internal.ads.zzfju {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzl>;
								public apply(param0: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzm extends com.google.android.gms.internal.ads.zzfju {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzm>;
								public apply(param0: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzn extends com.google.android.gms.internal.ads.zzfju {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzn>;
								public apply(param0: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzo extends com.google.android.gms.internal.ads.zzfpl {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzo>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzp {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzp>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzq extends java.lang.Object /* com.google.android.gms.internal.ads.zzfqa<com.google.android.gms.ads.nonagon.signalgeneration.zzaf>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzq>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzr extends com.google.android.gms.internal.ads.zzfqa<java.util.ArrayList<globalAndroid.net.Uri>> {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzr>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzs extends com.google.android.gms.internal.ads.zzfqa<globalAndroid.net.Uri> {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzs>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzt extends com.google.android.gms.internal.ads.zzcfn {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzt>;
								public constructor();
								public constructor(param0: string);
								public constructor(param0: any /* com.google.android.gms.internal.ads.zzcop*/, param1: globalAndroid.content.Context, param2: any /* com.google.android.gms.internal.ads.zzfb*/, param3: any /* com.google.android.gms.internal.ads.zzezo<com.google.android.gms.internal.ads.zzdqu>*/, param4: any /* com.google.android.gms.internal.ads.zzfqo*/, param5: java.util.concurrent.ScheduledExecutorService, param6: any /* com.google.android.gms.internal.ads.zzduu*/, param7: any /* com.google.android.gms.internal.ads.zzfdh*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzu extends java.lang.Object /* com.google.android.gms.internal.ads.zzgjg<com.google.android.gms.ads.nonagon.signalgeneration.zzt>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzu>;
								public constructor(
									param0: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.internal.ads.zzcop>*/,
									param1: com.google.android.gms.internal.ads.zzgju<globalAndroid.content.Context>,
									param2: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.internal.ads.zzfb>*/,
									param3: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.internal.ads.zzezo<com.google.android.gms.internal.ads.zzdqu>>*/,
									param4: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.internal.ads.zzfqo>*/,
									param5: com.google.android.gms.internal.ads.zzgju<java.util.concurrent.ScheduledExecutorService>,
									param6: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.internal.ads.zzduu>*/,
									param7: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.internal.ads.zzfdh>*/
								);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzv {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzv>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzw {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzw>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzx {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzx>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzy extends java.lang.Object /* com.google.android.gms.internal.ads.zzgjg<com.google.android.gms.internal.ads.zzazh>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzy>;
								public constructor(param0: any /* com.google.android.gms.ads.nonagon.signalgeneration.zzx*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module nonagon {
						export module signalgeneration {
							export class zzz extends java.lang.Object /* com.google.android.gms.internal.ads.zzgjg<string>*/ {
								public static class: java.lang.Class<com.google.android.gms.ads.nonagon.signalgeneration.zzz>;
								public constructor(param0: any /* com.google.android.gms.ads.nonagon.signalgeneration.zzx*/);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module query {
						export class AdInfo {
							public static class: java.lang.Class<com.google.android.gms.ads.query.AdInfo>;
							public getAdString(): string;
							public getQueryInfo(): com.google.android.gms.ads.query.QueryInfo;
							public constructor(param0: com.google.android.gms.ads.query.QueryInfo, param1: string);
							public static getRequestId(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module query {
						export class QueryInfo {
							public static class: java.lang.Class<com.google.android.gms.ads.query.QueryInfo>;
							public getQuery(): string;
							public getRequestId(): string;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbhy*/);
							public static generate(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.AdFormat, param2: com.google.android.gms.ads.AdRequest, param3: com.google.android.gms.ads.query.QueryInfoGenerationCallback): void;
							public getQueryBundle(): globalAndroid.os.Bundle;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module query {
						export abstract class QueryInfoGenerationCallback {
							public static class: java.lang.Class<com.google.android.gms.ads.query.QueryInfoGenerationCallback>;
							public constructor();
							public onSuccess(param0: com.google.android.gms.ads.query.QueryInfo): void;
							public onFailure(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module query {
						export class ReportingInfo {
							public static class: java.lang.Class<com.google.android.gms.ads.query.ReportingInfo>;
							public updateClickUrl(param0: globalAndroid.net.Uri, param1: com.google.android.gms.ads.query.UpdateClickUrlCallback): void;
							public reportTouchEvent(param0: globalAndroid.view.MotionEvent): void;
							public updateImpressionUrls(param0: java.util.List<globalAndroid.net.Uri>, param1: com.google.android.gms.ads.query.UpdateImpressionUrlsCallback): void;
						}
						export module ReportingInfo {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.ads.query.ReportingInfo.Builder>;
								public build(): com.google.android.gms.ads.query.ReportingInfo;
								public constructor(param0: globalAndroid.view.View);
								public setAssetViews(param0: java.util.Map<string, globalAndroid.view.View>): com.google.android.gms.ads.query.ReportingInfo.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module query {
						export abstract class UpdateClickUrlCallback {
							public static class: java.lang.Class<com.google.android.gms.ads.query.UpdateClickUrlCallback>;
							public constructor();
							public onSuccess(param0: globalAndroid.net.Uri): void;
							public onFailure(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module query {
						export abstract class UpdateImpressionUrlsCallback {
							public static class: java.lang.Class<com.google.android.gms.ads.query.UpdateImpressionUrlsCallback>;
							public constructor();
							public onSuccess(param0: java.util.List<globalAndroid.net.Uri>): void;
							public onFailure(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module query {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.ads.query.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module rewarded {
						export class OnAdMetadataChangedListener {
							public static class: java.lang.Class<com.google.android.gms.ads.rewarded.OnAdMetadataChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.rewarded.OnAdMetadataChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAdMetadataChanged(): void });
							public constructor();
							public onAdMetadataChanged(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module rewarded {
						export class RewardItem {
							public static class: java.lang.Class<com.google.android.gms.ads.rewarded.RewardItem>;
							/**
							 * Constructs a new instance of the com.google.android.gms.ads.rewarded.RewardItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getType(): string; getAmount(): number; <clinit>(): void });
							public constructor();
							public static DEFAULT_REWARD: com.google.android.gms.ads.rewarded.RewardItem;
							public getAmount(): number;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module rewarded {
						export abstract class RewardedAd {
							public static class: java.lang.Class<com.google.android.gms.ads.rewarded.RewardedAd>;
							public constructor();
							public static load(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.ads.admanager.AdManagerAdRequest, param3: com.google.android.gms.ads.rewarded.RewardedAdLoadCallback): void;
							public getAdUnitId(): string;
							public static load(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.ads.AdRequest, param3: com.google.android.gms.ads.rewarded.RewardedAdLoadCallback): void;
							public show(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.OnUserEarnedRewardListener): void;
							public getAdMetadata(): globalAndroid.os.Bundle;
							public setOnPaidEventListener(param0: com.google.android.gms.ads.OnPaidEventListener): void;
							public setOnAdMetadataChangedListener(param0: com.google.android.gms.ads.rewarded.OnAdMetadataChangedListener): void;
							public getOnAdMetadataChangedListener(): com.google.android.gms.ads.rewarded.OnAdMetadataChangedListener;
							public getResponseInfo(): com.google.android.gms.ads.ResponseInfo;
							public setImmersiveMode(param0: boolean): void;
							public setFullScreenContentCallback(param0: com.google.android.gms.ads.FullScreenContentCallback): void;
							public getFullScreenContentCallback(): com.google.android.gms.ads.FullScreenContentCallback;
							public getRewardItem(): com.google.android.gms.ads.rewarded.RewardItem;
							public getOnPaidEventListener(): com.google.android.gms.ads.OnPaidEventListener;
							public setServerSideVerificationOptions(param0: com.google.android.gms.ads.rewarded.ServerSideVerificationOptions): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module rewarded {
						export abstract class RewardedAdLoadCallback extends com.google.android.gms.ads.AdLoadCallback<com.google.android.gms.ads.rewarded.RewardedAd> {
							public static class: java.lang.Class<com.google.android.gms.ads.rewarded.RewardedAdLoadCallback>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module rewarded {
						export class ServerSideVerificationOptions {
							public static class: java.lang.Class<com.google.android.gms.ads.rewarded.ServerSideVerificationOptions>;
							public getCustomData(): string;
							public getUserId(): string;
						}
						export module ServerSideVerificationOptions {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.ads.rewarded.ServerSideVerificationOptions.Builder>;
								public setCustomData(param0: string): com.google.android.gms.ads.rewarded.ServerSideVerificationOptions.Builder;
								public build(): com.google.android.gms.ads.rewarded.ServerSideVerificationOptions;
								public constructor();
								public setUserId(param0: string): com.google.android.gms.ads.rewarded.ServerSideVerificationOptions.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module rewarded {
						export class zza extends com.google.android.gms.ads.rewarded.RewardItem {
							public static class: java.lang.Class<com.google.android.gms.ads.rewarded.zza>;
							public getAmount(): number;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module rewarded {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.ads.rewarded.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module rewardedinterstitial {
						export abstract class RewardedInterstitialAd {
							public static class: java.lang.Class<com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd>;
							public constructor();
							public getAdUnitId(): string;
							public static load(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.ads.admanager.AdManagerAdRequest, param3: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAdLoadCallback): void;
							public show(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.OnUserEarnedRewardListener): void;
							public getAdMetadata(): globalAndroid.os.Bundle;
							public setOnPaidEventListener(param0: com.google.android.gms.ads.OnPaidEventListener): void;
							public setOnAdMetadataChangedListener(param0: com.google.android.gms.ads.rewarded.OnAdMetadataChangedListener): void;
							public getOnAdMetadataChangedListener(): com.google.android.gms.ads.rewarded.OnAdMetadataChangedListener;
							public getResponseInfo(): com.google.android.gms.ads.ResponseInfo;
							public setImmersiveMode(param0: boolean): void;
							public setFullScreenContentCallback(param0: com.google.android.gms.ads.FullScreenContentCallback): void;
							public getFullScreenContentCallback(): com.google.android.gms.ads.FullScreenContentCallback;
							public getRewardItem(): com.google.android.gms.ads.rewarded.RewardItem;
							public getOnPaidEventListener(): com.google.android.gms.ads.OnPaidEventListener;
							public setServerSideVerificationOptions(param0: com.google.android.gms.ads.rewarded.ServerSideVerificationOptions): void;
							public static load(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.ads.AdRequest, param3: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAdLoadCallback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module rewardedinterstitial {
						export abstract class RewardedInterstitialAdLoadCallback extends com.google.android.gms.ads.AdLoadCallback<com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd> {
							public static class: java.lang.Class<com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAdLoadCallback>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module search {
						export class DynamicHeightSearchAdRequest {
							public static class: java.lang.Class<com.google.android.gms.ads.search.DynamicHeightSearchAdRequest>;
							public getCustomEventExtrasBundle(param0: java.lang.Class): globalAndroid.os.Bundle;
							public getQuery(): string;
							public isTestDevice(param0: globalAndroid.content.Context): boolean;
							public getNetworkExtrasBundle(param0: java.lang.Class): globalAndroid.os.Bundle;
						}
						export module DynamicHeightSearchAdRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder>;
								public setLocationColor(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setColorAdSeparator(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setStyleId(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public addCustomEventExtrasBundle(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setNumber(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setQuery(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setIsPlusOnesEnabled(param0: boolean): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setPage(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setColorBorder(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setFontFamilyAttribution(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setAdjustableLineHeight(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setFontSizeDescription(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setAdvancedOptionValue(param0: string, param1: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public build(): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest;
								public addNetworkExtrasBundle(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setIsSellerRatingsEnabled(param0: boolean): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setCssWidth(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setFontFamily(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setFontSizeTitle(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setColorAttribution(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setIsClickToCallEnabled(param0: boolean): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setVerticalSpacing(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setColorBackground(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setAdTest(param0: boolean): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setColorText(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setBorderSelections(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setLocationFontSize(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setIsTitleUnderlined(param0: boolean): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setColorDomainLink(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setColorAdBorder(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setLongerHeadlines(param0: boolean): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public constructor();
								public addNetworkExtras(param0: com.google.android.gms.ads.mediation.NetworkExtras): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setHostLanguage(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setColorTitleLink(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setIsLocationEnabled(param0: boolean): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setFontSizeDomainLink(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setDetailedAttribution(param0: boolean): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setFontSizeAttribution(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setIsSiteLinksEnabled(param0: boolean): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setFontSizeAnnotation(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setAttributionSpacingBelow(param0: number): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setIsTitleBold(param0: boolean): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setChannel(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setAdBorderSelectors(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
								public setColorAnnotation(param0: string): com.google.android.gms.ads.search.DynamicHeightSearchAdRequest.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module search {
						export class SearchAdRequest {
							public static class: java.lang.Class<com.google.android.gms.ads.search.SearchAdRequest>;
							public static ERROR_CODE_INTERNAL_ERROR: number;
							public static ERROR_CODE_INVALID_REQUEST: number;
							public static ERROR_CODE_NETWORK_ERROR: number;
							public static ERROR_CODE_NO_FILL: number;
							public static DEVICE_ID_EMULATOR: string;
							public static BORDER_TYPE_NONE: number;
							public static BORDER_TYPE_DASHED: number;
							public static BORDER_TYPE_DOTTED: number;
							public static BORDER_TYPE_SOLID: number;
							public static CALL_BUTTON_COLOR_LIGHT: number;
							public static CALL_BUTTON_COLOR_MEDIUM: number;
							public static CALL_BUTTON_COLOR_DARK: number;
							/** @deprecated */
							public getHeaderTextSize(): number;
							public getLocation(): globalAndroid.location.Location;
							public getQuery(): string;
							/** @deprecated */
							public getBackgroundColor(): number;
							/** @deprecated */
							public getCallButtonColor(): number;
							/** @deprecated */
							public getCustomChannels(): string;
							/** @deprecated */
							public getBackgroundGradientTop(): number;
							public isTestDevice(param0: globalAndroid.content.Context): boolean;
							/** @deprecated */
							public getHeaderTextColor(): number;
							/** @deprecated */
							public getBorderType(): number;
							/** @deprecated */
							public getNetworkExtras(param0: java.lang.Class): com.google.android.gms.ads.mediation.NetworkExtras;
							public getCustomEventExtrasBundle(param0: java.lang.Class): globalAndroid.os.Bundle;
							/** @deprecated */
							public getBackgroundGradientBottom(): number;
							/** @deprecated */
							public getBorderThickness(): number;
							public getNetworkExtrasBundle(param0: java.lang.Class): globalAndroid.os.Bundle;
							/** @deprecated */
							public getAnchorTextColor(): number;
							/** @deprecated */
							public getDescriptionTextColor(): number;
							/** @deprecated */
							public getFontFace(): string;
							/** @deprecated */
							public getBorderColor(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module search {
						export class SearchAdView {
							public static class: java.lang.Class<com.google.android.gms.ads.search.SearchAdView>;
							public getAdUnitId(): string;
							public setAdListener(param0: com.google.android.gms.ads.AdListener): void;
							public pause(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public loadAd(param0: com.google.android.gms.ads.search.SearchAdRequest): void;
							public destroy(): void;
							public onMeasure(param0: number, param1: number): void;
							public setAdUnitId(param0: string): void;
							public getAdListener(): com.google.android.gms.ads.AdListener;
							public setAdSize(param0: com.google.android.gms.ads.AdSize): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public loadAd(param0: com.google.android.gms.ads.search.DynamicHeightSearchAdRequest): void;
							public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
							public getAdSize(): com.google.android.gms.ads.AdSize;
							public resume(): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module search {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.ads.search.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module search {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.ads.search.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module search {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.ads.search.zzc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class zza {
						public static class: java.lang.Class<com.google.android.gms.ads.zza>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class zzb {
						public static class: java.lang.Class<com.google.android.gms.ads.zzb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class zzc {
						public static class: java.lang.Class<com.google.android.gms.ads.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export class zzd {
						public static class: java.lang.Class<com.google.android.gms.ads.zzd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export module descriptors {
						export module com {
							export module google {
								export module android {
									export module gms {
										export module ads {
											export module dynamite {
												export class ModuleDescriptor {
													public static class: java.lang.Class<com.google.android.gms.dynamite.descriptors.com.google.android.gms.ads.dynamite.ModuleDescriptor>;
													public static MODULE_ID: string;
													public static MODULE_VERSION: number;
													public constructor();
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaa {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaa>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaaa extends com.google.android.gms.internal.ads.zztv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaaa>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzzx*/, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaab extends com.google.android.gms.internal.ads.zzrr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaab>;
							public constructor();
							public constructor(param0: number, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaac {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaad {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaad>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaah*/, param1: globalAndroid.media.MediaFormat, param2: any /* com.google.android.gms.internal.ads.zzkc*/, param3: globalAndroid.view.Surface, param4: globalAndroid.media.MediaCrypto, param5: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaae {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaae>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { <clinit>(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaaf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaaf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzabb*/, param1: number, param2: number): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaag extends com.google.android.gms.internal.ads.zzrp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaag>;
							public constructor(param0: java.lang.Throwable, param1: any /* com.google.android.gms.internal.ads.zzaah*/);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaah {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaah>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaai {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaai>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzkc*/, param1: java.lang.Throwable, param2: boolean, param3: any /* com.google.android.gms.internal.ads.zzaah*/);
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzkc*/, param1: java.lang.Throwable, param2: boolean, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzaaj extends com.google.android.gms.internal.ads.zzie {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaaj>;
							public constructor(param0: number, param1: any /* com.google.android.gms.internal.ads.zzaae*/, param2: any /* com.google.android.gms.internal.ads.zzaal*/, param3: boolean, param4: number);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaak extends com.google.android.gms.internal.ads.zzaal {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaak>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaal {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaal>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { <clinit>(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaam extends com.google.android.gms.internal.ads.zzaaw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaam>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaan extends com.google.android.gms.internal.ads.zzaaw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaan>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaao extends com.google.android.gms.internal.ads.zzaaw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaao>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaap {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaap>;
							public compare(param0: any, param1: any): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaaq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaaq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaar {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaar>;
							public constructor(param0: string, param1: boolean, param2: boolean);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaas {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaas>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaat {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaat>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): number; zzb(param0: number): globalAndroid.media.MediaCodecInfo; zzc(): boolean; zzd(param0: string, param1: string, param2: globalAndroid.media.MediaCodecInfo.CodecCapabilities): boolean; zze(param0: string, param1: string, param2: globalAndroid.media.MediaCodecInfo.CodecCapabilities): boolean });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaau extends com.google.android.gms.internal.ads.zzaat {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaau>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaav extends com.google.android.gms.internal.ads.zzaat {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaav>;
							public constructor(param0: boolean, param1: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaaw<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaaw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaaw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: T): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaax {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaax>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaay {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaay>;
							public onFrameRendered(param0: globalAndroid.media.MediaCodec, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaaz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaaz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzab>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzab interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzac<any>*/, param1: any /* com.google.android.gms.internal.ads.zzai<any>*/): void; zzb(param0: any /* com.google.android.gms.internal.ads.zzac<any>*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaba extends com.google.android.gms.internal.ads.zzaae {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaba>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabc extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabe>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzabd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzkt*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabe {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabe>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabe>*/;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzabd>*/);
							public constructor(param0: java.util.List<any>);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzabf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabg>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabh extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabi>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabi extends com.google.android.gms.internal.ads.zzabd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabi>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabi>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public constructor(param0: string, param1: string, param2: number, param3: number, param4: native.Array<number>);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabj>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabk extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabl>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabl extends com.google.android.gms.internal.ads.zzabd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabl>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabl>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public constructor(param0: number, param1: string, param2: string, param3: number, param4: number, param5: number, param6: number, param7: native.Array<number>);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabm extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabn>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabn extends com.google.android.gms.internal.ads.zzabd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabn>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabn>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string, param1: string);
							public describeContents(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabo extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabp>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabp extends com.google.android.gms.internal.ads.zzabd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabp>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabp>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: string, param2: string, param3: string, param4: boolean, param5: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabq extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabr extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabr>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabr>*/;
							public constructor(param0: string, param1: string, param2: number, param3: native.Array<number>);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabs extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabt>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabt extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabt>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabt>*/;
							public constructor(param0: string, param1: native.Array<number>);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabu extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabv>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabv extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabv>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabv>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: any /* native.Array<com.google.android.gms.internal.ads.zzacg>*/);
							public describeContents(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabw extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabx>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabx extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabx>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabx>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public equals(param0: any): boolean;
							public constructor(param0: string, param1: boolean, param2: boolean, param3: native.Array<string>, param4: any /* native.Array<com.google.android.gms.internal.ads.zzacg>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaby extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabz>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaby>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzabz extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzabz>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzabz>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public constructor(param0: string, param1: string, param2: string);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzac<T> extends java.lang.Object /* java.lang.Comparable<com.google.android.gms.internal.ads.zzac<any>>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzac>;
							public constructor(param0: number, param1: string, param2: any /* com.google.android.gms.internal.ads.zzag*/);
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaca extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaca>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacb extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacb>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacb>*/;
							public constructor(param0: string, param1: string, param2: string, param3: native.Array<number>);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacc extends com.google.android.gms.internal.ads.zzacd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzacd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzace {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzace>;
							public constructor(param0: number, param1: boolean, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzacg extends com.google.android.gms.internal.ads.zzabd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacg>;
							public constructor(param0: string);
							public describeContents(): number;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzach extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaci>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzach>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaci extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaci>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaci>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public constructor(param0: string, param1: string, param2: string);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacj extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzack>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzack extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzack>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzack>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public describeContents(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacl extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacm>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacm extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacm>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacm>*/;
							public constructor(param0: string, param1: native.Array<number>);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacn extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaco>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaco extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaco>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaco>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public constructor(param0: string, param1: string, param2: string);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacp extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacq extends com.google.android.gms.internal.ads.zzacg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacq>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacq>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public constructor(param0: string, param1: string, param2: string);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacr extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacs>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacs extends com.google.android.gms.internal.ads.zzabd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacs>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacs>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: string, param1: native.Array<number>, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzact extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacu>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzact>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacu extends com.google.android.gms.internal.ads.zzabd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacu>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacu>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public toString(): string;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacv extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacw>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacw extends com.google.android.gms.internal.ads.zzabd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacw>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzacw>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public describeContents(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzacx extends com.google.android.gms.internal.ads.zzadx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacx>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzacz extends com.google.android.gms.internal.ads.zzaen {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzacz>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zztg*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzad {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzad>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzada extends com.google.android.gms.internal.ads.zzafj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzada>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzadb*/, param1: any /* com.google.android.gms.internal.ads.zzafj*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadb implements com.google.android.gms.internal.ads.zzadt, com.google.android.gms.internal.ads.zzads {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadb>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzadt*/, param1: boolean, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadc extends com.google.android.gms.internal.ads.zzadw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadd implements com.google.android.gms.internal.ads.zzaef, com.google.android.gms.internal.ads.zzse {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadd>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzadf*/, param1: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzade<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzade>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzadx*/, param1: any /* com.google.android.gms.internal.ads.zzadw*/, param2: any /* com.google.android.gms.internal.ads.zzadd*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzadf<T> extends java.lang.Object /* com.google.android.gms.internal.ads.zzacx*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadf>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadg extends com.google.android.gms.internal.ads.zzafl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadg>;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzafl>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadh>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadi extends com.google.android.gms.internal.ads.zzaeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadi>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzahs*/, param1: any /* com.google.android.gms.internal.ads.zztg*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadj extends com.google.android.gms.internal.ads.zzmv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadj>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzmv*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzadk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzakr*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadl extends com.google.android.gms.internal.ads.zzaht {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadl>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaht*/, param1: number, param2: any /* com.google.android.gms.internal.ads.zzadk*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadm>;
							public constructor(param0: number, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: globalAndroid.net.Uri, param3: java.util.Map<string, java.util.List<string>>, param4: number, param5: number, param6: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadn implements com.google.android.gms.internal.ads.zzadt, com.google.android.gms.internal.ads.zzads {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadn>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzadv*/, param1: any /* com.google.android.gms.internal.ads.zzahy*/, param2: number, param3: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzado extends com.google.android.gms.internal.ads.zzadj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzado>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadp extends com.google.android.gms.internal.ads.zzmv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadp>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzkq*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadq extends com.google.android.gms.internal.ads.zzadf<java.lang.Void> {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadq>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzadx*/, param1: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadr>;
							public constructor(param0: number, param1: number, param2: any /* com.google.android.gms.internal.ads.zzkc*/, param3: number, param4: any, param5: number, param6: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzads extends java.lang.Object /* com.google.android.gms.internal.ads.zzafk<com.google.android.gms.internal.ads.zzadt>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzads>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzads interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzj(param0: any /* com.google.android.gms.internal.ads.zzadt*/): void; zzm(param0: any): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadt extends com.google.android.gms.internal.ads.zzafl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadt>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzadt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any /* com.google.android.gms.internal.ads.zzads*/, param1: number): void;
								zzc(): void;
								zzd(): any /* com.google.android.gms.internal.ads.zzaft*/;
								zze(param0: number, param1: boolean): void;
								zzg(): number;
								zzi(param0: number): number;
								zzk(param0: number, param1: any /* com.google.android.gms.internal.ads.zzme*/): number;
								zzh(): number;
								zzl(): number;
								zzn(param0: number): boolean;
								zzo(): boolean;
								zzf(param0: number): void;
								zzq(param0: any /* native.Array<com.google.android.gms.internal.ads.zzagf>*/, param1: native.Array<boolean>, param2: any /* native.Array<com.google.android.gms.internal.ads.zzafj>*/, param3: native.Array<boolean>, param4: number): number;
								zzh(): number;
								zzl(): number;
								zzn(param0: number): boolean;
								zzo(): boolean;
								zzf(param0: number): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadu>;
							public hashCode(): number;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzadu*/);
							public constructor(param0: any, param1: number, param2: number, param3: number);
							public equals(param0: any): boolean;
							public constructor(param0: any, param1: number, param2: number);
							public constructor(param0: any, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadv extends com.google.android.gms.internal.ads.zzadu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadv>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzadu*/);
							public constructor(param0: any, param1: number, param2: number, param3: number);
							public constructor(param0: any, param1: number, param2: number);
							public constructor(param0: any);
							public constructor(param0: any, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzadw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzadx*/, param1: any /* com.google.android.gms.internal.ads.zzmv*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzadx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzk(param0: globalAndroid.os.Handler, param1: any /* com.google.android.gms.internal.ads.zzaef*/): void;
								zzl(param0: any /* com.google.android.gms.internal.ads.zzaef*/): void;
								zzm(param0: globalAndroid.os.Handler, param1: any /* com.google.android.gms.internal.ads.zzse*/): void;
								zzn(param0: any /* com.google.android.gms.internal.ads.zzse*/): void;
								zzs(): any /* com.google.android.gms.internal.ads.zzmv*/;
								zzt(): boolean;
								zzz(): any /* com.google.android.gms.internal.ads.zzkq*/;
								zzo(param0: any /* com.google.android.gms.internal.ads.zzadw*/, param1: any /* com.google.android.gms.internal.ads.zzajd*/): void;
								zzu(): void;
								zzp(param0: any /* com.google.android.gms.internal.ads.zzadw*/): void;
								zzA(param0: any /* com.google.android.gms.internal.ads.zzadt*/): void;
								zzq(param0: any /* com.google.android.gms.internal.ads.zzadw*/): void;
								zzr(param0: any /* com.google.android.gms.internal.ads.zzadw*/): void;
								zzC(param0: any /* com.google.android.gms.internal.ads.zzadv*/, param1: any /* com.google.android.gms.internal.ads.zzahy*/, param2: number): any /* com.google.android.gms.internal.ads.zzadt*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzady {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzady>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzadz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzadz>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzae<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzae>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaea {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaea>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaeb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaeb>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaec {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaec>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaed {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaed>;
							public constructor(param0: globalAndroid.os.Handler, param1: any /* com.google.android.gms.internal.ads.zzaef*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaee {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaee>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaef {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaef>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaef interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number, param1: any /* com.google.android.gms.internal.ads.zzadv*/, param2: any /* com.google.android.gms.internal.ads.zzadm*/, param3: any /* com.google.android.gms.internal.ads.zzadr*/): void;
								zzb(param0: number, param1: any /* com.google.android.gms.internal.ads.zzadv*/, param2: any /* com.google.android.gms.internal.ads.zzadm*/, param3: any /* com.google.android.gms.internal.ads.zzadr*/): void;
								zzbf(param0: number, param1: any /* com.google.android.gms.internal.ads.zzadv*/, param2: any /* com.google.android.gms.internal.ads.zzadm*/, param3: any /* com.google.android.gms.internal.ads.zzadr*/): void;
								zzbg(param0: number, param1: any /* com.google.android.gms.internal.ads.zzadv*/, param2: any /* com.google.android.gms.internal.ads.zzadm*/, param3: any /* com.google.android.gms.internal.ads.zzadr*/, param4: java.io.IOException, param5: boolean): void;
								zzbh(param0: number, param1: any /* com.google.android.gms.internal.ads.zzadv*/, param2: any /* com.google.android.gms.internal.ads.zzadr*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaeg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaeg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaeh implements com.google.android.gms.internal.ads.zzadt, com.google.android.gms.internal.ads.zzads {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaeh>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzadt*/, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaei extends com.google.android.gms.internal.ads.zzafj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaei>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzafj*/, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaej implements com.google.android.gms.internal.ads.zzadt, com.google.android.gms.internal.ads.zzads {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaej>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzadh*/, param1: native.Array<number>, param2: any /* native.Array<com.google.android.gms.internal.ads.zzadt>*/, param3: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaek {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaek>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzael extends com.google.android.gms.internal.ads.zzadf<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzael>;
							public constructor();
							public constructor(param0: boolean, param1: boolean, param2: any /* native.Array<com.google.android.gms.internal.ads.zzadx>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaem {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaem>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): any /* com.google.android.gms.internal.ads.zzaen*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaen {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaen>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaen interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzahq*/, param1: globalAndroid.net.Uri, param2: java.util.Map<string, java.util.List<string>>, param3: number, param4: number, param5: any /* com.google.android.gms.internal.ads.zztd*/): void; zzb(): void; zzc(): void; zzd(): number; zze(param0: number, param1: number): void; zzf(param0: any /* com.google.android.gms.internal.ads.zzts*/): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaeo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaeo>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaep {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaep>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaeq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaeq>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaer implements com.google.android.gms.internal.ads.zzaiv, com.google.android.gms.internal.ads.zzadk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaer>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaew*/, param1: globalAndroid.net.Uri, param2: any /* com.google.android.gms.internal.ads.zzaht*/, param3: any /* com.google.android.gms.internal.ads.zzaen*/, param4: any /* com.google.android.gms.internal.ads.zztd*/, param5: any /* com.google.android.gms.internal.ads.zzajj*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaes {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaes>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: number, param1: boolean, param2: boolean): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaet extends com.google.android.gms.internal.ads.zzafj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaet>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaew*/, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaeu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaeu>;
							public constructor(param0: number, param1: boolean);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaev {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaev>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaft*/, param1: native.Array<boolean>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaew extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaew>;
							public constructor(
								param0: globalAndroid.net.Uri,
								param1: any /* com.google.android.gms.internal.ads.zzaht*/,
								param2: any /* com.google.android.gms.internal.ads.zzaen*/,
								param3: any /* com.google.android.gms.internal.ads.zzsi*/,
								param4: any /* com.google.android.gms.internal.ads.zzsd*/,
								param5: any /* com.google.android.gms.internal.ads.zzaih*/,
								param6: any /* com.google.android.gms.internal.ads.zzaee*/,
								param7: any /* com.google.android.gms.internal.ads.zzaes*/,
								param8: any /* com.google.android.gms.internal.ads.zzahy*/,
								param9: string,
								param10: number,
								param11: native.Array<number>
							);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaex extends com.google.android.gms.internal.ads.zzadj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaex>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaey extends com.google.android.gms.internal.ads.zzaem {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaey>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaez extends com.google.android.gms.internal.ads.zzaeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaez>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzahs*/, param1: any /* com.google.android.gms.internal.ads.zztg*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaf>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzm*/, param1: any /* com.google.android.gms.internal.ads.zzv*/, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafa extends com.google.android.gms.internal.ads.zzacx implements com.google.android.gms.internal.ads.zzaes {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafb>;
							public constructor(param0: number, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafc>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzahy*/, param1: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafd extends com.google.android.gms.internal.ads.zzajk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafe {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaff {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaff>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzafh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzw(param0: any /* com.google.android.gms.internal.ads.zzkc*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafi extends com.google.android.gms.internal.ads.zztz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafi>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzahy*/, param1: globalAndroid.os.Looper, param2: any /* com.google.android.gms.internal.ads.zzsi*/, param3: any /* com.google.android.gms.internal.ads.zzsd*/, param4: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzafj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): boolean; zzc(): void; zzd(param0: any /* com.google.android.gms.internal.ads.zzkd*/, param1: any /* com.google.android.gms.internal.ads.zzrr*/, param2: number): number; zze(param0: number): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafk<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzafk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzm(param0: T): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzafl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzh(): number; zzl(): number; zzn(param0: number): boolean; zzo(): boolean; zzf(param0: number): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafm>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafn extends com.google.android.gms.internal.ads.zzmv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafn>;
							public constructor();
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: boolean, param9: any, param10: any /* com.google.android.gms.internal.ads.zzkq*/, param11: any /* com.google.android.gms.internal.ads.zzko*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafo extends com.google.android.gms.internal.ads.zzajk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafp<V> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafp>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzajk<V>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafq extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzafr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafr>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzafr>*/;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzkc>*/);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafs extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaft>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaft {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaft>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaft>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public equals(param0: any): boolean;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzafr>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafu extends com.google.android.gms.internal.ads.zzlg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafu>;
							/** @deprecated */
							public constructor();
							public constructor(param0: string, param1: globalAndroid.net.Uri);
							/** @deprecated */
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafv extends com.google.android.gms.internal.ads.zzif {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafw extends com.google.android.gms.internal.ads.zzif {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafx>;
							public constructor();
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafy>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzafz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzafz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzafz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzag {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzag>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzal*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaga extends com.google.android.gms.internal.ads.zzie {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaga>;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagb>;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagd extends com.google.android.gms.internal.ads.zzagf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagd>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzafr*/, param1: native.Array<number>, param2: number, param3: any /* com.google.android.gms.internal.ads.zzahl*/, param4: number, param5: number, param6: number, param7: number, param8: number, param9: any /* java.util.List<com.google.android.gms.internal.ads.zzagb>*/, param10: any /* com.google.android.gms.internal.ads.zzajh*/);
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzafr*/, param1: native.Array<number>, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzage {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzage>;
							public compare(param0: any, param1: any): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagf>;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzafr*/, param1: native.Array<number>, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagg>;
							public compare(param0: any, param1: any): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagh>;
							public compare(param0: any, param1: any): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagj extends java.lang.Object /* java.lang.Comparable<com.google.android.gms.internal.ads.zzagj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagj>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzkc*/, param1: any /* com.google.android.gms.internal.ads.zzagm*/, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagk extends java.lang.Object /* java.lang.Comparable<com.google.android.gms.internal.ads.zzagk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagk>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzkc*/, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagl extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzagm>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagm extends com.google.android.gms.internal.ads.zzaha {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagm>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzagm>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagn extends com.google.android.gms.internal.ads.zzagz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagn>;
							/** @deprecated */
							public constructor();
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzago extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzagp>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzago>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagp>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzagp>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagq extends java.lang.Object /* java.lang.Comparable<com.google.android.gms.internal.ads.zzagq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagq>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzkc*/, param1: any /* com.google.android.gms.internal.ads.zzagm*/, param2: number, param3: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagr extends java.lang.Object /* java.lang.Comparable<com.google.android.gms.internal.ads.zzagr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagr>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzkc*/, param1: any /* com.google.android.gms.internal.ads.zzagm*/, param2: number, param3: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzags extends com.google.android.gms.internal.ads.zzagw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzags>;
							public constructor();
							/** @deprecated */
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzagm*/, param1: any /* com.google.android.gms.internal.ads.zzagc*/, param2: native.Array<number>);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagt>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzafr*/, param1: native.Array<number>, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagu extends com.google.android.gms.internal.ads.zzagf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagu>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzafr*/, param1: native.Array<number>, param2: number);
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzafr*/, param1: number, param2: number, param3: number, param4: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzagw extends com.google.android.gms.internal.ads.zzahc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagw>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagx>;
							public hashCode(): number;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzagf>*/, param1: native.Array<number>);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagy extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaha>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzagz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzagz>;
							/** @deprecated */
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzah<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzah>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzah interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: T): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaha {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaha>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaha>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzahb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzk(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzahc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahd>;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzmc>*/, param1: any /* native.Array<com.google.android.gms.internal.ads.zzagf>*/, param2: any, param3: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahe {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahe>;
							public constructor(param0: native.Array<number>, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahf>;
							public constructor(param0: java.io.IOException);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahg extends com.google.android.gms.internal.ads.zzahm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahg>;
							public constructor(param0: boolean);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahh>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahi>;
							public constructor(param0: globalAndroid.os.Handler, param1: any /* com.google.android.gms.internal.ads.zzahk*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahj>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzahk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzV(param0: number, param1: number, param2: number): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzahl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: globalAndroid.os.Handler, param1: any /* com.google.android.gms.internal.ads.zzahk*/): void; zzb(param0: any /* com.google.android.gms.internal.ads.zzahk*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzahm extends com.google.android.gms.internal.ads.zzaht {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahm>;
							public constructor(param0: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahn extends com.google.android.gms.internal.ads.zzahm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahn>;
							public constructor(param0: native.Array<number>);
							public constructor(param0: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaho {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaho>;
							public constructor(param0: java.io.IOException);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahp extends com.google.android.gms.internal.ads.zzahm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahp>;
							public constructor(param0: boolean);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzahq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: native.Array<number>, param1: number, param2: number): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahr extends com.google.android.gms.internal.ads.zzahm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahr>;
							public constructor();
							public constructor(param0: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahs>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzahs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): any /* com.google.android.gms.internal.ads.zzaht*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaht extends com.google.android.gms.internal.ads.zzahq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaht>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaht interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.ads.zzajd*/): void; zzc(param0: any /* com.google.android.gms.internal.ads.zzahx*/): number; zzd(): globalAndroid.net.Uri; zze(): java.util.Map<string, java.util.List<string>>; zzf(): void; zza(param0: native.Array<number>, param1: number, param2: number): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahu>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahw>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahx>;
							public toString(): string;
							/** @deprecated */
							public constructor(param0: globalAndroid.net.Uri, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: string, param6: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahy>;
							public constructor(param0: boolean, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzahz extends com.google.android.gms.internal.ads.zzakm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzahz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzai<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzai>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaia {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaia>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaib implements com.google.android.gms.internal.ads.zzahl, com.google.android.gms.internal.ads.zzajd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaib>;
							/** @deprecated */
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaic extends com.google.android.gms.internal.ads.zzaht {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaic>;
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.ads.zzaht*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaid extends com.google.android.gms.internal.ads.zzahs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaid>;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: any /* com.google.android.gms.internal.ads.zzajd*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaie {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaie>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaif extends com.google.android.gms.internal.ads.zzahs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaif>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaig extends com.google.android.gms.internal.ads.zzahm implements com.google.android.gms.internal.ads.zzaip {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaig>;
							/** @deprecated */
							public constructor();
							public constructor(param0: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaih {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaih>;
							public constructor();
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaii {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaii>;
							public constructor(param0: string, param1: java.io.IOException);
							public constructor(param0: java.io.IOException);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaij extends com.google.android.gms.internal.ads.zzahm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaij>;
							public constructor();
							public constructor(param0: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaik extends com.google.android.gms.internal.ads.zzfkf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaik>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzail extends com.google.android.gms.internal.ads.zzaim {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzail>;
							public constructor(param0: java.io.IOException, param1: any /* com.google.android.gms.internal.ads.zzahx*/);
							public constructor(param0: java.io.IOException, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: number);
							public constructor(param0: string, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: number);
							public constructor(param0: string, param1: java.io.IOException, param2: any /* com.google.android.gms.internal.ads.zzahx*/, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaim {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaim>;
							public constructor(param0: java.io.IOException, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: number);
							public constructor(param0: string, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: number);
							public constructor(param0: string, param1: java.io.IOException, param2: any /* com.google.android.gms.internal.ads.zzahx*/, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzain extends com.google.android.gms.internal.ads.zzaim {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzain>;
							public constructor(param0: number, param1: string, param2: java.util.Map<string, java.util.List<string>>, param3: any /* com.google.android.gms.internal.ads.zzahx*/, param4: native.Array<number>);
							public constructor(param0: java.io.IOException, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: number);
							public constructor(param0: string, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: number);
							public constructor(param0: string, param1: java.io.IOException, param2: any /* com.google.android.gms.internal.ads.zzahx*/, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaio {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaio>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaip extends com.google.android.gms.internal.ads.zzaht {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaip>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaip interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): java.util.Map<string, java.util.List<string>>; <clinit>(): void; zzb(param0: any /* com.google.android.gms.internal.ads.zzajd*/): void; zzc(param0: any /* com.google.android.gms.internal.ads.zzahx*/): number; zzd(): globalAndroid.net.Uri; zze(): java.util.Map<string, java.util.List<string>>; zzf(): void; zza(param0: native.Array<number>, param1: number, param2: number): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaiq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaiq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzair {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzair>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzais<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzais>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzais interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzz(param0: T, param1: number, param2: number): void; zzy(param0: T, param1: number, param2: number, param3: boolean): void; zzx(param0: T, param1: number, param2: number, param3: java.io.IOException, param4: number): any /* com.google.android.gms.internal.ads.zzait*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzait {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzait>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaiu<T> extends globalAndroid.os.Handler implements java.lang.Runnable {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaiu>;
							public constructor(param0: globalAndroid.os.Looper, param1: any, param2: any /* com.google.android.gms.internal.ads.zzais<any>*/, param3: number, param4: number);
							public handleMessage(param0: globalAndroid.os.Message): void;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaiv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaiv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaiv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): void; zzc(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaiw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaiw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaiw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzm(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaix {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaix>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaiw*/);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaiy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaiy>;
							public constructor(param0: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaiz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaiz>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaj extends com.google.android.gms.internal.ads.zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaj>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzy*/);
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaja {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaja>;
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajb extends com.google.android.gms.internal.ads.zzahm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajb>;
							public constructor(param0: boolean);
							public static buildRawResourceUri(param0: number): globalAndroid.net.Uri;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajc extends com.google.android.gms.internal.ads.zzaht {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajc>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaht*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzajd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(param0: any /* com.google.android.gms.internal.ads.zzaht*/, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: boolean): void;
								zze(param0: any /* com.google.android.gms.internal.ads.zzaht*/, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: boolean): void;
								zzf(param0: any /* com.google.android.gms.internal.ads.zzaht*/, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: boolean, param3: number): void;
								zzg(param0: any /* com.google.android.gms.internal.ads.zzaht*/, param1: any /* com.google.android.gms.internal.ads.zzahx*/, param2: boolean): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaje {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaje>;
							public constructor(param0: java.io.IOException);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajf extends com.google.android.gms.internal.ads.zzahm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajf>;
							public constructor();
							public constructor(param0: boolean);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzajh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback): any /* com.google.android.gms.internal.ads.zzajt*/; <clinit>(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaji {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaji>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajj>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzajh*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajk<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzajk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzajn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajo>;
							public constructor(param0: globalAndroid.os.Handler, param1: any /* com.google.android.gms.internal.ads.zzajn*/);
							public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajq>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajr>;
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajs>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzajs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajt>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzajt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number): boolean;
								zzb(param0: number): any /* com.google.android.gms.internal.ads.zzajs*/;
								zzc(param0: number, param1: any): any /* com.google.android.gms.internal.ads.zzajs*/;
								zzd(param0: number, param1: number, param2: number): any /* com.google.android.gms.internal.ads.zzajs*/;
								zze(param0: number, param1: number, param2: number, param3: any): any /* com.google.android.gms.internal.ads.zzajs*/;
								zzf(param0: any /* com.google.android.gms.internal.ads.zzajs*/): boolean;
								zzg(param0: number): boolean;
								zzh(param0: number, param1: number): boolean;
								zzi(param0: number): void;
								zzj(param0: any): void;
								zzk(param0: java.lang.Runnable): boolean;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaju {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaju>;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajv>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajw<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzajw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: T): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajx<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzajx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: T, param1: any /* com.google.android.gms.internal.ads.zzajr*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajy<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajy>;
							public hashCode(): number;
							public constructor(param0: T);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzajz<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzajz>;
							public constructor(param0: globalAndroid.os.Looper, param1: any /* com.google.android.gms.internal.ads.zzajh*/, param2: any /* com.google.android.gms.internal.ads.zzajx<T>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzak extends com.google.android.gms.internal.ads.zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzak>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzy*/);
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaka {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaka>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakb>;
							public constructor();
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzakc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzg(): number; zzh(param0: any /* com.google.android.gms.internal.ads.zzll*/): void; zzi(): any /* com.google.android.gms.internal.ads.zzll*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzake {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzake>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakf>;
							public constructor(param0: number, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakh>;
							public constructor(param0: number, param1: number, param2: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaki {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaki>;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: boolean, param9: number, param10: number, param11: number, param12: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakk>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzakm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: number): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakn>;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzako {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzako>;
							public onDisplayInfoChanged(param0: globalAndroid.telephony.TelephonyDisplayInfo): void;
							public onServiceStateChanged(param0: globalAndroid.telephony.ServiceState): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakq>;
							public constructor();
							public constructor(param0: native.Array<number>, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakr>;
							public constructor();
							public constructor(param0: native.Array<number>);
							public constructor(param0: native.Array<number>, param1: number);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaks {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaks>;
							public constructor(param0: native.Array<number>, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakt>;
							public compare(param0: any, param1: any): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaku {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaku>;
							public compare(param0: any, param1: any): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakx>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaky extends com.google.android.gms.internal.ads.zzakc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaky>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzajh*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzakz extends com.google.android.gms.internal.ads.zzajh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzakz>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzal>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzy*/);
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzala {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzala>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalb extends com.google.android.gms.internal.ads.zzajs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalc extends com.google.android.gms.internal.ads.zzajt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalc>;
							public constructor(param0: globalAndroid.os.Handler);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzald<V> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzald>;
							public constructor();
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzale {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzale>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalg>;
							public newThread(param0: java.lang.Runnable): java.lang.Thread;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzali {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzali>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalk extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzall>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzall {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzall>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzall>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaln {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaln>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalo>;
							public constructor();
							public handleMessage(param0: globalAndroid.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalp>;
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalq>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalr>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzals {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzals>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalt extends com.google.android.gms.internal.ads.zzaag {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalt>;
							public constructor(param0: java.lang.Throwable, param1: any /* com.google.android.gms.internal.ads.zzaah*/, param2: globalAndroid.view.Surface);
							public constructor(param0: java.lang.Throwable, param1: any /* com.google.android.gms.internal.ads.zzaah*/);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalu>;
							public constructor(param0: number, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalv extends com.google.android.gms.internal.ads.zzaaf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalv>;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzalw*/, param1: any /* com.google.android.gms.internal.ads.zzabb*/, param2: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalw extends com.google.android.gms.internal.ads.zzaaj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalw>;
							public constructor(param0: number, param1: any /* com.google.android.gms.internal.ads.zzaae*/, param2: any /* com.google.android.gms.internal.ads.zzaal*/, param3: boolean, param4: number);
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.ads.zzaal*/, param2: number, param3: globalAndroid.os.Handler, param4: any /* com.google.android.gms.internal.ads.zzamn*/, param5: number);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzalx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaly {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaly>;
							public onDisplayRemoved(param0: number): void;
							public onDisplayChanged(param0: number): void;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzama*/, param1: globalAndroid.hardware.display.DisplayManager);
							public onDisplayAdded(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzalz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzalz>;
							public doFrame(param0: number): void;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzam {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzam>;
							public constructor(param0: string, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzama {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzama>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzamb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzv(param0: any /* com.google.android.gms.internal.ads.zzamp*/): void; zzac(param0: number, param1: number, param2: number, param3: number): void; zzU(param0: number, param1: number): void; zzad(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamc>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamd>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzame {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzame>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamf>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamg>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamh>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzami {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzami>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamj>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamk>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaml {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaml>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamm>;
							public constructor(param0: globalAndroid.os.Handler, param1: any /* com.google.android.gms.internal.ads.zzamn*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzamn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzc(param0: any /* com.google.android.gms.internal.ads.zzro*/): void;
								zzbt(param0: string, param1: number, param2: number): void;
								zzM(param0: any /* com.google.android.gms.internal.ads.zzkc*/): void;
								zzbu(param0: any /* com.google.android.gms.internal.ads.zzkc*/, param1: any /* com.google.android.gms.internal.ads.zzrs*/): void;
								zzu(param0: number, param1: number): void;
								zzz(param0: number, param1: number): void;
								zzv(param0: any /* com.google.android.gms.internal.ads.zzamp*/): void;
								zzw(param0: any, param1: number): void;
								zzx(param0: string): void;
								zzy(param0: any /* com.google.android.gms.internal.ads.zzro*/): void;
								zzA(param0: java.lang.Exception): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamo extends com.google.android.gms.internal.ads.zzif {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamp>;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamq extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzams {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzamr extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzams {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzams {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzams>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzams interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string): void; zzf(): void; zzg(param0: native.Array<number>): void; zzh(param0: native.Array<number>): void; zzi(param0: number): void; zzj(param0: number): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamt>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzamt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: string, param1: string): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzamu implements com.google.android.gms.internal.ads.zzanp, com.google.android.gms.internal.ads.zzanq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamu>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzamx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzanv*/, param1: any): void; zzb(param0: any /* com.google.android.gms.internal.ads.zzatc*/, param1: any /* com.google.android.gms.internal.ads.zzato*/): void; zzc(param0: boolean): void; zzd(param0: boolean, param1: number): void; zze(param0: any /* com.google.android.gms.internal.ads.zzamw*/): void; zzf(): void; zzg(param0: any /* com.google.android.gms.internal.ads.zzano*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamy>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzamy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzr(param0: number, param1: any): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzamz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzamz>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzamy*/, param1: number, param2: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzan {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzan>;
							public finalize(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzana {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzana>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzana interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.ads.zzamx*/): void;
								zzb(param0: any /* com.google.android.gms.internal.ads.zzamx*/): void;
								zzc(): number;
								zzd(param0: any /* com.google.android.gms.internal.ads.zzasn*/): void;
								zze(param0: boolean): void;
								zzf(): boolean;
								zzg(param0: number): void;
								zzh(): void;
								zzi(): void;
								zzj(param0: any /* native.Array<com.google.android.gms.internal.ads.zzamz>*/): void;
								zzk(param0: any /* native.Array<com.google.android.gms.internal.ads.zzamz>*/): void;
								zzl(): number;
								zzm(): number;
								zzn(): number;
								zzo(): void;
								zzp(param0: number): void;
								zzq(param0: number): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanc>;
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzand extends com.google.android.gms.internal.ads.zzana {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzand>;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzanp>*/, param1: any /* com.google.android.gms.internal.ads.zzatq*/, param2: any /* com.google.android.gms.internal.ads.zzcjw*/, param3: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzane {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzane>;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzanp>*/, param1: any /* native.Array<com.google.android.gms.internal.ads.zzanq>*/, param2: number, param3: any /* com.google.android.gms.internal.ads.zzatq*/, param4: any /* com.google.android.gms.internal.ads.zzcjw*/, param5: any /* com.google.android.gms.internal.ads.zzasn*/, param6: any, param7: number, param8: number, param9: boolean, param10: number, param11: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanf>;
							public constructor(param0: number, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzang {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzang>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzanv*/, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanh>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzanv*/, param1: any, param2: any /* com.google.android.gms.internal.ads.zzanf*/, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzani implements com.google.android.gms.internal.ads.zzask, com.google.android.gms.internal.ads.zzatp, com.google.android.gms.internal.ads.zzasm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzani>;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzanp>*/, param1: any /* com.google.android.gms.internal.ads.zzatq*/, param2: any /* com.google.android.gms.internal.ads.zzcjw*/, param3: boolean, param4: number, param5: globalAndroid.os.Handler, param6: any /* com.google.android.gms.internal.ads.zzanf*/, param7: any /* com.google.android.gms.internal.ads.zzana*/, param8: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanj extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzank>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzank {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzank>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzank>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanl>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanm>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzanv*/, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzann {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzann>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzano {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzano>;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanp extends com.google.android.gms.internal.ads.zzamy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzanp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
								zzb(): any /* com.google.android.gms.internal.ads.zzanq*/;
								zzc(param0: number): void;
								zzd(): any /* com.google.android.gms.internal.ads.zzaup*/;
								zze(): number;
								zzf(param0: any /* com.google.android.gms.internal.ads.zzanr*/, param1: any /* native.Array<com.google.android.gms.internal.ads.zzank>*/, param2: any /* com.google.android.gms.internal.ads.zzasx*/, param3: number, param4: boolean, param5: number): void;
								zzg(): void;
								zzh(param0: any /* native.Array<com.google.android.gms.internal.ads.zzank>*/, param1: any /* com.google.android.gms.internal.ads.zzasx*/, param2: number): void;
								zzi(): any /* com.google.android.gms.internal.ads.zzasx*/;
								zzj(): boolean;
								zzk(): void;
								zzl(): boolean;
								zzm(): void;
								zzn(param0: number): void;
								zzD(param0: number, param1: number): void;
								zzE(): boolean;
								zzF(): boolean;
								zzo(): void;
								zzp(): void;
								zzr(param0: number, param1: any): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzanq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): number; zzG(param0: any /* com.google.android.gms.internal.ads.zzank*/): number; zzq(): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanr>;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzans extends com.google.android.gms.internal.ads.zzanv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzans>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzant {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzant>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanu>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzanv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanv>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanx>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzany {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzany>;
							public constructor(param0: number, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzanz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzanz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzanz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: number, param1: number, param2: number): boolean; zzb(): boolean; zzc(): number; zzd(): number; zze(param0: java.nio.ByteBuffer): void; zzf(): void; zzg(): java.nio.ByteBuffer; zzh(): boolean; zzi(): void; zzj(): void; <clinit>(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzao {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzao>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaoa {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaoa>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaob {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaob>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaoc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaoc>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaod {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaod>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaoe {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaoe>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaof {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaof>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaog {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaog>;
							public constructor(param0: globalAndroid.os.Handler, param1: any /* com.google.android.gms.internal.ads.zzaoh*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaoh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaoh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaoh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzh(param0: any /* com.google.android.gms.internal.ads.zzank*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaoi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaoi>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaoj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaoj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaok extends com.google.android.gms.internal.ads.zzaoj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaok>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaol {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaol>;
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaom {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaom>;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaon {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaon>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaon interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaoo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaoo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaop {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaop>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaoq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaoq>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzanx*/, param1: any /* native.Array<com.google.android.gms.internal.ads.zzanz>*/, param2: any /* com.google.android.gms.internal.ads.zzaon*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaor extends com.google.android.gms.internal.ads.zzanz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaor>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaos {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaos>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaot extends com.google.android.gms.internal.ads.zzaon {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaot>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaou extends com.google.android.gms.internal.ads.zzare implements com.google.android.gms.internal.ads.zzaup {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaou>;
							public constructor(param0: number, param1: any /* com.google.android.gms.internal.ads.zzarg*/, param2: any /* com.google.android.gms.internal.ads.zzapi*/, param3: boolean);
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzarg*/, param1: any /* com.google.android.gms.internal.ads.zzapi*/, param2: boolean, param3: globalAndroid.os.Handler, param4: any /* com.google.android.gms.internal.ads.zzaoh*/);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaov extends com.google.android.gms.internal.ads.zzanz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaov>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaow {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaow>;
							public constructor(param0: number, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaox extends com.google.android.gms.internal.ads.zzanz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaox>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaoy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaoy>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaoz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaoz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzap extends com.google.android.gms.internal.ads.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzap>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapa {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapb>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapd extends com.google.android.gms.internal.ads.zzaoy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapd>;
							public constructor();
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzape extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaph>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzape>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapf extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzapg>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapg>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzapg>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public constructor(param0: java.util.UUID, param1: string, param2: native.Array<number>, param3: boolean);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaph extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaph>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaph>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public equals(param0: any): boolean;
							public constructor(param0: any /* java.util.List<com.google.android.gms.internal.ads.zzapg>*/);
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzapg>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapi<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzapi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapj extends com.google.android.gms.internal.ads.zzaps {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapj>;
							public constructor(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapk>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzatv*/, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzapl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzd(param0: any /* com.google.android.gms.internal.ads.zzapm*/): void; zze(param0: number, param1: number): void; zzf(param0: any /* com.google.android.gms.internal.ads.zzapk*/): boolean; zzg(param0: any /* com.google.android.gms.internal.ads.zzapk*/, param1: any /* com.google.android.gms.internal.ads.zzapq*/): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzapm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzbn(param0: number, param1: number): any /* com.google.android.gms.internal.ads.zzapu*/; zzbo(): void; zzc(param0: any /* com.google.android.gms.internal.ads.zzaps*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzapn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): any /* native.Array<com.google.android.gms.internal.ads.zzapl>*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapo extends com.google.android.gms.internal.ads.zzarv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapp>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapq>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapr extends com.google.android.gms.internal.ads.zzaps {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapr>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaps {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaps>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaps interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): boolean; zzb(): number; zzc(param0: number): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapt>;
							public constructor(param0: number, param1: native.Array<number>);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzapu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzank*/): void; zzb(param0: any /* com.google.android.gms.internal.ads.zzaut*/, param1: number): void; zzc(param0: number, param1: number, param2: number, param3: number, param4: any /* com.google.android.gms.internal.ads.zzapt*/): void; zzd(param0: any /* com.google.android.gms.internal.ads.zzapk*/, param1: number, param2: boolean): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapy extends com.google.android.gms.internal.ads.zzapn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzapz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzapz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaq>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqa {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqb extends com.google.android.gms.internal.ads.zzapl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqb>;
							public constructor();
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqd>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqe extends com.google.android.gms.internal.ads.zzaqg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqe>;
							public constructor(param0: number, param1: number);
							public toString(): string;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqf extends com.google.android.gms.internal.ads.zzaqg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqf>;
							public constructor(param0: number, param1: any /* com.google.android.gms.internal.ads.zzaut*/);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqg>;
							public toString(): string;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqh>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaut*/, param1: any /* com.google.android.gms.internal.ads.zzaut*/, param2: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaqi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): number; zzb(): number; zzc(): boolean });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqj>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqk extends com.google.android.gms.internal.ads.zzaqi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqk>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaqf*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaql extends com.google.android.gms.internal.ads.zzaqi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaql>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaqf*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqm>;
							public constructor(param0: number, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqo>;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqp extends com.google.android.gms.internal.ads.zzapn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqr>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzapu*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqs extends com.google.android.gms.internal.ads.zzapl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqs>;
							public constructor();
							public constructor(param0: number, param1: any /* com.google.android.gms.internal.ads.zzaux*/, param2: any /* com.google.android.gms.internal.ads.zzaqy*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqu extends com.google.android.gms.internal.ads.zzapn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqv>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaqy*/, param1: any /* com.google.android.gms.internal.ads.zzarb*/, param2: any /* com.google.android.gms.internal.ads.zzapu*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqw implements com.google.android.gms.internal.ads.zzapl, com.google.android.gms.internal.ads.zzaps {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqw>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqy>;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: any /* com.google.android.gms.internal.ads.zzank*/, param6: number, param7: any /* native.Array<com.google.android.gms.internal.ads.zzaqz>*/, param8: number, param9: native.Array<number>, param10: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaqz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaqz>;
							public constructor(param0: boolean, param1: number, param2: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzar extends com.google.android.gms.internal.ads.zzv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzar>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaq*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzara {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzara>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarb>;
							public constructor(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzard {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzard>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzank*/, param1: java.lang.Throwable, param2: boolean, param3: string);
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzank*/, param1: java.lang.Throwable, param2: boolean, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzare extends com.google.android.gms.internal.ads.zzamu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzare>;
							public constructor(param0: number, param1: any /* com.google.android.gms.internal.ads.zzarg*/, param2: any /* com.google.android.gms.internal.ads.zzapi*/, param3: boolean);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarf extends com.google.android.gms.internal.ads.zzarg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzarg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { <clinit>(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzari {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzari>;
							public constructor(param0: string, param1: boolean);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzark {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzark>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzark interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): number; zzb(param0: number): globalAndroid.media.MediaCodecInfo; zzc(): boolean; zzd(param0: string, param1: globalAndroid.media.MediaCodecInfo.CodecCapabilities): boolean });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarl extends com.google.android.gms.internal.ads.zzark {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarm extends com.google.android.gms.internal.ads.zzark {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarm>;
							public constructor(param0: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaro extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzarq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaro>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzarp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarq>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzarq>*/;
							public constructor(param0: java.util.List<any>);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarr extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzars>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzars extends com.google.android.gms.internal.ads.zzarw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzars>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzars>*/;
							public constructor(param0: string, param1: string, param2: number, param3: native.Array<number>);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzart extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaru>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzart>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaru extends com.google.android.gms.internal.ads.zzarw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaru>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzaru>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public constructor(param0: string, param1: string, param2: string);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzarv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzarw extends com.google.android.gms.internal.ads.zzarp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarw>;
							public constructor(param0: string);
							public describeContents(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarx extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzary>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzary extends com.google.android.gms.internal.ads.zzarw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzary>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzary>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public constructor(param0: string, param1: string, param2: string);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzarz extends com.google.android.gms.internal.ads.zzasz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzarz>;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzasz>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzas extends java.util.Comparator<native.Array<number>> {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzas>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasa {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasa>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasb>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasc>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasd>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzase extends com.google.android.gms.internal.ads.zzauh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzase>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzash*/, param1: globalAndroid.net.Uri, param2: any /* com.google.android.gms.internal.ads.zzatv*/, param3: any /* com.google.android.gms.internal.ads.zzasf*/, param4: any /* com.google.android.gms.internal.ads.zzaun*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasf>;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzapl>*/, param1: any /* com.google.android.gms.internal.ads.zzapm*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasg extends com.google.android.gms.internal.ads.zzasx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasg>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzash*/, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzash extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzash>;
							public constructor(param0: globalAndroid.net.Uri, param1: any /* com.google.android.gms.internal.ads.zzatv*/, param2: any /* native.Array<com.google.android.gms.internal.ads.zzapl>*/, param3: number, param4: globalAndroid.os.Handler, param5: any /* com.google.android.gms.internal.ads.zzasi*/, param6: any /* com.google.android.gms.internal.ads.zzasm*/, param7: any /* com.google.android.gms.internal.ads.zzaty*/, param8: string, param9: number, param10: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzasi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzi(param0: java.io.IOException): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasj implements com.google.android.gms.internal.ads.zzasn, com.google.android.gms.internal.ads.zzasm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasj>;
							public constructor(param0: globalAndroid.net.Uri, param1: any /* com.google.android.gms.internal.ads.zzatu*/, param2: any /* com.google.android.gms.internal.ads.zzapn*/, param3: number, param4: globalAndroid.os.Handler, param5: any /* com.google.android.gms.internal.ads.zzasi*/, param6: string, param7: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzask extends java.lang.Object /* com.google.android.gms.internal.ads.zzasy<com.google.android.gms.internal.ads.zzasl>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzask>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzask interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzbp(param0: any /* com.google.android.gms.internal.ads.zzasl*/): void; zzn(param0: any): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasl extends com.google.android.gms.internal.ads.zzasz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzasl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zze(param0: any /* com.google.android.gms.internal.ads.zzask*/, param1: number): void;
								zzf(): void;
								zzg(): any /* com.google.android.gms.internal.ads.zzatc*/;
								zzh(param0: number): void;
								zzi(): number;
								zzj(): number;
								zzk(param0: number): number;
								zza(): number;
								zzb(param0: number): boolean;
								zzB(param0: any /* native.Array<com.google.android.gms.internal.ads.zzatg>*/, param1: native.Array<boolean>, param2: any /* native.Array<com.google.android.gms.internal.ads.zzasx>*/, param3: native.Array<boolean>, param4: number): number;
								zza(): number;
								zzb(param0: number): boolean;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzasm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzi(param0: any /* com.google.android.gms.internal.ads.zzanv*/, param1: any): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzasn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzana*/, param1: boolean, param2: any /* com.google.android.gms.internal.ads.zzasm*/): void; zzb(): void; zzc(param0: any /* com.google.android.gms.internal.ads.zzasl*/): void; zzd(): void; zze(param0: number, param1: any /* com.google.android.gms.internal.ads.zzaty*/): any /* com.google.android.gms.internal.ads.zzasl*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaso implements com.google.android.gms.internal.ads.zzasl, com.google.android.gms.internal.ads.zzask {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaso>;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzasl>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasp extends com.google.android.gms.internal.ads.zzasm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasq>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasr extends com.google.android.gms.internal.ads.zzasn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasr>;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzasn>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzass {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzass>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzast {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzast>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasu>;
							public constructor(param0: number, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzasv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzp(param0: any /* com.google.android.gms.internal.ads.zzank*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasw extends com.google.android.gms.internal.ads.zzapu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasw>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaty*/, param1: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzasx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): boolean; zzb(): void; zzc(param0: any /* com.google.android.gms.internal.ads.zzanl*/, param1: any /* com.google.android.gms.internal.ads.zzapd*/, param2: boolean): number; zzd(param0: number): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasy<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasy>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzasy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzn(param0: T): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzasz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzasz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzasz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): number; zzb(param0: number): boolean });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzat>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzata extends com.google.android.gms.internal.ads.zzanv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzata>;
							public constructor();
							public constructor(param0: number, param1: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatb>;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzank>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatc>;
							public hashCode(): number;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzatb>*/);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatd extends com.google.android.gms.internal.ads.zzann {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatd>;
							public constructor();
							public constructor(param0: string, param1: globalAndroid.net.Uri);
							public constructor(param0: string);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzate {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzate>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatf extends java.lang.Object /* java.util.Comparator<com.google.android.gms.internal.ads.zzank>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatg>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzatb*/, param1: native.Array<number>);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzath {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzath>;
							public constructor();
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzati extends com.google.android.gms.internal.ads.zzatm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzati>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzatn*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatj extends com.google.android.gms.internal.ads.zzatg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatj>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzatb*/, param1: native.Array<number>);
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzatb*/, param1: number, param2: number, param3: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzatm extends com.google.android.gms.internal.ads.zzatq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatm>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzatn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzato {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzato>;
							public hashCode(): number;
							public constructor(param0: any /* native.Array<com.google.android.gms.internal.ads.zzatg>*/, param1: native.Array<number>);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzatp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzk(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzatq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatq>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatr>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzatc*/, param1: any /* com.google.android.gms.internal.ads.zzato*/, param2: any, param3: any /* native.Array<com.google.android.gms.internal.ads.zzanr>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzats {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzats>;
							public constructor(param0: native.Array<number>, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatt extends com.google.android.gms.internal.ads.zzatv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatt>;
							public constructor(param0: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzatu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): any /* com.google.android.gms.internal.ads.zzatv*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzatv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzatx*/): number; zzb(param0: native.Array<number>, param1: number, param2: number): number; zzc(): globalAndroid.net.Uri; zzd(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatw>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatx>;
							public toString(): string;
							public constructor(param0: globalAndroid.net.Uri, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: string, param6: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaty {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaty>;
							public constructor(param0: boolean, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzatz extends com.google.android.gms.internal.ads.zzaue {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzatz>;
							public constructor(param0: string, param1: any /* com.google.android.gms.internal.ads.zzauv<string>*/, param2: any /* com.google.android.gms.internal.ads.zzauk<any>*/, param3: number, param4: number, param5: boolean, param6: any /* com.google.android.gms.internal.ads.zzaud*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzau extends com.google.android.gms.internal.ads.zzax {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzau>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaua extends java.lang.Object /* com.google.android.gms.internal.ads.zzauv<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaua>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaub {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaub>;
							public constructor(param0: java.io.IOException, param1: any /* com.google.android.gms.internal.ads.zzatx*/, param2: number);
							public constructor(param0: string, param1: any /* com.google.android.gms.internal.ads.zzatx*/, param2: number);
							public constructor(param0: string, param1: java.io.IOException, param2: any /* com.google.android.gms.internal.ads.zzatx*/, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauc extends com.google.android.gms.internal.ads.zzaub {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauc>;
							public constructor(param0: number, param1: java.util.Map<string, java.util.List<string>>, param2: any /* com.google.android.gms.internal.ads.zzatx*/);
							public constructor(param0: java.io.IOException, param1: any /* com.google.android.gms.internal.ads.zzatx*/, param2: number);
							public constructor(param0: string, param1: any /* com.google.android.gms.internal.ads.zzatx*/, param2: number);
							public constructor(param0: string, param1: java.io.IOException, param2: any /* com.google.android.gms.internal.ads.zzatx*/, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaud {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaud>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaue extends com.google.android.gms.internal.ads.zzatv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaue>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): java.util.Map<string, java.util.List<string>>; <clinit>(): void; zza(param0: any /* com.google.android.gms.internal.ads.zzatx*/): number; zzb(param0: native.Array<number>, param1: number, param2: number): number; zzc(): globalAndroid.net.Uri; zzd(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauf<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzauf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzs(param0: T, param1: number, param2: number): void; zzr(param0: T, param1: number, param2: number, param3: boolean): void; zzq(param0: T, param1: number, param2: number, param3: java.io.IOException): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaug<T> extends globalAndroid.os.Handler implements java.lang.Runnable {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaug>;
							public handleMessage(param0: globalAndroid.os.Message): void;
							public constructor(param0: globalAndroid.os.Looper, param1: any, param2: any /* com.google.android.gms.internal.ads.zzauf<any>*/, param3: number, param4: number);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzauh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): void; zzc(): boolean; zzd(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaui {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaui>;
							public constructor(param0: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauj>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauk<S> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzauk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzj(param0: S, param1: any /* com.google.android.gms.internal.ads.zzatx*/): void; zzk(param0: S, param1: number): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaul {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaul>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaum {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaum>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaun {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaun>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauo>;
							public constructor();
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaup {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaup>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzN(): number; zzO(param0: any /* com.google.android.gms.internal.ads.zzano*/): any /* com.google.android.gms.internal.ads.zzano*/; zzP(): any /* com.google.android.gms.internal.ads.zzano*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaur {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaur>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaus {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaus>;
							public constructor();
							public constructor(param0: native.Array<number>, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaut {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaut>;
							public constructor();
							public constructor(param0: native.Array<number>);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauu>;
							public constructor(param0: native.Array<number>, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauv<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzauv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauw extends com.google.android.gms.internal.ads.zzaup {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauw>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaux {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaux>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzauz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzauz>;
							public newThread(param0: java.lang.Runnable): java.lang.Thread;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzav {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzav>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzava {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzava>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavc extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzavd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavd>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzavd>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzave {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzave>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavf>;
							public constructor();
							public handleMessage(param0: globalAndroid.os.Message): boolean;
							public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavg>;
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavi>;
							public constructor(param0: number, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavj extends com.google.android.gms.internal.ads.zzare {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavj>;
							public constructor(param0: number, param1: any /* com.google.android.gms.internal.ads.zzarg*/, param2: any /* com.google.android.gms.internal.ads.zzapi*/, param3: boolean);
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.ads.zzarg*/, param2: number, param3: globalAndroid.os.Handler, param4: any /* com.google.android.gms.internal.ads.zzavu*/, param5: number);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavk>;
							public doFrame(param0: number): void;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavl>;
							public constructor();
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavm>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavn>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavo>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavp>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavq>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavr>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavs>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavt>;
							public constructor(param0: globalAndroid.os.Handler, param1: any /* com.google.android.gms.internal.ads.zzavu*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzavu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzl(param0: any /* com.google.android.gms.internal.ads.zzank*/): void; zzm(param0: number, param1: number): void; zzn(param0: number, param1: number, param2: number, param3: number): void; zzo(param0: globalAndroid.view.Surface): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavv>;
							public constructor(param0: string, param1: any /* com.google.android.gms.internal.ads.zzcgy*/, param2: string, param3: org.json.JSONObject, param4: boolean, param5: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavw>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavx>;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavy>;
							public constructor(param0: number, param1: boolean, param2: boolean, param3: number, param4: globalAndroid.graphics.Rect, param5: globalAndroid.graphics.Rect, param6: globalAndroid.graphics.Rect, param7: boolean, param8: globalAndroid.graphics.Rect, param9: boolean, param10: number, param11: globalAndroid.graphics.Rect, param12: number, param13: boolean, param14: java.util.List<globalAndroid.graphics.Rect>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzavz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzavz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzavz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzc(param0: any /* com.google.android.gms.internal.ads.zzavy*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaw>;
							public read(): number;
							public read(param0: native.Array<number>, param1: number, param2: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawa {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawa>;
							public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
							public onActivityPaused(param0: globalAndroid.app.Activity): void;
							public onActivityStarted(param0: globalAndroid.app.Activity): void;
							public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onScrollChanged(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View);
							public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
							public onActivityResumed(param0: globalAndroid.app.Activity): void;
							public onGlobalLayout(): void;
							public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
							public onActivityStopped(param0: globalAndroid.app.Activity): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawd extends java.lang.Object /* com.google.android.gms.internal.ads.zzgjg<com.google.android.gms.internal.ads.zzawb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawd>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawe extends com.google.android.gms.internal.ads.zzawl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawf extends com.google.android.gms.internal.ads.zzawl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawg extends com.google.android.gms.internal.ads.zzawl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawh extends com.google.android.gms.internal.ads.zzawl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawi extends com.google.android.gms.internal.ads.zzawl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawj extends com.google.android.gms.internal.ads.zzawl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawk extends com.google.android.gms.internal.ads.zzawl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzawl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: globalAndroid.app.Application.ActivityLifecycleCallbacks): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawm>;
							public onActivityPaused(param0: globalAndroid.app.Activity): void;
							public onActivityStarted(param0: globalAndroid.app.Activity): void;
							public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public constructor(param0: globalAndroid.app.Application, param1: globalAndroid.app.Application.ActivityLifecycleCallbacks);
							public onActivityResumed(param0: globalAndroid.app.Activity): void;
							public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
							public onActivityStopped(param0: globalAndroid.app.Activity): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawn extends com.google.android.gms.internal.ads.zzbfx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawn>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.ads.admanager.AppEventListener);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawo>;
							public hashCode(): number;
							public toString(): string;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawp>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawq>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawr>;
							public onActivityPaused(param0: globalAndroid.app.Activity): void;
							public onActivityStarted(param0: globalAndroid.app.Activity): void;
							public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivityResumed(param0: globalAndroid.app.Activity): void;
							public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
							public onActivityStopped(param0: globalAndroid.app.Activity): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaws {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaws>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaws interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: boolean): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawt>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawu>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawv extends globalAndroid.webkit.ValueCallback<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaww {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaww>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawy>;
							public constructor();
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzawz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzawz>;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzax {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzax>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzax interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): java.io.File });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzaxa {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxa>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxb extends java.lang.Object /* java.util.Comparator<com.google.android.gms.internal.ads.zzaxh>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxc>;
							public constructor();
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxd>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxe {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxf extends com.google.android.gms.internal.ads.zzaxa {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxf>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaxg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): boolean; zzb(): void; zzc(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxh>;
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxj extends com.google.android.gms.internal.ads.zzaxa {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxj>;
							public constructor();
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxk extends java.lang.Object /* java.util.Comparator<com.google.android.gms.internal.ads.zzawz>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxk>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaxl*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxl>;
							public constructor(param0: number, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaxm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxn extends com.google.android.gms.internal.ads.zzaxu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxn>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.ads.appopen.AppOpenAd.AppOpenAdLoadCallback, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxo extends com.google.android.gms.ads.appopen.AppOpenAd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxo>;
							public constructor();
							public getAdUnitId(): string;
							public getResponseInfo(): com.google.android.gms.ads.ResponseInfo;
							public setImmersiveMode(param0: boolean): void;
							public setFullScreenContentCallback(param0: com.google.android.gms.ads.FullScreenContentCallback): void;
							public getFullScreenContentCallback(): com.google.android.gms.ads.FullScreenContentCallback;
							public show(param0: globalAndroid.app.Activity): void;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzaxs*/, param1: string);
							public getOnPaidEventListener(): com.google.android.gms.ads.OnPaidEventListener;
							public setOnPaidEventListener(param0: com.google.android.gms.ads.OnPaidEventListener): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxp extends com.google.android.gms.internal.ads.zzaxy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxp>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxq extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzaxs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzaxr extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzaxs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxr>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxs>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaxs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): any /* com.google.android.gms.internal.ads.zzbfr*/; zzf(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.internal.ads.zzaxz*/): void; zzg(): any /* com.google.android.gms.internal.ads.zzbhd*/; zzh(param0: boolean): void; zzi(param0: any /* com.google.android.gms.internal.ads.zzbha*/): void; zzj(param0: any /* com.google.android.gms.internal.ads.zzaxw*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxt extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzaxv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzaxu extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzaxv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxu>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaxv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.ads.zzaxs*/): void; zzc(param0: number): void; zzd(param0: any /* com.google.android.gms.internal.ads.zzbdd*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxw extends com.google.android.gms.internal.ads.zzhs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxx extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzaxz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzaxy extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzaxz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxy>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaxz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaxz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzaxz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzc(): void; zzd(): void; zze(param0: any /* com.google.android.gms.internal.ads.zzbdd*/): void; zzf(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzay extends com.google.android.gms.internal.ads.zzm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzay>;
							public constructor(param0: java.io.File, param1: number);
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzax*/, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaya {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaya>;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: any /* com.google.android.gms.internal.ads.zzbhn*/, param3: number, param4: com.google.android.gms.ads.appopen.AppOpenAd.AppOpenAdLoadCallback);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayb>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayc extends com.google.android.gms.internal.ads.zzaws {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayd>;
							public onConnected(param0: globalAndroid.os.Bundle): void;
							public onConnectionSuspended(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaye {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaye>;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayf>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayg>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzayg>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.ParcelFileDescriptor, param1: boolean, param2: boolean, param3: number, param4: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayh extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzayg>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayh>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayi extends java.lang.Object /* com.google.android.gms.ads.internal.zzc<com.google.android.gms.internal.ads.zzayl>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayi>;
							public getStartServiceAction(): string;
							public getServiceDescriptor(): string;
							public getApiFeatures(): native.Array<com.google.android.gms.common.Feature>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayj>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzayj>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayk extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzayj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayk>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayl extends com.google.android.gms.internal.ads.zzhs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaym {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaym>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayn extends java.lang.Object /* com.google.android.gms.internal.ads.zzchj<com.google.android.gms.internal.ads.zzayv>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayn>;
							public cancel(param0: boolean): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayo>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayp>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayq>;
							public close(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayr>;
							public onConnected(param0: globalAndroid.os.Bundle): void;
							public onConnectionSuspended(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzays {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzays>;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayu>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzayw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzbaq*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayx>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzazd*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayy extends java.lang.Object /* com.google.android.gms.internal.ads.zzgef<com.google.android.gms.internal.ads.zzayz>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzayz extends java.lang.Object /* com.google.android.gms.internal.ads.zzgee*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzayz>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.ads.zzayz>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaza extends com.google.android.gms.internal.ads.zzcgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazd>;
							public constructor();
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzaze {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzaze>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazf extends java.lang.Object /* com.google.android.gms.internal.ads.zzgef<com.google.android.gms.internal.ads.zzazh>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazg extends com.google.android.gms.internal.ads.zzgeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazh extends java.lang.Object /* com.google.android.gms.internal.ads.zzgee*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazh>;
							public static values(): any /* native.Array<com.google.android.gms.internal.ads.zzazh>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazi extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzazj,com.google.android.gms.internal.ads.zzazi>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazj extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzazj,com.google.android.gms.internal.ads.zzazi>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazk extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzazl,com.google.android.gms.internal.ads.zzazk>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazl extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzazl,com.google.android.gms.internal.ads.zzazk>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazm extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzazu,com.google.android.gms.internal.ads.zzazm>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazn extends java.lang.Object /* com.google.android.gms.internal.ads.zzgef<com.google.android.gms.internal.ads.zzazp>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazo extends com.google.android.gms.internal.ads.zzgeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazp extends java.lang.Object /* com.google.android.gms.internal.ads.zzgee*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazp>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.ads.zzazp>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazq extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzazr,com.google.android.gms.internal.ads.zzazq>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazr extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzazr,com.google.android.gms.internal.ads.zzazq>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazs extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzazt,com.google.android.gms.internal.ads.zzazs>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazt extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzazt,com.google.android.gms.internal.ads.zzazs>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazu extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzazu,com.google.android.gms.internal.ads.zzazm>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazv extends java.lang.Object /* com.google.android.gms.internal.ads.zzgef<com.google.android.gms.internal.ads.zzazx>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazw extends com.google.android.gms.internal.ads.zzgeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazx extends java.lang.Object /* com.google.android.gms.internal.ads.zzgee*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazx>;
							public static values(): any /* native.Array<com.google.android.gms.internal.ads.zzazx>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazy extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzazz,com.google.android.gms.internal.ads.zzazy>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzazz extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzazz,com.google.android.gms.internal.ads.zzazy>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzazz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzb extends com.google.android.gms.internal.ads.zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzb>;
							public constructor(param0: java.nio.ByteBuffer);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzba {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzba>;
							public constructor(param0: number, param1: any /* java.util.List<com.google.android.gms.internal.ads.zzu>*/, param2: number, param3: java.io.InputStream);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbaa extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbab,com.google.android.gms.internal.ads.zzbaa>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbaa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbab extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbab,com.google.android.gms.internal.ads.zzbaa>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbab>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbac extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbad,com.google.android.gms.internal.ads.zzbac>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbad extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbad,com.google.android.gms.internal.ads.zzbac>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbad>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbae extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbaf,com.google.android.gms.internal.ads.zzbae>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbae>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbaf extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbaf,com.google.android.gms.internal.ads.zzbae>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbaf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbag extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbah,com.google.android.gms.internal.ads.zzbag>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbag>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbah extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbah,com.google.android.gms.internal.ads.zzbag>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbah>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbai extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbam,com.google.android.gms.internal.ads.zzbai>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbai>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbaj extends java.lang.Object /* com.google.android.gms.internal.ads.zzgef<com.google.android.gms.internal.ads.zzbal>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbaj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbak extends com.google.android.gms.internal.ads.zzgeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbak>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbal extends java.lang.Object /* com.google.android.gms.internal.ads.zzgee*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbal>;
							public static values(): any /* native.Array<com.google.android.gms.internal.ads.zzbal>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbam extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbam,com.google.android.gms.internal.ads.zzbai>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbam>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzban extends java.lang.Object /* com.google.android.gms.internal.ads.zzgef<com.google.android.gms.internal.ads.zzbap>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzban>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbao extends com.google.android.gms.internal.ads.zzgeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbao>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbap extends java.lang.Object /* com.google.android.gms.internal.ads.zzgee*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbap>;
							public static values(): any /* native.Array<com.google.android.gms.internal.ads.zzbap>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbaq extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbar,com.google.android.gms.internal.ads.zzbaq>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbaq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbar extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbar,com.google.android.gms.internal.ads.zzbaq>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbar>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbas extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbat,com.google.android.gms.internal.ads.zzbas>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbas>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbat extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbat,com.google.android.gms.internal.ads.zzbas>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbat>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbau extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbav,com.google.android.gms.internal.ads.zzbau>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbau>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbav extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbav,com.google.android.gms.internal.ads.zzbau>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbav>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbaw extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbax,com.google.android.gms.internal.ads.zzbaw>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbaw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbax extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbax,com.google.android.gms.internal.ads.zzbaw>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbax>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbay extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbbf,com.google.android.gms.internal.ads.zzbay>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbay>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbaz extends java.lang.Object /* com.google.android.gms.internal.ads.zzgef<com.google.android.gms.internal.ads.zzbbb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbaz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbb>;
							public close(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbba extends com.google.android.gms.internal.ads.zzgeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbba>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbb extends java.lang.Object /* com.google.android.gms.internal.ads.zzgee*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbb>;
							public static values(): any /* native.Array<com.google.android.gms.internal.ads.zzbbb>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbc extends java.lang.Object /* com.google.android.gms.internal.ads.zzgef<com.google.android.gms.internal.ads.zzbbe>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbd extends com.google.android.gms.internal.ads.zzgeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbe extends java.lang.Object /* com.google.android.gms.internal.ads.zzgee*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbe>;
							public static values(): any /* native.Array<com.google.android.gms.internal.ads.zzbbe>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbf extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbbf,com.google.android.gms.internal.ads.zzbay>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbg extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbbh,com.google.android.gms.internal.ads.zzbbg>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbh extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbbh,com.google.android.gms.internal.ads.zzbbg>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbi extends java.lang.Object /* com.google.android.gms.internal.ads.zzgei<java.lang.Integer,com.google.android.gms.internal.ads.zzazx>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbj extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbbk,com.google.android.gms.internal.ads.zzbbj>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbk extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbbk,com.google.android.gms.internal.ads.zzbbj>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbl extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbbp,com.google.android.gms.internal.ads.zzbbl>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbm extends java.lang.Object /* com.google.android.gms.internal.ads.zzgef<com.google.android.gms.internal.ads.zzbbo>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbn extends com.google.android.gms.internal.ads.zzgeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbo extends java.lang.Object /* com.google.android.gms.internal.ads.zzgee*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbo>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.ads.zzbbo>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbp extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbbp,com.google.android.gms.internal.ads.zzbbl>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbq extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbbr,com.google.android.gms.internal.ads.zzbbq>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbr extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbbr,com.google.android.gms.internal.ads.zzbbq>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbs extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbbt,com.google.android.gms.internal.ads.zzbbs>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbt extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbbt,com.google.android.gms.internal.ads.zzbbs>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbu extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbbv,com.google.android.gms.internal.ads.zzbbu>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbv extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbbv,com.google.android.gms.internal.ads.zzbbu>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbw extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbbx,com.google.android.gms.internal.ads.zzbbw>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbx extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbbx,com.google.android.gms.internal.ads.zzbbw>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbby extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbbz,com.google.android.gms.internal.ads.zzbby>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbby>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbbz extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbbz,com.google.android.gms.internal.ads.zzbby>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbbz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbca extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbcb,com.google.android.gms.internal.ads.zzbca>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbca>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcb extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbcb,com.google.android.gms.internal.ads.zzbca>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcc extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbcd,com.google.android.gms.internal.ads.zzbcc>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcd extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbcd,com.google.android.gms.internal.ads.zzbcc>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbce extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbcf,com.google.android.gms.internal.ads.zzbce>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbce>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcf extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbcf,com.google.android.gms.internal.ads.zzbce>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcg extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbck,com.google.android.gms.internal.ads.zzbcg>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbch extends java.lang.Object /* com.google.android.gms.internal.ads.zzgef<com.google.android.gms.internal.ads.zzbcj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbch>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbci extends com.google.android.gms.internal.ads.zzgeg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbci>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcj extends java.lang.Object /* com.google.android.gms.internal.ads.zzgee*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcj>;
							public static values(): any /* native.Array<com.google.android.gms.internal.ads.zzbcj>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbck extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbck,com.google.android.gms.internal.ads.zzbcg>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbck>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcl extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbcm,com.google.android.gms.internal.ads.zzbcl>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcm extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbcm,com.google.android.gms.internal.ads.zzbcl>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcn extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbco,com.google.android.gms.internal.ads.zzbcn>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbco extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbco,com.google.android.gms.internal.ads.zzbcn>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbco>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcp extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbcq,com.google.android.gms.internal.ads.zzbcp>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcq extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbcq,com.google.android.gms.internal.ads.zzbcp>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcr extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbcs,com.google.android.gms.internal.ads.zzbcr>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcs extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbcs,com.google.android.gms.internal.ads.zzbcr>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbct extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbcu,com.google.android.gms.internal.ads.zzbct>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbct>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcu extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbcu,com.google.android.gms.internal.ads.zzbct>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcv extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbcw,com.google.android.gms.internal.ads.zzbcv>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcw extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbcw,com.google.android.gms.internal.ads.zzbcv>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcx extends java.lang.Object /* com.google.android.gms.internal.ads.zzgdy<com.google.android.gms.internal.ads.zzbcy,com.google.android.gms.internal.ads.zzbcx>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcy extends java.lang.Object /* com.google.android.gms.internal.ads.zzgec<com.google.android.gms.internal.ads.zzbcy,com.google.android.gms.internal.ads.zzbcx>*/ implements any /* com.google.android.gms.internal.ads.zzgfl*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbcz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbcz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbcz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAdClicked(): void });
							public constructor();
							public onAdClicked(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbd extends com.google.android.gms.internal.ads.zzaq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbd>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbc*/, param1: javax.net.ssl.SSLSocketFactory);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbda extends com.google.android.gms.internal.ads.zzbfa {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbda>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbcz*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdb>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdb>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdc extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdd>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdd>*/;
							public constructor(param0: number, param1: string, param2: string, param3: any /* com.google.android.gms.internal.ads.zzbdd*/, param4: globalAndroid.os.IBinder);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbde extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbde>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdf extends com.google.android.gms.internal.ads.zzbfd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdf>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.ads.AdListener);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdg<AdT> extends java.lang.Object /* com.google.android.gms.internal.ads.zzbfg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdg>;
							public constructor();
							public constructor(param0: com.google.android.gms.ads.AdLoadCallback<any>, param1: any);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdh extends java.lang.Object /* com.google.android.gms.dynamic.RemoteCreator<com.google.android.gms.internal.ads.zzbfo>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdh>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdi extends com.google.android.gms.internal.ads.zzcgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdj extends java.lang.Object /* com.google.android.gms.dynamic.RemoteCreator<com.google.android.gms.internal.ads.zzbfs>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdj>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdk>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdk>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(
								param0: number,
								param1: number,
								param2: globalAndroid.os.Bundle,
								param3: number,
								param4: java.util.List<string>,
								param5: boolean,
								param6: number,
								param7: boolean,
								param8: string,
								param9: any /* com.google.android.gms.internal.ads.zzbir*/,
								param10: globalAndroid.location.Location,
								param11: string,
								param12: globalAndroid.os.Bundle,
								param13: globalAndroid.os.Bundle,
								param14: java.util.List<string>,
								param15: string,
								param16: string,
								param17: boolean,
								param18: any /* com.google.android.gms.internal.ads.zzbdb*/,
								param19: number,
								param20: string,
								param21: java.util.List<string>,
								param22: number,
								param23: string
							);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdl>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdm extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdm>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdn>;
							public compare(param0: any, param1: any): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdo>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdp>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdp>*/;
							public constructor();
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.ads.AdSize);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: native.Array<com.google.android.gms.ads.AdSize>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdq extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdp>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdq>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdr>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdr>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: string, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbds extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbds>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdt>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdt>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: number, param2: any /* com.google.android.gms.internal.ads.zzbdd*/, param3: globalAndroid.os.Bundle);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdu extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdt>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdu>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdv>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdv>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdw extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbdv>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdw>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdx>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdy extends com.google.android.gms.internal.ads.zzcgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbdz extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbzr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbdz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbe {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbea extends com.google.android.gms.internal.ads.zzcgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbea>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbeb extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzcfo>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbeb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbec extends com.google.android.gms.internal.ads.zzcgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbec>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbed extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbzf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbed>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbee extends com.google.android.gms.internal.ads.zzcgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbee>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbef extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbqq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbef>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbeg extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbfr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbeg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbeh extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbfr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbeh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbei extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbfr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbei>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbej extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbfr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbej>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbek extends com.google.android.gms.internal.ads.zzcgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbek>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbel extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbfn>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbel>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbem extends com.google.android.gms.internal.ads.zzcgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbem>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzben extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbgi>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzben>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbeo extends com.google.android.gms.internal.ads.zzcgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbeo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbep extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbmm>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbep>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbeq extends com.google.android.gms.internal.ads.zzcgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbeq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzber extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzbms>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzber>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbes extends java.lang.Object /* com.google.android.gms.internal.ads.zzbeu<com.google.android.gms.internal.ads.zzcct>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbes>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbet {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbet>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbdj*/, param1: any /* com.google.android.gms.internal.ads.zzbdh*/, param2: any /* com.google.android.gms.internal.ads.zzbia*/, param3: any /* com.google.android.gms.internal.ads.zzboh*/, param4: any /* com.google.android.gms.internal.ads.zzcdf*/, param5: any /* com.google.android.gms.internal.ads.zzbzo*/, param6: any /* com.google.android.gms.internal.ads.zzboi*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbeu<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbeu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbev {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbev>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbew extends com.google.android.gms.ads.AdListener {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbew>;
							public constructor();
							public onAdImpression(): void;
							public onAdOpened(): void;
							public onAdLoaded(): void;
							public onAdFailedToLoad(param0: com.google.android.gms.ads.LoadAdError): void;
							public onAdClosed(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbex {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbex>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbey extends com.google.android.gms.internal.ads.zzbge {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbey>;
							public constructor();
							public constructor(param0: com.google.android.gms.ads.FullScreenContentCallback);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbez extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbfb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbez>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbfa extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbfb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfa>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbfb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfc extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbfe {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbfd extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbfe {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfd>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfe {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfe>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbfe interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): void; zzc(param0: number): void; zze(): void; zzf(): void; zzg(): void; zzh(): void; zzi(): void; zzd(param0: any /* com.google.android.gms.internal.ads.zzbdd*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbff extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbfh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbff>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbfg extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbfh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfg>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbfh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): void; zzc(param0: any /* com.google.android.gms.internal.ads.zzbdd*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfi extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbfk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbfj extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbfk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfj>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbfk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: any /* com.google.android.gms.internal.ads.zzbdk*/): void; zzf(): string; zzg(): boolean; zzh(): string; zzi(param0: any /* com.google.android.gms.internal.ads.zzbdk*/, param1: number): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfl extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbfn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbfm extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbfn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfm>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbfn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zze(): any /* com.google.android.gms.internal.ads.zzbfk*/;
								zzf(param0: any /* com.google.android.gms.internal.ads.zzbfe*/): void;
								zzg(param0: any /* com.google.android.gms.internal.ads.zzbng*/): void;
								zzh(param0: any /* com.google.android.gms.internal.ads.zzbnj*/): void;
								zzi(param0: string, param1: any /* com.google.android.gms.internal.ads.zzbnp*/, param2: any /* com.google.android.gms.internal.ads.zzbnm*/): void;
								zzj(param0: any /* com.google.android.gms.internal.ads.zzblw*/): void;
								zzk(param0: any /* com.google.android.gms.internal.ads.zzbnt*/, param1: any /* com.google.android.gms.internal.ads.zzbdp*/): void;
								zzl(param0: com.google.android.gms.ads.formats.PublisherAdViewOptions): void;
								zzm(param0: any /* com.google.android.gms.internal.ads.zzbnw*/): void;
								zzn(param0: any /* com.google.android.gms.internal.ads.zzbry*/): void;
								zzo(param0: any /* com.google.android.gms.internal.ads.zzbsh*/): void;
								zzp(param0: com.google.android.gms.ads.formats.AdManagerAdViewOptions): void;
								zzq(param0: any /* com.google.android.gms.internal.ads.zzbgc*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfo extends com.google.android.gms.internal.ads.zzhs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfp extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbfr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbfq extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbfr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfq>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbfr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): com.google.android.gms.dynamic.IObjectWrapper;
								zzc(): void;
								zzbZ(): boolean;
								zze(param0: any /* com.google.android.gms.internal.ads.zzbdk*/): boolean;
								zzf(): void;
								zzg(): void;
								zzh(param0: any /* com.google.android.gms.internal.ads.zzbfe*/): void;
								zzi(param0: any /* com.google.android.gms.internal.ads.zzbfy*/): void;
								zzl(): void;
								zzm(): void;
								zzn(): any /* com.google.android.gms.internal.ads.zzbdp*/;
								zzo(param0: any /* com.google.android.gms.internal.ads.zzbdp*/): void;
								zzp(param0: any /* com.google.android.gms.internal.ads.zzcaa*/): void;
								zzq(param0: any /* com.google.android.gms.internal.ads.zzcad*/, param1: string): void;
								zzr(): string;
								zzx(param0: any /* com.google.android.gms.internal.ads.zzbki*/): void;
								zzy(param0: any /* com.google.android.gms.internal.ads.zzbfb*/): void;
								zzz(param0: boolean): void;
								zzA(): boolean;
								zzB(param0: any /* com.google.android.gms.internal.ads.zzccg*/): void;
								zzC(param0: string): void;
								zzE(): any /* com.google.android.gms.internal.ads.zzbhg*/;
								zzF(param0: any /* com.google.android.gms.internal.ads.zzbiv*/): void;
								zzG(param0: any /* com.google.android.gms.internal.ads.zzbhk*/): void;
								zzu(): string;
								zzv(): any /* com.google.android.gms.internal.ads.zzbfy*/;
								zzw(): any /* com.google.android.gms.internal.ads.zzbfe*/;
								zzJ(param0: boolean): void;
								zzs(): string;
								zzj(param0: any /* com.google.android.gms.internal.ads.zzbfv*/): void;
								zzk(): globalAndroid.os.Bundle;
								zzD(param0: string): void;
								zzH(param0: any /* com.google.android.gms.internal.ads.zzbdv*/): void;
								zzI(param0: any /* com.google.android.gms.internal.ads.zzaxv*/): void;
								zzt(): any /* com.google.android.gms.internal.ads.zzbhd*/;
								zzO(param0: any /* com.google.android.gms.internal.ads.zzbha*/): void;
								zzP(param0: any /* com.google.android.gms.internal.ads.zzbdk*/, param1: any /* com.google.android.gms.internal.ads.zzbfh*/): void;
								zzQ(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzR(param0: any /* com.google.android.gms.internal.ads.zzbgf*/): void;
								zzab(param0: any /* com.google.android.gms.internal.ads.zzbgc*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfs extends com.google.android.gms.internal.ads.zzhs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbft extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbfv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbft>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbfu extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbfv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbfv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfw extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbfy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbfx extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbfy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfx>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfy>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbfy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: string, param1: string): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbfz extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbgb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbfz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbg>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzat*/, param1: number);
							public close(): void;
							public write(param0: native.Array<number>, param1: number, param2: number): void;
							public finalize(): void;
							public write(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbga extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbgb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbga>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbgb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.internal.ads.zzbdp*/, param2: string, param3: any /* com.google.android.gms.internal.ads.zzbvh*/, param4: number): any /* com.google.android.gms.internal.ads.zzbfr*/;
								zzc(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.internal.ads.zzbdp*/, param2: string, param3: any /* com.google.android.gms.internal.ads.zzbvh*/, param4: number): any /* com.google.android.gms.internal.ads.zzbfr*/;
								zzd(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: any /* com.google.android.gms.internal.ads.zzbvh*/, param3: number): any /* com.google.android.gms.internal.ads.zzbfn*/;
								zze(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper): any /* com.google.android.gms.internal.ads.zzbmm*/;
								zzf(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.internal.ads.zzbvh*/, param2: number): any /* com.google.android.gms.internal.ads.zzccd*/;
								zzg(param0: com.google.android.gms.dynamic.IObjectWrapper): any /* com.google.android.gms.internal.ads.zzbzr*/;
								zzh(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): any /* com.google.android.gms.internal.ads.zzbgi*/;
								zzi(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.internal.ads.zzbdp*/, param2: string, param3: number): any /* com.google.android.gms.internal.ads.zzbfr*/;
								zzj(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: com.google.android.gms.dynamic.IObjectWrapper): any /* com.google.android.gms.internal.ads.zzbms*/;
								zzk(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: any /* com.google.android.gms.internal.ads.zzbvh*/, param3: number): any /* com.google.android.gms.internal.ads.zzcct*/;
								zzl(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.internal.ads.zzbdp*/, param2: string, param3: any /* com.google.android.gms.internal.ads.zzbvh*/, param4: number): any /* com.google.android.gms.internal.ads.zzbfr*/;
								zzm(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.internal.ads.zzbvh*/, param2: number): any /* com.google.android.gms.internal.ads.zzcfo*/;
								zzn(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.internal.ads.zzbvh*/, param2: number): any /* com.google.android.gms.internal.ads.zzbzf*/;
								zzo(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.internal.ads.zzbvh*/, param2: number, param3: any /* com.google.android.gms.internal.ads.zzbqn*/): any /* com.google.android.gms.internal.ads.zzbqq*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgc extends com.google.android.gms.internal.ads.zzhs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgd extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbgf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbge extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbgf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbge>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbgf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.ads.zzbdd*/): void; zzc(): void; zzd(): void; zze(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgg extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbgi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbgh extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbgi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgh>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbgi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zze(): void;
								zzf(param0: number): void;
								zzg(param0: string): void;
								zzh(param0: boolean): void;
								zzi(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string): void;
								zzj(param0: string, param1: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzk(): number;
								zzl(): boolean;
								zzm(): string;
								zzn(param0: string): void;
								zzo(param0: any /* com.google.android.gms.internal.ads.zzbvh*/): void;
								zzp(param0: any /* com.google.android.gms.internal.ads.zzbrt*/): void;
								zzq(): any /* java.util.List<com.google.android.gms.internal.ads.zzbrm>*/;
								zzr(param0: any /* com.google.android.gms.internal.ads.zzbip*/): void;
								zzs(): void;
								zzt(param0: any /* com.google.android.gms.internal.ads.zzbgu*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgj extends com.google.android.gms.internal.ads.zzhs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgk extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbgm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbgl extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbgm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgl>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbgm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgn extends com.google.android.gms.internal.ads.zzbgl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgn>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.ads.MuteThisAdListener);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgo extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbgq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbgp extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbgq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgp>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbgq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): string; zzf(): string });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgr extends com.google.android.gms.ads.MuteThisAdReason {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgr>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbgq*/);
							public toString(): string;
							public getDescription(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgs extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbgt extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgt>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbgu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: any /* com.google.android.gms.internal.ads.zzbdd*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgv extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbgx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbgw extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbgx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgw>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbgx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbgy extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbha {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbgz extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbha {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbgz>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbh extends java.lang.Object /* com.google.android.gms.internal.ads.zzac<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbh>;
							public constructor(param0: number, param1: string, param2: any /* com.google.android.gms.internal.ads.zzah<string>*/, param3: any /* com.google.android.gms.internal.ads.zzag*/);
							public constructor(param0: number, param1: string, param2: any /* com.google.android.gms.internal.ads.zzag*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbha {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbha>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbha interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: any /* com.google.android.gms.internal.ads.zzbdr*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhb extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbhd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbhc extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbhd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhc>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbhd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): string; zzf(): string; zzg(): any /* java.util.List<com.google.android.gms.internal.ads.zzbdt>*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhe extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbhg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbhf extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbhg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhf>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbhg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): void; zzf(): void; zzg(param0: boolean): void; zzh(): boolean; zzi(): number; zzj(): number; zzk(): number; zzl(param0: any /* com.google.android.gms.internal.ads.zzbhj*/): void; zzm(): number; zzn(): boolean; zzo(): any /* com.google.android.gms.internal.ads.zzbhj*/; zzp(): boolean; zzq(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhh extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbhj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbhi extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbhj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhi>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbhj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): void; zzf(): void; zzg(): void; zzh(): void; zzi(param0: boolean): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhk>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbhk>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhl extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbhk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhl>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhm>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhn>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbhm*/, param1: com.google.android.gms.ads.search.SearchAdRequest);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbho extends com.google.android.gms.internal.ads.zzbew {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbho>;
							public onAdLoaded(): void;
							public onAdFailedToLoad(param0: com.google.android.gms.ads.LoadAdError): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhp>;
							public constructor(param0: globalAndroid.view.ViewGroup, param1: number);
							public constructor(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.util.AttributeSet, param2: boolean);
							public constructor(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.util.AttributeSet, param2: boolean, param3: number);
							public constructor(param0: globalAndroid.view.ViewGroup);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhq>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhr extends com.google.android.gms.ads.initialization.InitializationStatus {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhr>;
							public getAdapterStatusMap(): java.util.Map;
							public getAdapterStatusMap(): java.util.Map<string, com.google.android.gms.ads.initialization.AdapterStatus>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhs extends com.google.android.gms.ads.initialization.AdapterStatus {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhs>;
							public getLatency(): number;
							public getInitializationState(): com.google.android.gms.ads.initialization.AdapterStatus.State;
							public getDescription(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbht extends com.google.android.gms.internal.ads.zzbgt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbht>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhu extends com.google.android.gms.internal.ads.zzbrs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhw>;
							public constructor();
							public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
							public getType(param0: globalAndroid.net.Uri): string;
							public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
							public onCreate(): boolean;
							public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
							public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
							public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhx extends com.google.android.gms.internal.ads.zzbgp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhx>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhy>;
							public constructor(param0: string, param1: globalAndroid.os.Bundle, param2: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbhz extends com.google.android.gms.ads.MediaContent {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbhz>;
							public getAspectRatio(): number;
							public getVideoController(): com.google.android.gms.ads.VideoController;
							public getMainImage(): globalAndroid.graphics.drawable.Drawable;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbmf*/);
							public hasVideoContent(): boolean;
							public getDuration(): number;
							public getCurrentTime(): number;
							public setMainImage(param0: globalAndroid.graphics.drawable.Drawable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbi extends com.google.android.gms.internal.ads.zzax {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbia extends java.lang.Object /* com.google.android.gms.dynamic.RemoteCreator<com.google.android.gms.internal.ads.zzbgj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbia>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbib {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbib>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbic {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbic>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbid extends com.google.android.gms.internal.ads.zzbfj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbid>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbie extends com.google.android.gms.internal.ads.zzbfm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbie>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbif {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbif>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbig extends com.google.android.gms.internal.ads.zzbfq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbig>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbih {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbih>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbii extends com.google.android.gms.internal.ads.zzbgh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbii>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbij extends com.google.android.gms.internal.ads.zzbml {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbij>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbik extends com.google.android.gms.internal.ads.zzbmr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbik>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbil {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbil>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbim extends com.google.android.gms.internal.ads.zzccs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbim>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbin extends com.google.android.gms.internal.ads.zzbgw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbin>;
							public constructor();
							public constructor(param0: com.google.android.gms.ads.rewarded.OnAdMetadataChangedListener);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbio extends com.google.android.gms.internal.ads.zzbgz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbio>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.ads.OnPaidEventListener);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbip {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbip>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbip>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number);
							public constructor(param0: com.google.android.gms.ads.RequestConfiguration);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbiq extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbip>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbiq>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbir {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbir>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbir>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.google.android.gms.ads.search.SearchAdRequest);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbis extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbir>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbis>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbit extends com.google.android.gms.internal.ads.zzbny {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbit>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.ads.formats.ShouldDelayBannerRenderingListener);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbiu extends com.google.android.gms.internal.ads.zzbhi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbiu>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.ads.VideoController.VideoLifecycleCallbacks);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbiv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbiv>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbiv>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.google.android.gms.ads.VideoOptions);
							public constructor(param0: boolean, param1: boolean, param2: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbiw extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzbiv>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbiw>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbix extends java.util.concurrent.Callable<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbix>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbiy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbiy>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbiz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbiz>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbja extends com.google.android.gms.internal.ads.zzbjf<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbja>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjb extends com.google.android.gms.internal.ads.zzbjf<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjc extends com.google.android.gms.internal.ads.zzbjf<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjd extends com.google.android.gms.internal.ads.zzbjf<java.lang.Float> {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbje extends java.lang.Object /* com.google.android.gms.internal.ads.zzbjf<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbje>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbjf<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjg>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjh>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbji extends com.google.android.gms.internal.ads.zzfkn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbji>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjj extends com.google.android.gms.internal.ads.zzfkn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjk extends com.google.android.gms.internal.ads.zzbln {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjl>;
							public constructor();
							public onSharedPreferenceChanged(param0: globalAndroid.content.SharedPreferences, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjm extends com.google.android.gms.internal.ads.zzfkn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjn {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjq>;
							public constructor(param0: globalAndroid.content.Context, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjr>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjs>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjt>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbju {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbju>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjv extends com.google.android.gms.internal.ads.zzbjy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjw extends com.google.android.gms.internal.ads.zzbjy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjx extends com.google.android.gms.internal.ads.zzbjy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbjy {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjy>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbjz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbjz>;
							public constructor(param0: number, param1: string, param2: any /* com.google.android.gms.internal.ads.zzbjz*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbk extends java.lang.ThreadLocal<java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbka {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbka>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbkc*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkc>;
							public constructor(param0: boolean, param1: string, param2: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkd extends com.google.android.gms.internal.ads.zzbke {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkd>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.ads.internal.zzf*/, param1: string, param2: string);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbke extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbkf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbke>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbkf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): string; zzc(): string; zzd(param0: com.google.android.gms.dynamic.IObjectWrapper): void; zze(): void; zzf(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkg extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbki {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbkh extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbki {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbki {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbki>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbki interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: any /* com.google.android.gms.internal.ads.zzbkf*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbkj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkl>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkm>;
							public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.ScheduledExecutorService, param2: any /* com.google.android.gms.internal.ads.zzbko*/, param3: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkn extends java.lang.Object /* com.google.android.gms.internal.ads.zzgjg<com.google.android.gms.internal.ads.zzbkm>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkn>;
							public constructor(param0: com.google.android.gms.internal.ads.zzgju<globalAndroid.content.Context>, param1: com.google.android.gms.internal.ads.zzgju<java.util.concurrent.ScheduledExecutorService>, param2: any /* com.google.android.gms.internal.ads.zzgju<com.google.android.gms.internal.ads.zzbko>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbko {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbko>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkp<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkp>;
							public constructor(param0: string, param1: T, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkq<T> extends java.lang.Object /* com.google.android.gms.internal.ads.zzbkp<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkq>;
							public constructor(param0: string, param1: any, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbks {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbks>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbku {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbku>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbky {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbky>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbkz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbkz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbl extends com.google.android.gms.internal.ads.zzbm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbl>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbla {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbla>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblb {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbld {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbld>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzble {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzble>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblg {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbli {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbli>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblk {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbll {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbll>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbln {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbln>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbln interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: string, param1: boolean): java.lang.Boolean; zzb(param0: string, param1: number): java.lang.Long; zzc(param0: string, param1: number): java.lang.Double; zzd(param0: string, param1: string): string });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblp extends com.google.android.gms.internal.ads.zzblz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblp>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: string, param1: any /* java.util.List<com.google.android.gms.internal.ads.zzbls>*/, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: number, param6: number, param7: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblq>;
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.ads.zzblp*/, param2: globalAndroid.widget.RelativeLayout.LayoutParams);
							public onAttachedToWindow(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzblr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbls extends com.google.android.gms.internal.ads.zzbmh {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbls>;
							public constructor();
							public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.net.Uri, param2: number, param3: number, param4: number);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblt>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzblt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: com.google.android.gms.ads.MediaContent): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblu {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzblu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): void; zzb(param0: globalAndroid.view.MotionEvent): void; zzc(): org.json.JSONObject; zzd(): org.json.JSONObject });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzblv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: globalAndroid.widget.ImageView.ScaleType): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblw>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzblw>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: boolean, param2: number, param3: boolean, param4: number, param5: any /* com.google.android.gms.internal.ads.zzbiv*/, param6: boolean, param7: number);
							public constructor(param0: com.google.android.gms.ads.formats.NativeAdOptions);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzblx extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.ads.zzblw>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblx>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbly extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbma {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbly>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzblz extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbma {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzblz>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.ads.zzgis*/, param1: any /* com.google.android.gms.internal.ads.zzbq*/): any /* com.google.android.gms.internal.ads.zzbp*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbma {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbma>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbma interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): string; zzc(): any /* java.util.List<com.google.android.gms.internal.ads.zzbmi>*/ });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmb extends com.google.android.gms.ads.formats.NativeAd.AdChoicesInfo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmb>;
							public constructor();
							public getText(): string;
							public getImages(): java.util.List<com.google.android.gms.ads.formats.NativeAd.Image>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbma*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmc extends com.google.android.gms.ads.formats.NativeCustomTemplateAd.DisplayOpenMeasurement {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmc>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbnc*/);
							public start(): boolean;
							public setView(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmd extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbmf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbme extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbmf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbme>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmf {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbmf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(): number; zzf(param0: com.google.android.gms.dynamic.IObjectWrapper): void; zzg(): com.google.android.gms.dynamic.IObjectWrapper; zzh(): number; zzi(): number; zzj(): any /* com.google.android.gms.internal.ads.zzbhg*/; zzk(): boolean; zzl(param0: any /* com.google.android.gms.internal.ads.zzbnq*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmg extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbmi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbmh extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbmi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmh>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmi {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbmi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): com.google.android.gms.dynamic.IObjectWrapper; zzc(): globalAndroid.net.Uri; zzd(): number; zze(): number; zzf(): number });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmj extends com.google.android.gms.ads.formats.NativeAd.Image {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmj>;
							public constructor();
							public getUri(): globalAndroid.net.Uri;
							public getScale(): number;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbmi*/);
							public getDrawable(): globalAndroid.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmk extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbmm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbml extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbmm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbml>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbmm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: string, param1: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzc(param0: string): com.google.android.gms.dynamic.IObjectWrapper;
								zzd(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zze(): void;
								zzf(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
								zzg(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzbN(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzbO(param0: any /* com.google.android.gms.internal.ads.zzbmf*/): void;
								zzbM(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmn extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbmp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbmo extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbmp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbmp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: com.google.android.gms.dynamic.IObjectWrapper, param3: number): globalAndroid.os.IBinder });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmq extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbms {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbmr extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbms {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmr>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbms {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbms>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbms interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.dynamic.IObjectWrapper): void; zzc(): void; zzd(param0: com.google.android.gms.dynamic.IObjectWrapper): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmt extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbmv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbmu extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbmv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbmv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: com.google.android.gms.dynamic.IObjectWrapper): globalAndroid.os.IBinder });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbmw extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbmx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmw>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmx {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbmx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): com.google.android.gms.dynamic.IObjectWrapper;
								zzc(): string;
								zzd(): java.util.List;
								zze(): string;
								zzf(): any /* com.google.android.gms.internal.ads.zzbmi*/;
								zzg(): string;
								zzh(): number;
								zzi(): string;
								zzj(): string;
								zzk(): globalAndroid.os.Bundle;
								zzl(): void;
								zzm(): any /* com.google.android.gms.internal.ads.zzbhg*/;
								zzn(param0: globalAndroid.os.Bundle): void;
								zzo(param0: globalAndroid.os.Bundle): boolean;
								zzp(param0: globalAndroid.os.Bundle): void;
								zzq(): any /* com.google.android.gms.internal.ads.zzbma*/;
								zzr(): com.google.android.gms.dynamic.IObjectWrapper;
								zzs(): string;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbmy extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbmz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmy>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbmz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbmz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbmz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): com.google.android.gms.dynamic.IObjectWrapper;
								zzc(): string;
								zzd(): java.util.List;
								zze(): string;
								zzf(): any /* com.google.android.gms.internal.ads.zzbmi*/;
								zzg(): string;
								zzh(): string;
								zzi(): globalAndroid.os.Bundle;
								zzj(): void;
								zzk(): any /* com.google.android.gms.internal.ads.zzbhg*/;
								zzl(param0: globalAndroid.os.Bundle): void;
								zzm(param0: globalAndroid.os.Bundle): boolean;
								zzn(param0: globalAndroid.os.Bundle): void;
								zzo(): any /* com.google.android.gms.internal.ads.zzbma*/;
								zzp(): com.google.android.gms.dynamic.IObjectWrapper;
								zzq(): string;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbn extends com.google.android.gms.internal.ads.zzgir {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbn>;
							public constructor();
							public close(): void;
							public toString(): string;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzgis*/, param1: any /* com.google.android.gms.internal.ads.zzbm*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbna extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbnc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbna>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbnb extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbnc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnb>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbnc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: string): string; zzf(param0: string): any /* com.google.android.gms.internal.ads.zzbmi*/; zzg(): java.util.List<string>; zzh(): string; zzi(param0: string): void; zzj(): void; zzk(): any /* com.google.android.gms.internal.ads.zzbhg*/; zzl(): void; zzm(): com.google.android.gms.dynamic.IObjectWrapper; zzn(param0: com.google.android.gms.dynamic.IObjectWrapper): boolean; zzo(): boolean; zzp(): boolean; zzq(param0: com.google.android.gms.dynamic.IObjectWrapper): void; zzr(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnd extends com.google.android.gms.ads.formats.NativeCustomTemplateAd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnd>;
							public getCustomTemplateId(): string;
							public getVideoController(): com.google.android.gms.ads.VideoController;
							public getVideoMediaView(): com.google.android.gms.ads.formats.MediaView;
							public destroy(): void;
							public getAvailableAssetNames(): java.util.List<string>;
							public getDisplayOpenMeasurement(): com.google.android.gms.ads.formats.NativeCustomTemplateAd.DisplayOpenMeasurement;
							public getImage(param0: string): com.google.android.gms.ads.formats.NativeAd.Image;
							public performClick(param0: string): void;
							public recordImpression(): void;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbnc*/);
							public getText(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbne extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbng {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbne>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbnf extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbng {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbng {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbng>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbng interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: any /* com.google.android.gms.internal.ads.zzbmx*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnh extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbnj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbni extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbnj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbni>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbnj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: any /* com.google.android.gms.internal.ads.zzbmz*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnk extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbnm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbnl extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbnm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnl>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnm {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbnm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: any /* com.google.android.gms.internal.ads.zzbnc*/, param1: string): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnn extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbnp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbno extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbnp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbno>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbnp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: any /* com.google.android.gms.internal.ads.zzbnc*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnq extends com.google.android.gms.internal.ads.zzhs {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnr extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbnt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbns extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbnt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbns>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnt>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbnt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: any /* com.google.android.gms.internal.ads.zzbfr*/, param1: com.google.android.gms.dynamic.IObjectWrapper): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnu extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbnw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbnv extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbnw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnv>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbnw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: any /* com.google.android.gms.internal.ads.zzbof*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnx extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbnz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbny extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbnz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbny>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbnz {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbnz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbnz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.dynamic.IObjectWrapper): boolean });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbo {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzboa extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzboc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzboa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzbob extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzboc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbob>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzboc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzboc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzboc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zze(param0: string): void; zzf(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbod extends com.google.android.gms.internal.ads.zzhs implements com.google.android.gms.internal.ads.zzbof {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbod>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export abstract class zzboe extends com.google.android.gms.internal.ads.zzht implements com.google.android.gms.internal.ads.zzbof {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzboe>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbof {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbof>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbof interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zze(): string;
								zzf(): java.util.List;
								zzg(): string;
								zzh(): any /* com.google.android.gms.internal.ads.zzbmi*/;
								zzi(): string;
								zzj(): string;
								zzk(): number;
								zzl(): string;
								zzm(): string;
								zzn(): any /* com.google.android.gms.internal.ads.zzbhg*/;
								zzo(): string;
								zzp(): void;
								zzq(): any /* com.google.android.gms.internal.ads.zzbma*/;
								zzr(param0: globalAndroid.os.Bundle): void;
								zzs(param0: globalAndroid.os.Bundle): boolean;
								zzt(param0: globalAndroid.os.Bundle): void;
								zzu(): com.google.android.gms.dynamic.IObjectWrapper;
								zzv(): com.google.android.gms.dynamic.IObjectWrapper;
								zzw(): globalAndroid.os.Bundle;
								zzx(param0: any /* com.google.android.gms.internal.ads.zzboc*/): void;
								zzy(): void;
								zzz(): java.util.List;
								zzA(): boolean;
								zzB(param0: any /* com.google.android.gms.internal.ads.zzbgq*/): void;
								zzC(param0: any /* com.google.android.gms.internal.ads.zzbgm*/): void;
								zzD(): void;
								zzE(): void;
								zzF(): any /* com.google.android.gms.internal.ads.zzbmf*/;
								zzG(): boolean;
								zzH(): any /* com.google.android.gms.internal.ads.zzbhd*/;
								zzI(param0: any /* com.google.android.gms.internal.ads.zzbha*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbog extends com.google.android.gms.ads.formats.UnifiedNativeAd {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbog>;
							public getHeadline(): string;
							public performClick(param0: globalAndroid.os.Bundle): void;
							public reportTouchEvent(param0: globalAndroid.os.Bundle): void;
							public getPrice(): string;
							public isCustomClickGestureEnabled(): boolean;
							public getExtras(): globalAndroid.os.Bundle;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbof*/);
							public getAdChoicesInfo(): com.google.android.gms.ads.formats.NativeAd.AdChoicesInfo;
							public getVideoController(): com.google.android.gms.ads.VideoController;
							public recordCustomClickGesture(): void;
							public destroy(): void;
							public getResponseInfo(): com.google.android.gms.ads.ResponseInfo;
							/** @deprecated */
							public getVideoController(): com.google.android.gms.ads.VideoController;
							public getImages(): java.util.List<com.google.android.gms.ads.formats.NativeAd.Image>;
							public getBody(): string;
							public getIcon(): com.google.android.gms.ads.formats.NativeAd.Image;
							public constructor();
							/** @deprecated */
							public getMediationAdapterClassName(): string;
							public enableCustomClickGesture(): void;
							public setMuteThisAdListener(param0: com.google.android.gms.ads.MuteThisAdListener): void;
							public recordImpression(param0: globalAndroid.os.Bundle): boolean;
							public getAdvertiser(): string;
							public cancelUnconfirmedClick(): void;
							public setOnPaidEventListener(param0: com.google.android.gms.ads.OnPaidEventListener): void;
							public getMediaContent(): com.google.android.gms.ads.MediaContent;
							public setUnconfirmedClickListener(param0: com.google.android.gms.ads.formats.UnifiedNativeAd.UnconfirmedClickListener): void;
							public getCallToAction(): string;
							public isCustomMuteThisAdEnabled(): boolean;
							public muteThisAd(param0: com.google.android.gms.ads.MuteThisAdReason): void;
							public getMediationAdapterClassName(): string;
							public getStarRating(): java.lang.Double;
							public getStore(): string;
							public getMuteThisAdReasons(): java.util.List<com.google.android.gms.ads.MuteThisAdReason>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzboh extends java.lang.Object /* com.google.android.gms.dynamic.RemoteCreator<com.google.android.gms.internal.ads.zzbmp>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzboh>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzboi extends java.lang.Object /* com.google.android.gms.dynamic.RemoteCreator<com.google.android.gms.internal.ads.zzbmv>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzboi>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzboj {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzboj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbok extends com.google.android.gms.internal.ads.zzbnl {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbok>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbol extends com.google.android.gms.internal.ads.zzbno {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbol>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbom {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbom>;
							public constructor(param0: com.google.android.gms.ads.formats.NativeCustomTemplateAd.OnCustomTemplateAdLoadedListener, param1: com.google.android.gms.ads.formats.NativeCustomTemplateAd.OnCustomClickListener);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbon {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbon>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzboo extends com.google.android.gms.internal.ads.zzbns {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzboo>;
							public constructor();
							public constructor(param0: com.google.android.gms.ads.formats.OnAdManagerAdViewLoadedListener);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbop extends com.google.android.gms.internal.ads.zzbnv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbop>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.ads.formats.UnifiedNativeAd.OnUnifiedNativeAdLoadedListener);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzboq extends com.google.android.gms.internal.ads.zzbob {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzboq>;
							public constructor();
							public constructor(param0: com.google.android.gms.ads.formats.UnifiedNativeAd.UnconfirmedClickListener);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbor extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbor>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbos*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbos {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbos>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbos interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: string, param1: globalAndroid.os.Bundle): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbot extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbot>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbou*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbou {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbou>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbou interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzbS(param0: string, param1: string): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbov extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbov>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbow extends com.google.android.gms.internal.ads.zzbps {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbow>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbox extends com.google.android.gms.internal.ads.zzbps {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbox>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzboy extends com.google.android.gms.internal.ads.zzbps {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzboy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzboz extends com.google.android.gms.internal.ads.zzfju {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzboz>;
							public apply(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbp {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.ads.zzbq*/): void; zzb(): string; zzc(param0: any /* com.google.android.gms.internal.ads.zzgis*/, param1: java.nio.ByteBuffer, param2: number, param3: any /* com.google.android.gms.internal.ads.zzbm*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpa extends com.google.android.gms.internal.ads.zzfju {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpa>;
							public apply(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpb extends com.google.android.gms.internal.ads.zzfju {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpb>;
							public apply(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpc extends com.google.android.gms.internal.ads.zzbps {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpd extends com.google.android.gms.internal.ads.zzbps {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpe extends com.google.android.gms.internal.ads.zzbps {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpf extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpg extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbph extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbph>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpi extends java.lang.Object /* com.google.android.gms.internal.ads.zzfqa<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpj extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpk extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpl extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpm extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpn extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpo extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpp extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpq extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpr {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbps<ContextT> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbps>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbps interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(param0: ContextT, param1: java.util.Map<string, string>): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpt extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpt>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzdxo*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpu extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpu>;
							public constructor(param0: any /* com.google.android.gms.internal.ads.zzbpv*/, param1: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpv {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpv>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpw {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpx extends java.lang.Object /* com.google.android.gms.internal.ads.zzgjg<com.google.android.gms.internal.ads.zzbpv>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpx>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpy extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpy>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbpz extends java.lang.Object /* com.google.android.gms.internal.ads.zzbps<com.google.android.gms.internal.ads.zzcmr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbpz>;
							public constructor(param0: any /* com.google.android.gms.ads.internal.zzb*/, param1: any /* com.google.android.gms.internal.ads.zzbyk*/, param2: any /* com.google.android.gms.internal.ads.zzbyr*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbq {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.ads.zzbq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbqa extends com.google.android.gms.ads.internal.overlay.zzt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbqa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbqb extends com.google.android.gms.ads.internal.overlay.zzt {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbqb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module ads {
						export class zzbqc {
							public static class: java.lang.Class<com.google.android.gms.internal.ads.zzbqc>;
						}
					}
				}
			}
		}
	}
}
