export const GET_PRODUCTS = (state, products) => {
    state.products = products
}

export const GET_PRODUCT = (state, product) => {
    state.product = product
}

export const GET_SIMILAR_PRODUCTS = (state, similar) => {
    state.similar = similar
}

export const GET_REVIEWS = (state, reviews) => {
    state.reviews = reviews
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}

export const CLEAN_ERRORS = (state) => {
    state.errors = []
}

export const TOGGLE_FILTERS = (state) => {
    state.showFilters = ! state.showFilters
}