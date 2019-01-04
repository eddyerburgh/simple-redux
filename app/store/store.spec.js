import { createStore } from '../../redux'
import reducers from './reducers'

test('returns same object if unrelated dispatch is fired', () => {
  const store = createStore(reducers)
  const initialState = store.getState()
  expect(initialState).toEqual({
    modal: { visible: false },
    todos: { items: [] }
  })
  store.dispatch({ type: 'BLANK' })
  expect(store.getState()).toBe(initialState)
})

test('updates state when action is fired', () => {
  const store = createStore(reducers)
  const payload = { text: 'Write tests' }
  store.dispatch({ type: 'ADD_TODO', payload })
  expect(store.getState().todos.items).toContain(payload)
})

test('calls subscribed listeners when dispatch called', () => {
  const store = createStore(reducers)
  const listener = jest.fn()
  store.subscribe(listener)
  store.dispatch({ type: 'ADD_TODO', payload: {} })
  expect(listener).toHaveBeenCalled()
})
