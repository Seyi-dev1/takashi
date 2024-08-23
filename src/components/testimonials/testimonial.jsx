import "./testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import client1 from "../../assets/client-1.jpg";
import client2 from "../../assets/client-2.jpg";
import client3 from "../../assets/client-3.jpg";
import client4 from "../../assets/client-4.jpg";
import client5 from "../../assets/client-5.jpg";
import client6 from "../../assets/client-6.jpg";

import React from "react";
import TestimonialCard from "../testimonial-card/testimonialCard";

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
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            800: { slidesPerView: 3, spaceBetween: 20 },
          }}
          navigation={{
            prevEl: ".prevv",
            nextEl: ".nextt",
          }}
          loop={true}
          speed={1000}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimonialCard
              image={client1}
              description={
                "Haven offshore bank has a deeper connection with their target audience. Emotional connection is a critical driver in long term association with a brand."
              }
              name={"Tom Harris"}
              position={"Enginner, Olleo"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={client2}
              description={
                "Haven offshore bank has a deeper connection with their target audience. Emotional connection is a critical driver in long term association with a brand."
              }
              name={"Tom Harris"}
              position={"Enginner, Olleo"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={client3}
              description={
                "Haven offshore bank has a deeper connection with their target audience. Emotional connection is a critical driver in long term association with a brand."
              }
              name={"Tom Harris"}
              position={"Enginner, Olleo"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={client4}
              description={
                "Haven offshore bank has a deeper connection with their target audience. Emotional connection is a critical driver in long term association with a brand."
              }
              name={"Tom Harris"}
              position={"Enginner, Olleo"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={client5}
              description={
                "Haven offshore bank has a deeper connection with their target audience. Emotional connection is a critical driver in long term association with a brand."
              }
              name={"Tom Harris"}
              position={"Enginner, Olleo"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={client6}
              description={
                "Haven offshore bank has a deeper connection with their target audience. Emotional connection is a critical driver in long term association with a brand."
              }
              name={"Tom Harris"}
              position={"Enginner, Olleo"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="navigationn">
        <div className="prevv">
          <TfiAngleLeft />
        </div>
        <div className="nextt">
          <TfiAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
