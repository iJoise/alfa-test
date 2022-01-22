import React, { useEffect } from 'react';

import s from './Error.module.scss';

import { useAppDispatch } from 'hook/useAppDispatch';
import { useAppSelector } from 'hook/useAppSelector';
import { setAppError, setAppStatus } from 'store/appSlice';

const showTime = 4000;

export const Error: React.FC = React.memo(() => {
  const errorMessage = useAppSelector(state => state.app.errorMessage);
  const status = useAppSelector(state => state.app.appStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setAppStatus('success'));
      dispatch(setAppError(null));
    }, showTime);
    return () => clearTimeout(timeout);
  }, [status, dispatch]);

  const errorClassName = `${s.error} ${status === 'error' && s.visible}`;

  return (
    <div className={errorClassName}>
      <span className={s.error__icon}>!</span>
      <span className={s.error__message}>{errorMessage || null}</span>
    </div>
  );
});
