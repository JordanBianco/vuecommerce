import axios from 'axios'

const sanctum = axios.create({
    baseURL: 'http://localhost:8000/sanctum'
})

export default sanctum 