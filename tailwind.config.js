/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Relaway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        provider: {
          facebook: '#1877F2',
          google: '#FBBC05',
          apple: '#999999',
        },
      },
      backgroundImage: {
        auth: "url('https://d1zx2a1kk4wi0g.cloudfront.net/ImagesSite/login-background')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
