// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import BannerBg from "../../assets/banner-bg.png";
import bgimg1 from "../../assets/Banner/Alu_Bharta.png";
import bgimg2 from "../../assets/Banner/Chingri_Malai_Curry.png";
import bgimg3 from "../../assets/Banner/Dim_Curry.png";
import bgimg4 from "../../assets/Banner/pati-sapta.png";

export default function Carousel() {
  // const bgStyle = {
  //   backgroundImage: "url('https://i.ibb.co.com/Zpwkr1K2/banner-bg.png')",

  //   fontSize: "50px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <div className="bg-[#FEF5EE]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="Get Your Web Development Projects Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Get Your Graphics Design Projects Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Start Your Digital Marketing Campaigns up n running"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg4}
            text="Start Your Digital Marketing Campaigns up n running"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
