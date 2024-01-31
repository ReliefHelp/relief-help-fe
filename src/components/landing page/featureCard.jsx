import React from "react";

import styled from "styled-components";

const FeatureCard = () => {
  return (
    <Wrapper>
      <div className="block text-dark rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <h1 className="text-center text-info-800"><i className="bi bi-exclamation-triangle-fill display-2 text-warning-700"></i></h1>
        <h5 className="mb-2 text-xl font-medium leading-tight text-green-800">
          Detection & Warning
        </h5>

        <p className="mb-4 text-base text-neutral-600">
          
          Imagine standing amidst breathtaking natural wonders, with Relief
          Help, you become more than an observer; you become a guardian of
          nature. Through early detection and warning systems, Relief Help
          alerts users to potential threats, providing them with crucial time to
          take preventive measures.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default FeatureCard;
