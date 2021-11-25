import api from '@/apis/api'
import router from '@/router'

export const getReviews = async ({commit}, {search, sort, dir}) => {
    try {
        const res = await api.get(
            '/reviews?search=' + search
            + '&sort=' + sort
            + '&dir=' + dir
        )
        if (res.status === 200) {
            commit('SET_REVIEWS', res.data.data);
        }
    } catch (error) {
        console.log(error)
    }
}


export const postReview = async ({commit}, {product_id, review}) => {
    try {
        const res = await api.post('/' + product_id + '/review', {
            title: review.title,
            content: review.content,
            rating: review.rating,
        })
        if (res.status === 201) {
            router.push({ name: 'My Reviews'})
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const updateReview = async ({commit}, {review}) => {
    try {
        const res = await api.patch('/reviews/' + review.id, {
            title: review.title,
            content: review.content,
            rating: review.rating
        })
        if (res.status === 200) {
            commit('SET_ERRORS', []);
            commit('SET_SUCCESS_STATUS', true);

            commit('notification/ADD_NOTIFICATION', {
                message: 'Recensione modificata correttamente!'
            }, { root:true });
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
            commit('SET_SUCCESS_STATUS', false);
        }
    }
}

export const deleteReview = async ({commit}, {review, index}) => {
    try {
        const res = await api.delete('/reviews/' + review.id)
        if (res.status === 200) {
            commit('DELETE_REVIEW', index)

            commit('notification/ADD_NOTIFICATION', {
                message: 'Recensione eliminata correttamente!'
            }, { root:true });
        }
    } catch (error) {
        console.log(error)
    }
}

export const setSuccessStatus = ({commit}, {value}) => {
    console.log(value)
    commit('SET_SUCCESS_STATUS', value);
}

export const getLastReview = async ({commit}) => {
    try {
        const res = await api.get('/reviews/last')
        if (res.status === 200) {
            commit('SET_LAST_REVIEW', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const emptyErrors = ({commit}) => {
    commit('SET_ERRORS', []);
}