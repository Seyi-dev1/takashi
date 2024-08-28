import Hero from "../../../../components/hero/hero";
import SectionOne from "../../../../components/section-1/SectionOne";
import SectionTwo from "../../../../components/section-2/SectionTwo";
import SectionThree from "../../../../components/section-3/SectionThree";
import SectionFour from "../../../../components/section-4/SectionFour";
import SectionFive from "../../../../components/section-5/SectionFive";
import Testimonial from "../../../../components/testimonials/testimonial";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <SectionOne
        title="The Better Way To Save & Invest Online"
        desc="Your City Trust Offshore Bank account is your key to unlocking a universe
          of opportunities. Whether making international payments, receiving
          funds, managing your digital business, or accessing capital, City Trust
          Offshore Bank opens your business up to the world."
      />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Testimonial />
    </div>
  );
};

export default Homepage;
