import React from "react";
import { NavLink } from "react-router-dom";
import sitondesktop from './images/sitondesktop.svg'


const Home = () =>{
     
    return(
        <>
        <div className="homeContainer lr-pad">
            <div className="col">
                <div className="left-col">
                    <p className="p">Lorem ipsum dolor sit amet.</p>
                    <h1>Grow Your Business<br></br><span>With</span> <strong>Mohammad Waris</strong></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, velit sit amet consectetur adipisicing .</p>
                    <div className="button"><NavLink to="/service">Get Started</NavLink></div>
                </div>
                <div className="right-col">
                    <div className="heroBanner">
                        <img src={sitondesktop} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default Home