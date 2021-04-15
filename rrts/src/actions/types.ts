import { FetchTodosAction, DeleteTodoAction } from './todos'

//the only requirement redux needs is a unique value
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

//type alias of action to use by reducers
export type Action = FetchTodosAction | DeleteTodoAction
