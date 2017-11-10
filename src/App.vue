<template>
	<div id="app" class="c-app" >
		<impr-bg-lines></impr-bg-lines>

		<impr-app-bar></impr-app-bar>

		<div
			class="__sidenav  u-no-print"

			:class="{
				'is-static': isBottom
			}">
			<impr-fade-in-animation
				appear="true"
				delay="700">
				<impr-app-sidenav></impr-app-sidenav>
			</impr-fade-in-animation>
		</div>

		<impr-section
			@leave="sectionsStore.setActive('O nás')"

			label="Úvod"
			element="intro">
			<impr-app-hero-cover>

			</impr-app-hero-cover>
		</impr-section>

		<impr-wrapper class="__content">
			<impr-section
				label="O nás"
				element="about">

				<bbl-inview @enter="introInView = true">
					<impr-fade-in-animation :state="introInView">
						<div class="__intro">
							<p
								class="o-perex  o-perex--animate"
								:class="{
									'is-revealed': introInView
								}">
								Vytváříme komunikační strategie, vyhledáváme
								a&nbsp;zpracováváme vhodná témata a&nbsp;komunikujeme s&nbsp;médii i&nbsp;klienty. Máme cenné zkušenosti z&nbsp;mnoha komunikačně složitých situací, včetně krizové komunikace, a&nbsp;nestraníme se žádné, ani té nejjednodušší práce, co s&nbsp;PR&nbsp;souvisí.
							</p>
						</div>
					</impr-fade-in-animation>
				</bbl-inview>

				<div class="__people">
					<impr-person
						class="__person"

						key="index"
						v-for="(person, index) in people"
						label="person.name"

						:reversed="isOdd(index)"
						:data="person">
					</impr-person>
				</div>
			</impr-section>

			<impr-section
				@enter="servicesInView = true"
				label="Služby"
				element="services">

				<impr-fade-in-animation :state="servicesInView">
					<div class="o-layout  o-layout--flush  o-layout--right __services-wrapper">
						<div class="o-layout__item  u-3/4  u-1/1-portable">
							<h2 class="o-title  o-title--beta">
								Co pro vás můžeme&nbsp;udělat
							</h2>
						</div>

						<impr-services
							class="__services"
							:visible="servicesInView">
						</impr-services>
					</div>
				</impr-fade-in-animation>

			</impr-section>
		</impr-wrapper>

		<impr-app-footer></impr-app-footer>
	</div>
</template>

<script>

import imprAppBar from './components/impr-app-bar'
import imprAppHeroCover from './components/impr-app-hero-cover'
import imprAppSidenav from './components/impr-app-sidenav'
import imprAppFooter from './components/impr-app-footer'
import imprBgLines from './components/impr-bg-lines'
import imprSection from './components/impr-section'
import imprWrapper from './components/impr-wrapper'
import imprPerson from './components/impr-person'
import imprServices from './components/impr-services'

import imprSlideInAnimation from './components/animations/impr-slide-in-animation'
import imprFadeInAnimation from './components/animations/impr-fade-in-animation'

import peopleService from './services/people'
import sectionsStore from './services/sections-store'

export default {
	name: 'app',
	components: {
		imprAppBar,
		imprAppHeroCover,
		imprAppSidenav,
		imprAppFooter,
		imprBgLines,
		imprSection,
		imprWrapper,
		imprPerson,
		imprServices,

		imprSlideInAnimation,
		imprFadeInAnimation
	},
	computed: {
		isBottom() {
			return this.sectionsStore.isBottom;
		}
	},
	methods: {
		isOdd(i) {
			return (i % 2);
		}
	},
	data() {
		return {
			servicesInView: false,
			introInView: false,
			sectionsStore: sectionsStore,
			people: peopleService.getList()
		}
	}
}
</script>

<style scoped lang="scss">
	.__sidenav {
		position: fixed;
		z-index: 100;
		top: 45vh;
		right: 0;

		&.is-static {
			position: absolute;
			top: auto;
			bottom: calc(65vh + 280px);
		}

		@include media-query('wide') {
			display: none;
		}
	}

	.__content {
		position: relative;
		z-index: 5;

		transform: translateZ(0)
	}

	.__intro {
		margin-top: $sectionAdjust / 2;

		.o-perex {
			margin-left: $block;
			max-width: 760px;

			&:before {
				transition-delay: 500ms;
			}
		}

		@include media-query('portable') {
			margin-top: $sectionAdjust / 4;

			.o-perex {
				margin: 0 auto;
				max-width: 610px;
			}
		}

		@include media-query('palm') {
			margin-top: 0;

			.o-perex {
				max-width: 100%;
				margin-left: 0;
			}
		}
	}

	.__people {
		position: relative;

		margin-top: 1.5 * $sectionAdjust;

		@include media-query('portable') {
			margin-top: $sectionAdjust;
		}

		@include media-query('palm') {
			margin-top: $sectionAdjust / 2;
		}
	}

		.__person {
			margin-bottom: 200px;

			&:last-child {
				margin-bottom: 60px;
			}

			@include media-query('wide') {
				margin-bottom: 100px;

				&:last-child {
					margin-bottom: 25px;
				}
			}

			@include media-query('portable') {
				margin-bottom: 75px;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

	.__services-wrapper {
		@include media-query('portable') {
			text-align: left;
		}
	}

		.__services {
			padding-top: $bu;
			margin-bottom: $sectionAdjust / 2;
		}
</style>
