const defaultState = {
    button: false,
}

function buttonReducer(state = defaultState, action) {
    switch (action.type) {

        case 'button_true':
            return { ...state, button: true }

        case 'button_false':
            return { ...state, button: false }

        default: return state
    }
}

export default buttonReducer;