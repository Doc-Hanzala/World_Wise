import styles from "./Home.module.css";

import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.home}>
        <h1 className={styles.heading}>you travel the world</h1>
        <h2 className={styles.subHeading}>
          worldWise keeps track of your adventures
        </h2>
        <p className={styles.para}>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <Link to='/login' >
          <button className="btn homeBtn">start tracking now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
