import React, { FC } from 'react';

import s from './style/DogCard.module.scss';

import { DogsCardItem } from 'components/DogCard/components/DogsCardItem';
import { useFilteredDogs } from 'components/DogCard/hook/useFilteredDogs';
import { Preloader } from 'shared/Preloader/Preloader';
import com from 'styles/common.module.scss';

export const DogCard: FC = () => {
  const { filteredDogs, status } = useFilteredDogs();

  if (status === 'loading') return <Preloader />;

  return (
    <div className={com.container}>
      <h1 className={s.title}>Факты о собаках</h1>
      <div className={s.card}>
        {filteredDogs.map(el => (
          <DogsCardItem key={el.id} dogInfo={el} />
        ))}
      </div>
    </div>
  );
};
