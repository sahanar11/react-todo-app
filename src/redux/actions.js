import { createAction } from '@reduxjs/toolkit';

export const INCREMENT_COUNTER = createAction('counter/increment');
export const DECREMENT_COUNTER = createAction('counter/decrement');
export const GET_REWARD_FULLFILLED = createAction(
  'counter/getReward/fullfilled',
);
