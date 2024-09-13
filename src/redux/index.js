import { reducerFunction } from "./Reducer/foodReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  food: reducerFunction,
});

export default rootReducer;
