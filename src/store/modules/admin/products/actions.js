import api from '@/apis/api'
import router from '@/router'

export const getProducts = async ({commit}, {search, sort, dir, perPage, page}) => {
    try {
        const res = await api.get(
            '/admin/products?search=' + search + 
            '&sort=' + sort +
            '&dir=' + dir +
            '&perPage=' + perPage +
            '&page=' + page
        )
        if (res.status === 200) {
            console.log(res)
            commit('GET_PRODUCTS', res.data)
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const getProduct = async ({commit}, {slug}) => {
    commit('GET_PRODUCT', null)
    try {
        const res = await api.get('/admin/products/' + slug)
        if (res.status === 200) {
            commit('GET_PRODUCT', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const storeProduct = async ({commit}, formData) => {
    try {
        const res = await api.post('/admin/products/', formData)
        if (res.status === 201) {
            router.push({ name: 'Manage Products' })
            commit('notification/ADD_NOTIFICATION', {
                message: 'Prodotto aggiunto.'
            }, { root:true });
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const cleanErrors = async ({commit}) => {
    commit('CLEAN_ERRORS')
}