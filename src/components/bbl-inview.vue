<template>
	<div class="bbl-inview">
		<slot></slot>
	</div>
</template>

<script>
	const sr = require('scrollreveal')();

	export default {
		name: 'bblInview',
		props: {
			enter: {
			},
			leave: {
			},
			offset: {
				default: 0.2
			}
		},
		mounted: function() {
			var vm = this;
			setTimeout(function() {
				sr.reveal(vm.$el, {
					scale: 1,
					distance: 0,
					reset: true,
					viewFactor: parseFloat(vm.offset),
					opacity: 1,
					beforeReveal: function(el) {
						vm.$emit('enter');
					},
					beforeReset: function (el) {
						vm.$emit('leave');
					}
				});
			});
		}
	}
</script>

<style scoped lang="scss">
	.bbl-inview {
		transform: none !important;
	}
</style>
