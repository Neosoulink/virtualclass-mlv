export default () => {
	return [
		{
			name: 'Release',
			description: "Release description",
			config: {
				header: {
					leftSide: {
						icon: null,
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
					personsCopyTransmitted: [
						'Bernard',
						'Luis',
						'Emery'
					],
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
				header: {
					leftSide: {
						icon: null,
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
					personsCopyTransmitted : [
						'Bernard',
						'Luis',
						'Emery'
					],
					title: 'im a letter',
					content: 'lorem ipsum dem dolor'
				},
				footer: {
					leftSide: {

					},
					rightSide: {
						title: "Name of someone",
						subTitle : "From somewhere"
					}
				}
			}
		}
	];
}
