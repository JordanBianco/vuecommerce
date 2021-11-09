export const GET_CATEGORIES = (state, categories) => {
    state.categories = categories
}

export const GET_PRODUCTS = (state, products) => {
    state.products = products
}

export const CLEAN_ERRORS = (state) => {
    state.errors = []
}