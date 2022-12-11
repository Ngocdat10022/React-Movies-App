import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: undefined,
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
  },
});
export const {
  authResgiter,
  authLogin,
  authUpdateUser,
  authGetMe,
  authRefreshToken,
} = authSlice.actions;
export default authSlice.reducer;
