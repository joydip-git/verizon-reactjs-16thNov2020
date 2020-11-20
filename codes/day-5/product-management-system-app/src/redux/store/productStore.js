import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { singleProductReducer } from '../reducers/productReducers'

const reduxLogger = createLogger();

const productStore = createStore(singleProductReducer, applyMiddleware(reduxLogger, thunkMiddleware));
export default productStore;