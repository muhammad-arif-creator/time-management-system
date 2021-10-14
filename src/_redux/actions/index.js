import RegisterUser from "./register.action";
import loginUser from "./login.action";
import {
  AddUser,
  GetAllUsers,
  GetSingleUser,
  DeletUser,
  UpdateUser,
} from "./user.action.js";
import {
  CreateWorkLog,
  GetWorkLog,
  GetSingleLog,
  UpdateHours,
} from "./logs.action";

const allActions = {
  RegisterUser,
  loginUser,
  AddUser,
  GetAllUsers,
  GetSingleUser,
  DeletUser,
  UpdateUser,
  CreateWorkLog,
  GetWorkLog,
  GetSingleLog,
  UpdateHours,
};

export default allActions;
