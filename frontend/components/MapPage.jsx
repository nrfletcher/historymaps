import { useMemo, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, OverlayView, InfoWindow, Marker } from "@react-google-maps/api";
import styles from '../styles/Map.module.css';
import Link from 'next/link';
import Sidebar from "./Sidebar";

export default function MapPage({ location }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  //---------- Map Location Logic
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
  //-----------------------

  const [markers, setMarkers] = useState([
    { id: 1, 
      pos: {lat: -13.906519877130052, lng:  -59.984371304197275},
      img: 'battle',
      title: 'Battle of Waterloo',
      date: '18 June, 1815',
      year: 1815,
      desc: 'The Battle of Waterloo, fought on June 18, 1815, was a pivotal event in European history that marked the end of the Napoleonic era and Napoleon Bonaparte\'s military ambitions. It took place near the town of Waterloo in present-day Belgium. The battle was a culmination of Napoleon\'s attempt to regain power after his earlier exile to the island of Elba.',
      wiki: 'https://en.wikipedia.org/wiki/Battle_of_Waterloo', 
      isOpen: false,
    },
    { id: 2, 
      pos: {lat: -14.906519877130052, lng:  -57.984371304197275},
      img: 'cultural',
      title: 'Battle of Waterloo',
      date: '18 June, 1835',
      year: 1835,
      desc: 'The Battle of Waterloo, fought on June 18, 1815, was a pivotal event in European history that marked the end of the Napoleonic era and Napoleon Bonaparte\'s military ambitions. It took place near the town of Waterloo in present-day Belgium. The battle was a culmination of Napoleon\'s attempt to regain power after his earlier exile to the island of Elba.',
      wiki: 'https://en.wikipedia.org/wiki/Battle_of_Waterloo', 
      isOpen: false,
    }
    ,
    { id: 3, 
      pos: {lat: -18.906519877130052, lng:  -52.984371304197275},
      img: 'birth',
      title: 'Battle of Waterloo',
      date: '18 June, 1825',
      year: 1825,
      desc: 'The Battle of Waterloo, fought on June 18, 1815, was a pivotal event in European history that marked the end of the Napoleonic era and Napoleon Bonaparte\'s military ambitions. It took place near the town of Waterloo in present-day Belgium. The battle was a culmination of Napoleon\'s attempt to regain power after his earlier exile to the island of Elba.',
      wiki: 'https://en.wikipedia.org/wiki/Battle_of_Waterloo', 
      isOpen: false,
    }
  ]);

  const [apiMarkers, setApiMarkers] = useState([]);
  const fetchMarkers = async () => {
    const response = await fetch("http://localhost:8080/history/markers");
    const data = await response.json();
    setApiMarkers(data);
  }
  console.log(apiMarkers);
  console.log(markers);

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

  // ---------- Checkboxes State

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    if (checkedOptions.includes(value)) {
      // If the checkbox is already checked, remove it from the list

      setCheckedOptions(checkedOptions.filter(option => option !== value));
    } else {
      // If the checkbox is unchecked, add it to the list
      setCheckedOptions([...checkedOptions, value]);
      console.log(checkedOptions);
    }

    filterMarkers();
  };
  //-------------------------

  //------------------- Date Slider State ------------------------

  const handleMinSliderChange = (event) => {
    setMinSliderValue(parseInt(event.target.value));
    filterMarkers();
  }

  const handleMaxSliderChange = (event) => {
    setMaxSliderValue(parseInt(event.target.value));
    filterMarkers();
  }
  //--------------------------------------------------------------

  //-------- Custom marker logic
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
                <Link href="/Contact">Contact</Link>
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
                        <p style={{ fontSize: '15px' }}>{marker.desc}</p>
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