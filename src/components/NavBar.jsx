import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase";

function NavBar({ user }) {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleLogout = () => {
    auth
      .signOut()
      .then((res) => {
        alert("logged out!");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <nav className="NavBar bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <NavLink
                  to="/tailwind"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-blue-500 text-white"
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/tailw"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-blue-500 text-white"
                >
                  Team
                </NavLink>

                <NavLink
                  to="/tailwi"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-blue-500 text-white"
                >
                  Projects
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">
                <div>
                  <button
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                    onClick={() => setIsOpenProfile(!isOpenProfile)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                {/* <!--
                  Profile dropdown panel, show/hide based on dropdown state.
  
                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                --> */}
                <div
                  className={`origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg py-2 bg-white ring-1 ring-black ring-opacity-5 ${
                    isOpenProfile ? "block" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link to="/tailwind" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-100" role="menuitem">
                    Your Profile
                  </Link>

                  <Link to="/tailwind" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200" role="menuitem">
                    Settings
                  </Link>

                  <button
                    className="block w-full text-left px-4 py-3 text-sm text-red-700 hover:bg-red-100"
                    role="menuitem"
                    onClick={() => handleLogout()}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
                Heroicon name: menu
  
                Menu open: "hidden", Menu closed: "block"
              --> */}
              <svg
                className={`block h-6 w-6 ${isOpenMenu ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <!--
                Heroicon name: x
  
                Menu open: "block", Menu closed: "hidden"
              --> */}
              <svg
                className={`block h-6 w-6 ${isOpenMenu ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpenMenu ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <NavLink
            to="/tailwind"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900 text-white"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/tailwi"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900 text-white"
          >
            Team
          </NavLink>

          <NavLink
            to="/tailwin"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900 text-white"
          >
            Projects
          </NavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">Tom Cook</div>
              <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <Link
              to="/tailwind"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Your Profile
            </Link>

            <Link
              to="/tailwind"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Settings
            </Link>

            <button
              className="block px-3 py-2 rounded-md text-base font-medium text-red-400 hover:text-white hover:bg-gray-700"
              onClick={() => handleLogout()}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
