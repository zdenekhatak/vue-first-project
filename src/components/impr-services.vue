<template>
	<div
		class="o-layout__item  u-3/4  u-1/1-portable  impr-services"

		:class="{
			'is-visible': visible
		}">
		<div class="o-layout  o-layout--flush">
			<div
				class="o-layout__item  u-1/3  u-1/3-portable  u-1/2-palm  u-1/1-palm-small  __box-wrapper  u-visible-on-print"

				v-for="item in services"
				key="item.id">
				<impr-icon-box
					class="__item"
					:label="item.name"
					:text="item.description"
					:icon="item.icon">
				</impr-icon-box>
			</div>
		</div>
	</div>
</template>

<script>
import imprIconBox from './impr-icon-box'

import servicesService from '../services/services'
import _utils from '../services/utils'

export default {
	name: 'imprServices',
	props: ['visible'],
	components: {
		imprIconBox
	},
	data() {
		return {
			utils: _utils,
			services: servicesService.getList()
		}
	}
}
</script>

<style scoped lang="scss">
	.impr-services {
		&.is-visible {
			.__box-wrapper {
				opacity: 1;

				transform: translate3d(0, 0, 0);
			}
		}
	}

	.__box-wrapper {
		opacity: 0;

		transition: opacity 400ms $animationTiming, transform 400ms;
		transform: translate3d(0, 20px, 0);

		@for $item from 1 through 8 {
			&:nth-child(#{$item}) {
				transition-delay: ($item * 140ms);
			}
		}
	}

	.__item {
		max-width: 250px;
		padding-left: 1px;
		margin-bottom: 2 * $bu;

		@include media-query('wide') {
			max-width: 220px;
		}

		@include media-query('portable') {
			max-width: 85%;
		}

		@include media-query('palm') {
			margin-bottom: $bu;
		}

		@include media-query('palm-small') {
			margin-bottom: 1.5 * $bu;
		}
	}
</style>
