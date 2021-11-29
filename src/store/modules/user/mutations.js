export const SET_USER = (state, user) => {
    state.user = user
}

export const SET_ACTIVITIES = (state, activities) => {
    state.activities = activities
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}

export const EMPTY_ERRORS = (state) => {
    state.errors = []
}