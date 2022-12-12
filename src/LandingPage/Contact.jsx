import React from "react";
import contactImg from './images/project-1.jpg';
import { useState } from "react";

const Contact = () =>{

    const [names,setName] = useState('')
    const [mail,setMail] = useState('')
    const [subject,setSubject] = useState('')
    const [msg,setMsg] = useState('')

    const getName = (event) =>{
        setName(event.target.value)
    }
    const getMail = (event) =>{
        setMail(event.target.value)
       
    }
    const getSubject = (event) =>{
        setSubject(event.target.value)
      
    }
    const getMsg = (event) =>{
        setMsg(event.target.value)
    }
    
     
    return(
        <>
        <div className="aboutContainer lr-pad">
            <h1 className="section-title">Lets Contact <span>With Us</span></h1>
            <p className="about-p">Lorem ipsum dolor Itaque officia  culpa fugiat  <br></br>adipisicing elit. Itaque officia cumque .</p>
            <div className="aboutBox">
                <div className="left-contact">
                    <div className="contactImg"><img src={contactImg} alt='img'/></div>
                </div>
                <div className="right-contact">
                    <form >
                        <div className="form">
                            <input type='text' placeholder="Name" onChange={getName} value={names} required/><br></br>
                            <input type='mail' placeholder="Email"onChange={getMail} value={mail} required/><br></br>
                            <input type='text' placeholder="Subject" onChange={getSubject} value={subject}/><br></br>
                            <textarea rows='7'placeholder="Message" onChange={getMsg} value={msg} required/><br></br>
                            <button onClick={(e)=>{
                                e.preventDefault()
                                alert(`your name is ${names} and mail ${mail} subject ${subject} message ${msg}`)
                                setName('')
                                setMail('')
                                setSubject('')
                                setMsg('')
                            }}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      
        </>
    )
}

export default Contact