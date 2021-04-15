import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

//redux thunk actionCreator is a function that returns a promise
//redux has no way of knowing what fetchTodos is
interface AppProps {
  todos: Todo[]
  fetchTodos: Function
  deleteTodo: typeof deleteTodo
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos()
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id)
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch Todos</button>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

//react redux does not know what a redux thunk action creator looks like
export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
