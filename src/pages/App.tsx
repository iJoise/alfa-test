import React, { FC } from 'react';

import s from './style/App.module.scss';

import { DogCard } from 'components/DogCard';

export const App: FC = () => (
  <div className={s.wrapper}>
    <main className={s.page}>
      <DogCard />
    </main>
  </div>
);
