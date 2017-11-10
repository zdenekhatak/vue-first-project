// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// polyfills
import ArrayFind from './polyfills/array-find';
import WeakSet from './polyfills/weak-set';
ArrayFind();
WeakSet(window);

import VueScrollTo from 'vue-scrollto'
import VueScrollReveal from './directives/scroll-reveal';
import VueLazyImage from "vue-lazy-images";

import App from './App'
import bblInview from './components/bbl-inview'

import './styles/app.scss'

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(VueScrollReveal);
Vue.use(VueLazyImage, {
	throttle: 350,
	event: ['scroll', 'wheel', 'mousewheel', 'touchmove']
});

Vue.component('bbl-inview', bblInview);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
  	App
  }
});
