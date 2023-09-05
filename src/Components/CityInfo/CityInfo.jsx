import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./CityInfo.module.css";
import { useGlobalContext } from "../../Context/Context";
import Loading from '../Loading/Loading'

const CityInfo = () => {
  const { loading, getCityInfo, currentCity } = useGlobalContext();
  const { id } = useParams();

  const navigate = useNavigate();

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  useEffect(() => {
    getCityInfo(id);
  }, [id]);

  const { cityName, emoji, date, notes } = currentCity;

  if (loading) {
    return <Loading/>;
  }

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <button onClick={() => navigate(-1)} className="btn">
        back
      </button>
    </div>
  
  );
};

export default CityInfo;
