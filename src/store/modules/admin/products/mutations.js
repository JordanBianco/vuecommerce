export const GET_PRODUCTS = (state, products) => {
    state.products = products
}

export const GET_PRODUCT = (state, product) => {
    state.product = product
}

export const PUSH_PRODUCT = (state, product) => {
    state.product.data.push(product)
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}

export const CLEAN_ERRORS = (state) => {
    state.errors = []
}
