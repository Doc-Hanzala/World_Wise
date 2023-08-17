import Header from "../../Components/Header/Header";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.price}>
      <Header />
      <div className={styles.priceInfo}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="img-2.jpg" alt="" />
        </div>
        <div className={styles.content}>
          <h1 className={styles.heading}>simple pricing.</h1>
          <h1 className={styles.heading}>just $9/month.</h1>
          <p className={styles.para}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            maiores, incidunt labore nam ut est similique quae exercitationem
            odio dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
