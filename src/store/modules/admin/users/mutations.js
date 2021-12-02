export const SET_USERS = (state, users) => {
    state.users = users
}

export const SET_USER = (state, user) => {
    state.user = user
}

export const SET_ORDERS = (state, orders) => {
    state.orders = orders
}

export const DELETE_USER = (state, index) => {
    state.users.data.splice(index, 1)
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}