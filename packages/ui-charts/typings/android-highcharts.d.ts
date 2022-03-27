/// <reference path="../node_modules/@nativescript/types/android.d.ts" />

declare module com {
	export module highsoft {
		export module highcharts {
			export class BuildConfig {
				public static class: java.lang.Class<com.highsoft.highcharts.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export class HIChartsJSONSerializable {
					public static class: java.lang.Class<com.highsoft.highcharts.common.HIChartsJSONSerializable>;
					/**
					 * Constructs a new instance of the com.highsoft.highcharts.common.HIChartsJSONSerializable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getParams(): java.util.Map<string, any> });
					public constructor();
					public getParams(): java.util.Map<string, any>;
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export class HIColor {
					public static class: java.lang.Class<com.highsoft.highcharts.common.HIColor>;
					public getData(): any;
					public static initWithHexValue(param0: string): com.highsoft.highcharts.common.HIColor;
					public static initWithLinearGradient(param0: com.highsoft.highcharts.common.HIGradient, param1: java.util.LinkedList<com.highsoft.highcharts.common.HIStop>): com.highsoft.highcharts.common.HIColor;
					public static initWithRadialGradient(param0: com.highsoft.highcharts.common.HIGradient, param1: java.util.LinkedList<com.highsoft.highcharts.common.HIStop>): com.highsoft.highcharts.common.HIColor;
					public static initWithRGBA(param0: number, param1: number, param2: number, param3: number): com.highsoft.highcharts.common.HIColor;
					public static initWithName(param0: string): com.highsoft.highcharts.common.HIColor;
					public static initWithRGB(param0: number, param1: number, param2: number): com.highsoft.highcharts.common.HIColor;
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export class HIGradient {
					public static class: java.lang.Class<com.highsoft.highcharts.common.HIGradient>;
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public getGradient(): java.util.Map<any, any>;
					public constructor();
					public constructor(param0: number, param1: number, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export class HIStop extends java.util.LinkedList<any> {
					public static class: java.lang.Class<com.highsoft.highcharts.common.HIStop>;
					public constructor(param0: number, param1: com.highsoft.highcharts.common.HIColor);
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAccessibility extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAccessibility>;
						public getExposeAsGroupOnly(): java.lang.Boolean;
						public getAnnounceNewData(): com.highsoft.highcharts.common.hichartsclasses.HIAnnounceNewData;
						public getEnabled(): java.lang.Boolean;
						public setHighContrastTheme(param0: any): void;
						public setExporting(param0: com.highsoft.highcharts.common.hichartsclasses.HIExporting): void;
						public getKeyboardNavigation(): com.highsoft.highcharts.common.hichartsclasses.HIKeyboardNavigation;
						public setChartTypes(param0: com.highsoft.highcharts.common.hichartsclasses.HIChartTypes): void;
						public getAxis(): com.highsoft.highcharts.common.hichartsclasses.HIAxis;
						public setPoint(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint): void;
						public setAxis(param0: com.highsoft.highcharts.common.hichartsclasses.HIAxis): void;
						public setSeries(param0: com.highsoft.highcharts.common.hichartsclasses.HISeries): void;
						public setCustomComponents(param0: any): void;
						public setSonification(param0: com.highsoft.highcharts.common.hichartsclasses.HISonification): void;
						public getSvgContainerLabel(): string;
						public setScreenReaderSection(param0: com.highsoft.highcharts.common.hichartsclasses.HIScreenReaderSection): void;
						public setTable(param0: com.highsoft.highcharts.common.hichartsclasses.HITable): void;
						public setCredits(param0: string): void;
						public constructor();
						public setTypeDescription(param0: string): void;
						public setAnnounceNewData(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnnounceNewData): void;
						public getHighContrastTheme(): any;
						public setSvgContainerLabel(param0: string): void;
						public setLandmarkVerbosity(param0: string): void;
						public setRangeSelector(param0: com.highsoft.highcharts.common.hichartsclasses.HIRangeSelector): void;
						public getSonification(): com.highsoft.highcharts.common.hichartsclasses.HISonification;
						public setZoom(param0: com.highsoft.highcharts.common.hichartsclasses.HIZoom): void;
						public setDrillUpButton(param0: string): void;
						public setLinkedDescription(param0: string): void;
						public setSeriesTypeDescriptions(param0: com.highsoft.highcharts.common.hichartsclasses.HISeriesTypeDescriptions): void;
						public getThousandsSep(): string;
						public setDefinition(param0: string): void;
						public getLegend(): com.highsoft.highcharts.common.hichartsclasses.HILegend;
						public getGraphicContainerLabel(): string;
						public getLinkedDescription(): string;
						public setRangeDescription(param0: string): void;
						public getDefinition(): string;
						public getParams(): java.util.Map<string, any>;
						public getSeries(): com.highsoft.highcharts.common.hichartsclasses.HISeries;
						public getTypeDescription(): string;
						public setLegend(param0: com.highsoft.highcharts.common.hichartsclasses.HILegend): void;
						public getScreenReaderSection(): com.highsoft.highcharts.common.hichartsclasses.HIScreenReaderSection;
						public getParams(): java.util.HashMap<string, any>;
						public setGraphicContainerLabel(param0: string): void;
						public getCustomComponents(): any;
						public getChartTypes(): com.highsoft.highcharts.common.hichartsclasses.HIChartTypes;
						public getCredits(): string;
						public getChartContainerLabel(): string;
						public setPointDescriptionFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getTable(): com.highsoft.highcharts.common.hichartsclasses.HITable;
						public setChartContainerLabel(param0: string): void;
						public getPointDescriptionFormatter(): com.highsoft.highcharts.core.HIFunction;
						public setSvgContainerTitle(param0: string): void;
						public getSeriesTypeDescriptions(): com.highsoft.highcharts.common.hichartsclasses.HISeriesTypeDescriptions;
						public getLandmarkVerbosity(): string;
						public setEnabled(param0: java.lang.Boolean): void;
						public getRangeDescription(): string;
						public getDefaultChartTitle(): string;
						public getDrillUpButton(): string;
						public setThousandsSep(param0: string): void;
						public getRangeSelector(): com.highsoft.highcharts.common.hichartsclasses.HIRangeSelector;
						public getZoom(): com.highsoft.highcharts.common.hichartsclasses.HIZoom;
						public setDefaultChartTitle(param0: string): void;
						public setKeyboardNavigation(param0: com.highsoft.highcharts.common.hichartsclasses.HIKeyboardNavigation): void;
						public getExporting(): com.highsoft.highcharts.common.hichartsclasses.HIExporting;
						public getPoint(): com.highsoft.highcharts.common.hichartsclasses.HIPoint;
						public setExposeAsGroupOnly(param0: java.lang.Boolean): void;
						public getSvgContainerTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIActiveDataLabelStyle extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIActiveDataLabelStyle>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getCursor(): string;
						public getColor(): string;
						public getTextDecoration(): string;
						public setFontWeight(param0: string): void;
						public setCursor(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
						public setColor(param0: string): void;
						public getFontWeight(): string;
						public setTextDecoration(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAlignObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAlignObject>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getParams(): java.util.HashMap<string, any>;
						public setX(param0: java.lang.Number): void;
						public setY(param0: java.lang.Number): void;
						public setAlignByTranslate(param0: java.lang.Boolean): void;
						public getAlign(): string;
						public getVerticalAlign(): string;
						public setAlign(param0: string): void;
						public getAlignByTranslate(): java.lang.Boolean;
						public getY(): java.lang.Number;
						public setVerticalAlign(param0: string): void;
						public getX(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAnimation extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAnimation>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setDuration(param0: java.lang.Number): void;
						public getDuration(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAnimationOptionsObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject>;
						public getEasing(): string;
						public constructor();
						public setStep(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getParams(): java.util.Map<string, any>;
						public setComplete(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setDuration(param0: java.lang.Number): void;
						public getDuration(): java.lang.Number;
						public setEasing(param0: string): void;
						public getComplete(): com.highsoft.highcharts.core.HIFunction;
						public getParams(): java.util.HashMap<string, any>;
						public getStep(): com.highsoft.highcharts.core.HIFunction;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAnnotations extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAnnotations>;
						public setDescriptionMultiplePoints(param0: string): void;
						public redrawLabelItems(param0: java.util.List<com.highsoft.highcharts.common.hichartsclasses.HILabels>, param1: boolean): void;
						public destroy(): void;
						public setLabels(param0: java.util.ArrayList<any>): void;
						public redrawLabelItem(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels, param1: boolean): void;
						public destroyLabelItem(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels): void;
						public setVisibility(param0: boolean): void;
						public getZIndex(): java.lang.Number;
						public getLabels(): java.util.ArrayList<any>;
						public redrawShapeItem(param0: com.highsoft.highcharts.common.hichartsclasses.HIShapes): void;
						public constructor();
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setLabelOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HILabelOptions): void;
						public redrawShapeItems(param0: java.util.List<com.highsoft.highcharts.common.hichartsclasses.HIShapes>, param1: boolean): void;
						public setShapes(param0: java.util.ArrayList<any>): void;
						public redrawShapeItems(param0: java.util.List<com.highsoft.highcharts.common.hichartsclasses.HIShapes>): void;
						public getControlPointOptions(): com.highsoft.highcharts.common.hichartsclasses.HIControlPointOptions;
						public setDescriptionNoPoints(param0: string): void;
						public setDescriptionSinglePoint(param0: string): void;
						public getDraggable(): string;
						public setControlPointOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HIControlPointOptions): void;
						public remove(): void;
						public getShapes(): java.util.ArrayList<any>;
						public setOptions(): void;
						public getParams(): java.util.Map<string, any>;
						public getDescriptionMultiplePoints(): string;
						public setVisible(param0: java.lang.Boolean): void;
						public redrawLabelItems(param0: java.util.List<com.highsoft.highcharts.common.hichartsclasses.HILabels>): void;
						public getHeading(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setHeading(param0: string): void;
						public getId(): any;
						public redrawShapeItem(param0: com.highsoft.highcharts.common.hichartsclasses.HIShapes, param1: boolean): void;
						public getVisible(): java.lang.Boolean;
						public initShape(param0: com.highsoft.highcharts.common.hichartsclasses.HIShapes): void;
						public adjustShapeVisibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIShapes): void;
						public setZIndex(param0: java.lang.Number): void;
						public setShapeOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HIShapeOptions): void;
						public getDescriptionSinglePoint(): string;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public setDraggable(param0: string): void;
						public setId(param0: any): void;
						public destroyShapeItem(param0: com.highsoft.highcharts.common.hichartsclasses.HIShapes): void;
						public getShapeOptions(): com.highsoft.highcharts.common.hichartsclasses.HIShapeOptions;
						public initLabel(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels): void;
						public getDescriptionNoPoints(): string;
						public adjustLabelVisibility(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels): void;
						public setVisibility(): void;
						public redrawLabelItem(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels): void;
						public getLabelOptions(): com.highsoft.highcharts.common.hichartsclasses.HILabelOptions;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAnnotationsOptions extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAnnotationsOptions>;
						public getShapes(): java.util.ArrayList<any>;
						public constructor();
						public setZIndex(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public setShapeOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HIShapeOptions): void;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setLabelOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HILabelOptions): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public setVisible(param0: java.lang.Boolean): void;
						public setDraggable(param0: string): void;
						public setLabels(param0: java.util.ArrayList<any>): void;
						public setShapes(param0: java.util.ArrayList<any>): void;
						public setId(param0: any): void;
						public getParams(): java.util.HashMap<string, any>;
						public getControlPointOptions(): com.highsoft.highcharts.common.hichartsclasses.HIControlPointOptions;
						public getShapeOptions(): com.highsoft.highcharts.common.hichartsclasses.HIShapeOptions;
						public getId(): any;
						public getVisible(): java.lang.Boolean;
						public getZIndex(): java.lang.Number;
						public getLabels(): java.util.ArrayList<any>;
						public getLabelOptions(): com.highsoft.highcharts.common.hichartsclasses.HILabelOptions;
						public getDraggable(): string;
						public setControlPointOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HIControlPointOptions): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAnnounceNewData extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAnnounceNewData>;
						public getAnnouncementFormatter(): com.highsoft.highcharts.core.HIFunction;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getNewSeriesAnnounceMultiple(): string;
						public getNewPointAnnounceMultiple(): string;
						public setNewPointAnnounceSingle(param0: string): void;
						public setAnnouncementFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getNewPointAnnounceSingle(): string;
						public getInterruptUser(): java.lang.Boolean;
						public getEnabled(): java.lang.Boolean;
						public setMinAnnounceInterval(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setNewDataAnnounce(param0: string): void;
						public setNewSeriesAnnounceSingle(param0: string): void;
						public getMinAnnounceInterval(): java.lang.Number;
						public setNewPointAnnounceMultiple(param0: string): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public setInterruptUser(param0: java.lang.Boolean): void;
						public setNewSeriesAnnounceMultiple(param0: string): void;
						public getNewSeriesAnnounceSingle(): string;
						public getNewDataAnnounce(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIArea extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIArea>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setNegativeFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getTrackByArea(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setFillOpacity(param0: java.lang.Number): void;
						public setTrackByArea(param0: java.lang.Boolean): void;
						public getNegativeFillColor(): com.highsoft.highcharts.common.HIColor;
						public getFillOpacity(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIArearange extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIArearange>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setNegativeFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getTrackByArea(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setFillOpacity(param0: java.lang.Number): void;
						public setTrackByArea(param0: java.lang.Boolean): void;
						public getNegativeFillColor(): com.highsoft.highcharts.common.HIColor;
						public getFillOpacity(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAreaspline extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAreaspline>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setNegativeFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getTrackByArea(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setFillOpacity(param0: java.lang.Number): void;
						public setTrackByArea(param0: java.lang.Boolean): void;
						public getNegativeFillColor(): com.highsoft.highcharts.common.HIColor;
						public getFillOpacity(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAreasplinerange extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAreasplinerange>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setNegativeFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getTrackByArea(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setFillOpacity(param0: java.lang.Number): void;
						public setTrackByArea(param0: java.lang.Boolean): void;
						public getNegativeFillColor(): com.highsoft.highcharts.common.HIColor;
						public getFillOpacity(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIArrow extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIArrow>;
						public constructor();
						public getChildren(): java.util.ArrayList<any>;
						public getParams(): java.util.Map<string, any>;
						public setId(param0: string): void;
						public getMarkerWidth(): java.lang.Number;
						public getTagName(): string;
						public setChildren(param0: java.util.ArrayList<any>): void;
						public setMarkerHeight(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getMarkerHeight(): java.lang.Number;
						public getRefX(): java.lang.Number;
						public setRefY(param0: java.lang.Number): void;
						public getRefY(): java.lang.Number;
						public getRender(): java.lang.Boolean;
						public setMarkerWidth(param0: java.lang.Number): void;
						public setRefX(param0: java.lang.Number): void;
						public setTagName(param0: string): void;
						public getId(): string;
						public setRender(param0: java.lang.Boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAttr extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAttr>;
						public constructor();
						public setZIndex(param0: java.lang.Number): void;
						public getZIndex(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAttributes extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAttributes>;
						public constructor();
						public setZIndex(param0: java.lang.Number): void;
						public getZIndex(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIAxis extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIAxis>;
						public getXAxisDescriptionSingular(): string;
						public constructor();
						public setRangeFromTo(param0: string): void;
						public getXAxisDescriptionPlural(): string;
						public getParams(): java.util.Map<string, any>;
						public setRangeCategories(param0: string): void;
						public setTimeRangeDays(param0: string): void;
						public getYAxisDescriptionPlural(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setTimeRangeHours(param0: string): void;
						public getYAxisDescriptionSingular(): string;
						public getTimeRangeMinutes(): string;
						public setXAxisDescriptionSingular(param0: string): void;
						public getRangeCategories(): string;
						public setYAxisDescriptionSingular(param0: string): void;
						public getRangeFromTo(): string;
						public setYAxisDescriptionPlural(param0: string): void;
						public setXAxisDescriptionPlural(param0: string): void;
						public setTimeRangeMinutes(param0: string): void;
						public getTimeRangeHours(): string;
						public getTimeRangeDays(): string;
						public setTimeRangeSeconds(param0: string): void;
						public getTimeRangeSeconds(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBack extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBack>;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public getVisible(): any;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVisible(param0: any): void;
						public getSize(): java.lang.Number;
						public setSize(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBackground extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBackground>;
						public getInnerRadius(): any;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getBackgroundColor(): com.highsoft.highcharts.common.HIColor;
						public setInnerRadius(param0: any): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public setBackgroundColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setClassName(param0: string): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getShape(): string;
						public setOuterRadius(param0: any): void;
						public getOuterRadius(): any;
						public setShape(param0: string): void;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBar extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBar>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getEdgeWidth(): java.lang.Number;
						public setGroupZPadding(param0: java.lang.Number): void;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxPointWidth(): java.lang.Number;
						public getGroupZPadding(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setPointRange(param0: java.lang.Number): void;
						public getDepth(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBellcurve extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBellcurve>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public getIntervals(): java.lang.Number;
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setPointsInInterval(param0: java.lang.Number): void;
						public setNegativeFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getTrackByArea(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getBaseSeries(): any;
						public setFillOpacity(param0: java.lang.Number): void;
						public setIntervals(param0: java.lang.Number): void;
						public getPointsInInterval(): java.lang.Number;
						public setTrackByArea(param0: java.lang.Boolean): void;
						public getNegativeFillColor(): com.highsoft.highcharts.common.HIColor;
						public getFillOpacity(): java.lang.Number;
						public setBaseSeries(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBindings extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBindings>;
						public constructor();
						public getRectangleAnnotation(): com.highsoft.highcharts.common.hichartsclasses.HINavigationBindingsOptionsObject;
						public getParams(): java.util.Map<string, any>;
						public setLabelAnnotation(param0: com.highsoft.highcharts.common.hichartsclasses.HINavigationBindingsOptionsObject): void;
						public getCircleAnnotation(): com.highsoft.highcharts.common.hichartsclasses.HINavigationBindingsOptionsObject;
						public setRectangleAnnotation(param0: com.highsoft.highcharts.common.hichartsclasses.HINavigationBindingsOptionsObject): void;
						public getLabelAnnotation(): com.highsoft.highcharts.common.hichartsclasses.HINavigationBindingsOptionsObject;
						public setCircleAnnotation(param0: com.highsoft.highcharts.common.hichartsclasses.HINavigationBindingsOptionsObject): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBoost extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBoost>;
						public getDebug(): com.highsoft.highcharts.common.hichartsclasses.HIDebug;
						public getUseGPUTranslations(): java.lang.Boolean;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setUsePreallocated(param0: java.lang.Boolean): void;
						public setAllowForce(param0: java.lang.Boolean): void;
						public getEnabled(): java.lang.Boolean;
						public setSeriesThreshold(param0: java.lang.Number): void;
						public getUsePreallocated(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public setUseGPUTranslations(param0: java.lang.Boolean): void;
						public setDebug(param0: com.highsoft.highcharts.common.hichartsclasses.HIDebug): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public getSeriesThreshold(): java.lang.Number;
						public getAllowForce(): java.lang.Boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBottom extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBottom>;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public getVisible(): any;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVisible(param0: any): void;
						public getSize(): java.lang.Number;
						public setSize(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBoxplot extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBoxplot>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setMedianWidth(param0: java.lang.Number): void;
						public setGroupPadding(param0: java.lang.Number): void;
						public getEdgeWidth(): java.lang.Number;
						public setStemDashStyle(param0: string): void;
						public setWhiskerWidth(param0: java.lang.Number): void;
						public getWhiskerWidth(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setWhiskerLength(param0: any): void;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMedianDashStyle(): string;
						public getMedianColor(): com.highsoft.highcharts.common.HIColor;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setWhiskerColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getDepth(): java.lang.Number;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public getStemDashStyle(): string;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public setPointPadding(param0: java.lang.Number): void;
						public getStemWidth(): java.lang.Number;
						public setStemWidth(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getBoxDashStyle(): string;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getMedianWidth(): java.lang.Number;
						public getColorByPoint(): java.lang.Boolean;
						public getWhiskerDashStyle(): string;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setWhiskerDashStyle(param0: string): void;
						public getColors(): java.util.ArrayList<string>;
						public getMaxPointWidth(): java.lang.Number;
						public setMedianColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setPointRange(param0: java.lang.Number): void;
						public getWhiskerLength(): any;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMedianDashStyle(param0: string): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public getWhiskerColor(): com.highsoft.highcharts.common.HIColor;
						public getGrouping(): java.lang.Boolean;
						public setBoxDashStyle(param0: string): void;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBreaks extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBreaks>;
						public constructor();
						public getTo(): java.lang.Number;
						public getBreakSize(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public setFrom(param0: java.lang.Number): void;
						public getFrom(): java.lang.Number;
						public getRepeat(): java.lang.Number;
						public setBreakSize(param0: java.lang.Number): void;
						public setTo(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setRepeat(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBubble extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBubble>;
						public setDisplayNegative(param0: java.lang.Boolean): void;
						public constructor();
						public getZThreshold(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public getSizeByAbsoluteValue(): java.lang.Boolean;
						public setZThreshold(param0: java.lang.Number): void;
						public setMaxSize(param0: any): void;
						public getDisplayNegative(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getJitter(): com.highsoft.highcharts.common.hichartsclasses.HIJitter;
						public getZMax(): java.lang.Number;
						public setSizeBy(param0: string): void;
						public getZMin(): java.lang.Number;
						public setSizeByAbsoluteValue(param0: java.lang.Boolean): void;
						public setZMin(param0: java.lang.Number): void;
						public setMinSize(param0: any): void;
						public setJitter(param0: com.highsoft.highcharts.common.hichartsclasses.HIJitter): void;
						public getMaxSize(): any;
						public setZMax(param0: java.lang.Number): void;
						public getSizeBy(): string;
						public getMinSize(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBubbleLegend extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBubbleLegend>;
						public getParams(): java.util.Map<string, any>;
						public getSizeByAbsoluteValue(): java.lang.Boolean;
						public getRanges(): java.util.ArrayList<any>;
						public getConnectorWidth(): java.lang.Number;
						public getEnabled(): java.lang.Boolean;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setConnectorClassName(param0: string): void;
						public getConnectorDistance(): java.lang.Number;
						public setConnectorWidth(param0: java.lang.Number): void;
						public getZIndex(): java.lang.Number;
						public setSizeBy(param0: string): void;
						public setLegendIndex(param0: java.lang.Number): void;
						public setRanges(param0: java.util.ArrayList<any>): void;
						public setMaxSize(param0: java.lang.Number): void;
						public constructor();
						public setZIndex(param0: java.lang.Number): void;
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getLabels(): com.highsoft.highcharts.common.hichartsclasses.HILabels;
						public getZThreshold(): java.lang.Number;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setLabels(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels): void;
						public setZThreshold(param0: java.lang.Number): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setClassName(param0: string): void;
						public getMinSize(): java.lang.Number;
						public getMaxSize(): java.lang.Number;
						public getLegendIndex(): java.lang.Number;
						public setConnectorColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setSizeByAbsoluteValue(param0: java.lang.Boolean): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public getConnectorColor(): com.highsoft.highcharts.common.HIColor;
						public getConnectorClassName(): string;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setConnectorDistance(param0: java.lang.Number): void;
						public getSizeBy(): string;
						public setMinSize(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIBullet extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIBullet>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getEdgeWidth(): java.lang.Number;
						public setGroupZPadding(param0: java.lang.Number): void;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxPointWidth(): java.lang.Number;
						public getTargetOptions(): com.highsoft.highcharts.common.hichartsclasses.HITargetOptions;
						public getGroupZPadding(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setPointRange(param0: java.lang.Number): void;
						public getDepth(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setTargetOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HITargetOptions): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIButtonOptions extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIButtonOptions>;
						public getSymbolStroke(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public getHeight(): java.lang.Number;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public getText(): string;
						public setButtonSpacing(param0: java.lang.Number): void;
						public setSymbolFill(param0: com.highsoft.highcharts.common.HIColor): void;
						public getVerticalAlign(): string;
						public getButtonSpacing(): java.lang.Number;
						public getSymbolFill(): com.highsoft.highcharts.common.HIColor;
						public setSymbolX(param0: java.lang.Number): void;
						public setSymbolY(param0: java.lang.Number): void;
						public getSymbolY(): java.lang.Number;
						public getSymbolStrokeWidth(): java.lang.Number;
						public constructor();
						public setWidth(param0: java.lang.Number): void;
						public setSymbolSize(param0: java.lang.Number): void;
						public getTheme(): com.highsoft.highcharts.common.hichartsclasses.HITheme;
						public getSymbolSize(): java.lang.Number;
						public setHeight(param0: java.lang.Number): void;
						public getAlign(): string;
						public setEnabled(param0: java.lang.Boolean): void;
						public setText(param0: string): void;
						public setAlign(param0: string): void;
						public setTheme(param0: com.highsoft.highcharts.common.hichartsclasses.HITheme): void;
						public getSymbolX(): java.lang.Number;
						public getWidth(): java.lang.Number;
						public setSymbolStrokeWidth(param0: java.lang.Number): void;
						public getY(): java.lang.Number;
						public setVerticalAlign(param0: string): void;
						public setSymbolStroke(param0: com.highsoft.highcharts.common.HIColor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIButtons extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIButtons>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getContextButton(): com.highsoft.highcharts.common.hichartsclasses.HIContextButton;
						public getParams(): java.util.HashMap<string, any>;
						public setContextButton(param0: com.highsoft.highcharts.common.hichartsclasses.HIContextButton): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HICSSObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HICSSObject>;
						public getPosition(): string;
						public getHeight(): java.lang.Number;
						public getLineWidth(): java.lang.Number;
						public getFontSize(): string;
						public getBorderRadius(): java.lang.Number;
						public getTextOverflow(): string;
						public setTextOverflow(param0: string): void;
						public setOpacity(param0: java.lang.Number): void;
						public setBackgroundColor(param0: string): void;
						public setBorderRadius(param0: java.lang.Number): void;
						public setCursor(param0: string): void;
						public setTextDecoration(param0: string): void;
						public constructor();
						public setWidth(param0: java.lang.Number): void;
						public setTop(param0: string): void;
						public setTransition(param0: string): void;
						public setPosition(param0: string): void;
						public getTextOutline(): string;
						public getCursor(): string;
						public getPointerEvents(): string;
						public getBackground(): string;
						public setBackground(param0: string): void;
						public getPadding(): string;
						public setColor(param0: string): void;
						public getFontFamily(): string;
						public getTransition(): string;
						public getParams(): java.util.Map<string, any>;
						public getBackgroundColor(): string;
						public setFontSize(param0: string): void;
						public setFontWeight(param0: string): void;
						public setLineWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getTextAlign(): string;
						public getWhiteSpace(): string;
						public getTextDecoration(): string;
						public setPointerEvents(param0: string): void;
						public setTextAlign(param0: string): void;
						public getColor(): string;
						public setBorder(param0: string): void;
						public setWhiteSpace(param0: string): void;
						public getFontWeight(): string;
						public getOpacity(): java.lang.Number;
						public setHeight(param0: java.lang.Number): void;
						public setFontFamily(param0: string): void;
						public setPadding(param0: string): void;
						public getBorder(): string;
						public getTop(): string;
						public getWidth(): java.lang.Number;
						public setTextOutline(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HICaption extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HICaption>;
						public setUseHTML(param0: java.lang.Boolean): void;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getFloating(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public getText(): string;
						public getMargin(): java.lang.Number;
						public getUseHTML(): java.lang.Boolean;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getVerticalAlign(): string;
						public getAlign(): string;
						public setText(param0: string): void;
						public setAlign(param0: string): void;
						public setMargin(param0: java.lang.Number): void;
						public getY(): java.lang.Number;
						public setFloating(param0: java.lang.Boolean): void;
						public setVerticalAlign(param0: string): void;
						public getX(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIChart extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIChart>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public getZoomType(): string;
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getPinchType(): string;
						public getNumberFormatter(): com.highsoft.highcharts.core.HIFunction;
						public setRenderTo(param0: string): void;
						public setResetZoomButton(param0: com.highsoft.highcharts.common.hichartsclasses.HIResetZoomButton): void;
						public getDisplayErrors(): java.lang.Boolean;
						public getPlotBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setBorderRadius(param0: java.lang.Number): void;
						public setPlotBackgroundColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getMargin(): java.util.ArrayList<java.lang.Number>;
						public constructor();
						public getBackgroundColor(): com.highsoft.highcharts.common.HIColor;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setAlignTicks(param0: java.lang.Boolean): void;
						public getPlotShadow(): java.lang.Boolean;
						public getMarginRight(): java.lang.Number;
						public setSelectionMarkerFill(param0: com.highsoft.highcharts.common.HIColor): void;
						public setNumberFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getRenderTo(): string;
						public getShadow(): java.lang.Boolean;
						public setMarginBottom(param0: java.lang.Number): void;
						public setMarginLeft(param0: java.lang.Number): void;
						public getStyledMode(): java.lang.Boolean;
						public getMarginTop(): java.lang.Number;
						public getReflow(): java.lang.Boolean;
						public getParams(): java.util.Map<string, any>;
						public getType(): string;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setSpacingRight(param0: java.lang.Number): void;
						public setShowAxes(param0: java.lang.Boolean): void;
						public setParallelCoordinates(param0: java.lang.Boolean): void;
						public getOptions3d(): com.highsoft.highcharts.common.hichartsclasses.HIOptions3d;
						public getPlotBorderWidth(): java.lang.Number;
						public setPanning(param0: com.highsoft.highcharts.common.hichartsclasses.HIPanning): void;
						public setHeight(param0: any): void;
						public setPlotBorderWidth(param0: java.lang.Number): void;
						public setColorCount(param0: java.lang.Number): void;
						public setMargin(param0: java.util.ArrayList<java.lang.Number>): void;
						public setStyledMode(param0: java.lang.Boolean): void;
						public setZoomType(param0: string): void;
						public setClassName(param0: string): void;
						public getScrollablePlotArea(): com.highsoft.highcharts.common.hichartsclasses.HIScrollablePlotArea;
						public getSpacingBottom(): java.lang.Number;
						public getSpacingRight(): java.lang.Number;
						public setSpacingLeft(param0: java.lang.Number): void;
						public setZoomKey(param0: string): void;
						public getPanning(): com.highsoft.highcharts.common.hichartsclasses.HIPanning;
						public getResetZoomButton(): com.highsoft.highcharts.common.hichartsclasses.HIResetZoomButton;
						public getPolar(): java.lang.Boolean;
						public setPlotShadow(param0: java.lang.Boolean): void;
						public getPanKey(): string;
						public getPlotBackgroundImage(): string;
						public setSpacingTop(param0: java.lang.Number): void;
						public getMarginBottom(): java.lang.Number;
						public getSpacingLeft(): java.lang.Number;
						public getBorderRadius(): java.lang.Number;
						public setType(param0: string): void;
						public getInverted(): java.lang.Boolean;
						public setPolar(param0: java.lang.Boolean): void;
						public setMarginRight(param0: java.lang.Number): void;
						public getMarginLeft(): java.lang.Number;
						public setInverted(param0: java.lang.Boolean): void;
						public setParallelAxes(param0: com.highsoft.highcharts.common.hichartsclasses.HIParallelAxes): void;
						public setScrollablePlotArea(param0: com.highsoft.highcharts.common.hichartsclasses.HIScrollablePlotArea): void;
						public setDisplayErrors(param0: java.lang.Boolean): void;
						public setWidth(param0: any): void;
						public getSpacing(): java.util.ArrayList<java.lang.Number>;
						public setOptions3d(param0: com.highsoft.highcharts.common.hichartsclasses.HIOptions3d): void;
						public getAlignTicks(): java.lang.Boolean;
						public getWidth(): any;
						public setReflow(param0: java.lang.Boolean): void;
						public getSpacingTop(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public getParallelAxes(): com.highsoft.highcharts.common.hichartsclasses.HIParallelAxes;
						public getHeight(): any;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public setMarginTop(param0: java.lang.Number): void;
						public getZoomKey(): string;
						public getShowAxes(): java.lang.Boolean;
						public setPinchType(param0: string): void;
						public getBorderWidth(): java.lang.Number;
						public setPlotBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setPanKey(param0: string): void;
						public getPlotBackgroundColor(): com.highsoft.highcharts.common.HIColor;
						public setBackgroundColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setIgnoreHiddenSeries(param0: java.lang.Boolean): void;
						public getIgnoreHiddenSeries(): java.lang.Boolean;
						public getSelectionMarkerFill(): com.highsoft.highcharts.common.HIColor;
						public getParallelCoordinates(): java.lang.Boolean;
						public setShadow(param0: java.lang.Boolean): void;
						public setSpacing(param0: java.util.ArrayList<java.lang.Number>): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setSpacingBottom(param0: java.lang.Number): void;
						public getColorCount(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setPlotBackgroundImage(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIChartTypes extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIChartTypes>;
						public getUnknownMap(): string;
						public getParams(): java.util.Map<string, any>;
						public getSplineSingle(): string;
						public getBarMultiple(): string;
						public getScatterMultiple(): string;
						public getBoxplotSingle(): string;
						public setBarMultiple(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
						public setScatterMultiple(param0: string): void;
						public setLineMultiple(param0: string): void;
						public getScatterSingle(): string;
						public setSplineMultiple(param0: string): void;
						public getColumnSingle(): string;
						public getBubbleMultiple(): string;
						public setDefaultMultiple(param0: string): void;
						public setUnknownMap(param0: string): void;
						public setScatterSingle(param0: string): void;
						public setSplineSingle(param0: string): void;
						public getColumnMultiple(): string;
						public setBubbleSingle(param0: string): void;
						public setBoxplotSingle(param0: string): void;
						public getMapTypeDescription(): string;
						public getEmptyChart(): string;
						public setMapTypeDescription(param0: string): void;
						public setLineSingle(param0: string): void;
						public constructor();
						public setBubbleMultiple(param0: string): void;
						public getDefaultMultiple(): string;
						public setPieMultiple(param0: string): void;
						public setPieSingle(param0: string): void;
						public getPieSingle(): string;
						public getBubbleSingle(): string;
						public setCombinationChart(param0: string): void;
						public getSplineMultiple(): string;
						public setBoxplotMultiple(param0: string): void;
						public setColumnSingle(param0: string): void;
						public setColumnMultiple(param0: string): void;
						public setEmptyChart(param0: string): void;
						public getLineSingle(): string;
						public getLineMultiple(): string;
						public setDefaultSingle(param0: string): void;
						public getDefaultSingle(): string;
						public getCombinationChart(): string;
						public getBoxplotMultiple(): string;
						public setBarSingle(param0: string): void;
						public getBarSingle(): string;
						public getPieMultiple(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HICluster extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HICluster>;
						public setLayoutAlgorithm(param0: com.highsoft.highcharts.common.hichartsclasses.HILayoutAlgorithm): void;
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getParams(): java.util.Map<string, any>;
						public setStates(param0: com.highsoft.highcharts.common.hichartsclasses.HIStates): void;
						public getAllowOverlap(): java.lang.Boolean;
						public getStates(): com.highsoft.highcharts.common.hichartsclasses.HIStates;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getDrillToCluster(): java.lang.Boolean;
						public setMinimumClusterSize(param0: java.lang.Number): void;
						public setZones(param0: java.util.ArrayList<any>): void;
						public setAllowOverlap(param0: java.lang.Boolean): void;
						public getLayoutAlgorithm(): com.highsoft.highcharts.common.hichartsclasses.HILayoutAlgorithm;
						public setDataLabels(param0: com.highsoft.highcharts.common.hichartsclasses.HIDataLabels): void;
						public setDrillToCluster(param0: java.lang.Boolean): void;
						public getMinimumClusterSize(): java.lang.Number;
						public constructor();
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject;
						public setMarker(param0: com.highsoft.highcharts.common.hichartsclasses.HIMarker): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public getZones(): java.util.ArrayList<any>;
						public getDataLabels(): com.highsoft.highcharts.common.hichartsclasses.HIDataLabels;
						public getMarker(): com.highsoft.highcharts.common.hichartsclasses.HIMarker;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIColorAxis extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIColorAxis>;
						public getMinorTickWidth(): java.lang.Number;
						public setMinorGridLineDashStyle(param0: string): void;
						public setId(param0: string): void;
						public getGridLineWidth(): java.lang.Number;
						public getMinorTicks(): java.lang.Boolean;
						public getMinorGridLineWidth(): java.lang.Number;
						public setGridLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setReversed(param0: java.lang.Boolean): void;
						public constructor();
						public getMinorTickLength(): java.lang.Number;
						public getStartOnTick(): java.lang.Boolean;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setShowFirstLabel(param0: java.lang.Boolean): void;
						public setStops(param0: java.util.ArrayList<java.util.ArrayList<any>>): void;
						public setMaxPadding(param0: java.lang.Number): void;
						public setEndOnTick(param0: java.lang.Boolean): void;
						public setTickPositioner(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getTickmarkPlacement(): string;
						public getSoftMin(): java.lang.Number;
						public getAngle(): java.lang.Number;
						public getTickAmount(): java.lang.Number;
						public getUnits(): java.util.ArrayList<java.util.ArrayList<any>>;
						public getMaxPadding(): java.lang.Number;
						public getTickColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public setTickmarkPlacement(param0: string): void;
						public setGridZIndex(param0: java.lang.Number): void;
						public setDataClassColor(param0: string): void;
						public getType(): string;
						public getGridLineInterpolation(): string;
						public getMinorGridLineDashStyle(): string;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getCeiling(): java.lang.Number;
						public getTickPositions(): java.util.ArrayList<java.lang.Number>;
						public setGridLineDashStyle(param0: string): void;
						public getId(): string;
						public setGridLineInterpolation(param0: string): void;
						public setSoftMin(param0: java.lang.Number): void;
						public getMinorTickInterval(): any;
						public getLabels(): com.highsoft.highcharts.common.hichartsclasses.HILabels;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public setMinorTickWidth(param0: java.lang.Number): void;
						public getTickPositioner(): com.highsoft.highcharts.core.HIFunction;
						public getShowFirstLabel(): java.lang.Boolean;
						public setClassName(param0: string): void;
						public getDataClassColor(): string;
						public getTickPosition(): string;
						public setMinorGridLineWidth(param0: java.lang.Number): void;
						public setStartOnTick(param0: java.lang.Boolean): void;
						public setAngle(param0: java.lang.Number): void;
						public getShowLastLabel(): java.lang.Boolean;
						public getLayout(): string;
						public setMinPadding(param0: java.lang.Number): void;
						public setShowLastLabel(param0: java.lang.Boolean): void;
						public getUniqueNames(): java.lang.Boolean;
						public setTickInterval(param0: java.lang.Number): void;
						public getTickInterval(): java.lang.Number;
						public getStops(): java.util.ArrayList<java.util.ArrayList<any>>;
						public setTickPosition(param0: string): void;
						public getMarker(): com.highsoft.highcharts.common.hichartsclasses.HIMarker;
						public getEndOnTick(): java.lang.Boolean;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public getMinorTickPosition(): string;
						public setType(param0: string): void;
						public getMinorGridLineColor(): com.highsoft.highcharts.common.HIColor;
						public getMinorTickColor(): com.highsoft.highcharts.common.HIColor;
						public getGridZIndex(): java.lang.Number;
						public getGridLineColor(): com.highsoft.highcharts.common.HIColor;
						public getDataClasses(): java.util.ArrayList<any>;
						public setUniqueNames(param0: java.lang.Boolean): void;
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getMin(): java.lang.Number;
						public getMargin(): java.lang.Number;
						public setUnits(param0: java.util.ArrayList<java.util.ArrayList<any>>): void;
						public setTickWidth(param0: java.lang.Number): void;
						public getTickLength(): java.lang.Number;
						public setMinColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setMax(param0: java.lang.Number): void;
						public setShowInLegend(param0: java.lang.Boolean): void;
						public setMinorGridLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVisible(param0: java.lang.Boolean): void;
						public setMinorTickInterval(param0: any): void;
						public getMinColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxColor(): com.highsoft.highcharts.common.HIColor;
						public getShowInLegend(): java.lang.Boolean;
						public setMinorTickColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setTickColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getVisible(): java.lang.Boolean;
						public setGridLineWidth(param0: java.lang.Number): void;
						public setStartOfWeek(param0: java.lang.Number): void;
						public getFloor(): java.lang.Number;
						public setFloor(param0: java.lang.Number): void;
						public setMargin(param0: java.lang.Number): void;
						public setCeiling(param0: java.lang.Number): void;
						public setTickPixelInterval(param0: java.lang.Number): void;
						public getTickPixelInterval(): java.lang.Number;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public setLabels(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels): void;
						public setMin(param0: java.lang.Number): void;
						public setTickLength(param0: java.lang.Number): void;
						public setMinorTicks(param0: java.lang.Boolean): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public setMinorTickLength(param0: java.lang.Number): void;
						public setDataClasses(param0: java.util.ArrayList<any>): void;
						public setTickAmount(param0: java.lang.Number): void;
						public getReversed(): java.lang.Boolean;
						public setMarker(param0: com.highsoft.highcharts.common.hichartsclasses.HIMarker): void;
						public getStartOfWeek(): java.lang.Number;
						public getSoftMax(): java.lang.Number;
						public getTickWidth(): java.lang.Number;
						public setLayout(param0: string): void;
						public setMinorTickPosition(param0: string): void;
						public getGridLineDashStyle(): string;
						public setSoftMax(param0: java.lang.Number): void;
						public getMinPadding(): java.lang.Number;
						public setMaxColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setTickPositions(param0: java.util.ArrayList<java.lang.Number>): void;
						public getMax(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIColorVariation extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIColorVariation>;
						public constructor();
						public getTo(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public setTo(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setKey(param0: string): void;
						public getKey(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIColumn extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIColumn>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getEdgeWidth(): java.lang.Number;
						public setGroupZPadding(param0: java.lang.Number): void;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxPointWidth(): java.lang.Number;
						public getGroupZPadding(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setPointRange(param0: java.lang.Number): void;
						public getDepth(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIColumnpyramid extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIColumnpyramid>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public getColors(): java.util.ArrayList<string>;
						public getMaxPointWidth(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setPointRange(param0: java.lang.Number): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIColumnrange extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIColumnrange>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getEdgeWidth(): java.lang.Number;
						public setGroupZPadding(param0: java.lang.Number): void;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxPointWidth(): java.lang.Number;
						public setPointRange(param0: any): void;
						public getGroupZPadding(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public getDepth(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public getPointRange(): any;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HICondition extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HICondition>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getCallback(): com.highsoft.highcharts.core.HIFunction;
						public getMaxHeight(): java.lang.Number;
						public setMaxWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getMinWidth(): java.lang.Number;
						public setMinHeight(param0: java.lang.Number): void;
						public getMinHeight(): java.lang.Number;
						public setMaxHeight(param0: java.lang.Number): void;
						public setCallback(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getMaxWidth(): java.lang.Number;
						public setMinWidth(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIContextButton extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIContextButton>;
						public getSymbolStroke(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public getMenuItems(): java.util.ArrayList<string>;
						public getHeight(): java.lang.Number;
						public getEnabled(): java.lang.Boolean;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setTitleKey(param0: string): void;
						public setX(param0: java.lang.Number): void;
						public setY(param0: java.lang.Number): void;
						public getText(): string;
						public setButtonSpacing(param0: java.lang.Number): void;
						public setSymbolFill(param0: com.highsoft.highcharts.common.HIColor): void;
						public getVerticalAlign(): string;
						public getButtonSpacing(): java.lang.Number;
						public getSymbolFill(): com.highsoft.highcharts.common.HIColor;
						public setSymbolX(param0: java.lang.Number): void;
						public setSymbolY(param0: java.lang.Number): void;
						public getSymbolY(): java.lang.Number;
						public getX(): java.lang.Number;
						public getSymbolStrokeWidth(): java.lang.Number;
						public getMenuClassName(): string;
						public constructor();
						public setSymbol(param0: string): void;
						public setWidth(param0: java.lang.Number): void;
						public setSymbolSize(param0: java.lang.Number): void;
						public setOnclick(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setClassName(param0: string): void;
						public setMenuItems(param0: java.util.ArrayList<string>): void;
						public getTheme(): com.highsoft.highcharts.common.hichartsclasses.HITheme;
						public getSymbolSize(): java.lang.Number;
						public setHeight(param0: java.lang.Number): void;
						public getOnclick(): com.highsoft.highcharts.core.HIFunction;
						public getAlign(): string;
						public setEnabled(param0: java.lang.Boolean): void;
						public setText(param0: string): void;
						public setAlign(param0: string): void;
						public setTheme(param0: com.highsoft.highcharts.common.hichartsclasses.HITheme): void;
						public getSymbolX(): java.lang.Number;
						public getWidth(): java.lang.Number;
						public setSymbolStrokeWidth(param0: java.lang.Number): void;
						public getSymbol(): string;
						public getY(): java.lang.Number;
						public setMenuClassName(param0: string): void;
						public setVerticalAlign(param0: string): void;
						public setSymbolStroke(param0: com.highsoft.highcharts.common.HIColor): void;
						public getTitleKey(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIControlPointOptions extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIControlPointOptions>;
						public constructor();
						public setSymbol(param0: string): void;
						public getParams(): java.util.Map<string, any>;
						public setWidth(param0: java.lang.Number): void;
						public getHeight(): java.lang.Number;
						public getPositioner(): com.highsoft.highcharts.core.HIFunction;
						public setVisible(param0: java.lang.Boolean): void;
						public getParams(): java.util.HashMap<string, any>;
						public setHeight(param0: java.lang.Number): void;
						public getVisible(): java.lang.Boolean;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HIStyle): void;
						public getWidth(): java.lang.Number;
						public getSymbol(): string;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HIStyle;
						public setPositioner(param0: com.highsoft.highcharts.core.HIFunction): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HICredits extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HICredits>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public setHref(param0: string): void;
						public getText(): string;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public setEnabled(param0: java.lang.Boolean): void;
						public setText(param0: string): void;
						public getPosition(): com.highsoft.highcharts.common.hichartsclasses.HIAlignObject;
						public getHref(): string;
						public setPosition(param0: com.highsoft.highcharts.common.hichartsclasses.HIAlignObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HICrosshair extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HICrosshair>;
						public constructor();
						public setZIndex(param0: java.lang.Number): void;
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setSnap(param0: java.lang.Boolean): void;
						public getParams(): java.util.Map<string, any>;
						public setDashStyle(param0: string): void;
						public setWidth(param0: java.lang.Number): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getSnap(): java.lang.Boolean;
						public setClassName(param0: string): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getZIndex(): java.lang.Number;
						public getDashStyle(): string;
						public getWidth(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HICsv extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HICsv>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getLineDelimiter(): string;
						public getDecimalPoint(): string;
						public getDateFormat(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getColumnHeaderFormatter(): com.highsoft.highcharts.core.HIFunction;
						public setLineDelimiter(param0: string): void;
						public setDecimalPoint(param0: string): void;
						public setColumnHeaderFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getItemDelimiter(): string;
						public setDateFormat(param0: string): void;
						public setItemDelimiter(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HICylinder extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HICylinder>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getEdgeWidth(): java.lang.Number;
						public setGroupZPadding(param0: java.lang.Number): void;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxPointWidth(): java.lang.Number;
						public getGroupZPadding(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setPointRange(param0: java.lang.Number): void;
						public getDepth(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIData extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIData>;
						public getStartColumn(): java.lang.Number;
						public setParseDate(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setId(param0: string): void;
						public setColorIndex(param0: java.lang.Number): void;
						public getLowColor(): com.highsoft.highcharts.common.HIColor;
						public getCsv(): string;
						public getRowsURL(): string;
						public setProperty(param0: string, param1: any): void;
						public setLabel(param0: string): void;
						public setLegendIndex(param0: java.lang.Number): void;
						public setConnectorColor(param0: string): void;
						public getEndRow(): java.lang.Number;
						public setColumns(param0: java.util.ArrayList<java.util.ArrayList<any>>): void;
						public setMedian(param0: java.lang.Number): void;
						public setItemDelimiter(param0: string): void;
						public getCustom(): java.util.HashMap<any, any>;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public getSliced(): java.lang.Boolean;
						public getCsvURL(): string;
						public getLength(): java.lang.Number;
						public setLineDelimiter(param0: string): void;
						public setCsv(param0: string): void;
						public setParent(param0: string): void;
						public getBeforeParse(): com.highsoft.highcharts.core.HIFunction;
						public setDecimalPoint(param0: string): void;
						public setLow(param0: java.lang.Number): void;
						public setSliced(param0: java.lang.Boolean): void;
						public setFirstRowAsNames(param0: java.lang.Boolean): void;
						public setSets(param0: java.util.ArrayList<string>): void;
						public setColumnsURL(param0: string): void;
						public getStemDashStyle(): string;
						public getDragDrop(): com.highsoft.highcharts.common.hichartsclasses.HIDragDrop;
						public setTable(param0: string): void;
						public getParseDate(): com.highsoft.highcharts.core.HIFunction;
						public getComplete(): com.highsoft.highcharts.core.HIFunction;
						public getSwitchRowsAndColumns(): java.lang.Boolean;
						public getTarget(): java.lang.Number;
						public getLabelrank(): java.lang.Number;
						public getLow(): java.lang.Number;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HILegend, param1: boolean): void;
						public setGoogleSpreadsheetWorksheet(param0: string): void;
						public getGoogleSpreadsheetWorksheet(): string;
						public getDefinition(): string;
						public getParams(): java.util.Map<string, any>;
						public setIsSum(param0: java.lang.Boolean): void;
						public getBoxDashStyle(): string;
						public getIsSum(): java.lang.Boolean;
						public setSwitchRowsAndColumns(param0: java.lang.Boolean): void;
						public getLabel(): string;
						public setDragDrop(param0: com.highsoft.highcharts.common.hichartsclasses.HIDragDrop): void;
						public getClassName(): string;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setEnablePolling(param0: java.lang.Boolean): void;
						public getEndColumn(): java.lang.Number;
						public getWhiskerDashStyle(): string;
						public setOutgoing(param0: java.lang.Boolean): void;
						public getParent(): string;
						public getRadius(): any;
						public setLowColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getConnectorColor(): string;
						public getPartialFill(): com.highsoft.highcharts.common.hichartsclasses.HIPartialFill;
						public setDataRefreshRate(param0: java.lang.Number): void;
						public getX2(): java.lang.Number;
						public setRadius(param0: any): void;
						public setPointText(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint): void;
						public setRowsURL(param0: string): void;
						public getId(): string;
						public getTargetOptions(): com.highsoft.highcharts.common.hichartsclasses.HITargetOptions;
						public setSeriesMapping(param0: java.util.ArrayList<any>): void;
						public getQ1(): java.lang.Number;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public setQ1(param0: java.lang.Number): void;
						public getHigh(): java.lang.Number;
						public setName(param0: string): void;
						public getStartRow(): java.lang.Number;
						public setComplete(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setCustom(param0: java.util.HashMap<any, any>): void;
						public setInnerRadius(param0: any): void;
						public getDecimalPoint(): string;
						public setClassName(param0: string): void;
						public setSeriesText(param0: com.highsoft.highcharts.common.hichartsclasses.HISeries): void;
						public getMedian(): java.lang.Number;
						public setStartRow(param0: java.lang.Number): void;
						public getParsed(): com.highsoft.highcharts.core.HIFunction;
						public getWeight(): java.lang.Number;
						public getDirection(): java.lang.Number;
						public getColumns(): java.util.ArrayList<java.util.ArrayList<any>>;
						public setTargetOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HITargetOptions): void;
						public setBoxDashStyle(param0: string): void;
						public getPointPadding(): java.lang.Number;
						public getValue(): java.lang.Number;
						public getMarker(): com.highsoft.highcharts.common.hichartsclasses.HIMarker;
						public setEndColumn(param0: java.lang.Number): void;
						public getInnerRadius(): any;
						public getColorValue(): java.lang.Number;
						public setTo(param0: string): void;
						public setDashStyle(param0: string): void;
						public setZ(param0: java.lang.Number): void;
						public setStemDashStyle(param0: string): void;
						public getQ3(): java.lang.Number;
						public getDataRefreshRate(): java.lang.Number;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public setEndRow(param0: java.lang.Number): void;
						public setDirection(param0: java.lang.Number): void;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public getGradientForSides(): java.lang.Boolean;
						public setConnectorWidth(param0: java.lang.Number): void;
						public setGoogleSpreadsheetKey(param0: string): void;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HILegend): void;
						public setSelected(param0: java.lang.Boolean): void;
						public setDateFormat(param0: string): void;
						public setColorValue(param0: java.lang.Number): void;
						public setBeforeParse(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getSeriesMapping(): java.util.ArrayList<any>;
						public getMedianDashStyle(): string;
						public setDataLabels(param0: com.highsoft.highcharts.common.hichartsclasses.HIDataLabels): void;
						public getX(): java.lang.Number;
						public getLineDelimiter(): string;
						public getTable(): string;
						public getDateFormat(): string;
						public setBorderWidth(param0: java.lang.Number): void;
						public getGoogleSpreadsheetKey(): string;
						public getRows(): java.util.ArrayList<java.util.ArrayList<any>>;
						public setCsvURL(param0: string): void;
						public setDrilldown(param0: string): void;
						public setFrom(param0: string): void;
						public getDashStyle(): string;
						public setIsIntermediateSum(param0: java.lang.Boolean): void;
						public getColorIndex(): java.lang.Number;
						public setGradientForSides(param0: java.lang.Boolean): void;
						public getOutgoing(): java.lang.Boolean;
						public setDefinition(param0: string): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public getY(): java.lang.Number;
						public setHigh(param0: java.lang.Number): void;
						public getDrilldown(): string;
						public getEnablePolling(): java.lang.Boolean;
						public getTo(): string;
						public setPartialFill(param0: com.highsoft.highcharts.common.hichartsclasses.HIPartialFill): void;
						public getColumnsURL(): string;
						public setLength(param0: java.lang.Number): void;
						public getConnectorWidth(): java.lang.Number;
						public setValue(param0: java.lang.Number): void;
						public getSets(): java.util.ArrayList<string>;
						public getName(): string;
						public setX2(param0: java.lang.Number): void;
						public getZ(): java.lang.Number;
						public setRows(param0: java.util.ArrayList<java.util.ArrayList<any>>): void;
						public setWhiskerDashStyle(param0: string): void;
						public setLabelrank(param0: java.lang.Number): void;
						public getFrom(): string;
						public getIsIntermediateSum(): java.lang.Boolean;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setQ3(param0: java.lang.Number): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public setStartColumn(param0: java.lang.Number): void;
						public setWeight(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setMedianDashStyle(param0: string): void;
						public setMarker(param0: com.highsoft.highcharts.common.hichartsclasses.HIMarker): void;
						public getPointWidth(): java.lang.Number;
						public setParsed(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getLegendIndex(): java.lang.Number;
						public getSelected(): java.lang.Boolean;
						public getItemDelimiter(): string;
						public setTarget(param0: java.lang.Number): void;
						public getDataLabels(): com.highsoft.highcharts.common.hichartsclasses.HIDataLabels;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getFirstRowAsNames(): java.lang.Boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDataClasses extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDataClasses>;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getTo(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public setFrom(param0: java.lang.Number): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setName(param0: string): void;
						public getFrom(): java.lang.Number;
						public setTo(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDataGrouping extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDataGrouping>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setEnabled(param0: java.lang.Boolean): void;
						public setApproximation(param0: string): void;
						public getApproximation(): string;
						public getEnabled(): java.lang.Boolean;
						public getGroupPixelWidth(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setGroupPixelWidth(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDataLabels extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDataLabels>;
						public getLinkFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getPosition(): string;
						public setDefer(param0: java.lang.Boolean): void;
						public getCrop(): java.lang.Boolean;
						public setNodeFormat(param0: string): void;
						public getXHigh(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public setAllowOverlap(param0: java.lang.Boolean): void;
						public setRotationMode(param0: string): void;
						public getRotation(): java.lang.Number;
						public setAlternate(param0: java.lang.Boolean): void;
						public getConnectorShape(): string;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setOverflow(param0: string): void;
						public setXLow(param0: java.lang.Number): void;
						public setConnectorPadding(param0: java.lang.Number): void;
						public setParentNodeTextPath(param0: com.highsoft.highcharts.common.hichartsclasses.HIParentNodeTextPath): void;
						public getFormatter(): com.highsoft.highcharts.core.HIFunction;
						public setLinkTextPath(param0: com.highsoft.highcharts.common.hichartsclasses.HILinkTextPath): void;
						public getShape(): string;
						public setPosition(param0: string): void;
						public setAlign(param0: string): void;
						public getShadow(): java.lang.Boolean;
						public setCrookDistance(param0: string): void;
						public setAttributes(param0: com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes): void;
						public getConnectorColor(): com.highsoft.highcharts.common.HIColor;
						public getLinkTextPath(): com.highsoft.highcharts.common.hichartsclasses.HILinkTextPath;
						public setRotation(param0: java.lang.Number): void;
						public getDistance(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public getBackgroundColor(): string;
						public getConnectorPadding(): java.lang.Number;
						public getAllowOverlap(): java.lang.Boolean;
						public getRotationMode(): string;
						public setLinkFormat(param0: string): void;
						public setDistance(param0: java.lang.Number): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setFilter(param0: com.highsoft.highcharts.common.hichartsclasses.HIFilter): void;
						public getVerticalAlign(): string;
						public getDefer(): java.lang.Boolean;
						public setShape(param0: string): void;
						public getFormat(): string;
						public setZIndex(param0: java.lang.Number): void;
						public getAttributes(): com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes;
						public getPadding(): java.lang.Number;
						public setLinkFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setClassName(param0: string): void;
						public getParentNodeFormat(): string;
						public getAlign(): string;
						public setConnectorColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getSoftConnector(): java.lang.Boolean;
						public setConnectorShape(param0: string): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HIStyle): void;
						public setVerticalAlign(param0: string): void;
						public setZ(param0: java.lang.Number): void;
						public setXHigh(param0: java.lang.Number): void;
						public setFormat(param0: string): void;
						public getEnabled(): java.lang.Boolean;
						public setY(param0: string): void;
						public setNodeFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setX(param0: java.lang.Number): void;
						public getBorderRadius(): java.lang.Number;
						public setConnectorWidth(param0: java.lang.Number): void;
						public getNodeFormatter(): com.highsoft.highcharts.core.HIFunction;
						public setBackgroundColor(param0: string): void;
						public getXLow(): java.lang.Number;
						public getZIndex(): java.lang.Number;
						public getNullFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getAlternate(): java.lang.Boolean;
						public getX(): java.lang.Number;
						public setWidth(param0: java.lang.Number): void;
						public getNodeFormat(): string;
						public setBorderWidth(param0: java.lang.Number): void;
						public getLinkFormat(): string;
						public setCrop(param0: java.lang.Boolean): void;
						public getCrookDistance(): string;
						public getTextPath(): com.highsoft.highcharts.common.hichartsclasses.HITextPath;
						public getY(): string;
						public getBorderWidth(): java.lang.Number;
						public setTextPath(param0: com.highsoft.highcharts.common.hichartsclasses.HITextPath): void;
						public getFilter(): com.highsoft.highcharts.common.hichartsclasses.HIFilter;
						public setYLow(param0: java.lang.Number): void;
						public setInside(param0: java.lang.Boolean): void;
						public getAlignTo(): string;
						public getConnectorWidth(): java.lang.Number;
						public setAlignTo(param0: string): void;
						public getInside(): java.lang.Boolean;
						public getUseHTML(): java.lang.Boolean;
						public setNullFormat(param0: any): void;
						public getParentNodeFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getZ(): java.lang.Number;
						public setYHigh(param0: java.lang.Number): void;
						public getParentNodeTextPath(): com.highsoft.highcharts.common.hichartsclasses.HIParentNodeTextPath;
						public setNullFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getYHigh(): java.lang.Number;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HIStyle;
						public setUseHTML(param0: java.lang.Boolean): void;
						public getYLow(): java.lang.Number;
						public setParentNodeFormat(param0: string): void;
						public setShadow(param0: java.lang.Boolean): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getNullFormat(): any;
						public setFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setSoftConnector(param0: java.lang.Boolean): void;
						public setParentNodeFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setPadding(param0: java.lang.Number): void;
						public getWidth(): java.lang.Number;
						public getOverflow(): string;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDataSorting extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDataSorting>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setMatchByName(param0: java.lang.Boolean): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public setSortKey(param0: string): void;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getMatchByName(): java.lang.Boolean;
						public getSortKey(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDataSortingOptionsObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDataSortingOptionsObject>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setEnabled(param0: java.lang.Boolean): void;
						public setMatchByName(param0: java.lang.Boolean): void;
						public setSortKey(param0: string): void;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getMatchByName(): java.lang.Boolean;
						public getSortKey(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDateTimeLabelFormats extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getWeek(): com.highsoft.highcharts.common.hichartsclasses.HIWeek;
						public setSecond(param0: com.highsoft.highcharts.common.hichartsclasses.HISecond): void;
						public getMillisecond(): com.highsoft.highcharts.common.hichartsclasses.HIMillisecond;
						public setMillisecond(param0: com.highsoft.highcharts.common.hichartsclasses.HIMillisecond): void;
						public getYear(): com.highsoft.highcharts.common.hichartsclasses.HIYear;
						public getMonth(): com.highsoft.highcharts.common.hichartsclasses.HIMonth;
						public setWeek(param0: com.highsoft.highcharts.common.hichartsclasses.HIWeek): void;
						public setDay(param0: com.highsoft.highcharts.common.hichartsclasses.HIDay): void;
						public getParams(): java.util.HashMap<string, any>;
						public getDay(): com.highsoft.highcharts.common.hichartsclasses.HIDay;
						public setYear(param0: com.highsoft.highcharts.common.hichartsclasses.HIYear): void;
						public getMinute(): com.highsoft.highcharts.common.hichartsclasses.HIMinute;
						public getSecond(): com.highsoft.highcharts.common.hichartsclasses.HISecond;
						public getHour(): com.highsoft.highcharts.common.hichartsclasses.HIHour;
						public setMonth(param0: com.highsoft.highcharts.common.hichartsclasses.HIMonth): void;
						public setHour(param0: com.highsoft.highcharts.common.hichartsclasses.HIHour): void;
						public setMinute(param0: com.highsoft.highcharts.common.hichartsclasses.HIMinute): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDay extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDay>;
						public getMain(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setMain(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDebug extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDebug>;
						public getTimeBufferCopy(): java.lang.Boolean;
						public setTimeSetup(param0: java.lang.Boolean): void;
						public getTimeRendering(): java.lang.Boolean;
						public constructor();
						public setTimeBufferCopy(param0: java.lang.Boolean): void;
						public getParams(): java.util.Map<string, any>;
						public getTimeSeriesProcessing(): java.lang.Boolean;
						public setTimeKDTree(param0: java.lang.Boolean): void;
						public getParams(): java.util.HashMap<string, any>;
						public getShowSkipSummary(): java.lang.Boolean;
						public setTimeRendering(param0: java.lang.Boolean): void;
						public getTimeKDTree(): java.lang.Boolean;
						public setShowSkipSummary(param0: java.lang.Boolean): void;
						public getTimeSetup(): java.lang.Boolean;
						public setTimeSeriesProcessing(param0: java.lang.Boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDefault extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDefault>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setZIndex(param0: java.lang.Number): void;
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getLineWidth(): java.lang.Number;
						public setLineWidth(param0: java.lang.Number): void;
						public setClassName(param0: string): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getZIndex(): java.lang.Number;
						public getCursor(): string;
						public setCursor(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDefs extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDefs>;
						public constructor();
						public setReverseArrow(param0: com.highsoft.highcharts.common.hichartsclasses.HISVGDefinitionObject): void;
						public getParams(): java.util.Map<string, any>;
						public setArrow(param0: com.highsoft.highcharts.common.hichartsclasses.HISVGDefinitionObject): void;
						public getArrow(): com.highsoft.highcharts.common.hichartsclasses.HISVGDefinitionObject;
						public getParams(): java.util.HashMap<string, any>;
						public getReverseArrow(): com.highsoft.highcharts.common.hichartsclasses.HISVGDefinitionObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDependencywheel extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDependencywheel>;
						public getNodes(): java.util.ArrayList<any>;
						public getParams(): java.util.Map<string, any>;
						public getLevels(): java.util.ArrayList<any>;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public setLinkOpacity(param0: java.lang.Number): void;
						public getNodeWidth(): java.lang.Number;
						public getStartAngle(): java.lang.Number;
						public setNodePadding(param0: java.lang.Number): void;
						public getCurveFactor(): java.lang.Number;
						public getColors(): java.util.ArrayList<string>;
						public setNodeWidth(param0: java.lang.Number): void;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public setCenter(param0: java.util.ArrayList<any>): void;
						public setMinLinkWidth(param0: java.lang.Number): void;
						public setLevels(param0: java.util.ArrayList<any>): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setStartAngle(param0: java.lang.Number): void;
						public getNodePadding(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public getCenter(): java.util.ArrayList<any>;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setNodes(param0: java.util.ArrayList<any>): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public getMinLinkWidth(): java.lang.Number;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getLinkOpacity(): java.lang.Number;
						public setCurveFactor(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDial extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDial>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setRearLength(param0: string): void;
						public getBackgroundColor(): com.highsoft.highcharts.common.HIColor;
						public setTopWidth(param0: java.lang.Number): void;
						public getBaseLength(): string;
						public getBaseWidth(): java.lang.Number;
						public getTopWidth(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public setBackgroundColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setBaseWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.HashMap<string, any>;
						public setRadius(param0: string): void;
						public getRadius(): string;
						public getRearLength(): string;
						public getBorderWidth(): java.lang.Number;
						public setBaseLength(param0: string): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDragDrop extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDragDrop>;
						public getParams(): java.util.Map<string, any>;
						public getDraggableX2(): java.lang.Boolean;
						public getDraggableQ3(): java.lang.Boolean;
						public getDragPrecisionX(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setDraggableX1(param0: java.lang.Boolean): void;
						public getDraggableHigh(): java.lang.Boolean;
						public setGroupBy(param0: string): void;
						public setDraggableY(param0: java.lang.Boolean): void;
						public setDragPrecisionX(param0: java.lang.Number): void;
						public setDragPrecisionY(param0: java.lang.Number): void;
						public getDragMaxX(): java.lang.Number;
						public getDragMinX(): java.lang.Number;
						public setLiveRedraw(param0: java.lang.Boolean): void;
						public setGuideBox(param0: com.highsoft.highcharts.common.hichartsclasses.HIGuideBox): void;
						public setDragSensitivity(param0: java.lang.Number): void;
						public setDraggableLow(param0: java.lang.Boolean): void;
						public getDraggableLow(): java.lang.Boolean;
						public constructor();
						public setDraggableQ1(param0: java.lang.Boolean): void;
						public getDragMaxY(): java.lang.Number;
						public getGroupBy(): string;
						public setDraggableX2(param0: java.lang.Boolean): void;
						public getDraggableX(): java.lang.Boolean;
						public getDraggableQ1(): java.lang.Boolean;
						public setDraggableTarget(param0: java.lang.Boolean): void;
						public getGuideBox(): com.highsoft.highcharts.common.hichartsclasses.HIGuideBox;
						public getDragHandle(): com.highsoft.highcharts.common.hichartsclasses.HIDragHandle;
						public setDragHandle(param0: com.highsoft.highcharts.common.hichartsclasses.HIDragHandle): void;
						public setDraggableQ3(param0: java.lang.Boolean): void;
						public getDraggableTarget(): java.lang.Boolean;
						public setDragMinX(param0: java.lang.Number): void;
						public setDragMinY(param0: java.lang.Number): void;
						public getDragSensitivity(): java.lang.Number;
						public getDraggableX1(): java.lang.Boolean;
						public getDraggableY(): java.lang.Boolean;
						public getDragMinY(): java.lang.Number;
						public setDraggableHigh(param0: java.lang.Boolean): void;
						public getDragPrecisionY(): java.lang.Number;
						public getLiveRedraw(): java.lang.Boolean;
						public setDraggableX(param0: java.lang.Boolean): void;
						public setDragMaxX(param0: java.lang.Number): void;
						public setDragMaxY(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDragHandle extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDragHandle>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setZIndex(param0: java.lang.Number): void;
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getLineWidth(): java.lang.Number;
						public setLineWidth(param0: java.lang.Number): void;
						public setClassName(param0: string): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setPathFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getZIndex(): java.lang.Number;
						public getCursor(): string;
						public getPathFormatter(): com.highsoft.highcharts.core.HIFunction;
						public setCursor(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDrillUpButton extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDrillUpButton>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getTheme(): any;
						public getRelativeTo(): string;
						public getPosition(): com.highsoft.highcharts.common.hichartsclasses.HIAlignObject;
						public setTheme(param0: any): void;
						public getParams(): java.util.HashMap<string, any>;
						public setPosition(param0: com.highsoft.highcharts.common.hichartsclasses.HIAlignObject): void;
						public setRelativeTo(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDrilldown extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDrilldown>;
						public getActiveDataLabelStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public constructor();
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getParams(): java.util.Map<string, any>;
						public setSeries(param0: java.util.ArrayList<any>): void;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject;
						public getActiveAxisLabelStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getParams(): java.util.HashMap<string, any>;
						public setActiveDataLabelStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public setAllowPointDrilldown(param0: java.lang.Boolean): void;
						public setDrillUpButton(param0: com.highsoft.highcharts.common.hichartsclasses.HIDrillUpButton): void;
						public getSeries(): java.util.ArrayList<any>;
						public getDrillUpButton(): com.highsoft.highcharts.common.hichartsclasses.HIDrillUpButton;
						public getAllowPointDrilldown(): java.lang.Boolean;
						public setActiveAxisLabelStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIDumbbell extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIDumbbell>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setGroupPadding(param0: java.lang.Number): void;
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setPointRange(param0: java.lang.Number): void;
						public getConnectorWidth(): java.lang.Number;
						public setNegativeFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getLowColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.HashMap<string, any>;
						public getPointRange(): java.lang.Number;
						public setConnectorWidth(param0: java.lang.Number): void;
						public setLowColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setConnectorColor(param0: string): void;
						public getConnectorColor(): string;
						public getGroupPadding(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public getNegativeFillColor(): com.highsoft.highcharts.common.HIColor;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIErrorbar extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIErrorbar>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setMedianWidth(param0: java.lang.Number): void;
						public setGroupPadding(param0: java.lang.Number): void;
						public getEdgeWidth(): java.lang.Number;
						public setStemDashStyle(param0: string): void;
						public setWhiskerWidth(param0: java.lang.Number): void;
						public getWhiskerWidth(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setWhiskerLength(param0: any): void;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMedianDashStyle(): string;
						public getMedianColor(): com.highsoft.highcharts.common.HIColor;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setWhiskerColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getDepth(): java.lang.Number;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public getStemDashStyle(): string;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setPointPadding(param0: java.lang.Number): void;
						public getStemWidth(): java.lang.Number;
						public setStemWidth(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getBoxDashStyle(): string;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getMedianWidth(): java.lang.Number;
						public getColorByPoint(): java.lang.Boolean;
						public getWhiskerDashStyle(): string;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setWhiskerDashStyle(param0: string): void;
						public getColors(): java.util.ArrayList<string>;
						public getMaxPointWidth(): java.lang.Number;
						public setMedianColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setPointRange(param0: java.lang.Number): void;
						public getWhiskerLength(): any;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMedianDashStyle(param0: string): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public getWhiskerColor(): com.highsoft.highcharts.common.HIColor;
						public getGrouping(): java.lang.Boolean;
						public setBoxDashStyle(param0: string): void;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIEvents extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIEvents>;
						public getAdd(): com.highsoft.highcharts.core.HIFunction;
						public setSelection(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getDrillupall(): com.highsoft.highcharts.core.HIFunction;
						public getShowPopup(): com.highsoft.highcharts.core.HIFunction;
						public setRedraw(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setRemove(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setPointBreak(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getShow(): com.highsoft.highcharts.core.HIFunction;
						public setMouseover(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setExportData(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getDragStart(): com.highsoft.highcharts.core.HIFunction;
						public setUpdate(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getRemove(): com.highsoft.highcharts.core.HIFunction;
						public setShowPopup(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getLegendItemClick(): com.highsoft.highcharts.core.HIFunction;
						public getClosePopup(): com.highsoft.highcharts.core.HIFunction;
						public getPointInBreak(): com.highsoft.highcharts.core.HIFunction;
						public getDrop(): com.highsoft.highcharts.core.HIFunction;
						public setDeselectButton(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setClick(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setDrillup(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setAfterBreaks(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setCheckboxClick(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setRender(param0: com.highsoft.highcharts.core.HIFunction): void;
						public constructor();
						public setLoad(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setAfterSetExtremes(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getSelect(): com.highsoft.highcharts.core.HIFunction;
						public getExportData(): com.highsoft.highcharts.core.HIFunction;
						public getClick(): com.highsoft.highcharts.core.HIFunction;
						public getMouseOut(): com.highsoft.highcharts.core.HIFunction;
						public setMouseOver(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getDrag(): com.highsoft.highcharts.core.HIFunction;
						public getMouseover(): com.highsoft.highcharts.core.HIFunction;
						public getAfterBreaks(): com.highsoft.highcharts.core.HIFunction;
						public setMouseOut(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getSelectButton(): com.highsoft.highcharts.core.HIFunction;
						public setAfterUpdate(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getDrillup(): com.highsoft.highcharts.core.HIFunction;
						public setDrillToCluster(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setHide(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getHide(): com.highsoft.highcharts.core.HIFunction;
						public setUnselect(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getParams(): java.util.Map<string, any>;
						public setDrop(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getCheckboxClick(): com.highsoft.highcharts.core.HIFunction;
						public getRedraw(): com.highsoft.highcharts.core.HIFunction;
						public getDrillToCluster(): com.highsoft.highcharts.core.HIFunction;
						public getMouseout(): com.highsoft.highcharts.core.HIFunction;
						public getDrilldown(): com.highsoft.highcharts.core.HIFunction;
						public setSetRootNode(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setLegendItemClick(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getParams(): java.util.HashMap<string, any>;
						public getSetExtremes(): com.highsoft.highcharts.core.HIFunction;
						public setMouseout(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setAfterAnimate(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getUpdate(): com.highsoft.highcharts.core.HIFunction;
						public setMousemove(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getMousemove(): com.highsoft.highcharts.core.HIFunction;
						public setSetExtremes(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getSelection(): com.highsoft.highcharts.core.HIFunction;
						public setDrag(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setAfterPrint(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getUnselect(): com.highsoft.highcharts.core.HIFunction;
						public setDragStart(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setSelect(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getAfterUpdate(): com.highsoft.highcharts.core.HIFunction;
						public getRender(): com.highsoft.highcharts.core.HIFunction;
						public setAddSeries(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setSelectButton(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setClosePopup(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getMouseOver(): com.highsoft.highcharts.core.HIFunction;
						public setAdd(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setDrilldown(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getSetRootNode(): com.highsoft.highcharts.core.HIFunction;
						public setShow(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getLoad(): com.highsoft.highcharts.core.HIFunction;
						public getAddSeries(): com.highsoft.highcharts.core.HIFunction;
						public setBeforePrint(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getAfterPrint(): com.highsoft.highcharts.core.HIFunction;
						public getBeforePrint(): com.highsoft.highcharts.core.HIFunction;
						public getDeselectButton(): com.highsoft.highcharts.core.HIFunction;
						public getAfterSetExtremes(): com.highsoft.highcharts.core.HIFunction;
						public setDrillupall(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getPointBreak(): com.highsoft.highcharts.core.HIFunction;
						public setPointInBreak(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getAfterAnimate(): com.highsoft.highcharts.core.HIFunction;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIExportData extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIExportData>;
						public getCategoryHeader(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setCategoryHeader(param0: string): void;
						public setCategoryDatetimeHeader(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
						public getCategoryDatetimeHeader(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIExporting extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIExporting>;
						public setTableCaption(param0: any): void;
						public setLibURL(param0: string): void;
						public setMenuButtonLabel(param0: string): void;
						public setUseRowspanHeaders(param0: java.lang.Boolean): void;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public getAllowHTML(): java.lang.Boolean;
						public getEnabled(): java.lang.Boolean;
						public setScale(param0: java.lang.Number): void;
						public setType(param0: string): void;
						public getFormAttributes(): com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes;
						public getLibURL(): string;
						public setPrintMaxWidth(param0: java.lang.Number): void;
						public setChartMenuLabel(param0: string): void;
						public setFilename(param0: string): void;
						public getUseMultiLevelHeaders(): java.lang.Boolean;
						public getCsv(): com.highsoft.highcharts.common.hichartsclasses.HICsv;
						public constructor();
						public setWidth(param0: java.lang.Number): void;
						public setButtons(param0: com.highsoft.highcharts.common.hichartsclasses.HIButtons): void;
						public getUrl(): string;
						public setUrl(param0: string): void;
						public getScale(): java.lang.Number;
						public getMenuItemDefinitions(): any;
						public setAllowHTML(param0: java.lang.Boolean): void;
						public getSourceWidth(): java.lang.Number;
						public getFallbackToExportServer(): java.lang.Boolean;
						public getButtons(): com.highsoft.highcharts.common.hichartsclasses.HIButtons;
						public getPrintMaxWidth(): java.lang.Number;
						public getChartMenuLabel(): string;
						public getParams(): java.util.Map<string, any>;
						public getType(): string;
						public getError(): com.highsoft.highcharts.core.HIFunction;
						public setExportRegionLabel(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
						public getTableCaption(): any;
						public setCsv(param0: com.highsoft.highcharts.common.hichartsclasses.HICsv): void;
						public setChartOptions(param0: java.util.HashMap<any, any>): void;
						public getExportRegionLabel(): string;
						public getChartOptions(): java.util.HashMap<any, any>;
						public setShowTable(param0: java.lang.Boolean): void;
						public getSourceHeight(): java.lang.Number;
						public setMenuItemDefinitions(param0: any): void;
						public setSourceWidth(param0: java.lang.Number): void;
						public getShowTable(): java.lang.Boolean;
						public setFallbackToExportServer(param0: java.lang.Boolean): void;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public setFormAttributes(param0: com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes): void;
						public getUseRowspanHeaders(): java.lang.Boolean;
						public getMenuButtonLabel(): string;
						public setError(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setUseMultiLevelHeaders(param0: java.lang.Boolean): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public getWidth(): java.lang.Number;
						public setSourceHeight(param0: java.lang.Number): void;
						public getFilename(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIFilter extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIFilter>;
						public setOperator(param0: string): void;
						public constructor();
						public setProperty(param0: string): void;
						public getParams(): java.util.Map<string, any>;
						public getProperty(): string;
						public setValue(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getOperator(): string;
						public getValue(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIFocusBorder extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIFocusBorder>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public constructor();
						public getHideBrowserFocusOutline(): java.lang.Boolean;
						public getParams(): java.util.Map<string, any>;
						public setEnabled(param0: java.lang.Boolean): void;
						public setMargin(param0: java.lang.Number): void;
						public getEnabled(): java.lang.Boolean;
						public setHideBrowserFocusOutline(param0: java.lang.Boolean): void;
						public getParams(): java.util.HashMap<string, any>;
						public getMargin(): java.lang.Number;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIFrame extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIFrame>;
						public getTop(): com.highsoft.highcharts.common.hichartsclasses.HITop;
						public getLeft(): com.highsoft.highcharts.common.hichartsclasses.HILeft;
						public constructor();
						public setVisible(param0: string): void;
						public getParams(): java.util.Map<string, any>;
						public setTop(param0: com.highsoft.highcharts.common.hichartsclasses.HITop): void;
						public getFront(): com.highsoft.highcharts.common.hichartsclasses.HIFront;
						public setRight(param0: com.highsoft.highcharts.common.hichartsclasses.HIRight): void;
						public setSize(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getVisible(): string;
						public setBottom(param0: com.highsoft.highcharts.common.hichartsclasses.HIBottom): void;
						public setBack(param0: com.highsoft.highcharts.common.hichartsclasses.HIBack): void;
						public getRight(): com.highsoft.highcharts.common.hichartsclasses.HIRight;
						public getSize(): java.lang.Number;
						public setFront(param0: com.highsoft.highcharts.common.hichartsclasses.HIFront): void;
						public getBack(): com.highsoft.highcharts.common.hichartsclasses.HIBack;
						public setLeft(param0: com.highsoft.highcharts.common.hichartsclasses.HILeft): void;
						public getBottom(): com.highsoft.highcharts.common.hichartsclasses.HIBottom;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIFront extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIFront>;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public getVisible(): any;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVisible(param0: any): void;
						public getSize(): java.lang.Number;
						public setSize(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIFunnel extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIFunnel>;
						public getParams(): java.util.Map<string, any>;
						public setSlicedOffset(param0: java.lang.Number): void;
						public setEndAngle(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setNeckHeight(param0: any): void;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getStartAngle(): java.lang.Number;
						public getColors(): java.util.ArrayList<string>;
						public setHeight(param0: any): void;
						public getMinSize(): any;
						public getEndAngle(): java.lang.Number;
						public setCenter(param0: java.util.ArrayList<any>): void;
						public setReversed(param0: java.lang.Boolean): void;
						public getIgnoreHiddenPoint(): java.lang.Boolean;
						public constructor();
						public setWidth(param0: any): void;
						public setNeckWidth(param0: any): void;
						public setStartAngle(param0: java.lang.Number): void;
						public getSlicedOffset(): java.lang.Number;
						public getDepth(): java.lang.Number;
						public getWidth(): any;
						public setBorderWidth(param0: java.lang.Number): void;
						public getCenter(): java.util.ArrayList<any>;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public getReversed(): java.lang.Boolean;
						public getHeight(): any;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setMinSize(param0: any): void;
						public getNeckHeight(): any;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setIgnoreHiddenPoint(param0: java.lang.Boolean): void;
						public getNeckWidth(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIFunnel3d extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIFunnel3d>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getEdgeWidth(): java.lang.Number;
						public setGroupZPadding(param0: java.lang.Number): void;
						public getGradientForSides(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public setReversed(param0: java.lang.Boolean): void;
						public constructor();
						public setWidth(param0: any): void;
						public getDepth(): java.lang.Number;
						public getWidth(): any;
						public setBorderWidth(param0: java.lang.Number): void;
						public getHeight(): any;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public setGradientForSides(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public setNeckHeight(param0: any): void;
						public getColors(): java.util.ArrayList<string>;
						public getMaxPointWidth(): java.lang.Number;
						public setHeight(param0: any): void;
						public getGroupZPadding(): java.lang.Number;
						public setNeckWidth(param0: any): void;
						public setPointRange(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public getReversed(): java.lang.Boolean;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public getNeckHeight(): any;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
						public getNeckWidth(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIGauge extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIGauge>;
						public setDial(param0: com.highsoft.highcharts.common.hichartsclasses.HIDial): void;
						public constructor();
						public getDial(): com.highsoft.highcharts.common.hichartsclasses.HIDial;
						public getOvershoot(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public setPivot(param0: com.highsoft.highcharts.common.hichartsclasses.HIPivot): void;
						public setOvershoot(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setWrap(param0: java.lang.Boolean): void;
						public getPivot(): com.highsoft.highcharts.common.hichartsclasses.HIPivot;
						public getWrap(): java.lang.Boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIGlobal extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIGlobal>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getVMLRadialGradientURL(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setVMLRadialGradientURL(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIGradientColorObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIGradientColorObject>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setRadialGradient(param0: com.highsoft.highcharts.common.hichartsclasses.HIRadialGradientColorObject): void;
						public setStops(param0: java.util.ArrayList<any>): void;
						public getLinearGradient(): com.highsoft.highcharts.common.hichartsclasses.HILinearGradientColorObject;
						public getRadialGradient(): com.highsoft.highcharts.common.hichartsclasses.HIRadialGradientColorObject;
						public getParams(): java.util.HashMap<string, any>;
						public setLinearGradient(param0: com.highsoft.highcharts.common.hichartsclasses.HILinearGradientColorObject): void;
						public getStops(): java.util.ArrayList<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIGradientColorStopObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIGradientColorStopObject>;
						public setZero(param0: java.lang.Number): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getOne(): string;
						public getZero(): java.lang.Number;
						public setOne(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIGuideBox extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIGuideBox>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getDefault(): com.highsoft.highcharts.common.hichartsclasses.HIDefault;
						public setDefault(param0: com.highsoft.highcharts.common.hichartsclasses.HIDefault): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIHalo extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIHalo>;
						public setOpacity(param0: java.lang.Number): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getAttributes(): com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes;
						public setEnabled(param0: java.lang.Boolean): void;
						public getSize(): java.lang.Number;
						public setAttributes(param0: com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes): void;
						public getEnabled(): java.lang.Boolean;
						public setSize(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getOpacity(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIHeatmap extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIHeatmap>;
						public setColsize(param0: java.lang.Number): void;
						public constructor();
						public setNullColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setRowsize(param0: java.lang.Number): void;
						public setPointPadding(param0: java.lang.Number): void;
						public getRowsize(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public getPointPadding(): java.lang.Number;
						public getColsize(): java.lang.Number;
						public getNullColor(): com.highsoft.highcharts.common.HIColor;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIHistogram extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIHistogram>;
						public getBinWidth(): java.lang.Number;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getEdgeWidth(): java.lang.Number;
						public setGroupZPadding(param0: java.lang.Number): void;
						public setBinWidth(param0: java.lang.Number): void;
						public getBinsNumber(): any;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public setBinsNumber(param0: any): void;
						public getBaseSeries(): any;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxPointWidth(): java.lang.Number;
						public getGroupZPadding(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setPointRange(param0: java.lang.Number): void;
						public getDepth(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public getGrouping(): java.lang.Boolean;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getPointPadding(): java.lang.Number;
						public setBaseSeries(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIHour extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIHour>;
						public getRange(): java.lang.Boolean;
						public getMain(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setRange(param0: java.lang.Boolean): void;
						public setMain(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIHover extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIHover>;
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getParams(): java.util.Map<string, any>;
						public setHeightPlus(param0: java.lang.Number): void;
						public getHeight(): java.lang.Number;
						public setConnectorWidthPlus(param0: java.lang.Number): void;
						public getRadiusPlus(): java.lang.Number;
						public getEnabled(): java.lang.Boolean;
						public getLineWidth(): java.lang.Number;
						public setLineWidth(param0: java.lang.Number): void;
						public setWidthPlus(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setLineWidthPlus(param0: java.lang.Number): void;
						public setLinkOpacity(param0: java.lang.Number): void;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setOpacity(param0: java.lang.Number): void;
						public getConnectorWidthPlus(): java.lang.Number;
						public setBorderColor(param0: string): void;
						public setBrightness(param0: java.lang.Number): void;
						public setRadius(param0: java.lang.Number): void;
						public setHalo(param0: com.highsoft.highcharts.common.hichartsclasses.HIHalo): void;
						public getHeightPlus(): java.lang.Number;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public getHalo(): com.highsoft.highcharts.common.hichartsclasses.HIHalo;
						public constructor();
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setWidth(param0: java.lang.Number): void;
						public setShadow(param0: java.lang.Boolean): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setRadiusPlus(param0: java.lang.Number): void;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public getOpacity(): java.lang.Number;
						public getRadius(): java.lang.Number;
						public setHeight(param0: java.lang.Number): void;
						public getLineWidthPlus(): java.lang.Number;
						public getWidthPlus(): java.lang.Number;
						public setEnabled(param0: java.lang.Boolean): void;
						public getBrightness(): java.lang.Number;
						public getShadow(): java.lang.Boolean;
						public getWidth(): java.lang.Number;
						public getLinkOpacity(): java.lang.Number;
						public getBorderColor(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIInactive extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIInactive>;
						public setOpacity(param0: java.lang.Number): void;
						public constructor();
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getParams(): java.util.Map<string, any>;
						public setEnabled(param0: java.lang.Boolean): void;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public setLinkOpacity(param0: java.lang.Number): void;
						public getOpacity(): java.lang.Number;
						public getLinkOpacity(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIItem extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIItem>;
						public setInnerSize(param0: any): void;
						public getParams(): java.util.Map<string, any>;
						public getRows(): java.lang.Number;
						public getSize(): any;
						public setEndAngle(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getStartAngle(): java.lang.Number;
						public setRows(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getEndAngle(): java.lang.Number;
						public getMinSize(): any;
						public setCenter(param0: java.util.ArrayList<any>): void;
						public getIgnoreHiddenPoint(): java.lang.Boolean;
						public constructor();
						public setStartAngle(param0: java.lang.Number): void;
						public setSize(param0: any): void;
						public getCenter(): java.util.ArrayList<any>;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public getItemPadding(): java.lang.Number;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setLayout(param0: string): void;
						public setItemPadding(param0: java.lang.Number): void;
						public getInnerSize(): any;
						public getLayout(): string;
						public setMinSize(param0: any): void;
						public setIgnoreHiddenPoint(param0: java.lang.Boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIJitter extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIJitter>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getY(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public getX(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIKeyboardNavigation extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIKeyboardNavigation>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getOrder(): java.util.ArrayList<string>;
						public getEnabled(): java.lang.Boolean;
						public setOrder(param0: java.util.ArrayList<string>): void;
						public getParams(): java.util.HashMap<string, any>;
						public setWrapAround(param0: java.lang.Boolean): void;
						public setFocusBorder(param0: com.highsoft.highcharts.common.hichartsclasses.HIFocusBorder): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public getFocusBorder(): com.highsoft.highcharts.common.hichartsclasses.HIFocusBorder;
						public getSeriesNavigation(): com.highsoft.highcharts.common.hichartsclasses.HISeriesNavigation;
						public setSeriesNavigation(param0: com.highsoft.highcharts.common.hichartsclasses.HISeriesNavigation): void;
						public getWrapAround(): java.lang.Boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILabel extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILabel>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public setConnectorAllowed(param0: java.lang.Boolean): void;
						public getParams(): java.util.Map<string, any>;
						public getMinFontSize(): java.lang.Number;
						public setOnArea(param0: java.lang.Boolean): void;
						public setFormat(param0: string): void;
						public getMaxFontSize(): java.lang.Number;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public getText(): string;
						public getUseHTML(): java.lang.Boolean;
						public getTextAlign(): string;
						public setBoxesToAvoid(param0: java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HILabelIntersectBoxObject>): void;
						public getVerticalAlign(): string;
						public getFormat(): string;
						public setTextAlign(param0: string): void;
						public getRotation(): java.lang.Number;
						public setConnectorNeighbourDistance(param0: java.lang.Number): void;
						public getX(): java.lang.Number;
						public setUseHTML(param0: java.lang.Boolean): void;
						public constructor();
						public setMinFontSize(param0: java.lang.Number): void;
						public getConnectorAllowed(): java.lang.Boolean;
						public getBoxesToAvoid(): java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HILabelIntersectBoxObject>;
						public setMaxFontSize(param0: java.lang.Number): void;
						public setFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getAlign(): string;
						public setEnabled(param0: java.lang.Boolean): void;
						public setText(param0: string): void;
						public setAlign(param0: string): void;
						public getConnectorNeighbourDistance(): java.lang.Number;
						public getOnArea(): java.lang.Boolean;
						public getY(): java.lang.Number;
						public setRotation(param0: java.lang.Number): void;
						public setVerticalAlign(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILabelIntersectBoxObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILabelIntersectBoxObject>;
						public getTop(): java.lang.Number;
						public getLeft(): java.lang.Number;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getRight(): java.lang.Number;
						public setTop(param0: java.lang.Number): void;
						public setRight(param0: java.lang.Number): void;
						public setBottom(param0: java.lang.Number): void;
						public getBottom(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setLeft(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILabelOptions extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILabelOptions>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public getParams(): java.util.Map<string, any>;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public getAllowOverlap(): java.lang.Boolean;
						public setFormat(param0: string): void;
						public setBackgroundColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setDistance(param0: java.lang.Number): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public getBorderRadius(): java.lang.Number;
						public getText(): string;
						public getUseHTML(): java.lang.Boolean;
						public getCrop(): java.lang.Boolean;
						public getVerticalAlign(): string;
						public setBorderRadius(param0: java.lang.Number): void;
						public setShape(param0: string): void;
						public setAllowOverlap(param0: java.lang.Boolean): void;
						public getFormat(): string;
						public getX(): java.lang.Number;
						public setUseHTML(param0: java.lang.Boolean): void;
						public constructor();
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public getBackgroundColor(): com.highsoft.highcharts.common.HIColor;
						public setShadow(param0: java.lang.Boolean): void;
						public setOverflow(param0: string): void;
						public getPadding(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public setCrop(param0: java.lang.Boolean): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setClassName(param0: string): void;
						public setFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getShape(): string;
						public getAlign(): string;
						public setText(param0: string): void;
						public getShadow(): java.lang.Boolean;
						public setPadding(param0: java.lang.Number): void;
						public setAlign(param0: string): void;
						public getOverflow(): string;
						public getBorderWidth(): java.lang.Number;
						public getY(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getDistance(): java.lang.Number;
						public setVerticalAlign(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILabels extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILabels>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public setAutoRotation(param0: java.util.ArrayList<java.lang.Number>): void;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public setFormat(param0: string): void;
						public getEnabled(): java.lang.Boolean;
						public setPosition3d(param0: string): void;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public setAutoRotationLimit(param0: java.lang.Number): void;
						public getBorderRadius(): java.lang.Number;
						public getCrop(): java.lang.Boolean;
						public setDistance(param0: any): void;
						public getAutoRotation(): java.util.ArrayList<java.lang.Number>;
						public getZIndex(): java.lang.Number;
						public setPoint(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint): void;
						public setBorderRadius(param0: java.lang.Number): void;
						public setAllowOverlap(param0: java.lang.Boolean): void;
						public getRotation(): java.lang.Number;
						public setStaggerLines(param0: java.lang.Number): void;
						public getX(): java.lang.Number;
						public constructor();
						public getBackgroundColor(): com.highsoft.highcharts.common.HIColor;
						public setOverflow(param0: string): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public setCrop(param0: java.lang.Boolean): void;
						public getFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getShape(): string;
						public setReserveSpace(param0: java.lang.Boolean): void;
						public setAlign(param0: string): void;
						public getShadow(): java.lang.Boolean;
						public getReserveSpace(): java.lang.Boolean;
						public getBorderWidth(): java.lang.Number;
						public getY(): java.lang.Number;
						public getStaggerLines(): java.lang.Number;
						public setRotation(param0: java.lang.Number): void;
						public setSkew3d(param0: java.lang.Boolean): void;
						public getParams(): java.util.Map<string, any>;
						public getAllowOverlap(): java.lang.Boolean;
						public setBackgroundColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getUseHTML(): java.lang.Boolean;
						public getStep(): java.lang.Number;
						public getText(): string;
						public getVerticalAlign(): string;
						public getSkew3d(): java.lang.Boolean;
						public getPosition3d(): string;
						public setShape(param0: string): void;
						public getFormat(): string;
						public setUseHTML(param0: java.lang.Boolean): void;
						public setZIndex(param0: java.lang.Number): void;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public setShadow(param0: java.lang.Boolean): void;
						public getPadding(): java.lang.Number;
						public getDistance(): any;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setClassName(param0: string): void;
						public setFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getAlign(): string;
						public setStep(param0: java.lang.Number): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public setPadding(param0: java.lang.Number): void;
						public setText(param0: string): void;
						public getAutoRotationLimit(): java.lang.Number;
						public getOverflow(): string;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getPoint(): com.highsoft.highcharts.common.hichartsclasses.HIPoint;
						public setVerticalAlign(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILang extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILang>;
						public getExitFullscreen(): string;
						public setNumericSymbolMagnitude(param0: java.lang.Number): void;
						public setResetZoomTitle(param0: string): void;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public setViewData(param0: string): void;
						public setDownloadPNG(param0: string): void;
						public setDownloadCSV(param0: string): void;
						public getResetZoom(): string;
						public setContextButtonTitle(param0: string): void;
						public getViewFullscreen(): string;
						public setDrillUpText(param0: string): void;
						public setResetZoom(param0: string): void;
						public setShortWeekdays(param0: java.util.ArrayList<string>): void;
						public setLoading(param0: string): void;
						public getInvalidDate(): string;
						public getMonths(): java.util.ArrayList<string>;
						public getResetZoomTitle(): string;
						public getDownloadPNG(): string;
						public getDownloadJPEG(): string;
						public constructor();
						public getDrillUpText(): string;
						public setMonths(param0: java.util.ArrayList<string>): void;
						public getWeekdays(): java.util.ArrayList<string>;
						public setDownloadXLS(param0: string): void;
						public setNumericSymbols(param0: java.util.ArrayList<string>): void;
						public getPrintChart(): string;
						public setDecimalPoint(param0: string): void;
						public getDownloadXLS(): string;
						public setNavigation(param0: com.highsoft.highcharts.common.hichartsclasses.HINavigation): void;
						public getDownloadSVG(): string;
						public getThousandsSep(): string;
						public getNumericSymbolMagnitude(): java.lang.Number;
						public getNavigation(): com.highsoft.highcharts.common.hichartsclasses.HINavigation;
						public setDownloadSVG(param0: string): void;
						public getViewData(): string;
						public setNoData(param0: string): void;
						public getParams(): java.util.Map<string, any>;
						public getShortWeekdays(): java.util.ArrayList<string>;
						public setWeekdays(param0: java.util.ArrayList<string>): void;
						public setInvalidDate(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
						public setExitFullscreen(param0: string): void;
						public getShortMonths(): java.util.ArrayList<string>;
						public setPrintChart(param0: string): void;
						public getDownloadPDF(): string;
						public getDownloadCSV(): string;
						public setDownloadJPEG(param0: string): void;
						public getNumericSymbols(): java.util.ArrayList<string>;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public getNoData(): string;
						public getDecimalPoint(): string;
						public setExportData(param0: com.highsoft.highcharts.common.hichartsclasses.HIExportData): void;
						public setViewFullscreen(param0: string): void;
						public getLoading(): string;
						public setShortMonths(param0: java.util.ArrayList<string>): void;
						public setThousandsSep(param0: string): void;
						public getContextButtonTitle(): string;
						public getExportData(): com.highsoft.highcharts.common.hichartsclasses.HIExportData;
						public setDownloadPDF(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILayoutAlgorithm extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILayoutAlgorithm>;
						public setRepulsiveForce(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setType(param0: string): void;
						public setSeriesInteraction(param0: java.lang.Boolean): void;
						public getMaxSpeed(): java.lang.Number;
						public getInitialPositions(): string;
						public setDistance(param0: any): void;
						public getLinkLength(): java.lang.Number;
						public getIterations(): java.lang.Number;
						public getBubblePadding(): java.lang.Number;
						public setSplitSeries(param0: string): void;
						public setMaxIterations(param0: java.lang.Number): void;
						public constructor();
						public getGridSize(): any;
						public getInitialPositionRadius(): java.lang.Number;
						public getFriction(): java.lang.Number;
						public getMaxIterations(): java.lang.Number;
						public setKmeansThreshold(param0: java.lang.Number): void;
						public getSplitSeries(): string;
						public getDragBetweenSeries(): java.lang.Boolean;
						public getRepulsiveForce(): com.highsoft.highcharts.core.HIFunction;
						public getGravitationalConstant(): java.lang.Number;
						public setFriction(param0: java.lang.Number): void;
						public setBubblePadding(param0: java.lang.Number): void;
						public setParentNodeOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HIParentNodeOptions): void;
						public getTheta(): java.lang.Number;
						public setParentNodeLimit(param0: java.lang.Boolean): void;
						public setEnableSimulation(param0: java.lang.Boolean): void;
						public setGridSize(param0: any): void;
						public getParams(): java.util.Map<string, any>;
						public setGravitationalConstant(param0: java.lang.Number): void;
						public setDragBetweenSeries(param0: java.lang.Boolean): void;
						public getType(): string;
						public setLinkLength(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getParentNodeLimit(): java.lang.Boolean;
						public setTheta(param0: java.lang.Number): void;
						public getAttractiveForce(): com.highsoft.highcharts.core.HIFunction;
						public setIterations(param0: java.lang.Number): void;
						public setInitialPositionRadius(param0: java.lang.Number): void;
						public getDistance(): any;
						public setAttractiveForce(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setMaxSpeed(param0: java.lang.Number): void;
						public getEnableSimulation(): java.lang.Boolean;
						public setIntegration(param0: string): void;
						public setInitialPositions(param0: string): void;
						public getKmeansThreshold(): java.lang.Number;
						public setApproximation(param0: string): void;
						public getIntegration(): string;
						public getApproximation(): string;
						public getParentNodeOptions(): com.highsoft.highcharts.common.hichartsclasses.HIParentNodeOptions;
						public getSeriesInteraction(): java.lang.Boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILeft extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILeft>;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public getVisible(): any;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVisible(param0: any): void;
						public getSize(): java.lang.Number;
						public setSize(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILegend extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILegend>;
						public getSquareSymbol(): java.lang.Boolean;
						public getLegendItem(): string;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public setSquareSymbol(param0: java.lang.Boolean): void;
						public getEnabled(): java.lang.Boolean;
						public setAlignColumns(param0: java.lang.Boolean): void;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public getBorderRadius(): java.lang.Number;
						public getSymbolRadius(): java.lang.Number;
						public getItemHoverStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public setBorderRadius(param0: java.lang.Number): void;
						public setLabelFormat(param0: string): void;
						public setMaxHeight(param0: java.lang.Number): void;
						public getItemStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public setFloating(param0: java.lang.Boolean): void;
						public getX(): java.lang.Number;
						public getTitle(): com.highsoft.highcharts.common.hichartsclasses.HITitle;
						public getItemMarginBottom(): java.lang.Number;
						public setReversed(param0: java.lang.Boolean): void;
						public constructor();
						public setWidth(param0: any): void;
						public getFloating(): java.lang.Boolean;
						public getBackgroundColor(): com.highsoft.highcharts.common.HIColor;
						public setBubbleLegend(param0: com.highsoft.highcharts.common.hichartsclasses.HIBubbleLegend): void;
						public getWidth(): any;
						public setRtl(param0: java.lang.Boolean): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public getMargin(): java.lang.Number;
						public getAlignColumns(): java.lang.Boolean;
						public setNavigation(param0: com.highsoft.highcharts.common.hichartsclasses.HINavigation): void;
						public getLabelFormat(): string;
						public getShadow(): java.lang.Boolean;
						public setAlign(param0: string): void;
						public getBorderWidth(): java.lang.Number;
						public getY(): java.lang.Number;
						public getNavigation(): com.highsoft.highcharts.common.hichartsclasses.HINavigation;
						public getSymbolWidth(): java.lang.Number;
						public setItemMarginBottom(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public setTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle): void;
						public getItemWidth(): java.lang.Number;
						public setBackgroundColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setLabelFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getLegendLabel(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getUseHTML(): java.lang.Boolean;
						public setLegendLabel(param0: string): void;
						public getRtl(): java.lang.Boolean;
						public getVerticalAlign(): string;
						public setItemStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public getSymbolPadding(): java.lang.Number;
						public getItemDistance(): java.lang.Number;
						public setLegendItem(param0: string): void;
						public setMargin(param0: java.lang.Number): void;
						public getLabelFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getItemCheckboxStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public setSymbolRadius(param0: java.lang.Number): void;
						public setUseHTML(param0: java.lang.Boolean): void;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public setShadow(param0: java.lang.Boolean): void;
						public getMaxHeight(): java.lang.Number;
						public getPadding(): java.lang.Number;
						public setSymbolWidth(param0: java.lang.Number): void;
						public getItemMarginTop(): java.lang.Number;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setSymbolHeight(param0: java.lang.Number): void;
						public getReversed(): java.lang.Boolean;
						public setSymbolPadding(param0: java.lang.Number): void;
						public setItemDistance(param0: java.lang.Number): void;
						public getAlign(): string;
						public getItemHiddenStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getSymbolHeight(): java.lang.Number;
						public setLayout(param0: string): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public setItemHiddenStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public getLayout(): string;
						public setPadding(param0: java.lang.Number): void;
						public setItemCheckboxStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public setItemHoverStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public setItemMarginTop(param0: java.lang.Number): void;
						public getBubbleLegend(): com.highsoft.highcharts.common.hichartsclasses.HIBubbleLegend;
						public setItemWidth(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVerticalAlign(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILevelSize extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILevelSize>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setUnit(param0: string): void;
						public getUnit(): string;
						public setValue(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getValue(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILevels extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILevels>;
						public getParams(): java.util.Map<string, any>;
						public setStates(param0: com.highsoft.highcharts.common.hichartsclasses.HIStates): void;
						public getLevel(): java.lang.Number;
						public getStates(): com.highsoft.highcharts.common.hichartsclasses.HIStates;
						public getRotationMode(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public setLinkOpacity(param0: java.lang.Number): void;
						public getLayoutAlgorithm(): string;
						public setLevelSize(param0: any): void;
						public getBorderDashStyle(): string;
						public getColorVariation(): com.highsoft.highcharts.common.hichartsclasses.HIColorVariation;
						public setDataLabels(param0: com.highsoft.highcharts.common.hichartsclasses.HIDataLabels): void;
						public setRotationMode(param0: string): void;
						public getLevelSize(): any;
						public getRotation(): java.lang.Number;
						public setLayoutStartingDirection(param0: string): void;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setColorVariation(param0: com.highsoft.highcharts.common.hichartsclasses.HIColorVariation): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setBorderDashStyle(param0: string): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getLayoutStartingDirection(): string;
						public setLevel(param0: java.lang.Number): void;
						public getDataLabels(): com.highsoft.highcharts.common.hichartsclasses.HIDataLabels;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setRotation(param0: java.lang.Number): void;
						public getLinkOpacity(): java.lang.Number;
						public setLayoutAlgorithm(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILine extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILine>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILinearGradientColorObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILinearGradientColorObject>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getY1(): java.lang.Number;
						public getY2(): java.lang.Number;
						public getX2(): java.lang.Number;
						public setY1(param0: java.lang.Number): void;
						public setY2(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getX1(): java.lang.Number;
						public setX2(param0: java.lang.Number): void;
						public setX1(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILink extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILink>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setWidth(param0: java.lang.Number): void;
						public setDashStyle(param0: string): void;
						public getDashStyle(): string;
						public getColor(): string;
						public getWidth(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setColor(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILinkTextPath extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILinkTextPath>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setEnabled(param0: java.lang.Boolean): void;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILoading extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILoading>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public getShowDuration(): java.lang.Number;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setShowDuration(param0: java.lang.Number): void;
						public setHideDuration(param0: java.lang.Number): void;
						public getLabelStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public setLabelStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public getParams(): java.util.HashMap<string, any>;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getHideDuration(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HILollipop extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HILollipop>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setGroupPadding(param0: java.lang.Number): void;
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setPointRange(param0: java.lang.Number): void;
						public getConnectorWidth(): java.lang.Number;
						public setNegativeFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.HashMap<string, any>;
						public getPointRange(): java.lang.Number;
						public setConnectorWidth(param0: java.lang.Number): void;
						public setConnectorColor(param0: string): void;
						public getConnectorColor(): string;
						public getGroupPadding(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public getNegativeFillColor(): com.highsoft.highcharts.common.HIColor;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIMarker extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIMarker>;
						public setLineColor(param0: string): void;
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getParams(): java.util.Map<string, any>;
						public getHeight(): java.lang.Number;
						public setStates(param0: com.highsoft.highcharts.common.hichartsclasses.HIStates): void;
						public getStates(): com.highsoft.highcharts.common.hichartsclasses.HIStates;
						public getLineWidth(): java.lang.Number;
						public getEnabled(): java.lang.Boolean;
						public setLineWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getEnabledThreshold(): java.lang.Number;
						public setFillOpacity(param0: java.lang.Number): void;
						public getLineColor(): string;
						public setRadius(param0: java.lang.Number): void;
						public getFillOpacity(): java.lang.Number;
						public setEnabledThreshold(param0: java.lang.Number): void;
						public constructor();
						public setSymbol(param0: string): void;
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setWidth(param0: java.lang.Number): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public getRadius(): java.lang.Number;
						public setHeight(param0: java.lang.Number): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public getWidth(): java.lang.Number;
						public getSymbol(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIMillisecond extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIMillisecond>;
						public getRange(): java.lang.Boolean;
						public getMain(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setRange(param0: java.lang.Boolean): void;
						public setMain(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIMinute extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIMinute>;
						public getRange(): java.lang.Boolean;
						public getMain(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setRange(param0: java.lang.Boolean): void;
						public setMain(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIMonth extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIMonth>;
						public getMain(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setMain(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HINavigation extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HINavigation>;
						public getBindingsClassName(): string;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getParams(): java.util.Map<string, any>;
						public getArrowSize(): java.lang.Number;
						public getEnabled(): java.lang.Boolean;
						public getMenuStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getParams(): java.util.HashMap<string, any>;
						public getButtonOptions(): com.highsoft.highcharts.common.hichartsclasses.HIButtonOptions;
						public setInactiveColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setActiveColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getMenuItemHoverStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getPopup(): com.highsoft.highcharts.common.hichartsclasses.HIPopup;
						public getInactiveColor(): com.highsoft.highcharts.common.HIColor;
						public setArrowSize(param0: java.lang.Number): void;
						public setIconsURL(param0: string): void;
						public constructor();
						public getIconsURL(): string;
						public setPopup(param0: com.highsoft.highcharts.common.hichartsclasses.HIPopup): void;
						public getAnnotationsOptions(): com.highsoft.highcharts.common.hichartsclasses.HIAnnotationsOptions;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject;
						public setMenuStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public setMenuItemStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getActiveColor(): com.highsoft.highcharts.common.HIColor;
						public setEnabled(param0: java.lang.Boolean): void;
						public getBindings(): com.highsoft.highcharts.common.hichartsclasses.HIBindings;
						public getMenuItemStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public setMenuItemHoverStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public setBindingsClassName(param0: string): void;
						public setButtonOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HIButtonOptions): void;
						public setBindings(param0: com.highsoft.highcharts.common.hichartsclasses.HIBindings): void;
						public setAnnotationsOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnnotationsOptions): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HINavigationBindingsOptionsObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HINavigationBindingsOptionsObject>;
						public getSteps(): java.util.ArrayList<com.highsoft.highcharts.core.HIFunction>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setSteps(param0: java.util.ArrayList<com.highsoft.highcharts.core.HIFunction>): void;
						public setInit(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setClassName(param0: string): void;
						public getClassName(): string;
						public getEnd(): com.highsoft.highcharts.core.HIFunction;
						public getStart(): com.highsoft.highcharts.core.HIFunction;
						public getParams(): java.util.HashMap<string, any>;
						public setStart(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setEnd(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getInit(): com.highsoft.highcharts.core.HIFunction;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HINetworkgraph extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HINetworkgraph>;
						public setNodes(param0: java.util.ArrayList<any>): void;
						public getNodes(): java.util.ArrayList<any>;
						public constructor();
						public setLayoutAlgorithm(param0: com.highsoft.highcharts.common.hichartsclasses.HILayoutAlgorithm): void;
						public getLink(): com.highsoft.highcharts.common.hichartsclasses.HILink;
						public getParams(): java.util.Map<string, any>;
						public getDraggable(): java.lang.Boolean;
						public setDraggable(param0: java.lang.Boolean): void;
						public setLink(param0: com.highsoft.highcharts.common.hichartsclasses.HILink): void;
						public getLayoutAlgorithm(): com.highsoft.highcharts.common.hichartsclasses.HILayoutAlgorithm;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HINoData extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HINoData>;
						public setUseHTML(param0: java.lang.Boolean): void;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getAttr(): com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes;
						public getPosition(): com.highsoft.highcharts.common.hichartsclasses.HIAlignObject;
						public setAttr(param0: com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes): void;
						public getParams(): java.util.HashMap<string, any>;
						public getUseHTML(): java.lang.Boolean;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public setPosition(param0: com.highsoft.highcharts.common.hichartsclasses.HIAlignObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HINodes extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HINodes>;
						public setDataLabels(param0: java.util.ArrayList<any>): void;
						public getDefinition(): string;
						public getParams(): java.util.Map<string, any>;
						public getOffset(): any;
						public getDataLabels(): java.util.ArrayList<any>;
						public setId(param0: string): void;
						public setColorIndex(param0: java.lang.Number): void;
						public getLevel(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public getName(): string;
						public setOffset(param0: any): void;
						public getId(): string;
						public setColumn(param0: java.lang.Number): void;
						public setImage(param0: string): void;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setName(param0: string): void;
						public getMass(): java.lang.Number;
						public getImage(): string;
						public getTitle(): string;
						public setTitle(param0: string): void;
						public setLayout(param0: string): void;
						public getColorIndex(): java.lang.Number;
						public getLayout(): string;
						public setLevel(param0: java.lang.Number): void;
						public getColumn(): java.lang.Number;
						public setDefinition(param0: string): void;
						public setMass(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HINormal extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HINormal>;
						public constructor();
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getParams(): java.util.Map<string, any>;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIOptions extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIOptions>;
						public additionalOptions: java.util.HashMap<string, any>;
						public getCredits(): com.highsoft.highcharts.common.hichartsclasses.HICredits;
						public setSubtitle(param0: com.highsoft.highcharts.common.hichartsclasses.HISubtitle): void;
						public getTooltip(): com.highsoft.highcharts.common.hichartsclasses.HITooltip;
						public setSeries(param0: java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HISeries>): void;
						public getSubtitle(): com.highsoft.highcharts.common.hichartsclasses.HISubtitle;
						public getDrilldown(): com.highsoft.highcharts.common.hichartsclasses.HIDrilldown;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public setExporting(param0: com.highsoft.highcharts.common.hichartsclasses.HIExporting): void;
						public setCaption(param0: com.highsoft.highcharts.common.hichartsclasses.HICaption): void;
						public getColorAxis(): java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIColorAxis>;
						public setXAxis(param0: java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIXAxis>): void;
						public getChart(): com.highsoft.highcharts.common.hichartsclasses.HIChart;
						public getCaption(): com.highsoft.highcharts.common.hichartsclasses.HICaption;
						public setResponsive(param0: com.highsoft.highcharts.common.hichartsclasses.HIResponsive): void;
						public getTitle(): com.highsoft.highcharts.common.hichartsclasses.HITitle;
						public constructor();
						public setDrilldown(param0: com.highsoft.highcharts.common.hichartsclasses.HIDrilldown): void;
						public setNoData(param0: com.highsoft.highcharts.common.hichartsclasses.HINoData): void;
						public setTooltip(param0: com.highsoft.highcharts.common.hichartsclasses.HITooltip): void;
						public setData(param0: com.highsoft.highcharts.common.hichartsclasses.HIData): void;
						public setYAxis(param0: java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIYAxis>): void;
						public getYAxis(): java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIYAxis>;
						public setCredits(param0: com.highsoft.highcharts.common.hichartsclasses.HICredits): void;
						public getPane(): com.highsoft.highcharts.common.hichartsclasses.HIPane;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setNavigation(param0: com.highsoft.highcharts.common.hichartsclasses.HINavigation): void;
						public getResponsive(): com.highsoft.highcharts.common.hichartsclasses.HIResponsive;
						public getLegend(): com.highsoft.highcharts.common.hichartsclasses.HILegend;
						public getNavigation(): com.highsoft.highcharts.common.hichartsclasses.HINavigation;
						public setAnnotations(param0: java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIAnnotations>): void;
						public getXAxis(): java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIXAxis>;
						public setTime(param0: com.highsoft.highcharts.common.hichartsclasses.HITime): void;
						public getParams(): java.util.Map<string, any>;
						public setTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle): void;
						public getDefs(): com.highsoft.highcharts.common.hichartsclasses.HIDefs;
						public setLegend(param0: com.highsoft.highcharts.common.hichartsclasses.HILegend): void;
						public getParams(): java.util.HashMap<string, any>;
						public getLoading(): com.highsoft.highcharts.common.hichartsclasses.HILoading;
						public setPane(param0: com.highsoft.highcharts.common.hichartsclasses.HIPane): void;
						public getNoData(): com.highsoft.highcharts.common.hichartsclasses.HINoData;
						public getColors(): java.util.ArrayList<string>;
						public getData(): com.highsoft.highcharts.common.hichartsclasses.HIData;
						public setLoading(param0: com.highsoft.highcharts.common.hichartsclasses.HILoading): void;
						public setColorAxis(param0: java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIColorAxis>): void;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public getZAxis(): java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIZAxis>;
						public getSeries(): java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HISeries>;
						public getBoost(): com.highsoft.highcharts.common.hichartsclasses.HIBoost;
						public getPlotOptions(): com.highsoft.highcharts.common.hichartsclasses.HIPlotOptions;
						public setChart(param0: com.highsoft.highcharts.common.hichartsclasses.HIChart): void;
						public setBoost(param0: com.highsoft.highcharts.common.hichartsclasses.HIBoost): void;
						public setPlotOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HIPlotOptions): void;
						public getTime(): com.highsoft.highcharts.common.hichartsclasses.HITime;
						public setDefs(param0: com.highsoft.highcharts.common.hichartsclasses.HIDefs): void;
						public setZAxis(param0: java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIZAxis>): void;
						public getExporting(): com.highsoft.highcharts.common.hichartsclasses.HIExporting;
						public getAnnotations(): java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIAnnotations>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIOptions3d extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIOptions3d>;
						public setAxisLabelPosition(param0: string): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getDepth(): java.lang.Number;
						public setAlpha(param0: java.lang.Number): void;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public setFrame(param0: com.highsoft.highcharts.common.hichartsclasses.HIFrame): void;
						public getBeta(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public setFitToPlot(param0: java.lang.Boolean): void;
						public setEnabled(param0: java.lang.Boolean): void;
						public setBeta(param0: java.lang.Number): void;
						public setViewDistance(param0: java.lang.Number): void;
						public getViewDistance(): java.lang.Number;
						public getAlpha(): java.lang.Number;
						public getAxisLabelPosition(): string;
						public getFitToPlot(): java.lang.Boolean;
						public getFrame(): com.highsoft.highcharts.common.hichartsclasses.HIFrame;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIOrganization extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIOrganization>;
						public getNodes(): java.util.ArrayList<any>;
						public getParams(): java.util.Map<string, any>;
						public getLevels(): java.util.ArrayList<any>;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public setLinkOpacity(param0: java.lang.Number): void;
						public getBorderRadius(): java.lang.Number;
						public getNodeWidth(): java.lang.Number;
						public setLinkLineWidth(param0: java.lang.Number): void;
						public getLinkColor(): com.highsoft.highcharts.common.HIColor;
						public setNodePadding(param0: java.lang.Number): void;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public setNodeWidth(param0: java.lang.Number): void;
						public setLinkRadius(param0: java.lang.Number): void;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public setMinLinkWidth(param0: java.lang.Number): void;
						public setLevels(param0: java.util.ArrayList<any>): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public getLinkLineWidth(): java.lang.Number;
						public getNodePadding(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public setLinkColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setHangingIndent(param0: java.lang.Number): void;
						public getHangingIndent(): java.lang.Number;
						public setNodes(param0: java.util.ArrayList<any>): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public getLinkRadius(): java.lang.Number;
						public getMinLinkWidth(): java.lang.Number;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getLinkOpacity(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPackedbubble extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPackedbubble>;
						public setDisplayNegative(param0: java.lang.Boolean): void;
						public constructor();
						public setLayoutAlgorithm(param0: com.highsoft.highcharts.common.hichartsclasses.HILayoutAlgorithm): void;
						public getZThreshold(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public setZThreshold(param0: java.lang.Number): void;
						public getUseSimulation(): java.lang.Boolean;
						public setMaxSize(param0: any): void;
						public setParentNode(param0: com.highsoft.highcharts.common.hichartsclasses.HIParentNode): void;
						public getDisplayNegative(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public setSizeBy(param0: string): void;
						public getDraggable(): java.lang.Boolean;
						public setMinSize(param0: any): void;
						public setDraggable(param0: java.lang.Boolean): void;
						public getMaxSize(): any;
						public setUseSimulation(param0: java.lang.Boolean): void;
						public getLayoutAlgorithm(): com.highsoft.highcharts.common.hichartsclasses.HILayoutAlgorithm;
						public getParentNode(): com.highsoft.highcharts.common.hichartsclasses.HIParentNode;
						public getSizeBy(): string;
						public getMinSize(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPane extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPane>;
						public setInnerSize(param0: any): void;
						public setCenter(param0: java.util.ArrayList<any>): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setStartAngle(param0: java.lang.Number): void;
						public setBackground(param0: java.util.ArrayList<any>): void;
						public setSize(param0: any): void;
						public getSize(): any;
						public getCenter(): java.util.ArrayList<any>;
						public setEndAngle(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getStartAngle(): java.lang.Number;
						public getBackground(): java.util.ArrayList<any>;
						public getInnerSize(): any;
						public getEndAngle(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPanning extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPanning>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setEnabled(param0: java.lang.Boolean): void;
						public getType(): string;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public setType(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIParallelAxes extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIParallelAxes>;
						public getMinorTickWidth(): java.lang.Number;
						public getZoomEnabled(): java.lang.Boolean;
						public getLineWidth(): java.lang.Number;
						public getMinorTicks(): java.lang.Boolean;
						public setAllowDecimals(param0: java.lang.Boolean): void;
						public setReversed(param0: java.lang.Boolean): void;
						public constructor();
						public getMinorTickLength(): java.lang.Number;
						public getStartOnTick(): java.lang.Boolean;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setCategories(param0: java.util.ArrayList<string>): void;
						public setAlignTicks(param0: java.lang.Boolean): void;
						public setShowFirstLabel(param0: java.lang.Boolean): void;
						public getMinTickInterval(): java.lang.Number;
						public setMaxPadding(param0: java.lang.Number): void;
						public setEndOnTick(param0: java.lang.Boolean): void;
						public setTickPositioner(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getSoftMin(): java.lang.Number;
						public getTickmarkPlacement(): string;
						public getTickAmount(): java.lang.Number;
						public getUnits(): java.util.ArrayList<java.util.ArrayList<any>>;
						public getMaxPadding(): java.lang.Number;
						public getTickColor(): com.highsoft.highcharts.common.HIColor;
						public getOpposite(): java.lang.Boolean;
						public setShowEmpty(param0: java.lang.Boolean): void;
						public getParams(): java.util.Map<string, any>;
						public setTickmarkPlacement(param0: string): void;
						public setGridZIndex(param0: java.lang.Number): void;
						public getType(): string;
						public setLeft(param0: any): void;
						public setLineWidth(param0: java.lang.Number): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getCeiling(): java.lang.Number;
						public getTickPositions(): java.util.ArrayList<java.lang.Number>;
						public setMinTickInterval(param0: java.lang.Number): void;
						public setDateTimeLabelFormats(param0: com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats): void;
						public setHeight(param0: any): void;
						public setTitle(param0: any): void;
						public setSoftMin(param0: java.lang.Number): void;
						public getMinorTickInterval(): any;
						public getLabels(): com.highsoft.highcharts.common.hichartsclasses.HILabels;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public setMinorTickWidth(param0: java.lang.Number): void;
						public getLinkedTo(): java.lang.Number;
						public setPane(param0: java.lang.Number): void;
						public getTickPositioner(): com.highsoft.highcharts.core.HIFunction;
						public getShowFirstLabel(): java.lang.Boolean;
						public setClassName(param0: string): void;
						public getTickPosition(): string;
						public setStartOnTick(param0: java.lang.Boolean): void;
						public getShowLastLabel(): java.lang.Boolean;
						public setLinkedTo(param0: java.lang.Number): void;
						public getOffset(): java.lang.Number;
						public setMinPadding(param0: java.lang.Number): void;
						public setShowLastLabel(param0: java.lang.Boolean): void;
						public getUniqueNames(): java.lang.Boolean;
						public setTickInterval(param0: java.lang.Number): void;
						public getTickInterval(): java.lang.Number;
						public setTickPosition(param0: string): void;
						public getEndOnTick(): java.lang.Boolean;
						public setTooltipValueFormat(param0: string): void;
						public setZoomEnabled(param0: java.lang.Boolean): void;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public getMinorTickPosition(): string;
						public getTitle(): any;
						public getMinRange(): java.lang.Number;
						public setType(param0: string): void;
						public getReversedStacks(): java.lang.Boolean;
						public getMinorTickColor(): com.highsoft.highcharts.common.HIColor;
						public getGridZIndex(): java.lang.Number;
						public getTop(): any;
						public setReversedStacks(param0: java.lang.Boolean): void;
						public getShowEmpty(): java.lang.Boolean;
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getPane(): java.lang.Number;
						public setWidth(param0: any): void;
						public setUniqueNames(param0: java.lang.Boolean): void;
						public getAlignTicks(): java.lang.Boolean;
						public getMin(): java.lang.Number;
						public getWidth(): any;
						public getMargin(): java.lang.Number;
						public getHeight(): any;
						public setUnits(param0: java.util.ArrayList<java.util.ArrayList<any>>): void;
						public setTickWidth(param0: java.lang.Number): void;
						public getTickLength(): java.lang.Number;
						public getCategories(): java.util.ArrayList<string>;
						public getCrosshair(): com.highsoft.highcharts.common.hichartsclasses.HICrosshair;
						public setMax(param0: java.lang.Number): void;
						public setTop(param0: any): void;
						public getAllowDecimals(): java.lang.Boolean;
						public setVisible(param0: java.lang.Boolean): void;
						public getDateTimeLabelFormats(): com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats;
						public setMinorTickInterval(param0: any): void;
						public setMinorTickColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setTickColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getVisible(): java.lang.Boolean;
						public setStartOfWeek(param0: java.lang.Number): void;
						public getFloor(): java.lang.Number;
						public setFloor(param0: java.lang.Number): void;
						public setMargin(param0: java.lang.Number): void;
						public setCeiling(param0: java.lang.Number): void;
						public setTickPixelInterval(param0: java.lang.Number): void;
						public setCrosshair(param0: com.highsoft.highcharts.common.hichartsclasses.HICrosshair): void;
						public getTickPixelInterval(): java.lang.Number;
						public setOffset(param0: java.lang.Number): void;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public setMinRange(param0: java.lang.Number): void;
						public setLabels(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels): void;
						public setMin(param0: java.lang.Number): void;
						public setTickLength(param0: java.lang.Number): void;
						public setMinorTicks(param0: java.lang.Boolean): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public setMinorTickLength(param0: java.lang.Number): void;
						public setTickAmount(param0: java.lang.Number): void;
						public getTooltipValueFormat(): string;
						public getReversed(): java.lang.Boolean;
						public setOpposite(param0: java.lang.Boolean): void;
						public getLeft(): any;
						public getSoftMax(): java.lang.Number;
						public getStartOfWeek(): java.lang.Number;
						public getTickWidth(): java.lang.Number;
						public setMinorTickPosition(param0: string): void;
						public setSoftMax(param0: java.lang.Number): void;
						public getMinPadding(): java.lang.Number;
						public setTickPositions(param0: java.util.ArrayList<java.lang.Number>): void;
						public getMax(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIParentNode extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIParentNode>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setAllowPointSelect(param0: java.lang.Boolean): void;
						public getAllowPointSelect(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIParentNodeOptions extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIParentNodeOptions>;
						public getParams(): java.util.Map<string, any>;
						public setGravitationalConstant(param0: java.lang.Number): void;
						public getType(): string;
						public setLinkLength(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setType(param0: string): void;
						public setSeriesInteraction(param0: java.lang.Boolean): void;
						public getMaxSpeed(): java.lang.Number;
						public getInitialPositions(): string;
						public getLinkLength(): java.lang.Number;
						public setInitialPositionRadius(param0: java.lang.Number): void;
						public setMaxIterations(param0: java.lang.Number): void;
						public constructor();
						public getInitialPositionRadius(): java.lang.Number;
						public getFriction(): java.lang.Number;
						public getMaxIterations(): java.lang.Number;
						public setMarker(param0: com.highsoft.highcharts.common.hichartsclasses.HIMarker): void;
						public getGravitationalConstant(): java.lang.Number;
						public setMaxSpeed(param0: java.lang.Number): void;
						public setIntegration(param0: string): void;
						public setFriction(param0: java.lang.Number): void;
						public setInitialPositions(param0: string): void;
						public getIntegration(): string;
						public getSeriesInteraction(): java.lang.Boolean;
						public getMarker(): com.highsoft.highcharts.common.hichartsclasses.HIMarker;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIParentNodeTextPath extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIParentNodeTextPath>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setEnabled(param0: java.lang.Boolean): void;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPareto extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPareto>;
						public getBaseSeries(): any;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getParams(): java.util.HashMap<string, any>;
						public setBaseSeries(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPartialFill extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPartialFill>;
						public constructor();
						public setAmount(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getAmount(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setFill(param0: com.highsoft.highcharts.common.HIColor): void;
						public getFill(): com.highsoft.highcharts.common.HIColor;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPatternObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPatternObject>;
						public setPattern(param0: com.highsoft.highcharts.common.hichartsclasses.HIPatternOptionsObject): void;
						public constructor();
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getParams(): java.util.Map<string, any>;
						public setPatternIndex(param0: java.lang.Number): void;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject;
						public getParams(): java.util.HashMap<string, any>;
						public getPatternIndex(): java.lang.Number;
						public getPattern(): com.highsoft.highcharts.common.hichartsclasses.HIPatternOptionsObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPatternOptionsObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPatternOptionsObject>;
						public getParams(): java.util.Map<string, any>;
						public getBackgroundColor(): string;
						public getHeight(): java.lang.Number;
						public setId(param0: string): void;
						public setAspectRatio(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setX(param0: java.lang.Number): void;
						public setY(param0: java.lang.Number): void;
						public getAspectRatio(): java.lang.Number;
						public setOpacity(param0: java.lang.Number): void;
						public setBackgroundColor(param0: string): void;
						public getPatternTransform(): string;
						public getId(): string;
						public setImage(param0: string): void;
						public setPatternTransform(param0: string): void;
						public getX(): java.lang.Number;
						public constructor();
						public setWidth(param0: java.lang.Number): void;
						public getColor(): string;
						public getOpacity(): java.lang.Number;
						public setHeight(param0: java.lang.Number): void;
						public getImage(): string;
						public setPath(param0: com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes): void;
						public getPath(): com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes;
						public getWidth(): java.lang.Number;
						public getY(): java.lang.Number;
						public setColor(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPie extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPie>;
						public setInnerSize(param0: any): void;
						public getParams(): java.util.Map<string, any>;
						public setSlicedOffset(param0: java.lang.Number): void;
						public getSize(): any;
						public setEndAngle(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getStartAngle(): java.lang.Number;
						public getColors(): java.util.ArrayList<string>;
						public getMinSize(): any;
						public getEndAngle(): java.lang.Number;
						public setCenter(param0: java.util.ArrayList<any>): void;
						public getIgnoreHiddenPoint(): java.lang.Boolean;
						public constructor();
						public setStartAngle(param0: java.lang.Number): void;
						public getSlicedOffset(): java.lang.Number;
						public getDepth(): java.lang.Number;
						public setSize(param0: any): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getCenter(): java.util.ArrayList<any>;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public getInnerSize(): any;
						public setMinSize(param0: any): void;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setIgnoreHiddenPoint(param0: java.lang.Boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPivot extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPivot>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getBackgroundColor(): com.highsoft.highcharts.common.HIColor;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderWidth(): java.lang.Number;
						public setRadius(param0: java.lang.Number): void;
						public setBackgroundColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.HashMap<string, any>;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getRadius(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPlotBands extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPlotBands>;
						public getInnerRadius(): any;
						public getParams(): java.util.Map<string, any>;
						public setId(param0: string): void;
						public getFrom(): java.lang.Number;
						public destroy(): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getOuterRadius(): any;
						public getZIndex(): java.lang.Number;
						public getId(): string;
						public setTo(param0: java.lang.Number): void;
						public setLabel(param0: com.highsoft.highcharts.common.hichartsclasses.HILabel): void;
						public constructor();
						public getThickness(): any;
						public setZIndex(param0: java.lang.Number): void;
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getTo(): java.lang.Number;
						public setFrom(param0: java.lang.Number): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setInnerRadius(param0: any): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setClassName(param0: string): void;
						public setOuterRadius(param0: any): void;
						public getLabel(): com.highsoft.highcharts.common.hichartsclasses.HILabel;
						public getBorderWidth(): java.lang.Number;
						public setThickness(param0: any): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPlotLines extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPlotLines>;
						public constructor();
						public setZIndex(param0: java.lang.Number): void;
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public setDashStyle(param0: string): void;
						public setWidth(param0: java.lang.Number): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setId(param0: string): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public destroy(): void;
						public setValue(param0: java.lang.Number): void;
						public setClassName(param0: string): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getZIndex(): java.lang.Number;
						public getDashStyle(): string;
						public getLabel(): com.highsoft.highcharts.common.hichartsclasses.HILabel;
						public getWidth(): java.lang.Number;
						public getId(): string;
						public setLabel(param0: com.highsoft.highcharts.common.hichartsclasses.HILabel): void;
						public getValue(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPlotOptions extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPlotOptions>;
						public getStreamgraph(): com.highsoft.highcharts.common.hichartsclasses.HIStreamgraph;
						public getColumnpyramid(): com.highsoft.highcharts.common.hichartsclasses.HIColumnpyramid;
						public getTreemap(): com.highsoft.highcharts.common.hichartsclasses.HITreemap;
						public getBellcurve(): com.highsoft.highcharts.common.hichartsclasses.HIBellcurve;
						public setVenn(param0: com.highsoft.highcharts.common.hichartsclasses.HIVenn): void;
						public getItem(): com.highsoft.highcharts.common.hichartsclasses.HIItem;
						public setColumnpyramid(param0: com.highsoft.highcharts.common.hichartsclasses.HIColumnpyramid): void;
						public getHistogram(): com.highsoft.highcharts.common.hichartsclasses.HIHistogram;
						public getFunnel3d(): com.highsoft.highcharts.common.hichartsclasses.HIFunnel3d;
						public setVariwide(param0: com.highsoft.highcharts.common.hichartsclasses.HIVariwide): void;
						public setLollipop(param0: com.highsoft.highcharts.common.hichartsclasses.HILollipop): void;
						public getSunburst(): com.highsoft.highcharts.common.hichartsclasses.HISunburst;
						public getLollipop(): com.highsoft.highcharts.common.hichartsclasses.HILollipop;
						public setNetworkgraph(param0: com.highsoft.highcharts.common.hichartsclasses.HINetworkgraph): void;
						public setWaterfall(param0: com.highsoft.highcharts.common.hichartsclasses.HIWaterfall): void;
						public setItem(param0: com.highsoft.highcharts.common.hichartsclasses.HIItem): void;
						public getAreasplinerange(): com.highsoft.highcharts.common.hichartsclasses.HIAreasplinerange;
						public constructor();
						public setSankey(param0: com.highsoft.highcharts.common.hichartsclasses.HISankey): void;
						public setAreaspline(param0: com.highsoft.highcharts.common.hichartsclasses.HIAreaspline): void;
						public getColumn(): com.highsoft.highcharts.common.hichartsclasses.HIColumn;
						public setBoxplot(param0: com.highsoft.highcharts.common.hichartsclasses.HIBoxplot): void;
						public setVariablepie(param0: com.highsoft.highcharts.common.hichartsclasses.HIVariablepie): void;
						public setVector(param0: com.highsoft.highcharts.common.hichartsclasses.HIVector): void;
						public getFunnel(): com.highsoft.highcharts.common.hichartsclasses.HIFunnel;
						public getSpline(): com.highsoft.highcharts.common.hichartsclasses.HISpline;
						public setXrange(param0: com.highsoft.highcharts.common.hichartsclasses.HIXrange): void;
						public setBellcurve(param0: com.highsoft.highcharts.common.hichartsclasses.HIBellcurve): void;
						public setBullet(param0: com.highsoft.highcharts.common.hichartsclasses.HIBullet): void;
						public setSpline(param0: com.highsoft.highcharts.common.hichartsclasses.HISpline): void;
						public getParams(): java.util.Map<string, any>;
						public getBullet(): com.highsoft.highcharts.common.hichartsclasses.HIBullet;
						public getBar(): com.highsoft.highcharts.common.hichartsclasses.HIBar;
						public getSeries(): com.highsoft.highcharts.common.hichartsclasses.HISeries;
						public setPyramid3d(param0: com.highsoft.highcharts.common.hichartsclasses.HIPyramid3d): void;
						public setPackedbubble(param0: com.highsoft.highcharts.common.hichartsclasses.HIPackedbubble): void;
						public setTimeline(param0: com.highsoft.highcharts.common.hichartsclasses.HITimeline): void;
						public getParams(): java.util.HashMap<string, any>;
						public getGauge(): com.highsoft.highcharts.common.hichartsclasses.HIGauge;
						public getWindbarb(): com.highsoft.highcharts.common.hichartsclasses.HIWindbarb;
						public setDumbbell(param0: com.highsoft.highcharts.common.hichartsclasses.HIDumbbell): void;
						public setBubble(param0: com.highsoft.highcharts.common.hichartsclasses.HIBubble): void;
						public getTimeline(): com.highsoft.highcharts.common.hichartsclasses.HITimeline;
						public setLine(param0: com.highsoft.highcharts.common.hichartsclasses.HILine): void;
						public getVenn(): com.highsoft.highcharts.common.hichartsclasses.HIVenn;
						public getScatter(): com.highsoft.highcharts.common.hichartsclasses.HIScatter;
						public setPareto(param0: com.highsoft.highcharts.common.hichartsclasses.HIPareto): void;
						public setWordcloud(param0: com.highsoft.highcharts.common.hichartsclasses.HIWordcloud): void;
						public getColumnrange(): com.highsoft.highcharts.common.hichartsclasses.HIColumnrange;
						public setArearange(param0: com.highsoft.highcharts.common.hichartsclasses.HIArearange): void;
						public getPyramid(): com.highsoft.highcharts.common.hichartsclasses.HIPyramid;
						public setTreemap(param0: com.highsoft.highcharts.common.hichartsclasses.HITreemap): void;
						public setPolygon(param0: com.highsoft.highcharts.common.hichartsclasses.HIPolygon): void;
						public setAreasplinerange(param0: com.highsoft.highcharts.common.hichartsclasses.HIAreasplinerange): void;
						public setColumn(param0: com.highsoft.highcharts.common.hichartsclasses.HIColumn): void;
						public getPie(): com.highsoft.highcharts.common.hichartsclasses.HIPie;
						public getErrorbar(): com.highsoft.highcharts.common.hichartsclasses.HIErrorbar;
						public getAreaspline(): com.highsoft.highcharts.common.hichartsclasses.HIAreaspline;
						public setStreamgraph(param0: com.highsoft.highcharts.common.hichartsclasses.HIStreamgraph): void;
						public setSeries(param0: com.highsoft.highcharts.common.hichartsclasses.HISeries): void;
						public setHeatmap(param0: com.highsoft.highcharts.common.hichartsclasses.HIHeatmap): void;
						public setPyramid(param0: com.highsoft.highcharts.common.hichartsclasses.HIPyramid): void;
						public getSankey(): com.highsoft.highcharts.common.hichartsclasses.HISankey;
						public setCylinder(param0: com.highsoft.highcharts.common.hichartsclasses.HICylinder): void;
						public setFunnel(param0: com.highsoft.highcharts.common.hichartsclasses.HIFunnel): void;
						public getBubble(): com.highsoft.highcharts.common.hichartsclasses.HIBubble;
						public getDependencywheel(): com.highsoft.highcharts.common.hichartsclasses.HIDependencywheel;
						public setFunnel3d(param0: com.highsoft.highcharts.common.hichartsclasses.HIFunnel3d): void;
						public getVariablepie(): com.highsoft.highcharts.common.hichartsclasses.HIVariablepie;
						public getPackedbubble(): com.highsoft.highcharts.common.hichartsclasses.HIPackedbubble;
						public getWordcloud(): com.highsoft.highcharts.common.hichartsclasses.HIWordcloud;
						public getHeatmap(): com.highsoft.highcharts.common.hichartsclasses.HIHeatmap;
						public getOrganization(): com.highsoft.highcharts.common.hichartsclasses.HIOrganization;
						public getLine(): com.highsoft.highcharts.common.hichartsclasses.HILine;
						public getVector(): com.highsoft.highcharts.common.hichartsclasses.HIVector;
						public setColumnrange(param0: com.highsoft.highcharts.common.hichartsclasses.HIColumnrange): void;
						public getSolidgauge(): com.highsoft.highcharts.common.hichartsclasses.HISolidgauge;
						public setScatter3d(param0: com.highsoft.highcharts.common.hichartsclasses.HIScatter3d): void;
						public getBoxplot(): com.highsoft.highcharts.common.hichartsclasses.HIBoxplot;
						public getNetworkgraph(): com.highsoft.highcharts.common.hichartsclasses.HINetworkgraph;
						public setErrorbar(param0: com.highsoft.highcharts.common.hichartsclasses.HIErrorbar): void;
						public setOrganization(param0: com.highsoft.highcharts.common.hichartsclasses.HIOrganization): void;
						public getDumbbell(): com.highsoft.highcharts.common.hichartsclasses.HIDumbbell;
						public getPareto(): com.highsoft.highcharts.common.hichartsclasses.HIPareto;
						public getScatter3d(): com.highsoft.highcharts.common.hichartsclasses.HIScatter3d;
						public getCylinder(): com.highsoft.highcharts.common.hichartsclasses.HICylinder;
						public getPyramid3d(): com.highsoft.highcharts.common.hichartsclasses.HIPyramid3d;
						public setTilemap(param0: com.highsoft.highcharts.common.hichartsclasses.HITilemap): void;
						public getXrange(): com.highsoft.highcharts.common.hichartsclasses.HIXrange;
						public setScatter(param0: com.highsoft.highcharts.common.hichartsclasses.HIScatter): void;
						public setArea(param0: com.highsoft.highcharts.common.hichartsclasses.HIArea): void;
						public getTilemap(): com.highsoft.highcharts.common.hichartsclasses.HITilemap;
						public setGauge(param0: com.highsoft.highcharts.common.hichartsclasses.HIGauge): void;
						public setSolidgauge(param0: com.highsoft.highcharts.common.hichartsclasses.HISolidgauge): void;
						public getPolygon(): com.highsoft.highcharts.common.hichartsclasses.HIPolygon;
						public setWindbarb(param0: com.highsoft.highcharts.common.hichartsclasses.HIWindbarb): void;
						public getVariwide(): com.highsoft.highcharts.common.hichartsclasses.HIVariwide;
						public setBar(param0: com.highsoft.highcharts.common.hichartsclasses.HIBar): void;
						public getWaterfall(): com.highsoft.highcharts.common.hichartsclasses.HIWaterfall;
						public setSunburst(param0: com.highsoft.highcharts.common.hichartsclasses.HISunburst): void;
						public setPie(param0: com.highsoft.highcharts.common.hichartsclasses.HIPie): void;
						public getArea(): com.highsoft.highcharts.common.hichartsclasses.HIArea;
						public getArearange(): com.highsoft.highcharts.common.hichartsclasses.HIArearange;
						public setHistogram(param0: com.highsoft.highcharts.common.hichartsclasses.HIHistogram): void;
						public setDependencywheel(param0: com.highsoft.highcharts.common.hichartsclasses.HIDependencywheel): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPoint extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPoint>;
						public setValuePrefix(param0: string): void;
						public select(param0: boolean, param1: boolean): void;
						public getParams(): java.util.Map<string, any>;
						public setYAxis(param0: any): void;
						public getValueDescriptionFormat(): string;
						public getValueSuffix(): string;
						public sonify(param0: java.util.Map<any, any>): void;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public cancelSonify(param0: boolean): void;
						public select(param0: boolean): void;
						public setXAxis(param0: any): void;
						public setValueSuffix(param0: string): void;
						public setDateFormat(param0: string): void;
						public getDateFormatter(): com.highsoft.highcharts.core.HIFunction;
						public onMouseOut(): void;
						public setValueDescriptionFormat(param0: string): void;
						public setNestedProperty(param0: any, param1: any, param2: string): void;
						public getX(): java.lang.Number;
						public constructor();
						public setValueDecimals(param0: java.lang.Number): void;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public getValuePrefix(): string;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public getDateFormat(): string;
						public setState(): void;
						public remove(param0: boolean): void;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint, param1: boolean): void;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint, param1: boolean, param2: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public setState(param0: any, param1: boolean): void;
						public getXAxis(): any;
						public setDateFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getDescriptionFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getYAxis(): any;
						public cancelSonify(): void;
						public getY(): java.lang.Number;
						public setDescriptionFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public select(): void;
						public remove(param0: boolean, param1: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public tooltipFormatter(param0: string): void;
						public getValueDecimals(): java.lang.Number;
						public setState(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPoints extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPoints>;
						public setXAxis(param0: any): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getXAxis(): any;
						public setYAxis(param0: any): void;
						public getYAxis(): any;
						public getY(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public getX(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPolygon extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPolygon>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setTrackByArea(param0: java.lang.Boolean): void;
						public getTrackByArea(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPopup extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPopup>;
						public setLine(param0: string): void;
						public getVerticalArrow(): string;
						public getStyle(): string;
						public setVolume(param0: string): void;
						public getPitchfork(): string;
						public setMeasureY(param0: string): void;
						public getTypeOptions(): string;
						public setLabel(param0: string): void;
						public setVerticalLabel(param0: string): void;
						public setMeasureXY(param0: string): void;
						public getShapeOptions(): string;
						public setBackgroundColors(param0: string): void;
						public getBorderRadius(): string;
						public setBorderColor(param0: string): void;
						public getFill(): string;
						public setCrosshairY(param0: string): void;
						public constructor();
						public setOuterBackground(param0: string): void;
						public getCrooked5(): string;
						public getParallelChannel(): string;
						public getSimpleShapes(): string;
						public setSaveButton(param0: string): void;
						public setShapes(param0: string): void;
						public getSegment(): string;
						public getVolume(): string;
						public getInfinityLine(): string;
						public setBorderRadius(param0: string): void;
						public setFlags(param0: string): void;
						public setStyle(param0: string): void;
						public getBorderColor(): string;
						public setConnector(param0: string): void;
						public getParams(): java.util.Map<string, any>;
						public getBackgroundColor(): string;
						public getHorizontalLine(): string;
						public getLabel(): string;
						public getConnector(): string;
						public setArrowRay(param0: string): void;
						public setAddButton(param0: string): void;
						public setTypeOptions(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
						public getCrosshairX(): string;
						public getEditButton(): string;
						public getMeasureY(): string;
						public getVerticalLabel(): string;
						public getFormat(): string;
						public getColor(): string;
						public setName(param0: string): void;
						public setVerticalLine(param0: string): void;
						public getMeasure(): string;
						public getBorderWidth(): string;
						public getAddButton(): string;
						public getTitle(): string;
						public setInfinityLine(param0: string): void;
						public setFill(param0: string): void;
						public setPadding(param0: string): void;
						public setLabelOptions(param0: string): void;
						public getStrokeWidth(): string;
						public getArrowLine(): string;
						public getCrosshairY(): string;
						public getOuterBackground(): string;
						public getCrooked3(): string;
						public getMeasureXY(): string;
						public getRectangle(): string;
						public getMeasureX(): string;
						public setStroke(param0: string): void;
						public getTunnel(): string;
						public setFormat(param0: string): void;
						public setHorizontalLine(param0: string): void;
						public getRay(): string;
						public getFontSize(): string;
						public setHeight(param0: string): void;
						public setBackgroundColor(param0: string): void;
						public setSegment(param0: string): void;
						public setVerticalCounter(param0: string): void;
						public getVerticalLine(): string;
						public getSaveButton(): string;
						public setTunnel(param0: string): void;
						public setArrowLine(param0: string): void;
						public setElliott5(param0: string): void;
						public setInnerBackground(param0: string): void;
						public getLine(): string;
						public getArrowSegment(): string;
						public getCircle(): string;
						public getShapes(): string;
						public setEditButton(param0: string): void;
						public getStroke(): string;
						public setTitle(param0: string): void;
						public setPitchfork(param0: string): void;
						public setArrowSegment(param0: string): void;
						public getBackground(): string;
						public getElliott5(): string;
						public setCrooked5(param0: string): void;
						public setBackground(param0: string): void;
						public getPadding(): string;
						public setStrokeWidth(param0: string): void;
						public setColor(param0: string): void;
						public getHeight(): string;
						public setRemoveButton(param0: string): void;
						public getRemoveButton(): string;
						public getBackgroundColors(): string;
						public getFibonacci(): string;
						public setFontSize(param0: string): void;
						public getLabelOptions(): string;
						public getLines(): string;
						public getVerticalCounter(): string;
						public getName(): string;
						public setCrosshairX(param0: string): void;
						public getArrowRay(): string;
						public setElliott3(param0: string): void;
						public setVerticalArrow(param0: string): void;
						public getFlags(): string;
						public getElliott3(): string;
						public setRectangle(param0: string): void;
						public setSeries(param0: string): void;
						public setBorderWidth(param0: string): void;
						public setSimpleShapes(param0: string): void;
						public setMeasureX(param0: string): void;
						public getLabels(): string;
						public setLines(param0: string): void;
						public setCircle(param0: string): void;
						public setLabels(param0: string): void;
						public getSeries(): string;
						public getInnerBackground(): string;
						public setShapeOptions(param0: string): void;
						public setFibonacci(param0: string): void;
						public setRay(param0: string): void;
						public setCrooked3(param0: string): void;
						public setMeasure(param0: string): void;
						public setParallelChannel(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPosition extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPosition>;
						public getAlign(): string;
						public getVerticalAlign(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setAlign(param0: string): void;
						public getY(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public setVerticalAlign(param0: string): void;
						public getX(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPyramid extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPyramid>;
						public getNeckHeight(): string;
						public getParams(): java.util.Map<string, any>;
						public setSlicedOffset(param0: java.lang.Number): void;
						public setEndAngle(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getStartAngle(): java.lang.Number;
						public getColors(): java.util.ArrayList<string>;
						public setHeight(param0: any): void;
						public getMinSize(): any;
						public getEndAngle(): java.lang.Number;
						public setCenter(param0: java.util.ArrayList<any>): void;
						public setReversed(param0: java.lang.Boolean): void;
						public getIgnoreHiddenPoint(): java.lang.Boolean;
						public constructor();
						public setWidth(param0: any): void;
						public setStartAngle(param0: java.lang.Number): void;
						public getSlicedOffset(): java.lang.Number;
						public getDepth(): java.lang.Number;
						public getWidth(): any;
						public setBorderWidth(param0: java.lang.Number): void;
						public getCenter(): java.util.ArrayList<any>;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public getReversed(): java.lang.Boolean;
						public getHeight(): any;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setNeckHeight(param0: string): void;
						public getNeckWidth(): string;
						public setNeckWidth(param0: string): void;
						public setMinSize(param0: any): void;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setIgnoreHiddenPoint(param0: java.lang.Boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIPyramid3d extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIPyramid3d>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getEdgeWidth(): java.lang.Number;
						public setGroupZPadding(param0: java.lang.Number): void;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getGradientForSides(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxPointWidth(): java.lang.Number;
						public setHeight(param0: any): void;
						public getGroupZPadding(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public setReversed(param0: java.lang.Boolean): void;
						public constructor();
						public setWidth(param0: any): void;
						public setPointRange(param0: java.lang.Number): void;
						public getDepth(): java.lang.Number;
						public getWidth(): any;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public getReversed(): java.lang.Boolean;
						public getHeight(): any;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public setGradientForSides(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIRadialGradientColorObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIRadialGradientColorObject>;
						public setCy(param0: java.lang.Number): void;
						public constructor();
						public setCx(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public setR(param0: java.lang.Number): void;
						public getR(): java.lang.Number;
						public getCx(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public getCy(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIRangeSelector extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIRangeSelector>;
						public constructor();
						public getMinInputLabel(): string;
						public getParams(): java.util.Map<string, any>;
						public getMaxInputLabel(): string;
						public setButtonText(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
						public getButtonText(): string;
						public setMaxInputLabel(param0: string): void;
						public setMinInputLabel(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIRanges extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIRanges>;
						public setConnectorColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getConnectorColor(): com.highsoft.highcharts.common.HIColor;
						public setValue(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.HashMap<string, any>;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getValue(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIResetZoomButton extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIResetZoomButton>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getRelativeTo(): string;
						public getPosition(): com.highsoft.highcharts.common.hichartsclasses.HIAlignObject;
						public getTheme(): com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes;
						public getParams(): java.util.HashMap<string, any>;
						public setTheme(param0: com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes): void;
						public setPosition(param0: com.highsoft.highcharts.common.hichartsclasses.HIAlignObject): void;
						public setRelativeTo(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIResponsive extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIResponsive>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getRules(): java.util.ArrayList<any>;
						public setRules(param0: java.util.ArrayList<any>): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIReverseArrow extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIReverseArrow>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getMarkerWidth(): java.lang.Number;
						public setId(param0: string): void;
						public getTagName(): string;
						public setMarkerHeight(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getMarkerHeight(): java.lang.Number;
						public getRefX(): java.lang.Number;
						public setRefY(param0: java.lang.Number): void;
						public getRefY(): java.lang.Number;
						public getRender(): java.lang.Boolean;
						public setMarkerWidth(param0: java.lang.Number): void;
						public setRefX(param0: java.lang.Number): void;
						public setTagName(param0: string): void;
						public getId(): string;
						public setRender(param0: java.lang.Boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIRight extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIRight>;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public getVisible(): any;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVisible(param0: any): void;
						public getSize(): java.lang.Number;
						public setSize(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIRotation extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIRotation>;
						public constructor();
						public getTo(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public setFrom(param0: java.lang.Number): void;
						public getFrom(): java.lang.Number;
						public getOrientations(): java.lang.Number;
						public setTo(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setOrientations(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIRules extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIRules>;
						public setChartOptions(param0: java.util.HashMap<any, any>): void;
						public constructor();
						public setCondition(param0: com.highsoft.highcharts.common.hichartsclasses.HICondition): void;
						public getParams(): java.util.Map<string, any>;
						public getChartOptions(): java.util.HashMap<any, any>;
						public getCondition(): com.highsoft.highcharts.common.hichartsclasses.HICondition;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISVGAttributes extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes>;
						public setRotationOriginX(param0: java.lang.Number): void;
						public setRotationOriginY(param0: java.lang.Number): void;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public getParams(): java.util.Map<string, any>;
						public getMatrix(): java.util.ArrayList<java.lang.Number>;
						public getParams(): java.util.HashMap<string, any>;
						public getInverted(): java.lang.Boolean;
						public getZIndex(): java.lang.Number;
						public setScaleY(param0: java.lang.Number): void;
						public getRotationOriginY(): java.lang.Number;
						public setScaleX(param0: java.lang.Number): void;
						public setInverted(param0: java.lang.Boolean): void;
						public setTranslateX(param0: java.lang.Number): void;
						public setD(param0: java.util.ArrayList<any>): void;
						public setFill(param0: com.highsoft.highcharts.common.HIColor): void;
						public getRotation(): java.lang.Number;
						public getScaleY(): java.lang.Number;
						public setTranslateY(param0: java.lang.Number): void;
						public getTranslateY(): java.lang.Number;
						public getD(): java.util.ArrayList<any>;
						public getStroke(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setZIndex(param0: java.lang.Number): void;
						public getTranslateX(): java.lang.Number;
						public getScaleX(): java.lang.Number;
						public setMatrix(param0: java.util.ArrayList<java.lang.Number>): void;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getRotationOriginX(): java.lang.Number;
						public setRotation(param0: java.lang.Number): void;
						public getFill(): com.highsoft.highcharts.common.HIColor;
						public setStroke(param0: com.highsoft.highcharts.common.HIColor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISVGDefinitionObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISVGDefinitionObject>;
						public constructor();
						public getChildren(): java.util.ArrayList<any>;
						public getParams(): java.util.Map<string, any>;
						public setTagName(param0: string): void;
						public setChildren(param0: java.util.ArrayList<any>): void;
						public getTagName(): string;
						public getTextContent(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setTextContent(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISankey extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISankey>;
						public getNodes(): java.util.ArrayList<any>;
						public getParams(): java.util.Map<string, any>;
						public getLevels(): java.util.ArrayList<any>;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public setLinkOpacity(param0: java.lang.Number): void;
						public getNodeWidth(): java.lang.Number;
						public setNodePadding(param0: java.lang.Number): void;
						public getCurveFactor(): java.lang.Number;
						public getColors(): java.util.ArrayList<string>;
						public setNodeWidth(param0: java.lang.Number): void;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public setMinLinkWidth(param0: java.lang.Number): void;
						public setLevels(param0: java.util.ArrayList<any>): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public getNodePadding(): java.lang.Number;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setNodes(param0: java.util.ArrayList<any>): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public getMinLinkWidth(): java.lang.Number;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getLinkOpacity(): java.lang.Number;
						public setCurveFactor(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIScatter extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIScatter>;
						public setCluster(param0: com.highsoft.highcharts.common.hichartsclasses.HICluster): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getCluster(): com.highsoft.highcharts.common.hichartsclasses.HICluster;
						public setJitter(param0: com.highsoft.highcharts.common.hichartsclasses.HIJitter): void;
						public getParams(): java.util.HashMap<string, any>;
						public getJitter(): com.highsoft.highcharts.common.hichartsclasses.HIJitter;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIScatter3d extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIScatter3d>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setJitter(param0: com.highsoft.highcharts.common.hichartsclasses.HIJitter): void;
						public getParams(): java.util.HashMap<string, any>;
						public getJitter(): com.highsoft.highcharts.common.hichartsclasses.HIJitter;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIScreenReaderSection extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIScreenReaderSection>;
						public getOnPlayAsSoundClick(): com.highsoft.highcharts.core.HIFunction;
						public setEndOfChartMarker(param0: string): void;
						public setAfterChartFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getParams(): java.util.Map<string, any>;
						public setBeforeChartFormat(param0: string): void;
						public getBeforeChartFormat(): string;
						public getEndOfChartMarker(): string;
						public getBeforeRegionLabel(): string;
						public getBeforeChartFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getParams(): java.util.HashMap<string, any>;
						public setAfterChartFormat(param0: string): void;
						public getAxisRangeDateFormat(): string;
						public getAfterChartFormatter(): com.highsoft.highcharts.core.HIFunction;
						public setAnnotations(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnnotations): void;
						public setBeforeRegionLabel(param0: string): void;
						public getAnnotations(): com.highsoft.highcharts.common.hichartsclasses.HIAnnotations;
						public constructor();
						public getAfterChartFormat(): string;
						public setBeforeChartFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setAxisRangeDateFormat(param0: string): void;
						public getAfterRegionLabel(): string;
						public getOnViewDataTableClick(): com.highsoft.highcharts.core.HIFunction;
						public setAfterRegionLabel(param0: string): void;
						public setOnPlayAsSoundClick(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setOnViewDataTableClick(param0: com.highsoft.highcharts.core.HIFunction): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIScrollablePlotArea extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIScrollablePlotArea>;
						public setScrollPositionX(param0: java.lang.Number): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setScrollPositionY(param0: java.lang.Number): void;
						public getScrollPositionX(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public getMinWidth(): java.lang.Number;
						public getOpacity(): java.lang.Number;
						public setMinHeight(param0: java.lang.Number): void;
						public setOpacity(param0: java.lang.Number): void;
						public getScrollPositionY(): java.lang.Number;
						public getMinHeight(): java.lang.Number;
						public setMinWidth(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISecond extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISecond>;
						public getRange(): java.lang.Boolean;
						public getMain(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setRange(param0: java.lang.Boolean): void;
						public setMain(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISelect extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISelect>;
						public getParams(): java.util.Map<string, any>;
						public setHeightPlus(param0: java.lang.Number): void;
						public getHeight(): java.lang.Number;
						public getLineWidth(): java.lang.Number;
						public getEnabled(): java.lang.Boolean;
						public setLineWidth(param0: java.lang.Number): void;
						public setWidthPlus(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setLineWidthPlus(param0: java.lang.Number): void;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setRadius(param0: java.lang.Number): void;
						public setHalo(param0: com.highsoft.highcharts.common.hichartsclasses.HIHalo): void;
						public getHeightPlus(): java.lang.Number;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public getHalo(): com.highsoft.highcharts.common.hichartsclasses.HIHalo;
						public constructor();
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setWidth(param0: java.lang.Number): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public getRadius(): java.lang.Number;
						public setHeight(param0: java.lang.Number): void;
						public getLineWidthPlus(): java.lang.Number;
						public setEnabled(param0: java.lang.Boolean): void;
						public getWidthPlus(): java.lang.Number;
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimation): void;
						public getWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimation;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISeries extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISeries>;
						public getStack(): string;
						public getTurboThreshold(): java.lang.Number;
						public getTooltip(): com.highsoft.highcharts.common.hichartsclasses.HITooltip;
						public setStacking(param0: string): void;
						public setAnimation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getThreshold(): java.lang.Number;
						public setXAxisDescription(param0: string): void;
						public setId(param0: string): void;
						public setColorIndex(param0: java.lang.Number): void;
						public getStates(): com.highsoft.highcharts.common.hichartsclasses.HIStates;
						public getLineWidth(): java.lang.Number;
						public setIncludeInDataExport(param0: java.lang.Boolean): void;
						public setXAxis(param0: any): void;
						public getPointPlacement(): any;
						public setOpacity(param0: java.lang.Number): void;
						public setProperty(param0: string, param1: any): void;
						public setLegendIndex(param0: java.lang.Number): void;
						public setPoint(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint): void;
						public setAnimationLimit(param0: java.lang.Number): void;
						public setSeriesVisible(param0: boolean): void;
						public render(): void;
						public addPoint(param0: com.highsoft.highcharts.common.hichartsclasses.HIData, param1: boolean, param2: boolean, param3: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public getYAxisDescription(): string;
						public getSkipKeyboardNavigation(): java.lang.Boolean;
						public setSeriesData(param0: java.util.List<any>): void;
						public setLabel(param0: com.highsoft.highcharts.common.hichartsclasses.HILabel): void;
						public getDescribeSingleSeries(): java.lang.Boolean;
						public getConnectEnds(): java.lang.Boolean;
						public getCustom(): java.util.HashMap<any, any>;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getIncludeInDataExport(): java.lang.Boolean;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setSkipKeyboardNavigation(param0: java.lang.Boolean): void;
						public getStep(): string;
						public getAllowPointSelect(): java.lang.Boolean;
						public setSeriesData(param0: java.util.List<any>, param1: boolean, param2: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject, param3: boolean): void;
						public setDescribeSingleSeries(param0: java.lang.Boolean): void;
						public setState(): void;
						public getEnableMouseTracking(): java.lang.Boolean;
						public setPointPlacement(param0: any): void;
						public getFindNearestPointBy(): string;
						public setTurboThreshold(param0: java.lang.Number): void;
						public onMouseOver(): void;
						public setSeriesVisible(): void;
						public getCursor(): string;
						public getDragDrop(): com.highsoft.highcharts.common.hichartsclasses.HIDragDrop;
						public getShadow(): java.lang.Boolean;
						public getColorAxis(): any;
						public remove(param0: boolean, param1: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject, param2: boolean): void;
						public getDefinition(): string;
						public getParams(): java.util.Map<string, any>;
						public setStep(param0: string): void;
						public getType(): string;
						public getPointInterval(): java.lang.Number;
						public getKeys(): java.util.ArrayList<string>;
						public getDataLabels(): java.util.ArrayList<any>;
						public getLinecap(): string;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HISeries): void;
						public setYAxisDescription(param0: string): void;
						public getGetExtremesFromAll(): java.lang.Boolean;
						public setDragDrop(param0: com.highsoft.highcharts.common.hichartsclasses.HIDragDrop): void;
						public setLineWidth(param0: java.lang.Number): void;
						public setIndex(param0: java.lang.Number): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public drawPoints(): void;
						public addPoint(param0: com.highsoft.highcharts.common.hichartsclasses.HIData, param1: boolean, param2: boolean): void;
						public onMouseOut(): void;
						public setLinkedTo(param0: string): void;
						public getId(): string;
						public getAnimationLimit(): java.lang.Number;
						public getPointStart(): java.lang.Number;
						public setSoftThreshold(param0: java.lang.Boolean): void;
						public setZIndex(param0: java.lang.Number): void;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public getConnectNulls(): java.lang.Boolean;
						public setName(param0: string): void;
						public getBoostBlending(): string;
						public setCustom(param0: java.util.HashMap<any, any>): void;
						public setClassName(param0: string): void;
						public getNegativeColor(): com.highsoft.highcharts.common.HIColor;
						public getOpacity(): java.lang.Number;
						public getPointDescriptionEnabledThreshold(): java.lang.Number;
						public addPoint(param0: com.highsoft.highcharts.common.hichartsclasses.HIData, param1: boolean): void;
						public setShowCheckbox(param0: java.lang.Boolean): void;
						public setBoostBlending(param0: string): void;
						public getClip(): java.lang.Boolean;
						public getSummary(): com.highsoft.highcharts.common.hichartsclasses.HISummary;
						public setNullPointValue(param0: string): void;
						public show(): void;
						public setAllowPointSelect(param0: java.lang.Boolean): void;
						public getPointIntervalUnit(): string;
						public select(): void;
						public getPoint(): com.highsoft.highcharts.common.hichartsclasses.HIPoint;
						public setColorKey(param0: string): void;
						public getMarker(): com.highsoft.highcharts.common.hichartsclasses.HIMarker;
						public getZoneAxis(): string;
						public setDataLabels(param0: java.util.ArrayList<any>): void;
						public setStack(param0: string): void;
						public setDashStyle(param0: string): void;
						public setClip(param0: java.lang.Boolean): void;
						public setBoostThreshold(param0: java.lang.Number): void;
						public getDataSorting(): com.highsoft.highcharts.common.hichartsclasses.HIDataSortingOptionsObject;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public setSeriesData(param0: java.util.List<any>, param1: boolean): void;
						public getXAxisDescription(): string;
						public sonify(param0: java.util.Map<any, any>): void;
						public setType(param0: string): void;
						public getData(): java.util.ArrayList<any>;
						public getZIndex(): java.lang.Number;
						public setSelected(param0: java.lang.Boolean): void;
						public setLinecap(param0: string): void;
						public getBoostThreshold(): java.lang.Number;
						public setCursor(param0: string): void;
						public setConnectNulls(param0: java.lang.Boolean): void;
						public setPointDescriptionEnabledThreshold(param0: java.lang.Number): void;
						public setNegativeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getColorKey(): string;
						public setEnableMouseTracking(param0: java.lang.Boolean): void;
						public setPointStart(param0: java.lang.Number): void;
						public removePoint(param0: java.lang.Number, param1: boolean, param2: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public setGetExtremesFromAll(param0: java.lang.Boolean): void;
						public setTooltip(param0: com.highsoft.highcharts.common.hichartsclasses.HITooltip): void;
						public setThreshold(param0: java.lang.Number): void;
						public remove(param0: boolean): void;
						public setFindNearestPointBy(param0: string): void;
						public setZoneAxis(param0: string): void;
						public getXAxis(): any;
						public getDashStyle(): string;
						public getDescriptionFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getColorIndex(): java.lang.Number;
						public getLabel(): com.highsoft.highcharts.common.hichartsclasses.HILabel;
						public getSoftThreshold(): java.lang.Boolean;
						public getYAxis(): any;
						public setDataSorting(param0: com.highsoft.highcharts.common.hichartsclasses.HIDataSortingOptionsObject): void;
						public getLinkedTo(): string;
						public setDefinition(param0: string): void;
						public setShowInLegend(param0: java.lang.Boolean): void;
						public remove(): void;
						public removePoint(param0: java.lang.Number, param1: boolean): void;
						public setYAxis(param0: any): void;
						public setSummary(param0: com.highsoft.highcharts.common.hichartsclasses.HISummary): void;
						public setStates(param0: com.highsoft.highcharts.common.hichartsclasses.HIStates): void;
						public setSeriesVisible(param0: boolean, param1: boolean): void;
						public setVisible(param0: java.lang.Boolean): void;
						public getStacking(): string;
						public setPointIntervalUnit(param0: string): void;
						public removePoint(param0: java.lang.Number): void;
						public getCrisp(): java.lang.Boolean;
						public getName(): string;
						public select(param0: boolean): void;
						public getShowInLegend(): java.lang.Boolean;
						public getVisible(): java.lang.Boolean;
						public getCropThreshold(): java.lang.Number;
						public getStickyTracking(): java.lang.Boolean;
						public translate(): void;
						public setKeys(param0: java.util.ArrayList<string>): void;
						public getNullPointValue(): string;
						public setPointDescriptionFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setZones(param0: java.util.ArrayList<any>): void;
						public setCropThreshold(param0: java.lang.Number): void;
						public drawGraph(): void;
						public animate(param0: boolean): void;
						public setShadow(param0: java.lang.Boolean): void;
						public setData(param0: java.util.ArrayList<any>): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getPointDescriptionFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public getAnimation(): com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject;
						public getShowCheckbox(): java.lang.Boolean;
						public setPointInterval(param0: java.lang.Number): void;
						public hide(): void;
						public getIndex(): java.lang.Number;
						public setMarker(param0: com.highsoft.highcharts.common.hichartsclasses.HIMarker): void;
						public getLegendIndex(): java.lang.Number;
						public getSelected(): java.lang.Boolean;
						public setCrisp(param0: java.lang.Boolean): void;
						public setConnectEnds(param0: java.lang.Boolean): void;
						public getPointAnnotationsDescription(): string;
						public getZones(): java.util.ArrayList<any>;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HISeries, param1: boolean): void;
						public setColorAxis(param0: any): void;
						public setStickyTracking(param0: java.lang.Boolean): void;
						public addPoint(param0: com.highsoft.highcharts.common.hichartsclasses.HIData): void;
						public setOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HISeries): void;
						public setSeriesData(param0: java.util.List<any>, param1: boolean, param2: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public setDescriptionFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public remove(param0: boolean, param1: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public setPointAnnotationsDescription(param0: string): void;
						public setState(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISeriesNavigation extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISeriesNavigation>;
						public setSkipNullPoints(param0: java.lang.Boolean): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setPointNavigationEnabledThreshold(param0: java.lang.Number): void;
						public getSkipNullPoints(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public setMode(param0: string): void;
						public getPointNavigationEnabledThreshold(): java.lang.Number;
						public getMode(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISeriesTypeDescriptions extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISeriesTypeDescriptions>;
						public constructor();
						public getPyramid(): string;
						public getParams(): java.util.Map<string, any>;
						public setColumnrange(param0: string): void;
						public setBubble(param0: string): void;
						public getErrorbar(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getBubble(): string;
						public setAreasplinerange(param0: string): void;
						public setWaterfall(param0: string): void;
						public getColumnrange(): string;
						public setFunnel(param0: string): void;
						public getWaterfall(): string;
						public setArearange(param0: string): void;
						public setErrorbar(param0: string): void;
						public getAreasplinerange(): string;
						public setPyramid(param0: string): void;
						public setBoxplot(param0: string): void;
						public getFunnel(): string;
						public getBoxplot(): string;
						public getArearange(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIShadowOptionsObject extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIShadowOptionsObject>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setWidth(param0: java.lang.Number): void;
						public getColor(): string;
						public getOffsetX(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public getOpacity(): java.lang.Number;
						public setOpacity(param0: java.lang.Number): void;
						public getOffsetY(): java.lang.Number;
						public getWidth(): java.lang.Number;
						public setOffsetY(param0: java.lang.Number): void;
						public setColor(param0: string): void;
						public setOffsetX(param0: java.lang.Number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIShapeOptions extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIShapeOptions>;
						public getSrc(): string;
						public getStroke(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setStrokeWidth(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public setDashStyle(param0: string): void;
						public setWidth(param0: java.lang.Number): void;
						public getHeight(): java.lang.Number;
						public getType(): string;
						public setR(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setType(param0: string): void;
						public setHeight(param0: java.lang.Number): void;
						public setSnap(param0: java.lang.Number): void;
						public getDashStyle(): string;
						public getStrokeWidth(): java.lang.Number;
						public setSrc(param0: string): void;
						public getWidth(): java.lang.Number;
						public getR(): java.lang.Number;
						public getSnap(): java.lang.Number;
						public setFill(param0: com.highsoft.highcharts.common.HIColor): void;
						public setStroke(param0: com.highsoft.highcharts.common.HIColor): void;
						public getFill(): com.highsoft.highcharts.common.HIColor;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIShapes extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIShapes>;
						public getSrc(): string;
						public setMarkerEnd(param0: string): void;
						public getParams(): java.util.Map<string, any>;
						public setDashStyle(param0: string): void;
						public getHeight(): java.lang.Number;
						public getType(): string;
						public setR(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setType(param0: string): void;
						public setPoint(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint): void;
						public setMarkerStart(param0: string): void;
						public setFill(param0: com.highsoft.highcharts.common.HIColor): void;
						public getStroke(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setStrokeWidth(param0: java.lang.Number): void;
						public setWidth(param0: java.lang.Number): void;
						public getPoints(): com.highsoft.highcharts.common.hichartsclasses.HIPoints;
						public getMarkerEnd(): string;
						public setHeight(param0: java.lang.Number): void;
						public getMarkerStart(): string;
						public setSnap(param0: java.lang.Number): void;
						public getDashStyle(): string;
						public getStrokeWidth(): java.lang.Number;
						public setSrc(param0: string): void;
						public getWidth(): java.lang.Number;
						public setPoints(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoints): void;
						public getR(): java.lang.Number;
						public getSnap(): java.lang.Number;
						public getPoint(): com.highsoft.highcharts.common.hichartsclasses.HIPoint;
						public setStroke(param0: com.highsoft.highcharts.common.HIColor): void;
						public getFill(): com.highsoft.highcharts.common.HIColor;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISolidgauge extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISolidgauge>;
						public getRounded(): java.lang.Boolean;
						public getInnerRadius(): any;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setRounded(param0: java.lang.Boolean): void;
						public setOvershoot(param0: java.lang.Number): void;
						public setInnerRadius(param0: any): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getRadius(): any;
						public getOvershoot(): java.lang.Number;
						public setRadius(param0: any): void;
						public setColorByPoint(param0: java.lang.Boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISonification extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISonification>;
						public getPlayAsSoundButtonText(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getPlayAsSoundClickAnnouncement(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setPlayAsSoundButtonText(param0: string): void;
						public setPlayAsSoundClickAnnouncement(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISpline extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISpline>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIStackLabels extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIStackLabels>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public getParams(): java.util.Map<string, any>;
						public getAllowOverlap(): java.lang.Boolean;
						public setFormat(param0: string): void;
						public getEnabled(): java.lang.Boolean;
						public setBackgroundColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public getBorderRadius(): java.lang.Number;
						public getUseHTML(): java.lang.Boolean;
						public getCrop(): java.lang.Boolean;
						public getTextAlign(): string;
						public getVerticalAlign(): string;
						public setBorderRadius(param0: java.lang.Number): void;
						public setAllowOverlap(param0: java.lang.Boolean): void;
						public getFormat(): string;
						public setTextAlign(param0: string): void;
						public getRotation(): java.lang.Number;
						public getX(): java.lang.Number;
						public setUseHTML(param0: java.lang.Boolean): void;
						public constructor();
						public getBackgroundColor(): com.highsoft.highcharts.common.HIColor;
						public setOverflow(param0: string): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCrop(param0: java.lang.Boolean): void;
						public setFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getAlign(): string;
						public setEnabled(param0: java.lang.Boolean): void;
						public setAlign(param0: string): void;
						public getBorderWidth(): java.lang.Number;
						public getOverflow(): string;
						public getY(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setRotation(param0: java.lang.Number): void;
						public setVerticalAlign(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIStates extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIStates>;
						public setInactive(param0: com.highsoft.highcharts.common.hichartsclasses.HIInactive): void;
						public constructor();
						public getInactive(): com.highsoft.highcharts.common.hichartsclasses.HIInactive;
						public getParams(): java.util.Map<string, any>;
						public setHover(param0: com.highsoft.highcharts.common.hichartsclasses.HIHover): void;
						public setSelect(param0: com.highsoft.highcharts.common.hichartsclasses.HISelect): void;
						public getSelect(): com.highsoft.highcharts.common.hichartsclasses.HISelect;
						public setNormal(param0: com.highsoft.highcharts.common.hichartsclasses.HINormal): void;
						public getNormal(): com.highsoft.highcharts.common.hichartsclasses.HINormal;
						public getParams(): java.util.HashMap<string, any>;
						public getHover(): com.highsoft.highcharts.common.hichartsclasses.HIHover;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIStreamgraph extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIStreamgraph>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setNegativeFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getTrackByArea(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setFillOpacity(param0: java.lang.Number): void;
						public setTrackByArea(param0: java.lang.Boolean): void;
						public getNegativeFillColor(): com.highsoft.highcharts.common.HIColor;
						public getFillOpacity(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIStyle extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIStyle>;
						public getParams(): java.util.Map<string, any>;
						public setFontSize(param0: string): void;
						public setStroke(param0: string): void;
						public setFontWeight(param0: string): void;
						public getLineWidth(): java.lang.Number;
						public setLineWidth(param0: java.lang.Number): void;
						public getFontSize(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getBorderRadius(): java.lang.Number;
						public getTextOverflow(): string;
						public setTextOverflow(param0: string): void;
						public getWhiteSpace(): string;
						public setBorderRadius(param0: java.lang.Number): void;
						public setCursor(param0: string): void;
						public getFill(): string;
						public constructor();
						public setStrokeWidth(param0: java.lang.Number): void;
						public getColor(): string;
						public setWhiteSpace(param0: string): void;
						public getStroke(): string;
						public setTransition(param0: string): void;
						public getFontWeight(): string;
						public getTextOutline(): string;
						public setFill(param0: string): void;
						public getCursor(): string;
						public getStrokeWidth(): java.lang.Number;
						public setTextOutline(param0: string): void;
						public setColor(param0: string): void;
						public getTransition(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISubtitle extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISubtitle>;
						public setUseHTML(param0: java.lang.Boolean): void;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getFloating(): java.lang.Boolean;
						public getWidthAdjust(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public getText(): string;
						public getUseHTML(): java.lang.Boolean;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getVerticalAlign(): string;
						public getAlign(): string;
						public setWidthAdjust(param0: java.lang.Number): void;
						public setText(param0: string): void;
						public setAlign(param0: string): void;
						public getY(): java.lang.Number;
						public setFloating(param0: java.lang.Boolean): void;
						public setVerticalAlign(param0: string): void;
						public getX(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISummary extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISummary>;
						public setLine(param0: string): void;
						public getMapbubbleCombination(): string;
						public getMapbubble(): string;
						public getBarCombination(): string;
						public setBarCombination(param0: string): void;
						public setMapCombination(param0: string): void;
						public setScatter(param0: string): void;
						public setMaplineCombination(param0: string): void;
						public getLineCombination(): string;
						public getBoxplot(): string;
						public getLine(): string;
						public setDefaultCombination(param0: string): void;
						public constructor();
						public setMapbubble(param0: string): void;
						public getScatterCombination(): string;
						public getMapCombination(): string;
						public setColumn(param0: string): void;
						public setSplineCombination(param0: string): void;
						public getMapline(): string;
						public setMap(param0: string): void;
						public getPie(): string;
						public setMapbubbleCombination(param0: string): void;
						public getMaplineCombination(): string;
						public setSpline(param0: string): void;
						public getParams(): java.util.Map<string, any>;
						public setDefault(param0: string): void;
						public getScatter(): string;
						public getSplineCombination(): string;
						public getBoxplotCombination(): string;
						public setColumnCombination(param0: string): void;
						public setMapline(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
						public getBubble(): string;
						public getDefault(): string;
						public setLineCombination(param0: string): void;
						public getColumn(): string;
						public getBar(): string;
						public getSpline(): string;
						public getMap(): string;
						public setBar(param0: string): void;
						public setBoxplot(param0: string): void;
						public getBubbleCombination(): string;
						public setBubbleCombination(param0: string): void;
						public setPieCombination(param0: string): void;
						public setPie(param0: string): void;
						public setBoxplotCombination(param0: string): void;
						public setBubble(param0: string): void;
						public getColumnCombination(): string;
						public getDefaultCombination(): string;
						public setScatterCombination(param0: string): void;
						public getPieCombination(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HISunburst extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HISunburst>;
						public getRootId(): string;
						public getParams(): java.util.Map<string, any>;
						public setSlicedOffset(param0: java.lang.Number): void;
						public setLevelIsConstant(param0: java.lang.Boolean): void;
						public getLevels(): java.util.ArrayList<any>;
						public setTraverseUpButton(param0: com.highsoft.highcharts.common.hichartsclasses.HITraverseUpButton): void;
						public getSize(): any;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getLevelSize(): com.highsoft.highcharts.common.hichartsclasses.HILevelSize;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setAllowTraversingTree(param0: java.lang.Boolean): void;
						public getStartAngle(): java.lang.Number;
						public getColors(): java.util.ArrayList<string>;
						public getLevelIsConstant(): java.lang.Boolean;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public setRootId(param0: string): void;
						public getAllowTraversingTree(): java.lang.Boolean;
						public setLevelSize(param0: com.highsoft.highcharts.common.hichartsclasses.HILevelSize): void;
						public setCenter(param0: java.util.ArrayList<any>): void;
						public setLevels(param0: java.util.ArrayList<any>): void;
						public constructor();
						public setStartAngle(param0: java.lang.Number): void;
						public getSlicedOffset(): java.lang.Number;
						public getTraverseUpButton(): com.highsoft.highcharts.common.hichartsclasses.HITraverseUpButton;
						public setSize(param0: any): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public getCenter(): java.util.ArrayList<any>;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setColors(param0: java.util.ArrayList<string>): void;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITable extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITable>;
						public getTableSummary(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setViewAsDataTableButtonText(param0: string): void;
						public getViewAsDataTableButtonText(): string;
						public getParams(): java.util.HashMap<string, any>;
						public setTableSummary(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITargetOptions extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITargetOptions>;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public setWidth(param0: any): void;
						public getParams(): java.util.Map<string, any>;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getHeight(): java.lang.Number;
						public getWidth(): any;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.HashMap<string, any>;
						public setHeight(param0: java.lang.Number): void;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITextPath extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITextPath>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getAttributes(): com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes;
						public setEnabled(param0: java.lang.Boolean): void;
						public setAttributes(param0: com.highsoft.highcharts.common.hichartsclasses.HISVGAttributes): void;
						public getEnabled(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITheme extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITheme>;
						public getStroke(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setZIndex(param0: java.lang.Number): void;
						public getZIndex(): java.lang.Number;
						public getParams(): java.util.Map<string, any>;
						public setPadding(param0: java.lang.Number): void;
						public getPadding(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setFill(param0: com.highsoft.highcharts.common.HIColor): void;
						public setStroke(param0: com.highsoft.highcharts.common.HIColor): void;
						public getFill(): com.highsoft.highcharts.common.HIColor;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITilemap extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITilemap>;
						public setColsize(param0: java.lang.Number): void;
						public constructor();
						public setNullColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getParams(): java.util.Map<string, any>;
						public setRowsize(param0: java.lang.Number): void;
						public setTileShape(param0: string): void;
						public getRowsize(): java.lang.Number;
						public getTileShape(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getColsize(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public getPointPadding(): java.lang.Number;
						public getNullColor(): com.highsoft.highcharts.common.HIColor;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITime extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITime>;
						public getUseUTC(): java.lang.Boolean;
						public getTimezone(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getTimezoneOffset(): java.lang.Number;
						public getParams(): java.util.HashMap<string, any>;
						public setUseUTC(param0: java.lang.Boolean): void;
						public setTimezone(param0: string): void;
						public getDate(): any;
						public getGetTimezoneOffset(): com.highsoft.highcharts.core.HIFunction;
						public setTimezoneOffset(param0: java.lang.Number): void;
						public setGetTimezoneOffset(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setDate(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITimeline extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITimeline>;
						public getIgnoreHiddenPoint(): java.lang.Boolean;
						public constructor();
						public setLegendType(param0: string): void;
						public getParams(): java.util.Map<string, any>;
						public getLegendType(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public setIgnoreHiddenPoint(param0: java.lang.Boolean): void;
						public setColorByPoint(param0: java.lang.Boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITitle extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITitle>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public setSkew3d(param0: java.lang.Boolean): void;
						public getParams(): java.util.Map<string, any>;
						public getWidthAdjust(): java.lang.Number;
						public setPosition3d(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
						public setY(param0: java.lang.Number): void;
						public setX(param0: java.lang.Number): void;
						public getText(): string;
						public getUseHTML(): java.lang.Boolean;
						public getTextAlign(): string;
						public getVerticalAlign(): string;
						public getSkew3d(): java.lang.Boolean;
						public setWidthAdjust(param0: java.lang.Number): void;
						public getPosition3d(): string;
						public setMargin(param0: java.lang.Number): void;
						public setTextAlign(param0: string): void;
						public setFloating(param0: java.lang.Boolean): void;
						public getRotation(): java.lang.Number;
						public getX(): java.lang.Number;
						public setUseHTML(param0: java.lang.Boolean): void;
						public setOffset(param0: java.lang.Number): void;
						public constructor();
						public getFloating(): java.lang.Boolean;
						public getMargin(): java.lang.Number;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public getAlign(): string;
						public setReserveSpace(param0: java.lang.Boolean): void;
						public setText(param0: string): void;
						public setAlign(param0: string): void;
						public getOffset(): java.lang.Number;
						public getReserveSpace(): java.lang.Boolean;
						public getY(): java.lang.Number;
						public setRotation(param0: java.lang.Number): void;
						public setVerticalAlign(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITooltip extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITooltip>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public setHideDelay(param0: java.lang.Number): void;
						public defaultFormatter(param0: com.highsoft.highcharts.common.hichartsclasses.HITooltip): void;
						public destroy(): void;
						public getHeaderFormat(): string;
						public getValueSuffix(): string;
						public getEnabled(): java.lang.Boolean;
						public getShared(): java.lang.Boolean;
						public setNodeFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getBorderRadius(): java.lang.Number;
						public getFollowPointer(): java.lang.Boolean;
						public getNodeFormatter(): com.highsoft.highcharts.core.HIFunction;
						public setNodeFormat(param0: string): void;
						public getNullFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getPointFormatter(): com.highsoft.highcharts.core.HIFunction;
						public setValueSuffix(param0: string): void;
						public setNullFormat(param0: string): void;
						public setBorderRadius(param0: java.lang.Number): void;
						public getStickOnContact(): java.lang.Boolean;
						public getNullFormat(): string;
						public getHeaderShape(): string;
						public constructor();
						public setValueDecimals(param0: java.lang.Number): void;
						public setHeaderShape(param0: string): void;
						public getBackgroundColor(): com.highsoft.highcharts.common.HIColor;
						public setHeaderFormat(param0: string): void;
						public getFooterFormat(): string;
						public getNodeFormat(): string;
						public setBorderWidth(param0: java.lang.Number): void;
						public getFormatter(): com.highsoft.highcharts.core.HIFunction;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public setClusterFormat(param0: any): void;
						public getShape(): string;
						public setFooterFormat(param0: string): void;
						public getShadow(): java.lang.Boolean;
						public setFollowTouchMove(param0: java.lang.Boolean): void;
						public getLabel(): void;
						public getBorderWidth(): java.lang.Number;
						public getDistance(): java.lang.Number;
						public getValueDecimals(): java.lang.Number;
						public setValuePrefix(param0: string): void;
						public refreshByPoints(param0: java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIPoint>): void;
						public setXDateFormat(param0: string): void;
						public getParams(): java.util.Map<string, any>;
						public getPositioner(): com.highsoft.highcharts.core.HIFunction;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HITooltip): void;
						public setBackgroundColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setPointFormat(param0: string): void;
						public getDateTimeLabelFormats(): com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats;
						public setDistance(param0: java.lang.Number): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getUseHTML(): java.lang.Boolean;
						public setShared(param0: java.lang.Boolean): void;
						public setStickOnContact(param0: java.lang.Boolean): void;
						public setNullFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setDateTimeLabelFormats(param0: com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats): void;
						public setShape(param0: string): void;
						public setFollowPointer(param0: java.lang.Boolean): void;
						public setOutside(param0: java.lang.Boolean): void;
						public getSplit(): java.lang.Boolean;
						public setPositioner(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setUseHTML(param0: java.lang.Boolean): void;
						public hide(param0: java.lang.Number): void;
						public getFollowTouchMove(): java.lang.Boolean;
						public setShadow(param0: java.lang.Boolean): void;
						public getAnimation(): java.lang.Boolean;
						public getValuePrefix(): string;
						public getPadding(): java.lang.Number;
						public getPointFormat(): string;
						public hide(): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setSplit(param0: java.lang.Boolean): void;
						public setClassName(param0: string): void;
						public setFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public refreshByPoint(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint): void;
						public getClusterFormat(): any;
						public setSnap(param0: java.lang.Number): void;
						public getXDateFormat(): string;
						public setEnabled(param0: java.lang.Boolean): void;
						public getOutside(): java.lang.Boolean;
						public setPadding(param0: java.lang.Number): void;
						public setPointFormatter(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getHideDelay(): java.lang.Number;
						public setAnimation(param0: java.lang.Boolean): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getSnap(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITop extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITop>;
						public constructor();
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public getVisible(): any;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVisible(param0: any): void;
						public getSize(): java.lang.Number;
						public setSize(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITraverseUpButton extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITraverseUpButton>;
						public setPosition(param0: com.highsoft.highcharts.common.hichartsclasses.HIPosition): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getParams(): java.util.HashMap<string, any>;
						public getPosition(): com.highsoft.highcharts.common.hichartsclasses.HIPosition;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HITreemap extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HITreemap>;
						public getParams(): java.util.Map<string, any>;
						public setLevelIsConstant(param0: java.lang.Boolean): void;
						public getLevels(): java.util.ArrayList<any>;
						public setTraverseUpButton(param0: com.highsoft.highcharts.common.hichartsclasses.HITraverseUpButton): void;
						public getAlternateStartingDirection(): java.lang.Boolean;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getSortIndex(): java.lang.Number;
						public getLayoutAlgorithm(): string;
						public setSortIndex(param0: java.lang.Number): void;
						public setAllowTraversingTree(param0: java.lang.Boolean): void;
						public getCluster(): com.highsoft.highcharts.common.hichartsclasses.HICluster;
						public setInteractByLeaf(param0: java.lang.Boolean): void;
						public getColors(): java.util.ArrayList<string>;
						public getLevelIsConstant(): java.lang.Boolean;
						public setLayoutStartingDirection(param0: string): void;
						public getInteractByLeaf(): java.lang.Boolean;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getAllowTraversingTree(): java.lang.Boolean;
						public setLevels(param0: java.util.ArrayList<any>): void;
						public setCluster(param0: com.highsoft.highcharts.common.hichartsclasses.HICluster): void;
						public getIgnoreHiddenPoint(): java.lang.Boolean;
						public constructor();
						public getTraverseUpButton(): com.highsoft.highcharts.common.hichartsclasses.HITraverseUpButton;
						public setAlternateStartingDirection(param0: java.lang.Boolean): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public getLayoutStartingDirection(): string;
						public setIgnoreHiddenPoint(param0: java.lang.Boolean): void;
						public setLayoutAlgorithm(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIVariablepie extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIVariablepie>;
						public setInnerSize(param0: any): void;
						public getParams(): java.util.Map<string, any>;
						public getMinPointSize(): any;
						public setSlicedOffset(param0: java.lang.Number): void;
						public getSize(): any;
						public setEndAngle(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public setMaxPointSize(param0: any): void;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getStartAngle(): java.lang.Number;
						public setMinPointSize(param0: any): void;
						public setSizeBy(param0: string): void;
						public getColors(): java.util.ArrayList<string>;
						public setZMax(param0: java.lang.Number): void;
						public getMinSize(): any;
						public getEndAngle(): java.lang.Number;
						public setCenter(param0: java.util.ArrayList<any>): void;
						public getIgnoreHiddenPoint(): java.lang.Boolean;
						public constructor();
						public setStartAngle(param0: java.lang.Number): void;
						public getSlicedOffset(): java.lang.Number;
						public getDepth(): java.lang.Number;
						public setSize(param0: any): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public getCenter(): java.util.ArrayList<any>;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public getZMax(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public getZMin(): java.lang.Number;
						public setZMin(param0: java.lang.Number): void;
						public getMaxPointSize(): any;
						public getInnerSize(): any;
						public setMinSize(param0: any): void;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getSizeBy(): string;
						public setIgnoreHiddenPoint(param0: java.lang.Boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIVariwide extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIVariwide>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getMaxPointWidth(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setPointRange(param0: java.lang.Number): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIVector extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIVector>;
						public setCluster(param0: com.highsoft.highcharts.common.hichartsclasses.HICluster): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getCluster(): com.highsoft.highcharts.common.hichartsclasses.HICluster;
						public setRotationOrigin(param0: string): void;
						public setVectorLength(param0: java.lang.Number): void;
						public getRotationOrigin(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getVectorLength(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIVenn extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIVenn>;
						public setCluster(param0: com.highsoft.highcharts.common.hichartsclasses.HICluster): void;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getBorderDashStyle(): string;
						public getBrighten(): java.lang.Number;
						public getCluster(): com.highsoft.highcharts.common.hichartsclasses.HICluster;
						public setBorderDashStyle(param0: string): void;
						public setBrighten(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public setColorByPoint(param0: java.lang.Boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIWaterfall extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIWaterfall>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getEdgeWidth(): java.lang.Number;
						public setGroupZPadding(param0: java.lang.Number): void;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxPointWidth(): java.lang.Number;
						public getGroupZPadding(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public constructor();
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setPointRange(param0: java.lang.Number): void;
						public getDepth(): java.lang.Number;
						public getUpColor(): com.highsoft.highcharts.common.HIColor;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public setUpColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIWeek extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIWeek>;
						public getMain(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setMain(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIWindbarb extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIWindbarb>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public getEdgeWidth(): java.lang.Number;
						public setGroupZPadding(param0: java.lang.Number): void;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getVectorLength(): java.lang.Number;
						public getXOffset(): java.lang.Number;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPointRange(): java.lang.Number;
						public getOnSeries(): string;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getEdgeColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxPointWidth(): java.lang.Number;
						public setXOffset(param0: java.lang.Number): void;
						public setYOffset(param0: java.lang.Number): void;
						public getGroupZPadding(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setPointRange(param0: java.lang.Number): void;
						public getDepth(): java.lang.Number;
						public setVectorLength(param0: java.lang.Number): void;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setDataGrouping(param0: com.highsoft.highcharts.common.hichartsclasses.HIDataGrouping): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setDepth(param0: java.lang.Number): void;
						public setColors(param0: java.util.ArrayList<string>): void;
						public getYOffset(): java.lang.Number;
						public setEdgeColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public setOnSeries(param0: string): void;
						public getDataGrouping(): com.highsoft.highcharts.common.hichartsclasses.HIDataGrouping;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIWordcloud extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIWordcloud>;
						public setStyle(param0: com.highsoft.highcharts.common.hichartsclasses.HICSSObject): void;
						public getParams(): java.util.Map<string, any>;
						public getEdgeWidth(): java.lang.Number;
						public getMinFontSize(): java.lang.Number;
						public getMaxFontSize(): java.lang.Number;
						public setPlacementStrategy(param0: string): void;
						public setAllowExtendPlayingField(param0: java.lang.Boolean): void;
						public getSpiral(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public setRotation(param0: com.highsoft.highcharts.common.hichartsclasses.HIRotation): void;
						public getAllowExtendPlayingField(): java.lang.Boolean;
						public setSpiral(param0: string): void;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public getPlacementStrategy(): string;
						public constructor();
						public setMinFontSize(param0: java.lang.Number): void;
						public setMaxFontSize(param0: java.lang.Number): void;
						public getRotation(): com.highsoft.highcharts.common.hichartsclasses.HIRotation;
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public getStyle(): com.highsoft.highcharts.common.hichartsclasses.HICSSObject;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setEdgeWidth(param0: java.lang.Number): void;
						public getBorderWidth(): java.lang.Number;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIXAxis extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIXAxis>;
						public getMinorTickWidth(): java.lang.Number;
						public getZoomEnabled(): java.lang.Boolean;
						public setMinorGridLineDashStyle(param0: string): void;
						public renderTick(param0: java.lang.Number, param1: java.lang.Number): void;
						public setId(param0: string): void;
						public setExtremes(param0: java.lang.Number, param1: java.lang.Number, param2: boolean): void;
						public getLineWidth(): java.lang.Number;
						public removePlotLine(param0: string): void;
						public getMinorTicks(): java.lang.Boolean;
						public getGridLineWidth(): java.lang.Number;
						public setAllowDecimals(param0: java.lang.Boolean): void;
						public getPlotLines(): java.util.ArrayList<any>;
						public getMinorGridLineWidth(): java.lang.Number;
						public setGridLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setExtremes(): void;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIXAxis): void;
						public setReversed(param0: java.lang.Boolean): void;
						public constructor();
						public getMinorTickLength(): java.lang.Number;
						public getStartOnTick(): java.lang.Boolean;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setCategories(param0: java.util.ArrayList<string>): void;
						public drawCrosshair(): void;
						public setAlignTicks(param0: java.lang.Boolean): void;
						public setShowFirstLabel(param0: java.lang.Boolean): void;
						public getMinTickInterval(): java.lang.Number;
						public setMaxPadding(param0: java.lang.Number): void;
						public setTickPositioner(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setEndOnTick(param0: java.lang.Boolean): void;
						public getTickmarkPlacement(): string;
						public getSoftMin(): java.lang.Number;
						public getAngle(): java.lang.Number;
						public getTickAmount(): java.lang.Number;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIXAxis, param1: boolean): void;
						public getUnits(): java.util.ArrayList<java.util.ArrayList<any>>;
						public getMaxPadding(): java.lang.Number;
						public getTickColor(): com.highsoft.highcharts.common.HIColor;
						public getOpposite(): java.lang.Boolean;
						public setShowEmpty(param0: java.lang.Boolean): void;
						public setAxisTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle): void;
						public getParams(): java.util.Map<string, any>;
						public setTickmarkPlacement(param0: string): void;
						public setGridZIndex(param0: java.lang.Number): void;
						public setTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle): void;
						public getType(): string;
						public getGridLineInterpolation(): string;
						public getMinorGridLineDashStyle(): string;
						public setLeft(param0: any): void;
						public setLineWidth(param0: java.lang.Number): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getCeiling(): java.lang.Number;
						public getTickPositions(): java.util.ArrayList<java.lang.Number>;
						public setGridLineDashStyle(param0: string): void;
						public setMinTickInterval(param0: java.lang.Number): void;
						public setDateTimeLabelFormats(param0: com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats): void;
						public setHeight(param0: any): void;
						public getId(): string;
						public setGridLineInterpolation(param0: string): void;
						public setSoftMin(param0: java.lang.Number): void;
						public getMinorTickInterval(): any;
						public getLabels(): com.highsoft.highcharts.common.hichartsclasses.HILabels;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public setMinorTickWidth(param0: java.lang.Number): void;
						public getLinkedTo(): java.lang.Number;
						public setPane(param0: java.lang.Number): void;
						public setAxisTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle, param1: boolean): void;
						public getTickPositioner(): com.highsoft.highcharts.core.HIFunction;
						public getShowFirstLabel(): java.lang.Boolean;
						public setClassName(param0: string): void;
						public getTickPosition(): string;
						public setMinorGridLineWidth(param0: java.lang.Number): void;
						public setAngle(param0: java.lang.Number): void;
						public setStartOnTick(param0: java.lang.Boolean): void;
						public getShowLastLabel(): java.lang.Boolean;
						public setLinkedTo(param0: java.lang.Number): void;
						public setMinPadding(param0: java.lang.Number): void;
						public getOffset(): java.lang.Number;
						public setShowLastLabel(param0: java.lang.Boolean): void;
						public getUniqueNames(): java.lang.Boolean;
						public getPlotBands(): java.util.ArrayList<any>;
						public setTickInterval(param0: java.lang.Number): void;
						public getTickInterval(): java.lang.Number;
						public setTickPosition(param0: string): void;
						public getEndOnTick(): java.lang.Boolean;
						public setExtremes(param0: java.lang.Number, param1: java.lang.Number): void;
						public setZoomEnabled(param0: java.lang.Boolean): void;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public getMinorTickPosition(): string;
						public getMinRange(): java.lang.Number;
						public setType(param0: string): void;
						public addPlotLine(param0: com.highsoft.highcharts.common.hichartsclasses.HIPlotLines): void;
						public renderLine(): void;
						public getMinorGridLineColor(): com.highsoft.highcharts.common.HIColor;
						public getReversedStacks(): java.lang.Boolean;
						public getMinorTickColor(): com.highsoft.highcharts.common.HIColor;
						public getGridZIndex(): java.lang.Number;
						public getTop(): any;
						public getGridLineColor(): com.highsoft.highcharts.common.HIColor;
						public getShowEmpty(): java.lang.Boolean;
						public setReversedStacks(param0: java.lang.Boolean): void;
						public getTitle(): com.highsoft.highcharts.common.hichartsclasses.HITitle;
						public removePlotBand(param0: string): void;
						public renderMinorTick(param0: java.lang.Number): void;
						public getPane(): java.lang.Number;
						public setWidth(param0: any): void;
						public setUniqueNames(param0: java.lang.Boolean): void;
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getAlignTicks(): java.lang.Boolean;
						public getMin(): java.lang.Number;
						public getWidth(): any;
						public setCategories(param0: java.util.List<string>, param1: boolean): void;
						public setExtremes(param0: java.lang.Number): void;
						public getMargin(): java.lang.Number;
						public getHeight(): any;
						public setUnits(param0: java.util.ArrayList<java.util.ArrayList<any>>): void;
						public getAlternateGridColor(): com.highsoft.highcharts.common.HIColor;
						public setExtremes(param0: java.lang.Number, param1: java.lang.Number, param2: boolean, param3: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public setTickWidth(param0: java.lang.Number): void;
						public getTickLength(): java.lang.Number;
						public getCategories(): java.util.ArrayList<string>;
						public getCrosshair(): com.highsoft.highcharts.common.hichartsclasses.HICrosshair;
						public setMax(param0: java.lang.Number): void;
						public remove(): void;
						public setPlotBands(param0: java.util.ArrayList<any>): void;
						public setTop(param0: any): void;
						public getAllowDecimals(): java.lang.Boolean;
						public setTickPositions(): void;
						public setMinorGridLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVisible(param0: java.lang.Boolean): void;
						public getDateTimeLabelFormats(): com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats;
						public setMinorTickInterval(param0: any): void;
						public setMinorTickColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setTickColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public addPlotBand(param0: com.highsoft.highcharts.common.hichartsclasses.HIPlotBands): void;
						public getVisible(): java.lang.Boolean;
						public remove(param0: java.lang.Boolean): void;
						public setStartOfWeek(param0: java.lang.Number): void;
						public setGridLineWidth(param0: java.lang.Number): void;
						public getFloor(): java.lang.Number;
						public setFloor(param0: java.lang.Number): void;
						public setMargin(param0: java.lang.Number): void;
						public setCeiling(param0: java.lang.Number): void;
						public setTickPixelInterval(param0: java.lang.Number): void;
						public setCrosshair(param0: com.highsoft.highcharts.common.hichartsclasses.HICrosshair): void;
						public getTickPixelInterval(): java.lang.Number;
						public getBreaks(): java.util.ArrayList<any>;
						public setOffset(param0: java.lang.Number): void;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public setMinRange(param0: java.lang.Number): void;
						public setLabels(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels): void;
						public setPlotLines(param0: java.util.ArrayList<any>): void;
						public setTickLength(param0: java.lang.Number): void;
						public setMinorTicks(param0: java.lang.Boolean): void;
						public setMin(param0: java.lang.Number): void;
						public addTitle(param0: java.lang.Boolean): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public setMinorTickLength(param0: java.lang.Number): void;
						public setTickAmount(param0: java.lang.Number): void;
						public getReversed(): java.lang.Boolean;
						public setOpposite(param0: java.lang.Boolean): void;
						public setBreaks(param0: java.util.ArrayList<any>): void;
						public getLeft(): any;
						public getStartOfWeek(): java.lang.Number;
						public getSoftMax(): java.lang.Number;
						public setAlternateGridColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getTickWidth(): java.lang.Number;
						public setMinorTickPosition(param0: string): void;
						public hideCrosshair(): void;
						public getGridLineDashStyle(): string;
						public setSoftMax(param0: java.lang.Number): void;
						public getMinPadding(): java.lang.Number;
						public setTickPositions(param0: java.util.ArrayList<java.lang.Number>): void;
						public getMax(): java.lang.Number;
						public setCategories(param0: java.util.List<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIXrange extends com.highsoft.highcharts.common.hichartsclasses.HISeries {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIXrange>;
						public setMinPointLength(param0: java.lang.Number): void;
						public getMinPointLength(): java.lang.Number;
						public setGroupPadding(param0: java.lang.Number): void;
						public getParams(): java.util.Map<string, any>;
						public setGroupZPadding(param0: java.lang.Number): void;
						public setPointWidth(param0: java.lang.Number): void;
						public getParams(): java.util.HashMap<string, any>;
						public getColorByPoint(): java.lang.Boolean;
						public getBorderRadius(): java.lang.Number;
						public getPartialFill(): com.highsoft.highcharts.common.hichartsclasses.HIPartialFill;
						public getGroupPadding(): java.lang.Number;
						public setBorderRadius(param0: java.lang.Number): void;
						public getColors(): java.util.ArrayList<string>;
						public getMaxPointWidth(): java.lang.Number;
						public getGroupZPadding(): java.lang.Number;
						public setColorByPoint(param0: java.lang.Boolean): void;
						public getCenterInCategory(): java.lang.Boolean;
						public constructor();
						public setBorderWidth(param0: java.lang.Number): void;
						public getBorderColor(): com.highsoft.highcharts.common.HIColor;
						public setCenterInCategory(param0: java.lang.Boolean): void;
						public setMaxPointWidth(param0: java.lang.Number): void;
						public getPointWidth(): java.lang.Number;
						public setColors(param0: java.util.ArrayList<string>): void;
						public setGrouping(param0: java.lang.Boolean): void;
						public getBorderWidth(): java.lang.Number;
						public setPointPadding(param0: java.lang.Number): void;
						public setBorderColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getGrouping(): java.lang.Boolean;
						public getPointPadding(): java.lang.Number;
						public setPartialFill(param0: com.highsoft.highcharts.common.hichartsclasses.HIPartialFill): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIYAxis extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIYAxis>;
						public getMinorTickWidth(): java.lang.Number;
						public getZoomEnabled(): java.lang.Boolean;
						public setMinorGridLineDashStyle(param0: string): void;
						public renderTick(param0: java.lang.Number, param1: java.lang.Number): void;
						public setId(param0: string): void;
						public setExtremes(param0: java.lang.Number, param1: java.lang.Number, param2: boolean): void;
						public getLineWidth(): java.lang.Number;
						public removePlotLine(param0: string): void;
						public getGridLineWidth(): java.lang.Number;
						public getMinorTicks(): java.lang.Boolean;
						public setAllowDecimals(param0: java.lang.Boolean): void;
						public getPlotLines(): java.util.ArrayList<any>;
						public getMinorGridLineWidth(): java.lang.Number;
						public setGridLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setExtremes(): void;
						public setReversed(param0: java.lang.Boolean): void;
						public constructor();
						public getMinorTickLength(): java.lang.Number;
						public getStartOnTick(): java.lang.Boolean;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setCategories(param0: java.util.ArrayList<string>): void;
						public drawCrosshair(): void;
						public setAlignTicks(param0: java.lang.Boolean): void;
						public setShowFirstLabel(param0: java.lang.Boolean): void;
						public getMinTickInterval(): java.lang.Number;
						public setMaxPadding(param0: java.lang.Number): void;
						public setEndOnTick(param0: java.lang.Boolean): void;
						public setTickPositioner(param0: com.highsoft.highcharts.core.HIFunction): void;
						public getSoftMin(): java.lang.Number;
						public getTickmarkPlacement(): string;
						public getAngle(): java.lang.Number;
						public getTickAmount(): java.lang.Number;
						public getUnits(): java.util.ArrayList<java.util.ArrayList<any>>;
						public getMaxPadding(): java.lang.Number;
						public setStops(param0: java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIGradientColorStopObject>): void;
						public getTickColor(): com.highsoft.highcharts.common.HIColor;
						public getOpposite(): java.lang.Boolean;
						public setShowEmpty(param0: java.lang.Boolean): void;
						public setAxisTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle): void;
						public getParams(): java.util.Map<string, any>;
						public setTickmarkPlacement(param0: string): void;
						public setTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle): void;
						public setGridZIndex(param0: java.lang.Number): void;
						public getType(): string;
						public getStops(): java.util.ArrayList<com.highsoft.highcharts.common.hichartsclasses.HIGradientColorStopObject>;
						public getGridLineInterpolation(): string;
						public getMinorGridLineDashStyle(): string;
						public setLeft(param0: any): void;
						public setLineWidth(param0: java.lang.Number): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getCeiling(): java.lang.Number;
						public getTickPositions(): java.util.ArrayList<java.lang.Number>;
						public setGridLineDashStyle(param0: string): void;
						public setMinTickInterval(param0: java.lang.Number): void;
						public setDateTimeLabelFormats(param0: com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats): void;
						public setHeight(param0: any): void;
						public getId(): string;
						public setGridLineInterpolation(param0: string): void;
						public setSoftMin(param0: java.lang.Number): void;
						public getMinorTickInterval(): any;
						public getLabels(): com.highsoft.highcharts.common.hichartsclasses.HILabels;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public setMinorTickWidth(param0: java.lang.Number): void;
						public getLinkedTo(): java.lang.Number;
						public getStackLabels(): com.highsoft.highcharts.common.hichartsclasses.HIStackLabels;
						public setPane(param0: java.lang.Number): void;
						public setAxisTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle, param1: boolean): void;
						public getTickPositioner(): com.highsoft.highcharts.core.HIFunction;
						public getShowFirstLabel(): java.lang.Boolean;
						public setClassName(param0: string): void;
						public getTickPosition(): string;
						public setMinorGridLineWidth(param0: java.lang.Number): void;
						public setStartOnTick(param0: java.lang.Boolean): void;
						public setAngle(param0: java.lang.Number): void;
						public getShowLastLabel(): java.lang.Boolean;
						public setLinkedTo(param0: java.lang.Number): void;
						public setMinPadding(param0: java.lang.Number): void;
						public setShowLastLabel(param0: java.lang.Boolean): void;
						public getOffset(): java.lang.Number;
						public getUniqueNames(): java.lang.Boolean;
						public getPlotBands(): java.util.ArrayList<any>;
						public setTickInterval(param0: java.lang.Number): void;
						public getTickInterval(): java.lang.Number;
						public setTickPosition(param0: string): void;
						public getEndOnTick(): java.lang.Boolean;
						public setStackLabels(param0: com.highsoft.highcharts.common.hichartsclasses.HIStackLabels): void;
						public setTooltipValueFormat(param0: string): void;
						public setExtremes(param0: java.lang.Number, param1: java.lang.Number): void;
						public setZoomEnabled(param0: java.lang.Boolean): void;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public getMinorTickPosition(): string;
						public getMinRange(): java.lang.Number;
						public setType(param0: string): void;
						public addPlotLine(param0: com.highsoft.highcharts.common.hichartsclasses.HIPlotLines): void;
						public renderLine(): void;
						public getMinorGridLineColor(): com.highsoft.highcharts.common.HIColor;
						public getReversedStacks(): java.lang.Boolean;
						public getMinorTickColor(): com.highsoft.highcharts.common.HIColor;
						public getGridZIndex(): java.lang.Number;
						public getTop(): any;
						public getGridLineColor(): com.highsoft.highcharts.common.HIColor;
						public getTitle(): com.highsoft.highcharts.common.hichartsclasses.HITitle;
						public setReversedStacks(param0: java.lang.Boolean): void;
						public getShowEmpty(): java.lang.Boolean;
						public removePlotBand(param0: string): void;
						public renderMinorTick(param0: java.lang.Number): void;
						public setLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getPane(): java.lang.Number;
						public setWidth(param0: any): void;
						public setUniqueNames(param0: java.lang.Boolean): void;
						public getAlignTicks(): java.lang.Boolean;
						public getMin(): java.lang.Number;
						public getWidth(): any;
						public setCategories(param0: java.util.List<string>, param1: boolean): void;
						public setExtremes(param0: java.lang.Number): void;
						public getMargin(): java.lang.Number;
						public getHeight(): any;
						public setUnits(param0: java.util.ArrayList<java.util.ArrayList<any>>): void;
						public getAlternateGridColor(): com.highsoft.highcharts.common.HIColor;
						public setExtremes(param0: java.lang.Number, param1: java.lang.Number, param2: boolean, param3: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public setTickWidth(param0: java.lang.Number): void;
						public getTickLength(): java.lang.Number;
						public setMinColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getCategories(): java.util.ArrayList<string>;
						public getCrosshair(): com.highsoft.highcharts.common.hichartsclasses.HICrosshair;
						public setMax(param0: java.lang.Number): void;
						public remove(): void;
						public setPlotBands(param0: java.util.ArrayList<any>): void;
						public setTop(param0: any): void;
						public getAllowDecimals(): java.lang.Boolean;
						public setTickPositions(): void;
						public setMinorGridLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVisible(param0: java.lang.Boolean): void;
						public getDateTimeLabelFormats(): com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats;
						public setMinorTickInterval(param0: any): void;
						public getMinColor(): com.highsoft.highcharts.common.HIColor;
						public getMaxColor(): com.highsoft.highcharts.common.HIColor;
						public setMinorTickColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setTickColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public addPlotBand(param0: com.highsoft.highcharts.common.hichartsclasses.HIPlotBands): void;
						public getVisible(): java.lang.Boolean;
						public remove(param0: java.lang.Boolean): void;
						public setGridLineWidth(param0: java.lang.Number): void;
						public setStartOfWeek(param0: java.lang.Number): void;
						public getFloor(): java.lang.Number;
						public setFloor(param0: java.lang.Number): void;
						public setMargin(param0: java.lang.Number): void;
						public setCeiling(param0: java.lang.Number): void;
						public setTickPixelInterval(param0: java.lang.Number): void;
						public setCrosshair(param0: com.highsoft.highcharts.common.hichartsclasses.HICrosshair): void;
						public getTickPixelInterval(): java.lang.Number;
						public getBreaks(): java.util.ArrayList<any>;
						public getLineColor(): com.highsoft.highcharts.common.HIColor;
						public setOffset(param0: java.lang.Number): void;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIYAxis): void;
						public setMinRange(param0: java.lang.Number): void;
						public setLabels(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels): void;
						public setMin(param0: java.lang.Number): void;
						public setPlotLines(param0: java.util.ArrayList<any>): void;
						public setTickLength(param0: java.lang.Number): void;
						public setMinorTicks(param0: java.lang.Boolean): void;
						public addTitle(param0: java.lang.Boolean): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public setMinorTickLength(param0: java.lang.Number): void;
						public setTickAmount(param0: java.lang.Number): void;
						public getTooltipValueFormat(): string;
						public getReversed(): java.lang.Boolean;
						public setOpposite(param0: java.lang.Boolean): void;
						public setBreaks(param0: java.util.ArrayList<any>): void;
						public getLeft(): any;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIYAxis, param1: boolean): void;
						public getSoftMax(): java.lang.Number;
						public getStartOfWeek(): java.lang.Number;
						public setAlternateGridColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getTickWidth(): java.lang.Number;
						public setMinorTickPosition(param0: string): void;
						public hideCrosshair(): void;
						public setSoftMax(param0: java.lang.Number): void;
						public getGridLineDashStyle(): string;
						public getMinPadding(): java.lang.Number;
						public setMaxColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setTickPositions(param0: java.util.ArrayList<java.lang.Number>): void;
						public getMax(): java.lang.Number;
						public setCategories(param0: java.util.List<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIYear extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIYear>;
						public getMain(): string;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public setMain(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIZAxis extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIZAxis>;
						public getMinorTickWidth(): java.lang.Number;
						public getZoomEnabled(): java.lang.Boolean;
						public setMinorGridLineDashStyle(param0: string): void;
						public renderTick(param0: java.lang.Number, param1: java.lang.Number): void;
						public setId(param0: string): void;
						public setExtremes(param0: java.lang.Number, param1: java.lang.Number, param2: boolean): void;
						public removePlotLine(param0: string): void;
						public getMinorTicks(): java.lang.Boolean;
						public getGridLineWidth(): java.lang.Number;
						public setAllowDecimals(param0: java.lang.Boolean): void;
						public getPlotLines(): java.util.ArrayList<any>;
						public getMinorGridLineWidth(): java.lang.Number;
						public setGridLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setExtremes(): void;
						public setReversed(param0: java.lang.Boolean): void;
						public constructor();
						public getMinorTickLength(): java.lang.Number;
						public getStartOnTick(): java.lang.Boolean;
						public setEvents(param0: com.highsoft.highcharts.common.hichartsclasses.HIEvents): void;
						public setCategories(param0: java.util.ArrayList<string>): void;
						public drawCrosshair(): void;
						public setAlignTicks(param0: java.lang.Boolean): void;
						public setShowFirstLabel(param0: java.lang.Boolean): void;
						public getMinTickInterval(): java.lang.Number;
						public setMaxPadding(param0: java.lang.Number): void;
						public setTickPositioner(param0: com.highsoft.highcharts.core.HIFunction): void;
						public setEndOnTick(param0: java.lang.Boolean): void;
						public getTickmarkPlacement(): string;
						public getSoftMin(): java.lang.Number;
						public getAngle(): java.lang.Number;
						public getTickAmount(): java.lang.Number;
						public getUnits(): java.util.ArrayList<java.util.ArrayList<any>>;
						public getMaxPadding(): java.lang.Number;
						public getTickColor(): com.highsoft.highcharts.common.HIColor;
						public getOpposite(): java.lang.Boolean;
						public setAxisTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle): void;
						public getParams(): java.util.Map<string, any>;
						public setTickmarkPlacement(param0: string): void;
						public setGridZIndex(param0: java.lang.Number): void;
						public setTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle): void;
						public getType(): string;
						public getGridLineInterpolation(): string;
						public getMinorGridLineDashStyle(): string;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getCeiling(): java.lang.Number;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIZAxis, param1: boolean): void;
						public getTickPositions(): java.util.ArrayList<java.lang.Number>;
						public setGridLineDashStyle(param0: string): void;
						public setMinTickInterval(param0: java.lang.Number): void;
						public setDateTimeLabelFormats(param0: com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats): void;
						public getId(): string;
						public setGridLineInterpolation(param0: string): void;
						public setSoftMin(param0: java.lang.Number): void;
						public getMinorTickInterval(): any;
						public getLabels(): com.highsoft.highcharts.common.hichartsclasses.HILabels;
						public setAccessibility(param0: com.highsoft.highcharts.common.hichartsclasses.HIAccessibility): void;
						public setMinorTickWidth(param0: java.lang.Number): void;
						public getLinkedTo(): java.lang.Number;
						public setPane(param0: java.lang.Number): void;
						public setAxisTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HITitle, param1: boolean): void;
						public getTickPositioner(): com.highsoft.highcharts.core.HIFunction;
						public getShowFirstLabel(): java.lang.Boolean;
						public setClassName(param0: string): void;
						public getTickPosition(): string;
						public setMinorGridLineWidth(param0: java.lang.Number): void;
						public setAngle(param0: java.lang.Number): void;
						public setStartOnTick(param0: java.lang.Boolean): void;
						public getShowLastLabel(): java.lang.Boolean;
						public setLinkedTo(param0: java.lang.Number): void;
						public setMinPadding(param0: java.lang.Number): void;
						public getOffset(): java.lang.Number;
						public setShowLastLabel(param0: java.lang.Boolean): void;
						public getUniqueNames(): java.lang.Boolean;
						public getPlotBands(): java.util.ArrayList<any>;
						public setTickInterval(param0: java.lang.Number): void;
						public getTickInterval(): java.lang.Number;
						public setTickPosition(param0: string): void;
						public getEndOnTick(): java.lang.Boolean;
						public setExtremes(param0: java.lang.Number, param1: java.lang.Number): void;
						public setZoomEnabled(param0: java.lang.Boolean): void;
						public getAccessibility(): com.highsoft.highcharts.common.hichartsclasses.HIAccessibility;
						public getMinorTickPosition(): string;
						public getMinRange(): java.lang.Number;
						public setType(param0: string): void;
						public addPlotLine(param0: com.highsoft.highcharts.common.hichartsclasses.HIPlotLines): void;
						public renderLine(): void;
						public getMinorGridLineColor(): com.highsoft.highcharts.common.HIColor;
						public getReversedStacks(): java.lang.Boolean;
						public getMinorTickColor(): com.highsoft.highcharts.common.HIColor;
						public getGridZIndex(): java.lang.Number;
						public getGridLineColor(): com.highsoft.highcharts.common.HIColor;
						public setReversedStacks(param0: java.lang.Boolean): void;
						public getTitle(): com.highsoft.highcharts.common.hichartsclasses.HITitle;
						public removePlotBand(param0: string): void;
						public renderMinorTick(param0: java.lang.Number): void;
						public getPane(): java.lang.Number;
						public setUniqueNames(param0: java.lang.Boolean): void;
						public getAlignTicks(): java.lang.Boolean;
						public getMin(): java.lang.Number;
						public setCategories(param0: java.util.List<string>, param1: boolean): void;
						public setExtremes(param0: java.lang.Number): void;
						public getMargin(): java.lang.Number;
						public setUnits(param0: java.util.ArrayList<java.util.ArrayList<any>>): void;
						public getAlternateGridColor(): com.highsoft.highcharts.common.HIColor;
						public setExtremes(param0: java.lang.Number, param1: java.lang.Number, param2: boolean, param3: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
						public setTickWidth(param0: java.lang.Number): void;
						public getTickLength(): java.lang.Number;
						public getCategories(): java.util.ArrayList<string>;
						public setMax(param0: java.lang.Number): void;
						public remove(): void;
						public setPlotBands(param0: java.util.ArrayList<any>): void;
						public getAllowDecimals(): java.lang.Boolean;
						public setTickPositions(): void;
						public setMinorGridLineColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setVisible(param0: java.lang.Boolean): void;
						public getDateTimeLabelFormats(): com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats;
						public setMinorTickInterval(param0: any): void;
						public setMinorTickColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setTickColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public addPlotBand(param0: com.highsoft.highcharts.common.hichartsclasses.HIPlotBands): void;
						public getVisible(): java.lang.Boolean;
						public remove(param0: java.lang.Boolean): void;
						public setStartOfWeek(param0: java.lang.Number): void;
						public setGridLineWidth(param0: java.lang.Number): void;
						public getFloor(): java.lang.Number;
						public setFloor(param0: java.lang.Number): void;
						public setMargin(param0: java.lang.Number): void;
						public setCeiling(param0: java.lang.Number): void;
						public setTickPixelInterval(param0: java.lang.Number): void;
						public getTickPixelInterval(): java.lang.Number;
						public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIZAxis): void;
						public setOffset(param0: java.lang.Number): void;
						public setMinRange(param0: java.lang.Number): void;
						public setLabels(param0: com.highsoft.highcharts.common.hichartsclasses.HILabels): void;
						public setPlotLines(param0: java.util.ArrayList<any>): void;
						public setTickLength(param0: java.lang.Number): void;
						public setMinorTicks(param0: java.lang.Boolean): void;
						public setMin(param0: java.lang.Number): void;
						public addTitle(param0: java.lang.Boolean): void;
						public getEvents(): com.highsoft.highcharts.common.hichartsclasses.HIEvents;
						public setMinorTickLength(param0: java.lang.Number): void;
						public setTickAmount(param0: java.lang.Number): void;
						public getReversed(): java.lang.Boolean;
						public setOpposite(param0: java.lang.Boolean): void;
						public getStartOfWeek(): java.lang.Number;
						public getSoftMax(): java.lang.Number;
						public setAlternateGridColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getTickWidth(): java.lang.Number;
						public setMinorTickPosition(param0: string): void;
						public hideCrosshair(): void;
						public getGridLineDashStyle(): string;
						public setSoftMax(param0: java.lang.Number): void;
						public getMinPadding(): java.lang.Number;
						public setTickPositions(param0: java.util.ArrayList<java.lang.Number>): void;
						public getMax(): java.lang.Number;
						public setCategories(param0: java.util.List<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIZones extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIZones>;
						public constructor();
						public getTo(): java.lang.Number;
						public getColor(): com.highsoft.highcharts.common.HIColor;
						public getParams(): java.util.Map<string, any>;
						public setFrom(param0: java.lang.Number): void;
						public setDashStyle(param0: string): void;
						public setColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public getFrom(): java.lang.Number;
						public setValue(param0: java.lang.Number): void;
						public setClassName(param0: string): void;
						public getClassName(): string;
						public getParams(): java.util.HashMap<string, any>;
						public getFillColor(): com.highsoft.highcharts.common.HIColor;
						public setFillColor(param0: com.highsoft.highcharts.common.HIColor): void;
						public setMarker(param0: com.highsoft.highcharts.common.hichartsclasses.HIMarker): void;
						public getDashStyle(): string;
						public setTo(param0: java.lang.Number): void;
						public getValue(): java.lang.Number;
						public getMarker(): com.highsoft.highcharts.common.hichartsclasses.HIMarker;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module common {
				export module hichartsclasses {
					export class HIZoom extends com.highsoft.highcharts.core.HIFoundation {
						public static class: java.lang.Class<com.highsoft.highcharts.common.hichartsclasses.HIZoom>;
						public constructor();
						public getParams(): java.util.Map<string, any>;
						public getMapZoomOut(): string;
						public setMapZoomOut(param0: string): void;
						public getParams(): java.util.HashMap<string, any>;
						public getMapZoomIn(): string;
						public setResetZoomButton(param0: string): void;
						public setMapZoomIn(param0: string): void;
						public getResetZoomButton(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class HIChartContext {
					public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartContext>;
					public getProperty(param0: string): any;
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class HIChartView {
					public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView>;
					public theme: string;
					public plugins: java.util.List<string>;
					public lang: com.highsoft.highcharts.common.hichartsclasses.HILang;
					public global: com.highsoft.highcharts.common.hichartsclasses.HIGlobal;
					public i: java.util.Observer;
					public print(): void;
					public addSeries(param0: com.highsoft.highcharts.common.hichartsclasses.HISeries, param1: boolean, param2: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
					public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIOptions, param1: boolean, param2: boolean): void;
					public removeAnnotationById(param0: string): void;
					public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIOptions, param1: boolean): void;
					public cancelSonify(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOptions(param0: com.highsoft.highcharts.common.hichartsclasses.HIOptions): void;
					public addXAxis(param0: com.highsoft.highcharts.common.hichartsclasses.HIXAxis): void;
					public drillUp(): void;
					public getOptions(): com.highsoft.highcharts.common.hichartsclasses.HIOptions;
					public addSeries(param0: com.highsoft.highcharts.common.hichartsclasses.HISeries): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public setSonifyCursor(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint): void;
					public showLoading(param0: string): void;
					public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIOptions): void;
					public resetSonifyCursorEnd(): void;
					public cancelSonify(param0: boolean): void;
					public setSubtitle(param0: com.highsoft.highcharts.common.hichartsclasses.HISubtitle): void;
					public pauseSonify(param0: boolean): void;
					public setTitle(param0: com.highsoft.highcharts.common.hichartsclasses.HISubtitle, param1: com.highsoft.highcharts.common.hichartsclasses.HISubtitle, param2: boolean): void;
					public addSeries(param0: com.highsoft.highcharts.common.hichartsclasses.HISeries, param1: boolean): void;
					public setOnFocusChangeListener(param0: globalAndroid.view.View.OnFocusChangeListener): void;
					public addSeriesAsDrilldown(param0: com.highsoft.highcharts.common.hichartsclasses.HIPoint, param1: com.highsoft.highcharts.common.hichartsclasses.HISeries): void;
					public redraw(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
					public openInCloud(): void;
					public zoomOut(): void;
					public sonify(param0: java.util.Map<any, any>): void;
					public update(param0: com.highsoft.highcharts.common.hichartsclasses.HIOptions, param1: boolean, param2: boolean, param3: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
					public addCredits(param0: com.highsoft.highcharts.common.hichartsclasses.HICredits): void;
					public addFont(param0: number): void;
					public destroy(): void;
					public resetSonifyCursor(): void;
					public setSonifyCursor(param0: java.util.List<com.highsoft.highcharts.common.hichartsclasses.HIPoint>): void;
					public redraw(): void;
					public removeAnnotation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnnotations): void;
					public addAnnotation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnnotations): void;
					public addYAxis(param0: com.highsoft.highcharts.common.hichartsclasses.HIYAxis): void;
					public hideLoading(): void;
					public onMeasure(param0: number, param1: number): void;
					public viewData(): void;
					public reload(): void;
					public pauseSonify(): void;
					public constructor(param0: globalAndroid.content.Context);
					public addYAxis(param0: com.highsoft.highcharts.common.hichartsclasses.HIYAxis, param1: boolean, param2: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
					public addAnnotation(param0: com.highsoft.highcharts.common.hichartsclasses.HIAnnotations, param1: boolean): void;
					public addXAxis(param0: com.highsoft.highcharts.common.hichartsclasses.HIXAxis, param1: boolean): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public addXAxis(param0: com.highsoft.highcharts.common.hichartsclasses.HIXAxis, param1: boolean, param2: com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject): void;
					public addYAxis(param0: com.highsoft.highcharts.common.hichartsclasses.HIYAxis, param1: boolean): void;
				}
				export module HIChartView {
					export class a extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.a>;
					}
					export class a0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.a0>;
					}
					export class b extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.b>;
					}
					export class b0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.b0>;
					}
					export class c extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.c>;
					}
					export class c0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.c0>;
					}
					export class d extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.d>;
					}
					export class d0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.d0>;
					}
					export class e extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.e>;
					}
					export class e0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.e0>;
					}
					export class f extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.f>;
					}
					export class f0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.f0>;
					}
					export class g extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.g>;
					}
					export class g0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.g0>;
					}
					export class h extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.h>;
					}
					export class h0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.h0>;
					}
					export class i extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.i>;
					}
					export class i0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.i0>;
					}
					export class j extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.j>;
					}
					export class j0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.j0>;
					}
					export class k {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.k>;
						public onConsoleMessage(param0: globalAndroid.webkit.ConsoleMessage): boolean;
					}
					export class k0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.k0>;
					}
					export class l extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.l>;
					}
					export class l0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.l0>;
					}
					export class m extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.m>;
					}
					export class m0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.m0>;
					}
					export class n extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.n>;
					}
					export class n0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.n0>;
					}
					export class o extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.o>;
					}
					export class o0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.o0>;
					}
					export class p extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.p>;
					}
					export class p0 extends globalAndroid.webkit.ValueCallback<string> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.p0>;
						public a(param0: string): void;
					}
					export class q extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.q>;
					}
					export class q0 {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.q0>;
						public update(param0: java.util.Observable, param1: any): void;
					}
					export module q0 {
						export class a extends globalAndroid.webkit.ValueCallback<string> {
							public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.q0.a>;
							public a(param0: string): void;
						}
					}
					export class r extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.r>;
					}
					export class r0 extends globalAndroid.webkit.ValueCallback<string> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.r0>;
						public a(param0: string): void;
					}
					export class s extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.s>;
					}
					export class s0 extends globalAndroid.webkit.ValueCallback<string> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.s0>;
						public a(param0: string): void;
					}
					export class t extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.t>;
					}
					export class t0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.t0>;
					}
					export class u extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.u>;
					}
					export class u0 extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.u0>;
					}
					export class v {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.v>;
						public onConsoleMessage(param0: globalAndroid.webkit.ConsoleMessage): boolean;
					}
					export class w {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.w>;
						public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
					}
					export module w {
						export class a extends globalAndroid.webkit.ValueCallback<string> {
							public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.w.a>;
							public a(param0: string): void;
						}
					}
					export class x extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.x>;
					}
					export class y extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.y>;
					}
					export class z extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIChartView.z>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class HIConsumer<HIContext> extends java.lang.Object {
					public static class: java.lang.Class<com.highsoft.highcharts.core.HIConsumer<any>>;
					/**
					 * Constructs a new instance of the com.highsoft.highcharts.core.HIConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { accept(param0: HIContext): void });
					public constructor();
					public accept(param0: HIContext): void;
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export abstract class HIFoundation {
					public static class: java.lang.Class<com.highsoft.highcharts.core.HIFoundation>;
					public uuid: string;
					public jsClassMethod: java.util.Map<string, any>;
					public updateObserver: java.util.Observer;
					public constructor();
					public getParams(): java.util.Map<string, any>;
				}
				export module HIFoundation {
					export class a {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIFoundation.a>;
						public update(param0: java.util.Observable, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class HIFunction {
					public static class: java.lang.Class<com.highsoft.highcharts.core.HIFunction>;
					public constructor(param0: java.lang.Runnable);
					public constructor(param0: string);
					public constructor(param0: com.highsoft.highcharts.core.HIFunctionInterface<com.highsoft.highcharts.core.HIChartContext, string>, param1: native.Array<string>);
					public constructor(param0: com.highsoft.highcharts.core.HIConsumer<com.highsoft.highcharts.core.HIChartContext>, param1: native.Array<string>);
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class HIFunctionInterface<HIChartContext, String> extends java.lang.Object {
					public static class: java.lang.Class<com.highsoft.highcharts.core.HIFunctionInterface<any, any>>;
					/**
					 * Constructs a new instance of the com.highsoft.highcharts.core.HIFunctionInterface<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { apply(param0: HIChartContext): String });
					public constructor();
					public apply(param0: HIChartContext): String;
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class HIObservable {
					public static class: java.lang.Class<com.highsoft.highcharts.core.HIObservable>;
					public constructor();
				}
				export module HIObservable {
					export class a {
						public static class: java.lang.Class<com.highsoft.highcharts.core.HIObservable.a>;
						public update(param0: java.util.Observable, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class a {
					public static class: java.lang.Class<com.highsoft.highcharts.core.a>;
					public static a: java.util.Map<string, string>;
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class b {
					public static class: java.lang.Class<com.highsoft.highcharts.core.b>;
					public a(param0: globalAndroid.content.Context, param1: number): boolean;
					public a(): string;
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class c {
					public static class: java.lang.Class<com.highsoft.highcharts.core.c>;
					public androidReturnHandler(param0: string, param1: string): string;
					public androidHandler(param0: number, param1: string, param2: string): void;
				}
				export module c {
					export class a extends com.google.gson.reflect.TypeToken<java.util.Map<string, any>> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.c.a>;
					}
					export class b extends com.google.gson.reflect.TypeToken<java.util.Map<string, any>> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.c.b>;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class d {
					public static class: java.lang.Class<com.highsoft.highcharts.core.d>;
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class e {
					public static class: java.lang.Class<com.highsoft.highcharts.core.e>;
					public onDownloadStart(param0: string, param1: string, param2: string, param3: string, param4: number): void;
					public showDialog(): void;
				}
				export module e {
					export class a {
						public static class: java.lang.Class<com.highsoft.highcharts.core.e.a>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class f {
					public static class: java.lang.Class<com.highsoft.highcharts.core.f>;
					public c: string;
					public d: string;
					public e: string;
					public f: string;
					public h: string;
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class g {
					public static class: java.lang.Class<com.highsoft.highcharts.core.g>;
					public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
					public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): boolean;
					public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module highsoft {
		export module highcharts {
			export module core {
				export class h {
					public static class: java.lang.Class<com.highsoft.highcharts.core.h>;
				}
				export module h {
					export class a extends java.util.HashMap<string, java.util.HashMap<string, string>> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.h.a>;
					}
					export module a {
						export class a extends java.util.HashMap<string, string> {
							public static class: java.lang.Class<com.highsoft.highcharts.core.h.a.a>;
						}
						export class b extends java.util.HashMap<string, string> {
							public static class: java.lang.Class<com.highsoft.highcharts.core.h.a.b>;
						}
						export class c extends java.util.HashMap<string, string> {
							public static class: java.lang.Class<com.highsoft.highcharts.core.h.a.c>;
						}
						export class d extends java.util.HashMap<string, string> {
							public static class: java.lang.Class<com.highsoft.highcharts.core.h.a.d>;
						}
						export class e extends java.util.HashMap<string, string> {
							public static class: java.lang.Class<com.highsoft.highcharts.core.h.a.e>;
						}
						export class f extends java.util.HashMap<string, string> {
							public static class: java.lang.Class<com.highsoft.highcharts.core.h.a.f>;
						}
						export class g extends java.util.HashMap<string, string> {
							public static class: java.lang.Class<com.highsoft.highcharts.core.h.a.g>;
						}
						export class h extends java.util.HashMap<string, string> {
							public static class: java.lang.Class<com.highsoft.highcharts.core.h.a.h>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export const gson: any;
	}
	export module highsoft {
		export module highcharts {
			export module core {
				export class i {
					public static class: java.lang.Class<com.highsoft.highcharts.core.i>;
				}
				export module i {
					export class a {
						public static class: java.lang.Class<com.highsoft.highcharts.core.i.a>;
					}
					export class b extends com.google.gson.JsonSerializer<com.highsoft.highcharts.core.HIFunction> {
						public static class: java.lang.Class<com.highsoft.highcharts.core.i.b>;
						public a(param0: com.highsoft.highcharts.core.HIFunction, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
					}
				}
			}
		}
	}
}

//Generics information:
//com.highsoft.highcharts.core.HIConsumer:1
//com.highsoft.highcharts.core.HIFunctionInterface:2
