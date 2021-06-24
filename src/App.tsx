import logo from "./logo.svg";
import { Map, LocationRow } from "./Map";
import { Navigation } from "./Navigation";
import "./Navigation.css";
import { useEffect, useState } from "react";


function App() {
  const [locationIndex, setLocationIndex] = useState(0);
  const [locations, setLocations] = useState<LocationRow[]>([{ lat: 0, lon: 0, time: 0, rowid: 0 }]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://davidbarke.com/api/location_ts")
      .then((res) => res.json())
      .then(
        (res) => setLocations(res),
        (error) => setError(error)
      );
  });

  if (error) {
    return <div> Locations could not be fetched! </div>
  } else {
    return <div className="fullheight relative">
      <Navigation
        locationIndex={locationIndex}
        maxLocationIndex={locations.length - 1}
        setLocationIndex={setLocationIndex}
      />
      <Map height="100%" locations={locations} location={locations[locationIndex]} />
    </div>
  }
}

export default App;
