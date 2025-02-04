interface ImportMetaEnv {
  readonly DB_PASSWORD: string;
  readonly PUBLIC_POKEAPI: string;
  readonly SPOTIFY_CLIENT_ID: string;
  readonly SPOTIFY_CLIENT_SECRET: string;
  readonly SPOTIFY_REDIRECT_URI: string;
  readonly APPLE_MUSIC_JWT: string;
  readonly APPLE_MUSIC_KEY_ID: string;
  readonly APPLE_TEAM_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
