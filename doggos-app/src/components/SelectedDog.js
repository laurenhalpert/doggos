import React from "react";

function SelectedDog({ dog }) {
    return(
        <div>
            <h3>My Doggo</h3>
            <img src={dog} alt="dog" />
            <p>This doggo is my doggo.</p>
        </div>
        
    )
}

export default SelectedDog;