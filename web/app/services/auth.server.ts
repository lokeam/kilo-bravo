import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import { sessionStorage } from "./session.server";

export const authenticator = new Authenticator(sessionStorage);

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  async({ accessToken, refreshToken, extraParams, profile}) => {
    return { email: profile.emails[0].value, name: profile.displayName };
  }
);

authenticator.use(googleStrategy);
