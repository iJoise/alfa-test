import { Dogs } from 'types';

export type DogsType = Dogs & {
  liked: boolean;
};

export type DogsInitialStateType = {
  dogs: DogsType[];
};
