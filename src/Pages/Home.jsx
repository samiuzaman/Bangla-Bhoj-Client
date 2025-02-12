import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Carousel from "../components/HomeLayout/Carousel";
import Category from "../components/Category";
import OurTeam from "../components/HomeLayout/OurTeam";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Bangla Bhoj</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="dark:bg-metal-800">
        <Carousel></Carousel>
        <Category></Category>
        <Outlet></Outlet>
        <OurTeam></OurTeam>
      </div>
    </div>
  );
};

export default Home;
