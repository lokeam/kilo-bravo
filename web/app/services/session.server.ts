// app/services/session.server.ts
import { createCookieSessionStorage } from '@remix-run/node';

export const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "dev",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
});
