import { Link } from "react-router-dom";
import styles from "./services.module.scss";
import { GiTakeMyMoney } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { TbHomeShield } from "react-icons/tb";
const Services = () => {
  return (
    <div className={styles.main}>
      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.title_con}>
            <GiTakeMyMoney className={styles.icon} />
            <span className={styles.title_text}>Loan</span>
          </div>
          <span className={styles.text}>
            From time to time in life and business, we find ourselves needing a
            little or a lot more money than we have to meet certain pressing
            financial goals. At Bluewin Credit Union our loan offerings provide
            a fall-back position to secure the funds you need.
          </span>
          <Link to="/login" className={styles.link}>
            Learn More →
          </Link>
        </div>
        <div className={styles.service}>
          <div className={styles.title_con}>
            <CiCreditCard1 className={styles.icon} />
            <span className={styles.title_text}>Cards</span>
          </div>
          <span className={styles.text}>
            Our MasterCard and Visa debit cards provide you 24-hour access to
            your current and savings account. The debit card is not just an ATM
            Card, it also enables you to make cashless purchases through POS,
            WEB, and ATM anywhere in the world.
          </span>
          <Link to="/login" className={styles.link}>
            Learn More →
          </Link>
        </div>
        <div className={styles.service}>
          <div className={styles.title_con}>
            <GrTransaction className={styles.icon} />
            <span className={styles.title_text}>Bank Transfer</span>
          </div>
          <span className={styles.text}>
            With this transfer platform you can transfer foreign currency to any
            bank account in the world. You can transfer up to the equivalent of
            ten thousand US Dollars daily. You must have your hardware token to
            authenticate all transfers on Internet Banking.
          </span>
          <Link to="/login" className={styles.link}>
            Learn More →
          </Link>
        </div>
        <div className={styles.service}>
          <div className={styles.title_con}>
            <RiSecurePaymentLine className={styles.icon} />
            <span className={styles.title_text}>Private Banking</span>
          </div>
          <span className={styles.text}>
            One of our strongest points is developing and implementing
            investment strategies to exceed your expectations, employing a mix
            of proven proficiency and cutting edge solutions. Always working
            with you to execute the plan, you can rest assured that your long
            term objectives will steer your portfolio towards the achievement of
            your ultimate goals.
          </span>
          <Link to="/login" className={styles.link}>
            Learn More →
          </Link>
        </div>
        <div className={styles.service}>
          <div className={styles.title_con}>
            <FaGraduationCap className={styles.icon} />
            <span className={styles.title_text}>Education Loan</span>
          </div>
          <span className={styles.text}>
            If you are interested in obtaining an education loan from us, there
            are several steps you can take to get started. First, you should
            research the different types of loans that are available, including
            federal and private loans. Federal loans are typically the best
            option for most students, as they offer more generous protections
            for borrowers, such as income-driven repayment and loan forgiveness,
            than private student loans do
          </span>
          <Link to="/login" className={styles.link}>
            Learn More →
          </Link>
        </div>
        <div className={styles.service}>
          <div className={styles.title_con}>
            <TbHomeShield className={styles.icon} />
            <span className={styles.title_text}>Home Loan</span>
          </div>
          <span className={styles.text}>
            If you are interested in obtaining a home loan from us, we offer a
            variety of options to help you finance your dream home. Our home
            loans come with competitive interest rates and flexible repayment
            terms to suit your needs.
          </span>
          <Link to="/login" className={styles.link}>
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
