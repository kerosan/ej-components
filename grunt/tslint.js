module.exports = {
	default: {
		options: {
			// can be a configuration object or a filepath to tslint.json
			configuration: "tslint.json"
		},
		files: {
			src: [
				"sources/**/*.ts",
				"sources/**/*.tsx",
			]
		}
	}
};