const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: [],
	// purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			'xs': '425px',
			...defaultTheme.screens,
		  },
		extend: {
			colors: {
				'c-white' : '#fffffe',
				'c-black' : '#16161a',
				'c-light-gray' : '#94a1b2',
				'c-dark-gray' : '#2a2a2a',
				'c-blue' : '#232946',
				'c-dark-blue' : '#272343',
				'c-red' : '#d9376e',
				'c-pink' : '#eebbc3',
				'c-orange' : '#ff8e3c',
			},
			spacing: {
				'4.5' : '18px'
			},
		},
	},
	variants: {
		extend: {
			borderWidth: ['last'],
			backgroundColor: ['odd', 'even'],
		},
	},
	plugins: [],
}
