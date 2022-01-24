import { DogsType } from 'store/dogsSlice/type/dogs-type';
import { Dogs } from 'types';

export const normalizedDataForDogs = (data: Dogs[]): DogsType[] =>
  data.map(dog => ({ ...dog, liked: false }));
