import React from "react"
import Logo from './Logos'
import Navlinks from "./Navlinks"


function Navbar(){
    return(
        <div className="nav">
            <Logo />
            <Navlinks />            
        </div>
    )
}

export default Navbar