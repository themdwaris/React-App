
import { Search } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{

    // const location=useLocation()
    // const history=useNavigate()
    return(
        <>

        <div className="navbarContainer lr-pad">
        <div className="navbar">
        <div className="logo">
            <ion-icon name="menu-outline" onClick={()=>{
                document.getElementById("menuList").style.top='0'
            }}></ion-icon>
            <NavLink to='/'><h1 className="logo-title">React</h1></NavLink>
        </div> 
        <div className="right">
        <ul id="menuList" onClick={()=>{
                document.getElementById("menuList").style.top='-500px'
            }}>
            <li><ion-icon id='close' name="close-outline" onClick={()=>{
                document.getElementById("menuList").style.top='-500px'
            }}></ion-icon></li>
            <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
            <li><NavLink exact activeClassName='active' to='/about'>About</NavLink></li>
            <li><NavLink exact activeClassName='active' to='/service'>Services</NavLink></li>
            <li><NavLink exact activeClassName='active' to='/contact'>Contact</NavLink></li>
        </ul>
        <div>
           <li> <NavLink exact activeClassName='active' to='/search'><span><Search></Search></span></NavLink></li>
        </div>
        </div>
        
        </div>
        </div>
        </>
    )
}

export default Navbar