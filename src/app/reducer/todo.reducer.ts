import * as fromTodosAction from '../actions/todo.action';

export function TodoReducer(state = {}, action: fromTodosAction.TodosAction) {
    switch(action.type) {
        case fromTodosAction.GET_TODOS: {
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