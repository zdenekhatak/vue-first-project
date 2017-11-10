<template>
	<div
		class="impr-bg-lines  u-no-print"
		:class="{
			'is-revealed': isRevealed
		}">
		<div class="__inner">
		</div>
	</div>
</template>

<script>

export default {
	name: 'imprBgLines',
	data() {
		return {
			isRevealed: false
		}
	},
	mounted: function() {
		setTimeout(() => {
			this.isRevealed = true
		}, 300);
	}
}
</script>

<style scoped lang="scss">
	.impr-bg-lines {
		position: absolute;
		top: 0; bottom: 0; left: 0;
		z-index: 2;

		height: 100%;
		width: 100%;

		pointer-events: none;

		transform: translateZ(0);

		&:before {
			content: '';
			position: absolute;
			top: 0; bottom: 0; left: 2 * $block;

			width: 1px;

			background: #f5f5f5;

			transform: scale(1, 0);
			transform-origin: 0 0;
			transition: transform 10000ms;
		}

		&.is-revealed {
			&:before {
				transform: scale(1, 1);
			}

			.__inner {
				transform: scale(1, 1);
			}
		}

		@include media-query('wider') {
			padding: 0 $bu;
		}

		@include media-query('portable') {
			&:before {
				display: none;
			}
		}

		@include media-query('palm') {
			&:before {
				display: none;
			}
		}

		@include media-query('palm-small') {
			display: none;
		}
	}

	.__inner {
		position: relative;
		left: 0;

		max-width: $max-width;
		width: 100%;
		height: 100%;
		margin: 0 auto;

		transform: scale(1, 0);
		transform-origin: 0 0;
		transition: transform 10000ms;

		&:before,
		&:after {
			content: '';

			position: absolute;
			z-index: -1;
			top: 0; bottom: 0;

			pointer-events: none;
			border-left: 1px solid #f5f5f5;
			border-right: 1px solid #f5f5f5;
		}

		&:before {
			left: 0;

			width: 100%;
		}

		&:after {
			left: $block;

			width: 2 * $block;
		}

		@include media-query('wider') {
			&:before {
				left: 0;
				right: 0;

				width: auto;
			}
		}

		@include media-query('portable') {
			&:after {
				left: $blockSmaller;

				width: $blockSmaller;
			}
		}

		@include media-query('palm') {
			&:after {
				display: none;
			}
		}
	}
</style>
