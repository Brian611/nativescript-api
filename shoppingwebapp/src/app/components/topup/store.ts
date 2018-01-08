import { tassign } from 'tassign';
import {
    ADD_BALANCE,
    MINUS_BALANCE,
    GET_TOPUP_BY_ID,
    GET_ALL_TOPUPS
} from './actions';

export interface ITopUpState {
    amount: number,
    userId: string,
    createdAt: Date,
    topUp: ITopUp,
    topUps: ITopUp[]
}

export const TOPUP_INITIAL_STATE: ITopUpState = {
    amount: 0,
    userId: null,
    createdAt: null,
    topUp: null,
    topUps: null
}

export function topUpReducer(state: ITopUpState = TOPUP_INITIAL_STATE, action): ITopUpState {
    switch (action.type) {
        case ADD_BALANCE:
            return tassign(state, { amount: action.payload });
        case MINUS_BALANCE:
            return tassign(state, { amount: action.payload });
        case GET_TOPUP_BY_ID:
            return tassign(state, { topUp: action.payload });
        case GET_ALL_TOPUPS:
            return tassign(state, { topUps: action.payload });
    }
    return state;
}

export interface ITopUp {
    amount: number,
    userId: string,
    createdAt: Date
}