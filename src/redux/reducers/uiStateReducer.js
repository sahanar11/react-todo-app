import { createReducer } from '@reduxjs/toolkit';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions';

const initialState = {
  incrementedAtleastOnce: 'No',
  decrementedAtleastOnce: 'No',
};

const uiStateReducer = createReducer(initialState, builder => {
  builder
    .addCase(INCREMENT_COUNTER.type, (state, action) => {
      state.incrementedAtleastOnce = 'Yes';
    })
    .addCase(DECREMENT_COUNTER.type, (state, action) => {
      state.decrementedAtleastOnce = 'Yes';
    });
});

export default uiStateReducer;
