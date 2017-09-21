import React, { Component } from 'react'
import {store} from "../tool/index.js"
import Child from "./child.jsx"
class Index extends Component{
  constructor(props){
        super(props)
        this.listenfn=this.listenfn.bind(this)
        this.state={
          num:store.getState().num
        }
        store.subscribe(this.listenfn)
        
      
  }
  listenfn(){
    this.setState({
      num:store.getState().num
    })
  }
  render(){
    return (
      <div>
          <span>{this.state.num}</span>
          <Child></Child>
      </div>
    )
  }
  componentWillUnmount(){
    store.unsubscribe(this.listenfn)
  }
}


export default Index