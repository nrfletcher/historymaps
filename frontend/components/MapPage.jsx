import { useMemo, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, OverlayView, InfoWindow, Marker } from "@react-google-maps/api";
import styles from '../styles/Map.module.css';
import Link from 'next/link';
import Sidebar from "./Sidebar";

export default function MapPage({ location, data }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

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

  const [markers, setMarkers] = useState();

  useEffect(() => {
    setMarkers(data);
  }, [data]);

  const [activeMarkers, setActiveMarkers] = useState([]);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [minSliderValue, setMinSliderValue] = useState(0);
  const [maxSliderValue, setMaxSliderValue] = useState(2023);

  const filterMarkers = () => {
    const filteredMarkers = markers.filter((marker) => {
      return (
        marker.year <= maxSliderValue && marker.year >= minSliderValue && checkedOptions.includes(marker.img)
      );
    });
    setActiveMarkers(filteredMarkers);
  }

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    if (checkedOptions.includes(value)) {
      setCheckedOptions(checkedOptions.filter(option => option !== value));
    } else {
      setCheckedOptions([...checkedOptions, value]);
      console.log(checkedOptions);
    }

    filterMarkers();
  };

  const handleMinSliderChange = (event) => {
    setMinSliderValue(parseInt(event.target.value));
    filterMarkers();
  }

  const handleMaxSliderChange = (event) => {
    setMaxSliderValue(parseInt(event.target.value));
    filterMarkers();
  }
  
  const toggleInfoWindow = (markerId) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === markerId ? { ...marker, isOpen: !marker.isOpen } : marker
      )
    );
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
        <Sidebar checkedOptions={checkedOptions} setCheckedOptions={setCheckedOptions}
                  handleCheckboxChange={handleCheckboxChange} minSliderValue={minSliderValue} maxSliderValue={maxSliderValue}
                  handleMinSliderChange={handleMinSliderChange} handleMaxSliderChange={handleMaxSliderChange}
                  setMaxSliderValue={setMaxSliderValue} setMinSliderValue={setMinSliderValue}></Sidebar>

        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src='/hmbg.png'></img>
            </div>
            <h3>HistoryMaps</h3>
            <div className={styles.navlinks}>
                <Link href="/">Home</Link>
                <Link href="/DefaultMap">Maps</Link>
                <Link href="/Login">Login</Link>
                <Link href="/About">About</Link>
            </div>
        </nav>

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

            {markers.filter((marker) => {
              return (
                marker.year <= maxSliderValue &&
                marker.year >= minSliderValue &&
                checkedOptions.includes(marker.img)
              );
            })
            .map((marker) => (
              <OverlayView
                key={marker.id}
                position={marker.pos}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div style={{ cursor: 'pointer' }}>
                  <img
                    onClick={() => toggleInfoWindow(marker.id)}
                    src={marker.img + '.png'}
                    alt="Custom Icon"
                    style={{ width: '40px', height: '40px' }}
                  />
                  {marker.isOpen && (
                    <InfoWindow onCloseClick={() => toggleInfoWindow(marker.id)} position={marker.pos}>
                      <div>
                        <h2>{marker.title}</h2>
                        <h3>{marker.date}</h3>
                        <p style={{ fontSize: '15px' }}>{marker.description}</p>
                        <a href={marker.wiki} style={{ fontSize: '15px' }}>
                          Wikipedia
                        </a>
                      </div>
                    </InfoWindow>
                  )}
                </div>
              </OverlayView>
          ))}

        </GoogleMap>

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