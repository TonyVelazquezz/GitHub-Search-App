module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	mode: 'jit', // Just in time compiler
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				main_blue: '#1F2A48',
				dark_blue: '#141C2F',
				main_yellow: '#ffa200',
				dark_yellow: '#ff7b00',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
