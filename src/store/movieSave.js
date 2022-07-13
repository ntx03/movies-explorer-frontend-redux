const defaultState = {
    movieSave: false,
}

function movieSaveReducer(state = defaultState, action) {
    switch (action.type) {

        case 'movieSave_true':
            return { ...state, movieSave: true }

        case 'movieSave_false':
            return { ...state, movieSave: false }

        default: return state
    }
}

export default movieSaveReducer;