import React from 'react'
import store from './store/store'

const submitTodo = event => {
  event.preventDefault()
  store.dispatch({
    type: 'ADD_TODO',
    payload: {
      text: event.target.children[0].value
    }
  })
}

const TodosForm = () => (
  <form onSubmit={submitTodo}>
    <input type="text" name="todo" placeholder="Add todo" />
  </form>
)

export default TodosForm
