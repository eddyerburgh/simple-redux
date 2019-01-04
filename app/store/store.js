import { createStore } from '../../redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)
window.store = store
export default store
