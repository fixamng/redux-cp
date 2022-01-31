import { createStore } from "redux";
import todoReducer from "../Reducers/todoReducers";

const store = createStore(todoReducer);
export default store;
