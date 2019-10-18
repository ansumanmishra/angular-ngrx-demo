export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const LOAD_USERS = 'LOAD_USERS';
export const ADD_DYNAMIC_USERS = 'ADD_DYNAMIC_USERS';

export class GetUsersAction {
    readonly type = GET_USERS;

    constructor() {

    }
}

export class AddUserAction {
    readonly type = ADD_USER;

    constructor(public payload: string) {

    }
}

export class AddDynamicUserAction {
    readonly type = ADD_DYNAMIC_USERS;

    constructor(public payload: string[]) {

    }
}

export class LoadUsersAction {
    readonly type = LOAD_USERS;

    constructor() {

    }
}

export type UserActions = GetUsersAction | AddUserAction | AddDynamicUserAction | LoadUsersAction;