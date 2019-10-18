import * as fromUserActions from '../actions/user.action';

export function UserReducer(state = {users: []}, action: fromUserActions.UserActions) {
    switch(action.type) {
        case fromUserActions.GET_USERS: {
            return {
                ...state,
                users: ['ANSUMAN', 'DEBASRITA']
            };
        }

        case fromUserActions.ADD_USER: {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }

        case fromUserActions.ADD_DYNAMIC_USERS: {
            return {
                ...state,
                dynamicUsers: action.payload
            }
        }

        default: {
            return state;
        }
    }
}