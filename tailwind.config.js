/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Pastikan untuk memuat file React (.jsx/.js)
  ],
  theme: {
    extend: {
      colors: {
        vintageBackground: '#f0f4f8',
        vintageBrown: '#9b8c72',
        vintageDark: '#6c4f3d',
        vintageBeige: '#b4a89f',
        vintageYellow: '#f0c78f',
        vintageCoral: '#d1a3a4',
      },
      fontFamily: {
        sans: ['Lora', 'sans-serif'], // Font Lora untuk teks sans-serif
        script: ['Pacifico', 'cursive'], // Font Pacifico untuk teks script
      },
    },
  },
  plugins: [],
}
