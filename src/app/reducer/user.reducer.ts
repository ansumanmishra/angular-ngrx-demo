export function UserReducer(state = {users: []}, action) {
    switch(action.type) {
        case 'GET_USERS': {
            return {
                ...state,
                users: ['ANSUMAN', 'DEBASRITA']
            };
        }

        case 'ADD_USER': {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }
        default: {
            return state;
        }
    }
}