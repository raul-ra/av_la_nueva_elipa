/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Asegúrate de incluir todos los archivos de src
    './components/**/*.{js,ts,jsx,tsx}', // Incluye todos los archivos de components
    './pages/**/*.{js,ts,jsx,tsx}', // Incluye todos los archivos de pages (en src)
  ],
  theme: {
    extend: {
      colors: {
        white: '#FEFFFE', 
        black: '#000000', 
        red: '#FF0000', 
        green: '#2e932e', 
        teal: '#60C6B4',
        verdigris: '#4da594',
        gray: {
          light: '#d7d2ca', 
          dark: '#3D3D3D', 
          800: '#2D2D2D',
        },
        ivory: '#fdfcf7', 
        maroon: '#C31A26',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        semibold: 600, // Añadir font-semibold como semibold
      },
      fontSize: {
        'lg': '1.125rem', // 18px
      },
    },
  },
  plugins: [],
};
