import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    login: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});