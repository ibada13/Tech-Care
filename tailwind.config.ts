import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "#072635",
        sg: "#01F0D0",
        sw: "#C8CCD41A",
        swg:"#D8FCF7",  
      },
    },
  },
  plugins: [],
};
export default config;
