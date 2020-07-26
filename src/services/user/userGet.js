import axios from 'axios'

export async function userGet(userId) {
        return await axios.get("https://jsonplaceholder.typicode.com/users/"+userId,{headers:{"Content-Type":"application/json"}})
}