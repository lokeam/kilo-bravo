import { Outlet, useLoaderData } from '@remix-run/react';
import { ActionFunction, json, LoaderFunction } from '@remix-run/node';
import { sidenavStateCookie } from '../services/cookies.server';

import MainNavigation from "../components/MainNav/index";
import SideNav from '../components/SideNav/index'

interface SidebarState {
  collapses: Record<string, boolean>;
}

interface LoaderData {
  sidenavState: SidebarState;
}

// Make sure the loader function is structured to match what the client expects
export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie');
  //const defaultState = { collapses: { viewAs: false, categories: false } };
  // If no cookie is present, initialize properly
  const sidenavState = (await sidenavStateCookie.parse(cookieHeader)) || { collapses: { viewAs: false, categories: false } };

  return json({ sidenavState });
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const collapseKey = formData.get('collapseKey') as string | null;
  const isOpen = (formData.get('isOpen') as string | null) === 'true';

  if (!collapseKey) {
    return json({ error: "Collapse key is missing" }, { status: 400 });
  }

  const cookieHeader = request.headers.get('Cookie');
  let state = await sidenavStateCookie.parse(cookieHeader);

  // Ensure state and collapses are properly initialized if undefined
  if (!state || !state.collapses) {
    state = { collapses: { viewAs: false, categories: false } };
  }

  if (collapseKey in state.collapses) {
    state.collapses[collapseKey] = isOpen;
  } else {
    return json({ error: "Invalid collapse key" }, { status: 400 });
  }

  return json({}, {
    headers: {
      'Set-Cookie': await sidenavStateCookie.serialize(state),
    }
  });
};

export default function Library() {
  const { sidenavState } = useLoaderData<LoaderData>();

  return (
    <div className="lg:px-8 antialiased bg-gray-900 md:ml-64 h-screen pt-24">
      <MainNavigation />
      <SideNav sidenavState={sidenavState}/>
      <Outlet />
    </div>
  )
}
