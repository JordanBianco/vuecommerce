export const SET_AUTH = (state, value) => {
    state.auth = value
}

export const SET_IS_ADMIN = (state, value) => {
    state.isAdmin = value
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}

export const EMPTY_ERRORS = (state) => {
    state.errors = []
}

