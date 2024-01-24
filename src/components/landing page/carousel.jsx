import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import img1 from '../../assets/images/carousel/GettyImages_1243654244.0.jpeg';
import img2 from '../../assets/images/carousel/disaster pic.jpg'
import img3 from '../../assets/images/carousel/planting.jpg'

export default function Carousel() {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel" className="z-1">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-lg">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[1200ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={img1}
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <h5 className="text-xl">Free from Earthquakes</h5>
              
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={img2}
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
              <h5 className="text-xl">Free from Land slides</h5>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={img3}
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <h5 className="text-xl">Safe Planting</h5>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
