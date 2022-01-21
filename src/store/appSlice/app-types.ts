import { AppStatusType, Nullable } from 'types';

export type AppInitialStateType = {
  errorMessage: Nullable<string>;
  appStatus: AppStatusType;
};
