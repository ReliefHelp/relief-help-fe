import { useState } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const LandingPageNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 relative z-10">
      <div className="container-fluid mx-auto flex justify-between items-center">
        {/* Brandname */}
        <div className="text-white text-xl font-semibold d-flex">
          <span className="my-auto px-4">RELIEF HELP</span>
        </div>

        {/* Navbar links for larger screens */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="text-white hover:underline mt-2 transition duration-300 ease-in-out"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:underline mt-2 transition duration-300 ease-in-out"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-white hover:underline mt-2 transition duration-300 ease-in-out"
          >
            Info
          </a>
          <a href="#">
            <button className="btn btn-success">Login</button>
          </a>
        </div>

        {/* Toggle menu icon for smaller screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Bars3BottomRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Responsive menu for smaller screens */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 p-4">
            <a
              href="#"
              className="block text-white mb-2 hover:underline pb-1 transition duration-300 ease-in-out"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-white mb-2 hover:underline pb-1 transition duration-300 ease-in-out"
            >
              Contact
            </a>
            <a
              href="#"
              className="block text-white hover:underline pb-1 transition duration-300 ease-in-out"
            >
              Info
            </a>
            <a href="#">
              <button className="btn btn-success">Login</button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LandingPageNav;
