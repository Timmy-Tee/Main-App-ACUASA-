import React from "react";

function Links(props){

    const customStyle={
        color: "#5f4cf5",
    }

    return(
        <div>
           <a style={props.name=="Home" ? customStyle : null} href={props.name}> {props.name} </a>
        </div>
    )
}


export default Links