export default {
	install(Vue) {
		Vue.registerElement('MapView', () => require('../').MapView);
	},
};
