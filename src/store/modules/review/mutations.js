export const SET_REVIEWS = (state, reviews) => {
    state.reviews = reviews
}

export const DELETE_REVIEW = (state, index) => {
    state.reviews.splice(index, 1)
}

export const SET_LAST_REVIEW = (state, review) => {
    state.last = review
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}

export const SET_SUCCESS_STATUS = (state, value) => {
    state.success = value
}