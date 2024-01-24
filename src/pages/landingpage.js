import React from "react";
import LandingPageNav from "../components/landing page/navbar";
import Carousel from "../components/landing page/carousel";
import FeatureCard from "../components/landing page/featureCard";
import WelcomeText from "../components/landing page/welcomeText";

function LandingPage() {
  return (
    <>
      <LandingPageNav />
      <div class="container-md">
        <section class="row justify-content-center align-items-center mt-4">
          <div class="col-lg-6">
            <Carousel />
          </div>
          <div className="d-lg-none">
            <br />
          </div>
          <div class="col-lg-6"><WelcomeText /></div>
        </section>
      </div>

      <FeatureCard />
    </>
  );
}

export default LandingPage;
