import React from "react";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
}) => {
  const inputTextHandler = (e) => {
    //e = event
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    //By default buttons submit the page, this will stop that from occurring
    e.preventDefault();
    setTodos(
      [
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ],
      setInputText("")
    );
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
         <div>
        <h1>Testing stuff</h1>
        <h3>Email</h3>
        <a href="mailto:someone@yoursite.com">test@gmail.com</a>
        <hr />
        <h3>Phone</h3>
        <a href="tel:0831231231">0831231231</a>
        <hr />
        <h3>Google maps</h3>
        <a href="https://www.google.com/maps/@-33.8913753,18.5151581,15z">Open maps</a>
        <hr />
      </div>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
