import { combineReducers } from "redux"
const bannerInitial = {
    num: 1
}

export const bannerReducer = (state = bannerInitial, action) => {
    const { type } = action
    switch (type) {
        default: {
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