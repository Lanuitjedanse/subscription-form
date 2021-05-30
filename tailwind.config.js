module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "200px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
