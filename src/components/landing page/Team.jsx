import React from "react";
import LandingPageNav from "./navbar";

export default function Team() {
  return (
      <>
        <LandingPageNav />
      
    <div className="row py-5">
      <div className="col-md-3 pt-0 mt-0 pb-5 pb-md-0">
        <div className="text-center">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
            className="mx-auto mb-4 w-32 rounded-lg"
            alt="Avatar"
          />
          <h5 className="mb-2 text-xl font-medium leading-tight">Nyuydine Bill</h5>
          <p className="text-neutral-500 dark:text-neutral-400">Full-Stack Developer</p>
        </div>
      </div>
      <div className="col-md-3 pb-5 pb-md-0">
        <div className="text-center">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
            className="mx-auto mb-4 w-32 rounded-lg"
            alt="Avatar"
          />
          <h5 className="mb-2 text-xl font-medium leading-tight">Ntunyu Serge</h5>
          <p className="text-neutral-500 dark:text-neutral-400">Web Developer</p>
        </div>
      </div>
      <div className="col-md-3 pb-5 pb-md-0">
        <div className="text-center">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
            className="mx-auto mb-4 w-32 rounded-lg"
            alt="Avatar"
          />
          <h5 className="mb-2 text-xl font-medium leading-tight">Mah Marieta</h5>
          <p className="text-neutral-500 dark:text-neutral-400">Frontend Developer</p>
        </div>
      </div>
      <div className="col-md-3 pb-5 pb-md-0">
        <div className="text-center">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
            className="mx-auto mb-4 w-32 rounded-lg"
            alt="Avatar"
          />
          <h5 className="mb-2 text-xl font-medium leading-tight">Ndifon Hilary</h5>
          <p className="text-neutral-500 dark:text-neutral-400">Backend Developer</p>
        </div>
      </div>
    </div>
    </>
  );
}
