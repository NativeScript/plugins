declare class QBAlbumCell extends UITableViewCell {
    static alloc(): QBAlbumCell; // inherited from NSObject

    static appearance(): QBAlbumCell; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): QBAlbumCell; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBAlbumCell; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBAlbumCell; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBAlbumCell; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBAlbumCell; // inherited from UIAppearance

    static new(): QBAlbumCell; // inherited from NSObject

    borderWidth: number;

    countLabel: UILabel;

    imageView1: UIImageView;

    imageView2: UIImageView;

    imageView3: UIImageView;

    titleLabel: UILabel;
}

declare class QBAlbumsViewController extends UITableViewController {

    static alloc(): QBAlbumsViewController; // inherited from NSObject

    static new(): QBAlbumsViewController; // inherited from NSObject

    imagePickerController: QBImagePickerController;
}

declare class QBAssetCell extends UICollectionViewCell {

    static alloc(): QBAssetCell; // inherited from NSObject

    static appearance(): QBAssetCell; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): QBAssetCell; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBAssetCell; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBAssetCell; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBAssetCell; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBAssetCell; // inherited from UIAppearance

    static new(): QBAssetCell; // inherited from NSObject

    imageView: UIImageView;

    showsOverlayViewWhenSelected: boolean;

    videoIndicatorView: QBVideoIndicatorView;
}

declare class QBAssetsViewController extends UICollectionViewController {

    static alloc(): QBAssetsViewController; // inherited from NSObject

    static new(): QBAssetsViewController; // inherited from NSObject

    assetCollection: PHAssetCollection;

    imagePickerController: QBImagePickerController;
}

declare class QBCheckmarkView extends UIView {

    static alloc(): QBCheckmarkView; // inherited from NSObject

    static appearance(): QBCheckmarkView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): QBCheckmarkView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBCheckmarkView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBCheckmarkView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBCheckmarkView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBCheckmarkView; // inherited from UIAppearance

    static new(): QBCheckmarkView; // inherited from NSObject

    bodyColor: UIColor;

    borderColor: UIColor;

    borderWidth: number;

    checkmarkColor: UIColor;

    checkmarkLineWidth: number;
}

declare class QBImagePickerController extends UIViewController {

    static alloc(): QBImagePickerController; // inherited from NSObject

    static new(): QBImagePickerController; // inherited from NSObject

    allowsMultipleSelection: boolean;

    assetCollectionSubtypes: NSArray<any>;

    delegate: QBImagePickerControllerDelegate;

    maximumNumberOfSelection: number;

    mediaType: QBImagePickerMediaType;

    minimumNumberOfSelection: number;

    numberOfColumnsInLandscape: number;

    numberOfColumnsInPortrait: number;

    prompt: string;

    readonly selectedAssets: NSMutableOrderedSet<any>;

    showsNumberOfSelectedAssets: boolean;
}

interface QBImagePickerControllerDelegate extends NSObjectProtocol {

    qb_imagePickerControllerDidCancel?(imagePickerController: QBImagePickerController): void;

    qb_imagePickerControllerDidDeselectAsset?(imagePickerController: QBImagePickerController, asset: PHAsset): void;

    qb_imagePickerControllerDidFinishPickingAssets?(imagePickerController: QBImagePickerController, assets: NSArray<any>): void;

    qb_imagePickerControllerDidSelectAsset?(imagePickerController: QBImagePickerController, asset: PHAsset): void;

    qb_imagePickerControllerShouldSelectAsset?(imagePickerController: QBImagePickerController, asset: PHAsset): boolean;
}
declare var QBImagePickerControllerDelegate: {

    prototype: QBImagePickerControllerDelegate;
};

declare var QBImagePickerControllerVersionNumber: number;

declare var QBImagePickerControllerVersionString: interop.Reference<number>;

declare const enum QBImagePickerMediaType {

    Any = 0,

    Image = 1,

    Video = 2
}

declare class QBSlomoIconView extends UIView {

    static alloc(): QBSlomoIconView; // inherited from NSObject

    static appearance(): QBSlomoIconView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): QBSlomoIconView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBSlomoIconView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBSlomoIconView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBSlomoIconView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBSlomoIconView; // inherited from UIAppearance

    static new(): QBSlomoIconView; // inherited from NSObject

    iconColor: UIColor;
}

declare class QBVideoIconView extends UIView {

    static alloc(): QBVideoIconView; // inherited from NSObject

    static appearance(): QBVideoIconView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): QBVideoIconView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBVideoIconView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBVideoIconView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBVideoIconView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBVideoIconView; // inherited from UIAppearance

    static new(): QBVideoIconView; // inherited from NSObject

    iconColor: UIColor;
}

declare class QBVideoIndicatorView extends UIView {

    static alloc(): QBVideoIndicatorView; // inherited from NSObject

    static appearance(): QBVideoIndicatorView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): QBVideoIndicatorView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBVideoIndicatorView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBVideoIndicatorView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBVideoIndicatorView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBVideoIndicatorView; // inherited from UIAppearance

    static new(): QBVideoIndicatorView; // inherited from NSObject

    slomoIcon: QBSlomoIconView;

    timeLabel: UILabel;

    videoIcon: QBVideoIconView;
}
