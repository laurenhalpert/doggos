import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";

function Home (){
    const [imageURL, setImageURL] = useState("")
    useEffect(()=>{
    
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(dog => {
            setImageURL(dog.message);
        })
        
      }, [])

    return(
        <div>
            <h1>Doggos</h1>
            <Navbar />
            <img alt="dog" src={imageURL}/>
        </div>
    )
}

export default Home;