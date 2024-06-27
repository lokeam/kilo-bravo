import { Outlet } from "@remix-run/react";
import MainNavigation from "../components/MainNavigation";
import SideBar from "../components/SideBar"

export default function Library() {
  return (
    <div className="lg:px-8 antialiased bg-gray-900 md:ml-64 h-screen pt-24">
      <MainNavigation />
      <SideBar />
      <Outlet />
    </div>
  )
}