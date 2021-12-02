export const SET_COUPON = (state, coupon) => {
    state.coupon = coupon
}

export const SET_COUPONS = (state, coupons) => {
    state.coupons = coupons
}

export const PUSH_COUPON = (state, coupon) => {
    state.coupons.data.push(coupon)
}

export const DELETE_COUPON = (state, index) => {
    state.coupons.data.splice(index, 1)
}

// Client
export const REMOVE_COUPON = (state) => {
    state.coupon = []
}

export const SET_SUCCESS_STATUS = (state, value) => {
    state.success = value
}

export const SET_ERRORS = (state, errors) => {
    state.errors = errors
}

export const EMPTY_ERRORS = (state) => {
    state.errors = []
}

