import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Login from "../views/login";

class Routers extends Component {
    render() {
        return (
            <BrowserRouter keyLength={12}>
                <Switch>
                    <Route path='/' component={Login} exact />

                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routers