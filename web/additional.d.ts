declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GOOGLE_REDIRECT_URI: string;
    GOOGLE_CALLBACK_URL: string;
    SESSION_SECRET: string;
    NODE_ENV: string,
  }
}
