/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // montserrat: ["Montserrat", "san-serif"],
        body: ['Inter', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#002CFF",
        secondary: "#DD0BFF",
        dark: "#111111",
        sjak_primary: "#006B3F",     // St John Green
        sjak_secondary: "#FFC72C",   // St John Yellow
        sjak_red: "#C8102E",         // Accent red
        sjak_black: "#000000",
        sjak_white: "#FFFFFF",

        dark_bg: "#0f172a",
        light_bg: "#ffffff"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      //   screens: {
      //   sm: "100%",       // small screens
      //   md: "100%",
      //   lg: "1200px",     // custom large width
      //   xl: "1400px",     // extra large width
      //   "2xl": "1600px",  // very large screens
      // },
      },
    },
  },
  plugins: [],
}

