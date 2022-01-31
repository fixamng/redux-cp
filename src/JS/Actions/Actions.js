import { ADD_TODO, REMOVE_TODO } from "../Constants/action-types";

export const AddTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const RemoveTodo = (deleteTodo) => {
  return {
    type: REMOVE_TODO,
    payload: deleteTodo,
  };
};
