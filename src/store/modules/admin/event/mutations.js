export const SET_EVENTS = (state, events) => {
    state.events = events
}

export const PUSH_EVENT = (state, event) => {
    state.events.push(event)
}

export const DELETE_EVENT = (state, id) => {
    let eventInList = state.events.find(event => {
        return event.id == id
    })
    let index = state.events.indexOf(eventInList)
    state.events.splice(index, 1)   
}

export const SET_EVENT_CATEGORIES = (state, categories) => {
    state.categories = categories
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