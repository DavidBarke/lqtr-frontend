import { Dispatch, SetStateAction } from "react";
import { Map, LocationRow } from "./Map";
import { Navigation } from "./Navigation";
import { SidebarOpener } from "./SidebarOpener";

interface MapPaneProps {
    locations: LocationRow[]
    locationIndex: number
    setLocationIndex: Dispatch<SetStateAction<number>>
    sidebarOpen: boolean
    setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export function MapPane(props: MapPaneProps) {
    return <div className="fullheight relative">
    <Navigation
      locationIndex={props.locationIndex}
      maxLocationIndex={props.locations.length - 1}
      setLocationIndex={props.setLocationIndex}
    />
    <SidebarOpener sidebarOpen={props.sidebarOpen} setSidebarOpen={props.setSidebarOpen}/>
    <Map height="100%" locations={props.locations} location={props.locations[props.locationIndex]} />
  </div>
}