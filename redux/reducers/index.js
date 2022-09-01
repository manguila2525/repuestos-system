import { combineReducers } from 'redux'
import { reducerIdioma } from './reducerIdioma'

const reducers = combineReducers({
  idioma: reducerIdioma,
})
export default reducers
