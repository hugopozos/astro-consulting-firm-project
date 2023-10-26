/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                poppins: ['Poppins', 'sans-serif'],
                oswald: ['Oswald', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
