/*eslint-env es6*/
module.exports = {
	parserOptions: {
		ecmaVersion: 7,
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	env: {
		node: true,
		es6: true,
		browser: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	rules: {
		'comma-dangle': [2, 'never'],
		'comma-style': [2, 'last'],
		eqeqeq: 2,
		'no-eq-null': 2,
		'no-extra-parens': 2,
		'no-extra-semi': 2,
		'no-lonely-if': 2,
		'no-multi-spaces': 0,
		'no-nested-ternary': 2,
		'no-param-reassign': 2,
		'no-self-compare': 2,
		'no-shadow': 2,
		'no-throw-literal': 2,
		'no-undef': 2,
		'no-underscore-dangle': 0,
		'no-void': 2,
		quotes: [2, 'single'],
		semi: [2, 'always'],
		'no-console': [1, { allow: ['warn', 'error'] }],
		'no-unused-vars': [2, { vars: 'all' }]
	}
};
