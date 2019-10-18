export const GET_TODOS = 'GET_TODOS';

export class GetTodosAction {
    readonly type = GET_TODOS;

    constructor(public payload: string[]) {}
}

export type TodosAction = GetTodosAction;