export const TOGGLE_CART = (state) => {
    state.isOpen = ! state.isOpen
}

/**
 * Cart
 */
export const GET_ITEMS = (state, items) => {
    state.items = items
}

export const ADD_TO_CART = (state, item) => {
    // Controllo che l'item sia nella carta
    let itemInCart = state.items.find(i => {
        return i.product.id === item.product.id
    })
    
    if (!itemInCart) {
        state.items.push(item)
    } else {
        itemInCart.quantity = itemInCart.quantity + item.quantity
    }
}

export const REMOVE_FROM_CART = (state, index) => {
    state.items.splice(index, 1)
}

export const INCREMENT_QTY = (state, item) => {
    let itemInCart = state.items.find(i => {
        return i.product.id === item.product.id
    })

    itemInCart.quantity ++
}

export const DECREMENT_QTY = (state, item) => {
    let itemInCart = state.items.find(i => {
        return i.product.id === item.product.id
    })
    
    itemInCart.quantity --
}

export const EMPTY_CART = (state) => {
    state.items = []
}

/**
 * Saved
 */
 export const GET_SAVED_ITEMS = (state, items) => {
    state.savedItems = items
}

export const SAVE_FOR_LATER = (state, item) => {
    let itemInSaved = state.savedItems.find(i => {
        return i.product.id === item.product.id
    })
    
    if (itemInSaved) {
        alert('L\' articolo è già presente nella tua lista.')
        return
    } else {
        state.savedItems.push(item)
    }
}

export const EMPTY_SAVED = (state) => {
    state.savedItems = []
}

export const REMOVE_FROM_SAVED = (state, index) => {
    state.savedItems.splice(index, 1)
}