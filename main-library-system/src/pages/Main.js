import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Main(){

    return(
        <>
            <div className='header-cont'>
                <div className="header-cont-layer">
                    <Navbar />
                </div>
            </div>
            
            <Outlet />
        </>
    )
}