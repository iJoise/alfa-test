import React, { FC, useEffect } from 'react';

import s from './style/DogCard.module.scss';

import { DogsCardItem } from 'components/DogCard/components/DogsCardItem';
import { useAppDispatch } from 'hook/useAppDispatch';
import { useAppSelector } from 'hook/useAppSelector';
import { getDogs } from 'store/dogsSlice/actions';
import com from 'styles/common.module.scss';

const limitToRequest = 15;

export const DogCard: FC = () => {
  const dispatch = useAppDispatch();
  const { dogs } = useAppSelector(state => state.dogs);

  useEffect(() => {
    dispatch(getDogs(limitToRequest));
  }, []);
  console.log(dogs);
  return (
    <div className={com.container}>
      <h1 className={s.title}>Факты о собаках</h1>
      <div className={s.card}>
        {dogs.map(el => (
          <DogsCardItem key={el.id} dogInfo={el} />
        ))}
      </div>
    </div>
  );
};
