import api from '@/apis/api'
import router from '@/router'

export const postReview = async ({commit}, {product_id, review}) => {
    try {
        const res = await api.post('/' + product_id + '/review', {
            title: review.title,
            content: review.content,
            rating: review.rating,
        })
        if (res.status === 201) {
            router.push({ name: 'Dashboard', query: { view: 'reviews' }})
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const emptyErrors = ({commit}) => {
    commit('EMPTY_ERRORS')
}