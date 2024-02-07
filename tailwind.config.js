module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      bg: "rgb(var(--color-bg) / <alpha-value>)",
      bg2: "rgb(var(--color-bg2) / <alpha-value>)",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      grey: "rgb(var(--color-grey) / <alpha-value>)",
      placehold: "rgb(var(--color-placehold) / <alpha-value>)",
     
     
      ascent: {
        1: "rgb(var(--color-ascent1) / <alpha-value>)",
        2: "rgb(var(--color-ascent2) / <alpha-value>)",
        3: "rgb(var(--color-ascent3) / <alpha-value>)",
        4: "rgb(var(--color-ascent4) / <alpha-value>)",
      },

    },
    screens: {
      xsm: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      maxWidth: {
        'custom-1': '500px',
        'custom-2': '200px', 
       },
    },
    
  },
  plugins: [
  ],
};
