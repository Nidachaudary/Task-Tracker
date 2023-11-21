import React from "react";

const ListElement = (props) => {

  
  //edit handler
  const editHandlers = () => {
    const obj = {
      text: props.todo.description,
      id: props.todo.id,
    };
    props.editTask(obj);
  };

  // delete handler
  const deleteHandler = () => {
    props.deleteTask(props.todo.id);
    props.alert("Task deleted successfully!!!!", "alert-success");
  };

  return (
    <li className="list-group-item d-flex justify-content-between mt-3 listElement p-2">
      <div className="d-flex">
        <input
          onChange={(e) => props.getToggelTodo(props.todo.id)}
          checked={props.todo.doStatus}
          className="form-check-input me-3 checkBoxSet"
          type="checkbox"
        />
        <p
          className={`mb-0 mt-1 h4 fw-bold ${
            props.todo.doStatus ? "text-decoration-line-through" : ""
          }`}
        >
          {props.todo.description}
        </p>
      </div>
      <div>
        <i
          onClick={editHandlers}
          className="fas fa-edit iconEdit fontEditIcon me-2 p-1"
        ></i>
        <i
          onClick={deleteHandler}
          className="fa-solid fa-trash-can iconDel p-1"
        ></i>
      </div>
    </li>
  );
};

export default ListElement;
