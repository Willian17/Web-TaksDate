import axios from 'axios'
import { get } from 'js-cookie'
const API_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:3333': 'https://tasksdate.herokuapp.com'
const token = get('token')

const api = axios.create({
    baseURL: API_URL, 
    headers: {'Authorization': `bearer ${token}` } 
})

export default api