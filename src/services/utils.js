const windowWidth = window && window.innerWidth ? window.innerWidth : 1200;
const MAX_OFFSET = 0.3;

export default {
	getSectionComputedOffset() {

		if (windowWidth < 500) {
			return MAX_OFFSET / 8;
		} else if (windowWidth > 1200) {
			return MAX_OFFSET;
		} else {
			return (((windowWidth * 0.66) / 800) * MAX_OFFSET);
		}
	}
}