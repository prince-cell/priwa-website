/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.html"], // Added root directory
  theme: {
    fontFamily: {
      'sans': ['Noto Sans', 'ui-sans-serif', 'system-ui'],
      'lobster': ['Lobster', 'ui-sans-serif', 'system-ui'],
      'montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui'],
      'raleway': ['Raleway', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        customBlue: '#5e87eb',
      }
    },
  },
  plugins: [],
}

