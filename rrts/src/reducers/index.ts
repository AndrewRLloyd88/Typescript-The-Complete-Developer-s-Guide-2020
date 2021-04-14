import { combineReducers } from 'redux'
import { todosReducer } from './todos'
import { Todo } from '../actions'

//described the data that exists inside of our redux store
export interface StoreState {
  todos: Todo[]
}

//typescript is making sure that todosReducer is returning an array of todos
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
})
