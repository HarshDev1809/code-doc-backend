const STATUS = {
    FAILURE: "failure",
    SUCCESSFUL: "successful",
    SERVER_ERROR:"server error"
  };
  
  const successResponse = (message, data = null) => ({
    status: STATUS.SUCCESSFUL,
    message : message,
    ...(data ? data : data),
  });
  
  const failureResponse = (message, error = null) => ({
    status: STATUS.FAILURE,
    message : message,
    ...(error ? error : error),
  });

  const serverErrorResponse = (error = null)=>({
    status: STATUS.SERVER_ERROR,
    message : "Internal Server Error",
    ...(error ? error : error),
  })
  
  module.exports = {
    successResponse,
    failureResponse,
    serverErrorResponse
  };
  