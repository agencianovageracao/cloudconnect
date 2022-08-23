/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {'Poppins': 'sans-serif'},
      colors: {
        green: {
          500: "#0FFE8D"
        },
        blue: {
          500: "#465CFD"
        },
        cyan: {
          500: "#06FDE9"
        }
      }
    }
  },
  plugins: []
}
