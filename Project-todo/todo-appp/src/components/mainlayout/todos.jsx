import React from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

const Todos = (props) => {
  return (
    <div className=" text-bg-light displayBox m-0 rounded">
      <Header
        todos={props.todos}
        addUserTodo={props.addUserTodo}
        alert={props.alert}
        edit={props.edit}
        getEditedValue={props.getEditedValue}//for getting edited value
      />

      <List
        todos={props.todos}
        deleteTask={props.deleteTask}
        alert={props.alert}
        editTask={props.editTask}//get task which user want to edit
        getToggelTodo={props.getToggelTodo}
      />

      <Footer
        todos={props.todos}
        deleteAllTasks={props.deleteAllTasks}
        alert={props.alert}
      />
    </div>
  );
};

export default Todos;
