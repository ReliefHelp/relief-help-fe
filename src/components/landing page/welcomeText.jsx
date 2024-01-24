import React from "react";

function WelcomeText() {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-5xl fw-bold">
        <span className="text-success-700 text-capitalize">WELCOME</span> to
        Relief-Help!
      </h1>
      <p className="mt-3 text-xl">
        <i>
          Immerse yourself in captivating landscapes, from lush forests to
          majestic mountains, while staying informed about potential risks like
          landslides, floods, and more.
        </i>
      </p>
    </div>
  );
}

export default WelcomeText;
