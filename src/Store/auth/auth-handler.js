import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import {
  requestAuthRegister,
  requestAuthLogin,
  requestAuthGetme,
  requestAuthRefreshToken,
} from "./auth-request";
import { logout, saveToken } from "~/utils/auth";
import { authUpdateUser } from "./auth-slice";
import Swal from "sweetalert2";
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
    console.log("dataLOgin", res);
    if (res.status === 200) {
      // alert("login successFully");
      toast.success("login Successfully", {
        position: "top-right",
      });
      if (res.data.accessToken && res.data.refreshToken) {
        saveToken(res.data.accessToken, res.data.refreshToken);
        yield call(handleRequestAuthGetme, { payload: res.data.accessToken });
      }
    } else if (res.status === 401) {
      toast.error("login failed", {
        position: "top-right",
      });
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

  // Swal.fire({
  //   title: "you can Logout?",
  //   text: "You won't be able to revert this!",
  //   icon: "question",
  //   showCancelButton: true,
  //   confirmButtonColor: "#3085d6",
  //   cancelButtonColor: "#d33",
  //   confirmButtonText: "ok",
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //   }
  // });
}
export {
  handleRequestAuthResgiter,
  handleRequestAuthLogin,
  handleRequestAuthGetme,
  handleRequestAuthRefreshToken,
  handleLogout,
};
