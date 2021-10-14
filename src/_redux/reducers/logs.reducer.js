export const createLogs = (state = {}, action) => {
  switch (action.type) {
    case "LOG_USER":
      return {
        ...state,
      };
    case "LOG_USER_SUCCESS":
      return {
        ...state,
        logsData: action.payload,
      };

    case "LOG_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getLogs = (state = {}, action) => {
  switch (action.type) {
    case "LOG_GET":
      return {
        ...state,
      };
    case "LOG_GET_SUCCESS":
      return {
        ...state,
        getLogs: action.payload,
      };

    case "LOG_GET_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateWorkingHours = (state = {}, action) => {
  switch (action.type) {
    case "HOURS_UPDATE_SUCCESS":
      return {
        ...state,
        preffered_Hours: action.payload,
      };

    case "HOURS_ADD_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSingleLog = (state = {}, action) => {
  switch (action.type) {
    case "GET_SINGLE_LOG":
      return {
        ...state,
        singleLog: action.payload,
      };
    default:
      return state;
  }
};
