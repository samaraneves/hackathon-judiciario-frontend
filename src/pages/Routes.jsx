import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './Home/index'
import Report from './Report/index'

export default () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/report" exact component={Report}/>
        </BrowserRouter>
    )
} 