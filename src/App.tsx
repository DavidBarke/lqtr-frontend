import logo from "./logo.svg";
import "./App.css";
import {Map, LocationRow} from "./Map";
import { useEffect, useState } from "react";


function App() {
  const [locations, setLocations] = useState<LocationRow[]>([{lat: 0, lon: 0, time: 0, rowid: 0}]);
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
    return <div> David's locations could not be fetched! </div>
  } else {
    return <Map height="100%" locations={locations}/>
  }
}

export default App;
