module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-blue': '#62BAF3'
      },
      fontFamily: {
        sans: ['Rubik', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    ({ matchComponents, theme }) => {
      matchComponents(
        {
          "truncate": (value) => ({
            display: "-webkit-box !important",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": value, /* Number of lines to show */
            overflow: "hidden",
          })
        },
        {
          values: theme("truncate"),
        }
      );
    }
  ],
};
