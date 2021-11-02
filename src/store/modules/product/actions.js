import api from '@/apis/api'

export const getProducts = async ({commit}, {search}) => {
    try {
        const res = await api.get('/products?search=' + search)
        if (res.status === 200) {
            commit('GET_PRODUCTS', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getProduct = async ({commit}, {slug}) => {
    commit('GET_PRODUCT', null)
    try {
        const res = await api.get('/products/' + slug)
        if (res.status === 200) {
            commit('GET_PRODUCT', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}