import React from "react";
import { useState } from "react";
import SearchResult from "./SearchResult";


const Search = () =>{

    const [img,setImg] = useState('')
    const getImg = (event) =>{
        const text = event.target.value
        setImg(text)
    }
    return(
        <>
        <div className="aboutContainer lr-pad">
            <div className="sCon">
            <h1 className="section-title">Search Your <span>Image</span></h1>
            <p className="about-p">Lorem ipsum dolor Itaque officia  culpa fugiat  <br></br>adipisicing elit. Itaque officia cumque .</p>
            <div className="searchConatiner">
                <div className="searchBox">
                    <input type='search' placeholder="Search your img" onChange={getImg} value={img}/>
                    {img===''?null : <SearchResult Name={img}/>}
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Search