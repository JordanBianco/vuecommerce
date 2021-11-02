import api from '@/apis/api'

export const getCategories = async ({commit}) => {
    try {
        const res = await api.get('/categories')
        if (res.status === 200) {
            commit('GET_CATEGORIES', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}