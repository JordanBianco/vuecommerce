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
			fontSize: {
				'xxs' : '0.65rem', // 10.4 px
			},
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
				'c-green' : '#47a358'
			},
			spacing: {
				'18' : '4.5rem',
				'4.5' : '18px',
				'5.5' : '22px',
				'110' : '26.5rem',
				'120' : '28rem',
				'55' : '55%',
				'45' : '45%',
				'28%' : '28%',
				'72%' : '72%',
			},
		},
		transitionProperty: {
			'width': 'width',
			'maxWidth' : 'maxWidth'
		}
	},
	variants: {
		extend: {
			borderWidth: ['last'],
			backgroundColor: ['odd', 'even'],
		},
	},
	plugins: [],
}
