const Login = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Login;
