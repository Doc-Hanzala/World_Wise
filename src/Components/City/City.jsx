import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import styles from "./City.module.css";
import { useGlobalContext } from "../../Context/Context";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const City = ({ cityName, Country, emoji, date, id, position }) => {
  const { currentCity, delCity } = useGlobalContext();

  function handleDel(e) {
    e.preventDefault();
    delCity(id);
  }
  return (
    <Link
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      className={`${styles.city}  ${
        id === currentCity.id ? styles["active"] : ""
      }  `}
    >
      <div className={styles.right}>
        <h3>{emoji}</h3>
        <h3>{cityName}</h3>
      </div>
      <div className={styles.left}>
        <h3>{formatDate(date)}</h3>
        <AiFillCloseCircle onClick={handleDel} className={styles.icon} />
      </div>
    </Link>
  );
};

export default City;
