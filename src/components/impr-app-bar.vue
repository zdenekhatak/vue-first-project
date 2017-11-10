<template>
	<div class="impr-app-bar">
		<impr-wrapper>
			<div class="o-layout  o-layout--flush  o-layout--top">
				<div class="o-layout__item  u-1/2  u-no-print">
<!-- 					<div class="__menu">
						<span class="__menu-item o-text">
							<impr-fade-in-animation
								delay="400"
								duration="500"
								appear="true">

								<span>Sledujte nás</span>
							</impr-fade-in-animation>
						</span>

						<span class="__menu-item">
							<impr-fade-in-animation
								 delay="600"
								 duration="500"
								 appear="true">

								<impr-app-social-list></impr-app-social-list>
							</impr-fade-in-animation>
						</span>
					</div> -->
				</div><!--
			 --><div class="o-layout__item  u-1/2 __logo">
					<impr-fade-in-animation delay="600" appear="true">
						<impr-logo></impr-logo>
					</impr-fade-in-animation>
				</div>
			</div>
		</impr-wrapper>
	</div>
</template>

<script>
	import imprAppSocialList from './impr-app-social-list'
	import imprWrapper from './impr-wrapper'
	import imprLogo from './impr-logo'

	import imprFadeInAnimation from './animations/impr-fade-in-animation'

	export default {
		name: 'imprAppBar',
		components: {
			imprAppSocialList,

			imprWrapper,
			imprLogo,

			imprFadeInAnimation
		}
	}
</script>

<style scoped lang="scss">
	.impr-app-bar {
		position: absolute;
		z-index: 5;
		left: 0;

		display: block;
		width: 100%;
		padding-top: 1.5 * $bu;

		transform: translateZ(0);

		@include media-query('palm-small') {
			.__menu {
				display: none;
			}
		}
	}

		.__menu-item {
			display: inline-block;

			line-height: 35px;
			vertical-align: middle;

			&:first-child {
				position: relative;

				padding-right: 60px;

				&:after {
					content: '';

					position: absolute;
					top: 16px;
					right: 10px;

					height: 2px;
					width: 30px;
					background: $orange;

					transform-origin: left center;
					transform: scale(0, 1);

					animation: revealLeft 300ms forwards;
					animation-delay: 600ms;
					animation-timing-function: $animationTiming;
				}
			}
		}

		.__logo {
			text-align: right;

			.impr-logo {
				display: inline-block;
			}
		}
</style>
