import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
    >
      <div>
        <img
          src="https://images.pexels.com/photos/378268/pexels-photo-378268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/378268/pexels-photo-378268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default Banner;
