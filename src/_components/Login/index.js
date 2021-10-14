import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import allActions from "../../_redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

// const isAuthenticated = localStorage.getItem("isAuthenticated");
// console.log("this", isAuthenticated);

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const token = localStorage.getItem("token");
  const history = useHistory();

  // const loginSuccess = useSelector(
  //   (state) => state.Register?.user?.registerData?.message
  // );
  useEffect(() => {
    if (token) {
      history.push("/dashboard");
    }
  }, [history, token]);
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.Login?.user);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (user.email && user.password) {
      dispatch(allActions.loginUser(user, history));
    }
  };

  return (
    <div className={`py-5 ${styles.registerPage}`}>
      <div className="container">
        <div className={styles.signupContent}>
          {/* {registerSuccess ? (
            <p className="text-success text-center">{registerSuccess}</p>
          ) : (
            ""
          )} */}
          <div className="row align-items-center">
            <div className="col-md-6 col-12 d-flex flex-column align-items-center justify-content-center">
              <img src="./images/signin-image.jpg" alt="Signup" />
              <Link
                className={`mt-5 d-block ${styles.signupImageLink}`}
                to="/register"
              >
                Create Account
              </Link>
            </div>
            <div className="col-md-6 col-12">
              <div className={styles.signupForm}>
                <h2 className="mb-4">Log in</h2>
                <form name="form" onSubmit={handleSubmit} autoComplete="off">
                  <div className={`mb-3 ${styles.formGroup}`}>
                    <span className="material-icons">email</span>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={handleChange}
                      value={user.firstName}
                    />

                    {submitted && !user.email && (
                      <div className="error-message">Email is required</div>
                    )}
                  </div>
                  <div className={`mb-3 ${styles.formGroup}`}>
                    <span className="material-icons">lock</span>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={handleChange}
                      value={user.firstName}
                    />
                    {submitted && !user.password && (
                      <div className="error-message">Password is required</div>
                    )}
                  </div>
                  <div className="mb-5">
                    <button className="btn btn-primary">Login</button>
                  </div>
                  {loginUser && !loginUser.success ? (
                    <div className="errorMesseges">
                      <p> {loginUser.message} </p>
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
