import styles from "./AppLayout.module.css";
import Map from "../../Components/Map/Map";
import SideBar from "../../Components/Sidebar/SideBar";
import User from "../../Components/User/User";

const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
