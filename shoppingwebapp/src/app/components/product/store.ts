import { tassign } from 'tassign';
import {
    GET_PRODUCT_BY_ID,
    GET_ALL_PRODUCTS
} from './actions';

export interface IProductState {
    product: IProduct,
    products: IProduct[]
}

export const PRODUCT_INITIAL_STATE: IProductState = {
    product: null,
    products: null
}

export function productReducer(state: IProductState = PRODUCT_INITIAL_STATE, action): IProductState {
    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            return tassign(state, { product: action.payload });
        case GET_PRODUCT_BY_ID:
            return tassign(state, { products: action.payload });
    }
    return state;
}

export interface IProduct {
    id?: number,
    email?: string,
    password?: string,
    createdAt?: Date
}