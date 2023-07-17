/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	'./src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
				primary: "#033E50",
				secondary: "#F69534",
				tertiary: "#FE6722",
				blue: "#033E50",
				grey: "#3E4A4A",
				yellow: "#F69534",
				orange: "#FE6722",
				sea: "#3E8678",
				green: "#147167",
				cream: "#E4B599",
				white: "#ffffff",
				trans: "#ffffff00",
				black: "#000000",
				"logo-nav-1": "#F2682B",
				"logo-nav-2": "#F79732",
				ukm: "#AC8F50",
			},
			fontFamily: {
				poppins: ["poppins", "sans-serif"],
				agrandir: ["agrandir", "sans-serif"],
				droid: ["droid", "serif"],
				open: ["Open Sans", "sans-serif"],
			},
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			backgroundImage: {
				CandiHijau: 'url("/assets/images/CandiHijau.png")',
			},
    },
  },
  plugins: [],
}
