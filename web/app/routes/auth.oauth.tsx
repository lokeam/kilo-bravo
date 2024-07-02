// routes/auth.oauth.tsx
import { ActionFunction, redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  const params = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    access_type: 'offline',
    prompt: 'consent',
  };

  url.search = new URLSearchParams(params).toString();
  return redirect(url.toString());
};

export default function OAuthRedirect() {
  return null;
}
