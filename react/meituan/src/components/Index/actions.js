import { I_SENDSTART, I_SENDOK, I_SENDERROR } from "./actionsTypes"

export const actionStart = () => {
    return {
        type: I_SENDSTART
    }
}

export const actionOk = (text) => {
    return {
        type: I_SENDOK,
        text: text
    }
}
export const actionError = () => {
    return {
        type: I_SENDERROR
    }
}

// export const reqBanner = () => {
//     return (dispatch) => {
//         fetch("/some/path").then(()=>{})
//     }
// }