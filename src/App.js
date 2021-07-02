import React from 'react'
import Header from './components/header/Header'
import TodoList from './components/todos/todoList'


function App() {
  return (
    <div className="App">

      <main>
        <section className="medium-container">
          <h2>To-Do</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
