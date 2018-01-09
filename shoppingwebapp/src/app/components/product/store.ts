import { tassign } from 'tassign';
import {
    GET_PRODUCT_BY_ID,
    GET_ALL_PRODUCTS,
    ADD_PRODUCTS
} from './actions';

export interface IProductState {
    product: {},
    products: IProducts[]
}

export const PRODUCT_INITIAL_STATE: IProductState = {
    product: {},
    products: [{}]
}

export function productReducer(state: IProductState = PRODUCT_INITIAL_STATE, action): IProductState {
    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            return tassign(state, { products: action.payload });
        case GET_ALL_PRODUCTS:
            return tassign(state, { products: action.payload });
        case ADD_PRODUCTS:
            return tassign(state, { products: [...state.products, action.payload] });
    }
    return state;
}

export interface IProducts {
    _id?: string,
    _v?: any,
    price?: Number,
    qty?: Number,
    desc?: String,
    img?: String
}