module.exports = {
	root: true,
	env: {
		node: true,
	},
	// extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
	extends: ['plugin:vue/essential', '@vue/typescript'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// 'no-multiple-empty-lines': [1, { max: 2 }]
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
}
