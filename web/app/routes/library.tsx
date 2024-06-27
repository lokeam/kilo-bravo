// import { ActionFunctionArgs, redirect } from "@remix-run/node"
import SideBar from "../components/SideBar"

export default function Library() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 antialiased bg-gray-900 p-4 md:ml-64 h-screen pt-20">
      <SideBar />
      <h1>Library</h1>
    </div>
  )
}