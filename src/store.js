import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { reducer as modal } from 'redux-modal'

const initialCounterState = {
  value: 9,
}

const INC = "counter/incremented"
const DEC = "counter/decremented"

export const actions = {
  INC,
  DEC,
}

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INC:
      return { ...state, value: state.value + 1 }
    case DEC:
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}

export const getStore = (providedInitialState = {}) => {
  return createStore(
    combineReducers({counter: counterReducer, modal}), 
    {
      ...providedInitialState,
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
} 
