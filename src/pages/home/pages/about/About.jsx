import SectionOne from "../../../../components/section-1/SectionOne";
import SectionFour from "../../../../components/section-4/SectionFour";
import Shopping from "../../../../components/shopping-section/Shopping";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.main}>
      <SectionOne
        title="We Revolutionized Digital Banking"
        desc="City Trust Offshore Bank have grown to become one of the largest digital banking providers, committed to inventing, simplifying, and humanizing the banking experience."
      />
      <SectionFour />
      <Shopping />
    </div>
  );
};

export default About;
