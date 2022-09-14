import { call, takeEvery, put } from "redux-saga/effects";
import { login_init, login_end } from "./../slices/LoginSlice";
import { authenticateUserApi } from "../services/LoginService";
function* authenticateUserAsync(action) {
  console.log("######### Here: ");
  try {
    const res = yield call(authenticateUserApi, action.payload);
    console.log("#########res.data: ", res.data);
    yield put(login_end(res.data));

    // dummy
    /*
      status:"active",
      success:"success",
      userid:"admin@thinkzone.in",
      username:"ThinkZone Admin",
      usertype:"admin"
    */
  } catch (err) {
    console.log("######### error: ", err.message);
  }
}
function* LoginSaga() {
  yield takeEvery(login_init, authenticateUserAsync);
}

export default LoginSaga;
