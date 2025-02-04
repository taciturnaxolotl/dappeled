// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare(),
  env: {
    schema: {
      SPOTIFY_CLIENT_ID: envField.string({
        context: "server",
        access: "public",
      }),
      SPOTIFY_CLIENT_SECRET: envField.string({
        context: "server",
        access: "secret",
      }),
      SPOTIFY_REDIRECT_URI: envField.string({
        context: "server",
        access: "public",
      }),
      APPLE_MUSIC_JWT: envField.string({
        context: "server",
        access: "secret",
      }),
      APPLE_MUSIC_KEY_ID: envField.string({
        context: "server",
        access: "secret",
      }),
      APPLE_TEAM_ID: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
});
