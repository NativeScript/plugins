import { EventData, Page, ScrollView, TextView, View } from '@nativescript/core';
import { DemoSharedInputAccessory } from '@demo/shared';
import { InputAccessoryManager } from '@nativescript/input-accessory';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedInputAccessory {
	private accessoryManager: InputAccessoryManager | null = null;
	private textView: TextView | null = null;
	private page: Page;
	private isAccessorySetup = false;
	private inputText = '';

	constructor(page: Page) {
		super();
		this.page = page;

		this.set('inputText', '');
		this.set('messages', [
			'Welcome to @nativescript/input-accessory 👋',
			'Tap in the field below to attach the input to the keyboard.',
			'Type and press Send to append messages while tracking keyboard transitions.',
			'Random thought: pineapple absolutely belongs on pizza. 🍍',
			'Just testing long text wrapping in this message bubble for layout stability.',
			'Keyboard animation looks smooth on both platforms so far.',
			'Reminder: drink water and stretch every hour 💧',
			'If this were a real chat, someone would definitely send a GIF here.',
			'This plugin is perfect for support chats and comment threads.',
			'Interactive dismiss feels super natural when dragging the list.',
			'Quick check-in: are we shipping this in the next release?',
			'Edge case test: message count should keep scrolling correctly.',
			'Last seeded message: ready for your own typing test 🚀',
		]);

		this.page.on(Page.loadedEvent, () => {
			setTimeout(() => this.setupAccessory(), 100);
		});

		this.page.on(Page.navigatingFromEvent, () => {
			this.accessoryManager?.cleanup();
			this.accessoryManager = null;
			this.isAccessorySetup = false;
		});
	}

	onMessageInputLoaded(args: EventData) {
		this.textView = args.object as TextView;
		this.setupAccessory();
	}

	onMessageTextChange() {
		this.inputText = this.textView?.text || '';
		this.accessoryManager?.updateAccessoryHeight();
	}

	onMessageReturnPress() {
		this.sendMessage();
	}

	sendMessage() {
		const inputText = (this.inputText || '').trim();
		if (!inputText) {
			return;
		}

		this.appendMessage(`You: ${inputText}`);
		this.set('inputText', '');
		this.inputText = '';
	}

	dismissKeyboard() {
		this.accessoryManager?.dismissKeyboard();
	}

	private setupAccessory() {
		if (this.isAccessorySetup || !this.textView) {
			return;
		}

		const scrollView = this.page.getViewById<ScrollView>('messagesScrollView');
		const inputContainer = this.page.getViewById<View>('inputContainer');

		if (!scrollView || !inputContainer) {
			setTimeout(() => this.setupAccessory(), 100);
			return;
		}

		this.accessoryManager = new InputAccessoryManager();
		this.accessoryManager.setup({
			page: this.page,
			scrollView,
			inputContainer,
			textView: this.textView,
		});

		this.isAccessorySetup = true;
		this.scrollToBottom();
	}

	private appendMessage(message: string) {
		const currentMessages = (this.get('messages') as string[]) || [];
		this.set('messages', [...currentMessages, message]);
		this.scrollToBottom();
	}

	private scrollToBottom() {
		setTimeout(() => {
			this.accessoryManager?.updateAccessoryHeight();
			this.accessoryManager?.relayoutScrollViewContent();
			const scrollView = this.page.getViewById<ScrollView>('messagesScrollView');
			scrollView?.scrollToVerticalOffset(scrollView.scrollableHeight, true);
		}, 100);
	}
}
