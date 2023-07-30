import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
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

        <Map />
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

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName={styles.map}>
      <Marker position={center} />
    </GoogleMap>
  );
}