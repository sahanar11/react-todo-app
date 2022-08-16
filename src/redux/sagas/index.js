// root saga
import { all, fork } from 'redux-saga/effects';

import RewardSaga from './rewardSaga';

export default function* rootSaga() {
  yield all([
    // sagas
    fork(RewardSaga.watchForIncrementCounter),
  ]);
}
