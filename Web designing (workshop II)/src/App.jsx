/*import { useState, useEffect } from "react";
import "./app.css";
import TodoForm from "../my-react-app/src/TodoForm";
import TodoItem from "../my-react-app/src/TodoItem";
import FilterButtons from "../my-react-app/src/FilterButtons";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="container">
      <div className="todo-box">
        <h1>ToDo App</h1>

        <TodoForm addTodo={addTodo} />

        <FilterButtons
          filter={filter}
          setFilter={setFilter}
        />

        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <p>No tasks found</p>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                editTodo={editTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;*/