<template>
	<div class="impr-link-button">
		<div class="__content">
			<slot></slot>
		</div>
		<span class="__line"></span>
	</div>

</template>

<script>
	export default {
		name: 'imprLinkButton'
	}
</script>

<style scoped lang="scss">
	$basicAdjustLine: 20px;
	$hoverAdjustLine: 45px;

	.impr-link-button {
		position: relative;

		display: inline-block;

		text-transform: uppercase;
		text-decoration: none;
		font-size: 15px;
		font-weight: 600;
		letter-spacing: 0.06em;
		cursor: pointer;

		&:hover {
			a {
				color: black;
			}

			.__line {
				transform: translateX(0);

				&:after {
					background: black;

					transform: translateX(-$hoverAdjustLine);
				}
			}
		}

		@include media-query('palm') {
			a {
				padding: 3px 0;
			}

			.__line {
				width: 20px;
				right: -20px;
				left: auto;

				transform: translateX(0);
			}

			&:hover {
				.__line {
					&:after {
						transform: translateX($basicAdjustLine);
					}
				}
			}
		}
	}

	.__content {
		position: relative;
		z-index: 1;

		background-color: rgba(255, 255, 255, 0.6);
	}

	.__line {
		position: absolute;
		top: 50%;
		left: 0;
		z-index: 0;

		margin-top: -1px;
		width: 100%;
		height: 2px;

		pointer-events: none;

		transition: transform 400ms $animationTiming;
		transform: translateX(100%);

		&:after {
			content: '';

			position: absolute;
			left: 0;
			z-index: -1;

			width: 30px;
			height: 100%;

			background: $orange;

			transition: transform 400ms $animationTiming, background 600ms ease;
			transform: translateX($basicAdjustLine);
		}
	}
</style>
