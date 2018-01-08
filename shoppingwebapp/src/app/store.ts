import { combineReducers, Reducer } from 'redux';
import { TOPUP_INITIAL_STATE, topUpReducer, ITopUpState } from './components/topup/store';
import { PRODUCT_INITIAL_STATE, productReducer, IProductState } from './components/product/store';
import { USER_INITIAL_STATE, userReducer, IUserState } from './components/summary-customers/store';


export interface IAppState {
    topup: ITopUpState;
    product: IProductState;
    user: IUserState;
}

export const INITIAL_STATE: IAppState = {
    topup: TOPUP_INITIAL_STATE,
    product: PRODUCT_INITIAL_STATE,
    user: USER_INITIAL_STATE
}

export const rootReducer: Reducer<IAppState> = combineReducers({
    topup: topUpReducer,
    product: productReducer,
    user: userReducer
});