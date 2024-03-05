const apiCall = (id, name, event, authBy) => {
  const reqBody = {
    id,
    name,
    event,
    authBy,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  };

  fetch("/api/verify", requestOptions);
};

export default apiCall;
