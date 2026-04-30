declare class IQTextView extends UITextView implements IQPlaceholderable {
	static alloc(): IQTextView; // inherited from NSObject

	static appearance(): IQTextView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): IQTextView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQTextView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): IQTextView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQTextView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): IQTextView; // inherited from UIAppearance

	static new(): IQTextView; // inherited from NSObject

	/**
	 * @since 16.0
	 */
	static textViewUsingTextLayoutManager(usingTextLayoutManager: boolean): IQTextView; // inherited from UITextView

	readonly placeholderLabel: UILabel;

	placeholderTextColor: UIColor;

	attributedPlaceholder: NSAttributedString; // inherited from IQPlaceholderable

	placeholder: string; // inherited from IQPlaceholderable
}
