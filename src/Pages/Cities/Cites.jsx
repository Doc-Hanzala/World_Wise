import City from "../../Components/City/City";
import Loading from "../../Components/Loading/Loading";
import styles from "./Cities.module.css";

const Cites = ({ cities, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.cities}>
      {cities.map((city) => {
        return <City key={city.id} {...city} />;
      })}
    </div>
  );
};

export default Cites;
