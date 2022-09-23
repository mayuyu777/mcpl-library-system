import { useLocation, Navigate, Outlet } from "react-router-dom";
 import useAuth from '../hooks/useAuth';
 import { getRoutes } from "../data/RoleRoutes";

 const RequireAuth = ({pathName}) => {

     const { auth } = useAuth();
    const location = useLocation();

    const isLoggedIn = auth.user ? true : false;
    const route = getRoutes(auth?.user?.role)?.find((item)=>{
        return item.path === pathName
    });
   

    return (isLoggedIn && (route || pathName === '/')) ? <Outlet /> : <Navigate to="login" state={{ from: location }} replace />
}

export default RequireAuth;