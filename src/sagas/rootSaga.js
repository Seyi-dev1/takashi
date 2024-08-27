import { all, call } from "redux-saga/effects";
import { userSagas } from "./userSagas";
import { paymentSagas } from "./paymentSaga";
import { withdrawalSagas } from "./withdrawalSaga";

export default function* rootSaga() {
  yield all([call(userSagas), call(paymentSagas), call(withdrawalSagas)]);
}
