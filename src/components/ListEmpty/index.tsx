import React from 'react';
import * as S from './styles';
import { TextElement } from '../TextElement';

export const ListEmpty: React.FC = () => {
  return (
    <S.ListEmptyContainer>
      <TextElement text='Nenhum resultado encontrado!' variant='h2' />
    </S.ListEmptyContainer>
  );
};
