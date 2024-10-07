module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  // Setting Roboto as the default sans-serif font
      },
      colors: {
        navy: '#1f2937',
        orange: '#f97316',
        sky: '#0ea5e9',
        grey: '#f1f5f9',
        slate: '#64748b',
      },
      backgroundImage: {
        'hero-pattern': "url('/path-to-hero-background.jpg')",  // Custom background image for the hero section
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
