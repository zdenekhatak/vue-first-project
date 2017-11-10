<template>
	<bbl-inview
		offset="0.01"
		@enter="unfixSidenav()"
		@leave="fixSidenav()">
		<div class="impr-app-footer">
			<impr-wrapper>
				<div class="__anchor">
					<impr-anchor
						label="Zpět nahoru"
						adjust="bottom"
						scroll-to-element="[element=intro]">

					</impr-anchor>
				</div>

				<div class="o-layout  o-layout--flush  o-layout--bottom">
					<div class="o-layout__item  u-1/4">
						<impr-logo inverted>
						</impr-logo>

						<!-- <impr-app-social-list inverted></impr-app-social-list> -->
					</div><!--
				 --><div class="o-layout__item  u-3/4  u-1/1-portable">
						<div class="o-layout  o-layout--flush">
							<h2 class="o-title  o-title--beta">
								Jak se s&nbsp;námi&nbsp;spojit
							</h2>

							<div
								class="o-layout__item  u-1/3  u-1/2-palm  u-1/1-palm-small  __contact-item"

								v-for="(person, index) in people"
								key="person.id">
								<h3 class="o-title  o-title--delta">
									{{ person.name }} {{ person.surname }}
								</h3>

								<address class="__contact">
									<a :href="'mailto:' + person.mail">{{ person.mail }}</a><br>
									<span>{{ person.phone }}</span>
								</address>
							</div>
						</div>
					</div>
				</div>
			</impr-wrapper>
		</div>
	</bbl-inview>
</template>

<script>
	import imprWrapper from './impr-wrapper'
	import imprAnchor from './impr-anchor'
	import imprLogo from './impr-logo'
	import imprAppSocialList from './impr-app-social-list'

	import sections from '../services/sections-store'
	import peopleService from '../services/people'

	export default {
		name: 'imprAppFooter',
		components: {
			imprWrapper,
			imprAnchor,
			imprLogo,
			imprAppSocialList
		},
		methods: {
			unfixSidenav() {
				sections.setBottom(true);
			},
			fixSidenav() {
				sections.setBottom(false);
			}
		},
		data() {
			return {
				people: peopleService
					.getList()
					.map((item) => {
						return {
							id: item.id,
							name: item.name,
							surname: item.surname,
							mail: item.mail,
							phone: item.phone
						}
					})
			}
		}
	}
</script>

<style scoped lang="scss">
	.impr-app-footer {
		position: relative;
		z-index: 10;

		padding: 120px 0;

		background: $dark;

		@include media-query('portable') {
			padding-bottom: 160px;
		}

		@include media-query('palm') {
			padding-top: 60px;
			padding-bottom: 100px;
		}

		@include media-query('palm-small') {
			padding-top: $bu;
			padding-bottom: 4 * $bu;
		}
	}

		.impr-wrapper {
			position: relative;
			height: 100%;
		}

		.impr-app-social-list {
			display: none;

			@include media-query('portable') {
				position: absolute;
				bottom: -110px;
				left: 15px;

				display: block;
			}

			@include media-query('palm') {
				bottom: -50px;
			}
		}

		.impr-logo {
			@include media-query('portable') {
				position: absolute;

				bottom: -$logoSize - 60px;
				right: $bu;
			}

			@include media-query('palm') {
				bottom: -$logoSize;
			}

			@include media-query('palm-small') {
				bottom: -$logoSize + 15px;
			}
		}

		.__anchor {
			position: absolute;
			top: -150px;
			left: 40px;

			@include media-query('portable') {
				left: auto;
				right: 40px;
			}

			@include media-query('palm') {
				top: -90px;
			}

			@include media-query('palm-small') {
				top: -2 * $bu;
			}
		}

		.o-layout {
			> .o-layout__item {
				vertical-align: bottom;
			}

			@include media-query('portable') {
				.__contact-item {
					vertical-align: top;
				}
			}

			@include media-query('palm') {
				.__contact-item {
					margin-bottom: 2 * $bu;
				}
			}
		}

		.__contact {
			line-height: 1.625;
			color: lighten($text, 10%);

			a {
				color: lighten($text, 10%);

				&:hover {
					color: $orange;
				}
			}
		}

		.o-title {
			color: $white;

			@include media-query('wide') {
				max-width: 80%;
				padding-bottom: $bu;
			}
		}

		.o-title--gamma {
			@include media-query('palm-small') {
				padding-bottom: $bu / 2;
			}
		}

		.o-title--beta {
			white-space: nowrap;

			@include media-query('palm') {
				margin-bottom: $bu;
				white-space: normal;
			}
		}
</style>
