export default function createStore(reducer) {
  let currentState
  let listeners = []

  const getState = () => currentState

  const subscribe = listener => {
    listeners.push(listener)
  }

  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(l => l())
  }

  // This creates the initial store by causing each reducer to be called
  // with an undefined state
  dispatch({ type: '__INIT__' })

  return {
    dispatch,
    subscribe,
    getState
  }
}
