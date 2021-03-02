const VUE_VIEW = '__vueVNodeRef__';
import { KeyedTemplate } from '@nativescript/core';

export default {
	props: {
		items: {
			type: Array,
			required: true,
		},
		'+alias': {
			type: String,
			default: 'item',
		},
		'+index': {
			type: String,
		},
		_itemTemplateSelector: {
			type: Function,
			default: undefined,
		},
		_itemTemplatesInternal: Array<KeyedTemplate>(),
	},

	template: `
      <NativePickerField
        ref="picker"
        :items="items"
        v-bind="$attrs"
        v-on="$listeners"
        @itemLoading="onItemLoading"
      >
        <slot />
      </NativePickerField>
    `,

	watch: {
		items: {
			handler(newVal) {
				this.$refs.picker.setAttribute('items', newVal);
				this.refresh();
			},
			deep: true,
		},
	},

	created() {
		this.getItemContext = getItemContext.bind(this);
	},

	mounted() {},

	methods: {
		onItemLoading(args) {
			if (!this.$templates) {
				return;
			}

			// We need to setup the '_modalListView' with the templates from Vue
			if (this.$refs.picker._itemTemplatesInternal !== this.$refs.picker.nativeView._modalListView._itemTemplatesInternal) {
				this.$refs.picker.nativeView._modalListView._itemTemplatesInternal = this.$templates.getKeyedTemplates();
				this.$refs.picker._itemTemplatesInternal = this.$refs.picker.nativeView._modalListView._itemTemplatesInternal;
			}

			if (!this.$refs.picker._itemTemplateSelector || this.$refs.picker._itemTemplateSelector !== this.$refs.picker.nativeView._modalListView._itemTemplateSelector) {
				this.$refs.picker.nativeView._modalListView._itemTemplateSelector = (item: any, index: number) => {
					return this.$templates.selectorFn(this.getItemContext(item, index));
				};
				this.$refs.picker._itemTemplateSelector = this.$refs.picker.nativeView._modalListView._itemTemplateSelector;
			}

			const index = args.index;
			const items = args.object.items;
			const currentItem = typeof items.getItem === 'function' ? items.getItem(index) : items[index];
			const name = args.object._itemTemplateSelector(currentItem, index, items);
			const context = this.getItemContext(currentItem, index);
			const oldVnode = args.view && args.view[VUE_VIEW];
			args.view = this.$templates.patchTemplate(name, context, oldVnode);
		},
		refresh() {
			this.$refs.picker.nativeView.refresh();
		},
	},
};

function getItemContext(item, index, alias = this.$props['+alias'], index_alias = this.$props['+index']) {
	return {
		[alias]: item,
		[index_alias || '$index']: index,
		$even: index % 2 === 0,
		$odd: index % 2 !== 0,
	};
}
