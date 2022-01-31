import React, { useState } from "react";
import { connect } from "react-redux";
import { AddTodo } from "../JS/Actions/Actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(AddTodo(todo)),
  };
};

const CreateTodo = (props) => {
  // const [id, setId] = useState(id)
  const [description, setDescription] = useState("");
  const [isDone, setisDone] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    props.addTodo({
      id: Date.now(),
      description,
      isDone,
    });
  };

  return (
    <form>
      <div>
        <h1>ToDo App</h1>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          onClick={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" onClick={handleClick} />
      </div>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(CreateTodo);
