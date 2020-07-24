import React from "react";
import {Layout,Row,Col,Button,Typography,Collapse,Table,Tabs,Skeleton} from "antd";
import {SisternodeOutlined,ImportOutlined} from "@ant-design/icons";

const {Title,Text}=Typography
const {Content}=Layout
const {Panel} = Collapse;

const data=[
    {
        key:'1',
        name:'Pablo Garcia',
        email:'pablo@pablo.com',
        phone:'+348829349234'
    },
    {
        key:'2',
        name:'Alba Gomez',
        email:'alba@pablo.com',
        phone:'+348345345'
    }
]
const columns=[
    {
        title: 'Nombre y apellidos',
        dataIndex:'name',
        key:'name'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Telefono',
        dataIndex: 'phone',
        key: 'phone'
    }
]

function PrimeraVista(){
    return(
        <Content>
            <Row justify="center">
                <Col className="padding-10">
                    <Title level={1} strong style={{marginTop:"10px",fontSize:"20px",fontWeight:"800"}}>PRUEBA INVEERT FRONTEND</Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col className="padding-10">
                    <Title level={2} strong style={{marginTop:"50px"}}>Tabla de la <b style={{color: "rgb(0, 139, 154)"}}>primera</b> vista</Title>
                </Col>
            </Row>
            <Row justify='center' align='middle' >
                <Table dataSource={data} columns={columns}/>
            </Row>
        </Content>
    )
}
export default PrimeraVista