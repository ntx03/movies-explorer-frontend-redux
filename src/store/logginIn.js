const defaultState = {
    loggin: false,
}

function logginInReducer(state = defaultState, action) {
    switch (action.type) {

        case 'loggin_true':
            return { ...state, loggin: true }

        case 'loggin_false':
            return { ...state, loggin: false }

        default: return state
    }
}

export default logginInReducer;