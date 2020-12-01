import axios from 'axios'
import { getToken } from '../utils/cookie'
const API_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:3333': 'https://tasksdate.herokuapp.com'
const token = getToken();
console.log(token);

const api = axios.create({
    baseURL: API_URL, 
    headers: {'Authorization': `bearer ${token}` } 
})

export default api