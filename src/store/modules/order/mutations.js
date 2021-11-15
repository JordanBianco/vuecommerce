export const GET_ORDERS = (state, orders) => {
    state.orders = orders
}

export const GET_ORDER = (state, order) => {
    state.order = order
}

export const GET_ARCHIVED_ORDERS = (state, archived) => {
    state.archived = archived
}

export const GET_PRODUCTS_REVIEWED = (state, productsReviewed) => {
    state.productsReviewed = productsReviewed
}

export const GET_PURCHASED_PRODUCTS = (state, purchasedProducts) => {
    state.purchasedProducts = purchasedProducts
}

export const REMOVE_ORDER = (state, index) => {
    state.orders.splice(index, 1)
}

export const REMOVE_ARCHIVED_ORDER = (state, index) => {
    state.archived.splice(index, 1)
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}

export const EMPTY_ERRORS = (state) => {
    state.errors = []
}

