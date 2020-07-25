import axios from 'axios'

export async function getSingleUser(userId) {
        return await axios.get("https://jsonplaceholder.typicode.com/users/"+userId,{headers:{"Content-Type":"application/json"}})
}