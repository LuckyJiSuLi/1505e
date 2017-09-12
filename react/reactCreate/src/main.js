import React, { Component } from 'react'
import ReactDOM from "react-dom"
// var ele
// function tick(){
//  ele = ( < div >{new Date().toLocaleTimeString()} < /div>)
//  ReactDOM.render(
//     ele,
//     document.getElementById('app')
// );
// }
// tick()
// setInterval(function(){
// tick()
// },1000)

import Index from "./components/index.jsx"
import Tab from "./components/tab.jsx"
 ReactDOM.render(
    <Index />,
    document.getElementById('app')
);

