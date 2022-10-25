import { NavLink } from "react-router-dom";
import cart_img from '../assests/shopping-cart.png'
import profile_img from '../assests/user.png'


export default function Navbar(){

    const navRoutes = [
        {
            name: 'Home',
            path: '/'
        },{
            name: 'Advance Search',
            path: '/advance-search'
        },{
            name: 'Catalog',
            path: '/catalog'
        },{
            name: 'About',
            path: '/about'
        },{
            name: 'Profile',
            path: '/profile',
            img: profile_img
        },{
            name: 'Cart',
            path: '/cart',
            img: cart_img
        }
        
    ]
    return(
        <nav className="nav-cont">
            <img src={require('../assests/mcpl.png')} />
            <span>
                {
                    navRoutes.map((item)=>{
                        return <NavLink 
                                key={item.name}
                                to={item.path}
                                className="nav-link"
                                style={({ isActive }) => {
                                    return {color: isActive? 'green' : 'rgba(255, 255, 255, 0.546)'}
                                }}>
                                {item?.img? <img src={item.img} alt={item.name} /> : item.name}   
                                </NavLink>
                    })
                }
            </span>
        </nav>
    )
}