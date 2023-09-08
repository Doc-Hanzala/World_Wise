import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Form.module.css";
import Loading from "../Loading/Loading";
import { useGlobalContext } from "../../Context/Context";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [emoji, setEmoji] = useState("");
  const { addCityInfo, loading } = useGlobalContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    if (!lat && !lng) {
      return;
    }
    const getCityLocation = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const data = await res.json();
        if (!data.city) throw new Error("Click somewhere else");
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };
    getCityLocation();
  }, [lat, lng]);

  if (isLoading) {
    return <Loading />;
  }

  if (!lat && !lng) {
    return alert("Start by clicking anywhere on the map");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newCity = {
      cityName,
      country,
      date,
      emoji,
      position: { lat, lng },
      notes,
    };

    await addCityInfo(newCity);
    navigate("/appLayout/cities");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${loading ? styles.loading : ""} `}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>

        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <button className="btn">Add</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="btn"
        >
          &larr; Back
        </button>
      </div>
    </form>
  );
}

export default Form;
