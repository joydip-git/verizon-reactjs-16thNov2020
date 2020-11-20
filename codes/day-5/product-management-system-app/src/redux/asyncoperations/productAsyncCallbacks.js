import * as Actions from '../actions/productActions'
import * as ProductService from '../../services/productService'

export const fetchProductByIdAsyncCallbackCreator = (productId) => {

    const fetchProductByIdAsync = (dispatch) => {
        let initiateAction = Actions.getProductByIdInitiateActionCreator();
        dispatch(initiateAction);

        ProductService.getProductRecordById(productId)
            .then(
                (resp) => {
                    let product = resp.data;
                    let successAction = Actions.getProductByIdSuccessActionCreator(product)
                    dispatch(successAction)

                }, (fail) => {
                    let failAction = Actions.getProductByIdFailureActionCreator(fail);
                    dispatch(failAction)
                }
            )
            .catch(e => {
                let errorAction = Actions.getProductByIdFailureActionCreator(e.message);
                dispatch(errorAction)
            })
    }
    return fetchProductByIdAsync;
}

export const fetchProductsAsyncCallbackCreator = () => {

    const fetchProductsAsync = (dispatch) => {
        let initiateAction = Actions.getProductsInitiateActionCreator();
        dispatch(initiateAction);

        ProductService.getProductRecords()
            .then(
                (resp) => {
                    let productsArray = resp.data;
                    let successAction = Actions.getProductsSuccessActionCreator(productsArray)
                    dispatch(successAction)

                }, (fail) => {
                    let failAction = Actions.getProductsFailureActionCreator(fail);
                    dispatch(failAction)
                }
            )
            .catch(e => {
                let errorAction = Actions.getProductsFailureActionCreator(e.message);
                dispatch(errorAction)
            })
    }
    return fetchProductsAsync;
}