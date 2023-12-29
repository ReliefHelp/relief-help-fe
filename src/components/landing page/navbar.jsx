import React from "react";

function LandingPageNav() {
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-between mx-36">
        <a className="navbar-brand">Navbar</a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>
      <div className="bg--800 p-4">
        <h1 className="text-4xl font-bold text-pink-400 ">
          Tailwind CSS Works!
        </h1>
      </div>
    </>
  );
}

export default LandingPageNav;
