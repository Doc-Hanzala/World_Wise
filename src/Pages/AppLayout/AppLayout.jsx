import styles from "./AppLayout.module.css";
import Map from "../../Components/Map/Map";
import SideBar from "../../Components/Sidebar/SideBar";

const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <SideBar />
      <Map />
    </div>
  );
};

export default AppLayout;
