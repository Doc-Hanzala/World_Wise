import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.img} src="logo.png" alt="" />
      </Link> 

      <ul className={styles.links}>
        <NavLink className={styles.link} to="/pricing">
          pricing
        </NavLink>
        <NavLink className={styles.link} to="/product">
          product
        </NavLink>
        <Link className={`${styles.link} btn`} to="/login">
          login
        </Link>
      </ul>
    </header>
  );
};

export default Header;
