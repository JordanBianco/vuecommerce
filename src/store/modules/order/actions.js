import api from '@/apis/api'
import router from '@/router'

export const getOrders = async ({commit}, {search, fstatus, sort, dir, perPage, page}) => {
    try {
        const res = await api.get(
            '/orders?search=' + search 
            + '&fstatus=' + fstatus
            + '&sort=' + sort
            + '&dir=' + dir
            + '&perPage=' + perPage
            + '&page=' + page
        )
        if (res.status === 200) {
            commit('GET_ORDERS', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getArchivedOrders = async ({commit}, {search, fstatus, sort, dir, perPage, page}) => {
    try {
        const res = await api.get(
            '/orders/archived?search=' + search 
            + '&fstatus=' + fstatus
            + '&sort=' + sort
            + '&dir=' + dir
            + '&perPage=' + perPage
            + '&page=' + page
        )
        if (res.status === 200) {
            commit('GET_ARCHIVED_ORDERS', res.data)
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
            router.push({ name: 'Dashboard' })
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

export const getLastOrder = async ({commit}) => {
    try {
        const res = await api.get('/orders/last')
        if (res.status === 200) {
            commit('SET_LAST_ORDER', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const emptyErrors = ({commit}) => {
    commit('EMPTY_ERRORS')
}