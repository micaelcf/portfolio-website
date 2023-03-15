/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/app.css'],
	theme: {
		extend: {
			colors: {
				oxford: {
					100: '#d0d3d8',
					200: '#a1a6b1',
					300: '#727a8b',
					400: '#434d64',
					500: '#14213d',
					600: '#101a31',
					700: '#0c1425',
					800: '#080d18',
					900: '#04070c'
				},
				torange: {
					100: '#feedcf',
					200: '#fedaa0',
					300: '#fdc870',
					400: '#fdb541',
					500: '#fca311',
					600: '#ca820e',
					700: '#97620a',
					800: '#654107',
					900: '#322103'
				},
				platinum: {
					100: '#fafafa',
					200: '#f5f5f5',
					300: '#efefef',
					400: '#eaeaea',
					500: '#e5e5e5',
					600: '#b7b7b7',
					700: '#898989',
					800: '#5c5c5c',
					900: '#2e2e2e'
				},
				brow: {
					100: '#f6ece0',
					200: '#eddac2',
					300: '#e3c7a3',
					400: '#dab585',
					500: '#d1a266',
					600: '#a78252',
					700: '#7d613d',
					800: '#544129',
					900: '#2a2014'
				}
			},
			fontFamily: {
				concert: ['Concert One', 'cursive']
			},
			variables: {}
		}
	},
	plugins: [],
	darkMode: 'class'
};
