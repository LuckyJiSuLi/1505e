import { Router, Route, hashHistory ,IndexRoute} from "react-router"
import React, { Component } from 'react'
import {Index} from "../components/Index"
import {Register} from "../components/register"
import {Login} from "../components/login"

const route = 
    <Router history={hashHistory}  >
        {/*<IndexRoute component={Register}></IndexRoute>*/}
          <Route path='/' component={Index} ></Route>
          <Route path='/register' component={Register} ></Route>
            <Route path='/login' component={Login} ></Route>
          
    </Router>


export default route