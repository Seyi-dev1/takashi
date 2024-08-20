import "./testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";

import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonials">
      <div className="topic">
        <p>Our Testimonials</p>
      </div>
      <div className="heading">
        <h2>What Our Clients Say About Us</h2>
      </div>
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          loop={true}
          speed={1000}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
        <div className="navigation">
          <div className="prev">
            <TfiAngleLeft />
          </div>
          <div className="next">
            <TfiAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
