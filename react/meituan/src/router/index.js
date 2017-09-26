import { Router, Route, hashHistory } from "react-router"
import React, { Component } from 'react'
import {Index} from "../components/Index"

const route = 
    <Router history={hashHistory}  >
          <Route path='/' component={Index} >
            
          </Route>
    </Router>


export default route