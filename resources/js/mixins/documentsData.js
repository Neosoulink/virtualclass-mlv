export default () => {
	return [
		{
			name: 'Release',
			description: "Release description",
			config: {
				image: {
					data: null,
					show: true
				},
				header: {
					leftSide: {
						logo: {
							data: null,
							show: true,
						},
						title: "Enterprise name",
						subTitle: null
					},
					rightSide: {
						date: "21-10-2020",
						title: null,
						subTitle: 'Security'
					}
				},
				body: {
					title: 'im a release',
					content: 'lorem ipsum dem dolor'
				},
				footer: {
					leftSide: {

					},
					rightSide: {
						title: "Name of someone",
						subTitle: "From somewhere"
					}
				}
			}
		},
		{
			name: 'Letter',
			description: "Letter description",
			config: {
				image: {
					data: null,
					show: true
				},
				header: {
					leftSide: {
						logo: {
							data: null,
							show: true,
						},
						title: "Enterprise name",
						subTitle: null
					},
					rightSide: {
						date: "21-10-2020",
						title: null,
						subTitle: 'Security'
					}
				},
				body: {
					cc: {
						title: "N° CAB/MIN-UH/ date",
						prePerson: "Son excellence",
						persons: [
							'Mr Bernard',
							'Mr Luis',
							'Maitre Emery',
							'Mr Emery',
							'Mr Chris',
							'Mr Jean'
						],
					},
					title: 'im a letter',
					for: "Mr Incognito",
					content: 'lorem ipsum dem dolor'
				},
				footer: {
					leftSide: {
					},
					rightSide: {
						title: "Name of someone",
						subTitle: "From somewhere"
					}
				}
			}
		}
	];
}
