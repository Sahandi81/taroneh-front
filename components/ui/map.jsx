import { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
// import { mapIcon } from './map-icon.js';
import styles from '@/styles/components/map.module.scss';

export default function Map() {
  const [map, setMap] = useState(null);
  const [leafLatLong, setLeafLatLong] = useState([35.762, 51.4063]);
  const markerRef = useRef();

  useEffect(() => {
    if (map) {
      function onMapMove() {
        markerRef.current.setLatLng(map.getCenter());

        const position = markerRef.current.getLatLng();
        const lat = Number(position['lat']).toFixed(5);
        const lng = Number(position['lng']).toFixed(5);
        setLeafLatLong([lat, lng]);
      }

      map.addEventListener('move', onMapMove);
      return () => map.removeEventListener('move', onMapMove);
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      function onZoomStart() {
        markerRef.current.setLatLng(map.getCenter());
        
        const position = markerRef.current.getLatLng();
        const lat = Number(position['lat']).toFixed(5);
        const lng = Number(position['lng']).toFixed(5);
        setLeafLatLong([lat, lng]);
      }

      map.addEventListener('zoomstart', onZoomStart);
      return () => map.removeEventListener('zoomstart', onZoomStart);
    }
  }, [map]);

  return (
    <div className={styles.container}>
      <MapContainer
        center={leafLatLong}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='Taroneh &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_API_key}`}
        />
        {/* <Marker position={leafLatLong} icon={mapIcon} ref={markerRef} /> */}
      </MapContainer>
    </div>
  );
}
