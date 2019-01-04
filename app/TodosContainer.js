import React from 'react'
import { connect } from '../react-redux'
import TodosForm from './TodosForm'

const Todo = ({ text }) => <p>{text}</p>

const Todos = ({ todos }) => (
  <div>
    <h1>Todos:</h1>
    {todos.map(({ text }, i) => (
      <Todo text={text} key={`TODO-${i}`} />
    ))}
    <TodosForm />
  </div>
)

const mapStateToProps = state => ({ todos: state.todos.items })

export default connect(mapStateToProps)(Todos)
