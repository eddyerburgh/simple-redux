const initialState = {
  items: []
}

export default function todosReducer(state = initialState, action) {
  if (action.type === 'ADD_TODO') {
    return {
      ...state,
      items: [...state.items, action.payload]
    }
  }
  return state
}
