import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function Catalog(){
    return(
        <div className="module-cont">  
            <Sidebar pathName={'catalog'}/>
            <Outlet />
        </div>
    )
}