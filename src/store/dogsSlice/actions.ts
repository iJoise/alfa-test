import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { DogsService } from 'api/service/dogs-service';
import { normalizedDataForDogs } from 'dto';
import { handleAppError, setAppStatus } from 'store/appSlice';
import { setDogs } from 'store/dogsSlice/index';
import { AppDispatch } from 'store/store';

export const getDogs = createAsyncThunk(
  'auth/checkAuth',
  async (limit: number, { dispatch }: { dispatch: AppDispatch }) => {
    try {
      dispatch(setAppStatus('loading'));
      const { data } = await DogsService.getDogs(limit);
      const normalizedData = normalizedDataForDogs(data);
      dispatch(setDogs(normalizedData));
      dispatch(setAppStatus('success'));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        dispatch(handleAppError(err.response?.data.message));
      }
    }
  },
);
