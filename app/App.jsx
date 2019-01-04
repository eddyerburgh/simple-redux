import React from 'react'
import { Provider } from '../react-redux'
import TodosContainer from './TodosContainer'
import ModalContainer from './ModalContainer'
import store from './store/store'

const App = () => (
  <Provider store={store}>
    <TodosContainer />
    <button onClick={() => store.dispatch({ type: 'TOGGLE_MODAL' })}>
      Toggle modal
    </button>
    <ModalContainer />
  </Provider>
)

export default App
