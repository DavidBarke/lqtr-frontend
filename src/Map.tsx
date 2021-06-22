import { circleMarker } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface LocationRow {
  lat: number;
  lon: number;
  time: number;
}

interface MapProps {
  height: string;
  locations: LocationRow[];
}

function Map(props: MapProps) {
  return (
    <MapContainer
      style={{ height: props.height }}
      center={[51.163, 10.448]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.locations.map((row: LocationRow) => {
        return (
          <Marker position={[row.lat, row.lon]}>
            <Popup>{row.time}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
