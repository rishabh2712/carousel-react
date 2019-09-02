import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Route,
    Link,
    Redirect,
    Switch,
    withRouter,
    BrowserRouter as Router,

  } from 'react-router-dom';
import Login from './Login'
import App from './App'

export class AppContainer extends Component {

  componentDidMount() {
    this.props.history.push('/login')
  }

  render() {
    return (
        <Switch> 
            <Route path = '/' exact component = {App} />
            <Route path = '/login' exact component = {Login} />
            {/* <Redirect from='/shaadi-assignment' to ='/shaadi-assignment/login' /> */}
        </Switch>
    )
  }
}


export default withRouter(AppContainer)
