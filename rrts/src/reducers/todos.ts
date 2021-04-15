import { Todo, Action, ActionTypes } from '../actions'

export const todosReducer = (state: Todo[] = [], action: Action) => {
  //default state for this reducer
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload
    default:
      return state
  }
}
