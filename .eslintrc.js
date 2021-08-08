module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb-typescript-prettier',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off', //not required in Next.js
		'jsx-a11y/anchor-is-valid': 'off', //Link instead href in Next.js

		'react/require-default-props': 'off', //Ts. doesn't need use prop-types
		'react/prop-types': 'off',

		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
		'react/jsx-props-no-spreading': 'off', //personal preference
	},
};
