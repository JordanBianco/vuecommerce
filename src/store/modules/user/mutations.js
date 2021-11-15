export const SET_USER = (state, user) => {
    state.user = user
}

export const SET_REVIEWS = (state, reviews) => {
    state.reviews = reviews
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}

export const EMPTY_ERRORS = (state) => {
    state.errors = []
}