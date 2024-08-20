import "./hero.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import hero1 from "../../assets/hero-slide-4.png";
import hero2 from "../../assets/hero-slide-5.png";
import hero3 from "../../assets/hero-slide-6.png";
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";

import React from "react";
import CButton from "../custom-button/CButton";

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop={true}
        speed={1000}
        modules={[Navigation]}
        className="mySwiper"
      >
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
              <div className="mybutton">
                <CButton children={"Get Started"} />
              </div>
            </div>
            <div className="image">
              <img src={hero1} alt="hero" />
            </div>
          </div>
        </SwiperSlide>
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
              <div className="mybutton">
                <CButton children={"Get Started"} />
              </div>
            </div>
            <div className="image">
              <img src={hero2} alt="hero" />
            </div>
          </div>
        </SwiperSlide>
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
              <div className="mybutton">
                <CButton children={"Get Started"} />
              </div>
            </div>
            <div className="image">
              <img src={hero3} alt="hero" />
            </div>
          </div>
        </SwiperSlide>
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
  );
};

export default Hero;
