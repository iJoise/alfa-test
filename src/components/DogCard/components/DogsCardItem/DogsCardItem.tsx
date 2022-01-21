import React, { FC, useState } from 'react';

import s from './style/DogsCard.module.scss';

import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import loader from 'assets/icons/loader.svg';
import { Accordion } from 'shared/Accordion';
import { Paper } from 'shared/Paper/Paper';
import { DogsType } from 'store/dogsSlice/dogs-type';

type DogsCardPropsType = {
  dogInfo: DogsType;
};

export const DogsCardItem: FC<DogsCardPropsType> = ({ dogInfo }) => {
  const [load, setLoad] = useState(false);
  const heartColor = dogInfo.liked ? '#E83038' : '#999';

  const handleImageLoaded = () => setLoad(true);

  return (
    <article className={s.cardItem}>
      <Paper>
        <h4 className={s.cardItem__name}>{dogInfo.name}</h4>
        <figure className={s.cardItem__image}>
          <img
            src={load ? dogInfo.image.url : loader}
            alt={dogInfo.name}
            onLoad={handleImageLoaded}
          />
        </figure>
        {load ? 'load' : 'unload'}
        <Accordion title="Подробные факты">
          <div>Lorem ipsum dolor.</div>
        </Accordion>
        <hr />
        <div className={s.cardItem__icon}>
          <Heart fill={heartColor} width={30} />
        </div>
      </Paper>
    </article>
  );
};
