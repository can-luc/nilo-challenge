/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: '#0F172A',
        secondary: '#6B7280',
        classic: '#3B82F6',
        scarlet: '#DC2625',
        grayLight: '#F3F4F6',
        success: '#22C55E',
        body: {
          background: '#F8FAFC',
        },
        navbar: {
          background: '#F8FAFC',
          gradiantblue: '#275FBB',
          gradiantpurple: '#932482',
          link: '#6B7280',
        },
        card: {
          background: '#FFFFFF',
          progress: {
            text: '#64748B',
            bar: '#4338CA',
            container: '#F1F5F9',
          },
        },
        layout: {
          page: '#E3E9F1',
        },
        search: {
          border: '#E2E8F0',
          text: '#94A3B8',
        },
      },
      boxShadow: {
        navbar: '0 4px 4px 0 rgba(15, 23, 42, 0.08)',
      },
    },
    screens: {
      md: '744px',
      lg: '1440px',
    },
  },
  plugins: [],
}
