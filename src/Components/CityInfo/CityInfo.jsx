import {useParams} from 'react-router-dom'

import styles from "./CityInfo.module.css";



const CityInfo = () => {
  const {id} = useParams()
  return (
    <div className={styles.cityInfo}>
      information related to individual city goes here
      <h1>id : {id}</h1>
    </div>
  );
};

export default CityInfo;
