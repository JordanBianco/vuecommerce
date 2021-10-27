export const toggleCart = ({commit}) => {
    commit('TOGGLE_CART')
}

export const addToCart = ({commit}, {product}) => {
    commit('ADD_TO_CART', product)
}

export const removeFromCart = ({commit}, {index}) => {
    commit('REMOVE_FROM_CART', index)
}