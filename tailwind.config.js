/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#EBF3EE',
          100: '#C8DDD0',
          200: '#A5C7B2',
          400: '#7A9E87',
          600: '#5C8269',
          800: '#3E6449',
        },
        care: {
          50:  '#E8F2F9',
          100: '#B8D4E8',
          400: '#4A7FA5',
          600: '#2E6285',
          800: '#1A4663',
        },
        terra: {
          50:  '#F9EDE6',
          100: '#EEC9B3',
          400: '#C4724A',
          600: '#A05530',
          800: '#7A3A1A',
        },
        cream: '#FAF7F2',
        dark:  '#2D3128',
        mid:   '#6B7066',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
