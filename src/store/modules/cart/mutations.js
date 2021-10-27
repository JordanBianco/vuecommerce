export const TOGGLE_CART = (state) => {
    state.isOpen = ! state.isOpen
}

export const ADD_TO_CART = (state, product) => {
    let productInCart = state.products.find(p => {
        return p.id === product.id
    })
    
    if (!productInCart) {
        state.products.push(product)
    } else {
        productInCart.quantity ++
    }
}

export const REMOVE_FROM_CART = (state, index) => {
    state.products.splice(index, 1)
}

export const toggleCart = ({commit}) => {
    commit('TOGGLE_CART')
}

export const addToCart = ({commit}, {product}) => {
    commit('ADD_TO_CART', product)
}

export const removeFromCart = ({commit}, {index}) => {
    commit('REMOVE_FROM_CART', index)
}