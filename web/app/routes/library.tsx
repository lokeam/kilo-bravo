import { Outlet, useLoaderData } from '@remix-run/react';
import { ActionFunction, json, LoaderFunction } from '@remix-run/node';
import { sidenavStateCookie } from '../services/cookies.server';

import MainNavigation from "../components/MainNavigation";
import SideNav from '../components/SideNav/index'

interface SidebarState {
  isOpen: boolean;
}

// Define the structure of the data returned by the loader
interface LoaderData {
  sidenavState: SidebarState;
}

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie');
  const sidenavState = await sidenavStateCookie.parse(cookieHeader) || { isOpen: false };

  console.log("Parsed Cookie State:", sidenavState);
  return json({ sidenavState });
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const isOpen = formData.get('isOpen') === 'true';

  const cookieHeader = request.headers.get('Cookie');
  let cookie = await sidenavStateCookie.parse(cookieHeader) || {};
  cookie.isOpen = isOpen;

  return json({ isOpen }, {
    headers: {
      'Set-Cookie': await sidenavStateCookie.serialize(cookie),
    }
  })
}


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