declare class IQKeyboardReturnManager extends NSObject implements UITextFieldDelegate, UITextViewDelegate {
	static alloc(): IQKeyboardReturnManager; // inherited from NSObject

	static new(): IQKeyboardReturnManager; // inherited from NSObject

	delegate: any;

	dismissTextViewOnReturn: boolean;

	lastTextInputViewReturnKeyType: UIReturnKeyType;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	addResponderSubviewsOfRecursive(view: UIView, recursive: boolean): void;

	addWithTextInputView(textInputView: IQTextInputView): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	goToNextResponderOrResignFrom(textInputView: IQTextInputView): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeResponderSubviewsOfRecursive(view: UIView, recursive: boolean): void;

	removeWithTextInputView(textInputView: IQTextInputView): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	/**
	 * @since 11.0
	 */
	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	/**
	 * @since 3.2
	 */
	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	/**
	 * @since 3.2
	 */
	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	/**
	 * @since 5.0
	 */
	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	/**
	 * @since 13.0
	 */
	textFieldDidChangeSelection(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	/**
	 * @since 10.0
	 */
	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	/**
	 * @since 16.0
	 * @deprecated 100000
	 */
	textFieldEditMenuForCharactersInRangeSuggestedActions(textField: UITextField, range: NSRange, suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

	/**
	 * @since 26.0
	 */
	textFieldEditMenuForCharactersInRangesSuggestedActions(textField: UITextField, ranges: NSArray<NSValue> | NSValue[], suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

	/**
	 * @since 18.4
	 */
	textFieldInsertInputSuggestion(textField: UITextField, inputSuggestion: UIInputSuggestion): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	/**
	 * @since 2.0
	 * @deprecated 100000
	 */
	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	/**
	 * @since 26.0
	 */
	textFieldShouldChangeCharactersInRangesReplacementString(textField: UITextField, ranges: NSArray<NSValue> | NSValue[], string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;

	/**
	 * @since 16.0
	 */
	textFieldWillDismissEditMenuWithAnimator(textField: UITextField, animator: UIEditMenuInteractionAnimating): void;

	/**
	 * @since 16.0
	 */
	textFieldWillPresentEditMenuWithAnimator(textField: UITextField, animator: UIEditMenuInteractionAnimating): void;

	textViewDidBeginEditing(textView: UITextView): void;

	/**
	 * @since 18.0
	 */
	textViewDidBeginFormattingWithViewController(textView: UITextView, viewController: UITextFormattingViewController): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	/**
	 * @since 18.0
	 */
	textViewDidEndFormattingWithViewController(textView: UITextView, viewController: UITextFormattingViewController): void;

	/**
	 * @since 16.0
	 * @deprecated 100000
	 */
	textViewEditMenuForTextInRangeSuggestedActions(textView: UITextView, range: NSRange, suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

	/**
	 * @since 26.0
	 */
	textViewEditMenuForTextInRangesSuggestedActions(textView: UITextView, ranges: NSArray<NSValue> | NSValue[], suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

	/**
	 * @since 18.4
	 */
	textViewInsertInputSuggestion(textView: UITextView, inputSuggestion: UIInputSuggestion): void;

	/**
	 * @since 17.0
	 */
	textViewMenuConfigurationForTextItemDefaultMenu(textView: UITextView, textItem: UITextItem, defaultMenu: UIMenu): UITextItemMenuConfiguration;

	/**
	 * @since 17.0
	 */
	textViewPrimaryActionForTextItemDefaultAction(textView: UITextView, textItem: UITextItem, defaultAction: UIAction): UIAction;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	/**
	 * @since 2.0
	 * @deprecated 100000
	 */
	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	/**
	 * @since 26.0
	 */
	textViewShouldChangeTextInRangesReplacementText(textView: UITextView, ranges: NSArray<NSValue> | NSValue[], text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	/**
	 * @since 7.0
	 * @deprecated 10.0
	 */
	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	/**
	 * @since 10.0
	 * @deprecated 17.0
	 */
	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	/**
	 * @since 7.0
	 * @deprecated 10.0
	 */
	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	/**
	 * @since 10.0
	 * @deprecated 17.0
	 */
	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	/**
	 * @since 17.0
	 */
	textViewTextItemMenuWillDisplayForTextItemAnimator(textView: UITextView, textItem: UITextItem, animator: UIContextMenuInteractionAnimating): void;

	/**
	 * @since 17.0
	 */
	textViewTextItemMenuWillEndForTextItemAnimator(textView: UITextView, textItem: UITextItem, animator: UIContextMenuInteractionAnimating): void;

	/**
	 * @since 18.0
	 */
	textViewWillBeginFormattingWithViewController(textView: UITextView, viewController: UITextFormattingViewController): void;

	/**
	 * @since 16.0
	 */
	textViewWillDismissEditMenuWithAnimator(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;

	/**
	 * @since 18.0
	 */
	textViewWillEndFormattingWithViewController(textView: UITextView, viewController: UITextFormattingViewController): void;

	/**
	 * @since 16.0
	 */
	textViewWillPresentEditMenuWithAnimator(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;

	/**
	 * @since 18.0
	 */
	textViewWritingToolsDidEnd(textView: UITextView): void;

	/**
	 * @since 18.0
	 */
	textViewWritingToolsIgnoredRangesInEnclosingRange(textView: UITextView, enclosingRange: NSRange): NSArray<NSValue>;

	/**
	 * @since 18.0
	 */
	textViewWritingToolsWillBegin(textView: UITextView): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}
