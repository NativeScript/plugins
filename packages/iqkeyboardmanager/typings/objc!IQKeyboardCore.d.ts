declare const enum IQEnableMode {
	Default = 0,

	Enabled = 1,

	Disabled = 2,
}

interface IQTextInputView extends UITextInputTraits {
	inputAccessoryView: UIView;

	/**
	 * @since 16.0
	 */
	iqFindInteraction: UIFindInteraction;

	iqIsEnabled: boolean;

	/**
	 * @since 16.0
	 */
	iqIsFindInteractionEnabled: boolean;
}
declare var IQTextInputView: {
	prototype: IQTextInputView;
};
