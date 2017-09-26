import React, { Component } from 'react'
import Banner from "../pages/banner.jsx"

class Index extends Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render(){
    return (
      <div>首页
        
        <Banner prop={this.props}></Banner>
      </div>
    )
  }
}


export default Index
