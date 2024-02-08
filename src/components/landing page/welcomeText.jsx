import React from "react";
import { Link } from "react-router-dom";

function WelcomeText() {
  return (
    <div className="text-center">
      <h1 className="text-3xl fw-bold">
        <span className="text-success-700 text-4xl text-capitalize">
          WELCOME
        </span>{" "}
        to Relief-Help!
      </h1>
      <br></br>
      <p className="mt-3 px-1 d-none d-md-inline">
        <i>
          Immerse yourself in captivating landscapes, from lush forests to
          majestic mountains, while staying informed about potential risks like
          landslides, floods, and more.
        </i>
      </p>
      
      <div className="d-none d-md-inline"><br></br>
      <br></br>
        <Link
          to="/status"
          class="inline-flex items-center justify-center h-14 px-10 py-0 text-lg font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-gray-800 border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline hover:bg-green-800"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default WelcomeText;
