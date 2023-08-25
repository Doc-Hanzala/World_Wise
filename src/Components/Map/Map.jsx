import {useSearchParams} from 'react-router-dom'

import styles from './Map.module.css'


const Map = () => {
  const [searchParams,setSearchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  return (
    <div className={styles.map}>
      <h2>i will work on this map component</h2>
      <h3>latitude {lat}</h3>
      <h4>longitude {lng}</h4>

    </div>
  ); 
};

export default Map;
