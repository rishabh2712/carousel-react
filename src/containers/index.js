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

  render() {
    return (
        <Switch> 
            <Route path = '/shaadi-assignment/app' component = {App} />
            <Route exact path = '/shaadi-assignment/login' component = {Login} />
            <Redirect from='/shaadi-assignment' to ='/shaadi-assignment/login' />
        </Switch>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
