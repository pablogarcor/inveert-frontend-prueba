import React, {useState,useEffect} from "react";
import {Layout,Row,Col,Typography,Table,Skeleton} from "antd";
import {useHistory} from 'react-router-dom'
import {getAllUsers} from "../../services/getAllUsers";

const {Title}=Typography
const {Content}=Layout

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
    const history=useHistory()
    const [loading,setLoading]=useState(true)
    const [columnData,setColumnData]=useState([])
    useEffect(()=>{
            getAllUsers(setColumnData,setLoading).then()
        },[]);
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
                <Table
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: event => {history.push({
                                pathname:"/userDetail/"+record.key,
                                state: {userId: record.key}
                            })}
                        };
                    }}

                    loading={loading} dataSource={columnData} columns={columns}/>
            </Row>
        </Content>
    )
}
export default PrimeraVista