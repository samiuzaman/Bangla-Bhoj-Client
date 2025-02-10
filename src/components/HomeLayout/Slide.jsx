/* eslint-disable react/prop-types */
import { Button } from "keep-react";
import { Link } from "react-router-dom";

const Slide = ({ image, off, title, text, id }) => {
  console.log("Home: ", id);
  return (
    <div className="w-full bg-bannerBg bg-center bg-cover h-[38rem] ">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full h-full mt-8">
        <div className="w-full lg:w-1/2 px-14 space-y-3">
          <h3 className="text-3xl font-semibold text-[#fbc531] lg:text-4xl">
            {title}
          </h3>
          <p className="text-amber-50">{text}</p>
          <Link to={`/details/${id}`}>
            <Button
              variant="softBg"
              className="bg-[#CC3333] text-white mt-3 hover:text-white hover:bg-success-500"
            >
              Order Now
            </Button>
          </Link>
        </div>
        <br />
        
        <div className="px-6 lg:px-8">
          <img className="w-80 h-80" src={image} />
          <img
            className="absolute top-96 right-62 md:bottom-24  md:right-52 lg:top-80 lg:right-52  w-36 h-36 "
            src={off}
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
