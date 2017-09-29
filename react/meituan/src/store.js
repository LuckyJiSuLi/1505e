import { createStore, combineReducers, applyMiddleware } from "redux"

import { IndexReducer } from "./components/Index/"
import { footReducer } from "./components/common/foot/"

import thunkMiddleware from 'redux-thunk'
import {RegisterReducer} from "./components/register/"
import {LoginReducer} from "./components/login/"
const reducerApp = combineReducers({
    index: IndexReducer,
    foot:footReducer,
    register:RegisterReducer,
    login:LoginReducer
})


export default new createStore(reducerApp, applyMiddleware(thunkMiddleware))