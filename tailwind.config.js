/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		// container: {
		// 	padding: {
		// 		DEFAULT: '15px',
		// 	},
		// },
		extend: {
			screens: {
				'pc': { 'max': '1710px' },
				'tb': { 'max': '1024px' },
				'mb': { 'max': '768px' },
				'mm': { 'max': '425px' },
			},
			fontFamily: {
				raleway: ['var(--font-raleway)'],
				unbounded: ['var(--font-unbounded)'],
			},
			backgroundImage: {
				'hero-bg': "url('/images/hero/hero-background.jpg')",
				'burger-bg': "url('/images/header/header-burger-background.svg')",
				'our-client-bg': "url('/images/our-client/our-client-bg.jpg')",
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				white: '#FFFFFF',
				black: '#12191C',
				// gray: '#B8BBBC',
				accent: '#37C0F6',
				myBrown: 'rgba(255, 255, 255, 0.20)'
			},
		},
	},
	plugins: [],
}
