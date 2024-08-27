import { configureStore } from '@reduxjs/toolkit';
import gatherFeildReducer from './gatherFeildSlice';

export const store = configureStore({
  reducer: {
    gatherFeild: gatherFeildReducer,
  },
});