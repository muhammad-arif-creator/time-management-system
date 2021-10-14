import React from "react";
import Logs from "../Logs";
import styles from "./UserLogs.module.css";

const UserLogs = () => {
  return (
    <div className={styles.LogsWrapper}>
      <Logs />
    </div>
  );
};

export default UserLogs;
