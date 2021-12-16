export const GET_CATEGORIES = (state, categories) => {
    state.categories = categories
}

export const GET_PRODUCTS = (state, products) => {
    state.products = products
}

export const PUSH_CATEGORY = (state, category) => {
    state.categories.data.push(category)
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}

export const SET_SUCCESS_STATUS = (state, value) => {
    state.success = value
}

export const CLEAN_ERRORS = (state) => {
    state.errors = []
}