const defaultState = {
    movie: false,
}

function movieReducer(state = defaultState, action) {
    switch (action.type) {

        case 'movie_true':
            return { ...state, movie: true }

        case 'movie_false':
            return { ...state, movie: false }

        default: return state
    }
}

export default movieReducer;