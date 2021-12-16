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

export const getProducts = async ({commit}, {slug, page, min, max, ratings}) => {
    commit('GET_PRODUCTS', null)
    try {
        const res = await api.get(
            '/categories/' + slug + '/products?min_price=' + min
            + '&max_price=' + max
            + '&ratings=' + ratings
            + '&page=' + page
        )
        if (res.status === 200) {
            commit('GET_PRODUCTS', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const storeCategory = async ({commit}, {name}) => {
    try {
        const res = await api.post('/admin/categories', {
            name: name
        })
        if (res.status === 201) {
            commit('SET_SUCCESS_STATUS', true)
            commit('PUSH_CATEGORY', res.data.data)
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const cleanErrors = ({commit}) => {
    commit('CLEAN_ERRORS')
}

export const resetSuccessStatus = ({commit}) => {
    commit('SET_SUCCESS_STATUS', false)
}