import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const todosRender = filteredTodos.map((todo) => {
    return (
      <Todo
        setTodos={setTodos}
        todos={todos}
        key={todo.id}
        text={todo.text}
        todo={todo}
      />
    );
  });

  return (
    <div className="todo-container">
      <ul className="todo-list">{todosRender}</ul>
    </div>
  );
};

export default TodoList;
