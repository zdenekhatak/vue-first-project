<template>
	<div v-if="appear">
		<transition
			appear
			name="fade-in">
			<div
				class="u-visible-on-print"

				:style="{
					transitionDelay: delay + 'ms',
					transitionDuration: duration + 'ms'
				}">

				<slot></slot>

			</div>
		</transition>
	</div>

	<div
		class="fade-in"
		v-else-if="!appear"

		:class="{
			'is-visible': state
		}"
		:style="{
			transitionDelay: delay + 'ms',
			transitionDuration: duration + 'ms'
		}">
		<slot></slot>
	</div>

</template>

<script>

export default {
	name: 'imprFadeInAnimation',
	props: {
		delay: {
			default: 0
		},
		duration: {
			default: 800
		},
		appear: {
			default: false
		},
		state: {
			type: Boolean
		}
	}
}
</script>

<style scoped lang="scss">
	.fade-in,
	.fade-in-enter-active, .fade-in-leave-active {
		transition: opacity 400ms $animationTiming;
		transition-timing-function: $animationTiming;

		will-change: opacity;
	}

	.fade-in {
		opacity: 0;

		&.is-visible {
			opacity: 1;
		}
	}

	.fade-in-enter, .fade-in-leave-to {
		opacity: 0;
	}
</style>
