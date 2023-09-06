// apne

import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

import { useEffect, useState } from "react";

import styles from "./Map.module.css";
import { useGlobalContext } from "../../Context/Context";
import { useGeolocation } from "../../hooks/useGeolocation";

const Map = () => {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const MapLat = searchParams.get("lat");
  const MapLng = searchParams.get("lng");
  const { cities } = useGlobalContext();
  const {
    isLoading: geoLocationLoading,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    if ((MapLat, MapLng)) {
      setMapPosition([MapLat, MapLng]);
    }
  }, [MapLat, MapLng]);

  useEffect(() => {
    if (geoLocationPosition) {
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    }
  }, [geoLocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && (
        <button onClick={getPosition} className="btn positionBtn">
          {geoLocationLoading ? "loading" : "get current location"}
        </button>
      )}
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          return (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
            >
              <Popup>
                {city.emoji} - {city.cityName}
              </Popup>
            </Marker>
          );
        })}
        <ShowLocation position={mapPosition} />
        <ShowForm />
      </MapContainer>
    </div>
  );
};

function ShowLocation({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function ShowForm() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
