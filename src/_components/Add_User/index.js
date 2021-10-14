import React, { useState, useEffect } from "react";
import allActions from "../../_redux/actions";
import styles from "./Add.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const AddUser = ({ data }) => {
  // State
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    userType: "user",
  });

  // const [isEdit, setEdit] = useState(false);
  const singleUserData = useSelector(
    (state) => state.getSingleUser?.singleUser?.user
  );

  console.log(singleUserData);
  useEffect(() => {
    if (singleUserData) {
      setUser({
        id: singleUserData.id,
        firstName: singleUserData.firstName,
        lastName: singleUserData.lastName,
        email: singleUserData.email,
      });
    } else {
      setUser({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        userType: "user",
      });
    }
  }, [singleUserData]);

  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory;

  // console.log(singleUserData);
  const Messeges = useSelector((state) => state.addUser?.regular_user);

  // Getting User value on Input Change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // User Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (singleUserData) dispatch(allActions.AddUser(user, history));
    else if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password &&
      user.password_confirmation
    ) {
      console.log("hi");
      dispatch(allActions.AddUser(user, history));
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          {}
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {singleUserData ? "Update User" : "Add User"}
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
                />
              </div>

              <div className="mb-5">
                <button
                  className="btn btn-primary"
                  // data-bs-dismiss={
                  //   Messeges && Messeges.regularUser && Messeges.isError
                  //     ? null
                  //     : "modal"
                  // }
                >
                  {singleUserData ? "Update" : "Add"}
                </button>
              </div>

              {Messeges && Messeges.regularUser && Messeges.isError ? (
                <div className="errorMesseges">
                  {Messeges.regularUser?.map((messag, index) => {
                    return <p key={index}>{messag}</p>;
                  })}
                </div>
              ) : null}

              {Messeges && Messeges?.regularUser && !Messeges?.isError ? (
                <div className="successMessega">
                  <p className="text-success">{Messeges.regularUser.message}</p>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
