import api from '@/apis/api'
import router from '@/router'

export const placeOrder = async ({commit}, {customer, items, notes, total}) => {
    try {
        const res = await api.post('/order', {
            user_id: customer.user_id,
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
        console.log(res)
        if (res.status === 200) {
            commit('cart/EMPTY_CART', [], { root: true })
            router.push({name: 'Home'}) // per ora
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