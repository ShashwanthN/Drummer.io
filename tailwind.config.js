module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'text': 'var(--text)',
      'bg': 'var(--background)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'ascent': 'var(--accent)',
     
     

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
