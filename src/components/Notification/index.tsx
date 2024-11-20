import React from 'react';
import * as S from './styles';
import { NotificationIcon } from '../../../assets/icons';

interface INotification {
  notificationsCount: string;
}

export const Notification: React.FC<INotification> = ({
  notificationsCount,
}) => (
  <S.IconContainer>
    <NotificationIcon />

    {notificationsCount && (
      <S.BadgeContainer>
        <S.BadgeText>{notificationsCount}</S.BadgeText>
      </S.BadgeContainer>
    )}
  </S.IconContainer>
);
