module.exports = {
	jest: {
		cmd: 'node_modules/.bin/jest',
		args: [
			'--color',
			'--coverage',
			'--silent',
			'--env=jsdom',
			'--expand',
			'--coverageDirectory=.coverage',
		],
	},
};