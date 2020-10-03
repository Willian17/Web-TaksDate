import axios from 'axios'

const api = axios.create({
    baseURL: process.env.URLALALA
})

export default api