import Country from "../../Components/Country/Country";
import Loading from "../../Components/Loading/Loading";
import styles from "./Countries.module.css";

const Countries = ({ cities, loading }) => {
  if (loading) {
    return <Loading />;
  }

  if (!cities.length) {
    return (
      <div className={styles.countries}>
        <p>add your first city by clicking on a city on the map</p>
      </div>
    );
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <div className={styles.countries}>
      {countries.map((country) => {
        return <Country key={country.emoji} {...country} />; 
      })}
    </div>
  );
};

export default Countries;
