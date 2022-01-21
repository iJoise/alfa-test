import React, { useState, useRef, FC } from 'react';

import s from './style/Accordion.module.scss';

import { ReactComponent as Arrow } from 'assets/icons/arrow-black.svg';
import { AccordionPropsType } from 'shared/Accordion/type';

export const Accordion: FC<AccordionPropsType> = ({ title, children }) => {
  const [isActive, setIsActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('');

  const content = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setIsActive(isActive === '' ? s.active : '');
    setHeight(isActive === s.active ? '0px' : `${content.current?.scrollHeight}px`);
    setRotate(isActive === s.active ? '' : s.rotate);
  }

  return (
    <div className={s.accordion}>
      <button type="button" className={s.accordion__button} onClick={toggleAccordion}>
        <p className={s.accordion__title}>{title}</p>
        <Arrow className={`${s.accordion__icon} ${rotate}`} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={s.accordion__content}
      >
        <div className={s.accordion__text}>{children}</div>
      </div>
    </div>
  );
};
