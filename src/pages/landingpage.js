import React from "react";
import LandingPageNav from "../components/landing page/navbar";
import Carousel from "../components/landing page/carousel";
import FeatureCard from "../components/landing page/featureCard";
import WelcomeText from "../components/landing page/welcomeText";
import WhatIs from "../components/landing page/whatIs";
import Users from "../components/landing page/who its for/users";
import Features from "../components/Features";
import FAQs from "../components/landing page/FAQs";

function LandingPage() {
  return (
    <>
      <LandingPageNav />
      <div className="container-md pb-4">
        <section className="row justify-content-center align-items-center mt-4">
          <div className="col-lg-6">
            <WelcomeText />
          </div>
          <div className="d-lg-none">
            <br />
          </div>
          <div className="col-lg-6">
            <Carousel />
            <br></br>
            <div className="text-center d-block d-md-none">
              <a
                href="#_"
                class="inline-flex items-center justify-center h-14 px-10 py-0 text-lg font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-gray-800 border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline hover:bg-green-800"
              >
                Get Started{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <br></br>
        <hr></hr>
        <section className="row justify-content-center mt-4">
          <div className="col-lg-6 justify-content-center align-items-center">
            <WhatIs />
          </div>
          <div className="d-lg-none">
            <br />
          </div>
          <div className="col-lg-6">
            <Users />
          </div>
        </section>
        <br></br>
        <div className="d-none d-sm-block">
          <br></br>
        </div>

        <Features />
        <br></br>
        <hr></hr>
        <br></br>
        <div className="d-none d-sm-block">
          <h1 className="text-center text-3xl fw-bold">
            Frequently Asked Questions
          </h1>
          <br></br>
        </div>
        <div className="d-block d-sm-none">
          <h1 className="text-center text-3xl fw-bold">FAQs</h1>
          <br></br>
        </div>
        <FAQs />
      </div>
    </>
  );
}

export default LandingPage;
