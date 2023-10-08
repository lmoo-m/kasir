const response = (status, message, data) => {
  if (data) {
    return {
      status: status,
      msg: message,
      data: data,
    };
  }
  return {
    status: status,
    msg: message,
  };
};

export default response;
