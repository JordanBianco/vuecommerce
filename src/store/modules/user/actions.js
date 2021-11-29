import api from '@/apis/api'

export const getUser = async ({commit}) => {
    try {
        const res = await api.get('/user')
        if (res.status === 200) {
            commit('SET_USER', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getActivities = async ({commit}) => {
    try {
        const res = await api.get('/user/activities')
        if (res.status === 200) {
            commit('SET_ACTIVITIES', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const updateInfo = async ({commit}, {user}) => {
    try {
        const res = await api.patch('/user/personal-info', {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        })
        if (res.status === 200) {
            commit('EMPTY_ERRORS');

            commit('notification/ADD_NOTIFICATION', {
                message: 'Informazioni aggiornate correttamente!'
            }, { root:true });
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const updateAddress = async ({commit}, {user}) => {
    try {
        const res = await api.patch('/user/address', {
            country: user.country,
            city: user.city,
            province: user.province,
            address: user.address,
            zipcode: user.zipcode,
            phone: user.phone,
        })
        if (res.status === 200) {
            commit('EMPTY_ERRORS');

            commit('notification/ADD_NOTIFICATION', {
                message: 'Indirizzo aggiornato correttamente!'
            }, { root:true });
        
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const changePassword = async ({commit}, {oldPassword, newPassword, newPassword_confirmation}) => {
    try {
        const res = await api.patch('/password/change', {
            oldPassword: oldPassword,
            newPassword: newPassword,
            newPassword_confirmation: newPassword_confirmation,
        })
        if (res.status === 200) {
            commit('EMPTY_ERRORS');

            commit('notification/ADD_NOTIFICATION', {
                message: 'Password aggiornata correttamente!'
            }, { root:true });
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const deleteAccount = async ({dispatch}) => {
    try {
        const res = await api.delete('/user/delete')
        if (res.status === 200) {
            dispatch('auth/logout', [], { root:true });
        }
    } catch (error) {
        console.log(error)
    }
}

export const emptyErrors = ({commit}) => {
    commit('EMPTY_ERRORS')
}