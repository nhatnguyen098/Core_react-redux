import { combineReducers } from "redux";
import home from "./HomeReducer";
import user from './UserReducer'
export default combineReducers({
  home,
  user
});
