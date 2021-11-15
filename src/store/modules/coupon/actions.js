import api from '@/apis/api'

export const verifyCoupon = async ({commit}, {coupon}) => {
    try {
        const res = await api.get('/coupons/verify', { params: {
            coupon: coupon
        }})
        if (res.status === 200) {
            commit('SET_COUPON', res.data.data)
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const emptyCouponErrors = ({commit}) => {
    commit('EMPTY_ERRORS')
}

export const deleteCoupon = ({commit}) => {
    commit('DELETE_COUPON')
}
