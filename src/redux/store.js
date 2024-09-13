import { createStore } from "redux";
// import { reducerFunction } from "./Reducer/foodReducer";
import rootReducer from ".";

export const store = createStore(rootReducer);
