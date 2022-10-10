import { NavLink } from "react-router-dom";
import { getSubRoutes } from "../data/RoleRoutes";


export default function Sidebar({modName,pathName}){

    const routes = getSubRoutes(pathName);

    return(
        <div className="side-bar-cont">
            <h3>{modName}</h3>
            <ul>
                {
                    routes.map((item) => {
                        return item.displaySidebar? <li key={item.path}><NavLink to={"/"+ pathName + "/" +item.path}>{item.name}</NavLink></li> : null;
                    })
                }
            </ul>
        </div>
    )
}