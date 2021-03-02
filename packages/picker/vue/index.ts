import { PickerField } from '..';
import PickerComponent from './component';

const PickerPlugin = {
	install(Vue, options) {
		Vue.registerElement('PickerField', () => PickerField, {
			component: PickerComponent,
		});
	},
};

export default PickerPlugin;
