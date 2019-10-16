export function UserReducer(state = {users: []}, action) {
    switch(action.type) {
        case 'GET_USERS': {
            return {
                users: ['ANSUMAN', 'DEBASRITA']
            };
        }

        case 'ADD_USER': {
            return {...state, users: [...state.users, action.payload]};
        }
    }
    return state;
}