import React from "react";
import Wrapper from "../../../styles/Wrapper";
import Button from "./Button/Button";

const Menu = (props) => {
    let buttons = props.buttons.map(btn => <Button path={btn.path} text={btn.text} offset={btn.offset} key={btn.id} /> );

    return(
        <Wrapper id="menu">
            {buttons}
        </Wrapper>
    );
}

export default Menu;