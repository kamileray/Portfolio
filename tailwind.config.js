/** @type {import('tailwindcss').Config} */
module.exports = {
  //purge: ['.src/**/*.html'],
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.html'],

  theme: {
    extend: {
      fontFamily: {
        'eray': ["ERAY", "cursive"],
        'eray-bold': ["ERAY-BOLD", "cursive"]
      },
      colors: {
        gri: '#909090',
        html: '#FB923C',
        css: '#60A5FA',
        tailwind: '#3B82F6',
        js: '#EAB308',
        bootstrap: '#7952B3',
        git: '#F97316',
        react: '#61DAFB',
        php: '#787CB4'
      },
      spacing: {
        '15': '3.75rem'
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  
  plugins: [],
}
