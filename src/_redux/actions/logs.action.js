import allActions from ".";
import { authHeader } from "../../_helpers/auth-header";
import { closeModal } from "../../_helpers/Modal";

export const CreateWorkLog = (log) => async (dispatch) => {
  dispatch({ type: "LOG_ADD" });
  try {
    let loginId = JSON.parse(localStorage.getItem("loginId"));
    let userLogid = localStorage.getItem("AdminLogId");

    userLogid ? (loginId = userLogid) : (loginId = loginId);

    let url =
      log.id === 0
        ? "http://34.210.129.167/api/work-logs"
        : `http://34.210.129.167/api/user/${loginId}/work-logs/${log.id}`;
    const response = await fetch(url, {
      method: log.id === 0 ? "POST" : "PUT",
      headers: authHeader(),
      body: JSON.stringify(log),
    });
    const workLog = await response.json();

    dispatch({
      type: "LOG_ADD_SUCCESS",
      payload: { workLog: workLog },
    });
    if (response.status === 201 || response.status === 200) {
      closeModal();
      dispatch(allActions.GetWorkLog());
    }
  } catch (error) {
    dispatch({
      type: "LOG_ADD_FAILURE",
      payload: error,
    });
  }
};

export const GetWorkLog =
  (pageNumber, startDate, endDate) => async (dispatch) => {
    let id = localStorage.getItem("loginId");
    let userLogid = localStorage.getItem("AdminLogId");
    userLogid ? (id = userLogid) : (id = id);

    // console.log(id);
    // console.log(userLogid);
    dispatch({ type: "LOG_GET" });
    try {
      let url =
        +pageNumber !== 0
          ? `http://34.210.129.167/api/user/${id}/work-logs?page=${pageNumber}`
          : `http://34.210.129.167/api/work-logs/${startDate}/${endDate}`;
      const response = await fetch(url, {
        method: "GET",
        headers: authHeader(),
      });
      const getLog = await response.json();
      if (+pageNumber === 0) {
        const data = {
          success: getLog.success,
          workLogs: {
            data: [...getLog.workLogs],
          },
        };

        dispatch({
          type: "LOG_GET_SUCCESS",
          payload: { getLog: data },
        });
      } else {
        dispatch({
          type: "LOG_GET_SUCCESS",
          payload: { getLog: getLog },
        });
      }
    } catch (error) {
      dispatch({
        type: "LOG_GET_FAILURE",
        payload: error,
      });
    }
  };

export const UpdateHours = (workingHours) => async (dispatch) => {
  console.log(workingHours);
  try {
    let loginId = JSON.parse(localStorage.getItem("loginId"));
    let url = `http://34.210.129.167/api/users/${loginId}/preferred-working-hours`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: authHeader(),
      body: JSON.stringify({ workingHours: workingHours }),
    });
    const hoursResponse = await response.json();
    console.log(JSON.parse(workingHours));
    localStorage.setItem("preffered_hours", JSON.stringify(workingHours));
    console.log(hoursResponse);
    dispatch({
      type: "HOURS_UPDATE_SUCCESS",
      payload: { workingHours: workingHours },
    });
    // localStorage.setItem("workingHours", JSON.stringify(workingHours));
  } catch (error) {
    dispatch({
      type: "HOURS_ADD_FAILURE",
      payload: error,
    });
  }
};

export const GetSingleLog = (log) => {
  let isUpdated = true;
  return {
    type: "GET_SINGLE_LOG",
    payload: { isUpdated: isUpdated, log: log },
  };
};
