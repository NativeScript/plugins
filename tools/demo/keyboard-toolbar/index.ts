/// <reference path="../../../packages/iqkeyboardmanager/index.d.ts" />
import { Dialogs, Page, TextView, isIOS } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { validate } from 'email-validator';
import {} from '@nativescript/keyboard-toolbar';

export class DemoSharedKeyboardToolbar extends DemoSharedBase {
	email: string;
	sliderValue = 0;
	showRob = false;
	showEddy = false;
	showTrumpsTies = false;

	// icons, see https://linearicons.com/free (click a pic for the hex code used below)
	iconCamera = String.fromCharCode(0xe826);
	iconTrash = String.fromCharCode(0xe811);
	iconPaperclip = String.fromCharCode(0xe819);
	iconPriceTag = String.fromCharCode(0xe82f);
	iconMicrophone = String.fromCharCode(0xe85e);
	iconDown = String.fromCharCode(0xe874);
	iconValid = String.fromCharCode(0xe87f);
	iconInvalid = String.fromCharCode(0xe880);
	iconExpand = String.fromCharCode(0xe88c);
	iconContract = String.fromCharCode(0xe88d);

	constructor(private page: Page) {
		super();

		// this suppresses IQKeyboardManager's toolbar (the one with < > and OK buttons)
		if (isIOS) {
			IQKeyboardManager.sharedManager().enableAutoToolbar = false;
		}

		// laughable code, I know, but it's just a quick demo
		setTimeout(() => {
			const textView = <TextView>this.page.getViewById('tv3');
			if (!textView) {
				return;
			}
			textView.on('textChange', (args: any) => {
				const text = textView.text;
				const words = text.split(' ');
				if (words.length === 0) {
					return;
				}
				const lastWord = words[words.length - 1].toLowerCase();

				this.set('showRob', false);
				this.set('showEddy', false);
				this.set('showTrumpsTies', false);
				if (lastWord.indexOf('@') > -1) {
					if ('@' === lastWord) {
						this.set('showRob', true);
						this.set('showEddy', true);
						this.set('showTrumpsTies', true);
					} else if ('@roblauer'.indexOf(lastWord) > -1) {
						this.set('showRob', true);
						this.set('showEddy', false);
						this.set('showTrumpsTies', false);
					} else if ('@eddyverbruggen'.indexOf(lastWord) > -1) {
						this.set('showRob', false);
						this.set('showEddy', true);
						this.set('showTrumpsTies', false);
					} else if ('@trumpsties'.indexOf(lastWord) > -1) {
						this.set('showRob', false);
						this.set('showEddy', false);
						this.set('showTrumpsTies', true);
					}
				}
			});
		}, 500);
	}

	setAmountInTextField(args: any): void {
		const textView = <TextView>this.page.getViewById('tf1');
		textView.text = args.object.value;
		this.positionCursorAtEnd(textView);
		textView.dismissSoftInput();
	}

	appendToTextView2(args: any): void {
		const textView = <TextView>this.page.getViewById('tv2');
		textView.text += ' ' + args.object.text + ' ';
		this.positionCursorAtEnd(textView);
	}

	emailOK(): boolean {
		return validate(this.email);
	}

	goToTv2(args: any): void {
		const textView = <TextView>this.page.getViewById('tv2');
		textView.focus();
		this.positionCursorAtEnd(textView);
	}

	appendToTextView3(args: any): void {
		const textView = <TextView>this.page.getViewById('tv3');
		let newText = textView.text;

		const words = textView.text.split(' ');
		if (words.length > 0) {
			const lastWord = words[words.length - 1].toLowerCase();
			if (args.object.text.startsWith(lastWord)) {
				words.pop();
				newText = words.join(' ');
			}
		}
		textView.text = (newText + ' ' + args.object.text).trim() + ' ';
		this.positionCursorAtEnd(textView);
	}

	showUserForTextView3(args: any): boolean {
		const textView = <TextView>this.page.getViewById('tv3');
		console.log(args.object.text);
		return textView.text.endsWith('@');
	}

	getSliderValue(): any {
		return this.sliderValue === undefined ? undefined : Math.round(this.sliderValue);
	}

	onTapTv1Camera(): void {
		Dialogs.action({
			title: 'Add a picture from..',
			cancelable: true,
			cancelButtonText: 'Cancel',
			actions: ['the camera', 'the photo album'],
		});
	}

	onTapTv1Trash(): void {
		const textView = <TextView>this.page.getViewById('tv1');
		textView.text = '';
	}

	onTapTv1Expand(): void {
		const textView = <TextView>this.page.getViewById('tv1');
		if ((textView.height as number) < 130) {
			(textView.height as number) += 10;
		} else {
			console.log('Text already expanded to the maximum we allow ;)');
		}
	}

	onTapTv1Contract(): void {
		const textView = <TextView>this.page.getViewById('tv1');
		if ((textView.height as number) > 30) {
			(textView.height as number) -= 10;
		} else {
			console.log('Text already contracted to the minimum we allow ;)');
		}
	}

	onTapTv2(): void {
		console.log('>> tapped tv2');
	}

	hideKeyboardTf1(): void {
		const textView = <TextView>this.page.getViewById('tf1');
		textView.dismissSoftInput();
	}

	hideKeyboardTf3(): void {
		const textView = <TextView>this.page.getViewById('tf3');
		textView.dismissSoftInput();
	}

	hideKeyboardTv1(): void {
		const textView = <TextView>this.page.getViewById('tv1');
		textView.dismissSoftInput();
	}

	hideKeyboardTv2(): void {
		const textView = <TextView>this.page.getViewById('tv2');
		textView.dismissSoftInput();
	}

	private positionCursorAtEnd(textView: TextView): void {
		if (textView.android) {
			textView.android.setSelection(textView.text.length);
		}
	}
}
