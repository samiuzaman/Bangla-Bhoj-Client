/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./assets/banner-bg.png')",
      },
    },
  },

  plugins: [],
};
export default keepTheme(config);
