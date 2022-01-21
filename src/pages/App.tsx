import React, { FC } from 'react';

import s from './style/App.module.scss';

import { DogCard } from 'components/DogCard/DogCard';

export const App: FC = () => (
  <div className={s.wrapper}>
    <main className={s.page}>
      <h1>ALFA</h1>
      <DogCard />
    </main>
  </div>
);
