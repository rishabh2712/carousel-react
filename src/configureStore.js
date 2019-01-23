import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import {slides} from '../src/containers/App/reducer'
import thunk from 'redux-thunk'


export default function configureStore(initialState = {}, history) {
 const logger = createLogger()
 const store = createStore(
  slides,
  applyMiddleware(thunk, logger) 
 )
 return store
}