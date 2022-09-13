import api from "./../roots/api";

export const authenticateUserApi = async (userObj) => await api.post("/authenticateuser", userObj);
