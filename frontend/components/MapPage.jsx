import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from '../styles/Map.module.css';
import Link from 'next/link';

export default function MapPage({ location }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src='/hmbg.png'></img>
            </div>
            <h3>HistoryMaps</h3>
            <div className={styles.navlinks}>
                <Link href="/">Home</Link>
                <Link href="/MapPage">Maps</Link>
                <Link href="/Login">Login</Link>
                <Link href="/About">About</Link>
                <Link href="/Contact">Contact</Link>
            </div>
        </nav>

        

        <MapComponent location={location}/>
        <style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
            * {
                box-sizing: border-box;
            }
            `}</style>
    </div>
  );
}

function MapComponent({ location }) {
  const mapLocations = new Map();
  mapLocations.set('southAmerica', [-13.906519877130052, -59.984371304197275]);
  mapLocations.set('northAmerica', [40.60315457242338, -97.37740376299539]);
  mapLocations.set('australia', [-24.037697935179125, 134.7771056047168]);
  mapLocations.set('africa', [10.4052916297536, 19.123927835744105]);
  mapLocations.set('asia', [43.26254029649319, 105.1778106409575]);
  mapLocations.set('europe', [49.85543848942511, 12.054188858149995]);
  mapLocations.set('default', [-16.077996844484463, -59.189920161089205]);
  const latitude = mapLocations.get(location)[0];
  const longitude = mapLocations.get(location)[1];
  
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);
  const mapID = useMemo(() => ("ade6bb28a6d16224"), []);
  
  return (
    <GoogleMap 
        zoom={4} 
        center={center} 
        mapContainerClassName={styles.map}
        options={{ 
          mapId: {mapID},
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          minZoom: 3,
          maxZoom: 12}}>
      <Marker 
        position={center}
        title="Placeholder" />
    </GoogleMap>
  );
}