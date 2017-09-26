import React, { Component } from 'react'


class Index extends Component{
  constructor(props){
    super(props)


  }

  render(){
    const {result}=this.props.prop.index.banner
    if(this.props.prop.index.banner.state=="start"){
       return (
        <div>
            正在请求数据
        </div>
      )
    }else if(this.props.prop.index.banner.state=="ok"){
         return (
            <div>
                请求成功数据为：
                <p>{result}</p>
            </div>
          )
    }else{
       return (
        <div>
            正在请求失败
        </div>
      )
    }
   
  }
}


export default Index
