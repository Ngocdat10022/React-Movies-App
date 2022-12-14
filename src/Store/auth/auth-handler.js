import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import {
  requestAuthRegister,
  requestAuthLogin,
  requestAuthGetme,
  requestAuthRefreshToken,
} from "./auth-request";
import "react-toastify/dist/ReactToastify.css";
import { logout, saveToken } from "~/utils/auth";
import { authUpdateUser } from "./auth-slice";
function* handleRequestAuthResgiter(action) {
  try {
    const { payload } = action;
    const res = yield call(requestAuthRegister, payload);
    if (res.status === 201) {
      // alert("Register successFully");
      toast.success("Register Successfully", {
        position: "top-right",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleRequestAuthGetme(action) {
  try {
    const { payload } = action;
    const res = yield call(requestAuthGetme, payload);
    console.log(res);
    if (res.status === 200) {
      yield put(
        authUpdateUser({
          user: res.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleRequestAuthLogin(action) {
  try {
    const { payload } = action;
    const res = yield call(requestAuthLogin, payload);
    if (res.data.accessToken && res.data.refreshToken) {
      saveToken(res.data.accessToken, res.data.refreshToken);
      yield call(handleRequestAuthGetme, { payload: res.data.accessToken });
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleRequestAuthRefreshToken({ payload }) {
  try {
    const res = yield call(requestAuthRefreshToken, payload);
    if (res.data) {
      saveToken(res.data.accessToken, res.data.refreshToken);
      yield handleRequestAuthGetme({
        payload: res.data.accessToken,
      });
    }
  } catch (error) {}
}
function* handleLogout() {
  yield put(authUpdateUser({}));
  logout();
}
export {
  handleRequestAuthResgiter,
  handleRequestAuthLogin,
  handleRequestAuthGetme,
  handleRequestAuthRefreshToken,
  handleLogout,
};
