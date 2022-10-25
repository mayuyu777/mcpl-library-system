import { createContext, useState} from "react";
import { useEffect } from "react";
import Axios from 'axios';



const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    Axios.defaults.withCredentials = true;




    useEffect(() => {

        if(!auth?.user){
            Axios.get('http://localhost:3030/login').then((response) => {
                if(response.data.isLoggedIn === true){
                   console.log("signed in");
                   setAuth({user: response.data.res});
                }
             }).catch((err)=>{
                console.log(err);
             })
        }
          
    })

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;