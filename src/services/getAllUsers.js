import axios from 'axios'
import {notification} from "antd";

export async function getAllUsers(setColumnData,setLoading) {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users",{headers:{"Content-Type":"application/json"}})
        const users= response.data.map(user=>({key:user.id,name:user.name,email:user.email,phone:user.phone}))
        setColumnData(users)
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