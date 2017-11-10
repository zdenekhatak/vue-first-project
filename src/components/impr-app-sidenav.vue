<template>
	<div class="impr-sidenav">
		<span class="__active-section  o-text">
			{{ getActive }}
		</span>

		<ul
			class="__list"
			role="navigation">
			<li
				class="__item"

				v-for="(item, index) in sections.sections"
				:class="{
					'is-active': getActive == item.label
				}"

				v-scroll-to="{
					el: '[element=' + item.element +']',
					duration: 800
				}">
				<span class="__number">
					0{{ index + 1 }}
				</span>

				<span class="__name">
					{{ item.label }}
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
import sections from '../services/sections-store'

export default {
	name: 'imprAppSidenav',
	computed: {
		getActive() {
			return this.sections.getActive();
		}
	},
	data() {
		return {
			sections: sections
		}
	}
}
</script>

<style scoped lang="scss">
	.impr-sidenav {
		width: 105px;

		transform: translateZ(0);
	}

	.__active-section {
		position: absolute;
		left: 10px;
		top: -25px;

		transform: rotate(-90deg) translateZ(0);
		transform-origin: 0 50%;
	}

	.__list {
		width: 105px;
	}

	.__item {
		position: relative;

		height: 30px;
		width: 105px;

		cursor: pointer;

		transform: translateZ(0);

		&.is-active {
			&:hover {
				&:after {
					background: $orange;

					transform: scale(1.05, 1) translate3d(-5px, 0, 0);
				}
			}
			&:after {
				transform: scale(1.05, 1) translate3d(-5px, 0, 0);
			}

			.__number {
				opacity: 1;
			}
		}

		&:hover {
			&:after {
				background: black;

				transition: transform 300ms, background 400ms 250ms;
				transform: scale(0.5, 1) translate3d(0, 0, 0);
			}
		}

		&:before,
		&:after {
			content: '';

			position: absolute;
			left: 0; top: 6px;

			height: 2px;

			transform: translateZ(0);
		}

		&:before {
			width: 20px;

			background: #ccc;
		}

		&:after {
			width: 100%;

			background: $orange;

			transform: scale(0, 1) translate3d(0, 0, 0);
			transform-origin: 0 50%;
			transition: transform 300ms ease;

			-webkit-backface-visibility: hidden;
			-webkit-perspective: 1000;

		}
	}

	.__number {
		position: absolute;
		left: 1px;
		top: -1px;
		z-index: 2;

		color: $dark;
		font-size: 1em;
		font-weight: 600;

		opacity: 0;

		transition: opacity 400ms ease-out;
		transform: translateZ(0);
	}

	.__name {
		display: none;
	}
</style>
