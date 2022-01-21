import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { appReducer } from 'store/appSlice';
import { dogsReducer } from 'store/dogsSlice';

const rootReducer = combineReducers({
  app: appReducer,
  dogs: dogsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, Action<string>>;
