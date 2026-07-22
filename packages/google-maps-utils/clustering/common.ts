export interface IClusterManager<TClusterItem = any> {
	addItems: (clusterItems: TClusterItem[]) => void;
	addItem: (clusterItem: TClusterItem) => void;
	removeItems: (clusterItems: TClusterItem[]) => void;
	removeItem: (clusterItem: TClusterItem) => void;
	clearItems: () => void;
	cluster: () => void;
	setRenderer: (clusterRenderer: any) => void;
	android?: any;
	ios?: any;
	native?: any;
}
