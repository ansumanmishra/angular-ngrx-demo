import { UserState } from './reducer/user.reducer';
import { TodosState } from './reducer/todo.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
    user: UserState;
    todo: TodosState;
  }

  export const getTodos = (state: State) => state.todo;
  export const getUsers = (state: State) => state.user.users;
  export const getDynamicUsers = (state: State) => state.user.dynamicUsers;