
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
 
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif"
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)'  },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      screens: {
        "2xl": "1536px",
        "4xl": "2048px",
      },
      fontSize: {
        'body-sm': '14px',
        'body-md': '16px',
        'body-lg': '18px',
      },
      colors: {
        'primary-dark': '#273746',
        backGround: "#121316",
        'backGround-dark': '#8FA6AF',
        'primary-blue': '#007aaa',
        'secondy-blue': '#006B95',
        'primary-red': '#EF4444',
        'secondy-red': '#D13C3C',
        'primary-green': '#22C55E',
        'secondy-green': '#1EAC52',
        'primary-yellow': '#EAB308',
        'secondy-yellow': '#CD9D07',
        'primary-orange': '#e67e22',
        'secondy-orange': '#B94E08',
      },
    },
  },
  plugins: [],
}