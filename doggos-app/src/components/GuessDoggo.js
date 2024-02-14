import React, { useEffect, useState} from "react";
import Navbar from "./Navbar";
import '../App.css';
import SelectedDog from "./SelectedDog"

function GuessDoggo () {
    const [dogs, setDogs] = useState([])
    const [selectedDog, setSelectedDog] = useState("")

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random/9")
        .then(r=>r.json())
        .then(dogs=>{
            setDogs(dogs.message)
        })
       
    }, [])

    console.log(dogs)

    function handleMouseEnter(e){
        e.target.style.border="10px solid #FF33E9"
    }

    function handleMouseLeave(e){
        e.target.style.border=""
    }

    function handleClick(e){
       setSelectedDog(e.target.src)
    }

    return (
        <div>
            <h1>Guess the Doggo</h1>
            <Navbar />
            {dogs.map((dog)=>{
                return (
                    
                    <img src={dog} alt="dog" key={dog} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} />
                    
                )
            })}
            <SelectedDog dog={selectedDog} />
        </div>
    )
}

export default GuessDoggo;