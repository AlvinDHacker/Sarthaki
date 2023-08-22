import React, { useState } from "react";
import img from '../assets/react.svg'
import { Briefcase, Building2, Home, Mailbox, PackageOpen, Phone, Quote, User2, Users2 } from 'lucide-react'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://sarthaki.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Sarthaki
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded="false"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
            onClick={handleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {nav ? (
            // <!-- drawer component -->
            <div
              //   id="drawer-navigation"
              className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800"
              // tabindex="-1"
            >
              <div className="py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                  <img src={img} className="mb-3"/>
                  <li>
                    <a
                      href="/"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={handleNav}
                    >
                      <Home/>
                      <span className="ml-3">Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={handleNav}
                    >
                      <PackageOpen/>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Services
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/aboutUs"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={handleNav}
                    >
                      <Users2/>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        About Us
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ourTeam"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={handleNav}
                    >
                      <User2/>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Our Team
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industries"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={handleNav}
                    >
                      <Building2/>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Industries
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/clients"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={handleNav}
                    >
                      <Users2/>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Clients
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/testimonials"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={handleNav}
                    >
                      <Quote/>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Testimonials
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={handleNav}
                    >
                      <Mailbox/>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Pricing
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={handleNav}
                    >
                      <Briefcase/>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Careers
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contactUs"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={handleNav}
                    >
                      <Phone/>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Contact Us
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/aboutUs"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/ourTeam"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Our Team 
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="/clients"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contactUs"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
