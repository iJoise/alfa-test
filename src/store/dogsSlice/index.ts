import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DogsInitialStateType, DogsType } from 'store/dogsSlice/dogs-type';

const dogsInitialState: DogsInitialStateType = {
  dogs: [],
};

const dogsSlice = createSlice({
  name: 'dogs',
  initialState: dogsInitialState,
  reducers: {
    setDogs(state, action: PayloadAction<DogsType[]>) {
      state.dogs = action.payload;
    },
  },
});

export const dogsReducer = dogsSlice.reducer;
export const { setDogs } = dogsSlice.actions;
