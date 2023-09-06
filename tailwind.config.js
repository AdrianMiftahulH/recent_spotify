/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'min': '0px', 'max': '767px'},
      'pad': {'min': '768px', 'max': '1023px'},
      'laptop': {'min': '1024px', 'max': '1279px'},
      'dekstop': {'min': '1280px', 'max': '1535px'},
    },
    colors: {
      transparent: 'transparent',
      dark: '#212121',
      primary: '#121212',
      secondary: '#535353',
      neutral: '#1db954',
      red: '#fc3c44',
      light: '#F7EDFF'
    },
    extend: {
      fontFamily: {
        Manrope: ['Manrope', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}
