import React from "react";

const SearchResult = (props) =>{
    // const imgUrl=`https://picsum.photos/350/400/?${props.Name}`;
    const imgUrl = `https://source.unsplash.com/600x400/?${props.Name}`
    return(
        <>
            <div className="imgBox">
                <img src={imgUrl} alt='img'/>
            </div>
        </>
    )
}

export default SearchResult