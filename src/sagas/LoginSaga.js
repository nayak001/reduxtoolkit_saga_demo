import { call, takeEvery, put } from "redux-saga/effects";
import { login_init, login_end } from "./../slices/LoginSlice";
import { authenticateUserApi } from "../services/LoginService";
function* authenticateUserAsync(action) {
  console.log("######### Here: ");
  try {
    const res = yield call(authenticateUserApi, action.payload);
    yield put(login_end(res.data));
  } catch (err) {
    console.log("#########: ", err.message);
  }
}
function* LoginSaga() {
  yield takeEvery(login_init, authenticateUserAsync);
}

export default LoginSaga;
