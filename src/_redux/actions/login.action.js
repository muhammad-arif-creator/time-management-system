const loginUser = (user, history) => async (dispatch) => {
  dispatch({ type: "LOGIN_USER" });
  try {
    let url = "http://34.210.129.167/api/login";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const loginData = await response.json();

    //console.log(loginData);

    dispatch({
      type: "LOGIN_USER_SUCCESS",
      payload: loginData,
    });
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("token", JSON.stringify(loginData.token));
      localStorage.setItem("loginId", JSON.stringify(loginData.user.id));
      localStorage.setItem(
        "role",
        JSON.stringify(loginData.user.roles[0].name)
      );
      // localStorage.setItem("preffered_hours", loginData.user.working_hours);
      // const workhours = useSelector(
      //  (state) => state.Login?.user?.user?.working_hours
      // );
      history.push("/dashboard");
    } else if (response.status === 403) {
      history.push("/");
    }
  } catch (error) {
    dispatch({
      type: "LOGIN_USER_FAILURE",
      payload: error,
    });
  }
};

export default loginUser;
