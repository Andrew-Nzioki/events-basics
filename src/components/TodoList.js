import React, { useState } from "react";
import { myTodos, getNextId } from "./todos";
const TodoList = () => {
  const [todos, setTodos] = useState(myTodos);
  const [newTodoDescription, setNewTodoDescription] = useState("");

  function addTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: getNextId(),
      description: newTodoDescription,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    console.log("createTodo", newTodo);
    setTodos(updatedTodos);
  }
  function deleteTodo(id) {
    //console.log(id)
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }
  function updateTodo(id, completed) {
    console.log(todos);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos)
  }
  return (
    <div className="App">
      <h2>Add Todos</h2>
      <form onSubmit={addTodo}>
        <label>
          Description:
          <input
            type="text"
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Add todo" />
      </form>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.description}</strong>
            <label>
              Completed?
              <input
                type="checkbox"
                onChange={(e) => updateTodo(todo.id, e.target.checked)}
                checked={todo.completed}
              />
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
