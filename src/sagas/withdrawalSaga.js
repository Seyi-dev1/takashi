import { takeLatest, call, all } from "redux-saga/effects";
import { handleWithdrawals } from "../firebase/firebase.utils";

export function* withdrawalHandler({ payload }) {
  const { user } = payload;

  try {
    yield call(handleWithdrawals, user, payload);
    console.log("done");
  } catch (error) {
    console.log(error);
  }
}

export function* onWithdrawalStart() {
  yield takeLatest("withdrawal/withdrawalStart", withdrawalHandler);
}
export function* withdrawalSagas() {
  yield all([call(onWithdrawalStart)]);
}
