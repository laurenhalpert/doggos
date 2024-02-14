import React from "react";
import { NavLink } from "react-router-dom";

function Navbar () {
    return(
        <div>
            <span><NavLink to="/">Home</NavLink></span>
            <span><NavLink to="/guess-the-doggo">Guess the Doggo</NavLink></span>
        </div>
    )
}

export default Navbar;