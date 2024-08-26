/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Activa el modo oscuro basado en la clase
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
        gray: {
          light: '#d7d2ca', 
          DEFAULT: '#3D3D3D',
        },
        ivory: '#fdfcf7', 
        maroon: '#C31A26',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
