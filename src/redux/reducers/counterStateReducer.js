import { createReducer } from '@reduxjs/toolkit';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  GET_REWARD_FULLFILLED,
} from '../actions';

const initialState = {
  counter: 0,
  reward: 0,
  decrementButtonDisabled: true,
};

const counterStateReducer = createReducer(initialState, builder => {
  builder
    .addCase(INCREMENT_COUNTER.type, (state, action) => {
      state.counter++;
      state.decrementButtonDisabled = state.counter > 0 ? false : true;
    })
    .addCase(DECREMENT_COUNTER.type, (state, action) => {
      state.counter--;
      state.decrementButtonDisabled = state.counter > 0 ? false : true;
    })
    .addCase(GET_REWARD_FULLFILLED.type, (state, action) => {
      state.reward = action?.payload?.reward;
    });
});

export default counterStateReducer;
