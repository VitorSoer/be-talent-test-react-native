import React from 'react';
import * as S from './styles';
import { Avatar } from '../Avatar';
import { Notification } from '../Notification';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <Avatar firstName='Carlos' lastName='Gil' />
      <Notification notificationsCount='02' />
    </S.HeaderContainer>
  );
};
