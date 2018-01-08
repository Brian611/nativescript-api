import { tassign } from 'tassign';
import {
    GET_USER_BY_ID,
    GET_ALL_USERS,
    TOGGLE_ADMIN
} from './actions';

export interface IUserState {
    user: IUser,
    users: IUser[],
    admin: boolean
}

export const USER_INITIAL_STATE: IUserState = {
    user: null,
    users: null,
    admin: false
}

export function userReducer(state: IUserState = USER_INITIAL_STATE, action): IUserState {
    switch (action.type) {
        case GET_USER_BY_ID:
            return tassign(state, { user: action.payload });
        case GET_ALL_USERS:
            return tassign(state, { users: action.payload });
        case TOGGLE_ADMIN:
            return tassign(state, { admin: action.payload });

    }
    return state;
}

export interface IUser {
    id: number,
    email: string,
    password: string,
    createdAt: Date
}