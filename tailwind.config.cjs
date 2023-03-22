/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/app.css'],
	theme: {
		extend: {
			colors: {
				sky: {
					100: "#d9f3fb",
					200: "#b3e7f8",
					300: "#8cdaf4",
					400: "#66cef1",
					500: "#40c2ed",
					600: "#339bbe",
					700: "#26748e",
					800: "#1a4e5f",
					900: "#0d272f"
				},
				webemerald: {
					100: "#cdf7ec",
					200: "#9befd9",
					300: "#6ae6c6",
					400: "#38deb3",
					500: "#06d6a0",
					600: "#05ab80",
					700: "#048060",
					800: "#025640",
					900: "#012b20"
				},
				midnight: {
					100: "#cdd8db",
					200: "#9cb1b7",
					300: "#6a8994",
					400: "#396270",
					500: "#073b4c",
					600: "#062f3d",
					700: "#04232e",
					800: "#03181e",
					900: "#010c0f"
				},
				sunglow: {
					100: "#fff6e0",
					200: "#ffedc2",
					300: "#ffe3a3",
					400: "#ffda85",
					500: "#ffd166",
					600: "#cca752",
					700: "#997d3d",
					800: "#665429",
					900: "#332a14"
				},
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
