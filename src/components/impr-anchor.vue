<template>
	<div
		class="impr-anchor u-no-print"

		:class="{
			'is-top': adjust == 'top',
			'is-bottom': adjust == 'bottom',
			'is-animating': isAnimating,
			'is-scaled-down': isScaledDown

		}"
		v-scroll-to="{
			el: scrollToElement,
			cancelable: false,
			duration: 800
		}"
		@mouseover="onMouseOver"
		@mouseout="onMouseOut">
		<span class="o-text">
			{{ label }}
		</span>

		<span @animationiteration="animationEnd($event)" class="__line"></span>

	</div>
</template>

<script>
	export default {
		name: 'imprAnchor',
		props: {
			label: String,
			scrollToElement: String,
			adjust: {
				validator: function (value) {
					return value === 'bottom' || value === 'top';
				}
			}
		},
		data() {
			return {
				isAnimating: true,
				isScaledDown: false,
			}
		},
		methods: {
			animationEnd() {
				var vm = this;
				vm.isAnimating = false;

				if (vm.isHovered) {
					setTimeout(function() {
						vm.isScaledDown = true;
					}, 100);
				}

				setTimeout(function() {
					if (!vm.isHovered && !vm.isScaleDown) {
						vm.isScaledDown = false;
						vm.isAnimating = true;
					}
				}, 3500);
			},

			onMouseOver() {
				this.isHovered = true;

				if (!this.isAnimating) {
					this.isScaledDown = true;
				}
			},

			onMouseOut() {
				var vm = this;
				vm.isHovered = false;

				if (!vm.isAnimating) {
					vm.isScaledDown = false;
				}

				setTimeout(() => {
					vm.isAnimating = true;
				}, 400);
			}
		},
		mounted() {
			var vm = this;
		}
	}
</script>

<style scoped lang="scss">
	.impr-anchor {
		position: relative;
		z-index: 10;

		height: 160px;
		width: 120px;

		text-align: center;
		color: $text;
		font-weight: 600;
		text-transform: uppercase;
		cursor: pointer;

		transform: translateZ(0);

		&.is-scaled-down {
			.__line {
				transform: scale3d(1, 0.8, 1);

				transform-origin: center center;
			}
		}

		&.is-animating {
			.__line {
				animation: scrollMove 2500ms $animationTiming infinite;
			}
		}

		// label is on top
		&.is-top {
			.__line {
				bottom: 0;
			}
		}

		// label in on bottom
		&.is-bottom {
			padding-top: 120px;

			.__line {
				top: 0;

				animation-direction: reverse;
			}
		}

		@include media-query('palm') {
			.o-text {
				display: none;
			}

			.__line {
				height: 80px;

				animation: none !important;
			}

			&:before {
				content: '';

				position: absolute;
				bottom: 0;
				left: calc(50% - 7px);

				height: 14px;
				width: 14px;

				border: 2px solid $orange;
				border-top: 0;
				border-left: 0;

				transform: rotate(45deg);
				transition: border-color 400ms ease;
			}

			&.is-bottom {
				&:before {
					bottom: auto;
					top: 0;

					transform: rotate(-135deg);
				}
			}
		}
	}

		.__line {
			position: absolute;
			left: calc(50% - 1px);

			width: 2px;
			height: 112px;

			background: $orange;

			transition: transform 300ms ease 10ms;
			transform: translateZ(0);
		}

	@keyframes scrollMove {
		0% {
			transform: scale3d(1, 1, 1);
			transform-origin: center bottom
		}
		64% {
			transform: scale3d(1, 0, 1);
			transform-origin: center bottom
		}

		65% {
			transform: scale3d(1, 0, 1);
			transform-origin: center top
		}
		99% {
			transform: scale3d(1, 1, 1);
			transform-origin: center top
		}
		100% {
			transform: scale3d(1, 1, 1);
			transform-origin: center top
		}
	}
</style>
