import api from '@/apis/api'
import router from '@/router'

// GET
export const getUsers = async ({commit}, {search, email_verified, sort, dir, perPage, page}) => {
    try {
        const res = await api.get(
            '/admin/users?search=' + search +
            '&email_verified=' + email_verified +
            '&sort=' + sort + 
            '&dir=' + dir + 
            '&perPage=' + perPage + 
            '&page=' + page
        )
        if (res.status === 200) {
            commit('SET_USERS', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async ({commit}, {id}) => {
    commit('SET_USER', null)
    try {
        const res = await api.get('/admin/users/' + id)
        if (res.status === 200) {
            commit('SET_USER', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getUserOrders = async ({commit}, {id, fstatus, search, sort, dir, perPage, page }) => {
    commit('SET_ORDERS', null)
    try {
        const res = await api.get(
            '/admin/users/' + id + '/orders?search=' + search +
            '&fstatus=' + fstatus +
            '&sort=' + sort +
            '&dir=' + dir +
            '&perPage=' + perPage +
            '&page=' + page
        )
        if (res.status === 200) {
            commit('SET_ORDERS', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

// Update
export const updateInfo = async ({commit}, {user}) => {
    try {
        const res = await api.patch('/admin/users/' + user.id + '/update', {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        })
        if (res.status === 200) {
            commit('notification/ADD_NOTIFICATION', { message: user.first_name + ' ' + user.last_name + ' aggiornato con successo.'}, { root: true })
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const updateAddress = async ({commit}, {user}) => {
    try {
        const res = await api.patch('/admin/users/' + user.id + '/update-address', {
            country: user.country,
            city: user.city,
            province: user.province,
            address: user.address,
            zipcode: user.zipcode,
            phone: user.phone,
        })
        if (res.status === 200) {
            commit('notification/ADD_NOTIFICATION', { message: user.first_name + ' ' + user.last_name + ' aggiornato con successo.'}, { root: true })
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

// Delete
export const deleteUser = async ({commit}, {user, index}) => {
    try {
        const res = await api.delete('/admin/users/' + user.id + '/delete')
        if (res.status === 200) {
            if (index) {
                commit('DELETE_USER', index)
            } else {
                router.push({ name: 'Manage Users' })
            }
            commit('notification/ADD_NOTIFICATION', { message: user.first_name + ' ' + user.last_name + ' eliminato con successo.'}, { root: true })
        }
    } catch (error) {
        console.log(error)
    }
}

// Update
export const clearErrors = async ({commit}) => {
    commit('SET_ERRORS', []);
}
