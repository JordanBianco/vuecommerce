import api from '@/apis/api'

export const getCategories = async ({commit}) => {
    try {
        const res = await api.get('/categories')
        if (res.status === 200) {
            commit('GET_CATEGORIES', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getProducts = async ({commit}, {slug, page, min, max}) => {
    try {
        const res = await api.get(
            '/categories/' + slug + '/products?min_price=' + min
            + '&max_price=' + max
            + '&page=' + page
        )
        if (res.status === 200) {
            commit('GET_PRODUCTS', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const cleanErrors = async ({commit}) => {
    commit('CLEAN_ERRORS')
}