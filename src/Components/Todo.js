import react from "react";
import TodoList from "./TodoList";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    let newTodos = [...todos];
    newTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(newTodos);
  };
  const completeHandler = () => {
    let newTodos = todos.map((item) => {
      if (item.id === todo.id) {
        //return the items original states with the addition of flipping the completed state
        return { ...item, completed: !item.completed };
      } else {
        //else return the item as it is
        return item;
      }
    });
    setTodos(newTodos);
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
