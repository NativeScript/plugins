/// <reference path="android-declarations.d.ts"/>
/// <reference path="../../google-maps/typings/android.d.ts"/>

declare module com {
	export module google {
		export module maps {
			export module android {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.maps.android.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.maps.android';
					public static BUILD_TYPE: string = 'release';
					public static TRAVIS: string = 'null';
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export class MathUtil {
					public static class: java.lang.Class<com.google.maps.android.MathUtil>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export class PolyUtil {
					public static class: java.lang.Class<com.google.maps.android.PolyUtil>;
					public static DEFAULT_TOLERANCE: number = 0.1;
					public static isLocationOnEdge(point: com.google.android.gms.maps.model.LatLng, polygon: java.util.List<com.google.android.gms.maps.model.LatLng>, geodesic: boolean, tolerance: number): boolean;
					public static containsLocation(dLng3: number, lat2: number, lng2: java.util.List<com.google.android.gms.maps.model.LatLng>, point2: boolean): boolean;
					public static isLocationOnPath(point: com.google.android.gms.maps.model.LatLng, polyline: java.util.List<com.google.android.gms.maps.model.LatLng>, geodesic: boolean, tolerance: number): boolean;
					public static locationIndexOnPath(point: com.google.android.gms.maps.model.LatLng, polyline: java.util.List<com.google.android.gms.maps.model.LatLng>, geodesic: boolean): number;
					public static isClosedPolygon(poly: java.util.List<com.google.android.gms.maps.model.LatLng>): boolean;
					public static decode(result: string): java.util.List<com.google.android.gms.maps.model.LatLng>;
					public static containsLocation(point: com.google.android.gms.maps.model.LatLng, polygon: java.util.List<com.google.android.gms.maps.model.LatLng>, geodesic: boolean): boolean;
					public static isLocationOnPath(point: com.google.android.gms.maps.model.LatLng, polyline: java.util.List<com.google.android.gms.maps.model.LatLng>, geodesic: boolean): boolean;
					public static locationIndexOnPath(point: com.google.android.gms.maps.model.LatLng, poly: java.util.List<com.google.android.gms.maps.model.LatLng>, geodesic: boolean, tolerance: number): number;
					public static simplify(OFFSET: java.util.List<com.google.android.gms.maps.model.LatLng>, stackValCurMax: number): java.util.List<com.google.android.gms.maps.model.LatLng>;
					public static distanceToLine(p: com.google.android.gms.maps.model.LatLng, start: com.google.android.gms.maps.model.LatLng, end: com.google.android.gms.maps.model.LatLng): number;
					public static encode(lat: java.util.List<com.google.android.gms.maps.model.LatLng>): string;
					public static isLocationOnEdge(point: com.google.android.gms.maps.model.LatLng, polygon: java.util.List<com.google.android.gms.maps.model.LatLng>, geodesic: boolean): boolean;
					public static locationIndexOnEdgeOrPath(lat2: com.google.android.gms.maps.model.LatLng, lng2: java.util.List<com.google.android.gms.maps.model.LatLng>, point2: boolean, dy: boolean, len2: number): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export class ResponseStreetView {
					public static class: java.lang.Class<com.google.maps.android.ResponseStreetView>;
					public toString(): string;
					public constructor(status: com.google.maps.android.Status);
					public component1(): com.google.maps.android.Status;
					public equals(other: any): boolean;
					public copy(status: com.google.maps.android.Status): com.google.maps.android.ResponseStreetView;
					public hashCode(): number;
					public getStatus(): com.google.maps.android.Status;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export class Source {
					public static class: java.lang.Class<com.google.maps.android.Source>;
					public static DEFAULT: com.google.maps.android.Source;
					public static OUTDOOR: com.google.maps.android.Source;
					public static values(): androidNative.Array<com.google.maps.android.Source>;
					public getValue(): string;
					public setValue(value: string): void;
					public static getEntries(): any;
					public static valueOf(value: string): com.google.maps.android.Source;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export class SphericalUtil {
					public static class: java.lang.Class<com.google.maps.android.SphericalUtil>;
					public static computeOffsetOrigin(to: com.google.android.gms.maps.model.LatLng, distance: number, heading: number): com.google.android.gms.maps.model.LatLng;
					public static computeSignedArea(path: java.util.List<com.google.android.gms.maps.model.LatLng>): number;
					public static computeOffset(from: com.google.android.gms.maps.model.LatLng, distance: number, heading: number): com.google.android.gms.maps.model.LatLng;
					public static computeDistanceBetween(from: com.google.android.gms.maps.model.LatLng, to: com.google.android.gms.maps.model.LatLng): number;
					public static computeArea(path: java.util.List<com.google.android.gms.maps.model.LatLng>): number;
					public static computeHeading(from: com.google.android.gms.maps.model.LatLng, to: com.google.android.gms.maps.model.LatLng): number;
					public static computeLength(prevLat: java.util.List<com.google.android.gms.maps.model.LatLng>): number;
					public static interpolate(from: com.google.android.gms.maps.model.LatLng, to: com.google.android.gms.maps.model.LatLng, fraction: number): com.google.android.gms.maps.model.LatLng;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export class Status {
					public static class: java.lang.Class<com.google.maps.android.Status>;
					public static OK: com.google.maps.android.Status;
					public static ZERO_RESULTS: com.google.maps.android.Status;
					public static NOT_FOUND: com.google.maps.android.Status;
					public static REQUEST_DENIED: com.google.maps.android.Status;
					public static OVER_QUERY_LIMIT: com.google.maps.android.Status;
					public static INVALID_REQUEST: com.google.maps.android.Status;
					public static UNKNOWN_ERROR: com.google.maps.android.Status;
					public static getEntries(): any;
					public static values(): androidNative.Array<com.google.maps.android.Status>;
					public static valueOf(value: string): com.google.maps.android.Status;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export class StreetViewUtils {
					public static class: java.lang.Class<com.google.maps.android.StreetViewUtils>;
					public constructor();
				}
				export module StreetViewUtils {
					export class Companion {
						public static class: java.lang.Class<com.google.maps.android.StreetViewUtils.Companion>;
						public fetchStreetViewData($this$fetchStreetViewData_u24lambda_u240: com.google.android.gms.maps.model.LatLng, urlString: string, this_: com.google.maps.android.Source, latLng: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export class Cluster<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.maps.android.clustering.Cluster<any>>;
						/**
						 * Constructs a new instance of the com.google.maps.android.clustering.Cluster<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getPosition(): com.google.android.gms.maps.model.LatLng; getItems(): java.util.Collection<T>; getSize(): number });
						public constructor();
						public getSize(): number;
						public getPosition(): com.google.android.gms.maps.model.LatLng;
						public getItems(): java.util.Collection<T>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export class ClusterItem {
						public static class: java.lang.Class<com.google.maps.android.clustering.ClusterItem>;
						/**
						 * Constructs a new instance of the com.google.maps.android.clustering.ClusterItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getPosition(): com.google.android.gms.maps.model.LatLng; getTitle(): string; getSnippet(): string; getZIndex(): java.lang.Float });
						public constructor();
						public getZIndex(): java.lang.Float;
						public getPosition(): com.google.android.gms.maps.model.LatLng;
						public getSnippet(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export class ClusterManager<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.maps.android.clustering.ClusterManager<any>>;
						public setRenderer(renderer: com.google.maps.android.clustering.view.ClusterRenderer<T>): void;
						public setOnClusterItemClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<T>): void;
						public getRenderer(): com.google.maps.android.clustering.view.ClusterRenderer<T>;
						public getAlgorithm(): com.google.maps.android.clustering.algo.Algorithm<T>;
						public setOnClusterClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<T>): void;
						public constructor(context: globalAndroid.content.Context, map: com.google.android.gms.maps.GoogleMap);
						public getClusterMarkerCollection(): com.google.maps.android.collections.MarkerManager.Collection;
						public updateItem(item: T): boolean;
						public constructor(context: globalAndroid.content.Context, map: com.google.android.gms.maps.GoogleMap, markerManager: com.google.maps.android.collections.MarkerManager);
						public clearItems(): void;
						public addItems(items: java.util.Collection<T>): boolean;
						public setOnClusterInfoWindowClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<T>): void;
						public addItem(myItem: T): boolean;
						public onCameraIdle(): void;
						public onInfoWindowClick(marker: com.google.android.gms.maps.model.Marker): void;
						public onMarkerClick(marker: com.google.android.gms.maps.model.Marker): boolean;
						public setOnClusterItemInfoWindowClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<T>): void;
						public setOnClusterItemInfoWindowLongClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<T>): void;
						public setAlgorithm(algorithm: com.google.maps.android.clustering.algo.Algorithm<T>): void;
						public cluster(): void;
						public setOnClusterInfoWindowLongClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<T>): void;
						public removeItems(items: java.util.Collection<T>): boolean;
						public diff(item: java.util.Collection<T>, this_: java.util.Collection<T>, add: java.util.Collection<T>): void;
						public setAlgorithm(this_: com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<T>): void;
						public getMarkerCollection(): com.google.maps.android.collections.MarkerManager.Collection;
						public setAnimation(animate: boolean): void;
						public getMarkerManager(): com.google.maps.android.collections.MarkerManager;
						public removeItem(item: T): boolean;
					}
					export module ClusterManager {
						export class ClusterTask extends globalAndroid.os.AsyncTask<java.lang.Float, java.lang.Void, java.util.Set<any>> {
							public static class: java.lang.Class<com.google.maps.android.clustering.ClusterManager.ClusterTask>;
							public onPostExecute(clusters: java.util.Set<any>): void;
							public doInBackground(zoom: androidNative.Array<java.lang.Float>): java.util.Set<any>;
						}
						export class OnClusterClickListener<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<any>>;
							/**
							 * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onClusterClick(param0: com.google.maps.android.clustering.Cluster<T>): boolean });
							public constructor();
							public onClusterClick(param0: com.google.maps.android.clustering.Cluster<T>): boolean;
						}
						export class OnClusterInfoWindowClickListener<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<any>>;
							/**
							 * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterInfoWindowClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onClusterInfoWindowClick(param0: com.google.maps.android.clustering.Cluster<T>): void });
							public constructor();
							public onClusterInfoWindowClick(param0: com.google.maps.android.clustering.Cluster<T>): void;
						}
						export class OnClusterInfoWindowLongClickListener<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<any>>;
							/**
							 * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterInfoWindowLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onClusterInfoWindowLongClick(param0: com.google.maps.android.clustering.Cluster<T>): void });
							public constructor();
							public onClusterInfoWindowLongClick(param0: com.google.maps.android.clustering.Cluster<T>): void;
						}
						export class OnClusterItemClickListener<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<any>>;
							/**
							 * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onClusterItemClick(param0: T): boolean });
							public constructor();
							public onClusterItemClick(param0: T): boolean;
						}
						export class OnClusterItemInfoWindowClickListener<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<any>>;
							/**
							 * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterItemInfoWindowClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onClusterItemInfoWindowClick(param0: T): void });
							public constructor();
							public onClusterItemInfoWindowClick(param0: T): void;
						}
						export class OnClusterItemInfoWindowLongClickListener<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<any>>;
							/**
							 * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterItemInfoWindowLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onClusterItemInfoWindowLongClick(param0: T): void });
							public constructor();
							public onClusterItemInfoWindowLongClick(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export module algo {
						export abstract class AbstractAlgorithm<T> extends com.google.maps.android.clustering.algo.Algorithm<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.AbstractAlgorithm<any>>;
							public constructor();
							public addItems(param0: java.util.Collection<any>): boolean;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public getClusters(param0: number): java.util.Set<any>;
							public unlock(): void;
							public addItem(param0: any): boolean;
							public removeItem(param0: any): boolean;
							public getItems(): java.util.Collection<any>;
							public clearItems(): void;
							public lock(): void;
							public updateItem(param0: any): boolean;
							public getMaxDistanceBetweenClusteredItems(): number;
							public removeItems(param0: java.util.Collection<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export module algo {
						export class Algorithm<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.Algorithm<any>>;
							/**
							 * Constructs a new instance of the com.google.maps.android.clustering.algo.Algorithm<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { addItem(param0: T): boolean; addItems(param0: java.util.Collection<T>): boolean; clearItems(): void; removeItem(param0: T): boolean; updateItem(param0: T): boolean; removeItems(param0: java.util.Collection<T>): boolean; getClusters(param0: number): java.util.Set<any>; getItems(): java.util.Collection<T>; setMaxDistanceBetweenClusteredItems(param0: number): void; getMaxDistanceBetweenClusteredItems(): number; lock(): void; unlock(): void });
							public constructor();
							public addItem(param0: T): boolean;
							public updateItem(param0: T): boolean;
							public addItems(param0: java.util.Collection<T>): boolean;
							public clearItems(): void;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public lock(): void;
							public getClusters(param0: number): java.util.Set<any>;
							public removeItem(param0: T): boolean;
							public getMaxDistanceBetweenClusteredItems(): number;
							public unlock(): void;
							public removeItems(param0: java.util.Collection<T>): boolean;
							public getItems(): java.util.Collection<T>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export module algo {
						export class GridBasedAlgorithm<T> extends com.google.maps.android.clustering.algo.AbstractAlgorithm<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.GridBasedAlgorithm<any>>;
							public constructor();
							public addItems(param0: java.util.Collection<any>): boolean;
							public removeItem(item: any): boolean;
							public addItems(items: java.util.Collection<any>): boolean;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public setMaxDistanceBetweenClusteredItems(maxDistance: number): void;
							public getClusters(param0: number): java.util.Set<any>;
							public removeItems(items: java.util.Collection<any>): boolean;
							public addItem(item: any): boolean;
							public addItem(param0: any): boolean;
							public unlock(): void;
							public removeItem(param0: any): boolean;
							public getItems(): java.util.Collection<any>;
							public updateItem(this_: any): boolean;
							public getClusters(coord: number): java.util.Set<any>;
							public clearItems(): void;
							public lock(): void;
							public getMaxDistanceBetweenClusteredItems(): number;
							public updateItem(param0: any): boolean;
							public removeItems(param0: java.util.Collection<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export module algo {
						export class NonHierarchicalDistanceBasedAlgorithm<T> extends com.google.maps.android.clustering.algo.AbstractAlgorithm<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm<any>>;
							public constructor();
							public removeItems(individualResult: java.util.Collection<any>): boolean;
							public addItems(param0: java.util.Collection<any>): boolean;
							public addItems(item: java.util.Collection<any>): boolean;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public setMaxDistanceBetweenClusteredItems(maxDistance: number): void;
							public getClusters(param0: number): java.util.Set<any>;
							public removeItem(this_: any): boolean;
							public addItem(param0: any): boolean;
							public unlock(): void;
							public getClusteringItems(quadTree: com.google.maps.android.quadtree.PointQuadTree<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>>, zoom: number): java.util.Collection<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>>;
							public removeItem(param0: any): boolean;
							public getItems(): java.util.Collection<any>;
							public updateItem(this_: any): boolean;
							public clearItems(): void;
							public getClusters(distance: number): java.util.Set<any>;
							public addItem(this_: any): boolean;
							public lock(): void;
							public getMaxDistanceBetweenClusteredItems(): number;
							public updateItem(param0: any): boolean;
							public removeItems(param0: java.util.Collection<any>): boolean;
						}
						export module NonHierarchicalDistanceBasedAlgorithm {
							export class QuadItem<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>>;
								public getItems(): java.util.Set<T>;
								public getPoint(): com.google.maps.android.geometry.Point;
								public getItems(): java.util.Collection<T>;
								public getSize(): number;
								public hashCode(): number;
								public getPosition(): com.google.android.gms.maps.model.LatLng;
								public equals(other: any): boolean;
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
		export module maps {
			export module android {
				export module clustering {
					export module algo {
						export class NonHierarchicalViewBasedAlgorithm<T> extends com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm<any> implements com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.NonHierarchicalViewBasedAlgorithm<any>>;
							public constructor();
							public addItems(param0: java.util.Collection<any>): boolean;
							public updateViewSize(width: number, height: number): void;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public getClusters(param0: number): java.util.Set<any>;
							public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
							public addItem(param0: any): boolean;
							public unlock(): void;
							public removeItem(param0: any): boolean;
							public constructor(screenWidth: number, screenHeight: number);
							public getItems(): java.util.Collection<any>;
							public onCameraChange(cameraPosition: com.google.android.gms.maps.model.CameraPosition): void;
							public clearItems(): void;
							public lock(): void;
							public shouldReclusterOnMapMovement(): boolean;
							public getClusteringItems(wrappedBounds: com.google.maps.android.quadtree.PointQuadTree<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>>, this_: number): java.util.Collection<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>>;
							public updateItem(param0: any): boolean;
							public getMaxDistanceBetweenClusteredItems(): number;
							public removeItems(param0: java.util.Collection<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export module algo {
						export class PreCachingAlgorithmDecorator<T> extends com.google.maps.android.clustering.algo.AbstractAlgorithm<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator<any>>;
							public constructor();
							public addItems(param0: java.util.Collection<any>): boolean;
							public removeItem(item: any): boolean;
							public addItems(items: java.util.Collection<any>): boolean;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public constructor(algorithm: com.google.maps.android.clustering.algo.Algorithm<any>);
							public setMaxDistanceBetweenClusteredItems(maxDistance: number): void;
							public getClusters(param0: number): java.util.Set<any>;
							public removeItems(items: java.util.Collection<any>): boolean;
							public addItem(item: any): boolean;
							public addItem(param0: any): boolean;
							public unlock(): void;
							public removeItem(param0: any): boolean;
							public getItems(): java.util.Collection<any>;
							public clearItems(): void;
							public updateItem(item: any): boolean;
							public lock(): void;
							public getMaxDistanceBetweenClusteredItems(): number;
							public updateItem(param0: any): boolean;
							public removeItems(param0: java.util.Collection<any>): boolean;
							public getClusters(zoom: number): java.util.Set<any>;
						}
						export module PreCachingAlgorithmDecorator {
							export class PrecacheRunnable {
								public static class: java.lang.Class<com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator.PrecacheRunnable>;
								public constructor(zoom: com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator<any>, param1: number);
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
		export module maps {
			export module android {
				export module clustering {
					export module algo {
						export class ScreenBasedAlgorithm<T> extends com.google.maps.android.clustering.algo.Algorithm<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<any>>;
							/**
							 * Constructs a new instance of the com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								shouldReclusterOnMapMovement(): boolean;
								onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
								addItem(param0: any): boolean;
								addItems(param0: java.util.Collection<any>): boolean;
								clearItems(): void;
								removeItem(param0: any): boolean;
								updateItem(param0: any): boolean;
								removeItems(param0: java.util.Collection<any>): boolean;
								getClusters(param0: number): java.util.Set<any>;
								getItems(): java.util.Collection<any>;
								setMaxDistanceBetweenClusteredItems(param0: number): void;
								getMaxDistanceBetweenClusteredItems(): number;
								lock(): void;
								unlock(): void;
							});
							public constructor();
							public addItems(param0: java.util.Collection<any>): boolean;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public getClusters(param0: number): java.util.Set<any>;
							public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
							public addItem(param0: any): boolean;
							public unlock(): void;
							public removeItem(param0: any): boolean;
							public getItems(): java.util.Collection<any>;
							public clearItems(): void;
							public lock(): void;
							public shouldReclusterOnMapMovement(): boolean;
							public updateItem(param0: any): boolean;
							public getMaxDistanceBetweenClusteredItems(): number;
							public removeItems(param0: java.util.Collection<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export module algo {
						export class ScreenBasedAlgorithmAdapter<T> extends com.google.maps.android.clustering.algo.AbstractAlgorithm<any> implements com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.ScreenBasedAlgorithmAdapter<any>>;
							public constructor();
							public addItems(param0: java.util.Collection<any>): boolean;
							public removeItem(item: any): boolean;
							public addItems(items: java.util.Collection<any>): boolean;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public constructor(algorithm: com.google.maps.android.clustering.algo.Algorithm<any>);
							public setMaxDistanceBetweenClusteredItems(maxDistance: number): void;
							public getClusters(param0: number): java.util.Set<any>;
							public removeItems(items: java.util.Collection<any>): boolean;
							public addItem(item: any): boolean;
							public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
							public addItem(param0: any): boolean;
							public unlock(): void;
							public removeItem(param0: any): boolean;
							public getItems(): java.util.Collection<any>;
							public onCameraChange(cameraPosition: com.google.android.gms.maps.model.CameraPosition): void;
							public clearItems(): void;
							public updateItem(item: any): boolean;
							public lock(): void;
							public shouldReclusterOnMapMovement(): boolean;
							public getMaxDistanceBetweenClusteredItems(): number;
							public updateItem(param0: any): boolean;
							public removeItems(param0: java.util.Collection<any>): boolean;
							public getClusters(zoom: number): java.util.Set<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export module algo {
						export class StaticCluster<T> extends com.google.maps.android.clustering.Cluster<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.StaticCluster<any>>;
							public add(t: any): boolean;
							public getSize(): number;
							public hashCode(): number;
							public equals(other: any): boolean;
							public remove(t: any): boolean;
							public getPosition(): com.google.android.gms.maps.model.LatLng;
							public toString(): string;
							public constructor(center: com.google.android.gms.maps.model.LatLng);
							public getItems(): java.util.Collection<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export module view {
						export class ClusterRenderer<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.maps.android.clustering.view.ClusterRenderer<any>>;
							/**
							 * Constructs a new instance of the com.google.maps.android.clustering.view.ClusterRenderer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onClustersChanged(param0: java.util.Set<any>): void;
								setOnClusterClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<T>): void;
								setOnClusterInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<T>): void;
								setOnClusterInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<T>): void;
								setOnClusterItemClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<T>): void;
								setOnClusterItemInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<T>): void;
								setOnClusterItemInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<T>): void;
								setAnimation(param0: boolean): void;
								setAnimationDuration(param0: number): void;
								onAdd(): void;
								onRemove(): void;
								getColor(param0: number): number;
								getClusterTextAppearance(param0: number): number;
							});
							public constructor();
							public setOnClusterItemInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<T>): void;
							public onClustersChanged(param0: java.util.Set<any>): void;
							public setOnClusterInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<T>): void;
							public setOnClusterItemInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<T>): void;
							public setOnClusterInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<T>): void;
							public setOnClusterItemClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<T>): void;
							public onAdd(): void;
							public setOnClusterClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<T>): void;
							public getColor(param0: number): number;
							public onRemove(): void;
							public setAnimation(param0: boolean): void;
							public setAnimationDuration(param0: number): void;
							public getClusterTextAppearance(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module clustering {
					export module view {
						export class ClusterRendererMultipleItems<T> extends com.google.maps.android.clustering.view.ClusterRenderer<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.view.ClusterRendererMultipleItems<any>>;
							public setOnClusterInfoWindowLongClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<any>): void;
							public getMarker(clusterItem: any): com.google.android.gms.maps.model.Marker;
							public constructor(context: globalAndroid.content.Context, map: com.google.android.gms.maps.GoogleMap, clusterManager: com.google.maps.android.clustering.ClusterManager<any>);
							public onClustersChanged(param0: java.util.Set<any>): void;
							public setOnClusterItemInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<any>): void;
							public setAnimation(animate: boolean): void;
							public getClusterText(bucket: number): string;
							public setAnimationDuration(animationDurationMs: number): void;
							public getBucket(this_: com.google.maps.android.clustering.Cluster<any>): number;
							public setOnClusterItemClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<any>): void;
							public onClusterItemUpdated(item: any, marker: com.google.android.gms.maps.model.Marker): void;
							public getColor(param0: number): number;
							public getColor(clusterSize: number): number;
							public onRemove(): void;
							public shouldRenderAsCluster(cluster: com.google.maps.android.clustering.Cluster<any>): boolean;
							public setAnimation(param0: boolean): void;
							public setOnClusterItemInfoWindowLongClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<any>): void;
							public setOnClusterItemInfoWindowClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<any>): void;
							public onBeforeClusterRendered(cluster: com.google.maps.android.clustering.Cluster<any>, markerOptions: com.google.android.gms.maps.model.MarkerOptions): void;
							public setAnimationType(type: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType): void;
							public setMinClusterSize(minClusterSize: number): void;
							public onClusterUpdated(cluster: com.google.maps.android.clustering.Cluster<any>, marker: com.google.android.gms.maps.model.Marker): void;
							public getMinClusterSize(): number;
							public getCluster(marker: com.google.android.gms.maps.model.Marker): com.google.maps.android.clustering.Cluster<any>;
							public getClusterItem(marker: com.google.android.gms.maps.model.Marker): any;
							public getClusterTextAppearance(param0: number): number;
							public setOnClusterInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<any>): void;
							public setOnClusterClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<any>): void;
							public onClusterItemRendered(clusterItem: any, marker: com.google.android.gms.maps.model.Marker): void;
							public getMarker(cluster: com.google.maps.android.clustering.Cluster<any>): com.google.android.gms.maps.model.Marker;
							public onClustersChanged(clusters: java.util.Set<any>): void;
							public stopAnimation(): void;
							public getDescriptorForCluster(cluster: com.google.maps.android.clustering.Cluster<any>): com.google.android.gms.maps.model.BitmapDescriptor;
							public setOnClusterInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<any>): void;
							public onAdd(): void;
							public setOnClusterInfoWindowClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<any>): void;
							public setOnClusterItemClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<any>): void;
							public getClusterTextAppearance(clusterSize: number): number;
							public setOnClusterClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<any>): void;
							public setOnClusterItemInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<any>): void;
							public onBeforeClusterItemRendered(item: any, markerOptions: com.google.android.gms.maps.model.MarkerOptions): void;
							public onClusterRendered(cluster: com.google.maps.android.clustering.Cluster<any>, marker: com.google.android.gms.maps.model.Marker): void;
							public setAnimationDuration(param0: number): void;
						}
						export module ClusterRendererMultipleItems {
							export class AnimationTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationTask>;
								public cancel(): void;
								public removeOnAnimationComplete(markerManager: com.google.maps.android.collections.MarkerManager): void;
								public perform(): void;
								public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
								public onAnimationUpdate(valueAnimator: globalAndroid.animation.ValueAnimator): void;
							}
							export class AnimationType {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType>;
								public static LINEAR: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType;
								public static EASE_IN: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType;
								public static EASE_OUT: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType;
								public static EASE_IN_OUT: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType;
								public static FAST_OUT_SLOW_IN: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType;
								public static BOUNCE: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType;
								public static ACCELERATE: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType;
								public static DECELERATE: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType;
								public static valueOf(name: string): com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType;
								public static values(): androidNative.Array<com.google.maps.android.clustering.view.ClusterRendererMultipleItems.AnimationType>;
							}
							export class CreateMarkerTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.ClusterRendererMultipleItems.CreateMarkerTask>;
								public constructor(c: com.google.maps.android.clustering.Cluster<any>, markersAdded: java.util.Set<com.google.maps.android.clustering.view.ClusterRendererMultipleItems.MarkerWithPosition<any>>, animateFrom: com.google.android.gms.maps.model.LatLng);
							}
							export class MarkerCache<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.ClusterRendererMultipleItems.MarkerCache<any>>;
								public get(item: T): com.google.android.gms.maps.model.Marker;
								public remove(m: com.google.android.gms.maps.model.Marker): void;
								public get(m: com.google.android.gms.maps.model.Marker): T;
								public put(item: T, m: com.google.android.gms.maps.model.Marker): void;
							}
							export class MarkerModifier {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.ClusterRendererMultipleItems.MarkerModifier>;
								public add(priority: boolean, c: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.CreateMarkerTask): void;
								public animateThenRemove(this_: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.MarkerWithPosition<any>, marker: com.google.android.gms.maps.model.LatLng, from: com.google.android.gms.maps.model.LatLng): void;
								public remove(priority: boolean, m: com.google.android.gms.maps.model.Marker): void;
								public animate(this_: com.google.maps.android.clustering.view.ClusterRendererMultipleItems.MarkerWithPosition<any>, marker: com.google.android.gms.maps.model.LatLng, from: com.google.android.gms.maps.model.LatLng): void;
								public handleMessage(this_: globalAndroid.os.Message): void;
								public waitUntilFree(): void;
								public queueIdle(): boolean;
								public isBusy(): boolean;
							}
							export class MarkerWithPosition<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.ClusterRendererMultipleItems.MarkerWithPosition<any>>;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class RenderTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.ClusterRendererMultipleItems.RenderTask>;
								public setMapZoom(zoom: number): void;
								public setCallback(callback: java.lang.Runnable): void;
								public run(): void;
								public setProjection(projection: com.google.android.gms.maps.Projection): void;
							}
							export class ViewModifier {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.ClusterRendererMultipleItems.ViewModifier>;
								public constructor(looper: com.google.maps.android.clustering.view.ClusterRendererMultipleItems<any>, param1: globalAndroid.os.Looper);
								public handleMessage(this_: globalAndroid.os.Message): void;
								public queue(clusters: java.util.Set<any>): void;
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
		export module maps {
			export module android {
				export module clustering {
					export module view {
						export class DefaultAdvancedMarkersClusterRenderer<T> extends com.google.maps.android.clustering.view.ClusterRenderer<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer<any>>;
							public setOnClusterInfoWindowLongClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<any>): void;
							public getMarker(clusterItem: any): com.google.android.gms.maps.model.Marker;
							public constructor(context: globalAndroid.content.Context, map: com.google.android.gms.maps.GoogleMap, clusterManager: com.google.maps.android.clustering.ClusterManager<any>);
							public onClusterUpdated(cluster: com.google.maps.android.clustering.Cluster<any>, marker: com.google.android.gms.maps.model.AdvancedMarker): void;
							public onClustersChanged(param0: java.util.Set<any>): void;
							public setOnClusterItemInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<any>): void;
							public setAnimation(animate: boolean): void;
							public getClusterText(bucket: number): string;
							public setAnimationDuration(animationDurationMs: number): void;
							public getBucket(this_: com.google.maps.android.clustering.Cluster<any>): number;
							public onBeforeClusterItemRendered(item: any, advancedMarkerOptions: com.google.android.gms.maps.model.AdvancedMarkerOptions): void;
							public setOnClusterItemClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<any>): void;
							public onClusterItemUpdated(item: any, marker: com.google.android.gms.maps.model.Marker): void;
							public getColor(param0: number): number;
							public getColor(clusterSize: number): number;
							public onRemove(): void;
							public shouldRenderAsCluster(cluster: com.google.maps.android.clustering.Cluster<any>): boolean;
							public setAnimation(param0: boolean): void;
							public setOnClusterItemInfoWindowLongClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<any>): void;
							public setOnClusterItemInfoWindowClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<any>): void;
							public setMinClusterSize(minClusterSize: number): void;
							public getMinClusterSize(): number;
							public getCluster(marker: com.google.android.gms.maps.model.Marker): com.google.maps.android.clustering.Cluster<any>;
							public getClusterItem(marker: com.google.android.gms.maps.model.Marker): any;
							public getClusterTextAppearance(param0: number): number;
							public setOnClusterInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<any>): void;
							public setOnClusterClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<any>): void;
							public onClusterItemRendered(clusterItem: any, marker: com.google.android.gms.maps.model.Marker): void;
							public getMarker(cluster: com.google.maps.android.clustering.Cluster<any>): com.google.android.gms.maps.model.Marker;
							public onClustersChanged(clusters: java.util.Set<any>): void;
							public getDescriptorForCluster(cluster: com.google.maps.android.clustering.Cluster<any>): com.google.android.gms.maps.model.BitmapDescriptor;
							public setOnClusterInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<any>): void;
							public onAdd(): void;
							public setOnClusterInfoWindowClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<any>): void;
							public setOnClusterItemClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<any>): void;
							public getClusterTextAppearance(clusterSize: number): number;
							public setOnClusterClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<any>): void;
							public setOnClusterItemInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<any>): void;
							public onClusterRendered(cluster: com.google.maps.android.clustering.Cluster<any>, marker: com.google.android.gms.maps.model.Marker): void;
							public onBeforeClusterRendered(cluster: com.google.maps.android.clustering.Cluster<any>, advancedMarkerOptions: com.google.android.gms.maps.model.AdvancedMarkerOptions): void;
							public shouldRender(oldClusters: java.util.Set<any>, newClusters: java.util.Set<any>): boolean;
							public setAnimationDuration(param0: number): void;
						}
						export module DefaultAdvancedMarkersClusterRenderer {
							export class AnimationTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.AnimationTask>;
								public removeOnAnimationComplete(markerManager: com.google.maps.android.collections.MarkerManager): void;
								public perform(): void;
								public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
								public onAnimationUpdate(valueAnimator: globalAndroid.animation.ValueAnimator): void;
							}
							export class CreateMarkerTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.CreateMarkerTask>;
								public constructor(c: com.google.maps.android.clustering.Cluster<any>, markersAdded: java.util.Set<com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.MarkerWithPosition>, animateFrom: com.google.android.gms.maps.model.LatLng);
							}
							export class MarkerCache<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.MarkerCache<any>>;
								public get(item: T): com.google.android.gms.maps.model.Marker;
								public remove(m: com.google.android.gms.maps.model.Marker): void;
								public get(m: com.google.android.gms.maps.model.Marker): T;
								public put(item: T, m: com.google.android.gms.maps.model.Marker): void;
							}
							export class MarkerModifier {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.MarkerModifier>;
								public remove(priority: boolean, m: com.google.android.gms.maps.model.Marker): void;
								public add(priority: boolean, c: com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.CreateMarkerTask): void;
								public animateThenRemove(marker: com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.MarkerWithPosition, from: com.google.android.gms.maps.model.LatLng, to: com.google.android.gms.maps.model.LatLng): void;
								public handleMessage(this_: globalAndroid.os.Message): void;
								public waitUntilFree(): void;
								public animate(marker: com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.MarkerWithPosition, from: com.google.android.gms.maps.model.LatLng, to: com.google.android.gms.maps.model.LatLng): void;
								public queueIdle(): boolean;
								public isBusy(): boolean;
							}
							export class MarkerWithPosition {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.MarkerWithPosition>;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class RenderTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.RenderTask>;
								public setMapZoom(zoom: number): void;
								public setCallback(callback: java.lang.Runnable): void;
								public run(): void;
								public setProjection(projection: com.google.android.gms.maps.Projection): void;
							}
							export class ViewModifier {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.ViewModifier>;
								public handleMessage(this_: globalAndroid.os.Message): void;
								public queue(clusters: java.util.Set<any>): void;
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
		export module maps {
			export module android {
				export module clustering {
					export module view {
						export class DefaultClusterRenderer<T> extends com.google.maps.android.clustering.view.ClusterRenderer<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer<any>>;
							public setOnClusterInfoWindowLongClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<any>): void;
							public getMarker(clusterItem: any): com.google.android.gms.maps.model.Marker;
							public constructor(context: globalAndroid.content.Context, map: com.google.android.gms.maps.GoogleMap, clusterManager: com.google.maps.android.clustering.ClusterManager<any>);
							public onClustersChanged(param0: java.util.Set<any>): void;
							public setOnClusterItemInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<any>): void;
							public setAnimation(animate: boolean): void;
							public getClusterText(bucket: number): string;
							public setAnimationDuration(animationDurationMs: number): void;
							public getBucket(this_: com.google.maps.android.clustering.Cluster<any>): number;
							public setOnClusterItemClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<any>): void;
							public onClusterItemUpdated(item: any, marker: com.google.android.gms.maps.model.Marker): void;
							public getColor(param0: number): number;
							public getColor(clusterSize: number): number;
							public onRemove(): void;
							public shouldRenderAsCluster(cluster: com.google.maps.android.clustering.Cluster<any>): boolean;
							public setAnimation(param0: boolean): void;
							public setOnClusterItemInfoWindowLongClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<any>): void;
							public setOnClusterItemInfoWindowClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<any>): void;
							public onBeforeClusterRendered(cluster: com.google.maps.android.clustering.Cluster<any>, markerOptions: com.google.android.gms.maps.model.MarkerOptions): void;
							public setMinClusterSize(minClusterSize: number): void;
							public onClusterUpdated(cluster: com.google.maps.android.clustering.Cluster<any>, marker: com.google.android.gms.maps.model.Marker): void;
							public getMinClusterSize(): number;
							public getCluster(marker: com.google.android.gms.maps.model.Marker): com.google.maps.android.clustering.Cluster<any>;
							public getClusterItem(marker: com.google.android.gms.maps.model.Marker): any;
							public getClusterTextAppearance(param0: number): number;
							public setOnClusterInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<any>): void;
							public setOnClusterClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<any>): void;
							public onClusterItemRendered(clusterItem: any, marker: com.google.android.gms.maps.model.Marker): void;
							public getMarker(cluster: com.google.maps.android.clustering.Cluster<any>): com.google.android.gms.maps.model.Marker;
							public onClustersChanged(clusters: java.util.Set<any>): void;
							public getDescriptorForCluster(cluster: com.google.maps.android.clustering.Cluster<any>): com.google.android.gms.maps.model.BitmapDescriptor;
							public setOnClusterInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<any>): void;
							public onAdd(): void;
							public setOnClusterInfoWindowClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<any>): void;
							public setOnClusterItemClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<any>): void;
							public getClusterTextAppearance(clusterSize: number): number;
							public setOnClusterClickListener(listener: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<any>): void;
							public setOnClusterItemInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<any>): void;
							public onBeforeClusterItemRendered(item: any, markerOptions: com.google.android.gms.maps.model.MarkerOptions): void;
							public onClusterRendered(cluster: com.google.maps.android.clustering.Cluster<any>, marker: com.google.android.gms.maps.model.Marker): void;
							public shouldRender(oldClusters: java.util.Set<any>, newClusters: java.util.Set<any>): boolean;
							public setAnimationDuration(param0: number): void;
						}
						export module DefaultClusterRenderer {
							export class AnimationTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.AnimationTask>;
								public removeOnAnimationComplete(markerManager: com.google.maps.android.collections.MarkerManager): void;
								public perform(): void;
								public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
								public onAnimationUpdate(valueAnimator: globalAndroid.animation.ValueAnimator): void;
							}
							export class CreateMarkerTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.CreateMarkerTask>;
								public constructor(c: com.google.maps.android.clustering.Cluster<any>, markersAdded: java.util.Set<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition>, animateFrom: com.google.android.gms.maps.model.LatLng);
							}
							export class MarkerCache<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerCache<any>>;
								public get(item: T): com.google.android.gms.maps.model.Marker;
								public remove(m: com.google.android.gms.maps.model.Marker): void;
								public get(m: com.google.android.gms.maps.model.Marker): T;
								public put(item: T, m: com.google.android.gms.maps.model.Marker): void;
							}
							export class MarkerModifier {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerModifier>;
								public remove(priority: boolean, m: com.google.android.gms.maps.model.Marker): void;
								public add(priority: boolean, c: com.google.maps.android.clustering.view.DefaultClusterRenderer.CreateMarkerTask): void;
								public handleMessage(this_: globalAndroid.os.Message): void;
								public waitUntilFree(): void;
								public animate(marker: com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition, from: com.google.android.gms.maps.model.LatLng, to: com.google.android.gms.maps.model.LatLng): void;
								public animateThenRemove(marker: com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition, from: com.google.android.gms.maps.model.LatLng, to: com.google.android.gms.maps.model.LatLng): void;
								public queueIdle(): boolean;
								public isBusy(): boolean;
							}
							export class MarkerWithPosition {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition>;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class RenderTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.RenderTask>;
								public setMapZoom(zoom: number): void;
								public setCallback(callback: java.lang.Runnable): void;
								public run(): void;
								public setProjection(projection: com.google.android.gms.maps.Projection): void;
							}
							export class ViewModifier {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.ViewModifier>;
								public handleMessage(this_: globalAndroid.os.Message): void;
								public queue(clusters: java.util.Set<any>): void;
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
		export module maps {
			export module android {
				export module collections {
					export class CircleManager extends com.google.maps.android.collections.MapObjectManager<com.google.android.gms.maps.model.Circle, com.google.maps.android.collections.CircleManager.Collection> implements com.google.android.gms.maps.GoogleMap.OnCircleClickListener {
						public static class: java.lang.Class<com.google.maps.android.collections.CircleManager>;
						public removeObjectFromMap(object: com.google.android.gms.maps.model.Circle): void;
						public newCollection(): com.google.maps.android.collections.CircleManager.Collection;
						public removeObjectFromMap(param0: any): void;
						public newCollection(): any;
						public newCollection(id: string): any;
						public constructor(map: com.google.android.gms.maps.GoogleMap);
						public onCircleClick(circle: com.google.android.gms.maps.model.Circle): void;
					}
					export module CircleManager {
						export class Collection extends com.google.maps.android.collections.MapObjectManager.Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.CircleManager.Collection>;
							public addAll(this_: java.util.Collection<com.google.android.gms.maps.model.CircleOptions>): void;
							public constructor(this$0: com.google.maps.android.collections.MapObjectManager<any, any>);
							public addCircle(opts: com.google.android.gms.maps.model.CircleOptions): com.google.android.gms.maps.model.Circle;
							public showAll(): void;
							public setOnCircleClickListener(circleClickListener: com.google.android.gms.maps.GoogleMap.OnCircleClickListener): void;
							public hideAll(): void;
							public remove(object: any): boolean;
							public addAll(this_: java.util.Collection<com.google.android.gms.maps.model.CircleOptions>, opts: boolean): void;
							public constructor(this$0: com.google.maps.android.collections.CircleManager);
							public remove(circle: com.google.android.gms.maps.model.Circle): boolean;
							public getCircles(): java.util.Collection<com.google.android.gms.maps.model.Circle>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module collections {
					export class GroundOverlayManager extends com.google.maps.android.collections.MapObjectManager<com.google.android.gms.maps.model.GroundOverlay, com.google.maps.android.collections.GroundOverlayManager.Collection> implements com.google.android.gms.maps.GoogleMap.OnGroundOverlayClickListener {
						public static class: java.lang.Class<com.google.maps.android.collections.GroundOverlayManager>;
						public onGroundOverlayClick(groundOverlay: com.google.android.gms.maps.model.GroundOverlay): void;
						public newCollection(): com.google.maps.android.collections.GroundOverlayManager.Collection;
						public removeObjectFromMap(param0: any): void;
						public newCollection(): any;
						public newCollection(id: string): any;
						public removeObjectFromMap(object: com.google.android.gms.maps.model.GroundOverlay): void;
						public constructor(map: com.google.android.gms.maps.GoogleMap);
					}
					export module GroundOverlayManager {
						export class Collection extends com.google.maps.android.collections.MapObjectManager.Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.GroundOverlayManager.Collection>;
							public constructor(this$0: com.google.maps.android.collections.MapObjectManager<any, any>);
							public addAll(this_: java.util.Collection<com.google.android.gms.maps.model.GroundOverlayOptions>): void;
							public showAll(): void;
							public constructor(this$0: com.google.maps.android.collections.GroundOverlayManager);
							public remove(groundOverlay: com.google.android.gms.maps.model.GroundOverlay): boolean;
							public setOnGroundOverlayClickListener(groundOverlayClickListener: com.google.android.gms.maps.GoogleMap.OnGroundOverlayClickListener): void;
							public hideAll(): void;
							public remove(object: any): boolean;
							public addAll(this_: java.util.Collection<com.google.android.gms.maps.model.GroundOverlayOptions>, opts: boolean): void;
							public addGroundOverlay(opts: com.google.android.gms.maps.model.GroundOverlayOptions): com.google.android.gms.maps.model.GroundOverlay;
							public getGroundOverlays(): java.util.Collection<com.google.android.gms.maps.model.GroundOverlay>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module collections {
					export abstract class MapObjectManager<O, C> extends java.lang.Object {
						public static class: java.lang.Class<com.google.maps.android.collections.MapObjectManager<any, any>>;
						public mMap: com.google.android.gms.maps.GoogleMap;
						public mAllObjects: java.util.Map<O, C>;
						public newCollection(id: string): C;
						public removeObjectFromMap(param0: O): void;
						public newCollection(): C;
						public getCollection(id: string): C;
						public constructor(map: com.google.android.gms.maps.GoogleMap);
						public remove(object: O): boolean;
					}
					export module MapObjectManager {
						export class Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.MapObjectManager.Collection>;
							public constructor(this$0: com.google.maps.android.collections.MapObjectManager<any, any>);
							public getObjects(): java.util.Collection<any>;
							public add(object: any): void;
							public clear(): void;
							public remove(object: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module collections {
					export class MarkerManager extends com.google.maps.android.collections.MapObjectManager<com.google.android.gms.maps.model.Marker, com.google.maps.android.collections.MarkerManager.Collection> {
						public static class: java.lang.Class<com.google.maps.android.collections.MarkerManager>;
						public onMarkerDrag(marker: com.google.android.gms.maps.model.Marker): void;
						public onMarkerDragStart(marker: com.google.android.gms.maps.model.Marker): void;
						public onMarkerDragEnd(marker: com.google.android.gms.maps.model.Marker): void;
						public removeObjectFromMap(object: com.google.android.gms.maps.model.Marker): void;
						public onInfoWindowLongClick(marker: com.google.android.gms.maps.model.Marker): void;
						public newCollection(): any;
						public getInfoContents(marker: com.google.android.gms.maps.model.Marker): globalAndroid.view.View;
						public onInfoWindowClick(marker: com.google.android.gms.maps.model.Marker): void;
						public getInfoWindow(marker: com.google.android.gms.maps.model.Marker): globalAndroid.view.View;
						public onMarkerClick(marker: com.google.android.gms.maps.model.Marker): boolean;
						public removeObjectFromMap(param0: any): void;
						public newCollection(id: string): any;
						public constructor(map: com.google.android.gms.maps.GoogleMap);
						public newCollection(): com.google.maps.android.collections.MarkerManager.Collection;
					}
					export module MarkerManager {
						export class Collection extends com.google.maps.android.collections.MapObjectManager.Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.MarkerManager.Collection>;
							public constructor(this$0: com.google.maps.android.collections.MapObjectManager<any, any>);
							public addMarker(opts: com.google.android.gms.maps.model.MarkerOptions): com.google.android.gms.maps.model.Marker;
							public addAll(this_: java.util.Collection<com.google.android.gms.maps.model.MarkerOptions>): void;
							public remove(marker: com.google.android.gms.maps.model.Marker): boolean;
							public getMarkers(): java.util.Collection<com.google.android.gms.maps.model.Marker>;
							public setOnInfoWindowLongClickListener(infoWindowLongClickListener: com.google.android.gms.maps.GoogleMap.OnInfoWindowLongClickListener): void;
							public showAll(): void;
							public hideAll(): void;
							public constructor(this$0: com.google.maps.android.collections.MarkerManager);
							public setInfoWindowAdapter(infoWindowAdapter: com.google.android.gms.maps.GoogleMap.InfoWindowAdapter): void;
							public setOnInfoWindowClickListener(infoWindowClickListener: com.google.android.gms.maps.GoogleMap.OnInfoWindowClickListener): void;
							public addMarker(opts: com.google.android.gms.maps.model.AdvancedMarkerOptions): com.google.android.gms.maps.model.Marker;
							public addAll(this_: java.util.Collection<com.google.android.gms.maps.model.MarkerOptions>, opts: boolean): void;
							public remove(object: any): boolean;
							public setOnMarkerClickListener(markerClickListener: com.google.android.gms.maps.GoogleMap.OnMarkerClickListener): void;
							public setOnMarkerDragListener(markerDragListener: com.google.android.gms.maps.GoogleMap.OnMarkerDragListener): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module collections {
					export class PolygonManager extends com.google.maps.android.collections.MapObjectManager<com.google.android.gms.maps.model.Polygon, com.google.maps.android.collections.PolygonManager.Collection> implements com.google.android.gms.maps.GoogleMap.OnPolygonClickListener {
						public static class: java.lang.Class<com.google.maps.android.collections.PolygonManager>;
						public newCollection(): com.google.maps.android.collections.PolygonManager.Collection;
						public removeObjectFromMap(param0: any): void;
						public newCollection(): any;
						public newCollection(id: string): any;
						public constructor(map: com.google.android.gms.maps.GoogleMap);
						public removeObjectFromMap(object: com.google.android.gms.maps.model.Polygon): void;
						public onPolygonClick(polygon: com.google.android.gms.maps.model.Polygon): void;
					}
					export module PolygonManager {
						export class Collection extends com.google.maps.android.collections.MapObjectManager.Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.PolygonManager.Collection>;
							public constructor(this$0: com.google.maps.android.collections.MapObjectManager<any, any>);
							public remove(polygon: com.google.android.gms.maps.model.Polygon): boolean;
							public addAll(this_: java.util.Collection<com.google.android.gms.maps.model.PolygonOptions>): void;
							public addPolygon(opts: com.google.android.gms.maps.model.PolygonOptions): com.google.android.gms.maps.model.Polygon;
							public showAll(): void;
							public constructor(this$0: com.google.maps.android.collections.PolygonManager);
							public hideAll(): void;
							public remove(object: any): boolean;
							public getPolygons(): java.util.Collection<com.google.android.gms.maps.model.Polygon>;
							public addAll(this_: java.util.Collection<com.google.android.gms.maps.model.PolygonOptions>, opts: boolean): void;
							public setOnPolygonClickListener(polygonClickListener: com.google.android.gms.maps.GoogleMap.OnPolygonClickListener): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module collections {
					export class PolylineManager extends com.google.maps.android.collections.MapObjectManager<com.google.android.gms.maps.model.Polyline, com.google.maps.android.collections.PolylineManager.Collection> implements com.google.android.gms.maps.GoogleMap.OnPolylineClickListener {
						public static class: java.lang.Class<com.google.maps.android.collections.PolylineManager>;
						public onPolylineClick(polyline: com.google.android.gms.maps.model.Polyline): void;
						public removeObjectFromMap(param0: any): void;
						public newCollection(): any;
						public newCollection(id: string): any;
						public removeObjectFromMap(object: com.google.android.gms.maps.model.Polyline): void;
						public constructor(map: com.google.android.gms.maps.GoogleMap);
						public newCollection(): com.google.maps.android.collections.PolylineManager.Collection;
					}
					export module PolylineManager {
						export class Collection extends com.google.maps.android.collections.MapObjectManager.Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.PolylineManager.Collection>;
							public constructor(this$0: com.google.maps.android.collections.MapObjectManager<any, any>);
							public constructor(this$0: com.google.maps.android.collections.PolylineManager);
							public setOnPolylineClickListener(polylineClickListener: com.google.android.gms.maps.GoogleMap.OnPolylineClickListener): void;
							public addAll(this_: java.util.Collection<com.google.android.gms.maps.model.PolylineOptions>, opts: boolean): void;
							public showAll(): void;
							public hideAll(): void;
							public getPolylines(): java.util.Collection<com.google.android.gms.maps.model.Polyline>;
							public addAll(this_: java.util.Collection<com.google.android.gms.maps.model.PolylineOptions>): void;
							public remove(object: any): boolean;
							public addPolyline(opts: com.google.android.gms.maps.model.PolylineOptions): com.google.android.gms.maps.model.Polyline;
							public remove(polyline: com.google.android.gms.maps.model.Polyline): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export class DataPolygon<T> extends com.google.maps.android.data.Geometry<any> {
						public static class: java.lang.Class<com.google.maps.android.data.DataPolygon<any>>;
						/**
						 * Constructs a new instance of the com.google.maps.android.data.DataPolygon<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getOuterBoundaryCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>; getInnerBoundaryCoordinates(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>; getGeometryType(): string; getGeometryObject(): any });
						public constructor();
						public getInnerBoundaryCoordinates(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>;
						public getGeometryType(): string;
						public getOuterBoundaryCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>;
						public getGeometryObject(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export class Feature {
						public static class: java.lang.Class<com.google.maps.android.data.Feature>;
						public mId: string;
						public hasGeometry(): boolean;
						public getPropertyKeys(): java.lang.Iterable<string>;
						public setProperty(property: string, propertyValue: string): string;
						public constructor(featureGeometry: com.google.maps.android.data.Geometry<any>, id: string, properties: java.util.Map<string, string>);
						public hasProperty(property: string): boolean;
						public getGeometry(): com.google.maps.android.data.Geometry<any>;
						public getProperties(): java.lang.Iterable<any>;
						public removeProperty(property: string): string;
						public getId(): string;
						public setGeometry(geometry: com.google.maps.android.data.Geometry<any>): void;
						public getProperty(property: string): string;
						public hasProperties(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export class Geometry<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.maps.android.data.Geometry<any>>;
						/**
						 * Constructs a new instance of the com.google.maps.android.data.Geometry<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getGeometryType(): string; getGeometryObject(): T });
						public constructor();
						public getGeometryType(): string;
						public getGeometryObject(): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export abstract class Layer {
						public static class: java.lang.Class<com.google.maps.android.data.Layer>;
						public getDefaultPolygonStyle(): com.google.maps.android.data.geojson.GeoJsonPolygonStyle;
						public constructor();
						public hasFeatures(): boolean;
						public removeLayerFromMap(): void;
						public getFeature(mapObject: any): com.google.maps.android.data.Feature;
						public hasContainers(): boolean;
						public addKMLToMap(): void;
						public setMap(map: com.google.android.gms.maps.GoogleMap): void;
						public getDefaultPointStyle(): com.google.maps.android.data.geojson.GeoJsonPointStyle;
						public setOnFeatureClickListener(listener: com.google.maps.android.data.Layer.OnFeatureClickListener): void;
						public storeRenderer(renderer: com.google.maps.android.data.Renderer): void;
						public getMap(): com.google.android.gms.maps.GoogleMap;
						public addGeoJsonToMap(): void;
						public addLayerToMap(): void;
						public getFeatures(): java.lang.Iterable<any>;
						public getDefaultLineStringStyle(): com.google.maps.android.data.geojson.GeoJsonLineStringStyle;
						public getContainerFeature(mapObject: any): com.google.maps.android.data.Feature;
						public getContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
						public addFeature(feature: com.google.maps.android.data.Feature): void;
						public removeFeature(feature: com.google.maps.android.data.Feature): void;
						public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
						public isLayerOnMap(): boolean;
					}
					export module Layer {
						export class OnFeatureClickListener {
							public static class: java.lang.Class<com.google.maps.android.data.Layer.OnFeatureClickListener>;
							/**
							 * Constructs a new instance of the com.google.maps.android.data.Layer$OnFeatureClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onFeatureClick(param0: com.google.maps.android.data.Feature): void });
							public constructor();
							public onFeatureClick(param0: com.google.maps.android.data.Feature): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export class LineString extends com.google.maps.android.data.Geometry<java.util.List<com.google.android.gms.maps.model.LatLng>> {
						public static class: java.lang.Class<com.google.maps.android.data.LineString>;
						public constructor(coordinates: java.util.List<com.google.android.gms.maps.model.LatLng>);
						public getGeometryType(): string;
						public toString(): string;
						public getGeometryObject(): any;
						public getGeometryObject(): java.util.List<com.google.android.gms.maps.model.LatLng>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export class MultiGeometry extends com.google.maps.android.data.Geometry<any> {
						public static class: java.lang.Class<com.google.maps.android.data.MultiGeometry>;
						public setGeometryType(type: string): void;
						public constructor(this_: java.util.List<any>);
						public getGeometryType(): string;
						public toString(): string;
						public getGeometryObject(): any;
						public getGeometryObject(): java.util.List<com.google.maps.android.data.Geometry<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export class Point extends com.google.maps.android.data.Geometry<any> {
						public static class: java.lang.Class<com.google.maps.android.data.Point>;
						public constructor(coordinates: com.google.android.gms.maps.model.LatLng);
						public getGeometryType(): string;
						public getGeometryObject(): com.google.android.gms.maps.model.LatLng;
						public toString(): string;
						public getGeometryObject(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export class Renderer {
						public static class: java.lang.Class<com.google.maps.android.data.Renderer>;
						public getPlacemarkStyle(styleId: string): com.google.maps.android.data.kml.KmlStyle;
						public putFeatures(feature: com.google.maps.android.data.Feature, object: any): void;
						public hasFeatures(): boolean;
						public getCachedGroundOverlayImage(this_: string): com.google.android.gms.maps.model.BitmapDescriptor;
						public addKmlPlacemarkToMap(markerOptions: com.google.maps.android.data.kml.KmlPlacemark, marker: com.google.maps.android.data.Geometry<any>, polylineOptions: com.google.maps.android.data.kml.KmlStyle, polyline: com.google.maps.android.data.kml.KmlStyle, polygonOptions: boolean): any;
						public clearStylesRenderer(): void;
						public assignStyleMap(styleMapKey: java.util.HashMap<string, string>, this_: java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>): void;
						public setLayerVisibility(layerOnMap: boolean): void;
						public addGeoJsonFeatureToMap(polylineOptions: com.google.maps.android.data.Feature, polygonOptions: com.google.maps.android.data.Geometry<any>): any;
						public downloadFinished(): void;
						public getMap(): com.google.android.gms.maps.GoogleMap;
						public getStylesRenderer(): java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>;
						public getGroundOverlayMap(): java.util.HashMap<com.google.maps.android.data.kml.KmlGroundOverlay, com.google.android.gms.maps.model.GroundOverlay>;
						public cacheBitmap(url: string, bitmap: globalAndroid.graphics.Bitmap): void;
						public getMarkerIconUrls(): java.util.Set<string>;
						public checkClearBitmapCache(): void;
						public constructor(map: com.google.android.gms.maps.GoogleMap, features: java.util.HashMap<any, any>, markerManager: com.google.maps.android.collections.MarkerManager, polygonManager: com.google.maps.android.collections.PolygonManager, polylineManager: com.google.maps.android.collections.PolylineManager, groundOverlayManager: com.google.maps.android.collections.GroundOverlayManager);
						public getCachedMarkerImage(this_: string, url: number): com.google.android.gms.maps.model.BitmapDescriptor;
						public constructor(map: com.google.android.gms.maps.GoogleMap, context: globalAndroid.content.Context, markerManager: com.google.maps.android.collections.MarkerManager, polygonManager: com.google.maps.android.collections.PolygonManager, polylineManager: com.google.maps.android.collections.PolylineManager, groundOverlayManager: com.google.maps.android.collections.GroundOverlayManager, imagesCache: com.google.maps.android.data.Renderer.ImagesCache);
						public downloadStarted(): void;
						public putStyles(): void;
						public putContainerFeature(mapObject: any, placemark: com.google.maps.android.data.Feature): void;
						public getAllFeatures(): java.util.HashMap<any, any>;
						public getStyleMaps(): java.util.HashMap<string, string>;
						public attachGroundOverlay(groundOverlayOptions: com.google.android.gms.maps.model.GroundOverlayOptions): com.google.android.gms.maps.model.GroundOverlay;
						public setMap(map: com.google.android.gms.maps.GoogleMap): void;
						public getValues(): java.util.Collection<any>;
						public removeGroundOverlays(this_: java.util.HashMap<com.google.maps.android.data.kml.KmlGroundOverlay, com.google.android.gms.maps.model.GroundOverlay>): void;
						public storeData(styles: java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>, styleMaps: java.util.HashMap<string, string>, features: java.util.HashMap<com.google.maps.android.data.kml.KmlPlacemark, any>, folders: java.util.ArrayList<com.google.maps.android.data.kml.KmlContainer>, groundOverlays: java.util.HashMap<com.google.maps.android.data.kml.KmlGroundOverlay, com.google.android.gms.maps.model.GroundOverlay>): void;
						public getContainerList(): java.util.ArrayList<com.google.maps.android.data.kml.KmlContainer>;
						public getFeatures(): java.util.Set<com.google.maps.android.data.Feature>;
						public static getPlacemarkVisibility(placemarkVisibility: com.google.maps.android.data.Feature): boolean;
						public putStyles(styles: java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>): void;
						public removeFeatures(features: java.util.HashMap<any, any>): void;
						public addFeature(placemarkId: com.google.maps.android.data.Feature): void;
						public removeFeature(feature: com.google.maps.android.data.Feature): void;
						public isLayerOnMap(): boolean;
						public removeFromMap(this_: any): void;
					}
					export module Renderer {
						export class ImagesCache {
							public static class: java.lang.Class<com.google.maps.android.data.Renderer.ImagesCache>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export abstract class Style {
						public static class: java.lang.Class<com.google.maps.android.data.Style>;
						public mMarkerOptions: com.google.android.gms.maps.model.MarkerOptions;
						public mPolylineOptions: com.google.android.gms.maps.model.PolylineOptions;
						public mPolygonOptions: com.google.android.gms.maps.model.PolygonOptions;
						public constructor();
						public setMarkerHotSpot(x: number, y: number, xUnits: string, yUnits: string): void;
						public setMarkerRotation(rotation: number): void;
						public setPolygonStrokeWidth(strokeWidth: number): void;
						public getRotation(): number;
						public setLineStringWidth(width: number): void;
						public setPolygonFillColor(fillColor: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class BiMultiMap<K> extends java.util.HashMap<any, any> {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.BiMultiMap<any>>;
							public constructor();
							public getKey(value: any): any;
							public put(key: any, value: any): any;
							public putAll(this_: java.util.Map<any, any>): void;
							public clone(): com.google.maps.android.data.geojson.BiMultiMap<any>;
							public put(this_: any, key: java.util.Collection<any>): any;
							public clear(): void;
							public remove(this_: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonFeature extends com.google.maps.android.data.Feature {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonFeature>;
							public getPointStyle(): com.google.maps.android.data.geojson.GeoJsonPointStyle;
							public getBoundingBox(): com.google.android.gms.maps.model.LatLngBounds;
							public removeProperty(property: string): string;
							public getPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
							public getPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
							public toString(): string;
							public getMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
							public setGeometry(geometry: com.google.maps.android.data.Geometry<any>): void;
							public constructor(geometry: com.google.maps.android.data.Geometry<any>, id: string, properties: java.util.HashMap<string, string>, boundingBox: com.google.android.gms.maps.model.LatLngBounds);
							public setPolygonStyle(polygonStyle: com.google.maps.android.data.geojson.GeoJsonPolygonStyle): void;
							public setLineStringStyle(lineStringStyle: com.google.maps.android.data.geojson.GeoJsonLineStringStyle): void;
							public getPolygonStyle(): com.google.maps.android.data.geojson.GeoJsonPolygonStyle;
							public update(observable: java.util.Observable, data: any): void;
							public constructor(featureGeometry: com.google.maps.android.data.Geometry<any>, id: string, properties: java.util.Map<string, string>);
							public setPointStyle(pointStyle: com.google.maps.android.data.geojson.GeoJsonPointStyle): void;
							public setProperty(property: string, propertyValue: string): string;
							public getLineStringStyle(): com.google.maps.android.data.geojson.GeoJsonLineStringStyle;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonGeometryCollection extends com.google.maps.android.data.MultiGeometry {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonGeometryCollection>;
							public constructor(geometries: java.util.List<com.google.maps.android.data.Geometry<any>>);
							public getGeometryType(): string;
							public getGeometryObject(): java.util.List<com.google.maps.android.data.Geometry<any>>;
							public getGeometries(): java.util.List<com.google.maps.android.data.Geometry<any>>;
							public getType(): string;
							public getGeometryObject(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonLayer extends com.google.maps.android.data.Layer {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonLayer>;
							public constructor();
							public getBoundingBox(): com.google.android.gms.maps.model.LatLngBounds;
							public constructor(this_: com.google.android.gms.maps.GoogleMap, map: org.json.JSONObject, geoJsonFile: com.google.maps.android.collections.MarkerManager, markerManager: com.google.maps.android.collections.PolygonManager, polygonManager: com.google.maps.android.collections.PolylineManager, polylineManager: com.google.maps.android.collections.GroundOverlayManager);
							public removeFeature(feature: com.google.maps.android.data.geojson.GeoJsonFeature): void;
							public constructor(map: com.google.android.gms.maps.GoogleMap, geoJsonFile: org.json.JSONObject);
							public addFeature(feature: com.google.maps.android.data.Feature): void;
							public constructor(map: com.google.android.gms.maps.GoogleMap, resourceId: number, context: globalAndroid.content.Context, markerManager: com.google.maps.android.collections.MarkerManager, polygonManager: com.google.maps.android.collections.PolygonManager, polylineManager: com.google.maps.android.collections.PolylineManager, groundOverlayManager: com.google.maps.android.collections.GroundOverlayManager);
							public toString(): string;
							public removeFeature(feature: com.google.maps.android.data.Feature): void;
							public getFeatures(): java.lang.Iterable<com.google.maps.android.data.geojson.GeoJsonFeature>;
							public constructor(map: com.google.android.gms.maps.GoogleMap, resourceId: number, context: globalAndroid.content.Context);
							public addLayerToMap(): void;
							public addFeature(feature: com.google.maps.android.data.geojson.GeoJsonFeature): void;
						}
						export module GeoJsonLayer {
							export class GeoJsonOnFeatureClickListener extends com.google.maps.android.data.Layer.OnFeatureClickListener {
								public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonLayer.GeoJsonOnFeatureClickListener>;
								/**
								 * Constructs a new instance of the com.google.maps.android.data.geojson.GeoJsonLayer$GeoJsonOnFeatureClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onFeatureClick(param0: com.google.maps.android.data.Feature): void });
								public constructor();
								public onFeatureClick(param0: com.google.maps.android.data.Feature): void;
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
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonLineString extends com.google.maps.android.data.LineString {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonLineString>;
							public getGeometryType(): string;
							public constructor(coordinates: java.util.List<com.google.android.gms.maps.model.LatLng>, altitudes: java.util.List<java.lang.Double>);
							public constructor(coordinates: java.util.List<com.google.android.gms.maps.model.LatLng>);
							public getCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public getGeometryObject(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public getAltitudes(): java.util.List<java.lang.Double>;
							public getType(): string;
							public getGeometryObject(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonLineStringStyle extends com.google.maps.android.data.Style implements com.google.maps.android.data.geojson.GeoJsonStyle {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonLineStringStyle>;
							public constructor();
							public getWidth(): number;
							public setVisible(param0: boolean): void;
							public setVisible(visible: boolean): void;
							public setZIndex(zIndex: number): void;
							public isVisible(): boolean;
							public isClickable(): boolean;
							public toString(): string;
							public getGeometryType(): androidNative.Array<string>;
							public getColor(): number;
							public setPattern(pattern: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							public getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public isGeodesic(): boolean;
							public setWidth(width: number): void;
							public setGeodesic(geodesic: boolean): void;
							public getZIndex(): number;
							public toPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
							public setColor(color: number): void;
							public setClickable(clickable: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonMultiLineString extends com.google.maps.android.data.MultiGeometry {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonMultiLineString>;
							public getGeometryType(): string;
							public getGeometryObject(): java.util.List<com.google.maps.android.data.Geometry<any>>;
							public getLineStrings(): java.util.List<com.google.maps.android.data.geojson.GeoJsonLineString>;
							public constructor(geoJsonLineStrings: java.util.List<com.google.maps.android.data.geojson.GeoJsonLineString>);
							public getType(): string;
							public getGeometryObject(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonMultiPoint extends com.google.maps.android.data.MultiGeometry {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonMultiPoint>;
							public getGeometryType(): string;
							public getGeometryObject(): java.util.List<com.google.maps.android.data.Geometry<any>>;
							public constructor(geoJsonPoints: java.util.List<com.google.maps.android.data.geojson.GeoJsonPoint>);
							public getPoints(): java.util.List<com.google.maps.android.data.geojson.GeoJsonPoint>;
							public getType(): string;
							public getGeometryObject(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonMultiPolygon extends com.google.maps.android.data.MultiGeometry {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonMultiPolygon>;
							public getGeometryType(): string;
							public getGeometryObject(): java.util.List<com.google.maps.android.data.Geometry<any>>;
							public getPolygons(): java.util.List<com.google.maps.android.data.geojson.GeoJsonPolygon>;
							public constructor(geoJsonPolygons: java.util.List<com.google.maps.android.data.geojson.GeoJsonPolygon>);
							public getType(): string;
							public getGeometryObject(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonParser {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonParser>;
							public getBoundingBox(): com.google.android.gms.maps.model.LatLngBounds;
							public static parseGeometry(geometryArray: org.json.JSONObject): com.google.maps.android.data.Geometry<any>;
							public getFeatures(): java.util.ArrayList<com.google.maps.android.data.geojson.GeoJsonFeature>;
							public constructor(geoJsonFile: org.json.JSONObject);
						}
						export module GeoJsonParser {
							export class LatLngAlt {
								public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonParser.LatLngAlt>;
								public latLng: com.google.android.gms.maps.model.LatLng;
								public altitude: java.lang.Double;
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
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonPoint extends com.google.maps.android.data.Point {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonPoint>;
							public getGeometryType(): string;
							public getAltitude(): java.lang.Double;
							public getGeometryObject(): com.google.android.gms.maps.model.LatLng;
							public getCoordinates(): com.google.android.gms.maps.model.LatLng;
							public constructor(coordinates: com.google.android.gms.maps.model.LatLng, altitude: java.lang.Double);
							public getType(): string;
							public getGeometryObject(): any;
							public constructor(coordinates: com.google.android.gms.maps.model.LatLng);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonPointStyle extends com.google.maps.android.data.Style implements com.google.maps.android.data.geojson.GeoJsonStyle {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonPointStyle>;
							public setZIndex(zIndex: number): void;
							public getAlpha(): number;
							public setRotation(rotation: number): void;
							public toString(): string;
							public getGeometryType(): androidNative.Array<string>;
							public setIcon(bitmap: com.google.android.gms.maps.model.BitmapDescriptor): void;
							public isDraggable(): boolean;
							public setInfoWindowAnchor(infoWindowAnchorU: number, infoWindowAnchorV: number): void;
							public isFlat(): boolean;
							public setAnchor(anchorU: number, anchorV: number): void;
							public getZIndex(): number;
							public constructor();
							public setFlat(flat: boolean): void;
							public setDraggable(draggable: boolean): void;
							public setVisible(param0: boolean): void;
							public setVisible(visible: boolean): void;
							public getAnchorV(): number;
							public getIcon(): com.google.android.gms.maps.model.BitmapDescriptor;
							public getTitle(): string;
							public isVisible(): boolean;
							public getInfoWindowAnchorV(): number;
							public getRotation(): number;
							public setSnippet(snippet: string): void;
							public getAnchorU(): number;
							public toMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
							public getSnippet(): string;
							public getInfoWindowAnchorU(): number;
							public setAlpha(alpha: number): void;
							public setTitle(title: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonPolygon extends com.google.maps.android.data.DataPolygon<any> {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonPolygon>;
							public getGeometryType(): string;
							public constructor(coordinates: java.util.List<any>);
							public getOuterBoundaryCoordinates(): java.util.ArrayList<com.google.android.gms.maps.model.LatLng>;
							public getOuterBoundaryCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public getInnerBoundaryCoordinates(): java.util.ArrayList<java.util.ArrayList<com.google.android.gms.maps.model.LatLng>>;
							public getInnerBoundaryCoordinates(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>;
							public getGeometryObject(): java.util.List<any>;
							public toString(): string;
							public getType(): string;
							public getGeometryObject(): any;
							public getCoordinates(): java.util.List<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonPolygonStyle extends com.google.maps.android.data.Style implements com.google.maps.android.data.geojson.GeoJsonStyle {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonPolygonStyle>;
							public constructor();
							public getStrokeJointType(): number;
							public setVisible(param0: boolean): void;
							public setVisible(visible: boolean): void;
							public setFillColor(fillColor: number): void;
							public setZIndex(zIndex: number): void;
							public isVisible(): boolean;
							public toString(): string;
							public isClickable(): boolean;
							public getGeometryType(): androidNative.Array<string>;
							public getStrokeColor(): number;
							public isGeodesic(): boolean;
							public setStrokePattern(strokePattern: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							public getStrokeWidth(): number;
							public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public setGeodesic(geodesic: boolean): void;
							public setStrokeColor(strokeColor: number): void;
							public setStrokeJointType(strokeJointType: number): void;
							public toPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
							public getFillColor(): number;
							public getZIndex(): number;
							public setStrokeWidth(strokeWidth: number): void;
							public setClickable(clickable: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonRenderer extends com.google.maps.android.data.Renderer {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonRenderer>;
							public addFeature(placemarkId: com.google.maps.android.data.Feature): void;
							public removeFeature(feature: com.google.maps.android.data.Feature): void;
							public removeFeature(feature: com.google.maps.android.data.geojson.GeoJsonFeature): void;
							public removeLayerFromMap(): void;
							public setMap(this_: com.google.android.gms.maps.GoogleMap): void;
							public addLayerToMap(): void;
							public addFeature(feature: com.google.maps.android.data.geojson.GeoJsonFeature): void;
							public update(featureIsOnMap: java.util.Observable, this_: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module geojson {
						export class GeoJsonStyle {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonStyle>;
							/**
							 * Constructs a new instance of the com.google.maps.android.data.geojson.GeoJsonStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getGeometryType(): androidNative.Array<string>; isVisible(): boolean; setVisible(param0: boolean): void });
							public constructor();
							public setVisible(param0: boolean): void;
							public isVisible(): boolean;
							public getGeometryType(): androidNative.Array<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlBoolean {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlBoolean>;
							public constructor();
							public static parseBoolean(text: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlContainer {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlContainer>;
							public getContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
							public hasProperties(): boolean;
							public hasPlacemarks(): boolean;
							public getStyleIdFromMap(styleID: string): string;
							public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
							public toString(): string;
							public hasContainers(): boolean;
							public getProperties(): java.lang.Iterable<string>;
							public getProperty(propertyName: string): string;
							public getPlacemarks(): java.lang.Iterable<com.google.maps.android.data.kml.KmlPlacemark>;
							public getContainerId(): string;
							public hasProperty(keyValue: string): boolean;
							public getStyle(styleID: string): com.google.maps.android.data.kml.KmlStyle;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlContainerParser {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlContainerParser>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlFeatureParser {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlFeatureParser>;
						}
						export module KmlFeatureParser {
							export class LatLngAlt {
								public static class: java.lang.Class<com.google.maps.android.data.kml.KmlFeatureParser.LatLngAlt>;
								public latLng: com.google.android.gms.maps.model.LatLng;
								public altitude: java.lang.Double;
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
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlGroundOverlay {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlGroundOverlay>;
							public getImageUrl(): string;
							public getProperty(keyValue: string): string;
							public hasProperty(keyValue: string): boolean;
							public toString(): string;
							public getLatLngBox(): com.google.android.gms.maps.model.LatLngBounds;
							public getProperties(): java.lang.Iterable<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlLayer extends com.google.maps.android.data.Layer {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlLayer>;
							public constructor();
							public getContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
							public hasPlacemarks(): boolean;
							public getPlacemarks(): java.lang.Iterable<com.google.maps.android.data.kml.KmlPlacemark>;
							public constructor(map: com.google.android.gms.maps.GoogleMap, resourceId: number, context: globalAndroid.content.Context);
							public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
							public constructor(map: com.google.android.gms.maps.GoogleMap, stream: java.io.InputStream, context: globalAndroid.content.Context);
							public constructor(images: com.google.android.gms.maps.GoogleMap, parser: java.io.InputStream, entry: globalAndroid.content.Context, this_: com.google.maps.android.collections.MarkerManager, map: com.google.maps.android.collections.PolygonManager, stream: com.google.maps.android.collections.PolylineManager, context: com.google.maps.android.collections.GroundOverlayManager, markerManager: com.google.maps.android.data.Renderer.ImagesCache);
							public addLayerToMap(): void;
							public hasContainers(): boolean;
							public constructor(map: com.google.android.gms.maps.GoogleMap, resourceId: number, context: globalAndroid.content.Context, markerManager: com.google.maps.android.collections.MarkerManager, polygonManager: com.google.maps.android.collections.PolygonManager, polylineManager: com.google.maps.android.collections.PolylineManager, groundOverlayManager: com.google.maps.android.collections.GroundOverlayManager, cache: com.google.maps.android.data.Renderer.ImagesCache);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlLineString extends com.google.maps.android.data.LineString {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlLineString>;
							public getGeometryType(): string;
							public constructor(coordinates: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>);
							public getGeometryObject(): java.util.ArrayList<com.google.android.gms.maps.model.LatLng>;
							public constructor(coordinates: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>, altitudes: java.util.ArrayList<java.lang.Double>);
							public getAltitudes(): java.util.ArrayList<java.lang.Double>;
							public constructor(coordinates: java.util.List<com.google.android.gms.maps.model.LatLng>);
							public getGeometryObject(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public getGeometryObject(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlMultiGeometry extends com.google.maps.android.data.MultiGeometry {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlMultiGeometry>;
							public getGeometryObject(): java.util.List<com.google.maps.android.data.Geometry<any>>;
							public getGeometryType(): string;
							public getGeometryObject(): java.util.ArrayList<com.google.maps.android.data.Geometry<any>>;
							public constructor(geometries: java.util.ArrayList<com.google.maps.android.data.Geometry<any>>);
							public toString(): string;
							public constructor(this_: java.util.List<any>);
							public getGeometryObject(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlMultiTrack extends com.google.maps.android.data.kml.KmlMultiGeometry {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlMultiTrack>;
							public getGeometryType(): string;
							public getGeometryObject(): java.util.List<com.google.maps.android.data.Geometry<any>>;
							public getGeometryObject(): java.util.ArrayList<com.google.maps.android.data.Geometry<any>>;
							public constructor(this_: java.util.List<any>);
							public getGeometryObject(): any;
							public constructor(tracks: java.util.ArrayList<com.google.maps.android.data.kml.KmlTrack>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlParser {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlParser>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlPlacemark extends com.google.maps.android.data.Feature {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlPlacemark>;
							public getStyleId(): string;
							public getPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
							public constructor(featureGeometry: com.google.maps.android.data.Geometry<any>, id: string, properties: java.util.Map<string, string>);
							public getPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
							public toString(): string;
							public constructor(geometry: com.google.maps.android.data.Geometry<any>, style: string, inlineStyle: com.google.maps.android.data.kml.KmlStyle, properties: java.util.Map<string, string>);
							public getMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
							public getInlineStyle(): com.google.maps.android.data.kml.KmlStyle;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlPoint extends com.google.maps.android.data.Point {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlPoint>;
							public getGeometryType(): string;
							public getAltitude(): java.lang.Double;
							public getGeometryObject(): com.google.android.gms.maps.model.LatLng;
							public constructor(coordinates: com.google.android.gms.maps.model.LatLng, altitude: java.lang.Double);
							public getGeometryObject(): any;
							public constructor(coordinates: com.google.android.gms.maps.model.LatLng);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlPolygon extends com.google.maps.android.data.DataPolygon<java.util.ArrayList<java.util.ArrayList<com.google.android.gms.maps.model.LatLng>>> {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlPolygon>;
							public static GEOMETRY_TYPE: string = 'Polygon';
							public getGeometryType(): string;
							public getOuterBoundaryCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public getInnerBoundaryCoordinates(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>;
							public toString(): string;
							public getGeometryObject(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>;
							public getGeometryObject(): any;
							public constructor(outerBoundaryCoordinates: java.util.List<com.google.android.gms.maps.model.LatLng>, innerBoundaryCoordinates: java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlRenderer extends com.google.maps.android.data.Renderer {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlRenderer>;
							public removeLayerFromMap(): void;
							public setMap(map: com.google.android.gms.maps.GoogleMap): void;
							public hasNestedContainers(): boolean;
							public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
							public getNestedContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
							public addLayerToMap(): void;
						}
						export module KmlRenderer {
							export class GroundOverlayImageDownload extends globalAndroid.os.AsyncTask<string, java.lang.Void, globalAndroid.graphics.Bitmap> {
								public static class: java.lang.Class<com.google.maps.android.data.kml.KmlRenderer.GroundOverlayImageDownload>;
								public onPostExecute(bitmap: globalAndroid.graphics.Bitmap): void;
								public constructor(groundOverlayUrl: com.google.maps.android.data.kml.KmlRenderer, param1: string);
								public doInBackground(e: androidNative.Array<string>): globalAndroid.graphics.Bitmap;
							}
							export class MarkerIconImageDownload extends globalAndroid.os.AsyncTask<string, java.lang.Void, globalAndroid.graphics.Bitmap> {
								public static class: java.lang.Class<com.google.maps.android.data.kml.KmlRenderer.MarkerIconImageDownload>;
								public constructor(iconUrl: com.google.maps.android.data.kml.KmlRenderer, param1: string);
								public onPostExecute(bitmap: globalAndroid.graphics.Bitmap): void;
								public doInBackground(e: androidNative.Array<string>): globalAndroid.graphics.Bitmap;
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
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlStyle extends com.google.maps.android.data.Style {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlStyle>;
							public hasOutline(): boolean;
							public getBalloonOptions(): java.util.HashMap<string, string>;
							public static computeRandomColor(color: number): number;
							public getPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
							public getPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
							public toString(): string;
							public hasBalloonStyle(): boolean;
							public isLineRandomColorMode(): boolean;
							public getMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
							public getIconUrl(): string;
							public hasFill(): boolean;
							public isPolyRandomColorMode(): boolean;
							public isStyleSet(style: string): boolean;
							public getIconScale(): number;
							public setFill(fill: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlStyleParser {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlStyleParser>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlTrack extends com.google.maps.android.data.kml.KmlLineString {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlTrack>;
							public getGeometryType(): string;
							public constructor(coordinates: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>, altitudes: java.util.ArrayList<java.lang.Double>, timestamps: java.util.ArrayList<java.lang.Long>, properties: java.util.HashMap<string, string>);
							public getTimestamps(): java.util.ArrayList<java.lang.Long>;
							public constructor(coordinates: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>);
							public getProperties(): java.util.HashMap<string, string>;
							public getGeometryObject(): java.util.ArrayList<com.google.android.gms.maps.model.LatLng>;
							public constructor(coordinates: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>, altitudes: java.util.ArrayList<java.lang.Double>);
							public constructor(coordinates: java.util.List<com.google.android.gms.maps.model.LatLng>);
							public getGeometryObject(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public getGeometryObject(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module data {
					export module kml {
						export class KmlUtil {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlUtil>;
							public constructor();
							public static substituteProperties(property: string, value: com.google.maps.android.data.kml.KmlPlacemark): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module geometry {
					export class Bounds {
						public static class: java.lang.Class<com.google.maps.android.geometry.Bounds>;
						public minX: number;
						public minY: number;
						public maxX: number;
						public maxY: number;
						public midX: number;
						public midY: number;
						public contains(point: com.google.maps.android.geometry.Point): boolean;
						public contains(bounds: com.google.maps.android.geometry.Bounds): boolean;
						public constructor(minX: number, maxX: number, minY: number, maxY: number);
						public contains(x: number, y: number): boolean;
						public intersects(bounds: com.google.maps.android.geometry.Bounds): boolean;
						public intersects(minX: number, maxX: number, minY: number, maxY: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module geometry {
					export class Point {
						public static class: java.lang.Class<com.google.maps.android.geometry.Point>;
						public x: number;
						public y: number;
						public constructor(x: number, y: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module heatmaps {
					export class Gradient {
						public static class: java.lang.Class<com.google.maps.android.heatmaps.Gradient>;
						public mColorMapSize: number;
						public mColors: androidNative.Array<number>;
						public mStartPoints: androidNative.Array<number>;
						public constructor(colors: androidNative.Array<number>, startPoints: androidNative.Array<number>);
						public constructor(this_: androidNative.Array<number>, colors: androidNative.Array<number>, startPoints: number);
					}
					export module Gradient {
						export class ColorInterval {
							public static class: java.lang.Class<com.google.maps.android.heatmaps.Gradient.ColorInterval>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module heatmaps {
					export class HeatmapTileProvider {
						public static class: java.lang.Class<com.google.maps.android.heatmaps.HeatmapTileProvider>;
						public static DEFAULT_RADIUS: number = 20;
						public static DEFAULT_OPACITY: number = 0.7;
						public static DEFAULT_GRADIENT: com.google.maps.android.heatmaps.Gradient;
						public setOpacity(opacity: number): void;
						public setMaxIntensity(intensity: number): void;
						public setWeightedData(this_: java.util.Collection<com.google.maps.android.heatmaps.WeightedLatLng>): void;
						public setData(data: java.util.Collection<com.google.android.gms.maps.model.LatLng>): void;
						public setGradient(gradient: com.google.maps.android.heatmaps.Gradient): void;
						public getTile(overlapBounds: number, p: number, bucketX: number): com.google.android.gms.maps.model.Tile;
						public setRadius(radius: number): void;
					}
					export module HeatmapTileProvider {
						export class Builder {
							public static class: java.lang.Class<com.google.maps.android.heatmaps.HeatmapTileProvider.Builder>;
							public constructor();
							public opacity(val: number): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public maxIntensity(val: number): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public data(val: java.util.Collection<com.google.android.gms.maps.model.LatLng>): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public gradient(val: com.google.maps.android.heatmaps.Gradient): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public radius(val: number): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public build(): com.google.maps.android.heatmaps.HeatmapTileProvider;
							public weightedData(val: java.util.Collection<com.google.maps.android.heatmaps.WeightedLatLng>): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module heatmaps {
					export class WeightedLatLng extends com.google.maps.android.quadtree.PointQuadTree.Item {
						public static class: java.lang.Class<com.google.maps.android.heatmaps.WeightedLatLng>;
						public static DEFAULT_INTENSITY: number = 1.0;
						public getPoint(): com.google.maps.android.geometry.Point;
						public constructor(latLng: com.google.android.gms.maps.model.LatLng, intensity: number);
						public getIntensity(): number;
						public constructor(latLng: com.google.android.gms.maps.model.LatLng);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module projection {
					export class Point extends com.google.maps.android.geometry.Point {
						public static class: java.lang.Class<com.google.maps.android.projection.Point>;
						public constructor(x: number, y: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module projection {
					export class SphericalMercatorProjection {
						public static class: java.lang.Class<com.google.maps.android.projection.SphericalMercatorProjection>;
						public constructor(worldWidth: number);
						public toLatLng(point: com.google.maps.android.geometry.Point): com.google.android.gms.maps.model.LatLng;
						public toPoint(latLng: com.google.android.gms.maps.model.LatLng): com.google.maps.android.projection.Point;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module quadtree {
					export class PointQuadTree<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.maps.android.quadtree.PointQuadTree<any>>;
						public constructor(bounds: com.google.maps.android.geometry.Bounds);
						public search(searchBounds: com.google.maps.android.geometry.Bounds): java.util.Collection<T>;
						public remove(item: T): boolean;
						public constructor(minX: number, maxX: number, minY: number, maxY: number);
						public clear(): void;
						public add(item: T): void;
					}
					export module PointQuadTree {
						export class Item {
							public static class: java.lang.Class<com.google.maps.android.quadtree.PointQuadTree.Item>;
							/**
							 * Constructs a new instance of the com.google.maps.android.quadtree.PointQuadTree$Item interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getPoint(): com.google.maps.android.geometry.Point });
							public constructor();
							public getPoint(): com.google.maps.android.geometry.Point;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module ui {
					export class AnimationUtil {
						public static class: java.lang.Class<com.google.maps.android.ui.AnimationUtil>;
						public constructor();
						public static animateMarkerTo(marker: com.google.android.gms.maps.model.Marker, finalPosition: com.google.android.gms.maps.model.LatLng): void;
						public static animateMarkerTo(marker: com.google.android.gms.maps.model.Marker, finalPosition: com.google.android.gms.maps.model.LatLng, durationInMs: number): void;
					}
					export module AnimationUtil {
						export class LatLngInterpolator {
							public static class: java.lang.Class<com.google.maps.android.ui.AnimationUtil.LatLngInterpolator>;
							/**
							 * Constructs a new instance of the com.google.maps.android.ui.AnimationUtil$LatLngInterpolator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { interpolate(param0: number, param1: com.google.android.gms.maps.model.LatLng, param2: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.LatLng });
							public constructor();
							public interpolate(param0: number, param1: com.google.android.gms.maps.model.LatLng, param2: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.LatLng;
						}
						export module LatLngInterpolator {
							export class Linear extends com.google.maps.android.ui.AnimationUtil.LatLngInterpolator {
								public static class: java.lang.Class<com.google.maps.android.ui.AnimationUtil.LatLngInterpolator.Linear>;
								public interpolate(param0: number, param1: com.google.android.gms.maps.model.LatLng, param2: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.LatLng;
								public constructor();
								public interpolate(fraction: number, a: com.google.android.gms.maps.model.LatLng, b: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.LatLng;
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
		export module maps {
			export module android {
				export module ui {
					export class BubbleDrawable {
						public static class: java.lang.Class<com.google.maps.android.ui.BubbleDrawable>;
						public setBounds(bounds: globalAndroid.graphics.Rect): void;
						public setColor(color: number): void;
						public draw(canvas: globalAndroid.graphics.Canvas): void;
						public setAlpha(alpha: number): void;
						public getPadding(padding: globalAndroid.graphics.Rect): boolean;
						public getOpacity(): number;
						public setBounds(left: number, top: number, right: number, bottom: number): void;
						public setColorFilter(cf: globalAndroid.graphics.ColorFilter): void;
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module ui {
					export class BubbleIconFactory {
						public static class: java.lang.Class<com.google.maps.android.ui.BubbleIconFactory>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module ui {
					export class IconGenerator {
						public static class: java.lang.Class<com.google.maps.android.ui.IconGenerator>;
						public static STYLE_DEFAULT: number = 1;
						public static STYLE_WHITE: number = 2;
						public static STYLE_RED: number = 3;
						public static STYLE_BLUE: number = 4;
						public static STYLE_GREEN: number = 5;
						public static STYLE_PURPLE: number = 6;
						public static STYLE_ORANGE: number = 7;
						public setColor(color: number): void;
						public setContentView(contentView: globalAndroid.view.View): void;
						public setContentRotation(degrees: number): void;
						public setContentPadding(left: number, top: number, right: number, bottom: number): void;
						public makeIcon(text: string): globalAndroid.graphics.Bitmap;
						public getAnchorU(): number;
						public makeIcon(): globalAndroid.graphics.Bitmap;
						public setStyle(style: number): void;
						public setTextAppearance(context: globalAndroid.content.Context, resid: number): void;
						public setTextAppearance(resid: number): void;
						public setRotation(degrees: number): void;
						public constructor(context: globalAndroid.content.Context);
						public setBackground(this_: globalAndroid.graphics.drawable.Drawable): void;
						public getAnchorV(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module ui {
					export class RotationLayout {
						public static class: java.lang.Class<com.google.maps.android.ui.RotationLayout>;
						public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
						public setViewRotation(degrees: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
						public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module maps {
			export module android {
				export module ui {
					export class SquareTextView {
						public static class: java.lang.Class<com.google.maps.android.ui.SquareTextView>;
						public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
						public draw(canvas: globalAndroid.graphics.Canvas): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.maps.android.clustering.Cluster:1
//com.google.maps.android.clustering.ClusterManager:1
//com.google.maps.android.clustering.ClusterManager.OnClusterClickListener:1
//com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener:1
//com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener:1
//com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener:1
//com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener:1
//com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener:1
//com.google.maps.android.clustering.algo.AbstractAlgorithm:1
//com.google.maps.android.clustering.algo.Algorithm:1
//com.google.maps.android.clustering.algo.GridBasedAlgorithm:1
//com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm:1
//com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem:1
//com.google.maps.android.clustering.algo.NonHierarchicalViewBasedAlgorithm:1
//com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator:1
//com.google.maps.android.clustering.algo.ScreenBasedAlgorithm:1
//com.google.maps.android.clustering.algo.ScreenBasedAlgorithmAdapter:1
//com.google.maps.android.clustering.algo.StaticCluster:1
//com.google.maps.android.clustering.view.ClusterRenderer:1
//com.google.maps.android.clustering.view.ClusterRendererMultipleItems:1
//com.google.maps.android.clustering.view.ClusterRendererMultipleItems.MarkerCache:1
//com.google.maps.android.clustering.view.ClusterRendererMultipleItems.MarkerWithPosition:1
//com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer:1
//com.google.maps.android.clustering.view.DefaultAdvancedMarkersClusterRenderer.MarkerCache:1
//com.google.maps.android.clustering.view.DefaultClusterRenderer:1
//com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerCache:1
//com.google.maps.android.collections.MapObjectManager:2
//com.google.maps.android.data.DataPolygon:1
//com.google.maps.android.data.Geometry:1
//com.google.maps.android.data.geojson.BiMultiMap:1
//com.google.maps.android.quadtree.PointQuadTree:1
