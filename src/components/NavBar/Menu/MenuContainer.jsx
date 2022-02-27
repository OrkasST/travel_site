import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";

let mapStateToProps = (state) => {
    return {
        buttons: state.menu.buttons
    }
}

const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;