import { AiFillCloseCircle } from "react-icons/ai";

import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const City = ({ cityName, Country, emoji, date }) => {
  return (
    <div className={styles.city}>
      <div className={styles.right}>
        <h3>{emoji}</h3>
        <h3>{cityName}</h3>
      </div>
      <div className={styles.left}>
        <h3>{formatDate(date)}</h3>
        <AiFillCloseCircle className={styles.icon} />
      </div>
    </div>
  );
};

export default City;
