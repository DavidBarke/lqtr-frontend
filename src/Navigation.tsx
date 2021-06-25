import { Dispatch, SetStateAction } from "react";
import "./Navigation.css";

interface NavigationProps {
    locationIndex: number
    maxLocationIndex: number
    setLocationIndex: Dispatch<SetStateAction<number>>
}

export function Navigation(props: NavigationProps) {
    return <div className="navigation">
        <button className="btn circle-btn" onClick={() => props.setLocationIndex(0)}><i className="fa fa-angle-double-left"></i></button>
        <button className="btn circle-btn" onClick={() => props.setLocationIndex((x) => Math.max(0, x - 1))}><i className="fa fa-angle-left"></i></button>
        <button className="btn circle-btn" onClick={() => props.setLocationIndex((x) => Math.min(props.maxLocationIndex, x + 1))}><i className="fa fa-angle-right"></i></button>
        <button className="btn circle-btn" onClick={() => props.setLocationIndex(props.maxLocationIndex)}><i className="fa fa-angle-double-right"></i></button>
    </div>
}