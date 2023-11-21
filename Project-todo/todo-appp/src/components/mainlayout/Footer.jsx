import React from "react";

const Footer = (props) => {
  //if no todo in list then return this
  if (props.todos.length === 0) {
    return (
      <div className="text-center">
        <h4 className="me-3 footer-fontsize mt-4 fw-bold ">
          📆📆📅 Start Adding Tasks 📟📟📟
        </h4>
      </div>
    );
  }

  //if any todo is present in list then this code execute
  let totalUnPackedItems = props.todos.filter(
    (item) => item.doStatus === false
  ).length;
  let totalPackedItems = props.todos.filter(
    (item) => item.doStatus === true
  ).length;
  // deleteAllTodosHandler functionality

  const deleteAllTodosHandler = () => {
    props.deleteAllTasks();

    props.alert("All Tasks deleted successfully!!!!", "alert-success");
  };

  return (
    <div className="d-flex">
      <h4 className="me-4  mt-4 color-info fw-bold">
        Task Status :- Done : {totalPackedItems} , Pending :{" "}
        {totalUnPackedItems}
      </h4>
      <button
        onClick={deleteAllTodosHandler}
        className="ms-3 py-2 px-5 rounded mt-3 btnDellAll"
      >
        Delete All
      </button>
    </div>
  );
};

export default Footer;
