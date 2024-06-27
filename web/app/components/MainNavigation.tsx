import { Link } from "@remix-run/react"

import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell, FaPlus } from "react-icons/fa6";

export default function MainNavigation() {

  return (
    <header className="antialiased">
      <nav className="fixed left-0 right-0 top-0 z-50 bg-gray-800 border-b border-gray-700 px-4 lg:px-6 py-2.5 text-white">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <GiHamburgerMenu />
            </button>
            <button
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <GiHamburgerMenu />
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <Link to="/" className="flex mr-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kilo Bravo</span>
            </Link>
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">Search</label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none dark:text-white">
                  <IoSearchOutline />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-700 border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search current library" />
              </div>
            </form>
          </div>
          {/* ----- Mobile ----- */}
          <div className="flex items-center lg:order-2">
                <button
                  type="button"
                  className="flex items-center justify-center text-primary-400 hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-lg p-3 focus:outline-none dark:focus:ring-primary-800 mr-1"
                >
                  <FaPlus />
                </button>
                <button type="button" data-dropdown-toggle="notification-dropdown" className="p-3 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                  <span className="sr-only">View notifications</span>
                  <FaBell />
                </button>
                <button
                  id="toggleSidebarMobileSearch"
                  type="button"
                  className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Search</span>
                  <IoSearchOutline />
                </button>
                <button type="button" className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                  <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
                </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
