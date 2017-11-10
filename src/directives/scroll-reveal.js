const sr = require('scrollreveal')();

const VueScrollReveal = {
	install(Vue) {
		Vue.directive('scroll-reveal', {
			inserted: (el, binding) => {
				const options = binding.value || {};

				options.scale = 1;
				options.distance = 0;

				sr.reveal(el, options);
			},
		});
	},
};

export default VueScrollReveal;