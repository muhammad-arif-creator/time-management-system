import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../_redux/actions";
import styles from "./Users.module.css";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";

const RegularUsers = () => {
  // const [filterData, setFilterData] = useState([]);
  const allUsers = useSelector(
    (state) => state.getAllUsers?.regular_userAll?.users
  );

  // const Messeges = useSelector((state) => state.addUser?.regular_user);

  const loginId = JSON.parse(localStorage.getItem("loginId"));
  // console.log(allUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    // setFilterData(allUsers);

    dispatch(allActions.GetAllUsers());
  }, [dispatch]);

  const handleDelete = (user, id) => {
    if (window.confirm("are you sure you want to delet this record?")) {
      dispatch(allActions.DeletUser(user, id));
    }
  };
  const handleEdit = (user) => {
    dispatch(allActions.GetSingleUser(user));
  };

  const handleAdd = () => {
    dispatch(allActions.GetSingleUser(null));
  };

  const handlePage = (p) => {
    dispatch(allActions.GetAllUsers(p));
  };

  return (
    <>
      <div className={` mt-5 ${styles.regularUsersWrapper}`}>
        <div
          className={`${styles.topBar} d-flex justify-content-between align-items-center py-3`}
        >
          <h5>User Maintenance</h5>
        </div>
        <div className={`d-flex  ${styles.addUserBar}`}>
          <button
            type="button"
            className="btn btn-success m-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => handleAdd()}
          >
            Add User
          </button>
          {loginId === 1 ? (
            <button
              type="button"
              className="btn btn-success ms-3"
              data-bs-toggle="modal"
              data-bs-target="#managerModal"
            >
              Add Manager
            </button>
          ) : null}
        </div>
        <div className={`table-responsive ${styles.tableWrapper}`}>
          <table className="table table-striped table-responsive table-bordered bg-white">
            <thead className={styles.tableHead}>
              <tr>
                <th scope="col">id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">email</th>
                <th scope="col">role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers &&
                allUsers.data.map((user) => {
                  const role = user.roles[0].name;

                  return (
                    <tr
                      // style={{
                      //   cursor: role === "user" ? "pointer" : "inherit",
                      // }}
                      key={user.id}
                      // onClick={() => viewLogs(user.id, role)}
                    >
                      <th scope="row">{user.id}</th>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{role}</td>

                      <td>
                        <button
                          className="btn btn-link p-0 text-danger mx-2"
                          onClick={() => handleDelete(user, user.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn p-0 btn-link text-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => handleEdit(user)}
                        >
                          Edit
                        </button>

                        {role === "user" && loginId === 1 ? (
                          <Link
                            className="mx-2"
                            to={{ pathname: `/view-logs/${user.id}` }}
                          >
                            view logs
                          </Link>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <Pagination
          totalpage={allUsers?.total}
          clickpage={(p) => handlePage(p)}
          currentpage={allUsers?.current_page}
        />
      </div>
    </>
  );
};

export default RegularUsers;
