import React, {useState,useEffect} from "react";
import logo from '../../assets/images/Logotipo-Inveert-Fondo-Blanco-copy.png'
import {Layout,Row,Col,Typography,Form,Input,Skeleton,Card,Avatar,Collapse} from "antd";
import {UserOutlined,BankOutlined,PhoneOutlined,MailOutlined,MessageOutlined,BookOutlined,HomeOutlined,EnvironmentOutlined} from "@ant-design/icons";
import {useHistory} from 'react-router-dom'
import idx from   'idx'
import {getSingleUser} from "../../services/getSingleUser";

const {Title}=Typography
const {Content}=Layout
const {Meta}=Card
const { Panel } = Collapse;

function SegundaVista(){
    const history=useHistory()
    const [loading,setLoading]=useState(true)
    /*
    * userInfo
    * {
    *   website
    *   username
    *   phone
    *   id
    *   name
    *   email
    *   company{
    *       bs
    *       catchPhrase
    *       name
    *   }
    *   address{
    *       city
    *       geo{}
    *       street
    *       suite
    *       zipcode
    *   }
    * }
    * */
    const [userInfo,setUserInfo]=useState([])
    const [userId,setUserId]=useState(1)
    useEffect(()=>{
        console.log(history)
        //idx es una funcion existencial para objetos anidados, si no existe alguna de las propiedades devuelve null
        if(idx(history,(_)=>_.location.state.userId)){
            getSingleUser(history.location.state.userId,setUserInfo,setUserId,setLoading).then()
        }else{
            history.push({pathname:'/'})
        }

        setUserId(history.location.state.userId)

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
                    <Title level={2} strong style={{marginTop:"50px"}}>Tabla de la <b style={{color: "rgb(0, 139, 154)"}}>segunda</b> vista</Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col className="padding-10">
                    <Title level={2} strong underline>Vista detalle del usuario <b style={{color: "rgb(0, 139, 154)"}}>nº {userId}</b></Title>
                </Col>
            </Row>
            <Row justify='center' align='middle' style={{background:"white"}}>
                <Col span={8}>
                    <Skeleton loading={loading} active>
                        <Card
                            style={{width:"100%",margin:"20px 0"}}
                        >
                            <Meta
                                avatar={<Avatar size={64} icon={<UserOutlined />} />}
                                title={userInfo.name}
                                description={userInfo.username}
                            />
                        </Card>
                        <Form layout='vertical' style={{width:"100%"}}>
                            <Form.Item label="Telefono:">
                                <Input disabled defaultValue={userInfo.phone} addonBefore={<PhoneOutlined />}/>
                            </Form.Item>
                            <Form.Item label="Email:">
                                <Input disabled defaultValue={userInfo.email} addonBefore={<MailOutlined />}/>
                            </Form.Item>
                        </Form>
                        <Collapse >
                            <Panel header="Empresa" key="1" extra={<BankOutlined />}>
                                <Form layout='vertical' style={{width:"100%"}}>
                                    <Form.Item label="Nombre:">
                                        <Input disabled defaultValue={idx(userInfo,(_)=>_.company.name)} addonBefore={<BankOutlined />}/>
                                    </Form.Item>
                                    <Form.Item label="Lema:">
                                        <Input disabled defaultValue={idx(userInfo,(_)=>_.company.catchPhrase)} addonBefore={<MessageOutlined />}/>
                                    </Form.Item>
                                    <Form.Item label="B.S.:">
                                        <Input disabled defaultValue={idx(userInfo,(_)=>_.company.bs)} addonBefore={<BookOutlined />}/>
                                    </Form.Item>
                                </Form>
                            </Panel>
                            <Panel header="Dirección" key="2" extra={<EnvironmentOutlined />}>
                                <Form layout='vertical' style={{width:"100%"}}>
                                    <Form.Item label="Calle:">
                                        <Input disabled defaultValue={idx(userInfo,(_)=>_.address.street)} addonBefore={<EnvironmentOutlined />}/>
                                    </Form.Item>
                                    <Form.Item label="Ciudad:">
                                        <Input disabled defaultValue={idx(userInfo,(_)=>_.address.city)} addonBefore={<HomeOutlined />}/>
                                    </Form.Item>
                                </Form>
                            </Panel>
                        </Collapse>,
                    </Skeleton>
                </Col>
            </Row>
        </Content>
    )
}
export default SegundaVista