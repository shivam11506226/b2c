import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../Auth/logIn/actionType";
import userApi from "../API/api";
import {
  fetchLogIn,
  loginAction,
  userLogInAction,
} from "../Auth/logIn/actionLogin";

function* userLoginRequest(action) {
  try {
    const user = yield call(userApi.userB2CLogin, action.payload);
    yield put(fetchLogIn(user));
  } catch (error) {
    console.log("Login Error",error?.response?.data)
    var userNotFound;
    if(error?.response?.data?.message == 'User Not found.'){
       userNotFound = true
    }
    
    yield put(fetchLogIn({userNotFound}));
  }
}

export function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, userLoginRequest);
}
