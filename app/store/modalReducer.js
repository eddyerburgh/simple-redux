const initialState = {
  visible: false
}

export default function modalReducer(state = initialState, action) {
  if (action.type === 'TOGGLE_MODAL') {
    return {
      ...state,
      visible: !state.visible
    }
  }
  return state
}
