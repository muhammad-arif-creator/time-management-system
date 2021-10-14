export const addUser = (state = {}, action) => {
  switch (action.type) {
    case "USER_ADD":
      return {
        ...state,
      };
    case "USER_ADD_SUCCESS":
      return {
        ...state,
        regular_user: action.payload,
      };

    case "USER_ADD_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllUsers = (state = {}, action) => {
  switch (action.type) {
    case "USER_GETALL":
      return {
        ...state,
      };
    case "USER_GETALL_SUCCESS":
      return {
        ...state,
        regular_userAll: action.payload,
      };

    case "USER_GETALL_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSingleUser = (state = {}, action) => {
  switch (action.type) {
    case "GET_SINGLE_USER":
      return {
        ...state,
        singleUser: action.payload,
      };
    default:
      return state;
  }
};

export const Delete = (state = {}, action) => {
  switch (action.type) {
    case "USER_DELETE":
      return {
        ...state,
      };
    case "USER_DELETE_SUCCESS":
      return {
        ...state,
        deletedUser: action.payload,
      };

    case "USER_DELETE_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const Update = (state = {}, action) => {
  switch (action.type) {
    case "USER_UPDATE":
      return {
        ...state,
      };
    case "USER_UPDATE_SUCCESS":
      return {
        ...state,
        updatedUser: action.payload,
      };

    case "USER_UPDATE_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

//const reguralUsers = { addUser, getUser };
