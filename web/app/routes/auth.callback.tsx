import { LoaderFunction, redirect } from "@remix-run/node";
import { getSession, commitSession } from "../services/session.server";

// Loader function to handle the OAuth callback
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  console.log("Callback URL:", url.toString());
  console.log("Received code:", code);

  if (!code) {
    console.log("No code received, redirecting to login");
    return redirect("/login");
  }

  try {
    console.log("Sending login code to backend");
    const response = await fetch("http://localhost:8081/auth/oauth/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
      console.log("Error from backend:", await response.text());
      return redirect("/login");
    }

    const userData = await response.json();
    console.log("User data received:", userData);

    const session = await getSession(request.headers.get("Cookie"));
    session.set("userId", userData.userId);
    session.set("accessToken", userData.accessToken);
    session.set("refreshToken", userData.refreshToken);

    return redirect("/library", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (error) {
    console.error("Error sending code to backend:", error);
    return redirect("/login");
  }
};

// Component to handle the OAuth callback
export default function OAuthCallback() {
  console.log("OAuthCallback component rendered");
  return <div>Redirecting...</div>;
}
