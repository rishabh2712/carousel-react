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
            <Route path = '/app' component = {App} />
            <Route exact path = '/login' component = {Login} />
            <Redirect from='/' to ='/login' />
        </Switch>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
