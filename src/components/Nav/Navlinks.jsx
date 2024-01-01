import React from "react";
import Links from "./links"
import navLinkData from "../../data/links"


function Navlinks(){
    return(
        <div className="navlinks">
            {navLinkData.map(link =>{
                return(
                    <Links 

                    key= {link.key}
                    name = {link.linkName}
                />
                )
            })}
        </div>
    )
}

export default Navlinks