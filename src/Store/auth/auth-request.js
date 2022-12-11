const { default: axios } = require("~/axios/axios");
export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", { ...data });
};
export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", { ...data });
};
export const requestAuthGetme = (token) => {
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
export const requestAuthRefreshToken = (token) => {
  console.log(token);
  if (!token) return;
  return axios.post("/token", {
    "Content-type": "Application/json",
    refreshToken: token,
  });
};
