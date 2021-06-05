/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-purple-700 text-opacity-100 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              EHR Compositions
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-purple-700 text-opacity-100 fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto"></ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-blue lg:hover:text-blue-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i className="lg:text-blue-200 text-blue-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Compositions
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-blue lg:hover:text-blue-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i className="lg:text-blue-200 text-blue-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Verisoned Composition
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
