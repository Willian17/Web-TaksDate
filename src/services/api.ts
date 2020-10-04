import axios from 'axios'
const API_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:3333': 'https://tasksdate.herokuapp.com'
const api = axios.create({
    baseURL: API_URL
})

export default api