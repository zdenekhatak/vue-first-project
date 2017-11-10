<template>
	<bbl-inview @enter="onEnter()">
		<impr-slide-in-animation :state="startAnimation">
			<div
				class="impr-person"
				:class="{
					'is-reversed': reversed,
					'is-visible': startAnimation
				}">
				<div class="__picture">
					<lazy-image
						:src="person.backgroundImage"
						:placeholder="person.defaultImage"
					/>
				</div><!--
				 --><div class="__content">
					<h3 class="o-title  o-title--beta">
						{{ person.name }} {{ person.surname }}
					</h3>

					<p
						class="o-bodycopy"

						v-html="person.description">
					</p>

					<impr-link-button>
						<a
							target="_blank"
							rel="noopener"

							:href="person.link">

							{{ person.name }} na LinkedIn
						</a>
					</impr-link-button>

				</div>
			</div>
		</impr-slide-in-animation>
	</bbl-inview>
</template>

<script>
	import imprLinkButton from './impr-link-button'
	import imprSlideInAnimation from './animations/impr-slide-in-animation'

	export default {
		name: 'imprPerson',
		props: ['reversed', 'data'],
		components: {
			imprLinkButton,
			imprSlideInAnimation
		},
		data() {
			return {
				person: this.data,
				startAnimation: false
			}
		},
		methods: {
			onEnter: function() {
				this.startAnimation = true;
			}
		}

	}
</script>

<style scoped lang="scss">
	.impr-person {
		width: 100%;
		display: inline-block;

		transform: translateZ(0);

		&.is-reversed {
			direction: rtl;

			.__content {
				direction: ltr;
			}
		}

		&.is-visible {
			.o-title,
			.o-bodycopy,
			/deep/ .impr-link-button {
				opacity: 1;

				transform: translate3d(0, 0, 0);
			}
		}

		@include media-query('portable') {
			&.is-reversed {
				direction: ltr;
			}
		}
	}

		.__picture {
			position: relative;
			left: 1px;

			width: 50%;
			vertical-align: top;
			display: inline-block;

			@include media-query('portable') {
				width: 33.333%;

				vertical-align: top;
			}

			@include media-query('palm') {
				width: 75%;
				margin: 0 auto 2 * $bu auto;
				display: block;
			}

			@include media-query('palm-small') {
				left: 0;
				margin-bottom: $bu;

				width: 100%;
			}
		}

		.__content {
			display: inline-block;
			width: 50%;
			min-height: 100%;
			padding: 100px;
			padding-bottom: 0;

			vertical-align: top;

			@include media-query('wide') {
				padding: 6%;
				padding-bottom: 3%
			}

			@include media-query('portable') {
				padding: 2 * $bu;

				padding-top: 0;
				width: 66.666%;
			}

			@include media-query('palm') {
				width: 100%;
				padding: $bu $bu $bu 0;
			}
		}

			.o-title,
			.o-bodycopy,
			/deep/ .impr-link-button {
				opacity: 0;

				transform: translate3d(0, 20px, 0);
				transition: opacity 450ms $animationTiming, transform 300ms ease;
			}

			.o-title {
				transition-delay: 400ms;
			}

			.o-bodycopy {
				transition-delay: 500ms;
			}

			/deep/ .impr-link-button {
				transition-delay: 600ms;
			}
</style>
