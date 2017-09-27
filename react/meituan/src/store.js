import { createStore, combineReducers, applyMiddleware } from "redux"

import { IndexReducer } from "./components/Index/"
import { footReducer } from "./components/common/foot/"

import thunkMiddleware from 'redux-thunk'

const reducerApp = combineReducers({
    index: IndexReducer,
    foot:footReducer
})


export default new createStore(reducerApp, applyMiddleware(thunkMiddleware))