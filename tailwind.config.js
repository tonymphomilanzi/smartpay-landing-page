    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
        fontFamily: {
        sora: ["Sora", "sans-serif"],
        },
        colors: {
         dark: "#0B0F19",
        accent: "#00C896",
    },
  },
},
      plugins: [],
    }