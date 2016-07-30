import { combineReducers } from 'redux'

function counter(state = 0, action: {type: string}) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function router(state = {}, action: {type: string, state: any}) {
  switch (action.type) {
    case 'UPDATE_ROUTER_STATE':
      return action.state
  default:
      return state;
  }
}

export const rootReducer = combineReducers({
    counter: counter,
    router: router
})
