export function TodoReducer(state = {}, action) {
    switch(action.type) {
        case 'GET_TODOS': {
            return {
                ...state,
                todos: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}