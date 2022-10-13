import { getSubRoutes } from "../data/RoleRoutes";
import { useNavigate } from "react-router-dom";


export default function Sidebar({modName,pathName}){

    const routes = getSubRoutes(pathName);
    const navigate = useNavigate();

    return(
        <div className="side-bar-cont">
            <h3>{modName}</h3>
            <ul>
                {
                    routes.map((item) => {
                        return item.displaySidebar? <li><a key={item.path} href={"/"+ pathName + "/" +item.path}>{item.name}</a></li> : null;
                    })
                }
            </ul>
        </div>
    )
}