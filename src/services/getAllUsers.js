import axios from 'axios'

export async function getAllUsers(setColumnData,setLoading) {
    return await axios.get("https://jsonplaceholder.typicode.com/users",{headers:{"Content-Type":"application/json"}})
}