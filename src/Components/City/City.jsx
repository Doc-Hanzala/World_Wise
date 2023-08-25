import { AiFillCloseCircle } from "react-icons/ai";
import {Link} from 'react-router-dom'

import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long", 
    year: "numeric",
  }).format(new Date(date));

const City = ({ cityName, Country, emoji, date,id,position }) => {
  return (
    <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className={styles.city}>
      <div className={styles.right}>
        <h3>{emoji}</h3>
        <h3>{cityName}</h3>
      </div>
      <div className={styles.left}>
        <h3>{formatDate(date)}</h3>
        <AiFillCloseCircle className={styles.icon} />
      </div>
    </Link>
  );
};

export default City;
