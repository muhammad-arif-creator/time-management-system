import React, { useState, useEffect } from "react";
import styles from "./AddLog.module.css";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../_redux/actions";

const AddLog = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [logs, setLogs] = useState({
    logDate: "",
    hours: "",
    description: "",
    id: 0,
  });

  const singleLogData = useSelector(
    (state) => state.getSingleLog?.singleLog?.log
  );
  // console.log(singleLogData);
  useEffect(() => {
    if (singleLogData) {
      setLogs({
        logDate: singleLogData.log_date,
        hours: singleLogData.hours,
        description: singleLogData.description,
        id: singleLogData.id,
      });
    } else {
      setLogs({
        logDate: "",
        hours: "",
        description: "",
        id: 0,
      });
    }
  }, [singleLogData]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogs({ ...logs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("logs");
    if (logs.logDate && logs.hours && logs.description) {
      console.log(logs);
      dispatch(allActions.CreateWorkLog(logs, history));
    }
  };

  return (
    <div
      className="modal fade closeModal"
      id="logModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Log
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form name="form" autoComplete="off">
              <div className={`mb-3 ${styles.formGroup}`}>
                <input
                  type="date"
                  name="logDate"
                  className={"form-control"}
                  placeholder="date"
                  onChange={handleChange}
                  value={logs.logDate}
                />
              </div>
              <div className={`mb-3 ${styles.formGroup}`}>
                <input
                  type="number"
                  name="hours"
                  className="form-control"
                  placeholder="hours"
                  onChange={handleChange}
                  value={logs.hours}
                />
              </div>
              <div className={`mb-3 ${styles.formGroup}`}>
                <textarea
                  className="form-control"
                  placeholder="description"
                  name="description"
                  rows="5"
                  onChange={handleChange}
                  value={logs.description}
                ></textarea>
              </div>

              <div className="mb-5">
                <button onClick={handleSubmit} className="btn btn-primary">
                  add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLog;
