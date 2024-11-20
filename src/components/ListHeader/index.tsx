import React from 'react';
import * as S from './styles';
import { TextElement } from '../TextElement';
import { CircleIcon } from '../../../assets/icons';

export const ListHeader: React.FC = () => {
  return (
    <S.ListHeaderContainer>
      <S.TextWrapper>
        <TextElement text='Foto' variant='h2' />

        <TextElement text='Nome' variant='h2' />
      </S.TextWrapper>

      <CircleIcon />
    </S.ListHeaderContainer>
  );
};
