<template>
	<bbl-inview
		:offset="getOffset"
		@enter="onEnter()"
		@leave="onLeave()">
		<div
			class="impr-section"
			:element="element">
			<slot></slot>
		</div>
	</bbl-inview>
</template>

<script>

import _utils from '../services/utils'
import sectionsStore from '../services/sections-store'

export default {
	name: 'imprSection',
	props: ['label', 'element', 'enter'],
	computed: {
		getOffset() {
			return this.utils.getSectionComputedOffset();
		}
	},
	data() {
		return {
			utils: _utils
		}
	},
	methods: {
		onEnter() {
			sectionsStore.setActive(this.label);
			this.$emit('enter');
		},
		onLeave() {
			this.$emit('leave');
		}
	},
	mounted: function() {
		sectionsStore.add(this.label, this.element);
	}
}
</script>

<style scoped lang="scss">
	.impr-section {
		position: relative;

		padding: $sectionAdjust / 2 0;

		@include media-query('palm-small') {
			padding: $sectionAdjust / 3 0;
		}
	}
</style>
