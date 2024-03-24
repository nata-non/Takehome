import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        dynamic: "calc(1.3rem + 0.6vw)",
      },
      keyframes: {
        slideRight: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        scaleUp: {
          "0%": {
            scale: "0.8",
            opacity: "0",
          },
          "100%": {
            scale: "1",
            opacity: "1",
          },
        },
        fadein: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeinleft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-10%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeindrop: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeinleft: "fadeinleft 800ms ease-out",
        fadeindrop: "fadeindrop 0.5s ease-out forwards",
        fadein: "fadein 400ms ease-in-out",
        scaleUp: "scaleUp 800ms ease-out",
        slideRight: "slideRight 0.5s forwards",
        slideLeft: "slideLeft 0.5s forwards",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/section1/hero-image.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
