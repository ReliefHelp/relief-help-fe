import React from "react";
import FeatureCard from "./landing page/featureCard";

function Features() {
  return (
    <div className="row">
      <h1 className="text-center text-3xl fw-bold">
        Features{" "}
        <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.77em] font-bold leading-none text-info-700">
          New
        </span>
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <div className="col-lg-4 mb-3">
        <div className="block text-dark h-100 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <h1 className="text-center text-info-800">
            <i className="bi bi-exclamation-triangle-fill display-3 text-danger-700"></i>
          </h1>
          <h5 className="mb-2 text-xl font-medium leading-tight text-info-800">
            Detection & Warning
          </h5>

          <p className="mb-4 text-base text-neutral-600">
            Imagine standing amidst breathtaking natural wonders, with Relief
            Help, you become more than an observer; you become a guardian of
            nature. Through early detection and warning systems, Relief Help
            alerts users to potential threats, providing them with crucial time
            to take preventive measures.
          </p>
        </div>
      </div>
      <div className="col-lg-4 mb-3">
        <div className="block text-dark h-100 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <h1 className="text-center text-info-800">
            <i className="bi bi-graph-up-arrow display-3 text-info-700"></i>
          </h1>
          <h5 className="mb-2 text-xl font-medium leading-tight text-info-800">
            Real-Time Monitoring and Reporting.
          </h5>

          <p className="mb-4 text-base text-neutral-600">
            With the application installed on their smartphones, individuals can
            collect and share real-time data on weather conditions, water
            levels, temperature changes, and other relevant factors. By crowd
            sourcing this information, Relief Help creates a comprehensive and
            up-to-date database, allowing authorities and researchers to make
            informed decisions and plan effective disaster response strategies.
          </p>
        </div>
      </div>
      <div className="col-lg-4 mb-3">
        <div className="block text-dark rounded-lg bg-white h-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <h1 className="text-center text-info-800">
            <i className="bi bi-buildings-fill display-3 text-warning-700"></i>
          </h1>
          <h5 className="mb-2 text-xl font-medium leading-tight text-info-800">
            Community Engagement and Education
          </h5>

          <p className="mb-4 text-base text-neutral-600">
            Users can share their experiences, insights, and best practices for
            disaster preparedness and response, fostering a sense of collective
            responsibility and empowerment.
          </p>
        </div>
      </div>
      <div className="col-lg-4 mb-3">
        <div className="block text-dark rounded-lg bg-white h-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <h1 className="text-center text-info-800">
            <i className="bi bi-check-circle-fill display-3 text-success-700"></i>
          </h1>
          <h5 className="mb-2 text-xl font-medium leading-tight text-info-800">
            Predictive Analytics and Risk Assessment
          </h5>

          <p className="mb-4 text-base text-neutral-600">
            By analyzing vast amounts of historical and real-time data, Relief
            Help generates predictive analytics and risk assessments for
            different regions. These assessments help users understand the
            potential impact and severity of various disasters, allowing them to
            make informed decisions about their actions and investments.
          </p>
        </div>
      </div>
      <div className="col-lg-4 mb-3">
        <div className="block text-dark rounded-lg bg-white h-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <h1 className="text-center text-info-800">
            <i className="bi bi-cloud-hail-fill display-3 text-gray-400"></i>
          </h1>
          <h5 className="mb-2 text-xl font-medium leading-tight text-info-800">
            Weather App
          </h5>

          <p className="mb-4 text-base text-neutral-600">
            Relief Help also provides a Weather App feature enabling users to
            get forcasts on weather and other wearther-related information.
          </p>
        </div>
      </div>
      <div className="col-lg-4 mb-3">
        <div className="block text-dark rounded-lg bg-white h-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <h1 className="text-center text-info-800">
            <i className="bi bi-chat-square-dots-fill display-3 text-gray-600"></i>
          </h1>
          <h5 className="mb-2 text-xl font-medium leading-tight text-info-800">
            AI Chat Support
          </h5>

          <p className="mb-4 text-base text-neutral-600">
            Relief Help Users have access to an AI assistant which will answer all their worries, provide them with tips, and even educate them on any information in reation to the app. This AI assistant is available 24/7 for all users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
