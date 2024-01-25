import React from "react";

function WhatIs() {
  return (
    <div className="bg-gray-800 text-white h-100 flex flex-col justify-center items-center px-5 md:py-auto py-5">
      <h1 className="text-center text-2xl fw-bold">
        What is
        <span className="text-warning text-capitalize"> Relief-Help?</span>
      </h1>
      <p className="mt-3 text-center">
        Relief-Help combines technology, science, and humanity to create a tool
        that goes beyond exploration and knowledge, serving as a practical
        solution to address global issues related to disaster management. The
        application aims to contribute to a safer and more resilient world by
        providing users with the tools and information needed to navigate
        potential risks and protect well-being
      </p>
    </div>
  );
}

export default WhatIs;
