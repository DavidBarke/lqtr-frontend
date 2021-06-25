import logo from "./logo.svg";
import { useEffect, useState } from "react";
import SplitPane from "react-split-pane"
import { MapPane } from "./MapPane";
import { LocationRow } from "./Map";
import { SidePane } from "./SidePane";


function App() {
  const [locationIndex, setLocationIndex] = useState(0);
  const [locations, setLocations] = useState<LocationRow[]>([{ lat: 0, lon: 0, time: 0, rowid: 0 }]);
  const [error, setError] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    fetch("https://davidbarke.com/api/location_ts")
      .then((res) => res.json())
      .then(
        (res) => {
          setLocations(res);
          setLocationIndex(res.length - 1);
        },
        (error) => setError(error)
      );
  }, []);

  return <SplitPane split="vertical" defaultSize={200} size={sidebarOpen ? 200 : 0}>
    <SidePane />
    <MapPane
        locations={locations}
        locationIndex={locationIndex}
        setLocationIndex={setLocationIndex}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
  </SplitPane>
}

export default App;
