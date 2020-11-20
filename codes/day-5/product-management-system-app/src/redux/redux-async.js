const Axios = require('axios')
const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')
const thunk = require('redux-thunk')

const GET_PRODUCTBYID_INITIATE = 'GET_PRODUCTBYID_INITIATE'
const GET_PRODUCTBYID_SUCCESS = 'GET_PRODUCTBYID_SUCCESS'
const GET_PRODUCTBYID_FAILURE = 'GET_PRODUCTBYID_FAILURE'

const getProductByIdInitiateActionCreator = () => {
    return { type: GET_PRODUCTBYID_INITIATE };
}

const getProductByIdSuccessActionCreator = (data) => {
    return { type: GET_PRODUCTBYID_SUCCESS, payload: data };
}

const getProductByIdFailureActionCreator = (error) => {
    return { type: GET_PRODUCTBYID_FAILURE, payload: error };
}

const singleProductState = {
    product: null,
    loading: true,
    error: null
}

const singleProductReducer = (state = singleProductState, { type, payload }) => {
    let newState = null;
    switch (type) {
        case GET_PRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                loading: true,
                error: null
            }
            break;

        case GET_PRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: payload,
                loading: false,
                error: null
            }
            break;

        case GET_PRODUCTBYID_FAILURE:
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

const reduxLogger = createLogger();
const thunkMiddleware = thunk.default;

const productStore = createStore(singleProductReducer, applyMiddleware(reduxLogger, thunkMiddleware));

const fetchProductByIdAsyncCallbackCreator = (productId) => {

    const fetchProductByIdAsync = (dispatch) => {
        let initiateAction = getProductByIdInitiateActionCreator();
        dispatch(initiateAction);

        Axios.get('http://127.0.0.1:8081/productservice/' + productId)
            .then(
                (resp) => {
                    let productsArray = resp.data;
                    let successAction = getProductByIdSuccessActionCreator(productsArray)
                    dispatch(successAction)

                }, (fail) => {
                    let failAction = getProductByIdFailureActionCreator(fail);
                    dispatch(failAction)
                }
            )
            .catch(e => {
                let errorAction = getProductByIdFailureActionCreator(e.message);
                dispatch(errorAction)
            })
    }
    return fetchProductByIdAsync;
}
//fetchProductByIdAsync(productStore.dispatch)

let callback = fetchProductByIdAsyncCallbackCreator(1);
let callback2 = fetchProductByIdAsyncCallbackCreator(2);

productStore.dispatch(callback);
productStore.dispatch(callback2)

// function* executeCallbacks() {
//     yield productStore.dispatch(callback)
//     yield productStore.dispatch(callback2)
// }

// let generator = executeCallbacks()

// setInterval(() => {
//     console.log(generator.next())
// }, 2000)

