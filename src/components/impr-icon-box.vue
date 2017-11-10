<template>
	<div class="impr-icon-box">
		<span
			class="__icon icon"
			:class="icon">

		</span>

		<h4 class="o-title  o-title--gamma">
			{{ label }}
		</h4>

		<p
			class="o-bodycopy"
			v-html="text">

		</p>
	</div>
</template>

<script>
export default {
	name: 'imprIconBox',
	props: ['label', 'text', 'icon']
}
</script>

<style scoped lang="scss">
	.impr-icon-box {
		width: 100%;
	}

	.__icon {
		display: block;
		margin-bottom:  $bu * 2 / 3;

		line-height: 90%;
		color: $orange;
		font-size: 5.7em;

		@include media-query('palm-small') {
			font-size: 6.7em;
		}
	}
</style>
