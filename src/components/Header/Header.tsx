import React, { FC } from 'react';

import s from './style/Header.module.scss';

import { useAppDispatch } from 'hook/useAppDispatch';
import { useAppSelector } from 'hook/useAppSelector';
import { setFilteringByLikes } from 'store/dogsSlice';
import com from 'styles/common.module.scss';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(state => state.dogs);
  const btnName = filter === 'liked' ? 'Показать всех' : 'Понравившиеся';

  return (
    <header className={s.header}>
      <div className={com.container}>
        <button
          type="button"
          onClick={() =>
            dispatch(setFilteringByLikes(filter === 'all' ? 'liked' : 'all'))
          }
        >
          {btnName}
        </button>
      </div>
    </header>
  );
};
