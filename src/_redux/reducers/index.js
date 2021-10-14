import Register from "./register.reducer";
import Login from "./login.reducer";
import { combineReducers } from "redux";
import {
  createLogs,
  getLogs,
  getSingleLog,
  updateWorkingHours,
} from "./logs.reducer";
import {
  addUser,
  getAllUsers,
  getSingleUser,
  Update,
  Delete,
} from "./user.reducer";
const rootReducer = combineReducers({
  Register,
  Login,
  addUser,
  getAllUsers,
  getSingleUser,
  Delete,
  Update,
  createLogs,
  getLogs,
  getSingleLog,
  updateWorkingHours,
});

export default rootReducer;
