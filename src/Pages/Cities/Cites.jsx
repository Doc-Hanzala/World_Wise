import City from "../../Components/City/City";
import Loading from "../../Components/Loading/Loading";
import { useGlobalContext } from "../../Context/Context";
import styles from "./Cities.module.css";

const Cites = () => {
  const { loading, cities } = useGlobalContext();
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
