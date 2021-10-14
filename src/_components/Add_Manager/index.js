import React, { useState } from "react";
import styles from "./Manager.module.css";
import { useDispatch } from "react-redux";
import allActions from "../../_redux/actions";
import { useSelector } from "react-redux";

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
  const Messeges = useSelector((state) => state.Register?.user);

  // Getting User value on Input Change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // User Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allActions.RegisterUser(user));
  };

  return (
    <div
      className="modal fade"
      id="managerModal"
      aria-labelledby="managerModalLabel"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="managerModalLabel">
              Add Manager
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form name="form" onSubmit={handleSubmit} autoComplete="off">
              <div className={`mb-3 ${styles.formGroup}`}>
                <span className="material-icons">person</span>
                <input
                  type="text"
                  name="firstName"
                  className={"form-control"}
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
              <div className="mb-3">
                <button className="btn btn-primary mt-3">Add</button>
              </div>
              {Messeges && Messeges.isError ? (
                <div className="errorMesseges">
                  {Messeges.registerData.map((messag, index) => {
                    return <p key={index}>{messag}</p>;
                  })}
                </div>
              ) : null}

              {Messeges && Messeges?.registerData && !Messeges?.isError ? (
                <div className="successMessega">
                  <p className="text-success">
                    {Messeges.registerData.message}
                  </p>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
