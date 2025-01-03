/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        spotifyGreen: "#1ED760",
        violet: "#57467B",
        darkWine: "#231E34",
        snow: "#FFFAFB",
      },
    },
  },
  plugins: [],
};
