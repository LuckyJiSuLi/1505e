import React, { Component } from 'react'
import Tab from "./tab.jsx"
import Test from "./es5.jsx"
class Index extends Component{
  constructor(props){
    super(props)
    this.state={
     
        name:"zhangsan",
        data:1
    }
  }
  render(){
    if(this.state.data==2){
       return (
      <div>
          <span>这里是首页</span>
          <Tab nameC={this.state.name}></Tab>
      
      </div>
    )
    }else{
       return (
      <div>
          <span>这里是首页</span>
          <Tab nameC={this.state.name}></Tab>
          <Test data={this.state.data}></Test>
      </div>
    )
    }
   
  }
  componentDidMount(){
    // setTimeout(function(){
    //    this.setState({
    //     data:2
    //   })
    // }.bind(this),1000)
   
  }
}

export default Index