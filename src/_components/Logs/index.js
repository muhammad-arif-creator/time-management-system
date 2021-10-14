import React, { useEffect, useState } from "react";
import allActions from "../../_redux/actions";
import styles from "./Logs.module.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination";
import AddLog from "../AddLog";

const Logs = () => {
  // const [singleLog, setSingleLog] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const allLogs = useSelector(
    (state) => state.getLogs?.getLogs?.getLog?.workLogs
  );
  const loginId = JSON.parse(localStorage.getItem("loginId"));
  // console.log(allLogs);
  const dispatch = useDispatch();

  const workhours = useSelector(
    (state) => state.Login?.user?.user?.working_hours
  );

  console.log(workhours);
  const initialHours = workhours !== null ? workhours : 0;
  const [workingHours, setWorkingHours] = useState(initialHours);

  useEffect(() => {
    dispatch(allActions.UpdateHours(workingHours));
  }, [dispatch, workingHours]);

  useEffect(() => {
    dispatch(allActions.GetWorkLog(1));
  }, [dispatch, workingHours]);

  const handlePage = (p) => {
    dispatch(allActions.GetWorkLog(p));
  };

  const handleEdit = (log) => {
    dispatch(allActions.GetSingleLog(log));
  };
  const handleAdd = () => {
    dispatch(allActions.GetSingleLog(null));
  };
  const handleSearch = () => {
    dispatch(allActions.GetWorkLog(0, startDate, endDate));
  };

  return (
    <>
      <div className={`mt-5 ${styles.regularUsersWrapper}`}>
        <div
          className={`${styles.topBar} d-flex justify-content-between align-items-center py-3 flex-wrap flex-md-nowrap`}
        >
          <h5 className="text-white">User Logs</h5>
        </div>
        {loginId !== 1 ? (
          <div
            className={`row align-items-end mt-5 justify-content-between ${styles.filter}`}
          >
            <div className="col-md-6">
              <div class="input-group">
                <input
                  type="date"
                  placeholder="start-date"
                  className="form-control mb-3 mb-md-0"
                  onChange={(e) => setStartDate(e.target.value)}
                />

                <input
                  className="form-control mb-3 mb-md-0"
                  type="date"
                  placeholder="end-date"
                  onChange={(e) => setEndDate(e.target.value)}
                />

                <button
                  className="btn btn-success btn-lg mb-3 mb-md-0"
                  onClick={handleSearch}
                >
                  search
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-end">
              <input
                type="number"
                className="form-control mx-md-3 mb-3 mb-md-0"
                placeholder="prefered working hours"
                value={workingHours}
                onChange={(e) => setWorkingHours(e.target.value)}
              />

              <button
                type="button"
                className="btn btn-success btn-lg m-0"
                data-bs-toggle="modal"
                data-bs-target="#logModal"
                onClick={handleAdd}
                value={workingHours}
              >
                Add Log
              </button>
            </div>
          </div>
        ) : null}

        <div className={styles.logcard}>
          <div className="row">
            {allLogs &&
              allLogs.data &&
              allLogs.data.map((log, index) => {
                return (
                  <div
                    className={`col-md-4
                 ${styles.cardLog}`}
                    key={index}
                  >
                    <div
                      className={
                        log.hours < workingHours ? "redCard" : "greenCard"
                      }
                    >
                      <h6 className="mb-3 d-flex justify-content-between">
                        <span>created at:</span>
                        <b> {log.log_date} </b>
                      </h6>
                      <h6 className="mb-3 d-flex justify-content-between">
                        <span>working hours:</span>
                        <b> {log.hours}</b>
                      </h6>
                      <p className="d-flex justify-content-between flex-column">
                        <span>description:</span>
                        <p className="text-secondary">{log.description}</p>
                      </p>
                      <div className={styles.update}>
                        <button
                          className={"btn btn-primary btn-sm mt-0"}
                          onClick={() => handleEdit(log)}
                          data-bs-toggle="modal"
                          data-bs-target="#logModal"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {allLogs?.total && (
          <Pagination
            totalpage={allLogs?.total}
            clickpage={(p) => handlePage(p)}
            currentpage={allLogs?.current_page}
          />
        )}
      </div>
      <AddLog logData={null} />
    </>
  );
};

export default Logs;
