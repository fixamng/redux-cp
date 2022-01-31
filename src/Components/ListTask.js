import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <div id={todo.id}>
          <p>{todo.description}</p>
          <p>{todo.isDone}</p>
        </div>
      ))}
    </div>
  );
};
export default connect(mapStateToProps)(TodoList);
