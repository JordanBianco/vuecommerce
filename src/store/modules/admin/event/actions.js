import api from '@/apis/api'

export const getEvents = async ({commit}, {categories}) => {
    try {
        const res = await api.get('/admin/events?categories=' + categories)
        if (res.status === 200) {
            commit('SET_EVENTS', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getEventCategories = async ({commit}) => {
    try {
        const res = await api.get('/admin/events/categories')
        if (res.status === 200) {
            commit('SET_EVENT_CATEGORIES', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const storeEvent = async ({commit}, {event}) => {
    try {
        const res = await api.post('/admin/events', {
            event_category_id: event.event_category_id,
            title: event.title,
            description: event.description,
            start: event.start,
            end: event.end,
        })
        if (res.status === 201) {
            commit('PUSH_EVENT', res.data.data)
            commit('SET_SUCCESS_STATUS', true);
            commit('notification/ADD_NOTIFICATION', {
                message: 'Evento aggiunto.'
            }, { root:true });
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const updateEvent = async ({commit, dispatch}, {event}) => {
    try {
        const res = await api.patch('/admin/events/' + event.id + '/update', {
            event_category_id: event.event_category_id,
            title: event.title,
            description: event.description,
            start: event.start,
            end: event.end,
        })
        if (res.status === 200) {
            dispatch('getEvents', { categories: [] })
            commit('SET_SUCCESS_STATUS', true);
            commit('notification/ADD_NOTIFICATION', {
                message: 'Evento aggiornato.'
            }, { root:true });
        }
    } catch (error) {
        if (error.response.status === 422) {
            commit('SET_ERRORS', error.response.data.errors);
        }
    }
}

export const updateStartDate = async ({commit}, {id, start}) => {
    try {
        const res = await api.patch('/admin/events/' + id + '/update-start', {
            start: start,
        })
        if (res.status === 200) {
            commit('SET_SUCCESS_STATUS', true);
            commit('notification/ADD_NOTIFICATION', {
                message: 'Evento aggiornato.'
            }, { root:true });
        }
    } catch (error) {
        console.log(error)
    }
}

export const deleteEvent = async ({commit}, {event}) => {
    try {
        const res = await api.delete('/admin/events/' + event.id + '/delete')
        if (res.status === 200) {
            commit('DELETE_EVENT', event.id);
            commit('SET_SUCCESS_STATUS', true);
            commit('notification/ADD_NOTIFICATION', {
                message: 'Evento eliminato.'
            }, { root:true });
        }
    } catch (error) {
        console.log(error)
    }
}

export const setSuccessStatus = ({commit}, {value}) => {
    commit('SET_SUCCESS_STATUS', value);
}

export const emptyErrors = ({commit}) => {
    commit('EMPTY_ERRORS', []);
}