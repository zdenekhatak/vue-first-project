<template>
	<div
		class="impr-app-social-list"
		:class="{
			'is-inverted': inverted
		}">
		<a
			href="#"
			class="__item  icon  icon-twitter">

			twitter
		</a>

		<a
			href="#"
			class="__item  icon  icon-facebook">

			facebook
		</a>

		<a
			href="#"
			class="__item  icon  icon-linkedin">

			linkedin
		</a>
	</div>
</template>

<script>
	export default {
		name: 'imprAppSocialList',
		props: {
			inverted: {
				default: false,
				type: Boolean
			}
		}
	}
</script>

<style scoped lang="scss">
	$sociaListItemSize: 35px;

	.impr-app-social-list {
		&.is-inverted {
			.__item {
				color: $white;

				&:hover {
					color: $orange;
				}
			}
		}
	}

	.__item {
		display: inline-block;
		width: $sociaListItemSize;
		height: $sociaListItemSize;

		vertical-align: middle;
		line-height: 52px;

		color: $text;
		text-align: center;
		font-size: 0;

		transition: color 400ms;

		&:before {
			font-size: 20px;
		}

		&:hover {
			color: $orange;
		}
	}

</style>
