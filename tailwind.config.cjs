/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'chicago': '#5b5b5b',
				'eerieBlack': '#1d1d1d',
				'hotMagenta': '#ff00dc',
			},
			letterSpacing: {
				'widening': '0.2em'
			}
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			wide: ['Krona One', 'sans-serif'],
		}
	},
	plugins: [],
}
