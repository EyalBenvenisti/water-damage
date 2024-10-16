// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        navy: '#1f2937',
        orange: '#f97316',
        sky: '#0ea5e9',
        grey: '#f1f5f9',
        slate: '#64748b',
      },
      fontSize: {
        // Defining header font sizes
        h1: ['1rem', { lineHeight: '1.2', fontWeight: '400' }], // 40px
        h2: ['2rem', { lineHeight: '1.3', fontWeight: '700' }],   // 32px
        h3: ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }], // 28px
        h4: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],  // 24px
        h5: ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }], // 20px
        h6: ['1rem', { lineHeight: '1.5', fontWeight: '500' }],    // 16px
      },
      spacing: {
        'container-max': '1440px', // Define a maximum container width if needed
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
