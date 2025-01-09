import { combineReducers } from "redux";
import categoryReducer from "../reducer/categoryReducer";
export default combineReducers({
  allCategory: categoryReducer,
});
