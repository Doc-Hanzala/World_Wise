import styles from "./Country.module.css";

const Country = ({ country, emoji }) => {
  return (
    <div className={styles.country}>
      <h2>{emoji}</h2>
      <h2>{country}</h2>
    </div>
  );
};

export default Country;
