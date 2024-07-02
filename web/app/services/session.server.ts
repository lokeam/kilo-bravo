// app/services/session.server.ts
import { createCookieSessionStorage, redirect } from '@remix-run/node';

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


export async function requireUserSession(request: Request) {
  // get the session
  const cookie = request.headers.get("cookie");
  const session = await getSession(cookie);

  // check if session has the credentials
  if (!session.has("credentials")) {
    console.log(session.get("credentials"));

    // if there is no user session, redirect to login
    throw redirect("/");
  }

  return session;
}