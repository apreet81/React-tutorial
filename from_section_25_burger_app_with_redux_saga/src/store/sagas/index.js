import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  logoutSaga,
  checkAuthTimeOutSaga,
  authUserSaga,
  authCheckStateSaga,
} from "./auth";

import { initIngredientsSaga } from "./burgerBuilder";

import { fetchOrdersSaga, purchaseBurgerSaga } from "./order";

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeOutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga),
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
  // takeLatest executes only the latest call for specified action type, skipping all previous
  yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);

  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
