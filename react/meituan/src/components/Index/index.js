import { connect } from "react-redux"
import IndexJsx from "./contains/index.jsx"

const select = (state) => {
    return {
        index: state.index,
        foot:state.foot
    }
}

export const Index = connect(select)(IndexJsx)


export { default as IndexReducer }
from "./reducers"