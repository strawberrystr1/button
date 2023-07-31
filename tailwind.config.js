/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#3859c7',
        primaryHover: '#6b8af2',
        light: '#94aaf2',
        lightHover: '#bac8f5',
        error: "#ed2839",
        success: "#30d139",
        warning: "#f0bb29",
        info: "#30c6d1",
        errorHover: "#f26672",
        successHover: "#68ed6f",
        warningHover: "#edca68",
        infoHover: "#6de4ed"
      },
      borderColor: {
        primary: '#6b8af2',
        error: "#ed2839",
        success: "#30d139",
        warning: "#f0bb29",
        info: "#30c6d1",
        errorHover: "#f26672",
        successHover: "#68ed6f",
        warningHover: "#edca68",
        infoHover: "#6de4ed"
      }
    },
  },
  plugins: [],
}

