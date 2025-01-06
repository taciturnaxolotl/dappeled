/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        spotifyGreen: "oklch(76.97% 0.2124 148.67)",
        violet: "oklch(43.58% 0.087 297.45)",
        disabledGray: "oklch(34.33% 0.0253 294.82)",
        darkWine: "oklch(25.18% 0.0413 293.65)",
        tingedDarkness: "oklch(23.8% 0.0382 294.82)",
        snow: "oklch(95.83% 0.0213 292.82)",
        thistle: "oklch(86.26% 0.0382 294.82)",
        disabledLightGray: "oklch(63.69% 0.0253 294.82)",
        lightModeDisabledGray: "oklch(47.65% 0.0253 294.82)",
        lightModeDisabledLightGray: "oklch(73.69% 0.0253 294.82)",
      },
    },
  },
  plugins: [],
};
