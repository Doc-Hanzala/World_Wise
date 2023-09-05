import { NavLink, Outlet } from "react-router-dom";

import styles from "./AppNavigation.module.css";

const AppNavigation = () => {
  return ( 
    <div> 
      <NavLink to="cities" className={styles.navigation}>
        <button className="btn">cities</button>
      </NavLink>
      <NavLink to="countries" className={styles.navigation}>
        <button className="btn">countries</button>
      </NavLink>
      <Outlet />
    </div>
  );
};

export default AppNavigation;
