import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/auth';
import { useCallback } from 'react';

const useAuth = () => {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const userName = useSelector((state) => state.login.data?.fullName);

  useEffect(() => {
    const checkAuth = async () => {
      const token = sessionStorage.getItem('token');
      setIsAuth(!!token);
      setIsCheckingAuth(false);
    };
    checkAuth();
  }, []);

  const onClickLogout = useCallback(() => {
    if (window.confirm('Вы действительно хотите выйти из аккаунта?')) {
      dispatch(logout());
      sessionStorage.removeItem('token');
      setIsAuth(false);
      window.location.href = '/';
    }
  }, [dispatch]);
  
  return useMemo(() => ({
    isAuth,
    isCheckingAuth,
    userName,
    onClickLogout
  }), [isAuth, isCheckingAuth, userName, onClickLogout]);
};

export default useAuth;