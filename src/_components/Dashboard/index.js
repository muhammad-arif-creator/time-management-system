import React from "react";
import Register from "../Add_Manager";
import AddUser from "../Add_User";
import Header from "../Header";
import RegularUsers from "../Regular_Users";
import UserLogs from "../UserLogs";

const Dashboard = () => {
  const role = JSON.parse(localStorage.getItem("role"));

  // console.log(role);
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="Dashboard-wrapper">
          {role === "user" ? <UserLogs /> : ""}
          {role === "manager" || role === "admin" ? (
            <>
              <AddUser />
              <RegularUsers />
              <Register />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
