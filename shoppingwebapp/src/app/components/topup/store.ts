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
    topUps: ITopUp[],
    account: IAccount
}

export const TOPUP_INITIAL_STATE: ITopUpState = {
    amount: 0,
    userId: null,
    createdAt: null,
    topUp: {},
    topUps: [{}],
    account: {}
}

export function topUpReducer(state: ITopUpState = TOPUP_INITIAL_STATE, action): ITopUpState {
    switch (action.type) {
        case ADD_BALANCE:
            return tassign(state, { account: action.payload });
        case MINUS_BALANCE:
            return tassign(state, { amount: action.payload });
        case GET_TOPUP_BY_ID:
            return tassign(state, { account: action.payload });
        case GET_ALL_TOPUPS:
            return tassign(state, { topUps: action.payload });
    }
    return state;
}

export interface ITopUp {
    amount?: number,
    userId?: string,
    createdAt?: Date
}

export interface IAccount {
    _id?: string,
    userid?: string,
    balance?: number,
    desc?: string
}