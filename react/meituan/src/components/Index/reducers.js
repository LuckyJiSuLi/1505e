import { combineReducers } from "redux"
import { I_SENDSTART, I_SENDOK, I_SENDERROR } from "./actionsTypes"
const bannerInitial = {
    data: null,
    state: false
}

export const bannerReducer = (state = bannerInitial, action) => {
    const { type, text } = action
    switch (type) {
        case I_SENDSTART:
            {

                return Object.assign({}, state, { state: "start" })
            }
        case I_SENDOK:
            {

                return Object.assign({}, state, { state: "ok", data: text.custom })
            }
        case I_SENDERROR:
            {

                return Object.assign({}, state, { state: "error" })
            }
        default:
            {
                return state
            }
    }
}


const tabInitial = {
    count: 1
}
export const tabReducer = (state = tabInitial, action) => {
    const { type } = action
    switch (type) {
        default: {
            return state
        }
    }
}

export default combineReducers({
    banner: bannerReducer,
    tab: tabReducer
})