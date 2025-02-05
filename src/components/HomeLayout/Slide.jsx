/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div className="w-full bg-center bg-cover h-[38rem]">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full h-full ">
        <div className="w-full lg:w-1/2 px-10">
          <h1 className="text-3xl font-semibold text-black lg:text-4xl">
            {text}
          </h1>
        </div>
        <br />
        {/* <Link
            to="/add-job"
            className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            Post Job & Hire Expert
          </Link> */}
        <div className="px-6 lg:px-8">
          <img className="w-96 h-96" src={image} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
