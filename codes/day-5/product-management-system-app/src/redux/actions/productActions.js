import * as ActionTypes from '../actiontypes/productActionTypes'

export const getProductByIdInitiateActionCreator = () => {
    return { type: ActionTypes.GET_PRODUCTBYID_INITIATE };
}

export const getProductByIdSuccessActionCreator = (data) => {
    return { type: ActionTypes.GET_PRODUCTBYID_SUCCESS, payload: data };
}

export const getProductByIdFailureActionCreator = (error) => {
    return { type: ActionTypes.GET_PRODUCTBYID_FAILURE, payload: error };
}