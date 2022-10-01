import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function Catalog(){
    return(
        <div className="module-cont">  
            <Sidebar modName={'Catalog'} pathName={'catalog'}/>
            <Outlet />
        </div>
    )
}