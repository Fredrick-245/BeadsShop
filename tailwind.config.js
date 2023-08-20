/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'form':'1fr 2fr'
      }
    },
    colors: {
      " --font-section-header-familly": "Quattrocento",
      " --primary-color-500": "#0f0c13",
      " --primary-color-400": "#2c253a",
      "  --primary-color-300": "#4a3f61",
      "  --primary-color-200": "#76649b",
      "--primary-color-100": "#937dc2",
      " --primary-color-50": "#b3a4d4",
      "--primary-color-10": "#f4f2f9",
      "--secondary-300": "#281b28",
      "--secondary-200": "#8b608b",
      " --secondary-100": "#b27bb2",
      "--secondary-50": "#cc95cc",
      "--tertiary-300": "#b3789e",
      "--tertiary-200": "#ffabe1",
      "--tertiary-100": "#ffbce7",
      " --color-300": "#a7ffe4",
      "--color-200": "#b0ffe7",
      "--color-100": "#c1ffec",
    },
  },
  plugins: [],
};
