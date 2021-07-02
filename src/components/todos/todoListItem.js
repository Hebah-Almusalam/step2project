import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as DeleteButton } from './deleteButton.svg'


const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId)
}


const TodoListItem = ({ id }) => {
  
  const todo = useSelector((state) => selectTodoById(state, id))
  const { text, completed } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id })
  }


  const onDelete = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todo.id })
  }


  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">

          <button className="destroy" onClick={onDelete}>
            <DeleteButton /> 
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
