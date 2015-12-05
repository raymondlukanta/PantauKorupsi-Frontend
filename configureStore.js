import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunkMiddleware from 'redux-thunk'
import apiPayrolls from './middlewares/apiPayroll'
import createLogger from 'redux-logger'
import routes from './routes'
import createHistory from 'history/lib/createBrowserHistory'
import rootReducer from './reducers/reducers'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = compose(
	applyMiddleware(thunkMiddleware, apiPayrolls, loggerMiddleware),
	reduxReactRouter({ routes, createHistory })
	)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}