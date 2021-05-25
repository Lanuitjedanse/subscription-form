module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    variants: {
      extend: {
        theme: {
          backgroundColor: (theme) => ({
            ...theme("colors"),
            super: "#22BE34",
          }),
        },
      },
    },
    plugins: [],
  },
};
