import React from "react";
import aboutImg from './images/about-banner.jpg'


const About = () =>{
     
    return(
        <>
        <div className="aboutContainer lr-pad">
            <h1 className="section-title">Know <span>About</span> me</h1>
            <p className="about-p">Lorem ipsum dolor Itaque officia  culpa fugiat  <br></br>adipisicing elit. Itaque officia cumque .</p>
            <div className="aboutBox">
                <div className="leftAbout">
                    <div className="img"><img src={aboutImg} alt='img'/></div>
                </div>
                <div className="rightAbout">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id, itaque voluptatibus repellat reiciendis reprehenderit.</p>

                    <h3>Who we are</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, commodi ducimus! Velit corporis libero rem illo quisquam beatae ? Velit corporis libero rem illo quisquam beatae.</p>

                    <h3>Our success</h3>
                    <p><ion-icon name="checkmark-circle"></ion-icon> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam.</p>
                    <p><ion-icon name="checkmark-circle"></ion-icon> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam.</p>
                    <p><ion-icon name="checkmark-circle"></ion-icon> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam.</p>

                    <h3>Our mission</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis saepe consequuntur cupiditate totam! Dicta, explicabo.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About