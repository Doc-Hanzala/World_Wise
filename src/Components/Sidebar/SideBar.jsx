import AppNavigation from "../AppNavigation/AppNavigation";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
import img from "./logo.png";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <Link to="/">
        <img className={styles.img} src={img} alt="" />
      </Link>
      <AppNavigation />
    </div> 
  );
};

export default SideBar;
