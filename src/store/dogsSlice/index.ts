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
    setLiked(state, action: PayloadAction<number>) {
      const index = state.dogs.findIndex(dog => dog.id === action.payload);
      state.dogs[index].liked = !state.dogs[index].liked;
    },
    deleteDogCard(state, action: PayloadAction<number>) {
      state.dogs = state.dogs.filter(dog => dog.id !== action.payload);
    },
  },
});

export const dogsReducer = dogsSlice.reducer;
export const { setDogs, setLiked, deleteDogCard } = dogsSlice.actions;
