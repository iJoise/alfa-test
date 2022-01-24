import React, { FC, useState } from 'react';

import s from './style/DogsCard.module.scss';

import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import loader from 'assets/icons/loader.svg';
import { ReactComponent as Trash } from 'assets/icons/trash.svg';
import { DogsCardPropsType } from 'components/DogCard/components/DogsCardItem/type';
import { useAppDispatch } from 'hook/useAppDispatch';
import { Accordion } from 'shared/Accordion';
import { Paper } from 'shared/Paper/Paper';
import { deleteDogCard, setLiked } from 'store/dogsSlice';

export const DogsCardItem: FC<DogsCardPropsType> = React.memo(({ dogInfo }) => {
  const [load, setLoad] = useState(false);
  const dispatch = useAppDispatch();

  const heartColor = dogInfo.liked ? '#E83038' : '#999';

  return (
    <article className={s.cardItem}>
      <Paper>
        <h4 className={s.cardItem__name}>{dogInfo.name}</h4>
        <figure className={s.cardItem__image}>
          <img
            src={load ? dogInfo.image.url : loader}
            alt={dogInfo.name}
            onLoad={() => setLoad(true)}
          />
        </figure>
        <Accordion title="Подробные факты">
          <dl>
            <dt>Продолжительность жизни</dt>
            <dd>{dogInfo.life_span}</dd>
            <dt>Темперамент</dt>
            <dd>{dogInfo.temperament}</dd>
            <dt>Вес</dt>
            <dd>{dogInfo.weight.metric}</dd>
            <dt>Рост</dt>
            <dd>{dogInfo.height.metric}</dd>
          </dl>
        </Accordion>
        <hr />
        <div className={s.cardItem__icon}>
          <Trash
            color="#999"
            width={30}
            height={30}
            onClick={() => dispatch(deleteDogCard(dogInfo.id))}
          />
          <Heart
            className={s.hart}
            fill={heartColor}
            width={30}
            height={30}
            onClick={() => dispatch(setLiked(dogInfo.id))}
          />
        </div>
      </Paper>
    </article>
  );
});
