import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'

const middleware = [thunk]

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store