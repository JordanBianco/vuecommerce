import api from '@/apis/api'
import router from '@/router'

export const getOrders = async ({commit}, {sort}) => {
    try {
        const res = await api.get('/orders?sort=' + sort)
        if (res.status === 200) {
            commit('GET_ORDERS', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getOrderDetails = async ({commit}, {slug}) => {
    commit('GET_ORDER', null)
    try {
        const res = await api.get('/orders/' + slug)
        if (res.status === 200) {
            commit('GET_ORDER', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getArchivedOrders = async ({commit}, {sort}) => {
    try {
        const res = await api.get('/orders/archived?sort=' + sort)
        if (res.status === 200) {
            commit('GET_ARCHIVED_ORDERS', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const placeOrder = async ({commit, dispatch}, {user_id, customer, items, notes, total}) => {
    try {
        const res = await api.post('/orders', {
            user_id: user_id,
            first_name: customer.first_name,
            last_name: customer.last_name,
            email: customer.email,
            country: customer.country,
            city: customer.city,
            province: customer.province,
            address: customer.address,
            zipcode: customer.zipcode,
            phone: customer.phone,
            notes: notes,
            items: items,
            total: total
        })
        if (res.status === 200) {
            dispatch('cart/emptyCart', [], { root:true })
            router.push({ name: 'Dashboard', query: { view: 'orders' }})
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const getProductsReviewed = async ({commit}) => {
    try {
        const res = await api.get('/orders/products-reviewed')
        if (res.status === 200) {
            commit('GET_PRODUCTS_REVIEWED', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getPurchasedProducts = async ({commit}) => {
    try {
        const res = await api.get('/orders/purchased-products')
        if (res.status === 200) {
            commit('GET_PURCHASED_PRODUCTS', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const archiveOrder = async ({commit}, {order, index}) => {
    try {
        const res = await api.patch('/orders/' + order.id + '/archive')
        if (res.status === 200) {
            commit('REMOVE_ORDER', index)
        }
    } catch (error) {
        console.log(error)
    }
}

export const restoreOrder = async ({commit}, {order, index}) => {
    try {
        const res = await api.patch('/orders/' + order.id + '/restore')
        if (res.status === 200) {
            commit('REMOVE_ARCHIVED_ORDER', index)
        }
    } catch (error) {
        console.log(error)
    }
}

export const emptyErrors = ({commit}) => {
    commit('EMPTY_ERRORS')
}