module.exports = {
	default: {
		options: {
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
