import React from "react";

import { useParams } from "react-router";
import Header from "../Header";
import Logs from "../Logs";

const ViewLogs = () => {
  let params = useParams();
  const id = JSON.parse(params?.id);
  localStorage.setItem("AdminLogId", JSON.stringify(id));
  return (
    <>
      <Header />
      <div className="container">
        <Logs />
      </div>
    </>
  );
};

export default ViewLogs;
