module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html", // Ensure this file is included for debugging
  ],
  theme: {
    extend: {
      colors: {
        background: "#020202", // Dark background
        foreground: "#FFFFFF", // Light text color
        accent: "#35D18F", // Green accent color
        button: "#141414", // Dark button background
        link: "#0D6EFD", // Blue link color
        border: "#E0E0E0", // Light border color
        primary: "#0D6EFD", // Blue primary color
        secondary: "#35D18F", // Green secondary color
        warning: "#FF914D", // Orange warning color
        info: "#6D99FF", // Blue info color
        success: "#35D18F", // Green success color
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        heading: '36px',
        body: '14px',
      },
      fontWeight: {
        heading: '700',
        body: '600',
      },
    },
  },
  plugins: [],
};
