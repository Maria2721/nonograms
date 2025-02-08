module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: "airbnb-base",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"max-len": [
			"error",
			{
				code: 120,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
	},
};
