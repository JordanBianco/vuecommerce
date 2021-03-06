import axios from 'axios'
import router from '@/router'
import store from '@/store'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true
})

api.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (error.response.status === 419 || error.response.status === 401) {
        if (store.state.auth.auth) {
            store.dispatch('auth/logout')
        } else {
            router.push({ name: 'Login' })  
        }
    }
    if (error.response.status === 403) {
        router.push({ name: 'Dashboard' })
    }
    // if (error.response.status === 404) {
    //     // TODO: NOT FOUND PAGE
    //     router.push({
    //         name: 'Dashboard'
    //     });
    // }
    return Promise.reject(error)
})

export default api 