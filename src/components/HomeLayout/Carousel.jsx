// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgimg1 from "../../assets/Banner/Alu_Bharta.png";
import bgimg2 from "../../assets/Banner/Chingri_Malai_Curry.png";
import bgimg3 from "../../assets/Banner/Dim_Curry.png";
import Off25 from "../../assets/Banner/25discount.png";
import Off35 from "../../assets/Banner/35discount.png";

export default function Carousel() {
  // const bgStyle = {
  //   backgroundImage: "url('https://i.ibb.co.com/Zpwkr1K2/banner-bg.png')",

  //   fontSize: "50px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <div className="bg-banner bg-center bg-no-repeat bg-cover backdrop-blur-lg">
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
            off={Off25}
            title="Simple yet delicious! Our creamy and flavorful Alu Bharta is the perfect comfort food."
            text="Order now and enjoy a 25% discount! "
            id="67a6ebce1777b7eb78c93fd4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            off={Off35}
            title="Indulge in the rich, creamy flavors of our Chingri Malai Bengali delicacy!"
            text="Order now and enjoy a 35% discount"
            id="67a6ebce1777b7eb78c93fd8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            off={Off25}
            title="Spice up your meal with our delicious Dim Curry—rich, flavorful cooked!"
            text="Order now and enjoy a 15% discount!"
            id="67a6ebce1777b7eb78c93fd5"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
