import axios from 'axios'
import {notification} from "antd";

export async function getSingleUser(userId,setUserInfo,setUserId,setLoading) {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/"+userId,{headers:{"Content-Type":"application/json"}})
        debugger
        setUserInfo(response.data)
        setUserId(userId)
        setLoading(false)
    }catch (error) {
        notification.error({
            message:"Datos innaccesibles",
            description:"No se ha podido acceder a los datos de los usuarios",
            duration:10,
            onClick:()=>{

            }
        })
        setLoading(false)
    }
}