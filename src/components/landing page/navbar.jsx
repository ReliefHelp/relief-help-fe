import { useState, useEffect } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Sidebar from "./SideBar";
import axios from "axios";

const LandingPageNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameFetched, setUsernameFetched] = useState(false);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/auth/api/current-user"
        );
        setUsername(response.data.username);
        setUsernameFetched(true);
        setLoggedIn(true);
      } catch (error) {
        console.error("Error retrieving username:", error);
      }
    };

    fetchUsername();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/auth/logout/");
      setLoggedIn(false);
      setUsername("");
      setUsernameFetched(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 relative z-10">
      <div className="container-fluid mx-auto flex justify-between items-center">
        {/* Brandname */}
        <Link to="/">
          <div className="text-white text-xl font-semibold d-flex">
            <span className="my-auto pl-0">RELIEF HELP</span>
          </div>
        </Link>

        {/* Navbar links for larger screens */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/team"
            className="text-white hover:underline mt-2 transition duration-300 ease-in-out"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-white hover:underline mt-2 transition duration-300 ease-in-out"
          >
            Contact
          </a>
          <a
            href="/reliefhelper"
            className="text-white hover:underline mt-2 transition duration-300 ease-in-out"
          >
            Bot
          </a>
          <a
            href="/sidebar"
            className="text-white hover:underline mt-2 transition duration-300 ease-in-out"
          >
            Account
          </a>
          <a
            href="/faqs"
            className="text-white hover:underline mt-2 transition duration-300 ease-in-out"
          >
            FAQs
          </a>
          <button>
            <Sidebar />
          </button>

          {usernameFetched ? (
            loggedIn ? (
              <div className="flex items-center">
                <button className="btn btn-success" onClick={handleLogout}>
                  Logout
                </button>
                <span className="text-white ml-2">{`(${username})`}</span>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-success">Login</button>
              </Link>
            )
          ) : null}
        </div>

        {/* Toggle menu icon for smaller screens */}
        <div className="md:hidden">
          <button
            aria-haspopup="true"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <Bars3BottomRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Responsive menu for smaller screens */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-gray-800 p-4 "
          >
            <a
              href="/about"
              className="block text-white mb-2 hover:underline pb-1 transition duration-300 ease-in-out"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block text-white mb-2 hover:underline pb-1 transition duration-300 ease-in-out"
            >
              Contact
            </a>
            <a
              href="/reliefhelper"
              className="block text-white mb-2 hover:underline pb-1 transition duration-300 ease-in-out"
            >
              Bot
            </a>
            <a
              href="/sidebar"
              className="block text-white mb-2 hover:underline pb-1 transition duration-300 ease-in-out"
            >
              Account
            </a>
            <a
              href="/faqs"
              className="block text-white mb-2 hover:underline pb-1 transition duration-300 ease-in-out"
            >
              FAQs
            </a>
            {usernameFetched ? (
              loggedIn ? (
                <div className="flex items-center">
                  <button className="btn btn-success" onClick={handleLogout}>
                    Logout
                  </button>
                  <span className="text-white ml-2">{`(${username})`}</span>
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn btn-success">Login</button>
                </Link>
              )
            ) : null}
          </div>
        )}
      </div>
    </nav>
  );
};

export default LandingPageNav;
