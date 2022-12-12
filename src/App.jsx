import React from "react";
import Index from "./LandingPage/Index";
import { BrowserRouter } from "react-router-dom";

const App = () =>{
    return(
        <>
           <BrowserRouter><Index/></BrowserRouter>
        </>
    )
}

export default App