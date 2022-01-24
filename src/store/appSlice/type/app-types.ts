import { Nullable } from 'types';

export type AppStatusType = 'success' | 'loading' | 'error';

export type AppInitialStateType = {
  errorMessage: Nullable<string>;
  appStatus: AppStatusType;
};
