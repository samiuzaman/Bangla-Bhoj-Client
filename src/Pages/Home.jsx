import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Carousel from "../components/HomeLayout/Carousel";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Tutor World</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="dark:bg-metal-800">
        <Carousel></Carousel>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
