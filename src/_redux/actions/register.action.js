const RegisterUser = (user, history) => async (dispatch) => {
  dispatch({ type: "REGISTER_USER" });
  try {
    let url = "http://34.210.129.167/api/register";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const userData = await response.json();
    console.log(response);
    let isError = false;
    if (response.status !== 201) {
      isError = true;
    }

    // console.log(response.status);
    dispatch({
      type: "REGISTER_USER_SUCCESS",
      payload: { isError: isError, registerData: userData },
    });

    if (response.status === 201) {
      history.push("/");
    }
  } catch (error) {
    // console.log(error);
    dispatch({
      type: "REGISTER_USER_FAILURE",
      payload: error,
    });
  }
};

export default RegisterUser;
