<template>
	<transition-group appear name="list-complete">
		<span
			v-for="item in data"
			v-bind:key="item"

			class="list-complete-item">
			<span
				class="list-complete-item__animate"
				v-html="item">
			</span>
		</span>
	</transition-group>
</template>

<script>

export default {
	name: 'imprStaggerAnimation',
	props: ['data']
}
</script>

<style scoped lang="scss">
	.list-complete-item {
		display: block;

		overflow: hidden;

		&:nth-child(1) {
			.list-complete-item__animate {
				transition-delay: 420ms;
			}
		}

		&:nth-child(2) {
			.list-complete-item__animate {
				transition-delay: 360ms;
			}
		}

		&:nth-child(3) {
			.list-complete-item__animate {
				transition-delay: 250ms;
			}
		}

		.list-complete-item__animate {
			display: block;

			transform: rotate(0deg) translate3d(0, 0, 0);
			transform-origin: left bottom;
			transition: transform 740ms $animationTiming;

			will-change: transform;
		}
	}

	.list-complete-enter {
		.list-complete-item__animate {
			transform: rotate(4deg) translate3d(0, 100%, 0);
		}
	}
</style>
