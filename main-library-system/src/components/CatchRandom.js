import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"

export default function CatchRandom({compName}){

    const { auth } = useAuth();
    const location = useLocation();

    const isLoggedIn = auth.user ? true : false;
   

    return isLoggedIn ? <Navigate to="/" state={{ from: location }} replace /> : <Navigate to="login" state={{ from: location }} replace />
}