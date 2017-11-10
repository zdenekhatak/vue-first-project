export default  {
	sections: [],
	isBottom: false,

	add(label, element) {
		this.sections = [
			...this.sections,
			{
				label,
				element,
				active: false
			}
		];
	},

	list() {
		return sections;
	},

	getActive() {
		const active = this.sections.find((section) => section.active);

		if (active) {
			return active.label;
		}
	},

	setActive(key) {
		this.sections = this.sections.map((section) => {
			if (section.label !== key) {
				return {
					label: section.label,
					element: section.element,
					active: false
				};
			}
			return {
				label: section.label,
				element: section.element,
				active: true
			};
		});
	},

	setInactive(key) {
		this.sections = this.sections.map((section) => {
			if (section.label !== key) {
				return section;
			}

			return {
				label: section.label,
				element: section.element,
				active: false
			};

		});
	},

	setBottom(state) {
		this.isBottom = state;
	}
}