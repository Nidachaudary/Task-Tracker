import React, { useState, useEffect } from "react";

const Header = (props) => {
  //state variables
  const [description, setDescription] = useState("");

  //Edit value initalization

  //editinput is firstly just initalize with " " when value comes it is not initialized
  //to solve this problem we use useEffect which bassically senses change during rendering
  const [editInput, setEditInput] = useState(props.edit.item.text);
  useEffect(() => {
    setEditInput(props.edit.item.text);
  }, [props.edit.item.text]);

  //edithandler

  const editHandler = () => {
    if (editInput === "")
      props.alert(
        "Empty input. To add task you must enter task !!!!",
        "alert-danger"
      );
    else {
      props.alert("Task edit successfully!!!!", "alert-success");
      props.getEditedValue(editInput);
    }
  };

  //input handler
  const inputHandler = (event) => {
    setDescription(event.target.value);
  };

  //submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    if (description === "") {
      props.alert(
        "Empty input. To add task you must enter task !!!!",
        "alert-danger"
      );
    } else {
      const todo = {
        id: Date.now(),
        description,
        doStatus: false,
      };
      props.addUserTodo(todo);
      props.alert("Task added successfully!!!!", "alert-success");

      setDescription("");
    }
  };

  return (
    <div>
      <h1 className="h1 text-center fw-bold heading-bg">Task Tracker</h1>
      {props.edit.editBtn ? (
        <form className="form-group d-flex mt-3">
          <input
            onChange={(e) => setEditInput(e.target.value)}
            type="text"
            value={editInput}
            className="ps-5 inputSet border border-2 border-dark fw-bold"
          />
          <i
            onClick={editHandler}
            className="fas fa-edit p-2 iconEdit fontHeaderEditIcon"
          ></i>
        </form>
      ) : (
        <form className="form-group d-flex mt-3">
          <input
            onChange={inputHandler}
            type="text"
            value={description}
            className="ps-5 inputSet border border-2 border-dark fw-bold"
            placeholder="Enter Your Task Here"
          />
          <i
            onClick={submitHandler}
            className="fa-solid fa-plus p-2 iconPlus"
          ></i>
        </form>
      )}
    </div>
  );
};

export default Header;
