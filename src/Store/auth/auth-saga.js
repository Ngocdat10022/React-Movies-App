import { takeEvery } from "redux-saga/effects";
import { authResgiter, authLogin, authRefreshToken } from "./auth-slice";
import {
  handleRequestAuthResgiter,
  handleRequestAuthLogin,
  handleRequestAuthRefreshToken,
} from "./auth-handler";
export default function* authSaga() {
  yield takeEvery(authResgiter.type, handleRequestAuthResgiter);
  yield takeEvery(authLogin.type, handleRequestAuthLogin);
  yield takeEvery(authRefreshToken.type, handleRequestAuthRefreshToken);
}
