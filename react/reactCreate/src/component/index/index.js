import React, { Component } from 'react'

import Condition from "../condition"
import If_else from "../if_else"
import List from "../list"
import Form from "../form"
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
                name: "zhangsan",
                data: 1,
                objdata: {
                    name: 1
                }
            }
            //  console.log(this.handlefn)
            // this.handlefn=this.handlefn.bind(this)
    }
    handlefn(i) {
        console.log(this)
        console.log(i)
            // this.setState({
            //   objdata:{
            //     name:i
            //   }
            // })
    }
    componentWillMount() {
        // console.log(this.handlefn)
    }
    render() {
        /*if(this.state.data==2){
           return (
          <div>
              <span>这里是首页</span>
              <Tab nameC={this.state.name}></Tab>
          
          </div>
        )
        }else{*/
        return ( <
                div >
                <
                span className = "weather" > 这里是首页 < /span> <
                span > { this.state.objdata.name } < /span>   <
                Form > < /Form> < /
                div >
            )
            /*}*/

    }
    componentDidMount() {
        // setTimeout(function(){
        //    this.setState({
        //     data:2
        //   })
        // }.bind(this),1000)

    }
}


export default Index