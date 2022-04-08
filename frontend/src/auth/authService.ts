import axios from "axios"
import { userData } from "./authSlice"

const API_URL = 'http://localhost:5000/api/users/'

//Register user

const register =async (userData : userData) => {
    const response = await axios.post(API_URL, userData)
    console.log(API_URL);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}
const authService = {
    register,
}

export default authService