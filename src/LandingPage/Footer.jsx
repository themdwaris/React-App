import React from "react";

const Footer = () =>{
    const year = new Date().getFullYear()
    return(
        <>
        <div className="footerContainer">
            <p>Copyright © {year} By Md | All Rights Reserved.</p>
        </div>
        </>
    )
}

export default Footer