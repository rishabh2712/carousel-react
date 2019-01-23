import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import {
    Route,
    Link,
    Redirect,
    Switch,
    withRouter,
    BrowserRouter as Router,
  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {slides} from '../src/containers/App/reducer'
const store = configureStore()

ReactDOM.render(
<Provider store={store}>     
      <Router>
        <AppContainer />
      </Router>  
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
