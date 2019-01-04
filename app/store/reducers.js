import { combineReducers } from '../../redux'
import todos from './todosReducer'
import modal from './modalReducer'

export default combineReducers({
  todos,
  modal
})
