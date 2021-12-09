import api from '@/apis/api'
import router from '@/router'

// ADMIN
export const getCoupons = async ({commit}, {search, sort, dir, perPage, page}) => {
    try {
        const res = await api.get(
            '/admin/coupons?search=' + search +
            '&sort=' + sort +
            '&dir=' + dir +
            '&perPage=' + perPage +
            '&page=' + page
        )
        if (res.status === 200) {
            commit('SET_COUPONS', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getCoupon = async ({commit}, {slug}) => {
    commit('SET_COUPON', null)
    try {
        const res = await api.get('/admin/coupons/' + slug)
        if (res.status === 200) {
            commit('SET_COUPON', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const storeCoupon = async ({commit}, {coupon}) => {
    try {
        const res = await api.post('/admin/coupons', {
            code: coupon.code,
            description: coupon.description,
            discount: coupon.discount,
        })
        if (res.status === 201) {
            commit('PUSH_COUPON', res.data.data);
            commit('SET_SUCCESS_STATUS', true);
            commit('notification/ADD_NOTIFICATION', {
                message: 'Coupon aggiunto.'
            }, { root:true });
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const updateCoupon = async ({commit}, {coupon}) => {
    try {
        const res = await api.patch('/admin/coupons/' + coupon.id + '/update', {
            code: coupon.code,
            description: coupon.description,
            discount: coupon.discount,
        })
        if (res.status === 200) {
            router.push({ name: 'coupon.edit', params: {slug: res.data.data.slug }}).catch(()=>{})
        
            commit('notification/ADD_NOTIFICATION', {
                message: 'Coupon aggiornato.'
            }, { root:true });
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const deleteCoupon = async ({commit}, {coupon, index}) => {
    try {
        const res = await api.delete('/admin/coupons/' + coupon.id + '/delete')
        if (res.status === 200) {
            commit('DELETE_COUPON', index);
            commit('notification/ADD_NOTIFICATION', {
                message: 'Coupon eliminato.'
            }, { root:true });
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

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

export const removeCoupon = ({commit}) => {
    commit('REMOVE_COUPON')
}

export const setSuccessStatus = ({commit}, {value}) => {
    commit('SET_SUCCESS_STATUS', value);
}
