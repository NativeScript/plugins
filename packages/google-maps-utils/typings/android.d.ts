/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module maps {
			export module android {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.maps.android.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static TRAVIS: string;
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
					public static DEFAULT_TOLERANCE: number;
					public static distanceToLine(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.LatLng, param2: com.google.android.gms.maps.model.LatLng): number;
					public static isLocationOnEdge(param0: com.google.android.gms.maps.model.LatLng, param1: java.util.List<com.google.android.gms.maps.model.LatLng>, param2: boolean): boolean;
					public static isLocationOnEdge(param0: com.google.android.gms.maps.model.LatLng, param1: java.util.List<com.google.android.gms.maps.model.LatLng>, param2: boolean, param3: number): boolean;
					public static locationIndexOnPath(param0: com.google.android.gms.maps.model.LatLng, param1: java.util.List<com.google.android.gms.maps.model.LatLng>, param2: boolean, param3: number): number;
					public static isClosedPolygon(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): boolean;
					public static locationIndexOnPath(param0: com.google.android.gms.maps.model.LatLng, param1: java.util.List<com.google.android.gms.maps.model.LatLng>, param2: boolean): number;
					public static isLocationOnPath(param0: com.google.android.gms.maps.model.LatLng, param1: java.util.List<com.google.android.gms.maps.model.LatLng>, param2: boolean): boolean;
					public static containsLocation(param0: com.google.android.gms.maps.model.LatLng, param1: java.util.List<com.google.android.gms.maps.model.LatLng>, param2: boolean): boolean;
					public static isLocationOnPath(param0: com.google.android.gms.maps.model.LatLng, param1: java.util.List<com.google.android.gms.maps.model.LatLng>, param2: boolean, param3: number): boolean;
					public static locationIndexOnEdgeOrPath(param0: com.google.android.gms.maps.model.LatLng, param1: java.util.List<com.google.android.gms.maps.model.LatLng>, param2: boolean, param3: boolean, param4: number): number;
					public static containsLocation(param0: number, param1: number, param2: java.util.List<com.google.android.gms.maps.model.LatLng>, param3: boolean): boolean;
					public static decode(param0: string): java.util.List<com.google.android.gms.maps.model.LatLng>;
					public static simplify(param0: java.util.List<com.google.android.gms.maps.model.LatLng>, param1: number): java.util.List<com.google.android.gms.maps.model.LatLng>;
					public static encode(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): string;
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
					public static computeArea(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): number;
					public static computeSignedArea(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): number;
					public static computeOffset(param0: com.google.android.gms.maps.model.LatLng, param1: number, param2: number): com.google.android.gms.maps.model.LatLng;
					public static computeLength(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): number;
					public static interpolate(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.LatLng, param2: number): com.google.android.gms.maps.model.LatLng;
					public static computeHeading(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.LatLng): number;
					public static computeDistanceBetween(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.LatLng): number;
					public static computeOffsetOrigin(param0: com.google.android.gms.maps.model.LatLng, param1: number, param2: number): com.google.android.gms.maps.model.LatLng;
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
						public setOnClusterItemInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<T>): void;
						public updateItem(param0: T): boolean;
						public removeItems(param0: java.util.Collection<T>): boolean;
						public setAlgorithm(param0: com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<T>): void;
						public setAnimation(param0: boolean): void;
						public getRenderer(): com.google.maps.android.clustering.view.ClusterRenderer<T>;
						public getAlgorithm(): com.google.maps.android.clustering.algo.Algorithm<T>;
						public setOnClusterInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<T>): void;
						public setAlgorithm(param0: com.google.maps.android.clustering.algo.Algorithm<T>): void;
						public onInfoWindowClick(param0: com.google.android.gms.maps.model.Marker): void;
						public getClusterMarkerCollection(): com.google.maps.android.collections.MarkerManager.Collection;
						public setOnClusterItemClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<T>): void;
						public onMarkerClick(param0: com.google.android.gms.maps.model.Marker): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.maps.GoogleMap);
						public clearItems(): void;
						public setOnClusterInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<T>): void;
						public setOnClusterItemInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<T>): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.maps.GoogleMap, param2: com.google.maps.android.collections.MarkerManager);
						public setOnClusterClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<T>): void;
						public addItems(param0: java.util.Collection<T>): boolean;
						public addItem(param0: T): boolean;
						public onCameraIdle(): void;
						public cluster(): void;
						public setRenderer(param0: com.google.maps.android.clustering.view.ClusterRenderer<T>): void;
						public removeItem(param0: T): boolean;
						public getMarkerCollection(): com.google.maps.android.collections.MarkerManager.Collection;
						public getMarkerManager(): com.google.maps.android.collections.MarkerManager;
					}
					export module ClusterManager {
						export class ClusterTask extends globalAndroid.os.AsyncTask<java.lang.Float, java.lang.Void, java.util.Set<any>> {
							public static class: java.lang.Class<com.google.maps.android.clustering.ClusterManager.ClusterTask>;
							public doInBackground(param0: androidNative.Array<java.lang.Float>): java.util.Set<any>;
							public onPostExecute(param0: java.util.Set<any>): void;
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
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public getClusters(param0: number): java.util.Set<any>;
							public addItem(param0: any): boolean;
							public unlock(): void;
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
						export class NonHierarchicalDistanceBasedAlgorithm<T> extends com.google.maps.android.clustering.algo.AbstractAlgorithm<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm<any>>;
							public constructor();
							public addItems(param0: java.util.Collection<any>): boolean;
							public getClusteringItems(param0: com.google.maps.android.quadtree.PointQuadTree<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>>, param1: number): java.util.Collection<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>>;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public getClusters(param0: number): java.util.Set<any>;
							public addItem(param0: any): boolean;
							public unlock(): void;
							public removeItem(param0: any): boolean;
							public getItems(): java.util.Collection<any>;
							public clearItems(): void;
							public lock(): void;
							public updateItem(param0: any): boolean;
							public getMaxDistanceBetweenClusteredItems(): number;
							public removeItems(param0: java.util.Collection<any>): boolean;
						}
						export module NonHierarchicalDistanceBasedAlgorithm {
							export class QuadItem<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>>;
								public getItems(): java.util.Set<T>;
								public equals(param0: any): boolean;
								public getPoint(): com.google.maps.android.geometry.Point;
								public getItems(): java.util.Collection<T>;
								public getSize(): number;
								public hashCode(): number;
								public getPosition(): com.google.android.gms.maps.model.LatLng;
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
							public constructor(param0: number, param1: number);
							public getClusteringItems(param0: com.google.maps.android.quadtree.PointQuadTree<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>>, param1: number): java.util.Collection<com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>>;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public getClusters(param0: number): java.util.Set<any>;
							public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
							public addItem(param0: any): boolean;
							public unlock(): void;
							public updateViewSize(param0: number, param1: number): void;
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
						export class PreCachingAlgorithmDecorator<T> extends com.google.maps.android.clustering.algo.AbstractAlgorithm<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator<any>>;
							public constructor();
							public addItems(param0: java.util.Collection<any>): boolean;
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public constructor(param0: com.google.maps.android.clustering.algo.Algorithm<any>);
							public getClusters(param0: number): java.util.Set<any>;
							public addItem(param0: any): boolean;
							public unlock(): void;
							public removeItem(param0: any): boolean;
							public getItems(): java.util.Collection<any>;
							public clearItems(): void;
							public lock(): void;
							public updateItem(param0: any): boolean;
							public getMaxDistanceBetweenClusteredItems(): number;
							public removeItems(param0: java.util.Collection<any>): boolean;
						}
						export module PreCachingAlgorithmDecorator {
							export class PrecacheRunnable {
								public static class: java.lang.Class<com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator.PrecacheRunnable>;
								public constructor(param0: com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator<any>, param1: number);
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
							public setMaxDistanceBetweenClusteredItems(param0: number): void;
							public constructor(param0: com.google.maps.android.clustering.algo.Algorithm<any>);
							public getClusters(param0: number): java.util.Set<any>;
							public addItem(param0: any): boolean;
							public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
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
						export class StaticCluster<T> extends com.google.maps.android.clustering.Cluster<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.algo.StaticCluster<any>>;
							public add(param0: any): boolean;
							public getSize(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public constructor(param0: com.google.android.gms.maps.model.LatLng);
							public getPosition(): com.google.android.gms.maps.model.LatLng;
							public toString(): string;
							public equals(param0: any): boolean;
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
						export class DefaultClusterRenderer<T> extends com.google.maps.android.clustering.view.ClusterRenderer<any> {
							public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer<any>>;
							public onClusterItemUpdated(param0: any, param1: com.google.android.gms.maps.model.Marker): void;
							public getClusterText(param0: number): string;
							public getBucket(param0: com.google.maps.android.clustering.Cluster<any>): number;
							public onClustersChanged(param0: java.util.Set<any>): void;
							public setOnClusterItemInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<any>): void;
							public onClusterRendered(param0: com.google.maps.android.clustering.Cluster<any>, param1: com.google.android.gms.maps.model.Marker): void;
							public onClusterUpdated(param0: com.google.maps.android.clustering.Cluster<any>, param1: com.google.android.gms.maps.model.Marker): void;
							public setMinClusterSize(param0: number): void;
							public setOnClusterItemClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<any>): void;
							public getClusterItem(param0: com.google.android.gms.maps.model.Marker): any;
							public shouldRender(param0: java.util.Set<any>, param1: java.util.Set<any>): boolean;
							public getColor(param0: number): number;
							public onBeforeClusterRendered(param0: com.google.maps.android.clustering.Cluster<any>, param1: com.google.android.gms.maps.model.MarkerOptions): void;
							public onRemove(): void;
							public setAnimation(param0: boolean): void;
							public getMarker(param0: com.google.maps.android.clustering.Cluster<any>): com.google.android.gms.maps.model.Marker;
							public getDescriptorForCluster(param0: com.google.maps.android.clustering.Cluster<any>): com.google.android.gms.maps.model.BitmapDescriptor;
							public getMinClusterSize(): number;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.maps.GoogleMap, param2: com.google.maps.android.clustering.ClusterManager<any>);
							public getClusterTextAppearance(param0: number): number;
							public setOnClusterInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<any>): void;
							public setOnClusterClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<any>): void;
							public onBeforeClusterItemRendered(param0: any, param1: com.google.android.gms.maps.model.MarkerOptions): void;
							public setOnClusterInfoWindowLongClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<any>): void;
							public onAdd(): void;
							public setOnClusterItemInfoWindowClickListener(param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<any>): void;
							public getCluster(param0: com.google.android.gms.maps.model.Marker): com.google.maps.android.clustering.Cluster<any>;
							public shouldRenderAsCluster(param0: com.google.maps.android.clustering.Cluster<any>): boolean;
							public onClusterItemRendered(param0: any, param1: com.google.android.gms.maps.model.Marker): void;
							public getMarker(param0: any): com.google.android.gms.maps.model.Marker;
							public setAnimationDuration(param0: number): void;
						}
						export module DefaultClusterRenderer {
							export class AnimationTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.AnimationTask>;
								public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
								public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
								public removeOnAnimationComplete(param0: com.google.maps.android.collections.MarkerManager): void;
								public perform(): void;
							}
							export class CreateMarkerTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.CreateMarkerTask>;
								public constructor(param0: com.google.maps.android.clustering.Cluster<any>, param1: java.util.Set<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition>, param2: com.google.android.gms.maps.model.LatLng);
							}
							export class MarkerCache<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerCache<any>>;
								public put(param0: T, param1: com.google.android.gms.maps.model.Marker): void;
								public remove(param0: com.google.android.gms.maps.model.Marker): void;
								public get(param0: com.google.android.gms.maps.model.Marker): T;
								public get(param0: T): com.google.android.gms.maps.model.Marker;
							}
							export class MarkerModifier {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerModifier>;
								public animate(param0: com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition, param1: com.google.android.gms.maps.model.LatLng, param2: com.google.android.gms.maps.model.LatLng): void;
								public animateThenRemove(param0: com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition, param1: com.google.android.gms.maps.model.LatLng, param2: com.google.android.gms.maps.model.LatLng): void;
								public handleMessage(param0: globalAndroid.os.Message): void;
								public waitUntilFree(): void;
								public add(param0: boolean, param1: com.google.maps.android.clustering.view.DefaultClusterRenderer.CreateMarkerTask): void;
								public remove(param0: boolean, param1: com.google.android.gms.maps.model.Marker): void;
								public queueIdle(): boolean;
								public isBusy(): boolean;
							}
							export class MarkerWithPosition {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition>;
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
							export class RenderTask {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.RenderTask>;
								public setMapZoom(param0: number): void;
								public setProjection(param0: com.google.android.gms.maps.Projection): void;
								public setCallback(param0: java.lang.Runnable): void;
								public run(): void;
							}
							export class ViewModifier {
								public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.ViewModifier>;
								public handleMessage(param0: globalAndroid.os.Message): void;
								public queue(param0: java.util.Set<any>): void;
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
						public newCollection(): com.google.maps.android.collections.CircleManager.Collection;
						public removeObjectFromMap(param0: com.google.android.gms.maps.model.Circle): void;
						public removeObjectFromMap(param0: any): void;
						public newCollection(param0: string): any;
						public onCircleClick(param0: com.google.android.gms.maps.model.Circle): void;
						public constructor(param0: com.google.android.gms.maps.GoogleMap);
						public newCollection(): any;
					}
					export module CircleManager {
						export class Collection extends com.google.maps.android.collections.MapObjectManager.Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.CircleManager.Collection>;
							public setOnCircleClickListener(param0: com.google.android.gms.maps.GoogleMap.OnCircleClickListener): void;
							public addAll(param0: java.util.Collection<com.google.android.gms.maps.model.CircleOptions>): void;
							public remove(param0: any): boolean;
							public showAll(): void;
							public remove(param0: com.google.android.gms.maps.model.Circle): boolean;
							public hideAll(): void;
							public constructor(param0: com.google.maps.android.collections.MapObjectManager<any, any>);
							public addAll(param0: java.util.Collection<com.google.android.gms.maps.model.CircleOptions>, param1: boolean): void;
							public addCircle(param0: com.google.android.gms.maps.model.CircleOptions): com.google.android.gms.maps.model.Circle;
							public constructor(param0: com.google.maps.android.collections.CircleManager);
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
						public newCollection(): com.google.maps.android.collections.GroundOverlayManager.Collection;
						public removeObjectFromMap(param0: any): void;
						public removeObjectFromMap(param0: com.google.android.gms.maps.model.GroundOverlay): void;
						public newCollection(param0: string): any;
						public constructor(param0: com.google.android.gms.maps.GoogleMap);
						public newCollection(): any;
						public onGroundOverlayClick(param0: com.google.android.gms.maps.model.GroundOverlay): void;
					}
					export module GroundOverlayManager {
						export class Collection extends com.google.maps.android.collections.MapObjectManager.Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.GroundOverlayManager.Collection>;
							public constructor(param0: com.google.maps.android.collections.GroundOverlayManager);
							public remove(param0: any): boolean;
							public showAll(): void;
							public addAll(param0: java.util.Collection<com.google.android.gms.maps.model.GroundOverlayOptions>): void;
							public addAll(param0: java.util.Collection<com.google.android.gms.maps.model.GroundOverlayOptions>, param1: boolean): void;
							public hideAll(): void;
							public constructor(param0: com.google.maps.android.collections.MapObjectManager<any, any>);
							public setOnGroundOverlayClickListener(param0: com.google.android.gms.maps.GoogleMap.OnGroundOverlayClickListener): void;
							public remove(param0: com.google.android.gms.maps.model.GroundOverlay): boolean;
							public getGroundOverlays(): java.util.Collection<com.google.android.gms.maps.model.GroundOverlay>;
							public addGroundOverlay(param0: com.google.android.gms.maps.model.GroundOverlayOptions): com.google.android.gms.maps.model.GroundOverlay;
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
						public removeObjectFromMap(param0: O): void;
						public newCollection(param0: string): C;
						public newCollection(): C;
						public remove(param0: O): boolean;
						public constructor(param0: com.google.android.gms.maps.GoogleMap);
						public getCollection(param0: string): C;
					}
					export module MapObjectManager {
						export class Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.MapObjectManager.Collection>;
							public add(param0: any): void;
							public getObjects(): java.util.Collection<any>;
							public remove(param0: any): boolean;
							public clear(): void;
							public constructor(param0: com.google.maps.android.collections.MapObjectManager<any, any>);
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
						public onInfoWindowLongClick(param0: com.google.android.gms.maps.model.Marker): void;
						public onMarkerDragStart(param0: com.google.android.gms.maps.model.Marker): void;
						public newCollection(): any;
						public removeObjectFromMap(param0: com.google.android.gms.maps.model.Marker): void;
						public getInfoWindow(param0: com.google.android.gms.maps.model.Marker): globalAndroid.view.View;
						public getInfoContents(param0: com.google.android.gms.maps.model.Marker): globalAndroid.view.View;
						public onInfoWindowClick(param0: com.google.android.gms.maps.model.Marker): void;
						public onMarkerDragEnd(param0: com.google.android.gms.maps.model.Marker): void;
						public removeObjectFromMap(param0: any): void;
						public newCollection(param0: string): any;
						public onMarkerClick(param0: com.google.android.gms.maps.model.Marker): boolean;
						public constructor(param0: com.google.android.gms.maps.GoogleMap);
						public onMarkerDrag(param0: com.google.android.gms.maps.model.Marker): void;
						public newCollection(): com.google.maps.android.collections.MarkerManager.Collection;
					}
					export module MarkerManager {
						export class Collection extends com.google.maps.android.collections.MapObjectManager.Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.MarkerManager.Collection>;
							public constructor(param0: com.google.maps.android.collections.MarkerManager);
							public remove(param0: any): boolean;
							public getMarkers(): java.util.Collection<com.google.android.gms.maps.model.Marker>;
							public showAll(): void;
							public hideAll(): void;
							public constructor(param0: com.google.maps.android.collections.MapObjectManager<any, any>);
							public addAll(param0: java.util.Collection<com.google.android.gms.maps.model.MarkerOptions>): void;
							public addAll(param0: java.util.Collection<com.google.android.gms.maps.model.MarkerOptions>, param1: boolean): void;
							public setOnInfoWindowClickListener(param0: com.google.android.gms.maps.GoogleMap.OnInfoWindowClickListener): void;
							public setOnMarkerDragListener(param0: com.google.android.gms.maps.GoogleMap.OnMarkerDragListener): void;
							public setInfoWindowAdapter(param0: com.google.android.gms.maps.GoogleMap.InfoWindowAdapter): void;
							public addMarker(param0: com.google.android.gms.maps.model.MarkerOptions): com.google.android.gms.maps.model.Marker;
							public setOnInfoWindowLongClickListener(param0: com.google.android.gms.maps.GoogleMap.OnInfoWindowLongClickListener): void;
							public setOnMarkerClickListener(param0: com.google.android.gms.maps.GoogleMap.OnMarkerClickListener): void;
							public remove(param0: com.google.android.gms.maps.model.Marker): boolean;
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
						public newCollection(param0: string): any;
						public removeObjectFromMap(param0: com.google.android.gms.maps.model.Polygon): void;
						public constructor(param0: com.google.android.gms.maps.GoogleMap);
						public newCollection(): any;
						public onPolygonClick(param0: com.google.android.gms.maps.model.Polygon): void;
					}
					export module PolygonManager {
						export class Collection extends com.google.maps.android.collections.MapObjectManager.Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.PolygonManager.Collection>;
							public addAll(param0: java.util.Collection<com.google.android.gms.maps.model.PolygonOptions>): void;
							public constructor(param0: com.google.maps.android.collections.PolygonManager);
							public addPolygon(param0: com.google.android.gms.maps.model.PolygonOptions): com.google.android.gms.maps.model.Polygon;
							public remove(param0: any): boolean;
							public showAll(): void;
							public setOnPolygonClickListener(param0: com.google.android.gms.maps.GoogleMap.OnPolygonClickListener): void;
							public hideAll(): void;
							public constructor(param0: com.google.maps.android.collections.MapObjectManager<any, any>);
							public getPolygons(): java.util.Collection<com.google.android.gms.maps.model.Polygon>;
							public remove(param0: com.google.android.gms.maps.model.Polygon): boolean;
							public addAll(param0: java.util.Collection<com.google.android.gms.maps.model.PolygonOptions>, param1: boolean): void;
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
						public onPolylineClick(param0: com.google.android.gms.maps.model.Polyline): void;
						public removeObjectFromMap(param0: any): void;
						public removeObjectFromMap(param0: com.google.android.gms.maps.model.Polyline): void;
						public newCollection(param0: string): any;
						public constructor(param0: com.google.android.gms.maps.GoogleMap);
						public newCollection(): any;
						public newCollection(): com.google.maps.android.collections.PolylineManager.Collection;
					}
					export module PolylineManager {
						export class Collection extends com.google.maps.android.collections.MapObjectManager.Collection {
							public static class: java.lang.Class<com.google.maps.android.collections.PolylineManager.Collection>;
							public addPolyline(param0: com.google.android.gms.maps.model.PolylineOptions): com.google.android.gms.maps.model.Polyline;
							public addAll(param0: java.util.Collection<com.google.android.gms.maps.model.PolylineOptions>, param1: boolean): void;
							public addAll(param0: java.util.Collection<com.google.android.gms.maps.model.PolylineOptions>): void;
							public constructor(param0: com.google.maps.android.collections.PolylineManager);
							public setOnPolylineClickListener(param0: com.google.android.gms.maps.GoogleMap.OnPolylineClickListener): void;
							public remove(param0: any): boolean;
							public showAll(): void;
							public remove(param0: com.google.android.gms.maps.model.Polyline): boolean;
							public hideAll(): void;
							public getPolylines(): java.util.Collection<com.google.android.gms.maps.model.Polyline>;
							public constructor(param0: com.google.maps.android.collections.MapObjectManager<any, any>);
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
						public constructor(param0: com.google.maps.android.data.Geometry<any>, param1: string, param2: java.util.Map<string, string>);
						public hasGeometry(): boolean;
						public getPropertyKeys(): java.lang.Iterable<string>;
						public removeProperty(param0: string): string;
						public setGeometry(param0: com.google.maps.android.data.Geometry<any>): void;
						public hasProperty(param0: string): boolean;
						public getGeometry(): com.google.maps.android.data.Geometry<any>;
						public getProperties(): java.lang.Iterable<any>;
						public getId(): string;
						public getProperty(param0: string): string;
						public hasProperties(): boolean;
						public setProperty(param0: string, param1: string): string;
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
						public getFeature(param0: any): com.google.maps.android.data.Feature;
						public getDefaultPolygonStyle(): com.google.maps.android.data.geojson.GeoJsonPolygonStyle;
						public constructor();
						public hasFeatures(): boolean;
						public removeLayerFromMap(): void;
						public hasContainers(): boolean;
						public addKMLToMap(): void;
						public getDefaultPointStyle(): com.google.maps.android.data.geojson.GeoJsonPointStyle;
						public setOnFeatureClickListener(param0: com.google.maps.android.data.Layer.OnFeatureClickListener): void;
						public removeFeature(param0: com.google.maps.android.data.Feature): void;
						public getMap(): com.google.android.gms.maps.GoogleMap;
						public addGeoJsonToMap(): void;
						public addLayerToMap(): void;
						public addFeature(param0: com.google.maps.android.data.Feature): void;
						public getFeatures(): java.lang.Iterable<any>;
						public getDefaultLineStringStyle(): com.google.maps.android.data.geojson.GeoJsonLineStringStyle;
						public storeRenderer(param0: com.google.maps.android.data.Renderer): void;
						public getContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
						public getContainerFeature(param0: any): com.google.maps.android.data.Feature;
						public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
						public isLayerOnMap(): boolean;
						public setMap(param0: com.google.android.gms.maps.GoogleMap): void;
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
						public getGeometryType(): string;
						public constructor(param0: java.util.List<com.google.android.gms.maps.model.LatLng>);
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
						public constructor(param0: java.util.List<any>);
						public getGeometryType(): string;
						public setGeometryType(param0: string): void;
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
						public constructor(param0: com.google.android.gms.maps.model.LatLng);
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
						public removeFromMap(param0: any): void;
						public hasFeatures(): boolean;
						public clearStylesRenderer(): void;
						public downloadFinished(): void;
						public removeFeature(param0: com.google.maps.android.data.Feature): void;
						public getMap(): com.google.android.gms.maps.GoogleMap;
						public getStylesRenderer(): java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>;
						public getGroundOverlayMap(): java.util.HashMap<com.google.maps.android.data.kml.KmlGroundOverlay, com.google.android.gms.maps.model.GroundOverlay>;
						public addFeature(param0: com.google.maps.android.data.Feature): void;
						public addKmlPlacemarkToMap(param0: com.google.maps.android.data.kml.KmlPlacemark, param1: com.google.maps.android.data.Geometry<any>, param2: com.google.maps.android.data.kml.KmlStyle, param3: com.google.maps.android.data.kml.KmlStyle, param4: boolean): any;
						public getMarkerIconUrls(): java.util.Set<string>;
						public assignStyleMap(param0: java.util.HashMap<string, string>, param1: java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>): void;
						public getPlacemarkStyle(param0: string): com.google.maps.android.data.kml.KmlStyle;
						public checkClearBitmapCache(): void;
						public getCachedMarkerImage(param0: string, param1: number): com.google.android.gms.maps.model.BitmapDescriptor;
						public putFeatures(param0: com.google.maps.android.data.Feature, param1: any): void;
						public static getPlacemarkVisibility(param0: com.google.maps.android.data.Feature): boolean;
						public constructor(param0: com.google.android.gms.maps.GoogleMap, param1: globalAndroid.content.Context, param2: com.google.maps.android.collections.MarkerManager, param3: com.google.maps.android.collections.PolygonManager, param4: com.google.maps.android.collections.PolylineManager, param5: com.google.maps.android.collections.GroundOverlayManager, param6: com.google.maps.android.data.Renderer.ImagesCache);
						public downloadStarted(): void;
						public constructor(param0: com.google.android.gms.maps.GoogleMap, param1: java.util.HashMap<any, any>, param2: com.google.maps.android.collections.MarkerManager, param3: com.google.maps.android.collections.PolygonManager, param4: com.google.maps.android.collections.PolylineManager, param5: com.google.maps.android.collections.GroundOverlayManager);
						public putStyles(): void;
						public getAllFeatures(): java.util.HashMap<any, any>;
						public addGeoJsonFeatureToMap(param0: com.google.maps.android.data.Feature, param1: com.google.maps.android.data.Geometry<any>): any;
						public cacheBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): void;
						public getStyleMaps(): java.util.HashMap<string, string>;
						public removeFeatures(param0: java.util.HashMap<any, any>): void;
						public removeGroundOverlays(param0: java.util.HashMap<com.google.maps.android.data.kml.KmlGroundOverlay, com.google.android.gms.maps.model.GroundOverlay>): void;
						public getValues(): java.util.Collection<any>;
						public storeData(param0: java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>, param1: java.util.HashMap<string, string>, param2: java.util.HashMap<com.google.maps.android.data.kml.KmlPlacemark, any>, param3: java.util.ArrayList<com.google.maps.android.data.kml.KmlContainer>, param4: java.util.HashMap<com.google.maps.android.data.kml.KmlGroundOverlay, com.google.android.gms.maps.model.GroundOverlay>): void;
						public attachGroundOverlay(param0: com.google.android.gms.maps.model.GroundOverlayOptions): com.google.android.gms.maps.model.GroundOverlay;
						public getContainerList(): java.util.ArrayList<com.google.maps.android.data.kml.KmlContainer>;
						public putStyles(param0: java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>): void;
						public getFeatures(): java.util.Set<com.google.maps.android.data.Feature>;
						public putContainerFeature(param0: any, param1: com.google.maps.android.data.Feature): void;
						public isLayerOnMap(): boolean;
						public setLayerVisibility(param0: boolean): void;
						public getCachedGroundOverlayImage(param0: string): com.google.android.gms.maps.model.BitmapDescriptor;
						public setMap(param0: com.google.android.gms.maps.GoogleMap): void;
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
						public setPolygonStrokeWidth(param0: number): void;
						public constructor();
						public setMarkerHotSpot(param0: number, param1: number, param2: string, param3: string): void;
						public setLineStringWidth(param0: number): void;
						public getRotation(): number;
						public setMarkerRotation(param0: number): void;
						public setPolygonFillColor(param0: number): void;
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
							public clone(): com.google.maps.android.data.geojson.BiMultiMap<any>;
							public remove(param0: any): any;
							public getKey(param0: any): any;
							public clear(): void;
							public put(param0: any, param1: any): any;
							public put(param0: any, param1: java.util.Collection<any>): any;
							public putAll(param0: java.util.Map<any, any>): void;
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
							public getPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
							public setLineStringStyle(param0: com.google.maps.android.data.geojson.GeoJsonLineStringStyle): void;
							public setPolygonStyle(param0: com.google.maps.android.data.geojson.GeoJsonPolygonStyle): void;
							public getPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
							public toString(): string;
							public update(param0: java.util.Observable, param1: any): void;
							public setProperty(param0: string, param1: string): string;
							public removeProperty(param0: string): string;
							public constructor(param0: com.google.maps.android.data.Geometry<any>, param1: string, param2: java.util.HashMap<string, string>, param3: com.google.android.gms.maps.model.LatLngBounds);
							public getMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
							public setGeometry(param0: com.google.maps.android.data.Geometry<any>): void;
							public constructor(param0: com.google.maps.android.data.Geometry<any>, param1: string, param2: java.util.Map<string, string>);
							public setPointStyle(param0: com.google.maps.android.data.geojson.GeoJsonPointStyle): void;
							public getPolygonStyle(): com.google.maps.android.data.geojson.GeoJsonPolygonStyle;
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
							public getGeometryType(): string;
							public getGeometryObject(): java.util.List<com.google.maps.android.data.Geometry<any>>;
							public constructor(param0: java.util.List<any>);
							public getGeometries(): java.util.List<com.google.maps.android.data.Geometry<any>>;
							public constructor(param0: java.util.List<com.google.maps.android.data.Geometry<any>>);
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
							public removeFeature(param0: com.google.maps.android.data.geojson.GeoJsonFeature): void;
							public addFeature(param0: com.google.maps.android.data.geojson.GeoJsonFeature): void;
							public getFeatures(): java.lang.Iterable<any>;
							public toString(): string;
							public constructor(param0: com.google.android.gms.maps.GoogleMap, param1: org.json.JSONObject, param2: com.google.maps.android.collections.MarkerManager, param3: com.google.maps.android.collections.PolygonManager, param4: com.google.maps.android.collections.PolylineManager, param5: com.google.maps.android.collections.GroundOverlayManager);
							public constructor(param0: com.google.android.gms.maps.GoogleMap, param1: org.json.JSONObject);
							public constructor(param0: com.google.android.gms.maps.GoogleMap, param1: number, param2: globalAndroid.content.Context);
							public addFeature(param0: com.google.maps.android.data.Feature): void;
							public constructor(param0: com.google.android.gms.maps.GoogleMap, param1: number, param2: globalAndroid.content.Context, param3: com.google.maps.android.collections.MarkerManager, param4: com.google.maps.android.collections.PolygonManager, param5: com.google.maps.android.collections.PolylineManager, param6: com.google.maps.android.collections.GroundOverlayManager);
							public getFeatures(): java.lang.Iterable<com.google.maps.android.data.geojson.GeoJsonFeature>;
							public removeFeature(param0: com.google.maps.android.data.Feature): void;
							public addLayerToMap(): void;
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
							public constructor(param0: java.util.List<com.google.android.gms.maps.model.LatLng>, param1: java.util.List<java.lang.Double>);
							public getGeometryType(): string;
							public constructor(param0: java.util.List<com.google.android.gms.maps.model.LatLng>);
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
							public setGeodesic(param0: boolean): void;
							public setVisible(param0: boolean): void;
							public setClickable(param0: boolean): void;
							public isVisible(): boolean;
							public isClickable(): boolean;
							public toString(): string;
							public getGeometryType(): androidNative.Array<string>;
							public getColor(): number;
							public setZIndex(param0: number): void;
							public getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public isGeodesic(): boolean;
							public setColor(param0: number): void;
							public setWidth(param0: number): void;
							public getZIndex(): number;
							public setPattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							public toPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
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
							public constructor(param0: java.util.List<any>);
							public constructor(param0: java.util.List<com.google.maps.android.data.geojson.GeoJsonLineString>);
							public getLineStrings(): java.util.List<com.google.maps.android.data.geojson.GeoJsonLineString>;
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
							public constructor(param0: java.util.List<any>);
							public constructor(param0: java.util.List<com.google.maps.android.data.geojson.GeoJsonPoint>);
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
							public constructor(param0: java.util.List<any>);
							public constructor(param0: java.util.List<com.google.maps.android.data.geojson.GeoJsonPolygon>);
							public getPolygons(): java.util.List<com.google.maps.android.data.geojson.GeoJsonPolygon>;
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
							public constructor(param0: org.json.JSONObject);
							public getFeatures(): java.util.ArrayList<com.google.maps.android.data.geojson.GeoJsonFeature>;
							public static parseGeometry(param0: org.json.JSONObject): com.google.maps.android.data.Geometry<any>;
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
							public constructor(param0: com.google.android.gms.maps.model.LatLng);
							public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: java.lang.Double);
							public getCoordinates(): com.google.android.gms.maps.model.LatLng;
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
						export class GeoJsonPointStyle extends com.google.maps.android.data.Style implements com.google.maps.android.data.geojson.GeoJsonStyle {
							public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonPointStyle>;
							public setDraggable(param0: boolean): void;
							public getAlpha(): number;
							public toString(): string;
							public getGeometryType(): androidNative.Array<string>;
							public setFlat(param0: boolean): void;
							public isDraggable(): boolean;
							public setIcon(param0: com.google.android.gms.maps.model.BitmapDescriptor): void;
							public setAnchor(param0: number, param1: number): void;
							public isFlat(): boolean;
							public getZIndex(): number;
							public setRotation(param0: number): void;
							public constructor();
							public setVisible(param0: boolean): void;
							public getAnchorV(): number;
							public getIcon(): com.google.android.gms.maps.model.BitmapDescriptor;
							public getTitle(): string;
							public isVisible(): boolean;
							public getInfoWindowAnchorV(): number;
							public setInfoWindowAnchor(param0: number, param1: number): void;
							public setSnippet(param0: string): void;
							public getRotation(): number;
							public setZIndex(param0: number): void;
							public getAnchorU(): number;
							public setTitle(param0: string): void;
							public setAlpha(param0: number): void;
							public toMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
							public getSnippet(): string;
							public getInfoWindowAnchorU(): number;
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
							public constructor(param0: java.util.List<any>);
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
							public setGeodesic(param0: boolean): void;
							public setVisible(param0: boolean): void;
							public setStrokeColor(param0: number): void;
							public setClickable(param0: boolean): void;
							public isVisible(): boolean;
							public toString(): string;
							public isClickable(): boolean;
							public getGeometryType(): androidNative.Array<string>;
							public getStrokeColor(): number;
							public setZIndex(param0: number): void;
							public isGeodesic(): boolean;
							public setStrokeJointType(param0: number): void;
							public getStrokeWidth(): number;
							public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							public setFillColor(param0: number): void;
							public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public setStrokeWidth(param0: number): void;
							public toPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
							public getFillColor(): number;
							public getZIndex(): number;
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
							public addFeature(param0: com.google.maps.android.data.Feature): void;
							public removeFeature(param0: com.google.maps.android.data.geojson.GeoJsonFeature): void;
							public removeLayerFromMap(): void;
							public addFeature(param0: com.google.maps.android.data.geojson.GeoJsonFeature): void;
							public removeFeature(param0: com.google.maps.android.data.Feature): void;
							public setMap(param0: com.google.android.gms.maps.GoogleMap): void;
							public update(param0: java.util.Observable, param1: any): void;
							public addLayerToMap(): void;
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
							public static parseBoolean(param0: string): boolean;
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
							public getStyle(param0: string): com.google.maps.android.data.kml.KmlStyle;
							public getProperty(param0: string): string;
							public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
							public toString(): string;
							public hasContainers(): boolean;
							public getProperties(): java.lang.Iterable<string>;
							public getStyleIdFromMap(param0: string): string;
							public getPlacemarks(): java.lang.Iterable<com.google.maps.android.data.kml.KmlPlacemark>;
							public hasProperty(param0: string): boolean;
							public getContainerId(): string;
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
							public hasProperty(param0: string): boolean;
							public getProperty(param0: string): string;
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
							public constructor(param0: com.google.android.gms.maps.GoogleMap, param1: number, param2: globalAndroid.content.Context);
							public constructor(param0: com.google.android.gms.maps.GoogleMap, param1: java.io.InputStream, param2: globalAndroid.content.Context, param3: com.google.maps.android.collections.MarkerManager, param4: com.google.maps.android.collections.PolygonManager, param5: com.google.maps.android.collections.PolylineManager, param6: com.google.maps.android.collections.GroundOverlayManager, param7: com.google.maps.android.data.Renderer.ImagesCache);
							public hasPlacemarks(): boolean;
							public getPlacemarks(): java.lang.Iterable<com.google.maps.android.data.kml.KmlPlacemark>;
							public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
							public constructor(param0: com.google.android.gms.maps.GoogleMap, param1: java.io.InputStream, param2: globalAndroid.content.Context);
							public addLayerToMap(): void;
							public hasContainers(): boolean;
							public constructor(param0: com.google.android.gms.maps.GoogleMap, param1: number, param2: globalAndroid.content.Context, param3: com.google.maps.android.collections.MarkerManager, param4: com.google.maps.android.collections.PolygonManager, param5: com.google.maps.android.collections.PolylineManager, param6: com.google.maps.android.collections.GroundOverlayManager, param7: com.google.maps.android.data.Renderer.ImagesCache);
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
							public constructor(param0: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>, param1: java.util.ArrayList<java.lang.Double>);
							public constructor(param0: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>);
							public getGeometryObject(): java.util.ArrayList<com.google.android.gms.maps.model.LatLng>;
							public getAltitudes(): java.util.ArrayList<java.lang.Double>;
							public constructor(param0: java.util.List<com.google.android.gms.maps.model.LatLng>);
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
							public constructor(param0: java.util.List<any>);
							public getGeometryObject(): java.util.ArrayList<com.google.maps.android.data.Geometry<any>>;
							public toString(): string;
							public constructor(param0: java.util.ArrayList<com.google.maps.android.data.Geometry<any>>);
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
							public constructor(param0: java.util.List<any>);
							public getGeometryObject(): java.util.ArrayList<com.google.maps.android.data.Geometry<any>>;
							public constructor(param0: java.util.ArrayList<com.google.maps.android.data.kml.KmlTrack>);
							public constructor(param0: java.util.ArrayList<com.google.maps.android.data.Geometry<any>>);
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
							public constructor(param0: com.google.maps.android.data.Geometry<any>, param1: string, param2: com.google.maps.android.data.kml.KmlStyle, param3: java.util.Map<string, string>);
							public constructor(param0: com.google.maps.android.data.Geometry<any>, param1: string, param2: java.util.Map<string, string>);
							public getPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
							public getPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
							public toString(): string;
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
							public constructor(param0: com.google.android.gms.maps.model.LatLng);
							public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: java.lang.Double);
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
						export class KmlPolygon extends com.google.maps.android.data.DataPolygon<java.util.ArrayList<java.util.ArrayList<com.google.android.gms.maps.model.LatLng>>> {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlPolygon>;
							public static GEOMETRY_TYPE: string;
							public getGeometryType(): string;
							public getOuterBoundaryCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public constructor(param0: java.util.List<com.google.android.gms.maps.model.LatLng>, param1: java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>);
							public getInnerBoundaryCoordinates(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>;
							public toString(): string;
							public getGeometryObject(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>;
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
						export class KmlRenderer extends com.google.maps.android.data.Renderer {
							public static class: java.lang.Class<com.google.maps.android.data.kml.KmlRenderer>;
							public removeLayerFromMap(): void;
							public hasNestedContainers(): boolean;
							public setMap(param0: com.google.android.gms.maps.GoogleMap): void;
							public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
							public getNestedContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
							public addLayerToMap(): void;
						}
						export module KmlRenderer {
							export class GroundOverlayImageDownload extends globalAndroid.os.AsyncTask<string, java.lang.Void, globalAndroid.graphics.Bitmap> {
								public static class: java.lang.Class<com.google.maps.android.data.kml.KmlRenderer.GroundOverlayImageDownload>;
								public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
								public constructor(param0: com.google.maps.android.data.kml.KmlRenderer, param1: string);
								public doInBackground(param0: androidNative.Array<string>): globalAndroid.graphics.Bitmap;
							}
							export class MarkerIconImageDownload extends globalAndroid.os.AsyncTask<string, java.lang.Void, globalAndroid.graphics.Bitmap> {
								public static class: java.lang.Class<com.google.maps.android.data.kml.KmlRenderer.MarkerIconImageDownload>;
								public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
								public constructor(param0: com.google.maps.android.data.kml.KmlRenderer, param1: string);
								public doInBackground(param0: androidNative.Array<string>): globalAndroid.graphics.Bitmap;
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
							public static computeRandomColor(param0: number): number;
							public getPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
							public getPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
							public toString(): string;
							public hasBalloonStyle(): boolean;
							public isLineRandomColorMode(): boolean;
							public getMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
							public getIconUrl(): string;
							public isStyleSet(param0: string): boolean;
							public setFill(param0: boolean): void;
							public hasFill(): boolean;
							public isPolyRandomColorMode(): boolean;
							public getIconScale(): number;
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
							public constructor(param0: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>, param1: java.util.ArrayList<java.lang.Double>);
							public getTimestamps(): java.util.ArrayList<java.lang.Long>;
							public constructor(param0: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>);
							public getProperties(): java.util.HashMap<string, string>;
							public getGeometryObject(): java.util.ArrayList<com.google.android.gms.maps.model.LatLng>;
							public constructor(param0: java.util.List<com.google.android.gms.maps.model.LatLng>);
							public getGeometryObject(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public constructor(param0: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>, param1: java.util.ArrayList<java.lang.Double>, param2: java.util.ArrayList<java.lang.Long>, param3: java.util.HashMap<string, string>);
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
							public static substituteProperties(param0: string, param1: com.google.maps.android.data.kml.KmlPlacemark): string;
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
						public contains(param0: number, param1: number): boolean;
						public contains(param0: com.google.maps.android.geometry.Bounds): boolean;
						public contains(param0: com.google.maps.android.geometry.Point): boolean;
						public intersects(param0: number, param1: number, param2: number, param3: number): boolean;
						public intersects(param0: com.google.maps.android.geometry.Bounds): boolean;
						public constructor(param0: number, param1: number, param2: number, param3: number);
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
						public constructor(param0: number, param1: number);
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
						public constructor(param0: androidNative.Array<number>, param1: androidNative.Array<number>);
						public constructor(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: number);
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
						public static DEFAULT_RADIUS: number;
						public static DEFAULT_OPACITY: number;
						public static DEFAULT_GRADIENT: com.google.maps.android.heatmaps.Gradient;
						public setOpacity(param0: number): void;
						public setWeightedData(param0: java.util.Collection<com.google.maps.android.heatmaps.WeightedLatLng>): void;
						public setGradient(param0: com.google.maps.android.heatmaps.Gradient): void;
						public setRadius(param0: number): void;
						public setMaxIntensity(param0: number): void;
						public setData(param0: java.util.Collection<com.google.android.gms.maps.model.LatLng>): void;
						public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
					}
					export module HeatmapTileProvider {
						export class Builder {
							public static class: java.lang.Class<com.google.maps.android.heatmaps.HeatmapTileProvider.Builder>;
							public constructor();
							public gradient(param0: com.google.maps.android.heatmaps.Gradient): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public opacity(param0: number): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public weightedData(param0: java.util.Collection<com.google.maps.android.heatmaps.WeightedLatLng>): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public radius(param0: number): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public data(param0: java.util.Collection<com.google.android.gms.maps.model.LatLng>): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public maxIntensity(param0: number): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
							public build(): com.google.maps.android.heatmaps.HeatmapTileProvider;
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
						public static DEFAULT_INTENSITY: number;
						public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: number);
						public getPoint(): com.google.maps.android.geometry.Point;
						public constructor(param0: com.google.android.gms.maps.model.LatLng);
						public getIntensity(): number;
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
						public constructor(param0: number, param1: number);
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
						public toPoint(param0: com.google.android.gms.maps.model.LatLng): com.google.maps.android.projection.Point;
						public constructor(param0: number);
						public toLatLng(param0: com.google.maps.android.geometry.Point): com.google.android.gms.maps.model.LatLng;
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
						public search(param0: com.google.maps.android.geometry.Bounds): java.util.Collection<T>;
						public constructor(param0: com.google.maps.android.geometry.Bounds);
						public add(param0: T): void;
						public clear(): void;
						public remove(param0: T): boolean;
						public constructor(param0: number, param1: number, param2: number, param3: number);
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
						public static animateMarkerTo(param0: com.google.android.gms.maps.model.Marker, param1: com.google.android.gms.maps.model.LatLng): void;
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
						public constructor(param0: globalAndroid.content.Context);
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setBounds(param0: globalAndroid.graphics.Rect): void;
						public setBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getPadding(param0: globalAndroid.graphics.Rect): boolean;
						public setColor(param0: number): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
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
						public static STYLE_DEFAULT: number;
						public static STYLE_WHITE: number;
						public static STYLE_RED: number;
						public static STYLE_BLUE: number;
						public static STYLE_GREEN: number;
						public static STYLE_PURPLE: number;
						public static STYLE_ORANGE: number;
						public constructor(param0: globalAndroid.content.Context);
						public setColor(param0: number): void;
						public setTextAppearance(param0: number): void;
						public getAnchorU(): number;
						public makeIcon(): globalAndroid.graphics.Bitmap;
						public makeIcon(param0: string): globalAndroid.graphics.Bitmap;
						public setContentRotation(param0: number): void;
						public setContentPadding(param0: number, param1: number, param2: number, param3: number): void;
						public setRotation(param0: number): void;
						public setStyle(param0: number): void;
						public setContentView(param0: globalAndroid.view.View): void;
						public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
						public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
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
						public constructor(param0: globalAndroid.content.Context);
						public setViewRotation(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
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
						public constructor(param0: globalAndroid.content.Context);
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
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
//com.google.maps.android.clustering.view.DefaultClusterRenderer:1
//com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerCache:1
//com.google.maps.android.collections.MapObjectManager:2
//com.google.maps.android.data.DataPolygon:1
//com.google.maps.android.data.Geometry:1
//com.google.maps.android.data.geojson.BiMultiMap:1
//com.google.maps.android.quadtree.PointQuadTree:1

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zza>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzaa {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzaa>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zzaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(): number;
								zze(): number;
								zzf(): number;
								zzg(): number;
								zzh(): number;
								zzi(): number;
								zzj(): com.google.android.gms.dynamic.IObjectWrapper;
								zzk(): string;
								zzl(): java.util.List;
								zzm(): java.util.List<com.google.android.gms.maps.model.LatLng>;
								zzn(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								zzo(): void;
								zzp(param0: boolean): void;
								zzq(param0: number): void;
								zzr(param0: boolean): void;
								zzs(param0: java.util.List): void;
								zzt(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
								zzu(param0: number): void;
								zzv(param0: number): void;
								zzw(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
								zzx(param0: number): void;
								zzy(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzz(param0: boolean): void;
								zzA(param0: number): void;
								zzB(param0: any /* com.google.android.gms.internal.maps.zzaa*/): boolean;
								zzC(): boolean;
								zzD(): boolean;
								zzE(): boolean;
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
					export module maps {
						export class zzab extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.internal.maps.zzad {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzab>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export abstract class zzac extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.internal.maps.zzad {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzad {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzad>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zzad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(): number;
								zze(): number;
								zzf(): number;
								zzg(): number;
								zzh(): number;
								zzi(): com.google.android.gms.dynamic.IObjectWrapper;
								zzj(): com.google.android.gms.maps.model.Cap;
								zzk(): com.google.android.gms.maps.model.Cap;
								zzl(): string;
								zzm(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								zzn(): java.util.List<com.google.android.gms.maps.model.LatLng>;
								zzo(): void;
								zzp(param0: boolean): void;
								zzq(param0: number): void;
								zzr(param0: com.google.android.gms.maps.model.Cap): void;
								zzs(param0: boolean): void;
								zzt(param0: number): void;
								zzu(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
								zzv(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
								zzw(param0: com.google.android.gms.maps.model.Cap): void;
								zzx(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzy(param0: boolean): void;
								zzz(param0: number): void;
								zzA(param0: number): void;
								zzB(param0: any /* com.google.android.gms.internal.maps.zzad*/): boolean;
								zzC(): boolean;
								zzD(): boolean;
								zzE(): boolean;
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
					export module maps {
						export class zzae extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.internal.maps.zzag {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzae>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export abstract class zzaf extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.internal.maps.zzag {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzaf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzag {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzag>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zzag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzd(): number; zze(): number; zzf(): number; zzg(): string; zzh(): void; zzi(): void; zzj(param0: boolean): void; zzk(param0: number): void; zzl(param0: boolean): void; zzm(param0: number): void; zzn(param0: any /* com.google.android.gms.internal.maps.zzag*/): boolean; zzo(): boolean; zzp(): boolean });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzah extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.internal.maps.zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzah>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export abstract class zzai extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.internal.maps.zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzai>;
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
					export module maps {
						export class zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzaj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zzaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzb>;
							public asBinder(): globalAndroid.os.IBinder;
							public constructor(param0: string);
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzd extends com.google.android.gms.internal.maps.zze {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzd>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zze>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module maps {
						export class zzf {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzg extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.internal.maps.zzi {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export abstract class zzh extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.internal.maps.zzi {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzi {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzd(): com.google.android.gms.dynamic.IObjectWrapper; zze(param0: number): com.google.android.gms.dynamic.IObjectWrapper; zzf(param0: string): com.google.android.gms.dynamic.IObjectWrapper; zzg(param0: globalAndroid.graphics.Bitmap): com.google.android.gms.dynamic.IObjectWrapper; zzh(param0: string): com.google.android.gms.dynamic.IObjectWrapper; zzi(param0: string): com.google.android.gms.dynamic.IObjectWrapper; zzj(param0: number): com.google.android.gms.dynamic.IObjectWrapper });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzj extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.internal.maps.zzl {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export abstract class zzk extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.internal.maps.zzl {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzl {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zzl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(): number;
								zze(): number;
								zzf(): number;
								zzg(): number;
								zzh(): number;
								zzi(): number;
								zzj(): com.google.android.gms.dynamic.IObjectWrapper;
								zzk(): com.google.android.gms.maps.model.LatLng;
								zzl(): string;
								zzm(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								zzn(): void;
								zzo(param0: com.google.android.gms.maps.model.LatLng): void;
								zzp(param0: boolean): void;
								zzq(param0: number): void;
								zzr(param0: number): void;
								zzs(param0: number): void;
								zzt(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
								zzu(param0: number): void;
								zzv(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzw(param0: boolean): void;
								zzx(param0: number): void;
								zzy(param0: any /* com.google.android.gms.internal.maps.zzl*/): boolean;
								zzz(): boolean;
								zzA(): boolean;
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
					export module maps {
						export class zzm extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.internal.maps.zzo {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export abstract class zzn extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.internal.maps.zzo {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzo {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzo>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zzo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(): number;
								zze(): number;
								zzf(): number;
								zzg(): number;
								zzh(): number;
								zzi(): number;
								zzj(): com.google.android.gms.dynamic.IObjectWrapper;
								zzk(): com.google.android.gms.maps.model.LatLng;
								zzl(): com.google.android.gms.maps.model.LatLngBounds;
								zzm(): string;
								zzn(): void;
								zzo(param0: number): void;
								zzp(param0: boolean): void;
								zzq(param0: number): void;
								zzr(param0: number, param1: number): void;
								zzs(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzt(param0: com.google.android.gms.maps.model.LatLng): void;
								zzu(param0: com.google.android.gms.maps.model.LatLngBounds): void;
								zzv(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzw(param0: number): void;
								zzx(param0: boolean): void;
								zzy(param0: number): void;
								zzz(param0: any /* com.google.android.gms.internal.maps.zzo*/): boolean;
								zzA(): boolean;
								zzB(): boolean;
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
					export module maps {
						export class zzp extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.internal.maps.zzr {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export abstract class zzq extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.internal.maps.zzr {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzr {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zzr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzd(): number; zze(): number; zzf(): number; zzg(): java.util.List<globalAndroid.os.IBinder>; zzh(param0: any /* com.google.android.gms.internal.maps.zzr*/): boolean; zzi(): boolean });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzs extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.internal.maps.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export abstract class zzt extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.internal.maps.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zzu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzd(): number; zze(): string; zzf(): string; zzg(): void; zzh(param0: any /* com.google.android.gms.internal.maps.zzu*/): boolean });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzv extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.internal.maps.zzx {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export abstract class zzw extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.internal.maps.zzx {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export class zzx {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.maps.zzx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(): number;
								zze(): number;
								zzf(): number;
								zzg(): number;
								zzh(): com.google.android.gms.dynamic.IObjectWrapper;
								zzi(): com.google.android.gms.maps.model.LatLng;
								zzj(): string;
								zzk(): string;
								zzl(): string;
								zzm(): void;
								zzn(): void;
								zzo(param0: number): void;
								zzp(param0: number, param1: number): void;
								zzq(param0: boolean): void;
								zzr(param0: boolean): void;
								zzs(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzt(param0: number, param1: number): void;
								zzu(param0: com.google.android.gms.maps.model.LatLng): void;
								zzv(param0: number): void;
								zzw(param0: string): void;
								zzx(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzy(param0: string): void;
								zzz(param0: boolean): void;
								zzA(param0: number): void;
								zzB(): void;
								zzC(param0: any /* com.google.android.gms.internal.maps.zzx*/): boolean;
								zzD(): boolean;
								zzE(): boolean;
								zzF(): boolean;
								zzG(): boolean;
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
					export module maps {
						export class zzy extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.internal.maps.zzaa {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module maps {
						export abstract class zzz extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.internal.maps.zzaa {
							public static class: java.lang.Class<com.google.android.gms.internal.maps.zzz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class CameraUpdate {
						public static class: java.lang.Class<com.google.android.gms.maps.CameraUpdate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class CameraUpdateFactory {
						public static class: java.lang.Class<com.google.android.gms.maps.CameraUpdateFactory>;
						public static newLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.CameraUpdate;
						public static zoomOut(): com.google.android.gms.maps.CameraUpdate;
						public static zoomTo(param0: number): com.google.android.gms.maps.CameraUpdate;
						public static scrollBy(param0: number, param1: number): com.google.android.gms.maps.CameraUpdate;
						public static newLatLngZoom(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.maps.CameraUpdate;
						public static zoomBy(param0: number): com.google.android.gms.maps.CameraUpdate;
						public static newLatLngBounds(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number): com.google.android.gms.maps.CameraUpdate;
						public static zoomIn(): com.google.android.gms.maps.CameraUpdate;
						public static newLatLngBounds(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number, param2: number, param3: number): com.google.android.gms.maps.CameraUpdate;
						public static zoomBy(param0: number, param1: globalAndroid.graphics.Point): com.google.android.gms.maps.CameraUpdate;
						public static newCameraPosition(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.maps.CameraUpdate;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class GoogleMap {
						public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap>;
						public static MAP_TYPE_NONE: number;
						public static MAP_TYPE_NORMAL: number;
						public static MAP_TYPE_SATELLITE: number;
						public static MAP_TYPE_TERRAIN: number;
						public static MAP_TYPE_HYBRID: number;
						public snapshot(param0: com.google.android.gms.maps.GoogleMap.SnapshotReadyCallback, param1: globalAndroid.graphics.Bitmap): void;
						public isIndoorEnabled(): boolean;
						public moveCamera(param0: com.google.android.gms.maps.CameraUpdate): void;
						public addTileOverlay(param0: com.google.android.gms.maps.model.TileOverlayOptions): com.google.android.gms.maps.model.TileOverlay;
						public setOnGroundOverlayClickListener(param0: com.google.android.gms.maps.GoogleMap.OnGroundOverlayClickListener): void;
						public setTrafficEnabled(param0: boolean): void;
						public setOnIndoorStateChangeListener(param0: com.google.android.gms.maps.GoogleMap.OnIndoorStateChangeListener): void;
						public setOnMyLocationButtonClickListener(param0: com.google.android.gms.maps.GoogleMap.OnMyLocationButtonClickListener): void;
						public addMarker(param0: com.google.android.gms.maps.model.MarkerOptions): com.google.android.gms.maps.model.Marker;
						public setOnCircleClickListener(param0: com.google.android.gms.maps.GoogleMap.OnCircleClickListener): void;
						public isBuildingsEnabled(): boolean;
						public setOnMapClickListener(param0: com.google.android.gms.maps.GoogleMap.OnMapClickListener): void;
						public setOnCameraIdleListener(param0: com.google.android.gms.maps.GoogleMap.OnCameraIdleListener): void;
						public setOnCameraMoveCanceledListener(param0: com.google.android.gms.maps.GoogleMap.OnCameraMoveCanceledListener): void;
						public setOnInfoWindowCloseListener(param0: com.google.android.gms.maps.GoogleMap.OnInfoWindowCloseListener): void;
						/** @deprecated */
						public setOnCameraChangeListener(param0: com.google.android.gms.maps.GoogleMap.OnCameraChangeListener): void;
						public setOnCameraMoveListener(param0: com.google.android.gms.maps.GoogleMap.OnCameraMoveListener): void;
						public setOnMyLocationClickListener(param0: com.google.android.gms.maps.GoogleMap.OnMyLocationClickListener): void;
						public setMaxZoomPreference(param0: number): void;
						public constructor(param0: com.google.android.gms.maps.internal.IGoogleMapDelegate);
						public animateCamera(param0: com.google.android.gms.maps.CameraUpdate, param1: com.google.android.gms.maps.GoogleMap.CancelableCallback): void;
						/** @deprecated */
						public getMyLocation(): globalAndroid.location.Location;
						public setOnMapLongClickListener(param0: com.google.android.gms.maps.GoogleMap.OnMapLongClickListener): void;
						public setIndoorEnabled(param0: boolean): boolean;
						public getProjection(): com.google.android.gms.maps.Projection;
						public setOnMapLoadedCallback(param0: com.google.android.gms.maps.GoogleMap.OnMapLoadedCallback): void;
						public isMyLocationEnabled(): boolean;
						public addPolygon(param0: com.google.android.gms.maps.model.PolygonOptions): com.google.android.gms.maps.model.Polygon;
						public setBuildingsEnabled(param0: boolean): void;
						public setOnInfoWindowClickListener(param0: com.google.android.gms.maps.GoogleMap.OnInfoWindowClickListener): void;
						public getCameraPosition(): com.google.android.gms.maps.model.CameraPosition;
						public getUiSettings(): com.google.android.gms.maps.UiSettings;
						public getMinZoomLevel(): number;
						public setMapStyle(param0: com.google.android.gms.maps.model.MapStyleOptions): boolean;
						/** @deprecated */
						public setOnMyLocationChangeListener(param0: com.google.android.gms.maps.GoogleMap.OnMyLocationChangeListener): void;
						public setOnPolygonClickListener(param0: com.google.android.gms.maps.GoogleMap.OnPolygonClickListener): void;
						public setContentDescription(param0: string): void;
						public clear(): void;
						public setPadding(param0: number, param1: number, param2: number, param3: number): void;
						public addPolyline(param0: com.google.android.gms.maps.model.PolylineOptions): com.google.android.gms.maps.model.Polyline;
						public resetMinMaxZoomPreference(): void;
						public setOnMarkerDragListener(param0: com.google.android.gms.maps.GoogleMap.OnMarkerDragListener): void;
						public addCircle(param0: com.google.android.gms.maps.model.CircleOptions): com.google.android.gms.maps.model.Circle;
						public setOnCameraMoveStartedListener(param0: com.google.android.gms.maps.GoogleMap.OnCameraMoveStartedListener): void;
						public setOnPoiClickListener(param0: com.google.android.gms.maps.GoogleMap.OnPoiClickListener): void;
						public setLocationSource(param0: com.google.android.gms.maps.LocationSource): void;
						public getMaxZoomLevel(): number;
						public setLatLngBoundsForCameraTarget(param0: com.google.android.gms.maps.model.LatLngBounds): void;
						public setMapType(param0: number): void;
						public stopAnimation(): void;
						public isTrafficEnabled(): boolean;
						public setOnInfoWindowLongClickListener(param0: com.google.android.gms.maps.GoogleMap.OnInfoWindowLongClickListener): void;
						public setMyLocationEnabled(param0: boolean): void;
						public setOnMarkerClickListener(param0: com.google.android.gms.maps.GoogleMap.OnMarkerClickListener): void;
						public getMapType(): number;
						public setOnPolylineClickListener(param0: com.google.android.gms.maps.GoogleMap.OnPolylineClickListener): void;
						public getFocusedBuilding(): com.google.android.gms.maps.model.IndoorBuilding;
						public animateCamera(param0: com.google.android.gms.maps.CameraUpdate): void;
						public addGroundOverlay(param0: com.google.android.gms.maps.model.GroundOverlayOptions): com.google.android.gms.maps.model.GroundOverlay;
						public setMinZoomPreference(param0: number): void;
						public snapshot(param0: com.google.android.gms.maps.GoogleMap.SnapshotReadyCallback): void;
						public animateCamera(param0: com.google.android.gms.maps.CameraUpdate, param1: number, param2: com.google.android.gms.maps.GoogleMap.CancelableCallback): void;
						public setInfoWindowAdapter(param0: com.google.android.gms.maps.GoogleMap.InfoWindowAdapter): void;
					}
					export module GoogleMap {
						export class CancelableCallback {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.CancelableCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$CancelableCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onCancel(): void; onFinish(): void });
							public constructor();
							public onFinish(): void;
							public onCancel(): void;
						}
						export class InfoWindowAdapter {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.InfoWindowAdapter>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$InfoWindowAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getInfoContents(param0: com.google.android.gms.maps.model.Marker): globalAndroid.view.View; getInfoWindow(param0: com.google.android.gms.maps.model.Marker): globalAndroid.view.View });
							public constructor();
							public getInfoContents(param0: com.google.android.gms.maps.model.Marker): globalAndroid.view.View;
							public getInfoWindow(param0: com.google.android.gms.maps.model.Marker): globalAndroid.view.View;
						}
						export class OnCameraChangeListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCameraChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCameraChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void });
							public constructor();
							public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
						}
						export class OnCameraIdleListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCameraIdleListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCameraIdleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onCameraIdle(): void });
							public constructor();
							public onCameraIdle(): void;
						}
						export class OnCameraMoveCanceledListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCameraMoveCanceledListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCameraMoveCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onCameraMoveCanceled(): void });
							public constructor();
							public onCameraMoveCanceled(): void;
						}
						export class OnCameraMoveListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCameraMoveListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCameraMoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onCameraMove(): void });
							public constructor();
							public onCameraMove(): void;
						}
						export class OnCameraMoveStartedListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCameraMoveStartedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCameraMoveStartedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onCameraMoveStarted(param0: number): void });
							public constructor();
							public static REASON_DEVELOPER_ANIMATION: number;
							public static REASON_API_ANIMATION: number;
							public static REASON_GESTURE: number;
							public onCameraMoveStarted(param0: number): void;
						}
						export class OnCircleClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCircleClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCircleClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onCircleClick(param0: com.google.android.gms.maps.model.Circle): void });
							public constructor();
							public onCircleClick(param0: com.google.android.gms.maps.model.Circle): void;
						}
						export class OnGroundOverlayClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnGroundOverlayClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnGroundOverlayClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onGroundOverlayClick(param0: com.google.android.gms.maps.model.GroundOverlay): void });
							public constructor();
							public onGroundOverlayClick(param0: com.google.android.gms.maps.model.GroundOverlay): void;
						}
						export class OnIndoorStateChangeListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnIndoorStateChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnIndoorStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onIndoorBuildingFocused(): void; onIndoorLevelActivated(param0: com.google.android.gms.maps.model.IndoorBuilding): void });
							public constructor();
							public onIndoorLevelActivated(param0: com.google.android.gms.maps.model.IndoorBuilding): void;
							public onIndoorBuildingFocused(): void;
						}
						export class OnInfoWindowClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnInfoWindowClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnInfoWindowClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onInfoWindowClick(param0: com.google.android.gms.maps.model.Marker): void });
							public constructor();
							public onInfoWindowClick(param0: com.google.android.gms.maps.model.Marker): void;
						}
						export class OnInfoWindowCloseListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnInfoWindowCloseListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnInfoWindowCloseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onInfoWindowClose(param0: com.google.android.gms.maps.model.Marker): void });
							public constructor();
							public onInfoWindowClose(param0: com.google.android.gms.maps.model.Marker): void;
						}
						export class OnInfoWindowLongClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnInfoWindowLongClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnInfoWindowLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onInfoWindowLongClick(param0: com.google.android.gms.maps.model.Marker): void });
							public constructor();
							public onInfoWindowLongClick(param0: com.google.android.gms.maps.model.Marker): void;
						}
						export class OnMapClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMapClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMapClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMapClick(param0: com.google.android.gms.maps.model.LatLng): void });
							public constructor();
							public onMapClick(param0: com.google.android.gms.maps.model.LatLng): void;
						}
						export class OnMapLoadedCallback {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMapLoadedCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMapLoadedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMapLoaded(): void });
							public constructor();
							public onMapLoaded(): void;
						}
						export class OnMapLongClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMapLongClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMapLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMapLongClick(param0: com.google.android.gms.maps.model.LatLng): void });
							public constructor();
							public onMapLongClick(param0: com.google.android.gms.maps.model.LatLng): void;
						}
						export class OnMarkerClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMarkerClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMarkerClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMarkerClick(param0: com.google.android.gms.maps.model.Marker): boolean });
							public constructor();
							public onMarkerClick(param0: com.google.android.gms.maps.model.Marker): boolean;
						}
						export class OnMarkerDragListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMarkerDragListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMarkerDragListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMarkerDrag(param0: com.google.android.gms.maps.model.Marker): void; onMarkerDragEnd(param0: com.google.android.gms.maps.model.Marker): void; onMarkerDragStart(param0: com.google.android.gms.maps.model.Marker): void });
							public constructor();
							public onMarkerDragStart(param0: com.google.android.gms.maps.model.Marker): void;
							public onMarkerDragEnd(param0: com.google.android.gms.maps.model.Marker): void;
							public onMarkerDrag(param0: com.google.android.gms.maps.model.Marker): void;
						}
						export class OnMyLocationButtonClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMyLocationButtonClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMyLocationButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMyLocationButtonClick(): boolean });
							public constructor();
							public onMyLocationButtonClick(): boolean;
						}
						export class OnMyLocationChangeListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMyLocationChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMyLocationChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMyLocationChange(param0: globalAndroid.location.Location): void });
							public constructor();
							public onMyLocationChange(param0: globalAndroid.location.Location): void;
						}
						export class OnMyLocationClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMyLocationClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMyLocationClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMyLocationClick(param0: globalAndroid.location.Location): void });
							public constructor();
							public onMyLocationClick(param0: globalAndroid.location.Location): void;
						}
						export class OnPoiClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnPoiClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnPoiClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onPoiClick(param0: com.google.android.gms.maps.model.PointOfInterest): void });
							public constructor();
							public onPoiClick(param0: com.google.android.gms.maps.model.PointOfInterest): void;
						}
						export class OnPolygonClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnPolygonClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnPolygonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onPolygonClick(param0: com.google.android.gms.maps.model.Polygon): void });
							public constructor();
							public onPolygonClick(param0: com.google.android.gms.maps.model.Polygon): void;
						}
						export class OnPolylineClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnPolylineClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnPolylineClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onPolylineClick(param0: com.google.android.gms.maps.model.Polyline): void });
							public constructor();
							public onPolylineClick(param0: com.google.android.gms.maps.model.Polyline): void;
						}
						export class SnapshotReadyCallback {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.SnapshotReadyCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$SnapshotReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void });
							public constructor();
							public onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class GoogleMapOptions {
						public static class: java.lang.Class<com.google.android.gms.maps.GoogleMapOptions>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.GoogleMapOptions>;
						public minZoomPreference(param0: number): com.google.android.gms.maps.GoogleMapOptions;
						public getLatLngBoundsForCameraTarget(): com.google.android.gms.maps.model.LatLngBounds;
						public getCamera(): com.google.android.gms.maps.model.CameraPosition;
						public getZOrderOnTop(): java.lang.Boolean;
						public getLiteMode(): java.lang.Boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public camera(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.maps.GoogleMapOptions;
						public backgroundColor(param0: java.lang.Integer): com.google.android.gms.maps.GoogleMapOptions;
						public getAmbientEnabled(): java.lang.Boolean;
						public tiltGesturesEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getMapId(): string;
						public compassEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public scrollGesturesEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getBackgroundColor(): java.lang.Integer;
						public zOrderOnTop(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public maxZoomPreference(param0: number): com.google.android.gms.maps.GoogleMapOptions;
						public getMinZoomPreference(): java.lang.Float;
						public liteMode(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getScrollGesturesEnabled(): java.lang.Boolean;
						public useViewLifecycleInFragment(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getMapToolbarEnabled(): java.lang.Boolean;
						public mapType(param0: number): com.google.android.gms.maps.GoogleMapOptions;
						public constructor();
						public zoomGesturesEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public ambientEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): com.google.android.gms.maps.GoogleMapOptions;
						public getZoomGesturesEnabled(): java.lang.Boolean;
						public getMapType(): number;
						public getScrollGesturesEnabledDuringRotateOrZoom(): java.lang.Boolean;
						public getRotateGesturesEnabled(): java.lang.Boolean;
						public getMaxZoomPreference(): java.lang.Float;
						public zoomControlsEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getUseViewLifecycleInFragment(): java.lang.Boolean;
						public mapId(param0: string): com.google.android.gms.maps.GoogleMapOptions;
						public toString(): string;
						public rotateGesturesEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getTiltGesturesEnabled(): java.lang.Boolean;
						public latLngBoundsForCameraTarget(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.gms.maps.GoogleMapOptions;
						public scrollGesturesEnabledDuringRotateOrZoom(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getCompassEnabled(): java.lang.Boolean;
						public getZoomControlsEnabled(): java.lang.Boolean;
						public mapToolbarEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class LocationSource {
						public static class: java.lang.Class<com.google.android.gms.maps.LocationSource>;
						/**
						 * Constructs a new instance of the com.google.android.gms.maps.LocationSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { activate(param0: com.google.android.gms.maps.LocationSource.OnLocationChangedListener): void; deactivate(): void });
						public constructor();
						public activate(param0: com.google.android.gms.maps.LocationSource.OnLocationChangedListener): void;
						public deactivate(): void;
					}
					export module LocationSource {
						export class OnLocationChangedListener {
							public static class: java.lang.Class<com.google.android.gms.maps.LocationSource.OnLocationChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.LocationSource$OnLocationChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onLocationChanged(param0: globalAndroid.location.Location): void });
							public constructor();
							public onLocationChanged(param0: globalAndroid.location.Location): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class MapFragment {
						public static class: java.lang.Class<com.google.android.gms.maps.MapFragment>;
						public static newInstance(): com.google.android.gms.maps.MapFragment;
						public constructor();
						public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public static newInstance(param0: com.google.android.gms.maps.GoogleMapOptions): com.google.android.gms.maps.MapFragment;
						public onResume(): void;
						public setArguments(param0: globalAndroid.os.Bundle): void;
						public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onExitAmbient(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class MapView {
						public static class: java.lang.Class<com.google.android.gms.maps.MapView>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.maps.GoogleMapOptions);
						public constructor(param0: globalAndroid.content.Context);
						public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						public onResume(): void;
						public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onExitAmbient(): void;
						public onDestroy(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class MapsInitializer {
						public static class: java.lang.Class<com.google.android.gms.maps.MapsInitializer>;
						public static initialize(param0: globalAndroid.content.Context): number;
						public static initialize(param0: globalAndroid.content.Context, param1: com.google.android.gms.maps.MapsInitializer.Renderer, param2: com.google.android.gms.maps.OnMapsSdkInitializedCallback): number;
					}
					export module MapsInitializer {
						export class Renderer {
							public static class: java.lang.Class<com.google.android.gms.maps.MapsInitializer.Renderer>;
							public static LEGACY: com.google.android.gms.maps.MapsInitializer.Renderer;
							public static LATEST: com.google.android.gms.maps.MapsInitializer.Renderer;
							public static values(): androidNative.Array<com.google.android.gms.maps.MapsInitializer.Renderer>;
							public static valueOf(param0: string): com.google.android.gms.maps.MapsInitializer.Renderer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class OnMapReadyCallback {
						public static class: java.lang.Class<com.google.android.gms.maps.OnMapReadyCallback>;
						/**
						 * Constructs a new instance of the com.google.android.gms.maps.OnMapReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMapReady(param0: com.google.android.gms.maps.GoogleMap): void });
						public constructor();
						public onMapReady(param0: com.google.android.gms.maps.GoogleMap): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class OnMapsSdkInitializedCallback {
						public static class: java.lang.Class<com.google.android.gms.maps.OnMapsSdkInitializedCallback>;
						/**
						 * Constructs a new instance of the com.google.android.gms.maps.OnMapsSdkInitializedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMapsSdkInitialized(param0: com.google.android.gms.maps.MapsInitializer.Renderer): void });
						public constructor();
						public onMapsSdkInitialized(param0: com.google.android.gms.maps.MapsInitializer.Renderer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class OnStreetViewPanoramaReadyCallback {
						public static class: java.lang.Class<com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback>;
						/**
						 * Constructs a new instance of the com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onStreetViewPanoramaReady(param0: com.google.android.gms.maps.StreetViewPanorama): void });
						public constructor();
						public onStreetViewPanoramaReady(param0: com.google.android.gms.maps.StreetViewPanorama): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class Projection {
						public static class: java.lang.Class<com.google.android.gms.maps.Projection>;
						public fromScreenLocation(param0: globalAndroid.graphics.Point): com.google.android.gms.maps.model.LatLng;
						public toScreenLocation(param0: com.google.android.gms.maps.model.LatLng): globalAndroid.graphics.Point;
						public getVisibleRegion(): com.google.android.gms.maps.model.VisibleRegion;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class StreetViewPanorama {
						public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanorama>;
						public setPosition(param0: com.google.android.gms.maps.model.LatLng, param1: number): void;
						public isStreetNamesEnabled(): boolean;
						public isUserNavigationEnabled(): boolean;
						public setOnStreetViewPanoramaCameraChangeListener(param0: com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaCameraChangeListener): void;
						public setZoomGesturesEnabled(param0: boolean): void;
						public isPanningGesturesEnabled(): boolean;
						public getPanoramaCamera(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
						public getLocation(): com.google.android.gms.maps.model.StreetViewPanoramaLocation;
						public pointToOrientation(param0: globalAndroid.graphics.Point): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
						public isZoomGesturesEnabled(): boolean;
						public animateTo(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera, param1: number): void;
						public setOnStreetViewPanoramaClickListener(param0: com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaClickListener): void;
						public setPanningGesturesEnabled(param0: boolean): void;
						public setOnStreetViewPanoramaLongClickListener(param0: com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaLongClickListener): void;
						public setOnStreetViewPanoramaChangeListener(param0: com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaChangeListener): void;
						public setPosition(param0: com.google.android.gms.maps.model.LatLng, param1: number, param2: com.google.android.gms.maps.model.StreetViewSource): void;
						public setUserNavigationEnabled(param0: boolean): void;
						public setPosition(param0: string): void;
						public setStreetNamesEnabled(param0: boolean): void;
						public setPosition(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.StreetViewSource): void;
						public orientationToPoint(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): globalAndroid.graphics.Point;
						public constructor(param0: com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate);
						public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
					}
					export module StreetViewPanorama {
						export class OnStreetViewPanoramaCameraChangeListener {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaCameraChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.StreetViewPanorama$OnStreetViewPanoramaCameraChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onStreetViewPanoramaCameraChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): void });
							public constructor();
							public onStreetViewPanoramaCameraChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): void;
						}
						export class OnStreetViewPanoramaChangeListener {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.StreetViewPanorama$OnStreetViewPanoramaChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onStreetViewPanoramaChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaLocation): void });
							public constructor();
							public onStreetViewPanoramaChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaLocation): void;
						}
						export class OnStreetViewPanoramaClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.StreetViewPanorama$OnStreetViewPanoramaClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onStreetViewPanoramaClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void });
							public constructor();
							public onStreetViewPanoramaClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
						}
						export class OnStreetViewPanoramaLongClickListener {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaLongClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.StreetViewPanorama$OnStreetViewPanoramaLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onStreetViewPanoramaLongClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void });
							public constructor();
							public onStreetViewPanoramaLongClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class StreetViewPanoramaFragment {
						public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanoramaFragment>;
						public constructor();
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public onResume(): void;
						public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						public setArguments(param0: globalAndroid.os.Bundle): void;
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public static newInstance(): com.google.android.gms.maps.StreetViewPanoramaFragment;
						public onDestroyView(): void;
						public static newInstance(param0: com.google.android.gms.maps.StreetViewPanoramaOptions): com.google.android.gms.maps.StreetViewPanoramaFragment;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class StreetViewPanoramaOptions {
						public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanoramaOptions>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.StreetViewPanoramaOptions>;
						public zoomGesturesEnabled(param0: boolean): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public getPanningGesturesEnabled(): java.lang.Boolean;
						public constructor();
						public userNavigationEnabled(param0: boolean): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public panningGesturesEnabled(param0: boolean): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public position(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.StreetViewSource): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public getZoomGesturesEnabled(): java.lang.Boolean;
						public getPanoramaId(): string;
						public getUserNavigationEnabled(): java.lang.Boolean;
						public getPosition(): com.google.android.gms.maps.model.LatLng;
						public getUseViewLifecycleInFragment(): java.lang.Boolean;
						public toString(): string;
						public getRadius(): java.lang.Integer;
						public panoramaCamera(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public position(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public getStreetNamesEnabled(): java.lang.Boolean;
						public streetNamesEnabled(param0: boolean): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public getSource(): com.google.android.gms.maps.model.StreetViewSource;
						public position(param0: com.google.android.gms.maps.model.LatLng, param1: java.lang.Integer, param2: com.google.android.gms.maps.model.StreetViewSource): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public position(param0: com.google.android.gms.maps.model.LatLng, param1: java.lang.Integer): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public getStreetViewPanoramaCamera(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
						public panoramaId(param0: string): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public useViewLifecycleInFragment(param0: boolean): com.google.android.gms.maps.StreetViewPanoramaOptions;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class StreetViewPanoramaView {
						public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanoramaView>;
						public constructor(param0: globalAndroid.content.Context);
						public onResume(): void;
						public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.maps.StreetViewPanoramaOptions);
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onDestroy(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class SupportMapFragment {
						public static class: java.lang.Class<com.google.android.gms.maps.SupportMapFragment>;
						public constructor();
						public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public onResume(): void;
						public static newInstance(): com.google.android.gms.maps.SupportMapFragment;
						public setArguments(param0: globalAndroid.os.Bundle): void;
						public static newInstance(param0: com.google.android.gms.maps.GoogleMapOptions): com.google.android.gms.maps.SupportMapFragment;
						public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onExitAmbient(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class SupportStreetViewPanoramaFragment {
						public static class: java.lang.Class<com.google.android.gms.maps.SupportStreetViewPanoramaFragment>;
						public constructor();
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public static newInstance(): com.google.android.gms.maps.SupportStreetViewPanoramaFragment;
						public onResume(): void;
						public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						public setArguments(param0: globalAndroid.os.Bundle): void;
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public static newInstance(param0: com.google.android.gms.maps.StreetViewPanoramaOptions): com.google.android.gms.maps.SupportStreetViewPanoramaFragment;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class UiSettings {
						public static class: java.lang.Class<com.google.android.gms.maps.UiSettings>;
						public setMapToolbarEnabled(param0: boolean): void;
						public setZoomControlsEnabled(param0: boolean): void;
						public setZoomGesturesEnabled(param0: boolean): void;
						public isTiltGesturesEnabled(): boolean;
						public setTiltGesturesEnabled(param0: boolean): void;
						public isZoomGesturesEnabled(): boolean;
						public setAllGesturesEnabled(param0: boolean): void;
						public setCompassEnabled(param0: boolean): void;
						public setScrollGesturesEnabledDuringRotateOrZoom(param0: boolean): void;
						public isCompassEnabled(): boolean;
						public setRotateGesturesEnabled(param0: boolean): void;
						public isMyLocationButtonEnabled(): boolean;
						public isZoomControlsEnabled(): boolean;
						public setIndoorLevelPickerEnabled(param0: boolean): void;
						public isMapToolbarEnabled(): boolean;
						public isScrollGesturesEnabledDuringRotateOrZoom(): boolean;
						public isIndoorLevelPickerEnabled(): boolean;
						public isScrollGesturesEnabled(): boolean;
						public setScrollGesturesEnabled(param0: boolean): void;
						public setMyLocationButtonEnabled(param0: boolean): void;
						public isRotateGesturesEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class ICameraUpdateFactoryDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.ICameraUpdateFactoryDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.ICameraUpdateFactoryDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								newCameraPosition(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.dynamic.IObjectWrapper;
								newLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
								newLatLngBounds(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
								newLatLngBoundsWithSize(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number, param2: number, param3: number): com.google.android.gms.dynamic.IObjectWrapper;
								newLatLngZoom(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
								scrollBy(param0: number, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
								zoomBy(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
								zoomByWithFocus(param0: number, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
								zoomIn(): com.google.android.gms.dynamic.IObjectWrapper;
								zoomOut(): com.google.android.gms.dynamic.IObjectWrapper;
								zoomTo(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
							});
							public constructor();
							public newLatLngBounds(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public scrollBy(param0: number, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLngBoundsWithSize(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number, param2: number, param3: number): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLngZoom(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomBy(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomTo(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomByWithFocus(param0: number, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomIn(): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomOut(): com.google.android.gms.dynamic.IObjectWrapper;
							public newCameraPosition(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IGoogleMapDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IGoogleMapDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IGoogleMapDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getMaxZoomLevel(): number;
								getMinZoomLevel(): number;
								getMapType(): number;
								getMyLocation(): globalAndroid.location.Location;
								getProjection(): com.google.android.gms.maps.internal.IProjectionDelegate;
								getUiSettings(): com.google.android.gms.maps.internal.IUiSettingsDelegate;
								getCameraPosition(): com.google.android.gms.maps.model.CameraPosition;
								animateCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								clear(): void;
								moveCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								onCreate(param0: globalAndroid.os.Bundle): void;
								onDestroy(): void;
								onEnterAmbient(param0: globalAndroid.os.Bundle): void;
								onExitAmbient(): void;
								onLowMemory(): void;
								onPause(): void;
								onResume(): void;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								onStart(): void;
								onStop(): void;
								resetMinMaxZoomPreference(): void;
								setBuildingsEnabled(param0: boolean): void;
								setContentDescription(param0: string): void;
								setLatLngBoundsForCameraTarget(param0: com.google.android.gms.maps.model.LatLngBounds): void;
								setLocationSource(param0: com.google.android.gms.maps.internal.ILocationSourceDelegate): void;
								setMapType(param0: number): void;
								setMaxZoomPreference(param0: number): void;
								setMinZoomPreference(param0: number): void;
								setMyLocationEnabled(param0: boolean): void;
								setPadding(param0: number, param1: number, param2: number, param3: number): void;
								setTrafficEnabled(param0: boolean): void;
								setWatermarkEnabled(param0: boolean): void;
								stopAnimation(): void;
								isBuildingsEnabled(): boolean;
								isIndoorEnabled(): boolean;
								isMyLocationEnabled(): boolean;
								isTrafficEnabled(): boolean;
								setIndoorEnabled(param0: boolean): boolean;
								setMapStyle(param0: com.google.android.gms.maps.model.MapStyleOptions): boolean;
								useViewLifecycleWhenInFragment(): boolean;
								addCircle(param0: com.google.android.gms.maps.model.CircleOptions): any /* com.google.android.gms.internal.maps.zzl*/;
								addGroundOverlay(param0: com.google.android.gms.maps.model.GroundOverlayOptions): any /* com.google.android.gms.internal.maps.zzo*/;
								getFocusedBuilding(): any /* com.google.android.gms.internal.maps.zzr*/;
								addMarker(param0: com.google.android.gms.maps.model.MarkerOptions): any /* com.google.android.gms.internal.maps.zzx*/;
								addPolygon(param0: com.google.android.gms.maps.model.PolygonOptions): any /* com.google.android.gms.internal.maps.zzaa*/;
								addPolyline(param0: com.google.android.gms.maps.model.PolylineOptions): any /* com.google.android.gms.internal.maps.zzad*/;
								addTileOverlay(param0: com.google.android.gms.maps.model.TileOverlayOptions): any /* com.google.android.gms.internal.maps.zzag*/;
								animateCameraWithCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.maps.internal.zzd*/): void;
								animateCameraWithDurationAndCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: any /* com.google.android.gms.maps.internal.zzd*/): void;
								getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
								setInfoWindowAdapter(param0: any /* com.google.android.gms.maps.internal.zzi*/): void;
								setOnCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzn*/): void;
								setOnCameraIdleListener(param0: any /* com.google.android.gms.maps.internal.zzp*/): void;
								setOnCameraMoveCanceledListener(param0: any /* com.google.android.gms.maps.internal.zzr*/): void;
								setOnCameraMoveListener(param0: any /* com.google.android.gms.maps.internal.zzt*/): void;
								setOnCameraMoveStartedListener(param0: any /* com.google.android.gms.maps.internal.zzv*/): void;
								setOnCircleClickListener(param0: any /* com.google.android.gms.maps.internal.zzx*/): void;
								setOnGroundOverlayClickListener(param0: any /* com.google.android.gms.maps.internal.zzz*/): void;
								setOnIndoorStateChangeListener(param0: any /* com.google.android.gms.maps.internal.zzab*/): void;
								setOnInfoWindowClickListener(param0: any /* com.google.android.gms.maps.internal.zzad*/): void;
								setOnInfoWindowCloseListener(param0: any /* com.google.android.gms.maps.internal.zzaf*/): void;
								setOnInfoWindowLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzah*/): void;
								setOnMapClickListener(param0: any /* com.google.android.gms.maps.internal.zzal*/): void;
								setOnMapLoadedCallback(param0: any /* com.google.android.gms.maps.internal.zzan*/): void;
								setOnMapLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
								setOnMarkerClickListener(param0: any /* com.google.android.gms.maps.internal.zzat*/): void;
								setOnMarkerDragListener(param0: any /* com.google.android.gms.maps.internal.zzav*/): void;
								setOnMyLocationButtonClickListener(param0: any /* com.google.android.gms.maps.internal.zzax*/): void;
								setOnMyLocationChangeListener(param0: any /* com.google.android.gms.maps.internal.zzaz*/): void;
								setOnMyLocationClickListener(param0: any /* com.google.android.gms.maps.internal.zzbb*/): void;
								setOnPoiClickListener(param0: any /* com.google.android.gms.maps.internal.zzbd*/): void;
								setOnPolygonClickListener(param0: any /* com.google.android.gms.maps.internal.zzbf*/): void;
								setOnPolylineClickListener(param0: any /* com.google.android.gms.maps.internal.zzbh*/): void;
								snapshot(param0: any /* com.google.android.gms.maps.internal.zzbu*/, param1: com.google.android.gms.dynamic.IObjectWrapper): void;
								snapshotForTest(param0: any /* com.google.android.gms.maps.internal.zzbu*/): void;
							});
							public constructor();
							public addGroundOverlay(param0: com.google.android.gms.maps.model.GroundOverlayOptions): any /* com.google.android.gms.internal.maps.zzo*/;
							public setOnIndoorStateChangeListener(param0: any /* com.google.android.gms.maps.internal.zzab*/): void;
							public getMapType(): number;
							public setOnCameraIdleListener(param0: any /* com.google.android.gms.maps.internal.zzp*/): void;
							public setOnMyLocationChangeListener(param0: any /* com.google.android.gms.maps.internal.zzaz*/): void;
							public moveCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							public addPolygon(param0: com.google.android.gms.maps.model.PolygonOptions): any /* com.google.android.gms.internal.maps.zzaa*/;
							public getUiSettings(): com.google.android.gms.maps.internal.IUiSettingsDelegate;
							public addCircle(param0: com.google.android.gms.maps.model.CircleOptions): any /* com.google.android.gms.internal.maps.zzl*/;
							public setOnMarkerClickListener(param0: any /* com.google.android.gms.maps.internal.zzat*/): void;
							public addPolyline(param0: com.google.android.gms.maps.model.PolylineOptions): any /* com.google.android.gms.internal.maps.zzad*/;
							public setOnMapLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
							public setOnGroundOverlayClickListener(param0: any /* com.google.android.gms.maps.internal.zzz*/): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public setOnMapClickListener(param0: any /* com.google.android.gms.maps.internal.zzal*/): void;
							public setOnMarkerDragListener(param0: any /* com.google.android.gms.maps.internal.zzav*/): void;
							public setOnMyLocationButtonClickListener(param0: any /* com.google.android.gms.maps.internal.zzax*/): void;
							public isBuildingsEnabled(): boolean;
							public onExitAmbient(): void;
							public setOnInfoWindowLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzah*/): void;
							public animateCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							public setMapStyle(param0: com.google.android.gms.maps.model.MapStyleOptions): boolean;
							public snapshot(param0: any /* com.google.android.gms.maps.internal.zzbu*/, param1: com.google.android.gms.dynamic.IObjectWrapper): void;
							public isTrafficEnabled(): boolean;
							public setOnCameraMoveListener(param0: any /* com.google.android.gms.maps.internal.zzt*/): void;
							public setLatLngBoundsForCameraTarget(param0: com.google.android.gms.maps.model.LatLngBounds): void;
							public setOnMapLoadedCallback(param0: any /* com.google.android.gms.maps.internal.zzan*/): void;
							public setInfoWindowAdapter(param0: any /* com.google.android.gms.maps.internal.zzi*/): void;
							public setOnInfoWindowClickListener(param0: any /* com.google.android.gms.maps.internal.zzad*/): void;
							public getMinZoomLevel(): number;
							public setContentDescription(param0: string): void;
							public stopAnimation(): void;
							public setMyLocationEnabled(param0: boolean): void;
							public setOnCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzn*/): void;
							public setLocationSource(param0: com.google.android.gms.maps.internal.ILocationSourceDelegate): void;
							public onLowMemory(): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public setOnCircleClickListener(param0: any /* com.google.android.gms.maps.internal.zzx*/): void;
							public setOnPolygonClickListener(param0: any /* com.google.android.gms.maps.internal.zzbf*/): void;
							public isIndoorEnabled(): boolean;
							public getFocusedBuilding(): any /* com.google.android.gms.internal.maps.zzr*/;
							public setMinZoomPreference(param0: number): void;
							public setOnCameraMoveStartedListener(param0: any /* com.google.android.gms.maps.internal.zzv*/): void;
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
							public getMyLocation(): globalAndroid.location.Location;
							public setOnPolylineClickListener(param0: any /* com.google.android.gms.maps.internal.zzbh*/): void;
							public useViewLifecycleWhenInFragment(): boolean;
							public onDestroy(): void;
							public setBuildingsEnabled(param0: boolean): void;
							public addTileOverlay(param0: com.google.android.gms.maps.model.TileOverlayOptions): any /* com.google.android.gms.internal.maps.zzag*/;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public setMaxZoomPreference(param0: number): void;
							public animateCameraWithCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.maps.internal.zzd*/): void;
							public setOnCameraMoveCanceledListener(param0: any /* com.google.android.gms.maps.internal.zzr*/): void;
							public setWatermarkEnabled(param0: boolean): void;
							public onStop(): void;
							public clear(): void;
							public setTrafficEnabled(param0: boolean): void;
							public animateCameraWithDurationAndCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: any /* com.google.android.gms.maps.internal.zzd*/): void;
							public getMaxZoomLevel(): number;
							public setIndoorEnabled(param0: boolean): boolean;
							public resetMinMaxZoomPreference(): void;
							public getCameraPosition(): com.google.android.gms.maps.model.CameraPosition;
							public setOnPoiClickListener(param0: any /* com.google.android.gms.maps.internal.zzbd*/): void;
							public getProjection(): com.google.android.gms.maps.internal.IProjectionDelegate;
							public onPause(): void;
							public addMarker(param0: com.google.android.gms.maps.model.MarkerOptions): any /* com.google.android.gms.internal.maps.zzx*/;
							public setOnInfoWindowCloseListener(param0: any /* com.google.android.gms.maps.internal.zzaf*/): void;
							public setOnMyLocationClickListener(param0: any /* com.google.android.gms.maps.internal.zzbb*/): void;
							public snapshotForTest(param0: any /* com.google.android.gms.maps.internal.zzbu*/): void;
							public setMapType(param0: number): void;
							public isMyLocationEnabled(): boolean;
							public setPadding(param0: number, param1: number, param2: number, param3: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class ILocationSourceDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.ILocationSourceDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.ILocationSourceDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { deactivate(): void; activate(param0: any /* com.google.android.gms.maps.internal.zzaj*/): void });
							public constructor();
							public activate(param0: any /* com.google.android.gms.maps.internal.zzaj*/): void;
							public deactivate(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IMapFragmentDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IMapFragmentDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IMapFragmentDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
								getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
								onCreate(param0: globalAndroid.os.Bundle): void;
								onDestroy(): void;
								onDestroyView(): void;
								onEnterAmbient(param0: globalAndroid.os.Bundle): void;
								onExitAmbient(): void;
								onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.GoogleMapOptions, param2: globalAndroid.os.Bundle): void;
								onLowMemory(): void;
								onPause(): void;
								onResume(): void;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								onStart(): void;
								onStop(): void;
								isReady(): boolean;
								getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
							});
							public constructor();
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
							public onStop(): void;
							public isReady(): boolean;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.GoogleMapOptions, param2: globalAndroid.os.Bundle): void;
							public onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
							public onDestroyView(): void;
							public onLowMemory(): void;
							public getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
							public onExitAmbient(): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IMapViewDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IMapViewDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IMapViewDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getView(): com.google.android.gms.dynamic.IObjectWrapper; getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate; onCreate(param0: globalAndroid.os.Bundle): void; onDestroy(): void; onEnterAmbient(param0: globalAndroid.os.Bundle): void; onExitAmbient(): void; onLowMemory(): void; onPause(): void; onResume(): void; onSaveInstanceState(param0: globalAndroid.os.Bundle): void; onStart(): void; onStop(): void; getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzar*/): void });
							public constructor();
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
							public onStop(): void;
							public onDestroy(): void;
							public getView(): com.google.android.gms.dynamic.IObjectWrapper;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onLowMemory(): void;
							public getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
							public onExitAmbient(): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IProjectionDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IProjectionDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IProjectionDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { toScreenLocation(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper; fromScreenLocation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.LatLng; getVisibleRegion(): com.google.android.gms.maps.model.VisibleRegion });
							public constructor();
							public fromScreenLocation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.LatLng;
							public getVisibleRegion(): com.google.android.gms.maps.model.VisibleRegion;
							public toScreenLocation(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IStreetViewPanoramaDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								orientationToPoint(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): com.google.android.gms.dynamic.IObjectWrapper;
								getPanoramaCamera(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
								getStreetViewPanoramaLocation(): com.google.android.gms.maps.model.StreetViewPanoramaLocation;
								pointToOrientation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
								animateTo(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera, param1: number): void;
								enablePanning(param0: boolean): void;
								enableStreetNames(param0: boolean): void;
								enableUserNavigation(param0: boolean): void;
								enableZoom(param0: boolean): void;
								setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
								setPositionWithID(param0: string): void;
								setPositionWithRadius(param0: com.google.android.gms.maps.model.LatLng, param1: number): void;
								setPositionWithRadiusAndSource(param0: com.google.android.gms.maps.model.LatLng, param1: number, param2: com.google.android.gms.maps.model.StreetViewSource): void;
								setPositionWithSource(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.StreetViewSource): void;
								isPanningGesturesEnabled(): boolean;
								isStreetNamesEnabled(): boolean;
								isUserNavigationEnabled(): boolean;
								isZoomGesturesEnabled(): boolean;
								setOnStreetViewPanoramaCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbj*/): void;
								setOnStreetViewPanoramaChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbl*/): void;
								setOnStreetViewPanoramaClickListener(param0: any /* com.google.android.gms.maps.internal.zzbn*/): void;
								setOnStreetViewPanoramaLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzbp*/): void;
							});
							public constructor();
							public setOnStreetViewPanoramaLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzbp*/): void;
							public enableStreetNames(param0: boolean): void;
							public isPanningGesturesEnabled(): boolean;
							public setOnStreetViewPanoramaChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbl*/): void;
							public animateTo(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera, param1: number): void;
							public isStreetNamesEnabled(): boolean;
							public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
							public isUserNavigationEnabled(): boolean;
							public pointToOrientation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
							public enablePanning(param0: boolean): void;
							public orientationToPoint(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): com.google.android.gms.dynamic.IObjectWrapper;
							public getStreetViewPanoramaLocation(): com.google.android.gms.maps.model.StreetViewPanoramaLocation;
							public enableUserNavigation(param0: boolean): void;
							public getPanoramaCamera(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
							public setPositionWithID(param0: string): void;
							public setOnStreetViewPanoramaCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbj*/): void;
							public enableZoom(param0: boolean): void;
							public setPositionWithRadius(param0: com.google.android.gms.maps.model.LatLng, param1: number): void;
							public isZoomGesturesEnabled(): boolean;
							public setPositionWithSource(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.StreetViewSource): void;
							public setOnStreetViewPanoramaClickListener(param0: any /* com.google.android.gms.maps.internal.zzbn*/): void;
							public setPositionWithRadiusAndSource(param0: com.google.android.gms.maps.model.LatLng, param1: number, param2: com.google.android.gms.maps.model.StreetViewSource): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IStreetViewPanoramaFragmentDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
								getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
								onCreate(param0: globalAndroid.os.Bundle): void;
								onDestroy(): void;
								onDestroyView(): void;
								onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.StreetViewPanoramaOptions, param2: globalAndroid.os.Bundle): void;
								onLowMemory(): void;
								onPause(): void;
								onResume(): void;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								onStart(): void;
								onStop(): void;
								isReady(): boolean;
								getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbr*/): void;
							});
							public constructor();
							public onStop(): void;
							public isReady(): boolean;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbr*/): void;
							public onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
							public onDestroyView(): void;
							public getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
							public onLowMemory(): void;
							public onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.StreetViewPanoramaOptions, param2: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IStreetViewPanoramaViewDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IStreetViewPanoramaViewDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IStreetViewPanoramaViewDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getView(): com.google.android.gms.dynamic.IObjectWrapper; getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate; onCreate(param0: globalAndroid.os.Bundle): void; onDestroy(): void; onLowMemory(): void; onPause(): void; onResume(): void; onSaveInstanceState(param0: globalAndroid.os.Bundle): void; onStart(): void; onStop(): void; getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbr*/): void });
							public constructor();
							public getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
							public onLowMemory(): void;
							public onStop(): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onDestroy(): void;
							public getView(): com.google.android.gms.dynamic.IObjectWrapper;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbr*/): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IUiSettingsDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IUiSettingsDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IUiSettingsDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setAllGesturesEnabled(param0: boolean): void;
								setCompassEnabled(param0: boolean): void;
								setIndoorLevelPickerEnabled(param0: boolean): void;
								setMapToolbarEnabled(param0: boolean): void;
								setMyLocationButtonEnabled(param0: boolean): void;
								setRotateGesturesEnabled(param0: boolean): void;
								setScrollGesturesEnabled(param0: boolean): void;
								setScrollGesturesEnabledDuringRotateOrZoom(param0: boolean): void;
								setTiltGesturesEnabled(param0: boolean): void;
								setZoomControlsEnabled(param0: boolean): void;
								setZoomGesturesEnabled(param0: boolean): void;
								isCompassEnabled(): boolean;
								isIndoorLevelPickerEnabled(): boolean;
								isMapToolbarEnabled(): boolean;
								isMyLocationButtonEnabled(): boolean;
								isRotateGesturesEnabled(): boolean;
								isScrollGesturesEnabled(): boolean;
								isScrollGesturesEnabledDuringRotateOrZoom(): boolean;
								isTiltGesturesEnabled(): boolean;
								isZoomControlsEnabled(): boolean;
								isZoomGesturesEnabled(): boolean;
							});
							public constructor();
							public setScrollGesturesEnabled(param0: boolean): void;
							public isScrollGesturesEnabled(): boolean;
							public setIndoorLevelPickerEnabled(param0: boolean): void;
							public isScrollGesturesEnabledDuringRotateOrZoom(): boolean;
							public setZoomControlsEnabled(param0: boolean): void;
							public setCompassEnabled(param0: boolean): void;
							public isMyLocationButtonEnabled(): boolean;
							public setMapToolbarEnabled(param0: boolean): void;
							public isZoomControlsEnabled(): boolean;
							public setScrollGesturesEnabledDuringRotateOrZoom(param0: boolean): void;
							public setTiltGesturesEnabled(param0: boolean): void;
							public isMapToolbarEnabled(): boolean;
							public setZoomGesturesEnabled(param0: boolean): void;
							public setMyLocationButtonEnabled(param0: boolean): void;
							public isIndoorLevelPickerEnabled(): boolean;
							public setRotateGesturesEnabled(param0: boolean): void;
							public isCompassEnabled(): boolean;
							public setAllGesturesEnabled(param0: boolean): void;
							public isZoomGesturesEnabled(): boolean;
							public isTiltGesturesEnabled(): boolean;
							public isRotateGesturesEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class MapLifecycleDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.MapLifecycleDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.MapLifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void });
							public constructor();
							public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class StreetViewLifecycleDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.StreetViewLifecycleDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.StreetViewLifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void });
							public constructor();
							public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzaa extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzab {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaa>;
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
				export module maps {
					export module internal {
						export class zzab {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzab>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzab interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): void; zzc(param0: any /* com.google.android.gms.internal.maps.zzr*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzac extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzad {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzac>;
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
				export module maps {
					export module internal {
						export class zzad {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzad>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.maps.zzx*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzae extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzaf {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzae>;
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
				export module maps {
					export module internal {
						export class zzaf {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.maps.zzx*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzag extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzah {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzag>;
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
				export module maps {
					export module internal {
						export class zzah {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzah>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzah interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.maps.zzx*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzai extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.zzaj {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzai>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzaj {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzd(param0: globalAndroid.location.Location): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzak extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzal {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzak>;
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
				export module maps {
					export module internal {
						export class zzal {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzal>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.maps.model.LatLng): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzam extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzan {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzam>;
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
				export module maps {
					export module internal {
						export class zzan {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzan>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export module maps {
					export module internal {
						export abstract class zzao extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzap {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzao>;
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
				export module maps {
					export module internal {
						export class zzap {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzap>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.maps.model.LatLng): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzaq extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzar {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaq>;
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
				export module maps {
					export module internal {
						export class zzar {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzar>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.maps.internal.IGoogleMapDelegate): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzas extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzat {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzas>;
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
				export module maps {
					export module internal {
						export class zzat {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzat>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.maps.zzx*/): boolean });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzau extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzav {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzau>;
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
				export module maps {
					export module internal {
						export class zzav {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzav>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzav interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.maps.zzx*/): void; zzc(param0: any /* com.google.android.gms.internal.maps.zzx*/): void; zzd(param0: any /* com.google.android.gms.internal.maps.zzx*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzaw extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzax {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaw>;
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
				export module maps {
					export module internal {
						export class zzax {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzax>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzax interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(): boolean });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzay extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzaz {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzay>;
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
				export module maps {
					export module internal {
						export class zzaz {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzaz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.dynamic.IObjectWrapper): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzb extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.ICameraUpdateFactoryDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzb>;
							public newLatLngBounds(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public scrollBy(param0: number, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLngBoundsWithSize(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number, param2: number, param3: number): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLngZoom(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomBy(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomTo(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomByWithFocus(param0: number, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomIn(): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomOut(): com.google.android.gms.dynamic.IObjectWrapper;
							public newCameraPosition(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzba extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzbb {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzba>;
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
				export module maps {
					export module internal {
						export class zzbb {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: globalAndroid.location.Location): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbc extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzbd {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbc>;
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
				export module maps {
					export module internal {
						export class zzbd {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.maps.model.PointOfInterest): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbe extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzbf {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbe>;
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
				export module maps {
					export module internal {
						export class zzbf {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.maps.zzaa*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbg extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzbh {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbg>;
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
				export module maps {
					export module internal {
						export class zzbh {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.maps.zzad*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbi extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzbj {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbi>;
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
				export module maps {
					export module internal {
						export class zzbj {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbk extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzbl {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbk>;
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
				export module maps {
					export module internal {
						export class zzbl {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.maps.model.StreetViewPanoramaLocation): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbm extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzbn {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbm>;
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
				export module maps {
					export module internal {
						export class zzbn {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbo extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzbp {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbo>;
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
				export module maps {
					export module internal {
						export class zzbp {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbq extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzbr {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbq>;
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
				export module maps {
					export module internal {
						export class zzbr {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbs extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.IProjectionDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbs>;
							public fromScreenLocation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.LatLng;
							public getVisibleRegion(): com.google.android.gms.maps.model.VisibleRegion;
							public toScreenLocation(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbt extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzbu {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbt>;
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
				export module maps {
					export module internal {
						export class zzbu {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: globalAndroid.graphics.Bitmap): void; zzc(param0: com.google.android.gms.dynamic.IObjectWrapper): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbv extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbv>;
							public setOnStreetViewPanoramaLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzbp*/): void;
							public enableStreetNames(param0: boolean): void;
							public setOnStreetViewPanoramaChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbl*/): void;
							public isPanningGesturesEnabled(): boolean;
							public animateTo(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera, param1: number): void;
							public isStreetNamesEnabled(): boolean;
							public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
							public isUserNavigationEnabled(): boolean;
							public pointToOrientation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
							public enablePanning(param0: boolean): void;
							public orientationToPoint(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): com.google.android.gms.dynamic.IObjectWrapper;
							public getStreetViewPanoramaLocation(): com.google.android.gms.maps.model.StreetViewPanoramaLocation;
							public enableUserNavigation(param0: boolean): void;
							public getPanoramaCamera(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
							public setPositionWithID(param0: string): void;
							public setOnStreetViewPanoramaCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbj*/): void;
							public enableZoom(param0: boolean): void;
							public setPositionWithRadius(param0: com.google.android.gms.maps.model.LatLng, param1: number): void;
							public isZoomGesturesEnabled(): boolean;
							public setPositionWithSource(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.StreetViewSource): void;
							public setOnStreetViewPanoramaClickListener(param0: any /* com.google.android.gms.maps.internal.zzbn*/): void;
							public setPositionWithRadiusAndSource(param0: com.google.android.gms.maps.model.LatLng, param1: number, param2: com.google.android.gms.maps.model.StreetViewSource): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbw extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbw>;
							public onStop(): void;
							public isReady(): boolean;
							public onDestroy(): void;
							public getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbr*/): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
							public onDestroyView(): void;
							public getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
							public onLowMemory(): void;
							public onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.StreetViewPanoramaOptions, param2: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbx extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.IStreetViewPanoramaViewDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbx>;
							public getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
							public onLowMemory(): void;
							public onStop(): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onDestroy(): void;
							public getView(): com.google.android.gms.dynamic.IObjectWrapper;
							public getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbr*/): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzby extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.IUiSettingsDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzby>;
							public setScrollGesturesEnabled(param0: boolean): void;
							public isScrollGesturesEnabled(): boolean;
							public setIndoorLevelPickerEnabled(param0: boolean): void;
							public isScrollGesturesEnabledDuringRotateOrZoom(): boolean;
							public setZoomControlsEnabled(param0: boolean): void;
							public setCompassEnabled(param0: boolean): void;
							public isMyLocationButtonEnabled(): boolean;
							public setMapToolbarEnabled(param0: boolean): void;
							public isZoomControlsEnabled(): boolean;
							public setScrollGesturesEnabledDuringRotateOrZoom(param0: boolean): void;
							public setTiltGesturesEnabled(param0: boolean): void;
							public isMapToolbarEnabled(): boolean;
							public setZoomGesturesEnabled(param0: boolean): void;
							public setMyLocationButtonEnabled(param0: boolean): void;
							public isIndoorLevelPickerEnabled(): boolean;
							public setRotateGesturesEnabled(param0: boolean): void;
							public isCompassEnabled(): boolean;
							public setAllGesturesEnabled(param0: boolean): void;
							public isZoomGesturesEnabled(): boolean;
							public isTiltGesturesEnabled(): boolean;
							public isRotateGesturesEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbz {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzc extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzd {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzc>;
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
				export module maps {
					export module internal {
						export class zzca {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzca>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export module maps {
					export module internal {
						export class zze extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.zzf {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zze>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzf {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(): number;
								zze(): com.google.android.gms.maps.internal.ICameraUpdateFactoryDelegate;
								zzf(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.internal.IMapFragmentDelegate;
								zzg(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.GoogleMapOptions): com.google.android.gms.maps.internal.IMapViewDelegate;
								zzh(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate;
								zzi(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.StreetViewPanoramaOptions): com.google.android.gms.maps.internal.IStreetViewPanoramaViewDelegate;
								zzj(): any /* com.google.android.gms.internal.maps.zzi*/;
								zzk(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
								zzl(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
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
				export module maps {
					export module internal {
						export class zzg extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.IGoogleMapDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzg>;
							public addGroundOverlay(param0: com.google.android.gms.maps.model.GroundOverlayOptions): any /* com.google.android.gms.internal.maps.zzo*/;
							public setOnIndoorStateChangeListener(param0: any /* com.google.android.gms.maps.internal.zzab*/): void;
							public getMapType(): number;
							public setOnCameraIdleListener(param0: any /* com.google.android.gms.maps.internal.zzp*/): void;
							public setOnMyLocationChangeListener(param0: any /* com.google.android.gms.maps.internal.zzaz*/): void;
							public moveCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							public addPolygon(param0: com.google.android.gms.maps.model.PolygonOptions): any /* com.google.android.gms.internal.maps.zzaa*/;
							public getUiSettings(): com.google.android.gms.maps.internal.IUiSettingsDelegate;
							public addCircle(param0: com.google.android.gms.maps.model.CircleOptions): any /* com.google.android.gms.internal.maps.zzl*/;
							public setOnMarkerClickListener(param0: any /* com.google.android.gms.maps.internal.zzat*/): void;
							public addPolyline(param0: com.google.android.gms.maps.model.PolylineOptions): any /* com.google.android.gms.internal.maps.zzad*/;
							public setOnMapLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
							public setOnGroundOverlayClickListener(param0: any /* com.google.android.gms.maps.internal.zzz*/): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public setOnMapClickListener(param0: any /* com.google.android.gms.maps.internal.zzal*/): void;
							public setOnMarkerDragListener(param0: any /* com.google.android.gms.maps.internal.zzav*/): void;
							public setOnMyLocationButtonClickListener(param0: any /* com.google.android.gms.maps.internal.zzax*/): void;
							public isBuildingsEnabled(): boolean;
							public onExitAmbient(): void;
							public setOnInfoWindowLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzah*/): void;
							public animateCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							public snapshot(param0: any /* com.google.android.gms.maps.internal.zzbu*/, param1: com.google.android.gms.dynamic.IObjectWrapper): void;
							public setMapStyle(param0: com.google.android.gms.maps.model.MapStyleOptions): boolean;
							public isTrafficEnabled(): boolean;
							public setOnCameraMoveListener(param0: any /* com.google.android.gms.maps.internal.zzt*/): void;
							public setLatLngBoundsForCameraTarget(param0: com.google.android.gms.maps.model.LatLngBounds): void;
							public setOnMapLoadedCallback(param0: any /* com.google.android.gms.maps.internal.zzan*/): void;
							public setInfoWindowAdapter(param0: any /* com.google.android.gms.maps.internal.zzi*/): void;
							public setOnInfoWindowClickListener(param0: any /* com.google.android.gms.maps.internal.zzad*/): void;
							public getMinZoomLevel(): number;
							public setContentDescription(param0: string): void;
							public stopAnimation(): void;
							public setMyLocationEnabled(param0: boolean): void;
							public setOnCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzn*/): void;
							public setLocationSource(param0: com.google.android.gms.maps.internal.ILocationSourceDelegate): void;
							public onLowMemory(): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public setOnCircleClickListener(param0: any /* com.google.android.gms.maps.internal.zzx*/): void;
							public setOnPolygonClickListener(param0: any /* com.google.android.gms.maps.internal.zzbf*/): void;
							public isIndoorEnabled(): boolean;
							public getFocusedBuilding(): any /* com.google.android.gms.internal.maps.zzr*/;
							public setMinZoomPreference(param0: number): void;
							public setOnCameraMoveStartedListener(param0: any /* com.google.android.gms.maps.internal.zzv*/): void;
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
							public getMyLocation(): globalAndroid.location.Location;
							public setOnPolylineClickListener(param0: any /* com.google.android.gms.maps.internal.zzbh*/): void;
							public useViewLifecycleWhenInFragment(): boolean;
							public onDestroy(): void;
							public setBuildingsEnabled(param0: boolean): void;
							public addTileOverlay(param0: com.google.android.gms.maps.model.TileOverlayOptions): any /* com.google.android.gms.internal.maps.zzag*/;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public animateCameraWithCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.maps.internal.zzd*/): void;
							public setMaxZoomPreference(param0: number): void;
							public setOnCameraMoveCanceledListener(param0: any /* com.google.android.gms.maps.internal.zzr*/): void;
							public setWatermarkEnabled(param0: boolean): void;
							public onStop(): void;
							public clear(): void;
							public animateCameraWithDurationAndCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: any /* com.google.android.gms.maps.internal.zzd*/): void;
							public setTrafficEnabled(param0: boolean): void;
							public getMaxZoomLevel(): number;
							public setIndoorEnabled(param0: boolean): boolean;
							public resetMinMaxZoomPreference(): void;
							public getCameraPosition(): com.google.android.gms.maps.model.CameraPosition;
							public setOnPoiClickListener(param0: any /* com.google.android.gms.maps.internal.zzbd*/): void;
							public getProjection(): com.google.android.gms.maps.internal.IProjectionDelegate;
							public addMarker(param0: com.google.android.gms.maps.model.MarkerOptions): any /* com.google.android.gms.internal.maps.zzx*/;
							public onPause(): void;
							public setOnInfoWindowCloseListener(param0: any /* com.google.android.gms.maps.internal.zzaf*/): void;
							public setOnMyLocationClickListener(param0: any /* com.google.android.gms.maps.internal.zzbb*/): void;
							public snapshotForTest(param0: any /* com.google.android.gms.maps.internal.zzbu*/): void;
							public setMapType(param0: number): void;
							public isMyLocationEnabled(): boolean;
							public setPadding(param0: number, param1: number, param2: number, param3: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzh extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzi {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzh>;
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
				export module maps {
					export module internal {
						export class zzi {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.maps.zzx*/): com.google.android.gms.dynamic.IObjectWrapper; zzc(param0: any /* com.google.android.gms.internal.maps.zzx*/): com.google.android.gms.dynamic.IObjectWrapper });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzj extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.ILocationSourceDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzj>;
							public constructor();
							public constructor(param0: string);
							public activate(param0: any /* com.google.android.gms.maps.internal.zzaj*/): void;
							public deactivate(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzk extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.IMapFragmentDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzk>;
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
							public onStop(): void;
							public isReady(): boolean;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.GoogleMapOptions, param2: globalAndroid.os.Bundle): void;
							public onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
							public onDestroyView(): void;
							public onLowMemory(): void;
							public getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
							public onExitAmbient(): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzl extends com.google.android.gms.internal.maps.zza implements com.google.android.gms.maps.internal.IMapViewDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzl>;
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
							public onStop(): void;
							public onDestroy(): void;
							public getView(): com.google.android.gms.dynamic.IObjectWrapper;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onLowMemory(): void;
							public getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
							public onExitAmbient(): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzm extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzn {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzm>;
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
				export module maps {
					export module internal {
						export class zzn {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: com.google.android.gms.maps.model.CameraPosition): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzo extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzp {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzo>;
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
				export module maps {
					export module internal {
						export class zzp {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export module maps {
					export module internal {
						export abstract class zzq extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzr {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzq>;
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
				export module maps {
					export module internal {
						export class zzr {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export module maps {
					export module internal {
						export abstract class zzs extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzt {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzs>;
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
				export module maps {
					export module internal {
						export class zzt {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzt>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export module maps {
					export module internal {
						export abstract class zzu extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzv {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzu>;
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
				export module maps {
					export module internal {
						export class zzv {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: number): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzw extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzx {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzw>;
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
				export module maps {
					export module internal {
						export class zzx {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.maps.zzl*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzy extends com.google.android.gms.internal.maps.zzb implements com.google.android.gms.maps.internal.zzz {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzy>;
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
				export module maps {
					export module internal {
						export class zzz {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zzb(param0: any /* com.google.android.gms.internal.maps.zzo*/): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class BitmapDescriptor {
							public static class: java.lang.Class<com.google.android.gms.maps.model.BitmapDescriptor>;
							public constructor(param0: com.google.android.gms.dynamic.IObjectWrapper);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class BitmapDescriptorFactory {
							public static class: java.lang.Class<com.google.android.gms.maps.model.BitmapDescriptorFactory>;
							public static HUE_RED: number;
							public static HUE_ORANGE: number;
							public static HUE_YELLOW: number;
							public static HUE_GREEN: number;
							public static HUE_CYAN: number;
							public static HUE_AZURE: number;
							public static HUE_BLUE: number;
							public static HUE_VIOLET: number;
							public static HUE_MAGENTA: number;
							public static HUE_ROSE: number;
							public static fromResource(param0: number): com.google.android.gms.maps.model.BitmapDescriptor;
							public static defaultMarker(): com.google.android.gms.maps.model.BitmapDescriptor;
							public static fromBitmap(param0: globalAndroid.graphics.Bitmap): com.google.android.gms.maps.model.BitmapDescriptor;
							public static fromAsset(param0: string): com.google.android.gms.maps.model.BitmapDescriptor;
							public static fromFile(param0: string): com.google.android.gms.maps.model.BitmapDescriptor;
							public static fromPath(param0: string): com.google.android.gms.maps.model.BitmapDescriptor;
							public static defaultMarker(param0: number): com.google.android.gms.maps.model.BitmapDescriptor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class ButtCap extends com.google.android.gms.maps.model.Cap {
							public static class: java.lang.Class<com.google.android.gms.maps.model.ButtCap>;
							public constructor();
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor, param1: number);
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
				export module maps {
					export module model {
						export class CameraPosition {
							public static class: java.lang.Class<com.google.android.gms.maps.model.CameraPosition>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.CameraPosition>;
							public target: com.google.android.gms.maps.model.LatLng;
							public zoom: number;
							public tilt: number;
							public bearing: number;
							public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: number, param2: number, param3: number);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public static builder(): com.google.android.gms.maps.model.CameraPosition.Builder;
							public static builder(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.maps.model.CameraPosition.Builder;
							public static fromLatLngZoom(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.maps.model.CameraPosition;
							public toString(): string;
							public equals(param0: any): boolean;
							public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): com.google.android.gms.maps.model.CameraPosition;
						}
						export module CameraPosition {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.maps.model.CameraPosition.Builder>;
								public target(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.CameraPosition.Builder;
								public tilt(param0: number): com.google.android.gms.maps.model.CameraPosition.Builder;
								public constructor();
								public bearing(param0: number): com.google.android.gms.maps.model.CameraPosition.Builder;
								public build(): com.google.android.gms.maps.model.CameraPosition;
								public constructor(param0: com.google.android.gms.maps.model.CameraPosition);
								public zoom(param0: number): com.google.android.gms.maps.model.CameraPosition.Builder;
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
				export module maps {
					export module model {
						export class Cap {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Cap>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.Cap>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor, param1: number);
							public toString(): string;
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
				export module maps {
					export module model {
						export class Circle {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Circle>;
							public getRadius(): number;
							public hashCode(): number;
							public getId(): string;
							public setTag(param0: any): void;
							public remove(): void;
							public setClickable(param0: boolean): void;
							public setStrokeColor(param0: number): void;
							public isClickable(): boolean;
							public getStrokeColor(): number;
							public constructor(param0: any /* com.google.android.gms.internal.maps.zzl*/);
							public getTag(): any;
							public setFillColor(param0: number): void;
							public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public getZIndex(): number;
							public setVisible(param0: boolean): void;
							public getCenter(): com.google.android.gms.maps.model.LatLng;
							public isVisible(): boolean;
							public setZIndex(param0: number): void;
							public getStrokeWidth(): number;
							public setCenter(param0: com.google.android.gms.maps.model.LatLng): void;
							public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							public setRadius(param0: number): void;
							public setStrokeWidth(param0: number): void;
							public getFillColor(): number;
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
				export module maps {
					export module model {
						export class CircleOptions {
							public static class: java.lang.Class<com.google.android.gms.maps.model.CircleOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.CircleOptions>;
							public constructor();
							public getRadius(): number;
							public strokeColor(param0: number): com.google.android.gms.maps.model.CircleOptions;
							public radius(param0: number): com.google.android.gms.maps.model.CircleOptions;
							public getCenter(): com.google.android.gms.maps.model.LatLng;
							public fillColor(param0: number): com.google.android.gms.maps.model.CircleOptions;
							public isVisible(): boolean;
							public isClickable(): boolean;
							public getStrokeColor(): number;
							public strokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): com.google.android.gms.maps.model.CircleOptions;
							public clickable(param0: boolean): com.google.android.gms.maps.model.CircleOptions;
							public visible(param0: boolean): com.google.android.gms.maps.model.CircleOptions;
							public getStrokeWidth(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public center(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.CircleOptions;
							public strokeWidth(param0: number): com.google.android.gms.maps.model.CircleOptions;
							public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public zIndex(param0: number): com.google.android.gms.maps.model.CircleOptions;
							public getZIndex(): number;
							public getFillColor(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class CustomCap extends com.google.android.gms.maps.model.Cap {
							public static class: java.lang.Class<com.google.android.gms.maps.model.CustomCap>;
							public bitmapDescriptor: com.google.android.gms.maps.model.BitmapDescriptor;
							public refWidth: number;
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor, param1: number);
							public toString(): string;
							public constructor(param0: number);
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Dash extends com.google.android.gms.maps.model.PatternItem {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Dash>;
							public length: number;
							public constructor(param0: number, param1: java.lang.Float);
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
				export module maps {
					export module model {
						export class Dot extends com.google.android.gms.maps.model.PatternItem {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Dot>;
							public constructor();
							public constructor(param0: number, param1: java.lang.Float);
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
				export module maps {
					export module model {
						export class Gap extends com.google.android.gms.maps.model.PatternItem {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Gap>;
							public length: number;
							public constructor(param0: number, param1: java.lang.Float);
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
				export module maps {
					export module model {
						export class GroundOverlay {
							public static class: java.lang.Class<com.google.android.gms.maps.model.GroundOverlay>;
							public getWidth(): number;
							public hashCode(): number;
							public getId(): string;
							public setTag(param0: any): void;
							public setDimensions(param0: number): void;
							public remove(): void;
							public setClickable(param0: boolean): void;
							public setPositionFromBounds(param0: com.google.android.gms.maps.model.LatLngBounds): void;
							public getPosition(): com.google.android.gms.maps.model.LatLng;
							public isClickable(): boolean;
							public setTransparency(param0: number): void;
							public getBearing(): number;
							public getHeight(): number;
							public getTransparency(): number;
							public setBearing(param0: number): void;
							public getTag(): any;
							public getZIndex(): number;
							public setVisible(param0: boolean): void;
							public getBounds(): com.google.android.gms.maps.model.LatLngBounds;
							public isVisible(): boolean;
							public setDimensions(param0: number, param1: number): void;
							public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
							public setZIndex(param0: number): void;
							public constructor(param0: any /* com.google.android.gms.internal.maps.zzo*/);
							public equals(param0: any): boolean;
							public setImage(param0: com.google.android.gms.maps.model.BitmapDescriptor): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class GroundOverlayOptions {
							public static class: java.lang.Class<com.google.android.gms.maps.model.GroundOverlayOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.GroundOverlayOptions>;
							public static NO_DIMENSION: number;
							public getWidth(): number;
							public constructor();
							public position(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public zIndex(param0: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public getLocation(): com.google.android.gms.maps.model.LatLng;
							public getAnchorV(): number;
							public visible(param0: boolean): com.google.android.gms.maps.model.GroundOverlayOptions;
							public getBounds(): com.google.android.gms.maps.model.LatLngBounds;
							public isVisible(): boolean;
							public transparency(param0: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public isClickable(): boolean;
							public bearing(param0: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public anchor(param0: number, param1: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public getBearing(): number;
							public getAnchorU(): number;
							public getHeight(): number;
							public getImage(): com.google.android.gms.maps.model.BitmapDescriptor;
							public getTransparency(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public position(param0: com.google.android.gms.maps.model.LatLng, param1: number, param2: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public getZIndex(): number;
							public clickable(param0: boolean): com.google.android.gms.maps.model.GroundOverlayOptions;
							public image(param0: com.google.android.gms.maps.model.BitmapDescriptor): com.google.android.gms.maps.model.GroundOverlayOptions;
							public positionFromBounds(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.gms.maps.model.GroundOverlayOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class IndoorBuilding {
							public static class: java.lang.Class<com.google.android.gms.maps.model.IndoorBuilding>;
							public getDefaultLevelIndex(): number;
							public getActiveLevelIndex(): number;
							public hashCode(): number;
							public getLevels(): java.util.List<com.google.android.gms.maps.model.IndoorLevel>;
							public constructor(param0: any /* com.google.android.gms.internal.maps.zzr*/);
							public isUnderground(): boolean;
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
				export module maps {
					export module model {
						export class IndoorLevel {
							public static class: java.lang.Class<com.google.android.gms.maps.model.IndoorLevel>;
							public activate(): void;
							public hashCode(): number;
							public getShortName(): string;
							public getName(): string;
							public constructor(param0: any /* com.google.android.gms.internal.maps.zzu*/);
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
				export module maps {
					export module model {
						export class JointType {
							public static class: java.lang.Class<com.google.android.gms.maps.model.JointType>;
							public static DEFAULT: number;
							public static BEVEL: number;
							public static ROUND: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class LatLng {
							public static class: java.lang.Class<com.google.android.gms.maps.model.LatLng>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.LatLng>;
							public latitude: number;
							public longitude: number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: number, param1: number);
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
				export module maps {
					export module model {
						export class LatLngBounds {
							public static class: java.lang.Class<com.google.android.gms.maps.model.LatLngBounds>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.LatLngBounds>;
							public southwest: com.google.android.gms.maps.model.LatLng;
							public northeast: com.google.android.gms.maps.model.LatLng;
							public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): com.google.android.gms.maps.model.LatLngBounds;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getCenter(): com.google.android.gms.maps.model.LatLng;
							public static builder(): com.google.android.gms.maps.model.LatLngBounds.Builder;
							public including(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.LatLngBounds;
							public toString(): string;
							public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.LatLng);
							public equals(param0: any): boolean;
							public contains(param0: com.google.android.gms.maps.model.LatLng): boolean;
						}
						export module LatLngBounds {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.maps.model.LatLngBounds.Builder>;
								public build(): com.google.android.gms.maps.model.LatLngBounds;
								public include(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.LatLngBounds.Builder;
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
				export module maps {
					export module model {
						export class MapStyleOptions {
							public static class: java.lang.Class<com.google.android.gms.maps.model.MapStyleOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.MapStyleOptions>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string);
							public static loadRawResourceStyle(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.maps.model.MapStyleOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Marker {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Marker>;
							public hashCode(): number;
							public getId(): string;
							public setTag(param0: any): void;
							public remove(): void;
							public setDraggable(param0: boolean): void;
							public getAlpha(): number;
							public getPosition(): com.google.android.gms.maps.model.LatLng;
							public setFlat(param0: boolean): void;
							public isInfoWindowShown(): boolean;
							public setIcon(param0: com.google.android.gms.maps.model.BitmapDescriptor): void;
							public isDraggable(): boolean;
							public setAnchor(param0: number, param1: number): void;
							public getTag(): any;
							public isFlat(): boolean;
							public hideInfoWindow(): void;
							public getZIndex(): number;
							public setRotation(param0: number): void;
							public showInfoWindow(): void;
							public setVisible(param0: boolean): void;
							public getTitle(): string;
							public isVisible(): boolean;
							public setInfoWindowAnchor(param0: number, param1: number): void;
							public setSnippet(param0: string): void;
							public getRotation(): number;
							public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
							public setZIndex(param0: number): void;
							public setTitle(param0: string): void;
							public setAlpha(param0: number): void;
							public getSnippet(): string;
							public constructor(param0: any /* com.google.android.gms.internal.maps.zzx*/);
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
				export module maps {
					export module model {
						export class MarkerOptions {
							public static class: java.lang.Class<com.google.android.gms.maps.model.MarkerOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.MarkerOptions>;
							public anchor(param0: number, param1: number): com.google.android.gms.maps.model.MarkerOptions;
							public alpha(param0: number): com.google.android.gms.maps.model.MarkerOptions;
							public draggable(param0: boolean): com.google.android.gms.maps.model.MarkerOptions;
							public getAlpha(): number;
							public rotation(param0: number): com.google.android.gms.maps.model.MarkerOptions;
							public getPosition(): com.google.android.gms.maps.model.LatLng;
							public title(param0: string): com.google.android.gms.maps.model.MarkerOptions;
							public visible(param0: boolean): com.google.android.gms.maps.model.MarkerOptions;
							public isDraggable(): boolean;
							public isFlat(): boolean;
							public getZIndex(): number;
							public flat(param0: boolean): com.google.android.gms.maps.model.MarkerOptions;
							public constructor();
							public getAnchorV(): number;
							public getIcon(): com.google.android.gms.maps.model.BitmapDescriptor;
							public snippet(param0: string): com.google.android.gms.maps.model.MarkerOptions;
							public getTitle(): string;
							public isVisible(): boolean;
							public getInfoWindowAnchorV(): number;
							public position(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.MarkerOptions;
							public getRotation(): number;
							public getAnchorU(): number;
							public infoWindowAnchor(param0: number, param1: number): com.google.android.gms.maps.model.MarkerOptions;
							public zIndex(param0: number): com.google.android.gms.maps.model.MarkerOptions;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getSnippet(): string;
							public getInfoWindowAnchorU(): number;
							public icon(param0: com.google.android.gms.maps.model.BitmapDescriptor): com.google.android.gms.maps.model.MarkerOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class PatternItem {
							public static class: java.lang.Class<com.google.android.gms.maps.model.PatternItem>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PatternItem>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: number, param1: java.lang.Float);
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
				export module maps {
					export module model {
						export class PointOfInterest {
							public static class: java.lang.Class<com.google.android.gms.maps.model.PointOfInterest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PointOfInterest>;
							public latLng: com.google.android.gms.maps.model.LatLng;
							public placeId: string;
							public name: string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: string, param2: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Polygon {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Polygon>;
							public hashCode(): number;
							public getId(): string;
							public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public setTag(param0: any): void;
							public getHoles(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>;
							public remove(): void;
							public setClickable(param0: boolean): void;
							public setStrokeColor(param0: number): void;
							public isClickable(): boolean;
							public getStrokeColor(): number;
							public getTag(): any;
							public setFillColor(param0: number): void;
							public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public getZIndex(): number;
							public setHoles(param0: java.util.List<any>): void;
							public getStrokeJointType(): number;
							public setGeodesic(param0: boolean): void;
							public setVisible(param0: boolean): void;
							public constructor(param0: any /* com.google.android.gms.internal.maps.zzaa*/);
							public isVisible(): boolean;
							public setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
							public setZIndex(param0: number): void;
							public isGeodesic(): boolean;
							public setStrokeJointType(param0: number): void;
							public getStrokeWidth(): number;
							public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							public setStrokeWidth(param0: number): void;
							public getFillColor(): number;
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
				export module maps {
					export module model {
						export class PolygonOptions {
							public static class: java.lang.Class<com.google.android.gms.maps.model.PolygonOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PolygonOptions>;
							public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public getHoles(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>;
							public isClickable(): boolean;
							public strokeWidth(param0: number): com.google.android.gms.maps.model.PolygonOptions;
							public getStrokeColor(): number;
							public addAll(param0: java.lang.Iterable<com.google.android.gms.maps.model.LatLng>): com.google.android.gms.maps.model.PolygonOptions;
							public clickable(param0: boolean): com.google.android.gms.maps.model.PolygonOptions;
							public add(param0: androidNative.Array<com.google.android.gms.maps.model.LatLng>): com.google.android.gms.maps.model.PolygonOptions;
							public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public getZIndex(): number;
							public geodesic(param0: boolean): com.google.android.gms.maps.model.PolygonOptions;
							public constructor();
							public getStrokeJointType(): number;
							public add(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.PolygonOptions;
							public strokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): com.google.android.gms.maps.model.PolygonOptions;
							public visible(param0: boolean): com.google.android.gms.maps.model.PolygonOptions;
							public isVisible(): boolean;
							public isGeodesic(): boolean;
							public getStrokeWidth(): number;
							public zIndex(param0: number): com.google.android.gms.maps.model.PolygonOptions;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public addHole(param0: java.lang.Iterable<com.google.android.gms.maps.model.LatLng>): com.google.android.gms.maps.model.PolygonOptions;
							public getFillColor(): number;
							public strokeColor(param0: number): com.google.android.gms.maps.model.PolygonOptions;
							public strokeJointType(param0: number): com.google.android.gms.maps.model.PolygonOptions;
							public fillColor(param0: number): com.google.android.gms.maps.model.PolygonOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Polyline {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Polyline>;
							public getWidth(): number;
							public hashCode(): number;
							public getId(): string;
							public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public setTag(param0: any): void;
							public remove(): void;
							public setClickable(param0: boolean): void;
							public isClickable(): boolean;
							public getColor(): number;
							public getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public getJointType(): number;
							public getTag(): any;
							public getZIndex(): number;
							public setPattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							public setGeodesic(param0: boolean): void;
							public setVisible(param0: boolean): void;
							public isVisible(): boolean;
							public setEndCap(param0: com.google.android.gms.maps.model.Cap): void;
							public setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
							public setZIndex(param0: number): void;
							public isGeodesic(): boolean;
							public setColor(param0: number): void;
							public getStartCap(): com.google.android.gms.maps.model.Cap;
							public getEndCap(): com.google.android.gms.maps.model.Cap;
							public setJointType(param0: number): void;
							public constructor(param0: any /* com.google.android.gms.internal.maps.zzad*/);
							public setWidth(param0: number): void;
							public equals(param0: any): boolean;
							public setStartCap(param0: com.google.android.gms.maps.model.Cap): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class PolylineOptions {
							public static class: java.lang.Class<com.google.android.gms.maps.model.PolylineOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PolylineOptions>;
							public getWidth(): number;
							public pattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): com.google.android.gms.maps.model.PolylineOptions;
							public add(param0: androidNative.Array<com.google.android.gms.maps.model.LatLng>): com.google.android.gms.maps.model.PolylineOptions;
							public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public startCap(param0: com.google.android.gms.maps.model.Cap): com.google.android.gms.maps.model.PolylineOptions;
							public isClickable(): boolean;
							public getColor(): number;
							public color(param0: number): com.google.android.gms.maps.model.PolylineOptions;
							public getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public getJointType(): number;
							public jointType(param0: number): com.google.android.gms.maps.model.PolylineOptions;
							public getZIndex(): number;
							public add(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.PolylineOptions;
							public clickable(param0: boolean): com.google.android.gms.maps.model.PolylineOptions;
							public visible(param0: boolean): com.google.android.gms.maps.model.PolylineOptions;
							public zIndex(param0: number): com.google.android.gms.maps.model.PolylineOptions;
							public geodesic(param0: boolean): com.google.android.gms.maps.model.PolylineOptions;
							public constructor();
							public addAll(param0: java.lang.Iterable<com.google.android.gms.maps.model.LatLng>): com.google.android.gms.maps.model.PolylineOptions;
							public width(param0: number): com.google.android.gms.maps.model.PolylineOptions;
							public isVisible(): boolean;
							public isGeodesic(): boolean;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getStartCap(): com.google.android.gms.maps.model.Cap;
							public getEndCap(): com.google.android.gms.maps.model.Cap;
							public endCap(param0: com.google.android.gms.maps.model.Cap): com.google.android.gms.maps.model.PolylineOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class RoundCap extends com.google.android.gms.maps.model.Cap {
							public static class: java.lang.Class<com.google.android.gms.maps.model.RoundCap>;
							public constructor();
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor, param1: number);
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
				export module maps {
					export module model {
						export class RuntimeRemoteException {
							public static class: java.lang.Class<com.google.android.gms.maps.model.RuntimeRemoteException>;
							public constructor(param0: globalAndroid.os.RemoteException);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class SquareCap extends com.google.android.gms.maps.model.Cap {
							public static class: java.lang.Class<com.google.android.gms.maps.model.SquareCap>;
							public constructor();
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor, param1: number);
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
				export module maps {
					export module model {
						export class StreetViewPanoramaCamera {
							public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaCamera>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaCamera>;
							public zoom: number;
							public tilt: number;
							public bearing: number;
							public getOrientation(): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
							public static builder(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
							public constructor(param0: number, param1: number, param2: number);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public static builder(): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module StreetViewPanoramaCamera {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder>;
								public build(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
								public bearing(param0: number): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
								public zoom(param0: number): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
								public orientation(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
								public constructor();
								public constructor(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera);
								public tilt(param0: number): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
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
				export module maps {
					export module model {
						export class StreetViewPanoramaLink {
							public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaLink>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaLink>;
							public panoId: string;
							public bearing: number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public constructor(param0: string, param1: number);
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
				export module maps {
					export module model {
						export class StreetViewPanoramaLocation {
							public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaLocation>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaLocation>;
							public links: androidNative.Array<com.google.android.gms.maps.model.StreetViewPanoramaLink>;
							public position: com.google.android.gms.maps.model.LatLng;
							public panoId: string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: androidNative.Array<com.google.android.gms.maps.model.StreetViewPanoramaLink>, param1: com.google.android.gms.maps.model.LatLng, param2: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class StreetViewPanoramaOrientation {
							public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaOrientation>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaOrientation>;
							public tilt: number;
							public bearing: number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public static builder(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): com.google.android.gms.maps.model.StreetViewPanoramaOrientation.Builder;
							public constructor(param0: number, param1: number);
							public static builder(): com.google.android.gms.maps.model.StreetViewPanoramaOrientation.Builder;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module StreetViewPanoramaOrientation {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaOrientation.Builder>;
								public build(): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
								public tilt(param0: number): com.google.android.gms.maps.model.StreetViewPanoramaOrientation.Builder;
								public constructor();
								public bearing(param0: number): com.google.android.gms.maps.model.StreetViewPanoramaOrientation.Builder;
								public constructor(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation);
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
				export module maps {
					export module model {
						export class StreetViewSource {
							public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewSource>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewSource>;
							public static DEFAULT: com.google.android.gms.maps.model.StreetViewSource;
							public static OUTDOOR: com.google.android.gms.maps.model.StreetViewSource;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
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
				export module maps {
					export module model {
						export class Tile {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Tile>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.Tile>;
							public width: number;
							public height: number;
							public data: androidNative.Array<number>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: androidNative.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class TileOverlay {
							public static class: java.lang.Class<com.google.android.gms.maps.model.TileOverlay>;
							public hashCode(): number;
							public setVisible(param0: boolean): void;
							public getId(): string;
							public getFadeIn(): boolean;
							public remove(): void;
							public clearTileCache(): void;
							public isVisible(): boolean;
							public setZIndex(param0: number): void;
							public setTransparency(param0: number): void;
							public constructor(param0: any /* com.google.android.gms.internal.maps.zzag*/);
							public getTransparency(): number;
							public setFadeIn(param0: boolean): void;
							public getZIndex(): number;
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
				export module maps {
					export module model {
						export class TileOverlayOptions {
							public static class: java.lang.Class<com.google.android.gms.maps.model.TileOverlayOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.TileOverlayOptions>;
							public fadeIn(param0: boolean): com.google.android.gms.maps.model.TileOverlayOptions;
							public transparency(param0: number): com.google.android.gms.maps.model.TileOverlayOptions;
							public constructor();
							public getTransparency(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getFadeIn(): boolean;
							public visible(param0: boolean): com.google.android.gms.maps.model.TileOverlayOptions;
							public tileProvider(param0: com.google.android.gms.maps.model.TileProvider): com.google.android.gms.maps.model.TileOverlayOptions;
							public isVisible(): boolean;
							public getZIndex(): number;
							public getTileProvider(): com.google.android.gms.maps.model.TileProvider;
							public zIndex(param0: number): com.google.android.gms.maps.model.TileOverlayOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class TileProvider {
							public static class: java.lang.Class<com.google.android.gms.maps.model.TileProvider>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.model.TileProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile; <clinit>(): void });
							public constructor();
							public static NO_TILE: com.google.android.gms.maps.model.Tile;
							public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export abstract class UrlTileProvider extends com.google.android.gms.maps.model.TileProvider {
							public static class: java.lang.Class<com.google.android.gms.maps.model.UrlTileProvider>;
							public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
							public constructor(param0: number, param1: number);
							public getTileUrl(param0: number, param1: number, param2: number): java.net.URL;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class VisibleRegion {
							public static class: java.lang.Class<com.google.android.gms.maps.model.VisibleRegion>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.VisibleRegion>;
							public nearLeft: com.google.android.gms.maps.model.LatLng;
							public nearRight: com.google.android.gms.maps.model.LatLng;
							public farLeft: com.google.android.gms.maps.model.LatLng;
							public farRight: com.google.android.gms.maps.model.LatLng;
							public latLngBounds: com.google.android.gms.maps.model.LatLngBounds;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.LatLng, param2: com.google.android.gms.maps.model.LatLng, param3: com.google.android.gms.maps.model.LatLng, param4: com.google.android.gms.maps.model.LatLngBounds);
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
				export module maps {
					export module model {
						export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.CameraPosition> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zza>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.Cap> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzb>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzc extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.CircleOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzd extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.GroundOverlayOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzd>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zze>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.LatLngBounds> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzf>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzg extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.LatLng> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzg>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzh extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.MapStyleOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzh>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzi extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.MarkerOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzi>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzj extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PatternItem> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzj>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzk extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PointOfInterest> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzk>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzl extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PolygonOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzl>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzm extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PolylineOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzm>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzn extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaCamera> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzn>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzo extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaLink> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzo>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzp extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaLocation> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzp>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzq extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaOrientation> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzq>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzr extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewSource> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzr>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzs extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.Tile> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzs>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzt extends com.google.android.gms.maps.model.TileProvider {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzt>;
							public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzu extends com.google.android.gms.internal.maps.zzai {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzv extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.TileOverlayOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzv>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzw extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.VisibleRegion> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzw>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zza extends com.google.android.gms.maps.internal.zzas {
						public static class: java.lang.Class<com.google.android.gms.maps.zza>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzaa extends com.google.android.gms.maps.internal.zzc {
						public static class: java.lang.Class<com.google.android.gms.maps.zzaa>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.GoogleMapOptions> {
						public static class: java.lang.Class<com.google.android.gms.maps.zzab>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzac extends com.google.android.gms.maps.internal.zzaq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzac>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzad extends com.google.android.gms.maps.internal.MapLifecycleDelegate {
						public static class: java.lang.Class<com.google.android.gms.maps.zzad>;
						public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						public constructor(param0: globalAndroid.app.Fragment, param1: com.google.android.gms.maps.internal.IMapFragmentDelegate);
						public onResume(): void;
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzae extends java.lang.Object /* com.google.android.gms.dynamic.DeferredLifecycleHelper<com.google.android.gms.maps.zzad>*/ {
						public static class: java.lang.Class<com.google.android.gms.maps.zzae>;
						public createDelegate(param0: any /* com.google.android.gms.dynamic.OnDelegateCreatedListener<com.google.android.gms.maps.zzad>*/): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzaf extends com.google.android.gms.maps.internal.zzaq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzaf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzag extends com.google.android.gms.maps.internal.MapLifecycleDelegate {
						public static class: java.lang.Class<com.google.android.gms.maps.zzag>;
						public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						public onResume(): void;
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public constructor(param0: globalAndroid.view.ViewGroup, param1: com.google.android.gms.maps.internal.IMapViewDelegate);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzah extends java.lang.Object /* com.google.android.gms.dynamic.DeferredLifecycleHelper<com.google.android.gms.maps.zzag>*/ {
						public static class: java.lang.Class<com.google.android.gms.maps.zzah>;
						public createDelegate(param0: any /* com.google.android.gms.dynamic.OnDelegateCreatedListener<com.google.android.gms.maps.zzag>*/): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzai extends com.google.android.gms.maps.internal.zzbk {
						public static class: java.lang.Class<com.google.android.gms.maps.zzai>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzaj extends com.google.android.gms.maps.internal.zzbi {
						public static class: java.lang.Class<com.google.android.gms.maps.zzaj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzak extends com.google.android.gms.maps.internal.zzbm {
						public static class: java.lang.Class<com.google.android.gms.maps.zzak>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzal extends com.google.android.gms.maps.internal.zzbo {
						public static class: java.lang.Class<com.google.android.gms.maps.zzal>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzam extends com.google.android.gms.maps.internal.zzbq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzam>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzan extends com.google.android.gms.maps.internal.StreetViewLifecycleDelegate {
						public static class: java.lang.Class<com.google.android.gms.maps.zzan>;
						public onResume(): void;
						public constructor(param0: globalAndroid.app.Fragment, param1: com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate);
						public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzao extends java.lang.Object /* com.google.android.gms.dynamic.DeferredLifecycleHelper<com.google.android.gms.maps.zzan>*/ {
						public static class: java.lang.Class<com.google.android.gms.maps.zzao>;
						public createDelegate(param0: any /* com.google.android.gms.dynamic.OnDelegateCreatedListener<com.google.android.gms.maps.zzan>*/): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzap extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.StreetViewPanoramaOptions> {
						public static class: java.lang.Class<com.google.android.gms.maps.zzap>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzaq extends com.google.android.gms.maps.internal.zzbq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzaq>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzar extends com.google.android.gms.maps.internal.StreetViewLifecycleDelegate {
						public static class: java.lang.Class<com.google.android.gms.maps.zzar>;
						public onResume(): void;
						public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
						public constructor(param0: globalAndroid.view.ViewGroup, param1: com.google.android.gms.maps.internal.IStreetViewPanoramaViewDelegate);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzas extends java.lang.Object /* com.google.android.gms.dynamic.DeferredLifecycleHelper<com.google.android.gms.maps.zzar>*/ {
						public static class: java.lang.Class<com.google.android.gms.maps.zzas>;
						public createDelegate(param0: any /* com.google.android.gms.dynamic.OnDelegateCreatedListener<com.google.android.gms.maps.zzar>*/): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzat extends com.google.android.gms.maps.internal.zzaq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzat>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzau extends com.google.android.gms.maps.internal.MapLifecycleDelegate {
						public static class: java.lang.Class<com.google.android.gms.maps.zzau>;
						public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						public onResume(): void;
						public constructor(param0: androidx.fragment.app.Fragment, param1: com.google.android.gms.maps.internal.IMapFragmentDelegate);
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzav extends java.lang.Object /* com.google.android.gms.dynamic.DeferredLifecycleHelper<com.google.android.gms.maps.zzau>*/ {
						public static class: java.lang.Class<com.google.android.gms.maps.zzav>;
						public createDelegate(param0: any /* com.google.android.gms.dynamic.OnDelegateCreatedListener<com.google.android.gms.maps.zzau>*/): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzaw extends com.google.android.gms.maps.internal.zzbq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzaw>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzax extends com.google.android.gms.maps.internal.StreetViewLifecycleDelegate {
						public static class: java.lang.Class<com.google.android.gms.maps.zzax>;
						public onResume(): void;
						public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						public onLowMemory(): void;
						public onStop(): void;
						public constructor(param0: androidx.fragment.app.Fragment, param1: com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate);
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzay extends java.lang.Object /* com.google.android.gms.dynamic.DeferredLifecycleHelper<com.google.android.gms.maps.zzax>*/ {
						public static class: java.lang.Class<com.google.android.gms.maps.zzay>;
						public createDelegate(param0: any /* com.google.android.gms.dynamic.OnDelegateCreatedListener<com.google.android.gms.maps.zzax>*/): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzb extends com.google.android.gms.maps.internal.zzau {
						public static class: java.lang.Class<com.google.android.gms.maps.zzb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzc extends com.google.android.gms.maps.internal.zzac {
						public static class: java.lang.Class<com.google.android.gms.maps.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzd extends com.google.android.gms.maps.internal.zzag {
						public static class: java.lang.Class<com.google.android.gms.maps.zzd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zze extends com.google.android.gms.maps.internal.zzae {
						public static class: java.lang.Class<com.google.android.gms.maps.zze>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzf extends com.google.android.gms.maps.internal.zzh {
						public static class: java.lang.Class<com.google.android.gms.maps.zzf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzg extends com.google.android.gms.maps.internal.zzay {
						public static class: java.lang.Class<com.google.android.gms.maps.zzg>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzh extends com.google.android.gms.maps.internal.zzaw {
						public static class: java.lang.Class<com.google.android.gms.maps.zzh>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzi extends com.google.android.gms.maps.internal.zzba {
						public static class: java.lang.Class<com.google.android.gms.maps.zzi>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzj extends com.google.android.gms.maps.internal.zzam {
						public static class: java.lang.Class<com.google.android.gms.maps.zzj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzk extends com.google.android.gms.maps.internal.zzaa {
						public static class: java.lang.Class<com.google.android.gms.maps.zzk>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzl extends com.google.android.gms.maps.LocationSource.OnLocationChangedListener {
						public static class: java.lang.Class<com.google.android.gms.maps.zzl>;
						public onLocationChanged(param0: globalAndroid.location.Location): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzm extends com.google.android.gms.maps.internal.zzy {
						public static class: java.lang.Class<com.google.android.gms.maps.zzm>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzn extends com.google.android.gms.maps.internal.zzw {
						public static class: java.lang.Class<com.google.android.gms.maps.zzn>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzo extends com.google.android.gms.maps.internal.zzbe {
						public static class: java.lang.Class<com.google.android.gms.maps.zzo>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzp extends com.google.android.gms.maps.internal.zzbg {
						public static class: java.lang.Class<com.google.android.gms.maps.zzp>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzq extends com.google.android.gms.maps.internal.zzbt {
						public static class: java.lang.Class<com.google.android.gms.maps.zzq>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzr extends com.google.android.gms.maps.internal.zzbc {
						public static class: java.lang.Class<com.google.android.gms.maps.zzr>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzs extends com.google.android.gms.maps.internal.zzj {
						public static class: java.lang.Class<com.google.android.gms.maps.zzs>;
						public activate(param0: any /* com.google.android.gms.maps.internal.zzaj*/): void;
						public deactivate(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzt extends com.google.android.gms.maps.internal.zzm {
						public static class: java.lang.Class<com.google.android.gms.maps.zzt>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzu extends com.google.android.gms.maps.internal.zzu {
						public static class: java.lang.Class<com.google.android.gms.maps.zzu>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzv extends com.google.android.gms.maps.internal.zzs {
						public static class: java.lang.Class<com.google.android.gms.maps.zzv>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzw extends com.google.android.gms.maps.internal.zzq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzw>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzx extends com.google.android.gms.maps.internal.zzo {
						public static class: java.lang.Class<com.google.android.gms.maps.zzx>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzy extends com.google.android.gms.maps.internal.zzak {
						public static class: java.lang.Class<com.google.android.gms.maps.zzy>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzz extends com.google.android.gms.maps.internal.zzao {
						public static class: java.lang.Class<com.google.android.gms.maps.zzz>;
					}
				}
			}
		}
	}
}

//Generics information:
