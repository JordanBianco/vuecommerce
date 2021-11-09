import api from '@/apis/api'

export const getProducts = async ({commit}, {search, categories, min, max, size, sort, ratings, perPage, page}) => {
    try {
        const res = await api.get(
            '/products?search=' + search + 
            '&categories=' + categories + 
            '&min_price=' + min + 
            '&max_price=' + max +
            '&size=' + size +
            '&sort=' + sort +
            '&ratings=' + ratings +
            '&perPage=' + perPage +
            '&page=' + page
        )
        if (res.status === 200) {
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
        const res = await api.get('/products/' + slug)
        if (res.status === 200) {
            commit('GET_PRODUCT', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getSimilarProducts = async ({commit}, {slug}) => {
    commit('GET_SIMILAR_PRODUCTS', null)
    try {
        const res = await api.get('/products/' + slug + '/similar')
        if (res.status === 200) {
            commit('GET_SIMILAR_PRODUCTS', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getReviews = async ({commit}, {slug, sort}) => {
    commit('GET_REVIEWS', null)
    try {
        const res = await api.get('/products/' + slug + '/reviews?sort=' + sort)
        if (res.status === 200) {
            commit('GET_REVIEWS', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const cleanErrors = async ({commit}) => {
    commit('CLEAN_ERRORS')
}

export const toggleFilters = ({commit}) => {
    commit('TOGGLE_FILTERS')
}