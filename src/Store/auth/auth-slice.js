import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  accessToken: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authResgiter: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    authLogin: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    authUpdateUser: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    },
    authGetMe: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    authRefreshToken: (state, action) => {
      return {};
    },
    authLogout: (state, action) => {},
  },
});
export const {
  authResgiter,
  authLogin,
  authUpdateUser,
  authGetMe,
  authRefreshToken,
  authLogout,
} = authSlice.actions;
export default authSlice.reducer;
