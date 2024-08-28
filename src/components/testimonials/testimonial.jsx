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
                "City Trust Offshore Bank has been a fantastic choice for managing my retirement funds. Their offshore accounts offer great benefits, and I appreciate the security and privacy they provide. The customer service is top-notch, always ready to assist with any questions."
              }
              name={"David H."}
              position={"Retiree"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={client2}
              description={
                "City Trust Offshore Bank offers a level of service that is unmatched. Their expertise in international markets has allowed me to expand my real estate investments globally with ease. They truly understand the needs of their clients."
              }
              name={"Ahmed Khana"}
              position={"Real Estate Developer"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={client3}
              description={
                "Opening an account with City Trust Offshore Bank was one of the best decisions I made for my startup. The process was straightforward, and their support has been invaluable. I feel confident knowing my finances are in good hands."
              }
              name={"Emily K."}
              position={"Tech Guru"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={client4}
              description={
                "I was initially hesitant about offshore banking, but City Trust Offshore Bank exceeded all my expectations. The team is knowledgeable and responsive, and their investment solutions have significantly improved my portfolio's performance. Highly recommend!"
              }
              name={"Carlos G"}
              position={"Investor"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={client5}
              description={
                "City Trust Offshore Bank has been an incredible partner for my business. Their personalized service and attention to detail have helped streamline our financial operations, making international transactions seamless and secure. I couldn't ask for a better banking experience"
              }
              name={"Jane M."}
              position={"Small Business Owner"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={client6}
              description={
                "As an expat, managing finances across multiple countries can be challenging. City Trust Offshore Bank made it simple with their flexible account options and excellent customer service. It's a relief to have a bank that understands my unique situation."
              }
              name={"Sophie L"}
              position={"Expatrait"}
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
