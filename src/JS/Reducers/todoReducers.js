import { ADD_TODO } from "../Constants/action-types";

const initialState = {
  todos: [
    {
      id: 1,
      description: "JS would almost make you mad",
      isDone: false,
    },
    {
      id: 2,
      description: "What I said earlier",
      isDone: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
export default todoReducer;
