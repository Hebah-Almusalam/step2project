import todosReducer from './components/todos/todosSlice'

import { combineReducers } from 'redux'



const initialState = {
    todos: [
      { id: 0, text: 'Finish step-2 project', completed: true },
      { id: 1, text: 'Start the next step', completed: false },
      { id: 2, text: 'Walk 4000 steps', completed: false }
    ],
    filters: {
      status: 'All'
    }
  }

  function nextTodoId(todos) {  
      const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)  
      return maxId + 1
    }
  



const rootReducer = combineReducers({   
    todos: todosReducer, 
})
export default rootReducer 