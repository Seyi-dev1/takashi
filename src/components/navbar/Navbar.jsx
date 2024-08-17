import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.contact_nav}></div>
      <div className={styles.main_nav}></div>
    </div>
  );
};

export default Navbar;
