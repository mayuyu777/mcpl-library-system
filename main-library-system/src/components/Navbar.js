import { NavLink } from "react-router-dom";
import { getRoutes } from "../data/RoleRoutes";
import Axios from "axios";
import useAuth from "../hooks/useAuth";


export default function Navbar(){
    const {auth} = useAuth();

    const role = auth.user.role.charAt(0).toUpperCase() + auth.user.role.slice(1);

    const routes = getRoutes(auth.user.role);


    const logout = ()=>{
   
        Axios.get('http://localhost:3030/logout').then((response) => {
           if(response.data.isLoggedOut === true){
               console.log("signed out");
               window.location.reload();
           }
       }).catch((err)=>{
           console.log(err);
       })
       
   }



    return(
        <div style={{marginLeft:'2pc',marginRight:'2pc',paddingBottom:'2pc'}}>
            <div className='role-cont'>
                    <h1>{role}</h1>
                    <img className="mcpl-logo" src={require('../assets/mcpl.png')}/>
                    <button style={{width:'4pc'}} onClick={logout}>logout</button>
            </div>
            <nav className="nav-cont">
               {
                    routes.map((item) => {
                        return <NavLink 
                                    key={item.id} 
                                    to={item.path}
                                    className="nav-link"
                                    style={({ isActive }) => {
                                        return { backgroundColor: isActive? 'rgb(151, 197, 151)' : 'rgb(162, 212, 162)',
                                                 color: isActive? 'white' : 'green'}
                                    }}>
                                    {item.name}
                                </NavLink>
                    })
               }
            </nav>
        </div>
    );
}