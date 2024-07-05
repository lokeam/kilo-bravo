import { createCookie } from "@remix-run/node";

export const sidenavStateCookie = createCookie('sidenav-state', {
  maxAge: 604800, // one week
});
