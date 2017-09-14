import React, { Component } from 'react'
import Style from "./style.css"
export default{
  dom(){
    return <div>{this.form()}<p>{this.state.name}{this.state.age}</p></div>
  },
  form(){
      return <ul>
          <li>
              <label htmlFor="name">姓名:</label>
              <input type="text" id="name" onBlur={this.type}/>  
          </li>
          <li>
              <label htmlFor="age">年龄:</label>
              <input type="text" id="age" onBlur={this.type}/>  
          </li>
          <li><button onClick={this.submit}>提交</button></li>
        </ul>
  }
 
}

