import { useState } from "react";
import { Link } from "@remix-run/react"

import Avatar from "./Avatar";

import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell, FaPlus } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";
import kbLogo from "../../public/tk_icon.webp";

import Modal from "./Modal";
import NewBookForm from "./NewBookForm";



export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const avatarData = {
    alt: 'picture of border collie',
    img: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    initials: 'HD'
  };

  return (
    <header className="antialiased">
      <nav className="fixed left-0 right-0 top-0 z-40 bg-dark-gunmetal border-b border-gray-700 px-4 lg:px-6 py-2.5 text-white">
        <div className="flex flex-row justify-between items-center">

          {/* ----- Logo / Nav Start ----- */}
          <div className="navLeft">
          <div className="flex antialiased translate-x-0 mid:translate-x-0">
            {/* {<!-- Close button -->} */}
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
              className="p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <GiHamburgerMenu />
              <span className="sr-only">Toggle sidebar</span>
            </button>

            {/* {<!-- Logo -->} */}
            <a className="block h-9 w-9" href="index.html">
              <img src={kbLogo} alt="" />
            </a>
          </div>
          </div>


          {/* ----- Search / Nav Center ----- */}
          <div className="navCenter pl-36">
            <form action="#" method="GET" className="hidden lg:block lg:pl-10 navCenterSearch">
              <label htmlFor="topbar-search" className="sr-only">Search</label>
              <div className="flex flex-row relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none dark:text-white">
                  <IoSearchOutline />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-700 border border-gray-600 text-gray-900 sm:text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search current library" />
              </div>
            </form>
          </div>

          {/* ----- Mobile / Nav End ----- */}
          <div className="navEnd">
            <div className="flex items-center">

                  {/* ---- Add Book btn ---- */}
                  <button
                    type="button"
                    className="flex items-center justify-center text-hepatica hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 font-medium rounded text-lg p-3 focus:outline-none dark:focus:ring-primary-800 mr-1"
                    onClick={() => setIsOpen(true)}
                  >
                    <FaPlus />
                  </button>

                  {/* ---- Modal ---- */}
                  <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                  >
                    <NewBookForm />
                  </Modal>

                  <button type="button" data-dropdown-toggle="notification-dropdown" className="p-3 mr-1 text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                    <span className="sr-only">View notifications</span>
                    <FaBell />
                  </button>

                  <button type="button" className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                    <span className="sr-only">Open user menu</span>
                    {/* ----- Avatar Component ----- */}
                    <Avatar alt={avatarData.alt} img={avatarData.img} initials={avatarData.initials}/>
                  </button>
            </div>
          </div>

        </div>
      </nav>
    </header>
  )
}
