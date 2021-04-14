//holds all action creators
import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

interface Todo {
  id: number
  title: string
  completed: boolean
}

interface FetchTodosAction {
  type: ActionTypes.fetchTodos
  payload: Todo[]
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url)

    //always passing in an object with the correct types and properties
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    })
  }
}
