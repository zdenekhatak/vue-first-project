<template>
	<div class="impr-wrapper">
		<slot ></slot>
	</div>
</template>

<script>

export default {
	name: 'imprWrapper'
}
</script>

<style scoped lang="scss">
	.impr-wrapper {
		max-width: $max-width + (2 * $bu);
		width: 100%;
		padding: 0 $bu;
		margin: 0 auto;
	}
</style>
