import { singleProductReducer, allProductsReducer } from './productReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    productState: singleProductReducer,
    productsState: allProductsReducer
})
export default rootReducer;

