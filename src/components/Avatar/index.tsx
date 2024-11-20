import React from 'react';
import * as S from './styles';
import { TextElement } from '../TextElement';
interface AvatarProps {
  firstName: string;
  lastName: string;
}

export const Avatar: React.FC<AvatarProps> = ({ firstName, lastName }) => {
  const initials = `${firstName[0] || ''}${lastName[0] || ''}`;

  return (
    <S.AvatarContainer>
      <TextElement text={initials.toUpperCase()} />
    </S.AvatarContainer>
  );
};
