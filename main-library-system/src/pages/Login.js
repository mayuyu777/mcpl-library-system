import {useState, useEffect, useRef} from 'react';
import Axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
// import Cookies from 'universal-cookie';

export  default function Login(){

    const [formValues, setFormValues] = useState({ email:"", pass:"" });
    const [formErrors, setFormErrors] = useState({dummyVal:""});
    const [loginRes, setLoginRes] = useState({});
    const loginRef = useRef();
    // const authRef = useRef();

    const { auth, setAuth} = useAuth();
    // const cookies = new Cookies();
    
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    
    



    Axios.defaults.withCredentials = true;


    const handleChange = (event) => {
        const { name, value} = event.target;

        setFormValues(prev =>{
            return{
                ...prev,
                [name]:value
            }
        })
    }


    
    const login = () => {

        Axios.post('http://localhost:3030/login',{
            email: formValues.email,
            pass: formValues.pass
        }).then((response)=>{
            

            if(response.data.isLoggedIn === true){
                    
                setAuth({user: response.data.res});
                navigate(from, { replace: true });
            }
            
           
            setLoginRes(()=>{
                const res = {};
            
                if(response.data.err){
                    res.err = response.data.err;
                }
                if(response.data.message){
                    res.message = response.data.message;
                }
                
                return res;
                
            })
            
        })
    }

    loginRef.current = login;

    // const authenticate = ()=>{
    //     setAuth({ user: cookies.get('user')});
    // }

    // authRef.current = authenticate;

    // useEffect(() => {
    //     Axios.get('http://localhost:3030/login').then((response) => {
    //         if(response.data.isLoggedIn === true){
    //             authRef.current();
    //             navigate('/');
    //             console.log("signed in");
    //         }
    //     })
    // },[])

    useEffect(() => {
        if(auth?.user){
            navigate(from, { replace: true });
        }
    })



    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
    }

    useEffect(() => {

        if(Object.keys(formErrors).length === 0){
            loginRef.current();
        }
    },[formErrors])

  
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!values.email){
            errors.email = "Email is required!";
        }else if(!regex.test(values.email)){
            errors.email = "This is not a valid email format!";
        }

        if(!values.pass){
            errors.pass = "Password is required!";
        }
        // else if (values.pass.length < 4){
        //     errors.pass = "Password must be more than 4 characters!";
        // }else if (values.pass.length > 8){
        //     errors.pass = "Password must not exceed 8 characters!";
        // }

        if(Object.keys(errors).length > 0){
            setLoginRes({});
        }

        return errors;
    }

    return(
        <div className="login-cont">
            <h2>Mandaue City Public Library</h2>
            <h3>Login</h3>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Email"
                    name="email"
                    onChange={handleChange} /><br/>
                <p>{formErrors.email}</p>
                <input 
                    type="password" 
                    placeholder="Password"
                    name='pass'
                    onChange={handleChange} /><br/>
                <p>{formErrors.pass}</p>
                <p>{loginRes.message}</p>
                <p>{loginRes.err}</p>
                <button>Sign in</button>
            </form>

        </div>
    );
}