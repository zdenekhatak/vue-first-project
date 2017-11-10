const DATA = [
	{
		id: 0,
		name: 'Public a media relations',
		description: `Zajistíme vám promyšlenou
		a&nbsp;správně cílenou komunikaci
		s&nbsp;médii, aby se vaše informace
		a&nbsp;tiskové zprávy uplatnily co
		nejlépe.`,
		icon: 'icon-public-relations'
	},
	{
		id: 1,
		name: 'Copywritting',
		description: `Rádi pro vás využijeme své
		zkušenosti získané během
		novinářské praxe a&nbsp;pomůžeme
		vám napsat texty, které
		zaujmou.`,
		icon: 'icon-copywriting'
	},
	{
		id: 2,
		name: 'Interní komunikace',
		description: `Připravíme pro vás strategii
		interní komunikace a&nbsp;pomůžeme
		vám oslovit zaměstnance
		přesně tak, jak potřebujete.`,
		icon: 'icon-communication'
	},
	{
		id: 3,
		name: 'PR Audit',
		description: `Zhodnotíme vaši současnou
		komunikaci s&nbsp;médii a&nbsp;veřejností
		a&nbsp;poradíme vám, jak ji upravit,
		aby byla co nejefektivnější.`,
		icon: 'icon-pr-audit'
	},
	{
		id: 4,
		name: 'PR Kurzy',
		description: `Pomůžeme vám lépe
		pochopit fungování PR.
		Praktickou formou připravíme
		vás nebo vaše zaměstnance
		na komunikaci s&nbsp;médii.`,
		icon: 'icon-pr-courses'
	},
	{
		id: 5,
		name: 'Sociální media',
		description: `Vytvoříme pro vás obsahovou
		strategii a&nbsp;pomůžeme vám
		s&nbsp;komunikací na sociálních
		sítích a&nbsp;oslovením relevantního
		publika.`,
		icon: 'icon-social-media'
	}
];

export default {

	getList() {
		return DATA;
	}
}

