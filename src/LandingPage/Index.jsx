import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Navbar from "./Navbar";
import Search from './Search'
import Footer from "./Footer";
import './Style.css'

const Index = () =>{
     
    return(
        <>
        <div>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/service" element={<Service/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/search" element={<Search/>}/>
            </Routes>
        </div>
        <Footer/>
        </>
    )
}

export default Index