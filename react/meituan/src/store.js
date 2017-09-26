import { createStore, combineReducers } from "redux"

import { IndexReducer } from "./components/Index/"


const reducerApp = combineReducers({
    index: IndexReducer
})


export default new createStore(reducerApp)