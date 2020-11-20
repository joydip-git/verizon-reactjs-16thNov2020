import * as ActionTypes from '../actiontypes/productActionTypes'
import { singleProductState, allProductsState } from '../states/productStates'

export const singleProductReducer = (state = singleProductState, { type, payload }) => {
    let newState = null;
    switch (type) {
        case ActionTypes.GET_PRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                loading: true,
                error: null
            }
            break;

        case ActionTypes.GET_PRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: payload,
                loading: false,
                error: null
            }
            break;

        case ActionTypes.GET_PRODUCTBYID_FAILURE:
            newState = {
                ...state,
                product: null,
                loading: false,
                error: payload
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }
    return newState;
}

export const allProductsReducer = (state = allProductsState, { type, payload }) => {
    let newState = null;
    switch (type) {
        case ActionTypes.GET_PRODUCTS_INITIATE:
            newState = {
                ...state,
                products: [],
                loading: true,
                error: null
            }
            break;

        case ActionTypes.GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: payload,
                loading: false,
                error: null
            }
            break;

        case ActionTypes.GET_PRODUCTS_FAILURE:
            newState = {
                ...state,
                products: [],
                loading: false,
                error: payload
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }
    return newState;
}