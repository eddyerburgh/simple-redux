export default function combineReducers(reducers) {
  return function combination(state = {}, action) {
    let nextState = {}
    let hasChanged = false

    Object.keys(reducers).forEach(key => {
      let reducer = reducers[key]
      let previousStateForKey = state[key]

      nextState[key] = reducer(previousStateForKey, action)

      if (nextState[key] !== previousStateForKey) {
        hasChanged = true
      }
    })

    // If nothing has changed then we return the same previous object
    // which means we can stop any other re-renders with a strict compare
    // in other parts of the code
    return hasChanged ? nextState : state
  }
}
