import "./hero.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import hero1 from "../../assets/hero-slide-4.png";

import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="container">
            <div className="text">
              <div className="catch">
                <span>Easy Fast Secure</span>
              </div>
              <div className="heading">
                <h1>Secure and Easy Online Payment Solution</h1>
              </div>
              <div className="description">
                <p>
                  Haven Offshore bank transformed the digital banking industry
                  more than ten years ago
                </p>
              </div>
              <div className="button">
                <button>Get Started</button>
              </div>
            </div>
            <div className="image">
              <img src={hero1} alt="hero" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="text"></div>
            <div className="image"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="text"></div>
            <div className="image"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
