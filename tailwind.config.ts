import type { Config } from "tailwindcss";

export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   width: {
    input: "400px",
   },
   height: {
    input: "40px",
    xs: "20px",
    sm: "24px",
    base: "32px",
    lg: "40px",
    xl: "48px",
    custom: "calc(100vh - 24px)",
   },
  },
 },
 plugins: [],
} satisfies Config;
