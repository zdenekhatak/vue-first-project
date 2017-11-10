<template>
	<div class="impr-app-hero-cover">
		<impr-wrapper>
			<div class="__content u-vertical-center">
				<div class="u-vertical-center__content">
					<h1 class="o-title  o-title--alpha">
						<impr-stagger-animation
							:data="['Vaše značka', 's&nbsp;námi bude', 'dobře vidět']">

						</impr-stagger-animation>
					</h1>

					<impr-slide-in-animation
						appear="true"
						delay="800">
						<p class="o-bodycopy">
							Jsme PR agentura složená z&nbsp;odborníků,
							kteří mají roky zkušeností z&nbsp;médií,
							agentury i&nbsp;korporátní komunikace
						</p>
					</impr-slide-in-animation>

					<impr-slide-in-animation
						appear="true"
						delay="950">
						<span
							v-scroll-to="{
								el: '[element=about]',
								duration: 700,
								cancelable: false
							}"

							class="o-button  o-button--primary">
							Zjistěte víc
						</span>
					</impr-slide-in-animation>
				</div>
			</div>

			<div class="__anchor">
				<impr-fade-in-animation delay="800" appear="true">
					<impr-anchor
						label="Pokračujte dolů"
						adjust="top"
						scroll-to-element="[element=about]">
					</impr-anchor>
				</impr-fade-in-animation>
			</div>
		</impr-wrapper>
	</div>
</template>

<script>
import imprWrapper from './impr-wrapper';
import imprAnchor from './impr-anchor';
import imprStaggerAnimation from './animations/impr-stagger-animation';
import imprSlideInAnimation from './animations/impr-slide-in-animation';
import imprFadeInAnimation from './animations/impr-fade-in-animation'

export default {
	name: 'imprAppHeroCover',
	components: {
		imprWrapper,
		imprAnchor,
		imprStaggerAnimation,
		imprSlideInAnimation,
		imprFadeInAnimation
	},
	data() {
		return {
			initBasicAnimation: false
		}
	},
	mounted: function() {
		setTimeout(() => {
			this.initBasicAnimation = true;
		});
	}
}
</script>

<style scoped lang="scss">
	$coverSectionMinHeight: 640px;
	$coverSectionMinHeightPalm: 700px;
	$coverSectionHeight: 92vh;

	.impr-app-hero-cover {
		position: relative;
		width: 100%;

		display: block;
		min-height: $coverSectionMinHeight;
		height: $coverSectionHeight;
		max-height: 900px;
		margin-top: -$sectionAdjust / 2;

		background: #f9f9f9 url(/static/images/hp-cover_bg.jpg) no-repeat center center;
		background-size: cover;

		/deep/ .impr-wrapper {
			position: relative;

			height: 100%;
		}

		@include media-query('portable') {
			background-position: 80% center;
		}

		@include media-query('palm') {
			min-height: $coverSectionMinHeightPalm;

			background-image: url(/static/images/hp-cover_bg--mobile.jpg);

			.__anchor {
				right: 40px;
			}
		}
	}

		.__content {
			position: relative;
			z-index: 2;

			margin-left: 170px;
			max-width: 400px;
			width: 100%;
			height: 100%;

			-webkit-backface-visibility: hidden;
			-webkit-perspective: 1000;

			@include media-query('portable') {
				margin-left: 120px;
			}

			@include media-query('palm') {
				margin-left: 60px;
			}

			@include media-query('palm-small') {
				margin-left: 0;

				&:before {
					margin-right: 0;
				}
			}
		}

		.__anchor {
			position: absolute;
			z-index: 2;
			bottom: -30px;
			right: calc(#{$block} - 46px);
		}

	.o-bodycopy {
		font-size: 1.2em;

		-webkit-backface-visibility: hidden;
		-webkit-perspective: 1000;

		@include media-query('palm-small') {
			font-size: 1.1em;
		}
	}

	.o-title {
		&:before {
			transform-origin: left center;
			transform: scale(0, 1);

			animation: revealLeft 600ms forwards;
			animation-delay: 1000ms;
			animation-timing-function: $animationTiming;
		}
	}
</style>
