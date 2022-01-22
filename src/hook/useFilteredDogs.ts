import { useEffect } from 'react';

import { useAppDispatch } from 'hook/useAppDispatch';
import { useAppSelector } from 'hook/useAppSelector';
import { getDogs } from 'store/dogsSlice/actions';

const limitToRequest = 15;

export const useFilteredDogs = () => {
  const dispatch = useAppDispatch();
  const { dogs } = useAppSelector(state => state.dogs);
  const { filter } = useAppSelector(state => state.dogs);
  const { appStatus } = useAppSelector(state => state.app);

  useEffect(() => {
    dispatch(getDogs(limitToRequest));
  }, []);

  const filteredDogs = () => {
    switch (filter) {
      case 'liked':
        return dogs.filter(dog => dog.liked);
      default:
        return dogs;
    }
  };

  return { filteredDogs: filteredDogs(), status: appStatus };
};
