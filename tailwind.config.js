/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        pre: ["Pretendard"],
      },
      image: {
        link: "url(src/assets/link.png)'",
        css: "url('src/assets/css.png')",
        js: "url('/src/assets/javascript.png')",
        react: "url('/src/assets/react.svg')",
      },
      screens: {
        // xl: { min: "1280px" },

        lg: { min: "1025px" },

        md: { min: "769px", max: "1024px" },

        sm: { max: "768px" },
      },
      colors: {
        primary: "#6E85B7",
        secondary: "#F8F9D7",
      },
      keyframes: {
        fade: {
          "0%": { transform: { filter: "blur(12px)", opacity: 0 } },
          "100%": { filter: "blur(0px)", opacity: 1 },
        },
        blink: {
          "0% 50% 100%": { opacity: 1 },
          "25% 75%": { opacity: 0 },
        },
      },
      animation: {
        fade: "title 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both",
        blink: "blink 0.6 both",
      },
    },
  },
  plugins: [],
};
