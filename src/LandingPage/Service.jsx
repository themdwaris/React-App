import React from "react";
import Card from "./SCard";
import Sdata from './Sdata';

const Service = () =>{
     
    return(
        <>
        <div className="aboutContainer lr-pad">
            <h1 className="section-title">Services We <span>Provided</span></h1>
            <p className="about-p">Lorem ipsum dolor Itaque officia  culpa fugiat  <br></br>adipisicing elit. Itaque officia cumque .</p>
            <div className="serviceBox">
                {/* <div className="box">
                    <div className="icon"><ion-icon name="mail-open"></ion-icon></div>
                    <div className="service-title">SEO Optimization</div>
                    <p className="service-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet sapiente doloremque, magnam nostrum recusandae?</p>
                </div> */}

                {
                    Sdata.map((data,ind)=>{
                        return(<Card key={ind} sicon={data.sicon} stitle={data.stitle}/>)
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Service