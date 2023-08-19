import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <Link to="/">
        <img className={styles.img} src="logo.png" alt="" />
      </Link>

      <p>list of countries</p>
    </div>
  );
};

export default SideBar;
