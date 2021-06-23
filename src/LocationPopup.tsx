import { LocationRow } from "./Map";
import { Popup } from "react-leaflet";

export function LocationPopup(props: { locationRow: LocationRow }) {
    const date = new Date(props.locationRow.time)

    return <Popup>
        {`ID: ${props.locationRow.rowid}`}
        <br/>
        {`Lat: ${props.locationRow.lat}`}
        <br />
        {`Lon: ${props.locationRow.lon}`}
        <br />
        {`Date: ${date.toDateString()}`}
        <br />
        {`Time: ${date.toLocaleTimeString()}`}
    </Popup>
}