import { Link } from "@remix-run/react";
import { SiGooglehome } from "react-icons/si";
import { MdOutlineGridView } from "react-icons/md";
import { HiOutlineCollection } from "react-icons/hi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


import kbLogo from "../../public/tk_icon.webp";

export default function SideBar() {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full border-r bg-yankees-blue border-yankees-blue md:translate-x-0 z-60 p-5" aria-label="Sidenav" id="drawer-navigation" aria-hidden="true">
      <div className="overflow-y-auto px-3 h-full bg-yankees-blue">

          {/* Logo / btn */}
          <div className="flex antialiased translate-x-0 mid:translate-x-0 pb-14">
            {/* {<!-- Close button -->} */}
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
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
            <a className="block h-9 w-9 mt-1 ml-3 mb-2 bg-h" href="index.html">
              <img src={kbLogo} alt="" />
            </a>
          </div>
          {/* Logo / btn  */}

          <form action="#" method="GET" className="md:hidden mb-2">
            <label htmlFor="sidebar-search" className="sr-only">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                  </svg>
                </div>
                <input type="text" name="search" id="sidebar-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />
            </div>
          </form>
          <ul className="space-y-2">
            <li>
                <Link to="/" className="flex items-center p-2 text-base font-medium text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <SiGooglehome />
                  <span className="ml-3">Home</span>
                </Link>
            </li>
            <li>
                <button type="button" className="flex items-center p-2 w-full text-base font-medium text-white rounded transition duration-75 group hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                  <MdOutlineGridView />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap text-hepatica">View as</span>
                  <MdOutlineKeyboardArrowDown className="w-6 h-6" />
                </button>
                <ul id="dropdown-pages" className="py-2 space-y-2">
                  <li>
                      <Link to="/"
                        className="flex items-center p-2 pl-9 w-full text-base font-medium text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Grid
                      </Link>
                  </li>
                  <li>
                      <Link to="/"
                        className="flex items-center p-2 pl-9 w-full text-base font-medium text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Table
                      </Link>
                  </li>
                  <li>
                      <Link to="/"
                        className="flex items-center p-2 pl-9 w-full text-base font-medium text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        List
                      </Link>
                  </li>
                </ul>
            </li>
            <li>
                <button type="button" className="flex items-center p-2 w-full text-base font-medium text-white rounded transition duration-75 group hover:bg-gray-700">
                  <HiOutlineCollection />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap ml-3">Categories</span>
                  <MdOutlineKeyboardArrowDown className="w-6 h-6" />
                </button>
            </li>
            <ul id="dropdown-pages" className="py-2 space-y-2">
                  <li>
                      <Link to="/"
                        className="flex items-center p-2 pl-9 w-full text-base font-medium text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        My Category #1
                      </Link>
                  </li>
                  <li>
                      <Link to="/"
                        className="flex items-center p-2 pl-9 w-full text-base font-medium text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        My Category #2
                      </Link>
                  </li>
                  <li>
                      <Link to="/"
                        className="flex items-center p-2 pl-9 w-full text-base font-medium text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Starred
                      </Link>
                  </li>
                  <li>
                      <Link to="/"
                        className="flex items-center p-2 pl-9 w-full text-base font-medium text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        To Read
                      </Link>
                  </li>
                </ul>
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link to="/" className="flex items-center p-2 text-base font-medium text-gray-900 rounded transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <IoHelpBuoyOutline />
                <span className="ml-3">Help</span>
              </Link>
            </li>
          </ul>
      </div>
      <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
          <Link to="/" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
            </svg>
          </Link>
          <Link to="/" data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
            </svg>
          </Link>
          <div id="tooltip-settings" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded shadow-sm opacity-0 transition-opacity duration-300 tooltip" style={{position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(71px, -64px)"}} data-popper-placement="top">
            Settings page
            <div className="tooltip-arrow" data-popper-arrow="" style={{position: "absolute", left: "0px", transform: "translate(59px, 0px)"}}></div>
          </div>
          <button type="button" data-dropdown-toggle="language-dropdown" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300"></path>
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                <g fill="#fff">
                  <g id="d">
                      <g id="c">
                        <g id="e">
                            <g id="b">
                              <path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path>
                              <use xlinkHref="#a" y="420"></use>
                              <use xlinkHref="#a" y="840"></use>
                              <use xlinkHref="#a" y="1260"></use>
                            </g>
                            <use xlinkHref="#a" y="1680"></use>
                        </g>
                        <use xlinkHref="#b" x="247" y="210"></use>
                      </g>
                      <use xlinkHref="#c" x="494"></use>
                  </g>
                  <use xlinkHref="#d" x="988"></use>
                  <use xlinkHref="#c" x="1976"></use>
                  <use xlinkHref="#e" x="2470"></use>
                </g>
            </svg>
          </button>
          {/* <!-- Dropdown --> */}
          <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown" style={{position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate(184px, 890px)"}} data-popper-placement="bottom">
            <ul className="py-1" role="none">
                <li>
                  <Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                      <div className="inline-flex items-center">
                        <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                            <g fillRule="evenodd">
                              <g strokeWidth="1pt">
                                  <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path>
                                  <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path>
                              </g>
                              <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path>
                              <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"></path>
                            </g>
                        </svg>
                        English (US)
                      </div>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                      <div className="inline-flex items-center">
                        <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                            <path fill="#ffce00" d="M0 341.3h512V512H0z"></path>
                            <path d="M0 0h512v170.7H0z"></path>
                            <path fill="#d00" d="M0 170.7h512v170.6H0z"></path>
                        </svg>
                        Deutsch
                      </div>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                      <div className="inline-flex items-center">
                        <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z"></path>
                              <path fill="#009246" d="M0 0h170.7v512H0z"></path>
                              <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"></path>
                            </g>
                        </svg>
                        Italiano
                      </div>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                      <div className="inline-flex items-center">
                        <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512">
                            <defs>
                              <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"></path>
                            </defs>
                            <path fill="#de2910" d="M0 0h512v512H0z"></path>
                            <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlinkHref="#a"></use>
                            <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlinkHref="#a"></use>
                            <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlinkHref="#a"></use>
                            <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlinkHref="#a"></use>
                            <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlinkHref="#a"></use>
                        </svg>
                        中文 (繁體)
                      </div>
                  </Link>
                </li>
            </ul>
          </div>
      </div>
    </aside>
  );
}