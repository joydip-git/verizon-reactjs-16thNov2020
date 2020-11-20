const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')

//action types
const INCREASE_COUNTER = 'INCREASE_COUNTER'
const DECREASE_COUNTER = 'DECREASE_COUNTER'

//actions or action creators
const increaseCounterActionCreator = (data) => {
    return {
        type: INCREASE_COUNTER,
        payload: data
    }
}

const decreaseCounterActionCreator = (data) => {
    return {
        type: DECREASE_COUNTER,
        payload: data
    }
}


//state
const initialCounterState = {
    counter: 0
}


//reducer function
const counterReducer = (state = initialCounterState, action) => {
    let newState = null;
    switch (action.type) {
        case INCREASE_COUNTER:
            newState = {
                ...state,
                counter: state.counter + action.payload
            }
            break;

        case DECREASE_COUNTER:
            newState = {
                ...state,
                counter: state.counter - action.payload
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


//create middleware
const reduxLogger = createLogger();
//store
const store = createStore(counterReducer, applyMiddleware(reduxLogger))

//dispatch action against the store and print the state of the store

//console.log(store.getState())
store.dispatch(increaseCounterActionCreator(5));
//console.log(store.getState())
store.dispatch(decreaseCounterActionCreator(3));
//console.log(store.getState())
store.dispatch(increaseCounterActionCreator(3));
//console.log(store.getState())
store.dispatch(decreaseCounterActionCreator(4))
//console.log(store.getState())




