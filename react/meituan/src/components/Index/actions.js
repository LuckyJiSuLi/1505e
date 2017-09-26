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



// 异步action，都会返回一个函数，而不是对象
export const reqBanner = () => {
    return (dispatch) => {
        dispatch(actionStart()) //开始数据请求
        fetch("/some/path").then((res) => {
            if (res.status == "200") {
                res.json().then((data) => {

                    dispatch(actionOk(data)) //数据请求成功
                })

            } else {
                dispatch(actionError()) //数据请求失败
            }
        }).catch(() => {
            dispatch(actionError()) //数据请求失败

        })
    }
}