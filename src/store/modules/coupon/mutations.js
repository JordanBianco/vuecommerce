export const SET_COUPON = (state, coupon) => {
    state.coupon = coupon
}

export const DELETE_COUPON = (state) => {
    state.coupon = []
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}

export const EMPTY_ERRORS = (state) => {
    state.errors = []
}

