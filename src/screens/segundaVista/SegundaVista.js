import React, {useState,useEffect} from "react";
//Internal exports
import {userGet} from "../../services/user/userGet";
import HeaderMain from "../../components/header/HeaderMain";
//External exports
import {Layout, Row, Col, Typography, Form, Input, Skeleton, Card, Avatar, Collapse, notification} from "antd";
import {UserOutlined,BankOutlined,PhoneOutlined,MailOutlined,MessageOutlined,BookOutlined,HomeOutlined,EnvironmentOutlined} from "@ant-design/icons";
import {useHistory} from 'react-router-dom'
import idx from   'idx'
//Global constants and objects
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
        //idx es una funcion existencial para objetos anidados, si no existe alguna de las propiedades devuelve null
        if(idx(history,(_)=>_.location.state.userId)){
            userGet(history.location.state.userId).then(response=> {
                setUserInfo(response.data)
                setUserId(response.data.id)
            }).catch(()=> notification.error({
                message:"Datos innaccesibles",
                description:"No se ha podido acceder a los datos de los usuarios",
                duration:10,
                onClick:()=>{

                }
            })).finally(()=>{setLoading(false)})
        }else{
            history.push({pathname:'/'})
        }

    },[history]);
    return(
        <Layout>
            <HeaderMain/>
            <Content>
                <Row justify="center">
                    <Col className="padding-10">
                        <Title level={2} strong style={{marginTop:"50px"}}>Tabla de la <b style={{color: "rgb(0, 139, 154)"}}>segunda</b> vista</Title>
                    </Col>
                </Row>
                <Row justify="center" style={{background:"white"}}>
                    <Col className="padding-10">
                        <Skeleton loading={loading} active>
                            <Title level={2} strong underline>Vista detalle del usuario <b style={{color: "rgb(0, 139, 154)"}}>nº {userId}</b></Title>
                        </Skeleton>
                    </Col>
                </Row>
                <Row justify='center' align='middle' style={{background:"white"}}>
                    <Col xs={24} sm={18} md={14} lg={10} xl={8}>
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
        </Layout>

    )
}
export default SegundaVista