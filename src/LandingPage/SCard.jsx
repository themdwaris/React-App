import React from "react";

const Card = (props) =>{
    return(
        <>
             <div className="box">
                    <div className="icon">{props.sicon}</div>
                    <div className="service-title"><h2>{props.stitle}</h2></div>
                    <p className="service-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet sapiente doloremque, magnam nostrum recusandae?</p>
                </div>
        </>
    )
}

export default Card