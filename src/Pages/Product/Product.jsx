import Header from "../../Components/Header/Header";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <Header />
      <div className={styles.productInfo}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="img-1.jpg" alt="" />
        </div>
        <div className={styles.content}>
          <h1 className={styles.heading}>about worldWise.</h1>
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

export default Product;
