
import { useEffect, useState } from "react";
import { Tittle } from "./Components / Tittle/Index";
import { TodoInput } from "./Components /TodoInput/TodoInput";
import { TodoList } from "./Components /TodoList/TodoList";

function App() {

  const [todos, setTodos] = useState ([
    {
      id: 1,
      title: 'Mirar movie de Marvel',
      completed: false,
    },
    {
      id: 2,
      title: 'Mirar movie de Warner',
      completed: true,
    },
    {
      id: 3,
      title: 'Mirar movie de Cinecartoon',
      completed: false,
    },
    {
      id: 4,
      title: 'Mirar movie de Cinemax',
      completed: true,
    },
  ])

  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length-1].id : 1; 

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

    const handleSetComplete = (id) => {
      const updateList = todos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
      setTodos(updateList);
    } 

    const handleDelete = (id) => {
      const updateList = todos.filter(todo => todo.id !== id)
      setTodos(updateList);
    }

    const handleClearComplete = () => {
      const updateList = todos.filter(todo => !todo.completed);
      setActiveFilter(updateList);
    }

    const showAllTodos = () => {
      setActiveFilter('all')
    }

    const showActiveTodos = () => {
      setActiveFilter('active')
    }

    const showCompletedTodos = () => {
      setActiveFilter('completed')
    }

    useEffect (() => {
      if(activeFilter === 'all') {
        setFilteredTodos(todos)
    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }
    }, [activeFilter, todos])

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Tittle />
        <TodoInput addTodo={addTodo} />
        <TodoList 
        todos={filteredTodos}
        activeFilter={activeFilter}
        handleSetComplete={handleSetComplete}
        handleDelete={handleDelete}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
        />
      </div>
    </div>
  );
}

export default App;
