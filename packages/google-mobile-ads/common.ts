import { CSSType, Property, View } from '@nativescript/core';
import { RequestOptions } from '.';

export abstract class BannerAdSizeBase {
	static get BANNER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get FULL_BANNER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get LARGE_BANNER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get LEADERBOARD(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get MEDIUM_RECTANGLE(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get SMART_BANNER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get ADAPTIVE_BANNER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get FLUID(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get WIDE_SKYSCRAPER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get INVALID(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get SEARCH(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}
}

export const sizeProperty = new Property<BannerAdBase, BannerAdSizeBase>({
	name: 'size',
});

export const unitIdProperty = new Property<BannerAdBase, BannerAdSizeBase>({
	name: 'unitId',
});

@CSSType('BannerAd')
export abstract class BannerAdBase extends View {
	static onAdClickedEvent = 'adClicked';
	static onAdClosedEvent = 'adClosed';
	static onAdFailedToLoadEvent = 'adFailedToLoad';
	static onAdLoadedEvent = 'adLoaded';
	static onAdOpenedEvent = 'adOpened';
	static onAdImpression = 'adImpression';
	static onAdFailedToShowFullScreenContent = 'adFailedToShowFullScreenContent';
	size: BannerAdSizeBase;
	unitId: BannerAdSizeBase;

	abstract load(options?: RequestOptions);

	abstract isLoading(): boolean;
}

sizeProperty.register(BannerAdBase);
unitIdProperty.register(BannerAdBase);

export enum MaxAdContentRating {
	G = 'G',
	MA = 'MA',
	PG = 'PG',
	T = 'T',
	UNSPECIFIED = 'UNSPECIFIED',
}

export enum AdEventType {
	CLICKED = 'adClicked',
	CLOSED = 'adClosed',
	LOADED = 'adLoaded',
	OPENED = 'adOpened',
	IMPRESSION = 'adImpression',
	FAILED_TO_SHOW_FULL_SCREEN_CONTENT = 'adFailedToShowFullScreenContent',
	FAILED_TO_LOAD_EVENT = 'adFailedToLoad',
}

export enum RewardedAdEventType {
	EARNED_REWARD = 'rewarded_earned_reward',
	LOADED = 'rewarded_loaded',
}

export enum AdapterStatusState {
	NOT_READY,
	READY,
}
