import { Observable, Length, Property, Template, booleanConverter, CSSType, View, EventData, TextField, Button, GestureEventData, ListView, ItemEventData, TemplatedItemsView, Page, ShownModallyData, fromObject, addWeakEventListener, removeWeakEventListener, ObservableArray, ChangedData, GridLayout, ActionItem, NavigationButton, Frame, ShowModalOptions, Builder, PropertyChangeData, GridUnitType, ItemSpec, isAndroid, StackLayout } from '@nativescript/core';

export interface ItemsSource {
	length: number;
	getItem(index: number): any;
	index: number;
}

Builder.knownTemplates.add('itemTemplate');

export interface PickerField {
	on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);
	on(event: 'itemLoading', callback: (args: ItemEventData) => void, thisArg?: any);
}

// Allow targeting PickerPage through CSS element selector
@CSSType('PickerPage')
export class PickerPage extends Page {}

let unfilteredSource: Array<any> = [];
let filtering: boolean = false;

@CSSType('PickerField')
export class PickerField extends TextField implements TemplatedItemsView {
	public static itemLoadingEvent = 'itemLoading';
	public focusOnShow: boolean;
	public showFilter: boolean;
	public enableSearch: boolean;
	public hintText: string;
	public pickerTitle: string;
	public items: any[];
	public _items: any[];
	public itemTemplate: string | Template;
	public modalAnimated: boolean;
	public textField: string;
	public valueField: string;
	public selectedValue: any;
	public selectedIndex: number;
	public iOSCloseButtonPosition: 'left' | 'right';
	public iOSCloseButtonIcon: number;
	public androidCloseButtonPosition: 'navigationButton' | 'actionBar' | 'actionBarIfRoom' | 'popup';
	public androidCloseButtonIcon: string;
	public static pickerOpenedEvent = 'pickerOpened';
	public static pickerClosedEvent = 'pickerClosed';

	private _searchBar: TextField;
	private _modalListView: ListView;
	private _modalRoot: Frame;
	private _page: Page;
	private _modalGridLayout: GridLayout;
	private closeCallback;
	private rowHeight: string;
	filterKeyName: any;

	constructor() {
		super();
		this.on(Button.tapEvent, this.tapHandler.bind(this));
	}

	disposeNativeView() {
		this.off(Button.tapEvent, this.tapHandler);
		super.disposeNativeView();
	}

	private createModalView() {
		this._modalRoot = new Frame();
		this._page = new PickerPage();
		this._modalListView = new ListView();
		this._modalGridLayout = new GridLayout();
		this._searchBar = new TextField();
		this.initModalView();
		this._page.content = this._modalGridLayout;
	}

	private disposeModalView() {
		if (this._modalRoot) {
			this.detachModalViewHandlers();
			this._modalRoot = undefined;
			this._page = undefined;
			this._modalListView = undefined;
			this._modalGridLayout = undefined;
			this._searchBar = undefined;
		}
	}

	private initModalView() {
		this.applyCssScope(this._page, true);

		if (this.pickerTitle && this.pickerTitle !== '') {
			this._page.actionBar.title = this.pickerTitle;
		} else {
			this._modalRoot.actionBarVisibility = 'always';
			this._page.actionBar.title = '';
		}

		this.applyCssScope(this._page.actionBar);

		const isNavigationButton = global.isAndroid && this.androidCloseButtonPosition === 'navigationButton';
		const closeButton = isNavigationButton ? new NavigationButton() : new ActionItem();

		closeButton.text = 'Close';
		closeButton.on(Button.tapEvent, () => {
			this.closeCallback();
		});
		this.applyCssScope(<any>closeButton);

		if (closeButton.ios) {
			closeButton.ios.position = this.iOSCloseButtonPosition;
			closeButton.ios.systemIcon = this.iOSCloseButtonIcon;
		}
		if (closeButton.android) {
			closeButton.android.systemIcon = this.androidCloseButtonIcon;
			closeButton.android.position = <any>this.androidCloseButtonPosition;
		}

		if (isNavigationButton) {
			this._page.actionBar.navigationButton = closeButton;
		} else {
			this._page.actionBar.actionItems.addItem(closeButton);
		}

		this._modalRoot.className = 'pickerRootModal';
		this._page.className = 'pickerPage';
		this._modalListView.className = 'pickerListView';
		this._modalGridLayout.className = 'pickerGridLayout';

		this._modalRoot.on(Page.shownModallyEvent, this.shownModallyHandler.bind(this));

		this._modalListView.on(ListView.itemLoadingEvent, this.listViewItemLoadingHandler.bind(this));
		this._modalListView.on(ListView.itemTapEvent, this.listViewItemTapHandler.bind(this));
		let items = [];
		this.items.forEach((item, index) => {
			item.__index__ = index;
			items.push(item);
		});

		this._modalListView.items = items;
		this.items = items;
		this._items = items;
		this._searchBar.on(TextField.textChangeEvent, this.textFieldChangeTapHandler.bind(this));
		this._searchBar.id = 'pickerSearchBar';
		this._searchBar.className = 'pickerSearchBar';
		if (this.hintText) {
			this._searchBar.hint = this.hintText;
		}
		if (this.showFilter && this.focusOnShow) {
			setTimeout(() => {
				if (isAndroid) {
					this._searchBar?.android?.requestFocus();
				} else {
					this._searchBar?.ios?.becomeFirstResponder();
				}
			}, 1000);
		}

		this.applyCssScope(this._modalGridLayout);
		//(<any>this._modalGridLayout).addChild(this._modalListView);

		const filterContainer = new StackLayout();
		filterContainer.id = 'searchBarContainer';
		filterContainer.className = 'searchBarContainer';
		filterContainer.addChild(this._searchBar);

		if (!this.showFilter) {
			filterContainer.visibility = 'collapse';
		}

		this._modalGridLayout.addRow(new ItemSpec(1, GridUnitType.AUTO));
		this._modalGridLayout.addRow(new ItemSpec(1, GridUnitType.STAR));
		this._modalGridLayout.addChildAtCell(filterContainer, 0, 0);
		this._modalGridLayout.addChildAtCell(this._modalListView, 1, 0);
	}

	private applyCssScope(view: View, transferClasses: Boolean = false) {
		const ngKey = Object.keys(this).find((key) => key.startsWith('_ngcontent'));
		const vueKey = Object.keys(this).find((key) => key.startsWith('data-v'));
		if (ngKey) {
			view[ngKey] = this[ngKey];
		}

		if (vueKey) {
			view[vueKey] = this[vueKey];
		}

		if (transferClasses && this.className) {
			let classNames = this.className.split(' ');
			classNames.forEach((element) => {
				view.cssClasses.add(element);
			});
		}
	}

	public showPicker(args: GestureEventData) {
		this.tapHandler(args);
	}

	public closePicker(args: EventData) {
		this._modalRoot.closeModal(this.closeCallback);
	}

	private detachModalViewHandlers() {
		this._modalRoot.off(Page.shownModallyEvent, this.shownModallyHandler.bind(this));
		this._modalListView.off(ListView.itemTapEvent, this.listViewItemTapHandler.bind(this));
		this._modalListView.off(ListView.itemLoadingEvent, this.listViewItemLoadingHandler.bind(this));
		this._searchBar.off(TextField.textChangeEvent, this.textFieldChangeTapHandler.bind(this));
	}

	private shownModallyHandler(args: ShownModallyData) {
		const context = args.context;
		this.closeCallback = args.closeCallback;
		const page: Page = <Page>args.object;
		page.bindingContext = fromObject(context);
	}

	private tapHandler(args: GestureEventData) {
		this.createModalView();
		this.updateListView();
		this.updateActionBarTitle();

		const context = this;
		const callback = (sender: View, selectedIndex: number) => {
			this.disposeModalView();
			let closedArgs = <EventData>{
				eventName: PickerField.pickerClosedEvent,
				object: this,
			};
			this.notify(closedArgs);
		};
		this._modalRoot.navigate(() => this._page);
		let modalOptions: ShowModalOptions = {
			context: context,
			closeCallback: callback,
			fullscreen: true,
			animated: this.modalAnimated,
		};
		this.showModal(this._modalRoot, modalOptions);

		let openedArgs = <EventData>{
			eventName: PickerField.pickerOpenedEvent,
			object: this,
		};
		this.notify(openedArgs);
	}

	private listViewItemTapHandler(args: ItemEventData) {
		try {
			if (args.index !== undefined) {
				let object = this.getDataItem(args.index);
				if (!this.showFilter) {
					this.selectedIndex = args.index;
				} else {
					this.selectedIndex = Object.values(this._items)?.indexOf(object);
				}
				this._updateSelectedValue(object);
			}

			this.items = this._items;
			this.closeCallback(args.view, this.selectedIndex || args.index);
		} catch (e) {
			console.error(e);
			this.closeCallback(args.view, args.index);
		}
	}

	private textFieldChangeTapHandler(data: any) {
		filtering = true;
		this.items = unfilteredSource.filter((item) => {
			if (item[this.filterKeyName]) {
				return item[this.filterKeyName].toString().toLowerCase().indexOf(data.value.toLowerCase()) !== -1;
			} else {
				return item.toString().toLowerCase().indexOf(data.value.toLowerCase()) !== -1;
			}
		});
		filtering = false;
	}

	private listViewItemLoadingHandler(args: ItemEventData) {
		return this.notify(args);
	}

	private getValueFromField(manipulatedProperty: string, propertyName: string, object: any): string {
		if (!propertyName) {
			return undefined;
		}

		if (object.hasOwnProperty(propertyName)) {
			return object[propertyName];
		}

		console.log(`Warning: Cannot update the '${manipulatedProperty}' property of PickerField. The '${propertyName}' property not found on the objects in the 'items' collection.`);
		return undefined;
	}

	public static rowHeightProperty = new Property<PickerField, string>({
		name: 'rowHeight',
		valueChanged: PickerField.rowHeightChanged,
	});

	public static modalAnimatedProperty = new Property<PickerField, boolean>({
		name: 'modalAnimated',
		defaultValue: true,
		valueConverter: booleanConverter,
		valueChanged: PickerField.modalAnimatedChanged,
	});

	private static modalAnimatedChanged(target: PickerField, oldValue, newValue) {
		target.onModalAnimatedPropertyChanged(oldValue, newValue);
	}

	static rowHeightChanged(target, oldValue, newValue) {
		target.onRowHeightPropertyChanged(oldValue, newValue);
	}

	public static selectedValueProperty = new Property<PickerField, any>({
		name: 'selectedValue',
		valueChanged: PickerField.selectedValueChanged,
	});

	private static selectedValueChanged(target: PickerField, oldValue, newValue) {
		target.onSelectedValuePropertyChanged(oldValue, newValue);
	}

	public static valueFieldProperty = new Property<PickerField, string>({
		name: 'valueField',
		valueChanged: PickerField.valueFieldChanged,
	});

	private static valueFieldChanged(target: PickerField, oldValue, newValue) {
		target.onValueFieldPropertyChanged(oldValue, newValue);
	}

	public static textFieldProperty = new Property<PickerField, string>({
		name: 'textField',
		valueChanged: PickerField.textFieldChanged,
	});

	private static textFieldChanged(target: PickerField, oldValue, newValue) {
		target.onTextFieldPropertyChanged(oldValue, newValue);
	}

	public static iOSCloseButtonPositionProperty = new Property<PickerField, 'left' | 'right'>({
		name: 'iOSCloseButtonPosition',
		defaultValue: 'right',
		valueChanged: PickerField.iOSCloseButtonPositionChanged,
	});

	private static iOSCloseButtonPositionChanged(target: PickerField, oldValue, newValue) {
		target.onIOSCloseButtonPositionPropertyChanged(oldValue, newValue);
	}

	public static iOSCloseButtonIconProperty = new Property<PickerField, number>({
		name: 'iOSCloseButtonIcon',
		defaultValue: 1,
		valueChanged: PickerField.iOSCloseButtonIconChanged,
	});

	private static iOSCloseButtonIconChanged(target: PickerField, oldValue, newValue) {
		target.onIOSCloseButtonIconPropertyChanged(oldValue, newValue);
	}

	public static androidCloseButtonPositionProperty = new Property<PickerField, 'actionBar' | 'actionBarIfRoom' | 'popup'>({
		name: 'androidCloseButtonPosition',
		defaultValue: 'actionBar',
		valueChanged: PickerField.androidCloseButtonPositionChanged,
	});

	private static androidCloseButtonPositionChanged(target: PickerField, oldValue, newValue) {
		target.onAndroidCloseButtonPositionPropertyChanged(oldValue, newValue);
	}

	public static androidCloseButtonIconProperty = new Property<PickerField, string>({
		name: 'androidCloseButtonIcon',
		defaultValue: 'ic_menu_close_clear_cancel',
		valueChanged: PickerField.androidCloseButtonIconChanged,
	});

	private static androidCloseButtonIconChanged(target: PickerField, oldValue, newValue) {
		target.onAndroidCloseButtonIconPropertyChanged(oldValue, newValue);
	}

	public static pickerTitleProperty = new Property<PickerField, string>({
		name: 'pickerTitle',
		defaultValue: undefined,
		valueChanged: PickerField.pickerTitleChanged,
	});

	private static pickerTitleChanged(target: PickerField, oldValue, newValue) {
		target.onPickerTitlePropertyChanged(oldValue, newValue);
	}

	public static itemTemplateProperty = new Property<PickerField, string | Template>({
		name: 'itemTemplate',
		defaultValue: undefined,
		valueChanged: PickerField.itemTemplateChanged,
	});

	public static focusOnShowProperty = new Property<PickerField, boolean>({
		name: 'focusOnShow',
		defaultValue: false,
		valueConverter: booleanConverter,
		valueChanged: PickerField.focusOnShowChanged,
	});

	private static focusOnShowChanged(target: PickerField, oldValue, newValue) {
		target.onFocusOnChanged(oldValue, newValue);
	}

	private onFocusOnChanged(toldValue, newValue) {
		this.focusOnShow = newValue;
	}

	public static showFilterProperty = new Property<PickerField, boolean>({
		name: 'hideFilter',
		defaultValue: false,
		valueConverter: booleanConverter,
		valueChanged: PickerField.showFilterChanged,
	});

	private static showFilterChanged(target: PickerField, oldValue, newValue) {
		target.onShowFilterChanged(oldValue, newValue);
	}

	private onShowFilterChanged(toldValue, newValue) {
		this.showFilter = newValue;
	}

	public static hintTextProperty = new Property<PickerField, string>({
		name: 'hintText',
		defaultValue: 'Enter text to filter...',
		valueChanged: PickerField.hintTextChanged,
	});

	private static hintTextChanged(target: PickerField, oldValue, newValue) {
		target.onHintTextChanged(oldValue, newValue);
	}

	private onHintTextChanged(toldValue, newValue) {
		this.hintText = newValue;
	}

	public static filterKeyNameProperty = new Property<PickerField, string>({
		name: 'filterKeyName',
		defaultValue: 'name',
		valueChanged: PickerField.filterKeyNameChanged,
	});

	private static filterKeyNameChanged(target: PickerField, oldValue, newValue) {
		target.onFilterKeyNameChanged(oldValue, newValue);
	}

	private onFilterKeyNameChanged(oldValue, newValue) {
		this.filterKeyName = newValue;
	}

	private static itemTemplateChanged(target: PickerField, oldValue, newValue) {
		target.onItemTemplatePropertyChanged(oldValue, newValue);
	}

	public static editableProperty = new Property<PickerField, boolean>({
		name: 'editable',
		defaultValue: false,
		valueConverter: booleanConverter,
		valueChanged: PickerField.editableChanged,
	});

	private static editableChanged(target: PickerField, oldValue, newValue) {
		target.onEditablePropertyChanged(oldValue, newValue);
	}

	public static itemsProperty = new Property<PickerField, any[] | ItemsSource>({
		name: 'items',
		valueChanged: PickerField.itemsChanged,
	});

	private static itemsChanged(target: PickerField, oldValue, newValue) {
		if (target && target._modalListView) {
			target._modalListView.items = newValue;
		}

		if (oldValue instanceof Observable) {
			removeWeakEventListener(oldValue, ObservableArray.changeEvent, target.onItemsChanged, target);
		}

		if (newValue instanceof Observable) {
			addWeakEventListener(newValue, ObservableArray.changeEvent, target.onItemsChanged, target);
		}

		if (target && target._modalListView) {
			target._modalListView.refresh();
		}

		if (!filtering) {
			while (unfilteredSource.length) unfilteredSource.pop();
			newValue.forEach((element) => {
				unfilteredSource.push(element);
			});
		}
	}

	private onItemsChanged(args: ChangedData<any>) {
		this.refresh();
	}

	private onSelectedValuePropertyChanged(oldValue: any, newValue: any) {
		this.onSelectedValueChanged(oldValue, newValue);
	}

	private onValueFieldPropertyChanged(oldValue: string, newValue: string) {
		this.onValueFieldChanged(oldValue, newValue);
	}

	private onRowHeightPropertyChanged(oldValue, newValue) {
		this.rowHeight = newValue;
	}

	private onTextFieldPropertyChanged(oldValue: string, newValue: string) {
		this.onTextFieldChanged(oldValue, newValue);
	}

	private onIOSCloseButtonPositionPropertyChanged(oldValue: 'left' | 'right', newValue: 'left' | 'right') {
		this.onIOSCloseButtonPositionChanged(oldValue, newValue);
	}

	private onIOSCloseButtonIconPropertyChanged(oldValue: number, newValue: number) {
		this.onIOSCloseButtonIconChanged(oldValue, newValue);
	}

	private onAndroidCloseButtonPositionPropertyChanged(oldValue: 'actionBar' | 'actionBarIfRoom' | 'popup', newValue: 'actionBar' | 'actionBarIfRoom' | 'popup') {
		this.onAndroidCloseButtonPositionChanged(oldValue, newValue);
	}

	private onAndroidCloseButtonIconPropertyChanged(oldValue: string, newValue: string) {
		this.onAndroidCloseButtonIconChanged(oldValue, newValue);
	}

	private onModalAnimatedPropertyChanged(oldValue: boolean, newValue: boolean) {
		this.onModalAnimatedChanged(oldValue, newValue);
	}

	private onPickerTitlePropertyChanged(oldValue: any, newValue: any) {
		this.onPickerTitleChanged(oldValue, newValue);
	}

	private onItemTemplatePropertyChanged(oldValue: string | Template, newValue: string | Template) {
		this.onItemTemplateChanged(oldValue, newValue);
	}

	private onEditablePropertyChanged(oldValue: boolean, newValue: boolean) {
		this.onEditableChanged(oldValue, newValue);
	}

	private getDataItem(index: number): any {
		return this.items[index];
	}

	private updateListView() {
		if (this._modalListView && this.itemTemplate) {
			this._modalListView.itemTemplate = this.itemTemplate;
			this._modalListView.rowHeight = Length.parse(this.rowHeight);
			this._modalListView.refresh();
		}
	}

	private updateActionBarTitle() {
		if (this._page && this._page.actionBar) {
			if (this.pickerTitle && this.pickerTitle !== '') {
				this._page.actionBar.title = this.pickerTitle;
			} else {
				this._modalRoot.actionBarVisibility = 'always';
				this._page.actionBar.title = '';
			}
		}
	}

	public refresh() {
		if (this._modalListView) {
			this._modalListView.refresh();
		}
	}

	private _updateSelectedValue(object: any) {
		let value = this.getValueFromField('selectedValue', this.valueField, object);
		this.selectedValue = value === undefined ? object : value;
	}

	private updatePickerText(object: any) {
		let textValue = this.getValueFromField('text', this.textField, object);
		textValue = textValue === undefined ? object : textValue;
		this.text = textValue;
	}

	protected onModalAnimatedChanged(oldValue: boolean, newValue: boolean) {}

	protected onSelectedValueChanged(oldValue: any, newValue: any) {
		if (this.hasItem(newValue)) {
			this.updatePickerText(newValue);
			return;
		}

		let dataItem = this.getObjectFromValue(this.valueField, newValue);
		if (dataItem) {
			this.updatePickerText(dataItem);
		} else {
			this.text = newValue;
		}
	}

	private getObjectFromValue(propertyName: string, value: any) {
		if (!propertyName) {
			return undefined;
		}

		if (this.items) {
			for (let i = 0; i < this.items.length; i++) {
				let item = this._getDataItem(i);
				if (item.hasOwnProperty(propertyName)) {
					let dataItemValue = item[propertyName];
					if (dataItemValue === value) {
						return item;
					}
				}
			}
		}

		return undefined;
	}

	private hasItem(object: any) {
		if (this.items) {
			for (let i = 0; i < this.items.length; i++) {
				let item = this._getDataItem(i);
				if (item === object) {
					return true;
				}
			}
		}

		return false;
	}

	private _getDataItem(index: number): any {
		return this.items[index];
	}

	protected onValueFieldChanged(oldValue: string, newValue: string) {}

	protected onTextFieldChanged(oldValue: string, newValue: string) {}

	protected onIOSCloseButtonPositionChanged(oldValue: 'left' | 'right', newValue: 'left' | 'right') {}

	protected onIOSCloseButtonIconChanged(oldValue: number, newValue: number) {}

	protected onAndroidCloseButtonPositionChanged(oldValue: 'actionBar' | 'actionBarIfRoom' | 'popup', newValue: 'actionBar' | 'actionBarIfRoom' | 'popup') {}

	protected onAndroidCloseButtonIconChanged(oldValue: string, newValue: string) {}

	protected onPickerTitleChanged(oldValue: string, newValue: string) {
		this.updateActionBarTitle();
	}

	protected onItemTemplateChanged(oldValue: string | Template, newValue: string | Template) {
		this.updateListView();
	}

	protected onEditableChanged(oldValue: boolean, newValue: boolean) {
		if (newValue) {
			console.log("PickerField does not support 'editable = true'");
		}
		this.editable = false;
	}
}

PickerField.filterKeyNameProperty.register(PickerField);
PickerField.focusOnShowProperty.register(PickerField);
PickerField.showFilterProperty.register(PickerField);
PickerField.hintTextProperty.register(PickerField);
PickerField.modalAnimatedProperty.register(PickerField);
PickerField.rowHeightProperty.register(PickerField);
PickerField.pickerTitleProperty.register(PickerField);
PickerField.itemTemplateProperty.register(PickerField);
PickerField.editableProperty.register(PickerField);
PickerField.itemsProperty.register(PickerField);
PickerField.textFieldProperty.register(PickerField);
PickerField.valueFieldProperty.register(PickerField);
PickerField.selectedValueProperty.register(PickerField);
PickerField.iOSCloseButtonPositionProperty.register(PickerField);
PickerField.iOSCloseButtonIconProperty.register(PickerField);
PickerField.androidCloseButtonPositionProperty.register(PickerField);
PickerField.androidCloseButtonIconProperty.register(PickerField);
