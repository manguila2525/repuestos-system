import * as types from '../types'
import español from '../../utils/es.json'
import ingles from '../../utils/en.json'

export const reducerIdioma = (state = español, action) => {
  if (action.type === 'es') {
    console.log('Español')
    return (state = español)
  }
  if (action.type === 'en') {
    console.log('Ingles')
    return (state = ingles)
  }
  return state
}
