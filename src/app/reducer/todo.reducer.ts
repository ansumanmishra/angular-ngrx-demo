import * as fromTodosAction from '../actions/todo.action';

export interface TodosState {
    todos: string[]
}

const initialTodos: TodosState = {
    todos: ['Go to Office']
}

export function TodoReducer(state = initialTodos, action: fromTodosAction.TodosAction) {
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