/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "desktop": "431px"
      }
      ,
      maxWidth: {
        "460": "460px"
      },
      boxShadow: {
        'b1': "inset 0px -8px 0px #10212A",
        'b2': "inset 0px -8px 0px #CC8B13",
        'b3': "inset 0px -8px 0px #118C87",
        'b4': "inset 0px -4px 0px #10212A",
        'b5': "inset 0px -4px 0px #6B8997",
        'b6': "inset 0px -4px 0px #CC8B13"
      },
      colors: {
         "31c": "#31C3BD"
      },
      gridTemplateColumns: {
        'col3': "repeat(3,1fr)"
      },
      animation: {
        "popDialog": "showMenu 0.3s ease-in"
      }
    },
  },
  plugins: [],
}

