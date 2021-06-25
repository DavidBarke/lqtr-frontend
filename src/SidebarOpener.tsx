import { Dispatch, SetStateAction } from "react";
import "./SidebarOpener.css"

interface SidebarOpenerProps {
    sidebarOpen: boolean
    setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export function SidebarOpener(props: SidebarOpenerProps) {
    const iconClass = props.sidebarOpen ? "fa fa-angle-double-left" : "fa fa-angle-double-right"

    return <div className="sidebarOpener">
        <button className="btn circle-btn" onClick={() => props.setSidebarOpen((x) => !x)}><i className={iconClass}></i></button>
    </div>
}