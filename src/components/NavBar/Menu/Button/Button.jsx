import React from "react";
import SLink from "../../../../styles/SLink";

const Button = (props) => {
    return(
        <SLink to={props.path} spy={true} smooth={true} duration={500} offset={props.offset} >
            {props.text}
        </SLink>
    ); 
}

export default Button;