const DATA = [
	{
		id: 1,
		name: 'Mirek',
		surname: 'Čepický',
		link: 'https://www.linkedin.com/in/miroslavcepicky/',
		mail: 'mirek@im-pr.cz',
		phone: '+420 775 011 288',
		backgroundImage: 'static/images/people/marek-cepicky.jpg',
		defaultImage: 'static/images/people/marek-cepicky--preload.jpg',
		description: `Tři roky pracoval jako ředitel komunikace Vodafonu, kde měl na starost PR tým, interní
		komunikaci a&nbsp;společenskou odpovědnost. Předtím byl u&nbsp;stejného operátora pět let tiskovým
		mluvčím. V&nbsp;minulosti působil dva roky jako redaktor Hospodářských novin a&nbsp;vedl ekonomickou
		redakci Aktuálně.cz. Byl také PR manažerem a&nbsp;tiskovým mluvčím portálu Centrum.cz. První rok
		po absolvování ekonomické žurnalistiky na VŠE pracoval v&nbsp;Nestlé Česko. Od jara 2016
		spoluvlastní agenturu I’m&nbsp;PR.`
	},
	{
		id: 2,
		name: 'Aneta',
		surname: 'Petroušková',
		link: 'https://www.linkedin.com/in/aneta-petrou%C5%A1kov%C3%A1-211a0599/',
		mail: 'aneta@im-pr.cz',
		phone: '+420 602 794 907',
		backgroundImage: 'static/images/people/aneta-petrouskova.jpg',
		defaultImage: 'static/images/people/aneta-petrouskova--preload.jpg',
		description: `Má více než desetileté novinářské zkušenosti. Pracovala jako redaktorka časopisů Marie Claire,
		Maminka a&nbsp;Cosmopolitan, kde byla i&nbsp;editorkou. Mezitím pracovala rok v&nbsp;PR agentuře
		AC&amp;C Public Relations, se kterou poté spolupracovala i&nbsp;jako copywriter. Od roku 2014 byla PR
		konzultantkou na volné noze. Vystudovala VŠE, obor mezinárodní obchod a&nbsp;ekonomická
		žurnalistika. Od jara 2016 spoluvlastní agenturu I’m&nbsp;PR.`
	},
	{
		id: 3,
		name: 'Adéla',
		surname: 'Konopková',
		link: 'https://www.linkedin.com/in/ad%C3%A9la-konopkov%C3%A1-823a042b/',
		mail: 'adela@im-pr.cz',
		phone: '+420 775 013 867',
		backgroundImage: 'static/images/people/adela-konopkova.jpg',
		defaultImage: '../static/images/people/adela-konopkova--preload.jpg',
		description: `Působila téměř sedm let v&nbsp;tiskovém oddělení Vodafonu, posledních tři a&nbsp;půl roků jako
		zástupkyně tiskové mluvčí. Vedle běžné PR agendy se věnovala také koordinaci obsahu na
		sociálních sítích. Před příchodem do Vodafonu pracovala několik let v agentuře AC&amp;C Public
		Relations, kde se starala o&nbsp;ICT, byznysovou a&nbsp;lifestylovou komunikaci technologicky zaměřených
		klientů, zejména společnosti Nokia. Vystudovala obor Obchodní podnikání na Ekonomické
		fakultě Jihočeské univerzity. Od jara 2016 spoluvlastní agenturu I’m&nbsp;PR.`
	}
];

export default {

	getList() {
		return DATA;
	}
}

