export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      primary: "#0052CC",
      secondary: "#172B4D",
      bgLight: "#F4F5F7",
      bgLighter: "#FAFBFC",
      success: "#36B37E",
      warning: "#FFAB00",
      danger: "#FF5630",
      textDark: "#091E42",

      // Required defaults
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
    },

    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },

  plugins: [],
};
