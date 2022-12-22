import { Property, Template, TextField, ChangedData, ListView, TemplatedItemsView, ItemEventData, EventData } from '@nativescript/core';

export interface ItemsSource {
	length: number;
	getItem(index: number): any;
}

export interface PickerField {
	on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): any;
	on(event: 'itemLoading', callback: (args: ItemEventData) => void, thisArg?: any): any;
}

/**
 * Represents an TextField component which opens a list in a modal view to provide a selection TextField's 'text'.
 */
export class PickerField extends TextField implements TemplatedItemsView {
	/**
	 * String value used when hooking to itemLoading event.
	 */
	public static itemLoadingEvent: string;

	/**
	 * Show picker programatically
	 */
	public showPicker: Function;

	/**
	 * Set the `rowHeight` to the Listview
	 */
	public static rowHeight: string;

	/**
	 * Gets or sets the title of the modal view.
	 */
	public pickerTitle: string;

	/**
	 * Gets or sets the source collection used to populate the {@link ListView} of the modal view.
	 */
	public items: any[] | ItemsSource;

	/**
	 * Gets or sets the UI template for list view items of the {@link ListView} of the modal view.
	 */
	public itemTemplate: string | Template;

	/**
	 * Gets or sets the optional parameter specifying whether to show the modal view with animation.
	 */
	public modalAnimated: boolean;

	/**
	 * Gets or sets the 'property' of the object from the 'items' collection that will be used by the 'text' property of the {@link PickerField}.
	 */
	public textField: string;

	/**
	 * Gets or sets the 'property' of the object from the 'items' collection that will be used by when setting the 'selectedValue' property of the {@link PickerField}.
	 */
	public valueField: string;

	/**
	 * Gets or sets the object selected from the list in the modal view.
	 */
	public selectedValue: any;

	/**
	 * Gets the index of the object from the 'items' collection that has been selected from the list in the modal view.
	 */
	public selectedIndex: number;

	/**
	 * Gets or sets the position of the 'close' button of the ActionBar of the modal view.
	 */
	public iOSCloseButtonPosition: 'left' | 'right';

	/**
	 * Gets or sets the icon of the 'close' button of the ActionBar of the modal view.
	 */
	public iOSCloseButtonIcon: number;

	/**
	 * Gets or sets the position of the 'close' button of the ActionBar of the modal view.
	 */
	public androidCloseButtonPosition: 'navigationButton' | 'actionBar' | 'actionBarIfRoom' | 'popup';

	/**
	 * Gets or sets the icon of the 'close' button of the ActionBar of the modal view.
	 */
	public androidCloseButtonIcon: string;

	refresh();

	/**
	 * Identifies the {@link modalAnimated} dependency property.
	 */
	static modalAnimatedProperty: Property<PickerField, boolean>;

	/**
	 * Identifies the {@link textField} dependency property.
	 */
	static textFieldProperty: Property<PickerField, string>;

	/**
	 * Identifies the {@link rowHeight} dependency property.
	 */
	static rowHeightProperty: Property<PickerField, string>;

	/**
	 * Identifies the {@link iOSCloseButtonPosition} dependency property.
	 */
	static iOSCloseButtonPositionProperty: Property<PickerField, 'left' | 'right'>;

	/**
	 * Identifies the {@link iOSCloseButtonIcon} dependency property.
	 */
	static iOSCloseButtonIconProperty: Property<PickerField, number>;

	/**
	 * Identifies the {@link androidCloseButtonPosition} dependency property.
	 */
	static androidCloseButtonPositionProperty: Property<PickerField, 'actionBar' | 'actionBarIfRoom' | 'popup'>;

	/**
	 * Identifies the {@link androidCloseButtonIcon} dependency property.
	 */
	static androidCloseButtonIconProperty: Property<PickerField, string>;

	/**
	 * Identifies the {@link pickerTitle} dependency property.
	 */
	static pickerTitleProperty: Property<PickerField, string>;

	/**
	 * Identifies the {@link itemTemplate} dependency property.
	 */
	static itemTemplateProperty: Property<PickerField, string | Template>;

	/**
	 * Identifies the {@link editable} dependency property.
	 */
	static editableProperty: Property<PickerField, boolean>;

	/**
	 * Identifies the {@link items} dependency property.
	 */
	static itemsProperty: Property<PickerField, any[] | ItemsSource>;

	/**
	 * Identifies the {@link valueField} dependency property.
	 */
	static valueFieldProperty: Property<PickerField, string>;

	/**
	 * Identifies the {@link selectedValue} dependency property.
	 */
	static selectedValueProperty: Property<PickerField, any>;
}
