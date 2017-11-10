<template>
	<div v-if="appear">
		<transition
			appear
			name="slide-in">
			<div
				class="u-visible-on-print"

				:style="{
					transitionDelay: delay + 'ms'
				}">

				<slot></slot>

			</div>
		</transition>
	</div>

	<div
		class="slide-in"
		v-else-if="!appear"

		:class="{
			'is-visible': state
		}"
		:style="{
			transitionDelay: delay + 'ms'
		}">
		<slot></slot>
	</div>

</template>

<script>

export default {
	name: 'imprSlideInAnimation',
	props: {
		delay: {
			default: 0
		},
		appear: {
			default: null
		},
		state: {
			type: Boolean
		}
	}
}
</script>

<style scoped lang="scss">
	.slide-in,
	.slide-in-enter-active, .slide-in-leave-active {
		transition: transform 550ms ease-out, opacity 650ms ease;

		will-change: transform;
	}

	.slide-in {
		opacity: 0;
		transform: translate3d(0, 20px, 0);

		&.is-visible {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	.slide-in-enter, .slide-in-leave-to {
		opacity: 0;
		transform: translate3d(0, 20px, 0);
	}
</style>
