module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media',
	theme: {
		extend: {
			variant: {
				hidden: ['group-hover'],
			},
		},
	},
	plugins: [],
};
