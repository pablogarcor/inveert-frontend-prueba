import React from "react";
//Import images
import logo from '../../assets/images/Logotipo-Inveert-Fondo-Blanco-copy.png'
//Import UI components
import {Layout} from "antd";
//Import Router components
import {Link} from 'react-router-dom'
//Instantiate UI components
const {Header}=Layout

function HeaderMain() {
    return(
        <Header style={{background:"white"}}>
            <img className="logo" src={logo} alt="Prueba de inveert"/>
        </Header>
    )
}
export default HeaderMain