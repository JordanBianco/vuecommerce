import api from '@/apis/api'

export const toggleCart = ({commit}) => {
    commit('TOGGLE_CART')
}

/**
 *  Cart 
 **/
export const getItems = async ({commit}) => {
    try {
        const res = await api.get('/cart')
        if (res.status === 200) {
            commit('GET_ITEMS', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const addToCart = async ({commit}, {item}) => {
    try {
        const res = await api.post('/cart', {
            product_id: item.product.id,
            quantity: item.quantity
        })
        if (res.status === 200) {
            commit('ADD_TO_CART', item)
        }
    } catch (error) {
        console.log(error)
    }
}

export const removeFromCart = async ({commit}, {index, product_id}) => {
    try {
        const res = await api.delete('/cart/' + product_id)
        if (res.status === 200) {
            commit('REMOVE_FROM_CART', index)
        }
    } catch (error) {
        console.log(error)
    }
}

export const incrementQty = async ({commit}, {item}) => {
    try {
        const res = await api.patch('/cart/' + item.product.id + '/increment')
        if (res.status === 200) {
            commit('INCREMENT_QTY', item)
        }
    } catch (error) {
        console.log(error)
    }
}

export const decrementQty = async ({commit}, {item}) => {
    try {
        const res = await api.patch('/cart/' + item.product.id + '/decrement')
        if (res.status === 200) {
            commit('DECREMENT_QTY', item)
        }
    } catch (error) {
        console.log(error)
    }
}

export const emptyCart = async ({commit}) => {
    try {
        const res = await api.delete('/cart')
        if (res.status === 200) {
            commit('EMPTY_CART')
        }
    } catch (error) {
        console.log(error)
    }
}

/**
 *  Save For Later 
 **/
export const getSavedItems = async ({commit}) => {
    try {
        const res = await api.get('/saved')
        if (res.status === 200) {
            commit('GET_SAVED_ITEMS', res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export const saveForLater = async ({commit}, {item}) => {
    try {
        const res = await api.post('/saved/' + item.product.id)
        if (res.status === 200) {
            commit('SAVE_FOR_LATER', item)
        }
    } catch (error) {
        console.log(error)
    }
}

 export const emptySaved = async ({commit}) => {
    try {
        const res = await api.delete('/saved/')
        if (res.status === 200) {
            commit('EMPTY_SAVED')
        }
    } catch (error) {
        console.log(error)
    }
}

export const removeFromSaved = async ({commit}, {index, item}) => {
    try {
        const res = await api.delete('/saved/' + item.product.id)
        if (res.status === 200) {
            commit('REMOVE_FROM_SAVED', index)
        }
    } catch (error) {
        console.log(error)
    }
}