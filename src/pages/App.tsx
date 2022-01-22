import React, { FC } from 'react';

import s from './style/App.module.scss';

import { DogCard } from 'components/DogCard';
import { Header } from 'components/Header';
import { Error } from 'shared/Error';

export const App: FC = () => (
  <div className={s.wrapper}>
    <main className={s.page}>
      <Header />
      <DogCard />
    </main>
    <Error />
  </div>
);
