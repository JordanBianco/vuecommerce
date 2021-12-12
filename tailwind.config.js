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
		boxShadow: {
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(211, 211, 211, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			none: 'none',
		},
		extend: {
			fontSize: {
				'xxs' : '0.65rem', // 10.4 px
			},
			colors: {
				'c-white' : '#fffffe',
				'c-sidebar-primary' : '#283046',
				'c-sidebar-secondary' : '#161d31',
				'c-dark-gray' : '#2a2a2a',
				'c-blue' : '#232946',
				'c-red' : '#d9376e',
				'c-green' : '#47a358',
			},
			spacing: {
				'15' : '3.7rem',
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
	plugins: [
		require('@tailwindcss/forms')
	]
}
