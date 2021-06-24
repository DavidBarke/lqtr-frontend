import { Dispatch, SetStateAction } from "react";

interface NavigationProps {
    locationIndex: number;
    maxLocationIndex: number;
    setLocationIndex: Dispatch<SetStateAction<number>>;
}

export function Navigation(props: NavigationProps) {
    return <div className="navigation">
        <button className="btn" onClick={() => props.setLocationIndex(0)}><i className="fa fa-angle-double-left"></i></button>
        <button className="btn" onClick={() => props.setLocationIndex(Math.max(0, props.locationIndex - 1))}><i className="fa fa-angle-left"></i></button>
        <button className="btn" onClick={() => props.setLocationIndex(Math.min(props.maxLocationIndex, props.locationIndex + 1))}><i className="fa fa-angle-right"></i></button>
        <button className="btn" onClick={() => props.setLocationIndex(props.maxLocationIndex)}><i className="fa fa-angle-double-right"></i></button>
    </div>
}