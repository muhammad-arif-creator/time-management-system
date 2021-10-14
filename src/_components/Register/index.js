import React, { useState, useEffect } from "react";
import styles from "./Register.module.css";
import { useDispatch } from "react-redux";
import allActions from "../../_redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Register = () => {
  // State
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const Messeges = useSelector((state) => state.Register?.user);
  const token = localStorage.getItem("token");

  // useEffect
  useEffect(() => {
    if (token) {
      history.push("/dashboard");
    }
  }, [history, token]);

  // Getting User value on Input Change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // User Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allActions.RegisterUser(user, history));
  };

  return (
    <div className={`py-5 ${styles.registerPage}`}>
      <div className="container">
        <div className={styles.signupContent}>
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <div className={styles.signupForm}>
                <h2 className="mb-4">Sign up</h2>
                <form name="form" onSubmit={handleSubmit} autoComplete="off">
                  <div className={`mb-3 ${styles.formGroup}`}>
                    <span className="material-icons">person</span>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First Name"
                      onChange={handleChange}
                      value={user.firstName}
                    />
                  </div>
                  <div className={`mb-3 ${styles.formGroup}`}>
                    <span className="material-icons">person</span>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={handleChange}
                      value={user.lastName}
                    />
                  </div>
                  <div className={`mb-3 ${styles.formGroup}`}>
                    <span className="material-icons">email</span>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={handleChange}
                      value={user.email}
                    />
                  </div>
                  <div className={`mb-3 ${styles.formGroup}`}>
                    <span className="material-icons">lock</span>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={handleChange}
                      value={user.password}
                      autoComplete="on"
                    />
                  </div>
                  <div className={`mb-3 ${styles.formGroup}`}>
                    <span className="material-icons">lock_open</span>
                    <input
                      type="password"
                      name="password_confirmation"
                      className="form-control"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      value={user.password_confirmation}
                      autoComplete="on"
                    />
                  </div>

                  <div className="mb-5">
                    <button className="btn btn-primary">Register</button>
                  </div>
                  {Messeges && Messeges.isError ? (
                    <div className="errorMesseges">
                      {Messeges.registerData.map((messag, index) => {
                        return <p key={index}>{messag}</p>;
                      })}
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex flex-column align-items-center justify-content-center">
              <img src="./images/signup-image.jpg" alt="Signup" />
              <Link
                className={`mt-5 d-vblock ${styles.signupImageLink}`}
                to="/"
              >
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
