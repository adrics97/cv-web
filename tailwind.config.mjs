/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#000',
				card: '#F0F0F0',
				cardDark: "#1F2937",		
				highlight: '#28D979',
				highlightDark: "#16A34A",
				subtitle: '#3F3D3D'		
			},
			fontSize:{
				small: '8px',
				medium: '10px'
			}
		},
	},
	plugins: [],
}
