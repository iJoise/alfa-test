import React, { FC } from 'react';

import s from './style/Paper.module.scss';

import { PaperPropsType } from 'shared/Paper/type';

export const Paper: FC<PaperPropsType> = ({ children, className }) => (
  <fieldset className={`${s.paper} ${className || ''}`}>{children}</fieldset>
);
