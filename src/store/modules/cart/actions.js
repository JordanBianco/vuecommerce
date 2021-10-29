export const toggleCart = ({commit}) => {
    commit('TOGGLE_CART')
}

/**
 *  Cart 
 **/
export const addToCart = ({commit}, {product, quantity}) => {
    commit('ADD_TO_CART', {
        product: product,
        quantity: quantity
    })
}

export const removeFromCart = ({commit}, {index}) => {
    commit('REMOVE_FROM_CART', index)
}

export const incrementQty = ({commit}, {item}) => {
    commit('INCREMENT_QTY', item)
}

export const decrementQty = ({commit}, {item}) => {
    commit('DECREMENT_QTY', item)
}

export const saveForLater = ({commit}, {item}) => {
    commit('SAVE_FOR_LATER', item)
}

export const emptyCart = ({commit}) => {
    commit('EMPTY_CART')
}

/**
 *  Save For Later 
 **/
 export const emptySaved = ({commit}) => {
    commit('EMPTY_SAVED')
}

export const removeFromSaved = ({commit}, {index}) => {
    commit('REMOVE_FROM_SAVED', index)
}

export const moveToCart = ({commit}, {index, item}) => {
    commit('REMOVE_FROM_SAVED', index)
    commit('MOVE_TO_CART', item)
}