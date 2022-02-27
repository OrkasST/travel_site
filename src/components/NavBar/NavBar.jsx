import React from "react";
import SLink from "../../styles/SLink";
import Wrapper from "../../styles/Wrapper";
import MenuContainer from "./Menu/MenuContainer";
import logo from "../../imgs/Logo.png";
import Image from "../../styles/Image";

const NavBar = (props) => {
    return(
        <Wrapper id="navbar">
            <SLink to='header' spy={true} smooth={true} duration={500} offset={0}>
                <img width={70} src={logo} alt="LOGO" />
            </SLink>
            <MenuContainer />
        </Wrapper>
    )
}

export default NavBar;