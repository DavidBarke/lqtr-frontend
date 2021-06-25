import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { LocationPopup } from "./LocationPopup";

export interface LocationRow {
  rowid: number;
  lat: number;
  lon: number;
  time: number;
}

interface MapProps {
  height: string;
  location: LocationRow; // Active location
  locations: LocationRow[]; // All locations
}

export function Map(props: MapProps) {
  return (
    <MapContainer
      style={{ height: props.height }}
      center={[51.163, 10.448]}
      zoom={7}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline
        positions={props.locations.map((row) => {
          return [row.lat, row.lon]
        })}
        pathOptions={{
          dashArray: [5, 25]
        }}
      />
      {<Marker position={[props.location.lat, props.location.lon]}>
        <LocationPopup locationRow={props.location} />
      </Marker>}
    </MapContainer>
  );
}
