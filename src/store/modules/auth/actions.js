import api from '@/apis/api'
import sanctum from '@/apis/sanctum'
import router from '@/router'

export const register = async ({commit}, {user}) => {
    try {
        sanctum.get('/csrf-cookie')
        const res = await api.post('/register', { 
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password 
        })
        if (res.status === 201) {
            router.push({ name: 'Login' })
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const login = async ({commit}, {user}) => {
    try {
        sanctum.get('/csrf-cookie')
        const res = await api.post('/login', { 
            email: user.email,
            password: user.password 
        })
        if (res.status === 200) {
            commit('SET_AUTH', true)
            router.push({ name: 'Dashboard' })
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const logout = async ({commit}) => {
    try {
        const res = await api.post('/logout')
        if (res.status === 200) {
            commit('SET_AUTH', false)
            commit('user/SET_USER', null, { root: true })
            commit('user/SET_ACTIVITIES', null, { root: true })
            commit('review/SET_LAST_REVIEW', null, { root: true })
            commit('order/SET_LAST_ORDER', null, { root: true })
            commit('cart/EMPTY_CART', [], { root: true })
            commit('cart/EMPTY_SAVED', [], { root: true })
            router.push({ name: 'Home' })
        }
    } catch (error) {
        console.log(error)
    }
}

export const emptyErrors = ({commit}) => {
    commit('EMPTY_ERRORS')
}