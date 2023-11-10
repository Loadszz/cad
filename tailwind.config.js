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
				'lp': { 'max': '1024px' },
				'tb': { 'max': '768px' },
				'mb': { 'max': '375px' },
			},
			fontFamily: {
				raleway: ['var(--font-raleway)'],
				unbounded: ['var(--font-unbounded)'],
			},
			backgroundImage: {
				'hero-pattern': "url('/images/header-background.jpg')",
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				white: '#FFFFFF',
				black: '#12191C',
				accent: '#37C0F6',
				myBrown: 'rgba(255, 255, 255, 0.20)'
			},
		},
	},
	plugins: [],
}
