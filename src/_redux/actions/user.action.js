import allActions from ".";
import { authHeader } from "../../_helpers/auth-header";
import { closeModal } from "../../_helpers/Modal";

export const AddUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_ADD" });
  try {
    let url =
      user.id === 0
        ? "http://34.210.129.167/api/users"
        : `http://34.210.129.167/api/users/${user.id}`;
    const response = await fetch(url, {
      method: user.id === 0 ? "POST" : "PUT",
      headers: authHeader(),
      body: JSON.stringify(user),
    });
    const regularUser = await response.json();
    let isError = false;
    if (response.status !== 201 && response.status !== 200) {
      isError = true;
    }

    console.log(response.status);
    dispatch({
      type: "USER_ADD_SUCCESS",
      payload: { isError: isError, regularUser: regularUser },
    });
    if (response.status === 201 || response.status === 200) {
      dispatch(allActions.GetAllUsers());

      closeModal();
    }
  } catch (error) {
    dispatch({
      type: "USER_ADD_FAILURE",
      payload: error,
    });
  }
};

export const GetAllUsers = (pageNumber) => async (dispatch) => {
  if (!pageNumber) {
    pageNumber = 1;
  }
  dispatch({ type: "USER_GETALL" });
  try {
    let url = `http://34.210.129.167/api/users?page=${pageNumber}`;
    const response = await fetch(url, {
      method: "GET",
      headers: authHeader(),
    });
    const regularUser = await response.json();
    dispatch({
      type: "USER_GETALL_SUCCESS",
      payload: regularUser,
    });
  } catch (error) {
    dispatch({
      type: "USER_GETALL_FAILURE",
      payload: error,
    });
  }
};

export const GetSingleUser = (user) => {
  let isUpdated = true;
  return {
    type: "GET_SINGLE_USER",
    payload: { isUpdated: isUpdated, user: user },
  };
};

export const DeletUser = (user, id) => async (dispatch) => {
  dispatch({ type: "USER_DELET" });
  try {
    let url = `http://34.210.129.167/api/users/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: authHeader(),
    });

    const deletedUser = await response.json();
    console.log(deletedUser);
    dispatch({
      type: "USER_DELETE_SUCCESS",
      payload: deletedUser,
    });
    dispatch(allActions.GetAllUsers());
  } catch (error) {
    dispatch({
      type: "USER_DELETE_FAILURE",
      payload: error,
    });
  }
};

export const UpdateUser = (user, id) => async (dispatch) => {
  dispatch({ type: "USER_UPDATE" });
  try {
    let url = `http://34.210.129.167/api/users/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: authHeader(),
      body: JSON.stringify(user),
    });
    const updatedUser = await response.json();
    dispatch({
      type: "USER_UPDATE_SUCCESS",
      payload: updatedUser,
    });
  } catch (error) {
    dispatch({
      type: "USER_UPDATE_FAILURE",
      payload: error,
    });
  }
};

//export default { addUser, getAllUsers };
