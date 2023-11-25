import React, { useState } from "react";
import Todos from "./components/mainlayout/todos";
import "./App.css";

function App() {
  // state variables

  const [todos, setTodos] = useState(() => {
    //when same port open on which you store something it shows stored TOdos otherwise dummyTodos
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || []; // Default to an dummyTodo if no storedTodos
  });
  const [alertMsg, setAlertMsg] = useState();
  const [color, setColor] = useState("");
  const [edit, setEdit] = useState({
    editBtn: false,
    item: {
      text: "",
      id: "",
    },
  });

  //getTodo and update the todo array
  const addUserTodo = (todo) => {
    setTodos([...todos, todo]);
    //local storage for add items
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
  };

  //edit functionality

  //this function get todo which is going to be edit
  const editTask = (item) => {
    setEdit({
      editBtn: true,
      item: {
        text: item.text,
        id: item.id,
      },
    });
   
  };

  //this function get edited todo and then updates the todos

  const getEditedValue = (value) => {

    

    const newTodoAfterEdit = todos.map((element) => {
      if (edit.item.id === element.id) {
        return { ...element, description: value };
      }
      return element;
    });
  
    setTodos(newTodoAfterEdit);
  

    //local storage
    localStorage.setItem("todos", JSON.stringify(newTodoAfterEdit));
    const todosAfterEdit = JSON.parse(localStorage.getItem("todos"));
    setTodos(todosAfterEdit);

//set the edit btn because to hide its display
    setEdit({
      editBtn: false,
      item: {
        text: "",
        id: "",
      },
    });
  };



  //get the toggle todo and update the array
  const getToggelTodo = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, doStatus: !todo.doStatus } : todo
      )
    );
  };

  //getting id and delete the task and local storage set
  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
    //local storage for delete items
    localStorage.setItem("todos", JSON.stringify(newTodos));
    const filterTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(typeof filterTodos);
    setTodos(filterTodos);
  };



  //Delete all tasks and local storage set
  const deleteAllTasks = () => {
    setTodos([]);
    //local storage for delete all items
    localStorage.setItem("todos", JSON.stringify([]));

    JSON.parse(localStorage.getItem("todos"));
    const deleteAllTodos = JSON.parse(localStorage.getItem("todos"));

    setTodos(deleteAllTodos);
  };



  //Alert msg display functionality
  const alert = (msg, background) => {
    setAlertMsg(msg);
    setColor(background);

    setTimeout(() => {
      setAlertMsg();
      setColor();
    }, 2000);
  };

  return (
    <>
    <div className={`alert ${color} ${color==='alert-success'? "greenColorSet":color==='alert-danger'?"redColorSet":" "} text-center text-light b-none alert-fontSize fw-bold mt-0 mb-4`}>{alertMsg}</div>
    <div>
   
      <Todos
        todos={todos}
        addUserTodo={addUserTodo}//it is for header to get new todo and this function update the todo
        deleteTask={deleteTask}
        deleteAllTasks={deleteAllTasks}
        alert={alert}
        editTask={editTask} //for list element to get the todo which user wish to edit
        edit={edit} //todo which is going to edit is sent to header
        getEditedValue={getEditedValue} // it is for getting edited value
        getToggelTodo={getToggelTodo}
      />
      </div>
      </>
  );
}

export default App;
