import React, { Component } from 'react'

import { default as dom } from "./dom.jsx"
import { default as event } from "./event.js"
// import "./css/if_else.css"
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
                name: null,
                age: null
            }
            // 事件

        this.formHandle = event.formHandle.bind(this)
        this.type = event.type.bind(this)
        this.submit = event.submit.bind(this)
            // 一下为dom
        this.dom = dom.dom.bind(this)
        this.form = dom.form.bind(this)

    }
    render() {
        return this.dom()
    }
    componentDidMount() {

    }
}


export default List