import React from 'react';

import { ReactComponent as Loader } from 'assets/icons/loader.svg';
import s from 'shared/Preloader/style/Preloader.module.scss';

export const Preloader = () => (
  <div className={s.fetching}>
    <Loader className={s.fetching__loader} width={200} height={200} />
    <div className={s.fetching__text}>Загрузка...</div>
  </div>
);
