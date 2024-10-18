import { login } from './slices/auth';

export const restoreAuth = (store) => (next) => (action) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    store.dispatch(login({ token }));
  }
  return next(action);
};
