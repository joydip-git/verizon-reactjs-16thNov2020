import * as ActionTypes from '../actiontypes/productActionTypes'
import { singleProductState } from '../states/productStates'

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