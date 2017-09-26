import { createStore, combineReducers, applyMiddleware } from "redux"

import { IndexReducer } from "./components/Index/"

import thunkMiddleware from 'redux-thunk'

const reducerApp = combineReducers({
    index: IndexReducer
})


export default new createStore(reducerApp, applyMiddleware(thunkMiddleware))