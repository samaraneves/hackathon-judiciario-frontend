import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './Home/index'
import Report from './Report/index'
import history from './history'

export default () => {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/report" exact component={Report} />
            </Switch>

        </BrowserRouter>
    )
} 