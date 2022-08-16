import { takeLatest, select, call, put } from 'redux-saga/effects';
import getRewardByCounterValue from '../../services/getRewardByCounterValue';
import { GET_REWARD_FULLFILLED, INCREMENT_COUNTER } from '../actions';

export function* handleIncrementCounter(action) {
  try {
    const counter = yield select(reduxState => reduxState.counterState.counter);
    const rewardResponse = yield call(getRewardByCounterValue, counter);
    yield put(GET_REWARD_FULLFILLED({ reward: rewardResponse.data }));
  } catch (err) {
    console.error('Error in saga', err);
  }
}

const RewardSaga = {
  *watchForIncrementCounter() {
    yield takeLatest(INCREMENT_COUNTER.type, handleIncrementCounter);
  },
};

export default RewardSaga;
