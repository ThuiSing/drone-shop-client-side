module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundColor: theme => ({
      //   ...theme('colors'),
      //   'primary': '#3490dc',
      //   'secondary': '#ffed4a',
      //   'danger': '#e3342f',
      //  })
      backgroundColor: {
        primary: "#80808066",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
