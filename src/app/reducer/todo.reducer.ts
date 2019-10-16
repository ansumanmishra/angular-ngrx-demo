export function TodoReducer(state = {}, action) {
    switch(action.type) {
        case 'GET_TODOS': {
            return {
                todos: action.payload,
            }
        }

        return state;
    }
}