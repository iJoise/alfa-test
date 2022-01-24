import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunkType } from '../store';

import { AppInitialStateType, AppStatusType } from './type/app-types';

import { Nullable } from 'types';

const appInitialState: AppInitialStateType = {
  errorMessage: null,
  appStatus: 'success',
};

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setAppStatus: (state, action: PayloadAction<AppStatusType>) => {
      state.appStatus = action.payload;
    },
    setAppError: (state, action: PayloadAction<Nullable<string>>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
export const { setAppStatus, setAppError } = appSlice.actions;

export const handleAppError =
  (err: Nullable<string>): AppThunkType =>
  (dispatch, getState) => {
    const { errorMessage, appStatus } = getState().app;
    if (!errorMessage && appStatus !== 'error') {
      dispatch(setAppStatus('error'));
      dispatch(setAppError(err || 'Some error occurred'));
    }
  };
