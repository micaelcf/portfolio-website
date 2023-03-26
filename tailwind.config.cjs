/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/app.css'],
	theme: {
		extend: {
			colors: {
				sky: {
					100: "#daf5f5",
					200: "#b4ecea",
					300: "#8fe2e0",
					400: "#69d9d5",
					500: "#44cfcb",
					600: "#36a6a2",
					700: "#297c7a",
					800: "#1b5351",
					900: "#0e2929"
				},
				lake: {
					100: "#e2e9f3",
					200: "#c4d3e7",
					300: "#a7bdda",
					400: "#89a7ce",
					500: "#6c91c2",
					600: "#56749b",
					700: "#415774",
					800: "#2b3a4e",
					900: "#161d27"
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
				plantinum: {
					100: "#fafafa",
					200: "#f6f6f6",
					300: "#f1f1f1",
					400: "#ededed",
					500: "#e8e8e8",
					600: "#bababa",
					700: "#8b8b8b",
					800: "#5d5d5d",
					900: "#2e2e2e"
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
