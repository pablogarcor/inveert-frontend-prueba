import React, {useState,useEffect} from "react";
//Internal exports
import logo from '../../assets/images/Logotipo-Inveert-Fondo-Blanco-copy.png'
//External exports
import {LeftOutlined} from "@ant-design/icons";
import idx from 'idx'
import {useHistory} from 'react-router-dom'
import {Layout,Typography} from "antd";
import {Link} from 'react-router-dom'
//Global constants and objects
const {Header}=Layout
const {Title}=Typography

function HeaderMain() {
    const history=useHistory()
    const [isMenuVisible,setIsMenuVisible]=useState(false)
    useEffect(()=>{
        debugger
        if(idx(history,(_)=>_.location.pathname)==='/inveert-frontend-prueba'){
            setIsMenuVisible(false)
        }else{
            setIsMenuVisible(true)
        }
    },[history])
    return(
        <Header style={{background:"white"}}>
            <Link to="/">
            <img className="logo" src={logo} alt="Prueba de inveert"/>
            </Link>
            {isMenuVisible &&
            <Title style={{color:'black', lineHeight: '64px', float: "right", cursor:'pointer'}} level={4} strong onClick={()=> {
                history.goBack()
            }}><LeftOutlined/>Atrás</Title>
            }
        </Header>
    )
}
export default HeaderMain