/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FEFFFE', // Blanco Piruli
        black: '#000000', // Negro
        red: '#FF0000', // Rojo Metro
        green: '#2e932e', // Verde Pinos
        teal: '#60C6B4', // Turquesa Dragon
        gray: {
          light: '#d7d2ca', // Gris Piruli Claro
          DEFAULT: '#3D3D3D', // Gris Piruli Oscuro
        },
        ivory: '#fdfcf7', // Piruli Marfil
        maroon: '#C31A26', // Rojo CAM
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}