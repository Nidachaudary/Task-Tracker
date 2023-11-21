import React from "react";
import ListElement from "./ListElement";
const List = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.todos.map((element, index) => {
          return (
            <ListElement
              key={index}
              todo={element}
              deleteTask={props.deleteTask}
              alert={props.alert}
              editTask={props.editTask}
              getToggelTodo={props.getToggelTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
